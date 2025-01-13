# Development Environment Setup

This document outlines how to set up your development environment to work with Terraform, LocalStack, and Docker. These tools are crucial for building, testing, and deploying cloud infrastructure in a local environment.

## Prerequisites

Before you begin, ensure you have the following:

- **A Code Editor:** (e.g., VS Code, Sublime Text, Atom)
- **Git:** [Download Git](https://git-scm.com/downloads) - For version control.

## Required Tools

### 1. Docker

Docker is used to run LocalStack, a local cloud environment.

#### Installation

- **Mac:** [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop)
- **Windows:** [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)
- **Linux:** Follow the instructions for your specific distribution on the [Docker website](https://docs.docker.com/engine/install/)

#### Verification

After installing, open a terminal and run:

```bash
docker --version
docker compose version
```

### 2. Terraform

Terraform is used to define and deploy infrastructure as code.

#### Installation

- **Mac:** [Homebrew](https://brew.sh/) can be used to install it
  ```bash
  brew install terraform
  ```
- **Windows:** Download the appropriate binary from the [Terraform downloads](https://www.terraform.io/downloads) page. Add the directory containing the binary to your PATH environment variable.
- **Linux:** Similar to Windows, download the binary from the [Terraform downloads](https://www.terraform.io/downloads) page and add it to your PATH.

#### Verification

Open a terminal and run:

```bash
terraform --version
```

You should see the installed Terraform version.

### 3. LocalStack

LocalStack provides a local cloud environment that mimics AWS. We'll use Docker to run LocalStack.

#### Installation

You do not need to install LocalStack directly as you will use Docker to run it.
We will provide docker-compose.yaml in next section.

#### Verification

After setting up your environment you will be able to use the Localstack by checking the container log.

## Setup

### 1. Docker Compose

Create a `docker-compose.yaml` file in the root directory of your project:

```yaml
version: '3.9'
services:
  localstack:
    image: localstack/localstack:latest
    ports:
      - '4566:4566' # main port
      - '4510-4599:4510-4599' # range of ports for Lambda etc.
    environment:
      - DEBUG=1
      - SERVICES=s3,lambda,iam
      - LOCALSTACK_API_KEY=${LOCALSTACK_API_KEY}
    volumes:
      - '${TMPDIR:-/tmp}/localstack:/tmp/localstack'
      - '/var/run/docker.sock:/var/run/docker.sock'
```

This file configures LocalStack with necessary settings:

- `image`: the localstack docker image used
- `ports`: exposes LocalStack's ports
- `environment`: configure LocalStack with different settings
- `volumes`: mount local folder to docker

_Note: If you have LOCALSTACK_API_KEY, you can add it to the environment variable to use some of the advanced features like Cloud pod._

### 2. Running LocalStack

In your project directory, run:

```bash
docker-compose up -d
```

This command starts LocalStack in detached mode. Wait for a few moments for the container to initialize. To follow the log, you can run:

```bash
docker-compose logs -f localstack
```

### 3. Terraform Configuration

To interact with LocalStack, you will need to configure the AWS provider in terraform.

Create a file in the project root called `main.tf`.

```terraform
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  access_key                  = "test"
  secret_key                  = "test"
  region                      = "us-east-1"
  skip_credentials_validation = true
  skip_requesting_account_id  = true
  skip_metadata_api_check     = true
  s3_force_path_style         = true
  endpoints {
    s3 = "http://localhost:4566"
    lambda = "http://localhost:4566"
    iam = "http://localhost:4566"
  }
}
```

This code sets up the AWS provider to interact with localstack by skipping all validation and changing the endpoint.

### 4. Initializing Terraform

In your project directory, run:

```bash
terraform init
```

This will initialize your Terraform project and download the necessary plugins.

## Using the Environment

Now you can start creating terraform files in your project to manage your local infrastructure. You can refer to official terraform documentation or AWS documentation to start your infrastructure implementation.

### Example Usage

Here's a simple example that create a s3 bucket in your localstack environement

Create a file named `s3.tf`

```terraform
resource "aws_s3_bucket" "example" {
  bucket = "my-example-bucket"
}
```

Now you can run the following code to create the s3 bucket.

```bash
terraform apply
```

_Note: Remember to destroy the s3 bucket at the end of the project with `terraform destroy` command._

## Troubleshooting

- **LocalStack doesn't start:** Check the Docker logs for errors. Ensure there are no port conflicts.
- **Terraform errors:** Double-check your Terraform configurations, including the provider settings.
- **API calls fail:** Verify that LocalStack is running and that your endpoint configurations are correct.
- **Docker not accessible** : Ensure docker is running and user have the appropriate permission to run the command.

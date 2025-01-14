provider "aws" {
  access_key = "test"  # LocalStack default credentials
  secret_key = "test"
  region     = "us-east-1"
  endpoints {
    ecs = "http://localhost:4566"
    ecr = "http://localhost:4566"
    s3  = "http://localhost:4566"
  }
}

resource "aws_ecr_repository" "my_repo" {
  name = "my-docker-repo"
}

resource "aws_ecs_cluster" "my_cluster" {
  name = "my-cluster"
}

resource "aws_ecs_task_definition" "my_task" {
  family                   = "my-task"
  execution_role_arn       = "arn:aws:iam::000000000000:role/ecsTaskExecutionRole"
  task_role_arn            = "arn:aws:iam::000000000000:role/ecsTaskExecutionRole"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  
  container_definitions = jsonencode([{
    name      = "my-container"
    image     = "backend"  # Replace with your image
    essential = true
    memory    = 512
    cpu       = 256
    portMappings = [
      {
        containerPort = 80
        hostPort      = 80
        protocol      = "tcp"
      }
    ]
  }])
}

resource "aws_ecs_service" "my_service" {
  name            = "my-service"
  cluster         = aws_ecs_cluster.my_cluster.id
  task_definition = aws_ecs_task_definition.my_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  
  network_configuration {
    subnets          = ["subnet-12345"]
    assign_public_ip = true
  }
}

output "task_definition" {
  value = aws_ecs_task_definition.my_task.family
}

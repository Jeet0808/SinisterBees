FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install Node.js dependencies
COPY ./package.json ./package-lock.json ./
RUN npm install

# Install Python and dependencies
RUN apt-get update && apt-get install -y python3 python3-pip dos2unix

# Copy Python requirements and install
COPY requirements.txt .
RUN pip3 install --no-cache-dir --break-system-packages -r requirements.txt

# Copy all project files
COPY ./ ./

# Ensure all shell scripts have Linux-compatible line endings
RUN find . -name "*.sh" -exec dos2unix {} \;
RUN find . -name "*.sh" -exec "sed -i 's/\r//g'" {} \;

# Install frontend dependencies
WORKDIR /app/controllers/web/SinisterBeesFrontend
RUN npm install

# Return to the bin directory and ensure script is executable
WORKDIR /app/bin
CMD [ "./runProject.sh" ]

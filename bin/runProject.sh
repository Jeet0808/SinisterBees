#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1${NC}"; }
log_warn() { echo -e "${YELLOW}[WARN] $(date +'%Y-%m-%d %H:%M:%S') - $1${NC}"; }
log_error() { echo -e "${RED}[ERROR] $(date +'%Y-%m-%d %H:%M:%S') - $1${NC}"; }
log_success() { echo -e "${GREEN}[SUCCESS] $(date +'%Y-%m-%d %H:%M:%S') - $1${NC}"; }

declare -a backend_pids
declare -a frontend_pids
gotsigchld=false

check_node_installed() {
  if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js and try again."
    return 1
  fi
  log_success "Node.js is installed."
  return 0
}

check_backend_dependencies() {
  log_info "Checking backend npm dependencies..."
  cd ../
  if [ ! -f package.json ]; then
    log_error "Backend 'package.json' not found in current directory."
    return 1
  fi
  npm install --package-lock-only --no-audit --no-fund &>/dev/null
  if [ $? -ne 0 ]; then
    log_error "Backend npm dependencies check failed. Please run 'npm install' manually."
    return 1
  fi
  log_success "Backend npm dependencies are correct."
  return 0
}

check_frontend_dependencies() {
  log_info "Checking frontend npm dependencies..."
  echo $PWD
  cd ./app/controllers/web/SinisterBeesFrontend/ || {
      log_error "Failed to change directory to frontend path!"
      return 1
  }
  if [ ! -f package.json ]; then
    log_error "Frontend 'package.json' not found."
    cd ../../../../../
    return 1
  fi

  npm install --package-lock-only --no-audit --no-fund &>/dev/null
  if [ $? -ne 0 ]; then
      log_error "Frontend npm dependencies check failed. Please run 'npm install' manually."
      cd ../../../../../
      return 1
    fi

  log_success "Frontend npm dependencies are correct."
  cd ../../../../
  return 0
}

start_backend() {
  log_info "Starting backend server..."
  export NODE_ENV="production"
  echo $PWD
  npm run nodemon ./src/Backend.js &
  backend_pids+=("$!")
  if [ $? -ne 0 ]; then
      log_error "Failed to start backend server!"
      return 1
  fi
  log_success "Backend server started with PID: ${backend_pids[-1]}"
  return 0
}

start_frontend() {
  log_info "Starting frontend dev server..."
  echo $PWD
  cd ./app/controllers/web/SinisterBeesFrontend/ || {
      log_error "Failed to change directory to frontend path!"
      return 1
  }
  npm run dev -- --clearScreen=false &
  frontend_pids+=("$!")
  if [ $? -ne 0 ]; then
      log_error "Failed to start frontend dev server!"
      cd ../../../../../
      return 1
  fi
  log_success "Frontend dev server started with PID: ${frontend_pids[-1]}"
  cd ../../../../../
  return 0
}

build_frontend(){
  log_info "Starting frontend build"
  echo $PWD
  # cd ./app/controllers/web/SinisterBeesFrontend/ || {
  #     log_error "Failed to change directory to frontend path!"
  #     return 1
  # }
  # npm run build -- --clearScreen=false &

}


cleanup() {
  if ! "$gotsigchld"; then
    gotsigchld=true
    if ((${#backend_pids[@]})) ; then
      log_info "Terminating backend processes..."
      kill "${backend_pids[@]}" 2> /dev/null
    fi
      if ((${#frontend_pids[@]})) ; then
        log_info "Terminating frontend processes..."
        kill "${frontend_pids[@]}" 2> /dev/null
      fi
     log_info "All subprocesses terminated"
  fi
}


trap 'cleanup' CHLD

log_info "Script started from: $PWD"

check_node_installed || {
    log_error "Node.js installation check failed. Exiting."
    exit 1
}

# Navigate to backend before executing command to avoid errors
cd "$(dirname "$0")"

check_backend_dependencies || {
    log_error "Backend dependency check failed. Exiting."
    exit 1
}


check_frontend_dependencies || {
    log_error "Frontend dependency check failed. Exiting."
    exit 1
}


start_backend || {
  log_error "Backend failed to start. Exiting."
  exit 1
}
build_frontend ||{
  log_info "forntend build failed"
}

start_frontend || {
  log_error "Frontend failed to start. Exiting."
  cleanup
  exit 1
}

log_info "Both backend and frontend servers have started."
log_info "Waiting for processes to finish or Ctrl+C to terminate."
set -m
wait
set +m

cleanup
log_info "Script finished."
exit 0
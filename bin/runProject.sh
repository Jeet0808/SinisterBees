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

start_backend() {
  log_info "Starting backend server..."
  export NODE_ENV="production"
  npm run nodemon ./src/Backend.js &
  backend_pids+=("$!")
  if [ $? -ne 0 ]; then
      log_error "Failed to start backend server!"
      return 1
  fi
  log_success "Backend server started with PID: ${backend_pids[-1]}"
  return 0
}

# --- Function to Start Frontend ---
start_frontend() {
  log_info "Starting frontend dev server..."
  cd ./app/controllers/web/SinisterBeesFrontend/ || {
      log_error "Failed to change directory to frontend path!"
      return 1
  }
  npm run dev -- --clearScreen=false &
  frontend_pids+=("$!")
  if [ $? -ne 0 ]; then
      log_error "Failed to start frontend dev server!"
      cd ../../../../../ #
      return 1
  fi
  log_success "Frontend dev server started with PID: ${frontend_pids[-1]}"
  cd ../../../../../
  return 0
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

start_backend || {
  log_error "Backend failed to start. Exiting."
  exit 1
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
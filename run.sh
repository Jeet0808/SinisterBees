#!/bin/bash

BIN_DIR="$(dirname "$0")/bin"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

if [ ! -d "$BIN_DIR" ]; then
    echo -e "${RED}bahiya bin folder hai bhi.${NC}"
    exit 1
fi

echo -e "${CYAN}bin folder ki scripts:${NC}"
scripts=("$BIN_DIR"/*)

if [ ${#scripts[@]} -eq 0 ]; then
    echo -e "${YELLOW}kahli bin folder.${NC}"
    exit 1
fi

i=1
for script in "${scripts[@]}"; do
    echo -e "${GREEN}$i) $(basename "$script")${NC}"
    ((i++))
done

echo
read -p "$(echo -e "${BLUE}konsi chalani hai: ${NC}")" choice

if [[ ! "$choice" =~ ^[0-9]+$ ]] || [ "$choice" -lt 1 ] || [ "$choice" -gt "${#scripts[@]}" ]]; then
    echo -e "${RED}out of range. Exiting.${NC}"
    exit 1
fi

selected_script="${scripts[$((choice - 1))]}"
echo -e "${CYAN}Running script: ${GREEN}$(basename "$selected_script")${NC}"
bash "$selected_script"

#!/bin/bash

pids=()
gotsigchld=false
trap '
  if ! "$gotsigchld"; then
    gotsigchld=true
    ((${#pids[@]})) && kill "${pids[@]}" 2> /dev/null
  fi
' CHLD

echo "..."

echo "running from path $PWD"

node ./src/Backend.js & pids+=("$!")

cd ./app/controllers/web/SinisterBeesFrontend/

npm run dev -- --clearScreen=false & pids+=("$!")

set -m
wait
set +m

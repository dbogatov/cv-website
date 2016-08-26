#!/bin/bash

# set -e

cd "$(dirname "$0")"

git fetch --all >> tmp.txt 2>&1
git reset --hard origin/master >> tmp.txt 2>&1

npm install >> tmp.txt 2>&1
gulp >> tmp.txt 2>&1

curl --request POST 'https://push.dbogatov.org/api/push/deploy' --data "project=CV-Website"

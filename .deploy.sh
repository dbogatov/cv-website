#!/bin/bash

# set -e

cd "$(dirname "$0")"

git fetch --all
git reset --hard origin/master

npm install
gulp

curl --request POST 'https://push.dbogatov.org/api/push/deploy' --data "project=CV-Website"

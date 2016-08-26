#!/bin/bash

set -e

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd $DIR

git fetch origin >> tmp.txt 2>&1
git reset --hard origin/master >> tmp.txt 2>&1

npm install >> tmp.txt 2>&1
gulp >> tmp.txt 2>&1

curl --request POST 'https://push.dbogatov.org/api/push/deploy' --data "project=CV-Website"

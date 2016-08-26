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

REDIRECT=" > /dev/null 2>> deploy.log"

git fetch origin $REDIRECT
git reset --hard origin/master $REDIRECT

npm install $REDIRECT
gulp $REDIRECT

curl --request POST 'https://push.dbogatov.org/api/push/deploy' --data "project=CV-Website"

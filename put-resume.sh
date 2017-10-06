#!/bin/bash

set -e

PROJECT_ID="30" # lookup in repo settings
JOB="artifacts" # change if necessary
BRANCH="master"
TOKEN=$1

echo "Downloading artifacts into temporary directory"
cd `mktemp -d`
curl \
	--header "PRIVATE-TOKEN: $TOKEN" \
	"https://git.dbogatov.org/api/v4/projects/$PROJECT_ID/jobs/artifacts/$BRANCH/download?job=$JOB" \
> artifacts.zip

echo "Extracting files"
unzip artifacts.zip

echo "Moving file"
mv resume.pdf wwwroot/assets/custom/docs/resume.pdf

echo "Done"

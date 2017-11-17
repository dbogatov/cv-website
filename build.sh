#!/bin/bash

set -e

echo "Cleaning output directory..."
rm -f wwwroot/*.html

echo "Installing node modules... Requires NPM"
npm install --unsafe-perm --loglevel=error

echo "Generating HTML... Requires Gulp (installed by NPM)"
$(npm bin)/gulp > /dev/null

echo "Build completed!"

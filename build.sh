#!/usr/bin/env bash 

set -e

rm -rf dist
mkdir -p dist

cp -r assets/ dist/assets

sed -e '/__CONTENT__/,$d' src/html/layout.html > dist/header.html
sed -n -e '/__CONTENT__/,$p' src/html/layout.html | tail -n +2 > dist/footer.html
sed -i -- "s/__COMMIT__/$(cat version.txt)/g" dist/footer.html

for page in src/html/*.html; 
do 
	page=$(basename "$page")

	if [ "$page" != "layout.html" ];
	then
		echo "Generating ${page%.*} page..."

		cat {dist/header,src/html/${page%.*},dist/footer}.html > dist/$page
	fi
	
done

rm dist/{header,footer}.html

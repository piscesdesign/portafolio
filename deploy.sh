#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git remote add origin git@github.com:piscesdesign/portafolio.git
git branch -M gh-pages
git add .
git commit -m 'feat: My first feature'
git push -u origin gh-pages
cd -
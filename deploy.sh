#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. This may take a minute...
npm run build

# navigate into the build output directory
cd dist

echo Deploying...
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:nsalvador/nigel-david.git master:gh-pages

cd -
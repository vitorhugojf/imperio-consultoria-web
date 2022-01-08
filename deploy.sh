set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:vitorhugojf/imperio-consultoria-web.git master:gh-pages
cd -
set -e

yarn run build

cd dist

git init
git config --global user.name "Vitor Hugo"
git config --global user.email "vitorhugojf9@gmail.com"
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:vitorhugojf/imperio-consultoria-web.git master:gh-pages
cd -
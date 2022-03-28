#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npx npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'www.syber.ink' > CNAME

git init
git add -A
git commit -m 'deploy www.syber.ink with PWA' 

# 发布到 gh-pages
git push -f git@github.com:syberink/SyberInkWeb.git master:gh-pages

cd -
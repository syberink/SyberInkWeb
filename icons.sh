#!/usr/bin/env sh

# upload 'syber.ink.ico.svg' with backgroud and path of '/images/icons/':https://realfavicongenerator.net
# get URLfile.zip : https://realfavicongenerator.net/files/.../favicon_package_v0.16.zip
# Usage : yarn icons URLfile.zip

# 确保脚本抛出遇到的错误
set -e
mkdir -p .vuepress/public/images/icons
cd .vuepress/public/images/icons

# copy syber.ink.logo.svg/ico.svg
# mv ../../../../*.svg ../../

wget $1 -O icons.zip
unzip icons.zip
rm -rf icons.zip

# 强制换大小： convert img1.jpeg  -resize  128x96!  img2.png 
# convert android-chrome-512x512.png  -resize  384x384 android-chrome-384x384.png
mv favicon.ico ../../ 
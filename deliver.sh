#!/usr/bin/env bash
cp -R build/* ~/Projects/mainstreamer.github.io/
cd ~/Projects/mainstreamer.github.io/
git add -A :/
git commit -m "automatic deploy build `date +%Y-%m-%d`"
git push origin master

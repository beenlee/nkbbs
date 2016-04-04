#!/bin/sh
# @Author: beenlee
# @Date:   2016-04-04 22:15:27
# @Last Modified by:   beenlee
# @Last Modified time: 2016-04-04 22:42:48
echo 'build file../'
edp build -f

if [ $? -eq 0 ]
    then
        echo 'build success, move file to project..'
        rm -rf project/www
        cp -R output project/www
        echo 'cordova build...'
        cd project
        cordova build ios
        cordova run ios
    else
        echo 'build fail'
fi
#!/bin/sh
# @Author: beenlee
# @Date:   2016-04-04 00:06:16
# @Last Modified by:   beenlee
# @Last Modified time: 2016-04-04 00:39:48

echo 'install node depend package.'
npm install

echo 'create project'
cordova create project com.been.nkbbs nkbbs

if [ $? -eq 0 ]
    then
        cd project
        cordova platform add ios --save
        cordova platform add android --save
        cordova requirements 
        echo 'success! project init done! and then, please install the requirements which is uninstalled!'
    else
        echo 'fail! '
fi

# nkbbs

学校官方版本的南开bbs太难用了，有木有，感觉严重影响我校孩子们交流，不妨做个民间版本玩玩~^_^~

### API

学校的bbs没有公开的api文档只能靠抓包

整理的api文档在doc目录里

### 开始

首先需要安装[cordova](http://cordova.apache.org/)

安装好 `cordova` 之后，clone下项目后,进入项目目录，执行一次 `sh init_project.sh` 初始化开发环境。

该脚本会自动创建一个 `cordova` 项目，到 `project` 目录下，并给项目添加 `ios` 和 `android` 平台。

然后会检测系统环境是否缺少一些依赖，需要手动按照说明安装所需的依赖。

项目使用[edp](http://ecomfe.github.io/edp/)进行管理与构建,所以需要安装`edp`.

```
npm install -g edp
```

然后就可以开心的写代码了。

当你写完代码后，执行 `sh build.sh` 脚本,会自动使用`edp`构建你的程序，并打包`copy`到`project`的`www`目录下,然后启动一个`ios`模拟器进行预览。

### License

本项目遵守[GPL](http://www.gnu.org/licenses/gpl.html)开源协议，欢迎提ISSUE，发PR。



**你可以使用上一节课的代码作为本节课的起始代码**

## 如何运行

我已经测试过此项目可以运行, 你可以通过以下步骤运行此项目:

1. 先使用 npm i 安装好项目依赖
2. 使用 npm start 命令开启项目
3. 在浏览器通过 : localhost:9000 访问此项目

## 以下是和视频对比被改动的文件

关于 server.js
    我注释了原来的第7行代码 : `const bs = require('browser-sync').create();`, 这行代码在实例中并无用处

关于 package.json
    * 在 devDependencies 里删除了对 browser-sync 的依赖: "browser-sync": "^2.18.8",
    我们并不用到此依赖
    * 在 dependencies 里里删除了对 semantic-ui: "semantic-ui": "^2.2.10".

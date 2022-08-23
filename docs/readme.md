---
title: "webpack4系列开源课程"
date: 2018-07-29
permalink: "2018-07-29-webpack-demos-introduction"
---

## 1. 什么是`webpack`?

> 前端目前最主流的`javascript`打包工具，在它的帮助下，开发者可以轻松地实现加密代码、多平台兼容。而最重要的是，它为**前端工程化**提供了最好支持。`vue`、`react`等大型项目的脚手架都是利用 webpack 搭建。

所以，学习`webpack`可以帮助开发者更好的进行基于`javascript`语言的开发工作。

## 2. 怎么学习`webpack`?

如果一个新手不幸打开`vue-cli`中关于`webpack`的配置，乱起八糟的配置就像看天书一样（我就是这样）。

所以，学习的时候还是要从基础学起，首先应该学习常用的概念、插件的用法，最后，才能根据需要进行组合。

因此，这个系列教程先从`JS`、编译`ES6`等方面讲起，逐步延伸到`CSS`、`SCSS`等，再到多页面、懒加载等技术，力求**将知识点解构，而不是混淆在一起**。

## 3. 关于本课程

### 3.1 `webpack`版本

本课程不同于网上的`v3`版本，采用最新的`webpack4`。并且会记录`v3 -> v4`升级过程中的一些问题。

### 3.2 课程源码

如果你的自学能力很强，欢迎直接来看源码。[仓库地址](https://github.com/dongyuanxin/webpack-demos)：https://github.com/dongyuanxin/webpack-demos

**如果对您的学习、工作或者项目有帮助，欢迎帮忙 Star，更欢迎一起维护。**

### 3.3 课程地址

1.  [Github 仓库地址](https://github.com/dongyuanxin/webpack-demos)
2.  [我的个人网站（最新 && 最快）](http://0x98k.com)

### 3.4 课程内容目录 (截至 2018/7/27)

1.  [demo01](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/01.一：打包JS): 打包`JS`
2.  [demo02](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/02.二：编译ES6): 编译`ES6`
3.  [demo03](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/03.三：多页面解决方案--提取公共代码): 多页面解决方案--提取公共代码
4.  [demo04](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/04.四：单页面解决方案--代码分割和懒加载): 单页面解决方案--代码分割和懒加载
5.  [demo05](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/05.五：处理CSS): 处理`CSS`
6.  [demo06](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/06.六：处理SCSS): 处理`Scss`
7.  [demo07](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/07.七：SCSS提取和懒加载): 提取`Scss` (`CSS`等等)
8.  [demo08](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/08.八：JS-Tree-Shaking): JS Tree Shaking
9.  [demo09](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/09.九：CSS-Tree-Shaking): CSS Tree Shaking
10. [demo10](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/10.十：图片处理汇总): 图片处理--识别, 压缩, `Base64`编码, 合成雪碧图
11. [demo11](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/11.十一：字体文件处理): 字体文件处理
12. [demo12](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/12.十二：处理第三方JavaScript库): 处理第三方`JS`库
13. [demo13](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/13.十三：自动生成HTML文件): 生成`Html`文件
14. [demo14](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/14.十四：Clean-Plugin-and-Watch-Mode): `Watch` Mode && Clean Plugin
15. [demo15](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/15.十五：开发模式与webpack-dev-server): 开发模式--`webpack-dev-server`
16. [demo16](https://github.com/dongyuanxin/webpack-demos/tree/master/docs/16.十六：开发模式和生产模式·实战): 生产模式和开发模式分离

### 3.5 课程源码目录 (截至 2018/7/27)

> 按照知识点，目录分成了 16 个文件夹（**之后还会持续更新**）。代码和配置都在对应的文件夹下。

1.  [demo01](https://github.com/dongyuanxin/webpack-demos/tree/master/demo01): 打包`JS`
2.  [demo02](https://github.com/dongyuanxin/webpack-demos/tree/master/demo02): 编译`ES6`
3.  [demo03](https://github.com/dongyuanxin/webpack-demos/tree/master/demo03): 多页面解决方案--提取公共代码
4.  [demo04](https://github.com/dongyuanxin/webpack-demos/tree/master/demo04): 单页面解决方案--代码分割和懒加载
5.  [demo05](https://github.com/dongyuanxin/webpack-demos/tree/master/demo05): 处理`CSS`
6.  [demo06](https://github.com/dongyuanxin/webpack-demos/tree/master/demo06): 处理`Scss`
7.  [demo07](https://github.com/dongyuanxin/webpack-demos/tree/master/demo07): 提取`Scss` (`CSS`等等)
8.  [demo08](https://github.com/dongyuanxin/webpack-demos/tree/master/demo08): JS Tree Shaking
9.  [demo09](https://github.com/dongyuanxin/webpack-demos/tree/master/demo09): CSS Tree Shaking
10. [demo10](https://github.com/dongyuanxin/webpack-demos/tree/master/demo10): 图片处理--识别, 压缩, `Base64`编码, 合成雪碧图
11. [demo11](https://github.com/dongyuanxin/webpack-demos/tree/master/demo11): 字体文件处理
12. [demo12](https://github.com/dongyuanxin/webpack-demos/tree/master/demo12): 处理第三方`JS`库
13. [demo13](https://github.com/dongyuanxin/webpack-demos/tree/master/demo13): 生成`Html`文件
14. [demo14](https://github.com/dongyuanxin/webpack-demos/tree/master/demo14): `Watch` Mode && Clean Plugin
15. [demo15](https://github.com/dongyuanxin/webpack-demos/tree/master/demo15): 开发模式--`webpack-dev-server`
16. [demo16](https://github.com/dongyuanxin/webpack-demos/tree/master/demo16): 生产模式和开发模式分离

## 4. 致谢

此教程是在我学习 mooc 网 [四大维度解锁 Webpack3.0 工具全技能](https://coding.imooc.com/class/171.html) 整理的代码和`v4.0`版本的升级教训。欢迎大家去学习。

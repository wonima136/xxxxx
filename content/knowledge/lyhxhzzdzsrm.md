---



title: "Linux用户喜欢在终端中输入命令来完成任务，至少我就是这样"
description: "Linux用户喜欢在终端中输入命令来完成任务，至少我就是这样"
keywords: "Linux用户喜欢在终端中输入命令来完成任务，至少我就是这样"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678341962853_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

许多笔记本呆子晓得可以用测试网速，然而这个不能在测试中给你足够的控制。Linux用户喜欢在终端中输入命令来完成任务 **linux中网速测试命令**，起码我就是这样的。

tespeed是一款有好多特点的python工具 **linux中网速测试命令**，可以在终端在测试网速。按照文档说明，它借助了的服务器，并且用户可以自动指定。

最初作者用php语言写了tespeed工具，而且证明了ISP提供的网路远高于它广告中所说的那样。而且事情并不是始终如她们想的那样，因而作者移植他的php脚本到python中，但是他的工具在github中早已有180个star了。

Itmeansalot。

怎样在linux中测试tespeed

在你笔记本上运行这个python程序前先确保系统早已满足了这个工具的依赖。tespeed依赖下边两个包：

你可以用pip包管理系统来安装lxml，只要用下边的命令就行。

复制代码代码如下:pipinstalllxml

如今我们须要输入下边的命令来下载安装SocksiPy。

复制代码代码如下:wget%201.00/SocksiPy.zip/

下载完成后解压SocksiPy.zip并运行下边的命令来克隆tespeed库房到你本地机器中。

复制代码代码如下:gitclone

接着把SocksiPy文件夹放在你克隆出来的tespeed项目中。如今我们要像截图那样在SocksiPy中的创建一个叫init.py的空文件。

![201565153639845.png (675×490)](https://www.linuxcool.com/wp-content/uploads/2023/03/1678341962853_0.png)

如今我们早已解决了项目的依赖问题linux更改ip地址，我们可以用下边的命令运行了。

![linux中网速测试命令_测试本机网速命令_网速测试 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678341962853_1.png)

复制代码代码如下:pythontespeed.py

接出来都会发生一些神奇的事了。程序会测试你的下载和上传速率而且在你的终端中用漂亮的颜色显示下来。

![201565153701041.png (892×561)](https://www.linuxcool.com/wp-content/uploads/2023/03/1678341962853_2.png)

在tespeed中有很多选项，如-ls来列举服务器，-p来指定代理服务器，-s来制止调试(STDERR)输出,还有好多我们会在本教程中探求。

假如你想要结果显示成MB，你可以在pythontespeed.py前面接上选项-mib。

复制代码代码如下:pythontespeed.py-mib

在你使用了-mib选项后你可以看见计量网速的单位改变了。

我特别喜欢用的一个选项是-w，它可以把标准输出转化成CSV格式。

复制代码代码如下:pythontespeed.py-w

使用下边的命令来列举服务器。

复制代码代码如下:pythontespeed-ls

运行里面的命令后linux开源软件，你会听到可以用于测试上传和下载速率的服务器列表。我的列表特别长，所以我不会在教程中共享了。

总结

tespeed的确是一款帮助用户在终端中测试上传和下载速率的高性能python脚本。它支持好多的选项但是你可以指定列表中你想使用的服务器。继续使用tespeed并在留言区写下大家的体验吧。
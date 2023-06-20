---



title: "Linux下快速查看GCC版本的方法：-v 命令"
description: "Linux下快速查看GCC版本的方法：-v 命令"
keywords: "Linux下快速查看GCC版本的方法：-v 命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676729717623_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(Linux是一款开源的操作系统，它的出现使得用户可以自由地选择不同的软件和工具来辅助他们的工作。其中linux视频，GCC（GNU编译器集合) 是一款非常流行的开源编译器 **linux下gcc版本查看命令**，它可以将用户编写的C、C++、Objective-C、Ada、Fortran等语言代码转换为可执行文件。而在使用GCC之前，用户需要先了解当前机器上安装的GCC版本是多少。下面就来介绍如何在Linux下查看GCC版本的方法。

一、使用gcc --version命令

![linux查看版本命令_linux下gcc版本查看命令_linux版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676729717623_0.png)

在Linux中linux更改ip地址，使用gcc --version命令可以快速查看当前安装的GCC版本。这个命令会打印出GCC的版本信息 **linux下gcc版本查看命令**，包括版本号、发行日期、目标平台等信息。例如：

Copyright (C) 2013 Free Software Foundation, Inc.

上面这条命令表明当前安装的GCC版本是4.8.1。

二、使用gcc -v命令

另外一个可以查看GCC版本信息的方法是使用gcc -v命令。这个命令会显示出GCC所使用的相关库文件和头文件路径，而这些库文件和头文件都是和GCC版本相关的。例如：

COLLECT_LTO_WRAPPER=/usr/lib/gcc/x86_64-linux-gnu/4.8/lto-wrapper
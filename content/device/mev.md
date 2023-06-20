---



title: "mev命令 – 报告鼠标事件"
description: "mev命令 – 报告鼠标事件"
keywords: "mev命令 – 报告鼠标事件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

mev命令的作用是可以报告鼠标事件。

mev命令是gpm计划的一部分。mev命令将它获得的鼠标控制台事件显示到标准输出。mev命令的默认是获取鼠标的任何事件，但是可以使用相关命令参数来设置，以便设定程序的行为。

**语法格式：** mev [参数]

**常用参数：**

-Eemacs模式-u用户模式-i接受来自标准输入的命令-m<数字>最小修改掩码-M<数字>最大修改掩码-f里面的画面适合拖动事件-p显示指针拖动-C<数字>选择虚拟控制台-d<数字>选择默认的掩码-e<数字>选择eventMask

**参考实例**

报告鼠标事件：

```
[root@linuxcool ~]# mev
```

显示指针拖动：

```
[root@linuxcool ~]# mev -p
```

用户模式：

```
[root@linuxcool ~]# mev -u
```
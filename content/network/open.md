---



title: "open命令 – 启用虚拟终端"
description: "open命令 – 启用虚拟终端"
keywords: "open命令 – 启用虚拟终端"
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

open命令的作用是可以启用虚拟终端，然后执行指定的命令。

虚拟终端类似于你目前使用的终端。它们用于执行命令和提供输入。唯一的区别是你不能将鼠标与虚拟终端一起使用。虚拟终端允许许多用户在同一台计算机上同时处理不同的程序。

当你登录linux服务器的时候，默认只能使用虚拟终端。此外，即便是普通的桌面环境，当你需要重新配置图形界面，或者图形界面因为内部异常等原因崩溃了的时候，你还可以切换到虚拟终端继续执行操作。

**语法格式：** open [参数] [命令]

**常用参数：**

-l登录环境-u启用新的终端-s切换到终端-v显示详细信息-w进入等待状态-c<终端号码>指定终端

**参考实例**

启用新的终端10，然后执行命令：

```
[root@linuxcool ~]# open -c 10 - date
```

显示终端详细信息：

```
[root@linuxcool ~]# open -v
```

使终端进入等待状态：

```
[root@linuxcool ~]# open -w
```
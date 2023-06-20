---



title: "getty命令 – 用于设置终端机模式"
description: "getty命令 – 用于设置终端机模式"
keywords: "getty命令 – 用于设置终端机模式"
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

getty命令用于设置终端机模式，连线速率和管制线路。

getty命令是UNIX之类操作系统启动时所必须的3个步骤之一 ，用来开启终端，进行终端的初始化，设置终端。 getty 命令设置和管理终端线路和端口。getty 命令由 init 命令来运行。getty 命令与终端状态管理员程序相链接。终端状态管理员程序提供了终端控制和登录的复合功能。 当作为 getty 命令调用时，终端状态管理员程序提供了通常的端口管理功能。

**语法格式：** getty [参数]

**常用参数：**

-c指定定义配置文件，预设为/etc/gettydefs-d指定组态配置文件，预设为/etc/conf.getty-h 当传输速率为0时就强制断线-r设置延迟时间-t设置等待登入的时间-w设置等待回应的字符串

**参考实例**

开启终端：

```
[root@linuxcool ~]# getty tty7
```
---



title: "setconsole命令 – 设置系统终端"
description: "setconsole命令 – 设置系统终端"
keywords: "setconsole命令 – 设置系统终端"
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

setconsole命令用于设置系统终端，可用来指定系统终端。

**语法格式：** setconsole [参数]

**常用参数：**

serial  使用PROM终端 ttya,cua0 使用第１个串口设备作为终端ttyb,cua1 使用第２个串口设备作为终端video使用主机上的现卡作为终端

**参考实例**

设置终端：

```
[root@linuxcool ~]# setconsole ttyS0
```
---



title: "setenv命令 – 设置与显示系统环境变量信息"
description: "setenv命令 – 设置与显示系统环境变量信息"
keywords: "setenv命令 – 设置与显示系统环境变量信息"
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

setenv命令来自英文词组“set environment variable”的缩写，其功能是用于设置与显示系统环境变量信息。设置的环境变量如需永久生效需要写入到/etc/profile或/etc/bashrc文件中。

**语法格式：** setenv [参数] [变量名]

**常用参数：**

ENVVAR要设置的环境变量名value要设置的环境变量值

**参考示例**

显示当前系统中全部的环境变量信息：

```
[root@linuxcool ~]# setenv
XDG_MENU_PREFIX=gnome-
LANG=en_US.UTF-8
GDM_LANG=en_US.UTF-8
HISTCONTROL=ignoredups
DISPLAY=:0
HOSTNAME=linuxcool.com
COLORTERM=truecolor
USERNAME=root
XDG_VTNR=2
………………省略部分输出信息………………
```

设置一个新的系统环境变量信息：

```
[root@linuxcool ~]# setenv WEBSITE linuxcool.com
```
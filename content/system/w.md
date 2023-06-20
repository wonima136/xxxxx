---



title: "w命令 – 显示已登录用户的信息"
description: "w命令 – 显示已登录用户的信息"
keywords: "w命令 – 显示已登录用户的信息"
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

w命令来自英文单词“who”的缩写，其功能是用于显示已登录用户的信息。运维人员只需要在命令终端中敲下w键并回车，即可查看到当前系统中已登录的用户列表和他们正在执行的命令等信息，更好地了解系统正在执行的工作，以及等同事都下班了再重启或关闭服务器，避免突然中断他人工作。

**语法格式：** w [参数]

**常用参数：﻿**

-f显示用户登录来源-h不显示头信息-i显示IP地址而不是主机名-l显示执行过程详细信息-o使用老式输出格式-s使用短输出格式-u忽略指定用户名-V显示版本信息--help显示帮助信息

**参考示例**

(显示目前登入系统用户的信息（默认格式) ：

```
[root@linuxcool ~]# w
 06:21:04 up 10 min,  1 user,  load average: 0.11, 0.06, 0.02
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty2     tty2             22Jun23 17days 11.47s  0.19s /usr/libexec/tr
```

(显示目前登入系统用户的信息（不打印头信息) ：

```
[root@linuxcool ~]# w -h
root     tty2     tty2             22Jun23 17days 12.51s  0.20s /usr/libexec/tr
```

显示当前登录用户的来源：

```
[root@linuxcool ~]# w -f
 06:21:54 up 11 min,  1 user,  load average: 0.11, 0.06, 0.02
USER     TTY        LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty2      22Jun23 17days 14.17s  0.20s /usr/libexec/tracker-miner-fs
```
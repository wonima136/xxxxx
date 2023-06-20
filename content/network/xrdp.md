---



title: "xrdp命令 – RDP连接Linux远程桌面"
description: "xrdp命令 – RDP连接Linux远程桌面"
keywords: "xrdp命令 – RDP连接Linux远程桌面"
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

xrdp是一个远程桌面协议(RDP)服务器，与Windows NT/2000/2003服务器不同的是，xrdp不会向用户显示Windows桌面，而是X窗口桌面。它也可以作为VNC->RDP的桥接。

**语法格式：** xrdp [参数]

**常用参数：**

-n在前台启动xrdp，而不是将其作为守护进程启动-k杀死正在运行的xrdp守护进程-p指定要监听的TCP端口-f在一个新的连接上分叉一个新的进程

**参考实例**

在前台启动xrdp，而不是将其作为守护进程启动：

```
[root@linuxcool ~]# xrdp -n
```

杀死正在运行的xrdp守护进程：

```
[root@linuxcool ~]# xrdp -k
```

指定要监听的TCP端口：

```
[root@linuxcool ~]# xrdp -p 33890
```
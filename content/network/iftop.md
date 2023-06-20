---



title: "iftop命令 – 套接字及进程的网络利用率"
description: "iftop命令 – 套接字及进程的网络利用率"
keywords: "iftop命令 – 套接字及进程的网络利用率"
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

iftop是一款实时流量监控工具,监控TCP/IP连接等,缺点就是无报表功能。必须以root身份才能运行。

**语法格式：** iftop [参数]

**常用参数：**

-i指定要监控的网卡-n直接显示IP, 不进行DNS反解析

**参考实例**

默认监控第一块网卡的流量：

```
[root@linuxcool ~]# iftop
```

监控eth1网卡的流量：

```
[root@linuxcool ~]# iftop eth1
```

直接显示IP, 不进行DNS反解析：

```
[root@linuxcool ~]# iftop -n
```
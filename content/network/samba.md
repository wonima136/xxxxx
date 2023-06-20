---



title: "samba命令 – 控制Samba服务器"
description: "samba命令 – 控制Samba服务器"
keywords: "samba命令 – 控制Samba服务器"
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

samba为script文件，可启动，停止Samba服务器或回报目前的状态。 Samba是一套使用SMB(Server Message Block)协议的应用程序, 通过支持这个协议, Samba允许Linux服务器与Windows系统之间进行通信,使跨平台的互访成为可能。Samba采用C/S模式, 其工作机制是让NetBIOS( Windows 网上邻居的通信协议)和SMB两个协议运行于TCP/IP通信协议之上,并且用NetBEUI协议让Windows在“网上邻居”中能浏览Linux服务器。

samba服务器可实现如下功能:WINS和DNS服务; 网络浏览服务; Linux和Windows域之间的认证和授权; UNICODE字符集和域名映射;满足CIFS协议的UNIX共享等。 samba的主要目的就是用来沟通Windows与Unix这两种不同的作业平台。

**语法格式：** samba [参数]

**常用参数：**

start  启动Samba服务器的服务stop 停止Samba服务器的服务status 显示Samba服务器目前的状态restart  重新启动Samba服务器

**参考实例**

启动Samba：

```
[root@linuxcool ~]# samba start
```

停止Samba：

```
[root@linuxcool ~]# samba stop
```

重新启动Samba：

```
[root@linuxcool ~]# samba restart
```
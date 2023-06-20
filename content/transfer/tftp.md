---



title: "tftp命令 – 上传及下载文件"
description: "tftp命令 – 上传及下载文件"
keywords: "tftp命令 – 上传及下载文件"
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

tftp命令来自英文词组“Trivial File Transfer Protocol”的缩写，中文译为简单文件传输协议，其功能是基于TFTP协议进行的文件传输工作。用户可以通过文字模式将文件上传至远程服务器，亦可以从服务器下载文件到本地主机。

TFTP基于69/udp协议，不同于FTP文件传输协议，属于轻量级的传输服务，不具备显示文件列表、断点续传等功能。

**语法格式：** tftp [参数] 域名或IP地址

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-c执行指定命令行-l参数全局转义模式-m设置传输模式-R设置端口号-v显示执行过程详细信息-V显示版本信息

**常用TFTP命令：**

connect连接远程TFTP服务器mode文件传输模式put上传指定文件get下载指定文件quit退出TFTP服务verbose显示执行过程详细信息trace显示包路径status显示当前状态信息binary二进制传输模式ascii ASCII传送模式rexmt设置包传输的最长超时时间 timeout设置重传的最长超时时间help显示帮助信息? 显示帮助信息

**参考示例**

远程连接至指定服务器：

```
[root@linuxcool ~]# tftp 192.168.10.10
```

下载远程指定服务器中的文件至本地工作目录：

```
tftp> get File1.txt
```

上传本地工作目录中某个文件至远程指定服务器：

```
tftp> put File2.txt
```

退出登录某台远程服务器：

```
tftp> quit
```
---



title: "sftp-server命令 – SFTP协议服务端程序"
description: "sftp-server命令 – SFTP协议服务端程序"
keywords: "sftp-server命令 – SFTP协议服务端程序"
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

sftp-server命令来自英文词组“SFTP server”的拼写，其功能是用于SFTP协议服务端程序。SFTP的全称是“SSH File Transfer Protocol”，中文译为“安全的文件传输协议”，是隶属于sshd服务程序的子系统，为Linux系统提供了又一种加密的安全传输文件方式。

**语法格式:** sftp-server [参数] [对象]

**常用参数：**

-d设置备用起始目录-e显示日志记录信息-f设置记录日志时的设备代码-h显示服务器使用情况信息-l设置记录日志时的分类-m设置新的一般文件权限-p设置白名单列表-P设置黑名单列表-R使用只读模式-u设置新的umask权限

**参考示例**

启动SFTP协议服务：

```
[root@linuxcool ~]# sftp-server
```

指定要记录日志的设备代码：

```
[root@linuxcool ~]# sftp-server -f LOCAL1
```

将服务器设置为只读模式：

```
[root@linuxcool ~]# sftp-server -R
```

显示服务器使用情况信息：

```
[root@linuxcool ~]# sftp-server -h
```
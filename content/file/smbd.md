---



title: "smbd命令 – Samba服务器程序"
description: "smbd命令 – Samba服务器程序"
keywords: "smbd命令 – Samba服务器程序"
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

smbd为Samba服务器程序，可分享文件与打印机等网络资源供Windows相关的用户端程序存取。

**语法格式：** smbd [参数]

**常用参数：**

-a  所有的连线记录都会加到记录文件中 -d 指定记录文件所记载事件的详细程度 -D  使用此参数时，smbd会以服务程序的方式在后台执行 -h 显示帮助 -i 指定NetBIOS名称的范围 -l 指定记录文件的名称 -o  每次启动时，会覆盖原有的记录文件 -O 设置连接槽选项 -p 设置连接端口编号 -P  仅用来测试smbd程序的正确性 -s 指定smbd的设置文件

**参考实例**

启动Samba服务器：

```
[root@linuxcool ~]# smbd -D
```
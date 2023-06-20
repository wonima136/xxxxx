---



title: "ncftp命令 – 传输文件"
description: "ncftp命令 – 传输文件"
keywords: "ncftp命令 – 传输文件"
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

ncftp命令是文字模式FTP程序中的佼佼者，它具备多样特色， 包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。

当不指定用户名时，ncftp 命令会自动尝试使用匿名账户anonymous 去连接远程FTP 服 务器，不需要用户输入账号和密码。

**语法格式：** ncftp [参数] [主机或IP地址]

**常用参数：**

-u指定登录FTP服务器的用户名-p设置用户密码 -P指定FTP端口号，默认为21 -j指定账号 -h  显示帮助信息 -v  显示版本信息

**参考实例**

匿名连接www.linuxcool.com服务器，同时不想输入anonymous等匿名用户名：

```
[root@linuxcool ~]# ncftp www.linuxcool.com
```

显示帮助信息：

```
[root@linuxcool ~]# ncftp -h
```
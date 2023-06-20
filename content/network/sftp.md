---



title: "sftp命令 – 加密传输FTP文件"
description: "sftp命令 – 加密传输FTP文件"
keywords: "sftp命令 – 加密传输FTP文件"
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

sftp命令来自英文词组“secure file transfer protocol”的缩写，其功能是用于加密传输FTP文件。sftp命令与ftp命令都是FTP协议的客户端工具，工作模式和使用方式均相同，但sftp命令会对所有传输的FTP文件基于ssh协议进行加密处理，并支持公钥认证和压缩技术，更为推荐。

**语法格式：** sftp [参数] 域名或IP地址

**常用参数：﻿**

-b设置批处理文件-B设置缓冲区大小-C使用压缩模式-F设置ssh配置文件-l使用ssh协议版本1-o设置ssh选项-P设置连接端口号-R设置最大请求数-v提升日志等级

**参考示例**

登入到指定的远程FTP服务器：

```
[root@linuxcool ~]# sftp 192.168.10.10
Connecting to 192.168.10.10...
root@192.168.10.10's password: 此处输入管理员密码
sftp>
```

指定缓存区大小，并登入到指定的远程FTP服务器：

```
[root@linuxcool ~]# sftp -B 512 192.168.10.10
```

设置在传输过程中使用压缩技术，并登入到指定的远程FTP服务器：

```
[root@linuxcool ~]# sftp -C 192.168.10.10
```
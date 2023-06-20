---



title: "uulog命令 – 显示UUCP记录文件"
description: "uulog命令 – 显示UUCP记录文件"
keywords: "uulog命令 – 显示UUCP记录文件"
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

uulog 命令显示了日志文件的内容。该内容包含了 uucico 和 uuxqt 守护进程的活动。 每一个远程系统都有自己的日志文件，本地系统使用 uucp、uuto以及 uux 命令来与这些远程系统通信。

使用 uulog 命令显示用户和系统要求的 uucp、uuto 以及 uux 命令的摘要信息。所有这些事务都记录在 /var/spool/uucp/.Log 目录里的日志文件中。这些文件被命名为 DaemonName/SystemName，其中 DaemonName 目录是所涉及的守护进程的名字，SystemName 文件是为该守护进程正在连接的远程系统而命名的。

**语法格式：** uulog [参数]

**常用参数：**

-D或--debuglog 显示排错记录-f或--follow与-F参数类似，但仅显示与指定主机相关的记录-I或--config指定程序的配置文件-n或--lines显示记录文件中，从最后算起指定行数的数值-s仅显示记录文件中，与指定文件相关的记录-S或--statslog 显示统计记录-u或--suer仅显示记录文件中，与指定用户相关的记录-v或--version 显示版本信息-X或--debug设定排错层级--help 显示帮助

**参考实例**

显示uucp log信息：

```
[root@linuxcool ~]# uulog
```
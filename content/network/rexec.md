---



title: "rexec命令 – 远程执行指令客户端"
description: "rexec命令 – 远程执行指令客户端"
keywords: "rexec命令 – 远程执行指令客户端"
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

rexec命令是远程执行命令服务器的客户端工具，向远程rexec服务器发出执行命令的请求。

rexec命令以客户机/服务器的模式运行。运行rexec命令时首先要启动远程主机上的rexec服务器。

**语法格式:** rexec [参数] [远程主机或命令]

**常用参数：**

-a表示远程命令的标准错误与标准输出相同，不支持发送任意信号到远程进程 -l<用户名>指定连接远程rexec服务器的用户名 -p<密码>指定连接远程rexec服务器的密码 -n明确地提示输入用户名和密码

**参考实例**

在远程主机上执行date命令：

```
[root@linuxcool ~]# rexec linuxcool date
```

提示输入用户名和密码执行date命令：

```
[root@linuxcool ~]# rexec -n linuxcool date
```

使用密码执行date命令：

```
[root@linuxcool ~]# rexec -l uesrname -p password linuxcool date
```
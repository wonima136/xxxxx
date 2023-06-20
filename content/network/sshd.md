---



title: "sshd命令 – openssh服务器守护进程"
description: "sshd命令 – openssh服务器守护进程"
keywords: "sshd命令 – openssh服务器守护进程"
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

sshd命令来自英文词组“SSH daemon”的缩写，其功能是用于openssh服务器守护进程。openssh套件能够为两台主机之间建立加密的、可信任的数据通信服务，是rlogin与rsh等明文数据通信的替代品，而sshd命令即为openssh套件中的核心程序。

**语法格式：** sshd [参数] [对象]

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-d使用调试模式-D使用非后台守护进程的方式运行服务-e直接显示报错信息-f设置服务器的配置文件-g设置客户端登录的过期时间-h设置读取主机密钥文件-i使用inetd方式运行-o设置服务配置选项-p设置使用的端口号-q静默执行模式-t使用测试模式

**参考示例**

以调试模式运行sshd服务程序：

```
[root@linuxcool ~]# /usr/sbin/sshd -d
debug1: sshd version OpenSSH_7.8, OpenSSL 1.1.1 FIPS  11 Sep 2018
debug1: private host key #0: ssh-rsa SHA256:6n6eWlVRVtXxbDBBA5A05eRVxbyh4ImR0mdvcwIEUdc
debug1: private host key #1: ecdsa-sha2-nistp256 SHA256:212/FhZ+6JFs5psuMJx9+5alyW6QDzviE0miulDPiKk
debug1: private host key #2: ssh-ed25519 SHA256:3t6D+ZUPab8itrLMEEI+btP0y4YKN3pUa3JM0xTW6/o
debug1: rexec_argv[0]='/usr/sbin/sshd'
debug1: rexec_argv[1]='-d'
debug1: Set /proc/self/oom_score_adj from 0 to -1000
debug1: Bind to port 22 on 0.0.0.0.
Bind to port 22 on 0.0.0.0 failed: Address already in use.
debug1: Bind to port 22 on ::.
Bind to port 22 on :: failed: Address already in use.
Cannot bind any address.
```

以测试模式运行sshd服务程序：

```
[root@linuxcool ~]# /usr/sbin/sshd -t
```

强制基于IPv6地址进行服务：

```
[root@linuxcool ~]# /usr/sbin/sshd -6
```
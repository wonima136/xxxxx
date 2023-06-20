---



title: "ssh命令 – 安全的远程连接服务器"
description: "ssh命令 – 安全的远程连接服务器"
keywords: "ssh命令 – 安全的远程连接服务器"
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

ssh命令的功能是用于安全的远程连接服务器主机系统，作为openssh套件中的客户端连接工具，ssh命令可以让我们轻松地基于ssh加密协议进行远程主机访问，从而实现对远程服务器的管理工作。

**语法格式：** ssh [参数] 域名或IP地址

**常用参数：**

-1使用ssh协议版本1-2使用ssh协议版本2-4基于IPv4网络协议-6基于IPv6网络协议-a关闭认证代理连接转发功能-A开启认证代理连接转发功能 -b设置本机对外提供服务的IP地址-c设置会话的密码算法-C压缩所有数据-f后台执行ssh指令-F设置配置文件-g允许远程主机连接本机的转发端口-i设置密钥文件-l设置登录用户名-N不执行远程指令-o设置配置参数选项-p设置远程服务器上的端口号-q静默执行模式-s请求远程主机上的子系统调用-v显示执行过程详细信息-V显示版本信息-x关闭X11转发功能-X开启X11转发功能-y信任X11转发功能

**参考示例**

基于ssh协议，远程访问服务器主机系统：

```
[root@linuxcool ~]# ssh 192.168.10.10
The authenticity of host '192.168.10.10 (192.168.10.10)' can't be established.
ECDSA key fingerprint is SHA256:ZEjdfRjQV8pVVfu0TSYvDP5UvOHuuogMQSDUgLPG3Kc.
Are you sure you want to continue connecting (yes/no)? yes

Warning: Permanently added '192.168.10.10' (ECDSA) to the list of known hosts.
root@192.168.10.10's password: 此处输入远程服务器管理员密码
Activate the web console with: systemctl enable --now cockpit.socket

Last login: Tue Dec 14 08:49:08 2023
[root@linuxprobe ~]#
```

使用指定的用户身份登录远程服务器主机系统：

```
[root@linuxcool ~]# ssh -l linuxprobe 192.168.10.10
linuxprobe@192.168.10.10's password: 此处输入指定用户的密码
Activate the web console with: systemctl enable --now cockpit.socket
[linuxprobe@linuxprobe ~]$
```

登录远程服务器主机系统后执行一条命令：

```
[root@linuxcool ~]# ssh 192.168.10.10 "free -m"
root@192.168.10.10's password: 此处输入远程服务器管理员密码
              total        used        free      shared  buff/cache   available
Mem:           1966        1359          76          21         530         407
Swap:          2047           9        2038
```

强制使用v1版本的ssh加密协议连接远程服务器主机：

```
[root@linuxcool ~]# ssh -1 192.168.10.10
```
---



title: "sshpass命令 – 非交互式验证SSH密码"
description: "sshpass命令 – 非交互式验证SSH密码"
keywords: "sshpass命令 – 非交互式验证SSH密码"
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

sshpass命令来自英文词组“SSH password”的缩写，其功能是用于非交互式验证SSH密码。SSH是Linux系统平台中最常用的远程控制协议之一，使用ssh命令进行远程连接时需要交换式验证密码信息，不利于在Shell脚本中调用。而sshpass命令则很好地解决了这个脚本调用问题，用户可以直接将密码以参数的形式传递给命令，而无需交互式验证。

**语法格式：** sshpass [参数] 域名或IP地址

**常用参数：**

-f设置密码文件-p设置密码值

**参考示例**

基于SSH协议远程连接到指定的服务器：

```
[root@linuxcool ~]# sshpass -p "password" ssh root@192.168.10.10
```

指定端口号，基于SSH协议远程连接到指定的服务器：

```
[root@linuxcool ~]# sshpass -p "password" ssh -p 8518 root@192.168.10.10
```

基于SSH协议远程连接到指定的服务器，并执行命令：

```
[root@linuxcool ~]# sshpass -p "password" ssh root@192.168.10.10 "poweroff"
```

读取本地密码文件，基于SSH协议远程连接到指定的服务器：

```
[root@linuxcool ~]# sshpass -f "passwd.txt" ssh root@192.168.10.10
```
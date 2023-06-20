---



title: "ssh-keyscan命令 – 收集主机的SSH公钥信息"
description: "ssh-keyscan命令 – 收集主机的SSH公钥信息"
keywords: "ssh-keyscan命令 – 收集主机的SSH公钥信息"
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

ssh-keyscan命令来自英文词组“SSH key scan”的拼写，其功能是用于收集主机的SSH公钥信息。Linux系统管理员通常会先用ssh-keygen命令生成出SSH密钥文件，随后用ssh-copy-id命令传送公钥文件到对方主机，而ssh-keyscan命令的作用则是收集主机上的公钥信息，创建和验证sshd服务程序的“ssh_known_hosts”文件。

ssh-keyscan命令仅支持ssh协议版本1，在ssh协议版本2无法使用。

**语法格式：** ssh-keyscan [参数] [IP地址]

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-f从指定文件中读取地址列表和名字列表对-p设置连接远程主机的端口-t设置要创建的密钥类型-T设置连接尝试的超时时间-v显示执行过程详细信息

**参考示例**

收集主机SSH公钥，并输出调试信息：

```
[root@linuxcool ~]# ssh-keyscan -v 192.168.10.10
```

显示与指定主机上的RSA密钥信息：

```
[root@linuxcool ~]# ssh-keyscan 192.168.10.10
```

显示与指定主机上的DSA密钥信息：

```
[root@linuxcool ~]# ssh-keyscan -t dsa 192.168.10.10
```

显示调试信息：

```
[root@linuxcool ~]# ssh-keyscan -v
```
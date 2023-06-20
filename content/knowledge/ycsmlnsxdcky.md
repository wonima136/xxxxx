---



title: "远程screen命令能实现多窗口远程控制的开源服务程序"
description: "远程screen命令能实现多窗口远程控制的开源服务程序"
keywords: "远程screen命令能实现多窗口远程控制的开源服务程序"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684440379370_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux远程管理Telnet

```
telnet ipaddress
```

SSH介绍OpenSSH是SSH合同的免费开源实现。OpenSSH提供了服务端程序(openssh-server)和顾客端工具(openssh-client)SSH才能提供两种安全验证的方式：ssh顾客端使用

```shell
[root@node1 ~]# ssh root@192.168.175.147
# 登录远程ssh主机
[root@node1 ~]# ssh -p22 root@192.168.175.147
# 指定端口号登录远程主机，ssh默认端口22
[root@node1 ~]# ssh -p22 root@192.168.175.147 ls -lha /etc
# 让远程主机执行指定命令
[root@node1 ~]# cat .ssh/known_hosts
# 查看已经链接过的主机
```

```shell
[root@node1 ~]# scp -P22 -r -p /root/file root@192.168.175.147:/tmp
# 将本地文件复制给远程主机，-r递归复制整个目录，-p保留源文件的时间和权限属性
[root@node2 ~]# dd  file bs=128M count=8
记录了8+0 的读入
记录了8+0 的写出
1073741824字节(1.1 GB)已复制，6.82385 秒，157 MB/秒
[root@node2 ~]# ll -h
总用量 1.1G
-rw-------. 1 root root 1.2K 10月 20 2020 anaconda-ks.cfg
-rw-r--r--  1 root root 1.0G 11月  4 10:47 file
[root@node1 ~]# scp -P22 -r -p root@192.168.175.147:/root/file 1G_file
# 将远程主机的文件复制到本地
```

```shell
[root@node1 ~]# sftp -oPort=22 root@192.168.175.147
root@192.168.175.147's password:
Connected to 192.168.175.147.
sftp> put /etc/hosts /tmp
sftp> get /etc/hosts /root
# 使用sftp在两台主机之前互相传递文件
```

sshd配置文件参数作用

Port22

默认的sshd服务端口

ListenAddress0.0.0.0

设定sshd服务器窃听的IP地址

Protocol2

SSH合同的版本号

HostKey/etc/ssh/ssh_host_key

SSH合同版本为1时，DES公钥储存的位置

HostKey/etc/ssh/ssh_host_rsa_key

SSH合同版本为2时，RSA公钥储存的位置

HostKey/etc/ssh/ssh_host_dsa_key

SSH合同版本为2时，DSA公钥储存的位置

PermitRootLoginyes

![linux 远程登陆命令_scp命令远程到远程_linux 远程copy命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684440379370_0.jpg)

设定是否容许root管理员直接登陆

StrictModesyes

当远程用户的公钥改变时直接拒绝联接

MaxAuthTries6

最大密码尝试次数

MaxSessions10

最大终端数

PasswordAuthenticationyes

是否容许密码验证

PermitEmptyPasswordsno

(是否容许空密码登入（很不安全) 

安全秘钥验证在顾客端主机中生成“密钥对”

```shell
[root@localhost ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:9+KE/GYBG6wjbCQ4o9j139nD9kkrL29bdAYd49kTvLo root@localhost.localdomain
The key's randomart image is:
+---[RSA 2048]----+
|              .+ |
|              .o*|
| .     .      .++|
|+ . o   +      o.|
|o+ = . .S+.   . +|
|o . + +..o.. . o.|
|   . . oo.o=. o .|
|        .+=.BE.+ |
|         oo. OB. |
+----[SHA256]-----+
```

把顾客端主机中生成的私钥文件传送至远程主机

```shell
[root@localhost ~]# ssh-copy-id 192.168.91.128
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub"
The authenticity of host '192.168.91.128 (192.168.91.128)' can't be established.
ECDSA key fingerprint is SHA256:PWPGI+gebAxdFtOfQe66cO/RnTBEV/Qw5AEoZv6w5lM.
ECDSA key fingerprint is MD5:61:3d:ae:39:43:65:70:f4:9a:10:ff:48:67:6f:ef:54.
Are you sure you want to continue connecting (yes/no)? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@192.168.91.128's password:
Number of key(s) added: 1
Now try logging into the machine, with:   "ssh '192.168.91.128'"
and check to make sure that only the key(s) you wanted were added.
```

对服务器进行设置 **linux 远程登陆命令**，使其只容许秘钥验证，拒绝传统的口令验证方法。记得在更改配置文件后保存并重启sshd服务程序

```shell
[root@localhost ~]# vim /etc/ssh/sshd_config
..................
65 PasswordAuthentication no
...................
[root@localhost ~]# systemctl restart sshd
```

在顾客端尝试登陆到服务器，此时无须输入密码也可成功登陆

```shell
[root@localhost ~]# ssh 192.168.91.128
Last login: Fri Apr 19 17:12:37 2019 from 192.168.91.1
```

不间断会话服务

当与远程主机的会话被关掉时，在远程主机上运行的命令也急剧被中断。

screen是一款才能实现多窗口远程控制的开源服务程序，简单来说就是为了解决网路异常中断或为了同时控制多个远程终端窗口而设计的程序。用户还可以使用screen服务程序同时在多个远程会话中自由切换suse linux，才能做到实现如下功能。

```bash
[root@localhost ~]# yum -y install screen
```

管理远程会话

screen命令能做的事情

```bash
[root@localhost ~]# screen -S window
[root@localhost ~]# pstree
systemd─┬─NetworkManager───2*[{NetworkManager}]
		......
        ├─sshd─┬─sshd───bash───su───bash───screen───screen───bash
        │      └─sshd───bash───pstree
		......
[root@localhost ~]# ping baidu.com
(# 执行命令后退出screen窗口（ctrl+a+d) 
[root@localhost ~]# screen -S window
[detached from 16811.window]
[root@localhost ~]# pstree
systemd─┬─NetworkManager───2*[{NetworkManager}]
		......
        ├─screen───bash───ping
        .....
# ping命令会一直运行而不会退出
```

尽管看上去与昨天没有不同，但实际上可以查看到当前的会话正在工作中

```bash
[root@localhost ~]# screen -ls
There is a screen on:
        7758.window     (Attached)
1 Socket in /var/run/screen/S-root.
```

要想退出一个会话也非常简单，只需在命令行中执行exit命令即可

假如想要将当前的会话后台，可以如下操作

在日常的生产环境中 **linux 远程登陆命令**，虽然并不是必须先创建会话，之后再开始工作。可以直接使用screen命令执行要运行的命令，这样在命令中的一切操作也就会被记录出来linux操作系统介绍，当命令执行结束后screen会话也会手动结束

```bash
[root@localhost ~]# screen ping -c 4 baidu.com
[screen is terminating]
```

```bash
[root@localhost ~]# screen -r window
```

```
[root@server2 ~]# screen -r window
[screen is terminating]
[root@server2 ~]# screen -ls
No Sockets found in /var/run/screen/S-root.
```

会话共享功能

可以让多个登陆主机的用户同时共享一个screen

```bash
[root@localhost ~]# screen -x test
```
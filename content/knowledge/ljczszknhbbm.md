---



title: "【Linux基础知识】查看内核版本命令：LinuxAS"
description: "【Linux基础知识】查看内核版本命令：LinuxAS"
keywords: "【Linux基础知识】查看内核版本命令：LinuxAS"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1. 查看内核版本命令：

1) [root@q1test01 ~]# cat /proc/version

Linux version 2.6.9-22.ELsmp () (gcc version 3.4.4 20050721

3.4.4-2)) #1 SMP Mon Sep 19 18:00:54 EDT 2005

2) [root@q1test01 ~]# uname -a

Linux q1test01 2.6.9-22.ELsmp #1 SMP Mon Sep 19 18:00:54 EDT 2005 x86_64 x86_64 x86_64 GNU/Linux

3) [root@q1test01 ~]# uname -r

![查看内核版本命令_linux命令查看内核版本_linux 查看内核命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_0.jpg)

2.6.9-22.ELsmp

2. 查看linux版本：

1) 登录到服务器执行 lsb_release -a ,即可列出所有版本信息,例如:

[root@3.5.5Biz-46 ~]# [root@q1test01 ~]# lsb_release -a

LSB Version: :core-3.0-amd64:core-3.0-ia32:core-3.0-noarch:graphics-3.0-amd64:graphics-3.0-

ia32:graphics-3.0-noarch

Distributor ID: RedHatEnterpriseAS

![linux 查看内核命令_linux命令查看内核版本_查看内核版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_1.jpg)

Description: Red Hat Enterprise Linux AS release 4 (Nahant Update 2)

Release: 4

Codename: NahantUpdate2

注:这个命令适用于所有的linux，包括Redhat、SuSE、Debian等发行版。

2) 登录到linux执行cat /etc/issue,例如如下:

[root@q1test01 ~]# cat /etc/issue

Red Hat Enterprise Linux AS release 4 (Nahant Update 2)

![查看内核版本命令_linux 查看内核命令_linux命令查看内核版本](https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_2.jpg)

Kernel r on an m

3) 登录到linux执行cat /etc/redhat-release ,例如如下:

[root@q1test01 ~]# cat /etc/redhat-release

Red Hat Enterprise Linux AS release 4 (Nahant Update 2)

注:这种方式下可以直接看到具体的版本号 **linux命令查看内核版本**，比如 AS4 Update 1

4) 登录到linux执行rpm -q redhat-release ,例如如下:

[root@q1test01 ~]# rpm -q redhat-release

![linux命令查看内核版本_linux 查看内核命令_查看内核版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_3.png)

redhat-release-4AS-3

注:这种方式下可看到一个所谓的release号长春linux培训red hat linux下载，比如上边的例子是3

这个release号和实际的版本之间存在一定的对应关系 **linux命令查看内核版本**，如下：

redhat-release-3AS-1 -> Redhat Enterprise Linux AS 3

redhat-release-3AS-7.4 -> Redhat Enterprise Linux AS 3 Update 4

redhat-release-4AS-2 -> Redhat Enterprise Linux AS 4

redhat-release-4AS-2.4 -> Redhat Enterprise Linux AS 4 Update 1

![linux 查看内核命令_linux命令查看内核版本_查看内核版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675519805586_4.png)

redhat-release-4AS-3 -> Redhat Enterprise Linux AS 4 Update 2

redhat-release-4AS-4.1 -> Redhat Enterprise Linux AS 4 Update 3

redhat-release-4AS-5.5 -> Redhat Enterprise Linux AS 4 Update 4

另:第3)、4)两种方法只对Redhat Linux有效.

查看系统是64位还是32位:

1、getconf LONG_BIT or getconf WORD_BIT

2、file /bin/ls

3、lsb_release -a
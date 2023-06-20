---



title: "Linux内核版本2.使用`uname`命令显示多个命令"
description: "Linux内核版本2.使用`uname`命令显示多个命令"
keywords: "Linux内核版本2.使用`uname`命令显示多个命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675319265561_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

```
请关注本头条号，每天坚持更新原创干货技术文章。如需学习视频，请在微信搜索公众号“智传网优”直接开始自助视频学习
```

1. 前言

内核是操作系统的核心组件。 它管理系统的资源linux通配符，是计算机硬件和软件之间的桥梁。

您可能因多种原因需要确切知道GNU / Linux操作系统上运行的内核版本。 也许您正在调试与硬件相关的问题linux基础教程，或者了解影响旧内核版本的新安全漏洞，并且您想知道您的内核是否易受攻击。 无论是什么原因，从命令行确定Linux内核版本都非常容易。

在本教程中，我们将向您展示几种不同的方法linux命令查看内核版本linux获取当前时间，以找出系统上运行的Linux内核版本。

怎么查看Linux内核版本

2. 使用`uname`命令查看Linux内核版本

uname命令显示多个系统信息，包括Linux内核体系结构 **linux查看软件版本命令** linux运维面试题，名称版本和发行版。

![linux命令查看内核版本_linux内核版本命令_查看linux系统内核信息命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675319265561_0.png)

要找出系统上正在运行的Linux内核版本，请输入以下命令：

```
uname -srm
```

输出结果：

Linux 3.10.0-957.12.2.el7.x86_64 x86_64

3 -- 内核版本.

10 -- 主修订版本.

0-957 -- 次要修订版本.

12 -- 补丁版本.

使用uname命令查看Linux内核版本

3. 使用`hostnamectl`命令查看内核版本

hostnamectl实用程序是systemd的一部分，用于查询和更改系统主机名。 它还显示Linux发行版和内核版本：

```
hostnamectl
```

![linux命令查看系统版本_linux查看软件版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675319265561_2.png)

Static hostname:

Icon name: computer-vm

Chassis: vm

Machine ID: 20c27040135a4d46b2d3d07180f37303

Boot ID: 2f495af0684e4adfb34f0366f2567460

Virtualization: vmware

Operating System: CentOS Linux 7 (Core)

CPE OS Name: cpe:/o:centos:centos:7

Kernel: Linux 3.10.0-957.12.2.el7.x86_64

Architecture: x86-64

使用以下命令只显示当前内核版本：

```
hostnamectl | grep -i kernel
```

使用hostnamectl命令查看内核版本

4. 通过查看/proc/version文件确认内核版本

/proc目录包含虚拟文件，其中包含有关系统内存linux命令查看内核版本，CPU内核，已安装文件系统等的信息。有关正在运行的内核的信息存储在/proc/version虚拟文件中。

结合cat查看文件内容：

```
cat /proc/version
```

输出结果如下：

Linux version 3.10.0-957.12.2.el7.x86_64 () (gcc version 4.8.5 20150623 (Red Hat 4.8.5-36) (GCC) ) #1 SMP Tue May 14 21:24:32 UTC 2019

![3812492e1de69b6d71263e14762ca2a6.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1675319265561_3.jpg)

使用hostnamectl命令查看内核版本

5.结论

我们已经向您展示了如何从命令行查找在您的系统上运行的Linux内核的版本。 这些命令适用于所有流行的Linux发行版，包括Debian，Red Hat **linux查看软件版本命令**，Ubuntu，Arch Linux，Fedora，CentOS，Kali Linux，OpenSUSE，Linux Mint等。
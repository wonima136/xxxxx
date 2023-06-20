---



title: "Linux环境中的历史命令–linux"
description: "Linux环境中的历史命令–linux"
keywords: "Linux环境中的历史命令–linux"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682367244574_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

这篇文章将为你们详尽讲解有关linux怎么查看历史命令linux site:infoq.cn，小编感觉挺实用的，因而分享给你们做个参考 **linux查看命令帮助**，希望你们阅读完这篇文章后可以有所收获。

linux查看历史命令可以使用history命令，该命令可以列举所有已键入的命令。用户所键入的命令还会记录在文件中，该文件保存在当前登入用户的家目录中。

![linux查看命令帮助_linux 查看本机ip命令_linux查看操作系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682367244574_0.jpg)

本文操作环境：centos7系统、thinkpadt480笔记本。

在Linux环境中可以通过方向键的上下按钮查看近日键入的命令。但这些方式只能一个一个的查看，虽然系统提供了查看所有历史命令的方式。

在终端中输入以下命令查看所有命令：

```
[root@template ~]# history
    1  ifconfig
    2  vim /etc/ssh/sshd_config
    3  /etc/init.d/sshd restart
    4  vim /boot/grub/grub.conf
    5  vim /etc/selinux/config
    6  vim /etc/sysconfig/network-scripts/ifcfg-eth0
    7  rm -rf /etc/udev/rules.d/70-persistent-net.rules
    8  useradd vsroot
    9  echo -e 'vsroottALL=(ALL)tNOPASSWD: ALL' >> /etc/sudoers
   10  yum clean all
   11  rm -rf /var/log/yum.log
   12  rm -rf /var/lib/yum/*
   13  rm -rf /root/install.log
   14  rm -rf /root/install.log.syslog
   15  rm -rf /var/log/anaconda.*
```

history命令列举了所有已键入的命令，用户所键入的命令还会记录在文件中 **linux查看命令帮助**，该文件保存在当前登入用户的家目录中。

文件名称为：.bash_history，该文件是一个隐藏文件。

历史操作命令的清理：

假如在服务器中干了不好的事情，可以通过“history-c”命令进行清理嵌入式linux论坛，这么其他人登陆终端时就难以查看历史操作命令了。

但此命令并不会消除保存在文件中的记录，因而须要自动删掉.bash_profile文件中的记录。

关于“linux怎么查看历史命令”这篇文章就分享到这儿了，希望以上内容可以对你们有一定的帮助，使诸位可以学到更多知识，假如认为文章不错，请把它分享出去让更多的人听到。
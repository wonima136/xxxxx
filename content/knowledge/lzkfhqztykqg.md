---



title: "linux查看防火墙状态与开启关闭命令有以下两种方式查看"
description: "linux查看防火墙状态与开启关闭命令有以下两种方式查看"
keywords: "linux查看防火墙状态与开启关闭命令有以下两种方式查看"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681848394249_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

小编给你们分享一下linux怎么查看防火墙状态与开启关掉命令，希望你们阅读完这篇文章以后都有所收获，下边让我们一起去阐述吧！

linux查看防火墙状态与开启关掉命令有以下两种形式：

一、service形式

查看防火墙状态：

```
[root@centos6 ~]# service iptables status
```

iptables：未运行防火墙。

开启防火墙：

```
[root@centos6 ~]# service iptables start
```

![linux 网络状态命令_linux 网络重启命令_linux 网络调试命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681848394249_0.jpg)

关掉防火墙：

```
[root@centos6 ~]# service iptables stop
```

二、iptables形式

先步入init.d目录 **linux 网络状态命令**，命令如下：

```
[root@centos6 ~]# cd /etc/init.d/
[root@centos6 init.d]#
```

之后

查看防火墙状态：

```
[root@centos6 init.d]# /etc/init.d/iptables status
```

![linux 网络重启命令_linux 网络调试命令_linux 网络状态命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681848394249_1.jpg)

暂时关掉防火墙：

```
[root@centos6 init.d]# /etc/init.d/iptables stop
```

重启iptables：

```
[root@centos6 init.d]# /etc/init.d/iptables restart
```

前面2个命令就是linux下常用查看防火墙状态与开启关掉的命令

哪些是Linux系统

Linux是一种免系统用和自由传播的类UNIX操作系统，是一个基于POSIX的多用户、多任务、支持多线程和多CPU的操作系统常用linux系统，使用Linux能运行主要的Unix工具软件、应用程序和网路合同。

看完了这篇文章，相信你对“linux怎么查看防火墙状态与开启关掉命令”有了一定的了解linux文本编辑器，假如想了解更多相关知识 **linux 网络状态命令**，欢迎关注亿速云行业资讯频道，谢谢诸位的阅读！
---



title: "本文介绍Linux查看发行版本和内核版本的方法(图)"
description: "本文介绍Linux查看发行版本和内核版本的方法(图)"
keywords: "本文介绍Linux查看发行版本和内核版本的方法(图)"
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

原文网址：Linux命令--查看发行版本/内核版本的方法_IT利刃出鞘的博客-CSDN博客

简介

本文介绍Linux查看发行版本和内核版本的方法。

查看发行版本 cat /etc/lsb_release

说明

(这个命令适用于大部分linux发行版本（除了redhat和centos等) 。

centos和redhat可能没有这个文件。可通过此命令查看版本：cat /etc/redhat-release

示例

备注

也可以使用lsb_release命令，不过此命令一般不自带。

```
lsb_release -a
```

LSB是Linux Standard Base的缩写linux论坛，lsb_release命令用来显示LSB和特定版本的相关信息。如果使用该命令时不带参数 **linux查看软件版本命令 linux查看软件版本命令** linux qq，则默认加上-v参数。

```html
-v 显示版本信息。
-i 显示发行版的id。
-d 显示该发行版的描述信息。

-r 显示当前系统是发行版的具体版本号。
-c 发行版代号。
-a 显示上面的所有信息。
-h 显示帮助信息。
```

cat /etc/issue

说明

适用与大部分版本。但centos结果可能会比较奇怪：

```
[root@vps ~]# cat /etc/issue

S
Kernel r on an m
```

示例

```
Ubuntu 18.04.3 LTS n l
```

cat /proc/version

说明

适用于所有版本。

示例

```
[root@vps ~]# cat /proc/version
Linux version 3.10.0-514.26.2.el7.x86_64 (builder@kbuilder.dev.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-11) (GCC) ) #1 SMP Tue Jul 4 15:04:05 UTC 2017
```

查看内核版本 cat /proc/version

说明

适用于所有版本。

示例

```
[root@vps ~]# cat /proc/version

Linux version 3.10.0-514.26.2.el7.x86_64 (builder@kbuilder.dev.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-11) (GCC) ) #1 SMP Tue Jul 4 15:04:05 UTC 2017
```

uname -a

说明

适用于所有版本。

示例

```
[root@localhost ~]# cat /proc/version
Linux version 2.6.32-696.16.1.el6.x86_64 (mockbuild@c1bl.rdu2.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-18) (GCC) ) #1 SMP Wed Nov 15 16:51:15 UTC 2017
```

推荐一套帮你稳过面试的Java后端真实面试题：扎沃面试
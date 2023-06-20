---



title: "( （每日一题) 安装-yinstallbind"
description: "( （每日一题) 安装-yinstallbind"
keywords: "( （每日一题) 安装-yinstallbind"
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

DNS安装

yum-yinstallbindbind-chroot

旁边是DNS安全包 **linux什么命令用于dns服务解析**，改变默认DNS根目录，可以避免某一个服务出现漏洞因而遗失所有数据的情况发生，可选安装。(这儿以使用bind-chroot为例)

启动命令

不使用chroot模式：

systemctlstartnamed

使用chroot模式：

systemctlstartname-chroot

配置文件目录

使用chroot模式linux伊甸园，改变后的根目录在/var/named/chroot/

不使用chroot模式

主配置文件/etc/namd.conf

解析文件(区域数据库文件)/var/named/

使用chroot模式

主配置文件/var/named/chroot/etc/namd.conf

解析文件(区域数据库文件)/var/named/chroot/var/named/

这儿我们使用chroot模式 **linux什么命令用于dns服务解析**，所以我们要将主配置文件和区域数据库文件复制到相应目录下。

cp-p/etc/named.conf/var/named/chroot/etc/

cp-p/var/named/named.*/var/named/chroot/var/named/

-p选项是保持原有属性不变(属主，属组)

启动报错

这是由于我们没有更改配置文件，接出来更改配置文件。

我们要实现的功能如下：

对域名做解析，解析要求：

www解析为A记录IP地址为192.168.1.145

nopro做别称解析(CNAME)解析为www

更改主配置文件

vim/var/named/chroot/etc/named.conf

在全局配置中更改：

添加：

zone旁边跟的是解释的域名；

IN是解释说明

type是类型

file是区域数据库文件名(文件名随意填，待会儿只要构建相对应的文件就可以)

解释说明中每行都要以分号结尾，尖括弧前面也要跟分号

构建区域数据库文件

cp-p/var/named/chroot/var/named/named.linuxcool/var/named/chroot/var/named/.zone

配置区域数据库文件

检测主配置文件

named-checkconf/var/named/chroot/etc/named.conf

检测区域数据库文件

named-checkzone/var/named/chroot/var/named/.zone

重启DNS服务

systemctlrestartnamed-chroot

域名解析

首先要将另一台虚拟机的DNS设为你开启DNS服务器的虚拟机的IP地址，在配置文件/etc/resolv.conf添加：

nameserverDNS服务器地址

注意这儿更改配置文件的是你要测试的虚拟机，而不是你开启DNS服务的那台虚拟机。

解析命令

nslookup域名
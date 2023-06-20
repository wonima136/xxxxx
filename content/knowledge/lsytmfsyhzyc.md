---



title: "Linux是一套免费使用和自由传播的类Unix操作系统"
description: "Linux是一套免费使用和自由传播的类Unix操作系统"
keywords: "Linux是一套免费使用和自由传播的类Unix操作系统"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679292064190_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。下边小编整理了Linux系统常用的网路命令及使用方式，希望对你们有帮助!

1、ping

ping命令工作在OSI参考模型的第三层-网路层。

ping命令会发送一个数据包到目的主机，之后等待从目的主机接收回复数据包，当目的主机接收到这个数据包时 **linux系统命令topfree的使用及参数详解**，为源主机发送回复数据包，这个测试命令可以帮助网路管理者测试抵达目的主机的网路是否联接。

ping难以检测系统端口是否开放。

2、telnet

Telnet是坐落OSI模型的第7层—应用层上的一种合同linux常用命令，是一个通过创建虚拟终端提供联接到远程主机终端仿真的TCP/IP合同。这一合同须要通过用户名和口令进行认证，是Internet远程登录服务的标准合同。应用Telnet合同能否把本地用户所使用的计算机弄成远程主机系统的一个终端。它提供了三种基本服务：

1)Telnet定义一个网路虚拟终端为远程系统提供一个标准插口。顾客机程序毋须详尽了解远程系统，她们只需构造使用标准插口的程序;

2)Telnet包括一个容许顾客机和服务器协商选项的机制，并且它还提供一组标准选项;.

3)Telnet对称处理联接的两端，即Telnet不逼迫顾客机从按键输入，也不逼迫顾客机在屏幕上显示输出。

telnet可以检测某个端口是否开放：telnetIP:Port

3、ssh

安全套接层(SecureSocketLayer，简称SSL)合同是构建在应用层和传输层基础上的安全合同，可以拿来取代Telnet、FTP以及R命令，主要是用于解决口令在网上明文传输的`问题。用Telnet和FTP登陆服务器时，密码以明文的方式发送给服务器，怀有恶意的人可以通过窃听网路上传输的数据包，得到用户的登入信息。通过使用SSH，用户可以把所有传输的数据进行加密，并且还才能避免DNS和IP误导，还有一个额外的用处就是传输的数据是经过压缩的，所以可以推动传输的速率。其特点是：

1)SSH可以为浏览器和服务器的联系提供透明的保护。

2)所有的联接都可以手动地加密，而且不会遭到损害。

![linux route 命令详解_linux系统命令topfree的使用及参数详解_linux lspci命令详解](https://www.linuxcool.com/wp-content/uploads/2023/03/1679292064190_0.png)

3)SSH加密整个传输过程。为此，才能避免任何在顾客端和服务器之间的第二者见到传输内容。

4)SSH安装容易、使用简单，但是比较常见，通常的UNIX系统、Linux系统、FreeBSD系统都附送有支持SSH的应用程序包。

4、netstat

Netstat命令用于显示各类网路相关信息，如网路联接，路由表，插口状态(InterfaceStatistics)，masquerade联接，多播成员(MulticastMemberships)等等。常用参数如下：

-aall)显示所有选项 **linux系统命令topfree的使用及参数详解** linux入门，默认不显示LISTEN相关

-ttcp)仅显示tcp相关选项

-uudp)仅显示udp相关选项

-n拒绝显示别称，能显示数字的全部转化成数字。

-l仅列举有在Listen(窃听)的服務状态

-p显示构建相关链接的程序名

-r显示路由信息，路由表

-e显示扩充信息，比如uid等

-s按各个合同进行统计

-c每隔一个固定时间，执行该netstat命令。

netstat用与检测某个端口是否开放如下：netstat-lnp|grep端标语。

linux系统命令大全

系统

#uname-a#查看内核/操作系统/CPU信息

#head-n1/etc/issue#查看操作系统版本

#cat/proc/cpuinfo#查看CPU信息

#hostname#查看计算机名

#lspci-tv#列举所有PCI设备

#lsusb-tv#列举所有USB设备

#lsmod#列举加载的内核模块

#env#查看环境变量

资源

#free-m#查看显存使用量和交换区使用量

#df-h#查看各分区使用情况

#du-sh#查看指定目录的大小

#grepMemTotal/proc/meminfo#查看显存总数

#grepMemFree/proc/meminfo#查看空闲显存量

#uptime#查看系统运行时间、用户数、负载

#cat/proc/loadavg#查看系统负载

c盘和分区

#mount|column-t#查看挂接的分区状态

#fdisk-l#查看所有分区

#swapon-s#查看所有交换分区

#hdparm-i/dev/hda#查看c盘参数(仅适用于IDE设备)

#dmesg|grepIDE#查看启动时IDE设备检查状况

网路

#ifconfig#查看所有网路插口的属性

#iptables-L#查看防火墙设置

#route-n#查看路由表

#netstat-lntp#查看所有窃听端口

#netstat-antp#查看所有早已构建的联接

#netstat-s#查看网路统计信息

进程

#ps-ef#查看所有进程

#top#实时显示进程状态

用户

#w#查看活动用户

#id#查看指定用户信息

#last#查看用户登入日志

#cut-d:-f1/etc/passwd#查看系统所有用户

#cut-d:-f1/etc/group#查看系统所有组

#crontab-l#查看当前用户的计划任务

服务

#chkconfig--list#列举所有系统服务

#chkconfig--list|grepon#列举所有启动的系统服务

程序

#rpm-qa#查看所有安装的软件包

【Linux系统常用的网路命令及使用方式】相关文章：

Linux系统与VIM常用的命令09-20

Linux系统常用操作命令10-07

常用Linux系统Debug命令09-11

Linux系统常用的查看命令09-06

Linux系统巡检常用的命令09-08

Linux系统中smbclient命令的使用方式08-08

linux系统下dd命令的使用方式08-09

Linux系统top命令的使用方式介绍03-09

linux系统下sudo命令使用方式08-20
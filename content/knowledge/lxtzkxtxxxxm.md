---



title: "linux系统查看系统详细信息命令大全，帮助对不熟悉Linux系统的用户学习熟悉常规操作命令"
description: "linux系统查看系统详细信息命令大全，帮助对不熟悉Linux系统的用户学习熟悉常规操作命令"
keywords: "linux系统查看系统详细信息命令大全，帮助对不熟悉Linux系统的用户学习熟悉常规操作命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674742135169_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统如何查看系统信息 **linux系统信息命令** linux移植，下面IT备忘录小编就给大家收集分享下linux系统查看系统详细信息命令大全，帮助对不熟悉Linux系统的用户学习熟悉常规操作命令。# uname -a # 查看内

Linux系统如何查看系统信息，下面IT备忘录小编就给大家收集分享下linux系统查看系统详细信息命令大全，帮助对不熟悉Linux系统的用户学习熟悉常规操作命令。

# uname -a # 查看内核/操作系统/CPU信息

# head -n 1 /etc/issue # 查看操作系统版本

# cat /proc/cpuinfo # 查看CPU信息

# hostname # 查看计算机名

# lspci -tv # 列出所有PCI设备

# lsusb -tv # 列出所有USB设备

# lsmod # 列出加载的内核模块

# env # 查看环境变量资源

# free -m # 查看内存使用量和交换区使用量

# df -h # 查看各分区使用情况

# du -sh # 查看指定目录的大小

# grep MemTotal /proc/meminfo # 查看内存总量

# grep MemFree /proc/meminfo # 查看空闲内存量

# uptime # 查看系统运行时间、用户数、负载

# cat /proc/loadavg # 查看系统负载磁盘和分区

# mount | column -t # 查看挂接的分区状态

# fdisk -l # 查看所有分区

# swapon -s # 查看所有交换分区

# hdparm -i /dev/hda # 查看磁盘参数(仅适用于IDE设备)

# dmesg | grep IDE # 查看启动时IDE设备检测状况网络

![linux系统重启命令_linux系统信息命令_linux查看硬盘信息命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674742135169_0.jpg)

# ifconfig # 查看所有网络接口的属性

# iptables -L # 查看防火墙设置

# route -n # 查看路由表

# netstat -lntp # 查看所有监听端口

# netstat -antp # 查看所有已经建立的连接

# netstat -s # 查看网络统计信息进程

# ps -ef # 查看所有进程

# top # 实时显示进程状态用户

# w # 查看活动用户

# id # 查看指定用户信息

# last # 查看用户登录日志

# cut -d: -f1 /etc/passwd # 查看系统所有用户

# cut -d: -f1 /etc/group # 查看系统所有组

# crontab -l # 查看当前用户的计划任务服务

# chkconfig –list # 列出所有系统服务

# chkconfig –list | grep on # 列出所有启动的系统服务程序

# rpm -qa # 查看所有安装的软件包

温馨提示：大家只需要输入 # 中间的命令即可，用法如下图所示：

备注：命令适用于大部分类型的Linux内核系统 **linux系统信息命令**，包括国内的linux操作系统怎么样，深度Deepin Linux、统信UOS……

相关内容标签

linux

)
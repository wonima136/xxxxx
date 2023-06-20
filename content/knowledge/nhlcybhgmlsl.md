---



title: "( 内含Linux常用必会60+个命令实例以及详解（二)"
description: "( 内含Linux常用必会60+个命令实例以及详解（二)"
keywords: "( 内含Linux常用必会60+个命令实例以及详解（二)"
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

文件为压缩包，内包含doc、pdf版本任君选择。本资源部分源自网络 **linux压缩文件命令tgz**，如有纰漏还望告知。整理不易，如果觉得不错红旗 linuxlinux命令行，请点赞留言，谢谢！！！本资源专为入门学习Linux的新手们量身定制。内含Linux常用必会60+个命令实例以及详解。Linux提供了大量的命令，利用它可以有效地完成大量的工作，如磁盘操作、文件存取、目录操作、进程管理、文件权限设定等。所以，在Linux系统上工作离不开使用系统提供的命令。要想真正理解Linux系统 **linux压缩文件命令tgz**，就必须从Linux命令学起，通过基础的命令学习可以进一步理解Linux系统。一、系统：# uname -a# 查看内核/操作系统/CPU信息# head -n 1 /etc/issue# 查看操作系统版本# cat /proc/cpuinfo# 查看CPU信息# hostname# 查看计算机名# lspci -tv# 列出所有PCI设备# lsusb -tv# 列出所有USB设备# lsmod# 列出加载的内核模块# env# 查看环境变量二、资源：# free -m# 查看内存使用量和交换区使用量# df -h# 查看各分区使用情况# du -sh# 查看指定目录的大小# grep MemTotal /proc/meminfo # 查看内存总量# grep MemFree /proc/meminfo # 查看空闲内存量# uptime# 查看系统运行时间、用户数、负载# cat /proc/loadavg# 查看系统负载三、磁盘与分区：# mount | column -t# 查看挂接的分区状态# fdisk -l# 查看所有分区# swapon -s# 查看所有交换分区# hdparm -i /dev/hda# 查看磁盘参数(仅适用于IDE设备)# dmesg | grep IDE# 查看启动时IDE设备检测状况…………………………………………………………………………
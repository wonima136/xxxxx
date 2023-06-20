---



title: "ipcalc命令 – 简单的IP地址计算器"
description: "ipcalc命令 – 简单的IP地址计算器"
keywords: "ipcalc命令 – 简单的IP地址计算器"
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

ipcale命令来自英文词组“IP Calculate”的缩写，其功能是用于简单的IP地址计算任务。比起Linux命令参数来说，网络地址转换更加让人头疼，如何快速地知道一个IP地址所对应的子网掩码、网络地址、广播地址及对应主机名信息？不用再发愁了，把问题抛给ipcalc命令就好。

**语法格式：** ipcalc [参数] IP地址

**常用参数：**

-b由IP地址和网络掩码计算出广播地址-c验证指定族下的IP地址-h由IP地址找出所对应的主机名-m由IP地址计算出网络掩码-n由IP地址和网络掩码计算出网络地址-p显示掩码或IP地址的前缀-s静默执行模式--ipv4基于IPv4网络协议--ipv6基于IPv6网络协议--help显示帮助信息

**参考示例**

由指定的IP地址和子网掩码显示对应的子网掩码：

```
[root@linuxcool ~]# ipcalc -p 192.168.10.10 255.255.255.0
PREFIX=24
```

由指定的IP地址和子网掩码计算出网络地址：

```
[root@linuxcool ~]# ipcalc -n 192.168.10.10 255.255.255.0
NETWORK=192.168.10.0
```

由指定的IP地址找出所对应的主机名：

```
[root@linuxcool ~]# ipcalc -h 192.168.10.10
HOSTNAME=www.linuxcool.com
```

由指定的信息，计算出IP地址的子网掩码、广播地址和网络地址：

```
[root@linuxcool ~]# ipcalc -m -b -n 192.168.10.10/28
NETMASK=255.255.255.240
BROADCAST=192.168.10.15
NETWORK=192.168.10.0
```
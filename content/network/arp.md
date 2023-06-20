---



title: "arp命令 – 管理系统arp缓存信息"
description: "arp命令 – 管理系统arp缓存信息"
keywords: "arp命令 – 管理系统arp缓存信息"
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

arp命令来自英文词组“Address Resolution Protocol”的缩写，其功能是用于管理系统arp缓存信息。该命令用于管理Linux系统中arp缓存信息，能够显示、添加、删除指定的条目，或对IP地址及MAC地址进行绑定操作。

**语法格式：** arp [参数] [IP地址]

**常用参数：**

-a显示所有条目-d删除指定条目-D使用硬件地址-e设置显示风格-fIP地址与MAC地址静态映射-g显示ARP缓存列表-H设置地址类型-i设置网络接口 -n使用数字方式显示条目 -v显示执行过程详细信息--version显示版本信息

**参考示例**

显示本机arp缓存中所有记录：

```
[root@linuxcool ~]# arp
Address       HWtype     HWaddress            Flags Mask          Iface
gateway       ether      00:03:0f:81:6b:f1    C                   ens160
```

以数字方式显示指定主机arp缓存条目：

```
[root@linuxcool ~]# arp -n 192.168.10.10
Address            HWtype  HWaddress           Flags Mask         Iface
192.168.10.10      ether   00:03:0f:81:6b:f1   C                  ens160
```

删除指定主机网卡上的arp条目：

```
[root@linuxcool ~]# arp -i ens160 -d 192.168.10.10
```

添加对指定的IP地址和MAC地址进行静态映射条目：

```
[root@linuxcool ~]# arp -s 192.168.10.10 00:03:0f:81:6b:f1
```
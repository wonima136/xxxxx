---



title: "route命令 – 显示与设置路由信息"
description: "route命令 – 显示与设置路由信息"
keywords: "route命令 – 显示与设置路由信息"
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

route命令的功能是用于显示与设置路由信息，是Linux系统中常用的静态路由配置工具。要想让两台处在不同子网之间的服务器能够通信，需要有一个跨网段的路由器来连接它们，并用route命令为其设置路由信息，提供软硬件的支撑。

**语法格式：** route [参数] [域名或IP地址]

**常用参数：**

-A设置网络地址类型-C显示内核路由缓存信息-e设置路由表显示格式-F设置内核FIB路由表参数-n显示数字形式的IP地址-v显示执行过程详细信息-host一个主机的路由表-net一个网络的路由表

**常用动作：**

(Add增加指定的路由记录Del删除指定的路由记录Target目的网络或目的主机gw设置默认网关mss设置TCP的最大区块长度（MB) window指定通过路由表的TCP连接的窗口大小dev路由记录所表示的网络接口

**参考示例**

显示当前路由表信息：

```
[root@linuxcool ~]# route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
192.168.10.0    0.0.0.0         255.255.255.0   U     100    0        0 ens160
192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0
```

添加一条指定的路由信息：

```
[root@linuxcool ~]# route add -net 192.168.10.0 netmask 255.255.255.0 dev ens160
```

删除一条指定的路由信息：

```
[root@linuxcool ~]# route del -net 192.168.10.0 netmask 255.255.255.0 dev ens160
```

添加和删除默认网关：

```
[root@linuxcool ~]# route add default gw 192.168.10.1
[root@linuxcool ~]# route del default gw 192.168.10.1
```
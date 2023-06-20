---



title: "iptraf-ng命令 – 交互式彩色IP LAN监视器"
description: "iptraf-ng命令 – 交互式彩色IP LAN监视器"
keywords: "iptraf-ng命令 – 交互式彩色IP LAN监视器"
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

iptraf-ng命令是一个基于ncurses的IP LAN监视器，可生成各种网络统计信息，包括TCP信息，UDP计数，ICMP和OSPF信息，以太网负载信息，节点统计信息，IP校验和错误等等。

**语法格式：** iptraf-ng [参数] [接口]

**常用参数：**

**--** d

(允许您立即启动指定接口上的详细信息（iface)  --z 显示指定接口上的数据包计数大小 -i

立即在指定接口启动IP流量监视器。如果指定了“-i all”，则所有接口上 **--** z 显示指定接口上的数据包计数大小 -u

允许使用不受支持的接口作为以太网设备。 如果更改了接口的名称，则需要这样做 -g 立即启动常规接口统计

**参考实例**

立即启动指定接口上的详细信息：

```
[root@linuxcool ~]# iptraf-ng -d eth5
```

显示数据包计数大小：

```
[root@linuxcool ~]# iptraf-ng -z eth5
```

立即启动常规接口统计：

```
[root@linuxcool ~]# iptraf-ng -g eth5
```
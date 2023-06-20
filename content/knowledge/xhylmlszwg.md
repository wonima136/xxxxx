---



title: "学会用Linux命令设置网关"
description: "学会用Linux命令设置网关"
keywords: "学会用Linux命令设置网关"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686427324205_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在日常工作和学习中，我们经常会遇到网络不稳定、网速慢等问题。这时候，我们需要通过设置网关等手段来优化网络。本文将为大家详细介绍Linux网关命令的使用方法。

**一、查看当前网关**

在Linux系统中，通过route命令可以查看当前系统的路由表信息，包括默认网关信息。具体命令如下：

```
route -n
```

该命令可以列出当前系统的路由表信息arch linux，其中“Gateway”一列即为默认网关的IP地址。

**二、添加静态路由**

当我们需要访问一个不在同一子网内的IP地址时，需要添加静态路由。通过以下命令添加静态路由：

```
route add -net 目标网络 netmask 子网掩码 gw 网关地址
```

其中，“目标网络”为需要访问的网络地址，“子网掩码”为目标网络的子网掩码，“网关地址”为该网络的默认网关地址。

**三、删除静态路由**

如果不再需要某个静态路由，可以通过以下命令进行删除：

```
route del -net 目标网络 netmask 子网掩码 gw 网关地址
```

其中，“目标网络”、“子网掩码”及“网关地址”与添加静态路由时的参数一致。

**四、设置默认网关**

如果当前系统没有默认网关或需要更改默认网关 **linux 网关 命令**，可以通过以下命令进行设置：

```
route add default gw 网关地址
```

其中，“网关地址”为需要设置的默认网关地址。

**五、开启IP转发**

如果我们需要将Linux系统作为网络的中转站，需要开启IP转发功能。可以通过以下命令进行开启：

```
echo 1 >/proc/sys/net/ipv4/ip_forward
```

该命令将IP转发功能开启，并将其写入到系统文件中 **linux 网关 命令**，保证下次重启后仍能生效。

**六、配置SNAT**

如果我们想让内网中的主机访问外网，需要进行SNAT配置。可以通过以下命令进行配置：

```
iptables -t nat -A POSTROUTING -s内网地址/掩码-j SNAT --to-source 公网IP地址
```

其中，“内网地址/掩码”为内网的IP地址和子网掩码，“公网IP地址”为Linux服务器所在外网的公网IP地址。

**七、配置DNAT**

如果我们想让外部主机访问内部主机，需要进行DNAT配置。可以通过以下命令进行配置：

```
iptables -t nat -A PREROUTING -d公网IP地址-p tcp --dport 端口号-j DNAT --to-destination 内部主机IP:端口号
```

其中，“公网IP地址”为Linux服务器所在外网的公网IP地址，“端口号”为需要映射的端口号，“内部主机IP”为需要访问的内部主机的IP地址。

**八、配置端口映射**

如果我们需要将某个端口映射到另一个端口，可以通过以下命令进行配置：

```
iptables -t nat -A PREROUTING -p tcp --dport 原始端口号-j REDIRECT --to-port 目标端口号
```

其中，“原始端口号”为需要映射的原始端口号，“目标端口号”为映射后的目标端口号。

**九、限制访问速率**

当我们需要限制某个主机或网络的访问速率时，可以通过以下命令进行配置：

![linux 网关 命令_linux双线双网卡双ip双网关设置方法_centos修改网关命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686427324205_1.jpg)

```
tc qdisc add dev 网卡名 root handle 1: htb default 10
tc class add dev 网卡名 parent 1: classid 1:1 htb rate 限速值 burst 15k
tc filter add dev 网卡名 parent 1: protocol ip prio 100 handle 1 fw flowid 1:1
iptables -A FORWARD -s源IP地址/掩码-j MARK --set-mark 1
```

其中，“网卡名”为需要限制访问速率的网络接口名称，“限速值”为需要限制的速率值LINUX虚机，单位为kbps，“源IP地址/掩码”为需要限制速率的主机或网络地址。

**十、配置负载均衡**

当我们需要将访问请求分配到多个服务器上，可以通过以下命令进行负载均衡配置：

```
iptables -t nat -A PREROUTING -p tcp --dport 目标端口号-m statistic --mode nth --every 2 --packet 0 -j DNAT --to-destination 内部主机1:端口号
iptables -t nat -A PREROUTING -p tcp --dport 目标端口号-m statistic --mode nth --every 2 --packet 1 -j DNAT --to-destination 内部主机2:端口号
```

其中，“目标端口号”为需要进行负载均衡的端口号，“内部主机1”和“内部主机2”为需要进行负载均衡的服务器IP地址。

本文介绍了Linux网关命令的常用操作，包括查看当前网关、添加静态路由、设置默认网关、开启IP转发、配置SNAT、配置DNAT、配置端口映射、限制访问速率以及配置负载均衡等。希望可以帮助大家更好地解决网络问题，提升工作效率。
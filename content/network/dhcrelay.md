---



title: "dhcrelay命令 – 提供中继DHCP和BOOTP请求"
description: "dhcrelay命令 – 提供中继DHCP和BOOTP请求"
keywords: "dhcrelay命令 – 提供中继DHCP和BOOTP请求"
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

dhcrelay命令可以提供中继DHCP和BOOTP请求，从一个没有DHCP服务器的子网直接连接到其它子网内的一个或多个DHCP服务器。该命令在DHCP中继服务器上使用，同时支持DHCPv4/BOOTP和DHCPv6协议。

DHCP中继代理在一个或多个接口上侦听来自客户端或其他中继代理的DHCPv4或DHCPv6查询，并将其传递到指定的“上游”服务器或中继代理。从上游接收到答复后，会将其组播或单播发送回原始请求的源。

**语法格式:** dhcrelay [参数] [DHCP服务器]

**常用参数：**

-c <跳数>当转发数据包时，dhcrelay丢弃已经达到一个最大跳数的数据包。默认值是10，最大值是255-4运行dhcrelay命令作为DHCPv4/BOOTP中继代理。这是默认操作模式-6运行dhcrelay命令作为DHCPv6中继代理-q安静模式-p <端口>监听和发送端口。DHCPv4/BOOTP默认端口是67，DHCPv6默认端口是547-A <长度>指定发送到DHCP服务器的最大数据包大小-d强制dhcrelay命令作为前台进程运行

**参考实例**

指定DHCP服务器：

```
[root@linuxcool ~]# dhcrelay 192.168.20.4
```

指定到DHCP服务器的最大挑数：

```
[root@linuxcool ~]# dhcrelay -c 15 192.168.20.4
```

发送到DHCP服务器的最大数据包：

```
[root@linuxcool ~]# dhcrelay -A 2048 192.168.20.4
```
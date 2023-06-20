---



title: "快速了解Linux上查询外网IP的内置命令！"
description: "快速了解Linux上查询外网IP的内置命令！"
keywords: "快速了解Linux上查询外网IP的内置命令！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677132823717_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux是一款功能强大的开源操作系统 **linux查询外网ip命令** 中标麒麟linux，它可以让用户在终端中执行各种操作，其中包括查询外网IP命令。当用户需要获取本机的外网IP时，可以使用Linux上的一些内置命令来实现。本文将对Linux上查询外网IP命令进行详细介绍。

首先，要了解Linux上查询外网IP的命令，需要先了解一下什么是外网IP。外网IP是一个唯一的IP地址嵌入式linux，它是由因特网服务提供商(ISP)分配的 **linux查询外网ip命令**，用于标识用户设备的公共地址。因此，如果想要在Linux上查询本机的外部IP，就需要使用Linux上的一些内置命令来实现。

Linux上可用于查询外部IP的命令主要有curl、dig、hostname、ifconfig、ip、ping和whois。这些命令都可以帮助用户快速准确地获取到本机的外部IP。

1. curl 命令

![外网ip命令_linux 查询外网ip_linux查询外网ip命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132823717_0.png)

curl是一个功能强大的文件传输工具，它可用于各种不同协议之间进行数据传输。通过curl命令，可以很方便地获取到本机的外部IP地址：

运行上面的命令后，就会显示出本机当前的外部IP地址。

2. dig 命令

dig是一个DNS信息查询工具，它可帮助用户快速准确地获得DNS信息。如果想要在Linux上使用dig命令来获取到本机当前的外部IP地址：

![外网ip命令_linux查询外网ip命令_linux 查询外网ip](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132823717_1.png)

运行上面的命令后，就会显示出本机当前的外部IP地址。

3. hostname 命令

hostname是一个很常用的 Linux 命令，它可帮助你显示或者修改 Linux 主机名。如果想要使用hostname来获取到当前主机的外部 IP 地址：

运行上面的命令后，就会显示出当前主机的所有 IP 地址中包含的公共 IP 地址信息。

4. ifconfig 命令

ifconfig 是 Linux 中常用来配置 IP 和812de32961276143c018251ad90a1c44地址信息、显示/修改 MTU 等功能的工具。如果想要使用ifconfig来获得到当前主机所使用的公共 IP 地址信息：

$ ifconfig | grep -Eo ‘inet (addr:)?([0-9]*.){3}[0-9]*’| grep -Eo ‘([0-9]*.){3}[0-9]*’| grep -v’127.0.1’

运行上面这条命令后，就会显示出当前主机所使用的公共 IP 地址信息。

![linux查询外网ip命令_外网ip命令_linux 查询外网ip](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132823717_2.jpg)

5. ip 命令

ip 是 Linux 中常用来显示、配置 IP 等功能的工具：

运行上面这条命令后,就会显示出当前主机所使用的公共 IP 地址。

6. ping 命令

![linux查询外网ip命令_外网ip命令_linux 查询外网ip](https://www.linuxcool.com/wp-content/uploads/2023/02/1677132823717_3.jpg)

ping 是一个测试目标主机是否存活并测量整体耗时(RTT)等功能的工具：

$ ping -c 1 | grep PING | awk ‘{print $3}’| cut -d'(‘-f2 | cut -d’)’-f1

运行上面这条命令后,就会显示出当前主机所使用的相应外部 IP 地址。

7. whois 命令

whois 是一个DNS信息查询工具：
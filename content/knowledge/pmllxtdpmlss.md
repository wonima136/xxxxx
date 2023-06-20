---



title: "ping 命令 linux Linux系统的Ping命令是什么？了解Linux上的测量工具"
description: "ping 命令 linux Linux系统的Ping命令是什么？了解Linux上的测量工具"
keywords: "ping 命令 linux Linux系统的Ping命令是什么？了解Linux上的测量工具"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676930737922_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在 Linux 操作系统中，Ping 命令是一种网络测试工具，用于检查两个网络节点之间的连通性。Ping 命令可以用来测量两个网络节点之间的延迟时间，往返时间和数据包丢失情况。它也可以测量本地计算机到其他远程计算机的延迟时间 **ping 命令 linux**，并检查是否有任何故障或者中断。

Ping 命令最初是在 Unix 上开发的 **ping 命令 linux**，但是它后来也出现在其他操作系统上，例如 Windows 和 Linux。它的使用非常广泛linux vi 命令，在大多数的 Unix 系统上都能够使用。

![ping命令_linux命令vi进入后命令_ping 命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930737922_0.png)

(要使用 Ping 命令，首先要明确要测试的地址或者主机名。然后在命令行中输入 ping （hostname 代表要测试的 IP 地址或者主机名) 就可以开始测试了。

Ping 命令会发出一个 ICMP 报文并对应用层协议不敏感，它可以用来测试 TCP/IP 的连通性，而不需要使用特定的应用协议。ICMP 报文会发送一个 Echo 请求到目标节点并接收回应 Echo Reply 报文。

![ping 命令 linux_ping命令_linux命令vi进入后命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930737922_1.png)

Ping 命令会针对目标节点发送多个 ICMP 报文，每一个 ICMP 报文都会带有一个序列号和一些数据。如果目标节点正常工作，它会回复一个 Echo Reply 报文到源节点，其中包含原始 ICMP 报文中所带有的序列号和数据。根据回复 Echo Reply 报文的时间来测量距目标节点的往返时间。

![linux命令vi进入后命令_ping 命令 linux_ping命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930737922_2.png)

(如果 Ping 命令执行时没有显式声明特定的 IP 地址或者主机名（例如 ping linuxcool 或者 ping 127.0.1) ，Linux 系统会首先尝试使用配置的默认 IP 地址去 Ping 相应的 IP 端口或者 DNS 服务器。如果配置了 DNS 服务器，Linux 系统会尝试使用 DNS 解析相应的 IP 地址并 Ping 请求。

![ping 命令 linux_ping命令_linux命令vi进入后命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930737922_3.png)

此外linux系统入门学习，Linux 还能够使用 traceroute、tracepath、mtr 等命令来测量数据包在互联网上所走过的所有路径信息。traceroute、tracepath、mtr 都是 Linux 上常用测量工具之一；相对于 Ping 命令来说它能够显式地打印出数据包所途径所有中间路径上的时间信息、IP 地址信息、TTL 信息、MTU 信息、ICMP 错误信息、DNS 解析信息、TCP 连接信息、UDP 连接信息、IP Fragment 信息、HTTP 链接信息、SSL 连接信息、FTP 连接信心、SMTP 连接信心、POP3 连心信心、IMAP 连心信心和 SSH 连心信心。因此 traceroute/tracepath/mtr 三者都是 Linux 上非常好用而强大的测量工具之一。

总而言之，Linux Ping 命令是一个非常方便而强大的工具；它不但能够帮助我们测量本地到远端之间的往返时间情况而且也能够帮助我们显式地打印出数字包所途径所有中间路径上的时间信心、IP 地址信心、TTL 信心、MTU 信心、ICMP 错误信心……
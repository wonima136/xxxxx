---



title: "dhclient命令 – 动态获取或释放IP地址"
description: "dhclient命令 – 动态获取或释放IP地址"
keywords: "dhclient命令 – 动态获取或释放IP地址"
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

dhclient命令来自英文词组“DHCP client”的缩写，其功能是用于动态获取或释放IP地址。使用dhclient命令前需要将网卡模式设置成DHCP自动获取，否则静态模式的网卡是不会主动向服务器获取如IP地址等网卡信息的。

**语法格式：** dhclient 参数 [网卡名]

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-d以前台方式运行-F设置向DHCP服务器发送的FQDN-H设置向DHCP服务器发送的主机名-n不配置任何接口-p设置DHCP客户端监听的端口号-q静默执行模式-r释放IP地址-s在获取IP地址前指定DHCP服务器-v显示执行过程详细信息-V设置要发送给DHCP服务器的厂商类标识符-w即使没有找到广播接口，也继续运行-x停止DHCP客户端，而不释放当前租约--timeout设置最大响应超时时间--version显示版本信息

**参考示例**

通过指定网卡发起DHCP请求，获取网卡参数：

```
[root@linuxcool ~]# dhclient ens160
```

释放系统中已获取的网卡参数：

```
[root@linuxcool ~]# dhclient -r
Killed old client process
```

向指定的服务器请求获取网卡参数：

```
[root@linuxcool ~]# dhclient -s 192.168.10.10
```

手动停止执行dhclient服务进程：

```
[root@linuxcool ~]# dhclient -x
Removed stale PID file
```
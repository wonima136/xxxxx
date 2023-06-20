---



title: "nmap命令 – 网络探测及端口扫描工具"
description: "nmap命令 – 网络探测及端口扫描工具"
keywords: "nmap命令 – 网络探测及端口扫描工具"
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

nmap命令来自英文词组“Network Mapper”的缩写，中文译为网络映射器，其功能是用于网络探测及端口扫描工具。nmap是一款开放源代码的网络探测和安全审计工具，能够快速扫描互联网、局域网或单一主机上的开放信息，基于原始IP报文数据自动分析出网络上有哪些主机，主机上提供何种服务，服务程序又是什么版本，为日常维护和安全审计提供数据支撑。

除了上述帮助管理员了解整个网络情况的功能外，还能利用nmap获取目标主机的更深入信息，例如反向域名、猜测操作系统、设备种类及类型、MAC网卡地址信息等。

**语法格式：** nmap [参数] 域名或IP地址

**常用参数：**

-A使用高级功能进行扫描-d显示调试信息-n不使用域名解析-p扫描指定端口和端口范围-R为所有目标解析域名-PE强制执行直接的ICMPping-ps发送SYN同步报文-PU发送udp ping-sP对目标主机进行ping扫描-sV探测服务版本信息--traceroute扫描主机端口并跟踪路由

**参考示例**

扫描目标主机并跟踪路由信息：

```
[root@linuxcool ~]# nmap --traceroute www.linuxcool.com
```

扫描目标主机上的特定端口号信息：

```
[root@linuxcool ~]# nmap -p80,443 www.linuxcool.com
```

扫描目标主机上的指定端口号段信息：

```
[root@linuxcool ~]# nmap -p1-10000 www.linuxcool.com
```

使用高级模式扫描目标主机：

```
[root@linuxcool ~]# nmap -A www.linuxcool.com
```
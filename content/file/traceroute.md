---



title: "traceroute命令 – 追踪网络数据包传输路径"
description: "traceroute命令 – 追踪网络数据包传输路径"
keywords: "traceroute命令 – 追踪网络数据包传输路径"
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

traceroute命令来自英文词组“Trace router”的拼写，其功能是用于追踪网络数据包传输路径。执行tracerouter命令后会默认发送一个40字节大小的数据包到远程目标主机，从反馈信息我们可以得知数据包经过了哪些路径最终到达了终点。

**语法格式：** traceroute [参数] 域名或IP地址

**常用参数：**

(-4基于IPv4网络协议-6基于IPv6网络协议-d使用Socket层级的排错功能-f设置数据包的存活数值（TTL) -F设置勿离断位-g设置来源路由网关-i使用指定的网卡发送出数据包-I使用ICMP回应取代UDP资料信息-m检测数据包的最大存活数值（TTL）-n使用IP地址而非主机名称-p设置UDP传输协议的通信端口-r将数据包送到远端主机上-s设置本地主机送出数据包的IP地址-t设置检测数据包的TOS数值-T使用TCP SYN进行探测-U使用UDP到特定端口进行路由-v显示执行过程详细信息-V显示版本信息-w设置等待远端主机回报的时间-x开启或关闭数据包的正确性检验

**参考示例**

(追踪本地数据包到指定网站经过的传输路径（默认) ：

```
[root@linuxcool ~]# traceroute www.linuxprobe.com
```

追踪本地数据包到指定网站经过的传输路径，跳数最大为7次：

```
[root@linuxcool ~]# traceroute -m 7 www.linuxprobe.com
```

追踪本地数据包到指定网站经过的传输路径，显示IP地址而不是主机名：

```
[root@linuxcool ~]# traceroute -n www.linuxprobe.com
```

追踪本地数据包到指定网站经过的传输路径，探测包个数为4次：

```
[root@linuxcool ~]# traceroute -q 4 www.linuxprobe.com
```

追踪本地数据包到指定网站经过的传输路径，最长等待时间为3秒：

```
[root@linuxcool ~]# traceroute -w 3 www.linuxprobe.com
```
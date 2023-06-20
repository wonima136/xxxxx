---



title: "ping命令 – 测试主机间网络连通性"
description: "ping命令 – 测试主机间网络连通性"
keywords: "ping命令 – 测试主机间网络连通性"
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

ping命令的功能是用于测试主机间网络连通性，发送出基于ICMP传输协议的数据包，要求对方主机予以回复，若对方主机的网络功能没有问题且防火墙放行流量，则就会回复该信息，我们也就可得知对方主机系统在线并运行正常了。

不过值得我们注意的是Linux与Windows相比有一定差异，Windows系统下的ping命令会发送出去4个请求后自动结束该命令；而Linux系统则不会自动终止，需要用户手动按下组合键“Ctrl+c”才能结束，或是发起命令时加入-c参数限定发送个数。

**语法格式：** ping [参数] 域名或IP地址

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-a发送数据时发出鸣响声-b允许ping一个广播地址-c设置发送报文的次数-d使用接口的SO_DEBUG功能-f使用洪泛模式大量向目标发送数据包-h显示帮助信息-i设置收发信息的间隔时间-I使用指定的网络接口送出数据包-n仅输出数值-p设置填满数据包的范本样式-q静默执行模式-R记录路由过程信息-s设置数据包的大小-t设置存活数值TTL的大小-v显示执行过程详细信息-V显示版本信息

**参考示例**

(测试与指定网站服务器之间的网络连通性（需手动按下“Ctrl+c”组合键结束命令) ：

```
[root@linuxcool ~]# ping www.linuxcool.com
PING www.linuxcool.com.w.kunlunar.com (222.85.26.229) 56(84) bytes of data.
64 bytes from www.linuxcool.com (222.85.26.229): icmp_seq=1 ttl=52 time=22.4 ms
64 bytes from www.linuxcool.com (222.85.26.229): icmp_seq=2 ttl=52 time=22.4 ms
64 bytes from www.linuxcool.com (222.85.26.229): icmp_seq=3 ttl=52 time=22.4 ms
64 bytes from www.linuxcool.com (222.85.26.229): icmp_seq=4 ttl=52 time=22.4 ms
^C
--- www.linuxcool.com.w.kunlunar.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4005ms
rtt min/avg/max/mdev = 22.379/22.389/22.400/0.094 ms
```

测试与指定网站服务器之间的网络连通性，发送请求包限定为4次：

```
[root@linuxcool ~]# ping -c 4 www.linuxcool.com
PING www.linuxcool.com (222.85.26.234) 56(84) bytes of data.
64 bytes from www.linuxcool.com (222.85.26.234): icmp_seq=1 ttl=52 time=24.7 ms
64 bytes from www.linuxcool.com (222.85.26.234): icmp_seq=2 ttl=52 time=24.7 ms
64 bytes from www.linuxcool.com (222.85.26.234): icmp_seq=3 ttl=52 time=24.7 ms
64 bytes from www.linuxcool.com (222.85.26.234): icmp_seq=4 ttl=52 time=24.7 ms

--- www.linuxcool.com.w.kunlunar.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 24.658/24.664/24.673/0.111 ms
```

测试与指定主机之间的网络连通性，发送3次请求包，每次间隔0.2秒，最长等待时间为3秒：

```
[root@linuxcool ~]# ping -c 3 -i 0.2 -W 3 192.168.10.10
64 bytes from 192.168.10.10: icmp_seq=1 ttl=64 time=0.166 ms
64 bytes from 192.168.10.10: icmp_seq=2 ttl=64 time=0.060 ms
64 bytes from 192.168.10.10: icmp_seq=3 ttl=64 time=0.113 ms

--- 192.168.10.10 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 410ms
rtt min/avg/max/mdev = 0.060/0.113/0.166/0.043 ms
```
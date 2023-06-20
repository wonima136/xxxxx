---



title: "【Linux命令大全】指令追踪网络数据包的路由途径"
description: "【Linux命令大全】指令追踪网络数据包的路由途径"
keywords: "【Linux命令大全】指令追踪网络数据包的路由途径"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675577080613_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux traceroute命令

Linux 命令大全

Linux traceroute命令用于显示数据包到主机间的路径。

traceroute指令让你追踪网络数据包的路由途径，预设数据包大小是40Bytes **linux tracert命令详解 linux tracert命令详解** linux手机软件linux操作系统，用户可另行设置。

语法

![linux命令详解词典_linux tracert命令详解_linux关机命令详解](https://www.linuxcool.com/wp-content/uploads/2023/02/1675577080613_1.png)

```
traceroute [-dFlnrvx][-f][-g...][-i][-m][-p][-s][-t][-w][主机名称或IP地址][数据包大小]
```

参数说明：

实例

显示到达目的地的数据包路由

```
# traceroute www.google.com

traceroute: Warning: www.google.com has multiple addresses; using 66.249.89.99
traceroute to www.l.google.com (66.249.89.99), 30 hops max, 38 byte packets
1 192.168.0.1 (192.168.0.1) 0.653 ms 0.846 ms 0.200 ms
2 118.250.4.1 (118.250.4.1) 36.610 ms 58.438 ms 55.146 ms
3 222.247.28.177 (222.247.28.177) 54.809 ms 39.879 ms 19.186 ms

4 61.187.255.253 (61.187.255.253) 18.033 ms 49.699 ms 72.147 ms
5 61.137.2.177 (61.137.2.177) 32.912 ms 72.947 ms 41.809 ms
6 202.97.46.5 (202.97.46.5) 60.436 ms 25.527 ms 40.023 ms
7 202.97.35.69 (202.97.35.69) 40.049 ms 66.091 ms 44.358 ms
8 202.97.35.110 (202.97.35.110) 42.140 ms 70.913 ms 41.144 ms

9 202.97.35.14 (202.97.35.14) 116.929 ms 57.081 ms 60.336 ms
10 202.97.60.34 (202.97.60.34) 54.871 ms 69.302 ms 64.353 ms
11 * * *
12 209.85.255.80 (209.85.255.80) 95.954 ms 79.844 ms 76.052 ms
   MPLS Label=385825 CoS=5 TTL=1 S=0

13 209.85.249.195 (209.85.249.195) 118.687 ms 120.905 ms 113.936 ms
14 72.14.236.126 (72.14.236.126) 115.843 ms 137.109 ms 186.491 ms
15 nrt04s01-in-f99.1e100.net (66.249.89.99) 168.024 ms 140.551 ms 161.127 ms
```

Linux 命令大全
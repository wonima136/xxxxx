---



title: "福建金钱猫教你如何利用网络命令对网络进行简单的操作"
description: "福建金钱猫教你如何利用网络命令对网络进行简单的操作"
keywords: "福建金钱猫教你如何利用网络命令对网络进行简单的操作"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681646808357_0.gif"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(（四川金钱猫) 

windows操作系统本身带有多种网路命令，借助这种网路命令可以对网路进行简单的操作。须要注意是那些命令均是在DOS命令行下执行。

Ping

ping[-t][-a][-ncount][-llength][-f][-ittl][-vtos][-rcount][-scount][[-jcomputer-list]|[-kcomputer-list]][-wtimeout]destination-list

参数

-tPing指定的计算机直至中断。

-a将地址解析为计算机名。

![linux 测试请求的命令_测试常用的linux命令_linux 测试网络 命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681646808357_0.gif)

-ncount发送count指定的ECHO数据包数。默认值为4。

-f在数据包中发送“不要分段”标志。数据包就不会被路由上的网段分段。

-rcount在“记录路由”字段中记录传出和返回数据包的路由。count可以指定最少1台，最多9台计算机。

-scount指定count指定的跃点数的时间戳。

-lsize指定发送到目标主机的数据包的大小。

Tracert

Tracert命令拿来显示数据包抵达目标主机所经过的路径，并显示抵达每位节点的时间。命令功能同Ping类似，但它所获得的信息要比Ping命令详尽得多，它把数据包所走的全部路径、节点的IP以及耗费的时间都显示下来。该命令比较适用于小型网路。

命令格式：

tracertIP地址或主机名[-d][-hmaximumhops][-jhost_list][-wtimeout]

参数：

-d不解析目标主机的名子；

-hmaximum_hops指定搜索到目标地址的最大跳跃数；

-jhost_list根据主机列表中的地址释放源路由；

-wtimeout指定超时时间间隔，程序默认的时间单位是微秒。

Netstat

Netstat命令可以帮助网路管理员了解网路的整体使用情况。它可以显示当前正在活动的网路联接的详尽信息，比如显示网路联接、路由表和网路插口信息，可以统计目前总共有什么网路联接正在运行。

借助命令参数，命令可以显示所有合同的使用状态linux开源软件，这种合同包括TCP合同、UDP合同以及IP合同等 **linux 测试网络 命令**，另外还可以选择特定的合同并查看其具体信息，能够显示所有主机的端标语以及当前主机的详尽路由信息。

命令格式：

netstat[-r][-s][-n][-a]

参数：

-r显示本机路由表的内容；

![测试常用的linux命令_linux 测试网络 命令_linux 测试请求的命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681646808357_1.jpg)

-s显示每位合同的使用状态(包括TCP合同、UDP合同、IP合同)；

-n以数字表格方式显示地址和端口；

-a显示所有主机的端标语。

ftp

(用于文件传输（须要存在文件传输服务器FTP) 

ls：浏览目录

put文件名：上传文件

get文件名：下载文件

quit/bye:退出命令

ARP

显示和更改IP地址与数学地址之间的转换表。

-a显示当前的ARP信息，可以指定网路地址，不指定显示所有的表项

-g跟-a一样

-d删掉由inet_addr指定的主机，可以使用*来删掉所有主机

-s添加主机，并将网路地址跟数学地址相对应 **linux 测试网络 命令** linux文件系统，这一项是永久生效的。
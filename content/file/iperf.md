---



title: "iperf命令 – 网络性能测试"
description: "iperf命令 – 网络性能测试"
keywords: "iperf命令 – 网络性能测试"
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

iperf是一款进行网络性能测试的命令工具，由美国伊利诺伊大学研发和维护。可以用来测试一些网络设备如路由器，防火墙，交换机等的性能。

性能测试是在服务器已经启动服务的场景下进行的，服务器需先执行“iperf -s”或“iperf3 -s”命令。

**语法格式：** iperf [参数] IP地址

**常用参数：**

-b设置数据包大小-c使用客户端模式-D将服务器作为守护进程运行-f设置报告的格式-F从指定文件中获取要传输的数据-h显示帮助信息-i设置报告之间停顿秒数-l设置读写缓冲区的长度-M设置TCP最大网段-n设置要传输的字节数-N设置TCP无延迟-o设置重定向输出到指定文件-p设置与服务器端的监听端口一致-P设置要运行的并行客户端线程数量-s使用服务器模式-t设置传输的总时间-T设置存活时间-u使用UDP协议-U使用单线程UDP运行模式-v显示版本信息

**参考示例**

客户端向服务器发起累计10秒、每秒数据包为100M的请求：

```
[root@linuxcool ~]# iperf -c 192.168.10.10 -b 100M -t 10
Connecting to host 192.168.10.10, port 5201
[  5] local 192.168.10.10 port 44256 connected to 192.168.10.10 port 5201
[ ID] Interval           Transfer     Bitrate         Retr  Cwnd
[  5]   0.00-1.00   sec  12.0 MBytes   101 Mbits/sec    0    639 KBytes
[  5]   1.00-2.00   sec  11.9 MBytes  99.6 Mbits/sec    0    639 KBytes
[  5]   2.00-3.00   sec  12.0 MBytes   101 Mbits/sec    0    639 KBytes
[  5]   3.00-4.00   sec  11.9 MBytes  99.7 Mbits/sec    0    639 KBytes
[  5]   4.00-5.00   sec  11.9 MBytes  99.6 Mbits/sec    0    639 KBytes
[  5]   5.00-6.00   sec  12.0 MBytes   101 Mbits/sec    0    639 KBytes
[  5]   6.00-7.00   sec  11.9 MBytes  99.6 Mbits/sec    0    639 KBytes
[  5]   7.00-8.00   sec  11.9 MBytes  99.6 Mbits/sec    0    639 KBytes
[  5]   8.00-9.00   sec  12.0 MBytes   101 Mbits/sec    0    639 KBytes
[  5]   9.00-10.00  sec  11.9 MBytes  99.6 Mbits/sec    0    639 KBytes
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec   119 MBytes   100 Mbits/sec    0             sender
[  5]   0.00-10.04  sec   119 MBytes  99.7 Mbits/sec                  receiver

iperf Done.
```

基于默认TCP协议，测试客户端到服务器的上传速度：

```
[root@linuxcool ~]# iperf -c 192.168.10.10 -t 10
Connecting to host 192.168.10.10, port 5201
[  5] local 192.168.10.10 port 44326 connected to 192.168.10.10 port 5201
[ ID] Interval           Transfer     Bitrate         Retr  Cwnd
[  5]   0.00-1.00   sec  1.50 GBytes  12.8 Gbits/sec    0   1.69 MBytes
[  5]   1.00-2.00   sec  1.29 GBytes  11.1 Gbits/sec    0   2.12 MBytes
[  5]   2.00-3.00   sec  1.34 GBytes  11.5 Gbits/sec    0   2.62 MBytes
[  5]   3.00-4.00   sec  1.47 GBytes  12.7 Gbits/sec    0   3.18 MBytes
[  5]   4.00-5.00   sec  1.45 GBytes  12.5 Gbits/sec    0   3.18 MBytes
[  5]   5.00-6.00   sec  1.61 GBytes  13.9 Gbits/sec    0   3.18 MBytes
[  5]   6.00-7.00   sec  1.54 GBytes  13.2 Gbits/sec    0   3.18 MBytes
[  5]   7.00-8.00   sec  1.51 GBytes  13.0 Gbits/sec    0   3.18 MBytes
[  5]   8.00-9.00   sec  1.66 GBytes  14.2 Gbits/sec    0   3.18 MBytes
[  5]   9.00-10.00  sec  1.66 GBytes  14.2 Gbits/sec    0   3.18 MBytes
- - - - - - - - - - - - - - - - - - - - - - - - -
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  15.0 GBytes  12.9 Gbits/sec    0             sender
[  5]   0.00-10.03  sec  15.0 GBytes  12.9 Gbits/sec                  receiver

iperf Done.
```
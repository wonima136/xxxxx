---



title: "快速了解Linux中的网速测试命令！"
description: "快速了解Linux中的网速测试命令！"
keywords: "快速了解Linux中的网速测试命令！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680897950836_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统下的网速测试命令可以帮助你快速了解网络连接质量，以及找出网络瓶颈。本文将详细介绍Linux中常用的网速测试命令，并提供实用案例以帮助读者更好地理解和使用这些命令。

**1. ping命令**

ping命令是最常用的网络连通性测试命令，它可以检查目标IP地址是否可达，并测量响应时间。例如，我们可以使用以下命令测试谷歌的IP地址：

```
ping -c 4 8.8.8.8
```

上面的命令将发送4个ICMP包到8.8.8.8并显示结果。如果一切正常，你将看到类似以下输出：

```
PING 8.8.8.8(8.8.8.8) 56(84)a47ef96832ddb21d02d81421874b53e0.
64 bytes from 8.8.8.8:76ccd814ddc8aafe36192f6dd8785917_seq=1 ttl=116 time=10.7 ms
64 bytes from 8.8.8.8:76ccd814ddc8aafe36192f6dd8785917_seq=2 ttl=116 time=11.2 ms
64 bytes from 8.8.8.8:76ccd814ddc8aafe36192f6dd8785917_seq=3 ttl=116 time=10.9 ms
64 bytes from 8.8.8.8:76ccd814ddc8aafe36192f6dd8785917_seq=4 ttl=116 time=11.0 ms
---8.8.8.8 ping statistics ---
4 packets transmitted,49756d163793558e231172bd7482ee53,0% packet loss, time 3003ms
rtt min/avg/max/mdev = 10.710/11.008/11.213/0.201 ms
```

其中，“64 bytes from 8.8.8.8”表示成功接收到来自目标IP的响应，07cc694b9b3fc636710fa08b6922c42b=10.d2e34bf1b254a921e8628168196a760e表示响应时间为10.7毫秒。

**2. traceroute命令**

traceroute命令可以追踪数据包在网络中的路由路径，并显示每个路由器的响应时间。例如，我们可以使用以下命令测试谷歌的IP地址：

```
traceroute
```

上面的命令将在网络中追踪到谷歌服务器，并显示每个路由器的响应时间。如果一切正常 **linux中网速测试命令**，你将看到类似以下输出：

![dos命令测试网速_linux中网速测试命令_测试网速命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680897950836_0.webp)

```
traceroute to  (216.58.a597e50502f5ff68e3e25b9114205d4a.174), 30 hops max,6d4e7891ad3f64afefd998da75e202f2_gateway (192.168.1.1)  2.522 ms  2.518 ms  2.521 ms
2  ***
3   (69.31.95.177)  12.064 ms  (69.31.95.fc221309746013ac554571fbd180e1c8)  12.050 ms  (69.31.95.
177)  11.983 ms
4  ae5-70g. (69.31.95.198)  12.489 ms ae1-70g. (69.31.95.202)  12.482 ms ae5-70g. (69.31.
95.198)  12.468 ms
5  ae0-90g. (69.22.142.190)  12.456 ms ae1-90g. (69.22.142.a597e50502f5ff68e3e25b9114205d4a)  12.446 ms ae0-90g. (69.
22.142.190)  12.437 ms
6   (63.125.50.94)  14.041 ms  (63.125.50.98)  14.020 ms  (63.
125.50.94)  13.
```

(其中，“***”表示无法接收到路由器的响应linux操作系统界面，而数字表示响应时间（单位为毫秒) 。

**3. mtr命令**

mtr命令可以同时执行ping和traceroute命令，并显示每个路由器的平均响应时间。例如，我们可以使用以下命令测试谷歌的IP地址：

```

```

上面的命令将在网络中追踪到谷歌服务器，并显示每个路由器的平均响应时间。如果一切正常，你将看到类似以下输出：

```
Start: 2023-04-08T10:00:00+6d4bb55f830d6f14712142dc6193f11d: linuxcool.localdomain Loss% Snt Last Avg Best Wrst StDev
1.|--_gateway 0.0% 10 2.5 2.5 2.4 2.6 0.5a44c1607c4cc56f2f2674d47858bb9e.|–??? 100.21258a2fc6ed39fd083f55d4182bf88826d32a81fb78000291726f8b46e19.0 0.0 0.0 0.0 0.
3.|--  0.0% 10 12.1 12.1 11.9 12.3
|–
4.|-- ae5-70g. 0.0% 10 12.5 12.5 12.4 12.
|– ae1-70g.cr1.sjc2.us.nlayer.7b3bf744cba9bcfc90d2217c385648a4.|-- ae0-90g. …
6.|--  …
```

其中，“Loss%”表示数据包丢失率，“Last”表示最后一个路由器的响应时间，“Avg”表示平均响应时间。

**4. iperf命令**

iperf命令可以测试网络带宽linux安全加固，用于测量TCP和UDP传输速度。例如，我们可以使用以下命令测试本地网络带宽：

```
iperf -s
```

上面的命令将启动一个iperf服务器。接下来 **linux中网速测试命令**，我们可以在另一台计算机上运行以下命令测试网络带宽：

```
iperf -c<server_ip>-8b4a90ed9111a897f0ea7-t 10
```

其中，是iperf服务器的IP地址。上面的命令将在10秒内测试网络带宽，并每秒显示一次结果。

**5. speedtest-cli命令**

1f1d9b70548b14347d8efc221309746013ac554571fbd180e1c8f1492a6a3-cli命令可以测试网络连接质量，包括下载速度、上传速度和延迟。例如，我们可以使用以下命令测试本地网络连接：

```
speedtest-cli
```

上面的命令将测试本地网络连接，并显示下载速度、上传速度和延迟。如果一切正常，你将看到类似以下输出：

```
Retrieving  configuration...
Testing from Example ISP (192.168.1.1)...
Retrieving  server list...
Selecting best server based on ping...
Hosted by Example Host (City, State)[50.ef5d4a72e9418a950aef161c190eeda9]: 25.0 ms
Testing download speed................................................................................1ef216c9a948e4d8dba8eb6ab91c6557: 100.00 Mbit/bd1f7177e4800375ba03ac01eba24d52......................................................................................................
Upload: 20.00 Mbit/s
```

(其中，“Download”表示下载速度，“Upload”表示上传速度，“ms”表示延迟（单位为毫秒) 。

**6. netstat命令**

netstat命令可以显示当前系统的网络连接状态，包括本地IP地址、远程IP地址、协议和状态等信息。例如，我们可以使用以下命令查看当前系统的网络连接：

```
netstat -a| grep ESTABLISHED
```

上面的命令将显示所有已建立的连接。如果一切正常，你将看到类似以下输出：

```
tcp 0 0 linuxcool:59050 :http ESTABLISHED
tcp 0 0 linuxcool:59052 :http ESTABLISHED
tcp 0 0 linuxcool:59054 :http ESTABLISHED
```

(其中，“linuxcool”表示本地IP地址，“”表示远程IP地址，“http”表示协议（TCP或UDP) ，“ESTABLISHED”表示连接状态。

**7. iftop命令**

iftop命令可以实时监测网络流量，包括本地IP地址、远程IP地址、协议和流量等信息。例如，我们可以使用以下命令查看当前系统的网络流量：

```
iftop -P
```

上面的命令将显示所有正在进行的网络连接，并实时更新流量信息。如果一切正常，你将看到类似以下输出：

```
192.168.1.100 => 172.217.160.142     1.06Mb 1.18Mb 1.24Mb
192.168.1.100 => 23.56.67.93        34.8Kb   11.5Kb   14.6Kb
192.168.1.100 => 23.56.67.98        34.8Kb   11.5Kb   14.
```

(其中，“192.168.1.100”表示本地IP地址，“172.217.160.142”表示远程IP地址，“Mb”表示流量（单位为兆字节) 。

**8. nload命令**

nload命令可以实时监测网络带宽，包括本地IP地址、远程IP地址、协议和带宽等信息。例如，我们可以使用以下命令查看当前系统的网络带宽：

```
nload
```

上面的命令将显示当前系统的网络带宽，并实时更新带宽信息。如果一切正常，你将看到类似以下输出：

```
Curr:1.72 MBit/s
Avg:1.75 MBit/s
Min:0.00 Bit/8032066bd8db9a2a6e048e7710b987d8:2.4420227577255bf3cd4c000d97eec41a/s
Ttl:1.79 GByte
```

(其中，“MBit/s”表示带宽（单位为兆比特/秒) 。

**9. tcpdump命令**

tcpdump命令可以捕获网络数据包，并显示数据包的内容。例如，我们可以使用以下命令捕获本地网络数据包：

![测试网速命令_linux中网速测试命令_dos命令测试网速](https://www.linuxcool.com/wp-content/uploads/2023/04/1680897950836_3.jpg)

```
a814643b1d79b6d1772d0f07385579e9-i eth0
```

上面的命令将在eth0接口上捕获所有网络数据包，并显示数据包的内容。如果一切正常，你将看到类似以下输出：

```
6c6db3fa7f191bc53b87cf45275160c6:44:24.3b645938af2c6100e8cef3068ab9f267.168.1.100 >8.8.8.8: ICMP echo request, id 16920, seq 1, length 64
11:44:25.961104 IP 192.168.1.100 >8.8.8.8: ICMP echo request, id 16920, seq 2, length 64
11:44:26.961184 IP 192.168.1.100 >8.8.8.8: ICMP echo request, id 16920,e51423699a0a1d91cd3f246cef28971c, length 64
```

其中，“IP”表示协议类型，“192.168.1.100”表示源IP地址，“8.8.8.8”表示目标IP地址。

**10. ss命令**

ss命令可以显示当前系统的网络连接状态，包括本地IP地址、远程IP地址、协议和状态等信息。例如，我们可以使用以下命令查看当前系统的网络连接：

```
ss -a| grep ESTAB
```

上面的命令将显示所有已建立的连接。如果一切正常，你将看到类似以下输出：

```
tcp ESTAB 0 0 linuxcool:59050 :http
tcp ESTAB 0 0 linuxcool:59052 :http
tcp ESTAB 0 0 linuxcool:59054 :http
```

其中，“ESTAB”表示连接状态。

通过上述介绍，相信大家对Linux中网速测试命令有了更深入的了解。这些命令可以帮助我们快速了解网络连接质量，以及找出网络瓶颈。在实际应用中，我们可以根据具体情况选择合适的命令进行测试，并结合其他工具进行分析和优化。
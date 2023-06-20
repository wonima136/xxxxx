---



title: "netstat命令 – 显示网络状态"
description: "netstat命令 – 显示网络状态"
keywords: "netstat命令 – 显示网络状态"
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

netstat命令来自英文词组“network statistics”的缩写，其功能是用于显示各种网络相关信息，例如网络连接状态、路由表信息、接口状态、NAT、多播成员等等。

netstat命令不仅应用于Linux系统，而且在Windows XP、Windows 7、Windows 10及Windows 11中均已默认支持，并且可用参数也相同，有经验的运维人员可以直接上手。

**语法格式：** netstat [参数]

**常用参数：**

-a显示所有连接中的接口信息-A设置网络连接类型-c持续显示网络状态-C显示路由配置信息-F显示路由缓存信息-g显示多重广播功能群组成员名单-h显示帮助信息-i显示网络界面信息表单-l仅显示正在监听的服务状态-n直接使用IP地址，而不是域名-N显示网络硬件外围设备的符号链接名称-o显示计时器数据信息-p显示正在使用接口的程序识别码和名称 -r显示路由表信息-s显示网络工作信息统计表信息-t显示TCP传输协议的连线状态-u显示UDP传输协议的连线状态-V显示版本信息

**参考示例**

显示系统网络状态中的所有连接信息：

```
[root@linuxcool ~]# netstat -a
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 0.0.0.0:http            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:https           0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:ms-wbt-server   0.0.0.0:*               LISTEN
```

显示系统网络状态中的UDP连接信息：

```
[root@linuxcool ~]# netstat -nu
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
udp        0      0 192.168.10.10:68        192.168.10.20:67       ESTABLISHED
```

显示系统网络状态中的UDP连接端口号使用信息：

```
[root@linuxcool ~]# netstat -apu
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address    Foreign Address       State    PID/Program name
udp        0      0 linuxcool:bootpc _gateway:bootps  ESTABLISHED   1024/NetworkManager
udp        0      0 localhost:323           0.0.0.0:*               875/chronyd
udp6       0      0 localhost:323           [::]:*                  875/chronyd
```

显示网卡当前状态信息：

```
[root@linuxcool~]# netstat -i
Kernel Interface table
Iface             MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0             1500    31945      0      0 0         39499      0      0      0 BMRU
lo              65536        0      0      0 0             0      0      0      0 LRU
```

显示网络路由表状态信息：

```
[root@linuxcool ~]# netstat -r
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
default         _gateway        0.0.0.0         UG        0 0          0 eth0
192.168.10.0    0.0.0.0         255.255.240.0   U         0 0          0 eth0
```

找到某个服务所对应的连接信息：

```
[root@linuxcool ~]# netstat -ap | grep ssh
unix  2      [ ]         STREAM     CONNECTED     89121805 203890/sshd: root [
unix  3      [ ]         STREAM     CONNECTED     27396    1754/sshd
unix  3      [ ]         STREAM     CONNECTED     89120965 203890/sshd: root [
unix  2      [ ]         STREAM     CONNECTED     89116510 203903/sshd: root@p
unix  2      [ ]         STREAM     CONNECTED     89121803 203890/sshd: root [
unix  2      [ ]         STREAM     CONNECTED     29959    1754/sshd
unix  2      [ ]         DGRAM                    89111175 203890/sshd: root [
unix  3      [ ]         STREAM     CONNECTED     89120964 203903/sshd: root@p
```
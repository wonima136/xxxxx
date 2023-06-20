---



title: "ifconfig命令 – 显示或设置网络设备参数信息"
description: "ifconfig命令 – 显示或设置网络设备参数信息"
keywords: "ifconfig命令 – 显示或设置网络设备参数信息"
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

ifconfig命令来自英文词组“network interfaces configuring”的缩写，其功能是用于显示或设置网络设备参数信息。在Windows系统中与之类似的命令叫做ipconfig，同样的功能可以使用ifconfig去完成。

通常不建议使用ifconfig命令配置网络设备的参数信息，因为一旦服务器重启，配置过的参数会自动失效，还是编写到配置文件中更稳妥。

**语法格式：** ifconfig [参数] [网卡名] [动作]

**常用参数：**

-a显示所有网卡状态-s显示简短状态列表-v显示执行过程详细信息

**常用动作：**

add设置网络设备的IP地址 del删除网络设备的IP地址 down关闭指定的网络设备 up启动指定的网络设备

**参考示例**

显示系统的网络设备信息：

```
[root@linuxcool ~]# ifconfig
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.10.10  netmask 255.255.255.0  broadcast 192.168.10.255
        inet6 fe80::4d16:980c:e0fe:51c2  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:60:cd:ee  txqueuelen 1000  (Ethernet)
        RX packets 407  bytes 34581 (33.7 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 59  bytes 6324 (6.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
………………省略部分输出信息………………
```

对指定的网卡设备依次进行关闭和启动操作：

```
[root@linuxcool ~]# ifconfig ens160 down
[root@linuxcool ~]# ifconfig ens160 up
```

对指定的网卡设备执行修改IP地址操作：

```
[root@linuxcool ~]# ifconfig ens160 192.168.10.20 netmask 255.255.255.0
```

对指定的网卡设备执行修改MAC地址操作：

```
[root@linuxcool ~]# ifconfig ens160 hw ether 00:aa:bb:cc:dd:ee
```

对指定的网卡设备依次进行ARP协议关闭和开启操作：

```
[root@linuxcool ~]# ifconfig ens160 -arp
[root@linuxcool ~]# ifconfig ens160 arp
```
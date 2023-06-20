---



title: "ethtool命令 – 查询与设置网卡参数"
description: "ethtool命令 – 查询与设置网卡参数"
keywords: "ethtool命令 – 查询与设置网卡参数"
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

ethtool命令来自英文词组“ethernet tool”的缩写，其功能是用于查询与设置网卡参数。使用ethtool命令不仅可以查询到网卡当前运行状态，并能够对网卡设备的常规参数进行自由设定，亦能够开启如自动协商、传输速度限制、双工或局域网唤醒等功能。

**语法格式：** ethtool [参数] 网卡名

**常用参数：**

-a显示网卡接收、发送模块状态-A设置网卡接收、发送模块状态-C设置指定网络设备的合并配置-E设置网卡只读存储器字节-g显示指定网卡的收发参数信息-G设置指定网卡的收发参数信息-i显示网卡驱动的信息-k显示网卡Offload的状态-K设置网卡Offload的状态-I显示网卡的队列信息-L设置网卡的队列数-P显示指定网卡设备的永久硬件地址-s设置网卡的部分配置-S显示网卡收发和广播数据-t执行网卡自检操作--help显示帮助信息--version显示版本信息

**参考示例**

查询指定网卡当前的运行状态：

```
[root@linuxcool ~]# ethtool ens160
Settings for ens160:
	Supported ports: [ TP ]
	Supported link modes:   1000baseT/Full
	                        10000baseT/Full
	Supported pause frame use: No
	Supports auto-negotiation: No
	Supported FEC modes: Not reported
	Advertised link modes:  Not reported
………………省略部分输出信息………………
```

查询指定网卡的驱动相关信息：

```
[root@linuxcool ~]# ethtool -i ens160
driver: vmxnet3
version: 1.4.16.0-k-NAPI
firmware-version:
expansion-rom-version:
bus-info: 0000:03:00.0
supports-statistics: yes
supports-test: no
supports-eeprom-access: no
supports-register-dump: yes
supports-priv-flags: no
```

设置网卡设备的工作方式为全双工：

```
[root@linuxcool ~]# ethtool -s ens160 autoneg off speed 100 duplex full
```

查看网卡设备在接收与发送数据时有无出错：

```
[root@linuxcool ~]# ethtool -S ens160
NIC statistics:
     Tx Queue#: 0
       TSO pkts tx: 0
       TSO bytes tx: 0
       ucast pkts tx: 0
       ucast bytes tx: 0
       mcast pkts tx: 0
………………省略部分输出信息………………
```

暂停指定网卡的数据发送模块:

```
[root@linuxcool ~]# ethtool -A tx off ens160
```
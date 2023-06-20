---



title: "vmkping – 网络故障排除命令"
description: "vmkping – 网络故障排除命令"
keywords: "vmkping – 网络故障排除命令"
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

Vmkping是VMware的Ping命令的特定版本。它使用的IP VMkernel去Ping另一个ESX主机的VMkernel端口，这意味着你可以通过vMotion网络而非管理网络发送ping包，此命令有助于解决VMotion和网络存储的问题。

**语法格式：** vmkping [参数] [地址]

**常用参数：**

-I指定网卡接口、或指定的本机地址送出数据包-i设定间隔几秒发送一个vmkping包，默认一秒ping一次

**参考实例**

通过vmkl接口向10.10.10.1发送ICMP请求：

```
[root@linuxcool ~]# vmkping –I vmk1 10.10.10.1
```

确认ESXi主机与特定IP之间的网络连通性：

```
[root@linuxcool ~]# vmkping –I vmk1 10.10.10.1
```

测试是否能够访问10.10.10.10的3260端口：

```
[root@linuxcool ~]# vmkping –I vmk1 nc –z 10.10.10.10 3260
```

设定间隔3秒发送一个vmkping包:

```
[root@linuxcool ~]# vmkping –i 3 –I vmk1 10.10.10.1
```

显示帮助：

```
[root@linuxcool ~]# vmkping -h
```
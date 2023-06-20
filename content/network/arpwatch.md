---



title: "arpwatch命令 – 监听网络上ARP的记录"
description: "arpwatch命令 – 监听网络上ARP的记录"
keywords: "arpwatch命令 – 监听网络上ARP的记录"
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

arpwatch命令用于监听网络上ARP的记录。

ARPAddress Resolution Protocol)是用来解析IP与网络装置硬件地址的协议。 arpwatch可监听区域网络中的ARP数据包并记录，同时将监听到的变化通过E-mail来报告。

**语法格式：** arpwatch [参数]

**常用参数：**

-d 启动排错模式-f设置存储ARP记录的文件，预设为/var/arpwatch/arp.dat-i指定监听ARP的接口，预设的接口为eth0-r从指定的文件中读取ARP记录，而不是从网络上监听-n  指定附加的本地网络 -u 指定用户和用户组 -e 发送邮件给指定用户，非默认的root用户 -s 指定用户名作为返回地址，而不是默认的用户root

**参考实例**

监听网卡eth0的ARP信息：

```
[root@linuxcool ~]# arpwatch -i eth0
```

监听ARP的信息，将相关信息记录到相应的文件：

```
[root@linuxcool ~]# arpwatch -i eth0 -f a.log
```
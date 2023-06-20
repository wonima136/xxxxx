---



title: "rfkill命令 – 管理蓝牙和WIFI设备"
description: "rfkill命令 – 管理蓝牙和WIFI设备"
keywords: "rfkill命令 – 管理蓝牙和WIFI设备"
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

rfkill命令来自英文词组“radio frequency kill”的缩写，其功能是管理系统中的蓝牙和WIFI设备。rfkill命令是一个内核级别的管理工具，可以打开或关闭系统中的蓝牙和WIFI功能。

**语法格式：** rfkill [参数] 设备名

**常用参数：**

block关闭设备list列出可用设备unblock打开设备--version显示版本信息

**参考示例**

显示系统中已有的WIFI和蓝牙设备信息：

```
[root@linuxcool ~]# rfkill list
0: phy0: Wireless LAN
Soft blocked: no
Hard blocked: no
2: hci0: Bluetooth
Soft blocked: yes
Hard blocked: no
```

关闭指定编码的设备：

```
[root@linuxcool ~]# rfkill block 0
```

打开指定编码的设备：

```
[root@linuxcool ~]# rfkill unblock 0
```
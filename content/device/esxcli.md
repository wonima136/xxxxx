---



title: "esxcli命令 – 管理ESXi虚拟机系统"
description: "esxcli命令 – 管理ESXi虚拟机系统"
keywords: "esxcli命令 – 管理ESXi虚拟机系统"
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

esxcli命令来自英文词组“ESXI command-line interface”的缩写，其功能是用于管理ESXi虚拟机系统。VMware ESXi是一个跨平台的虚拟化工具，也是VMware软件定义数据中心的基础，可以作为核心基础架构来使用，具有灵活性、可控性、硬件利用率高、成本低、大幅度提高运行时间等特点。而利用esxcli命令可以帮助管理员实现对ESXi虚拟机的几乎全部管理工作。

**语法格式：** esxcli [参数] [对象]

**常用参数：**

hardware显示硬件信息iscsi监控并管理硬件iSCSInetwork显示网卡信息software显示软件信息

**参考示例**

(获取虚拟机的CPU设备信息（包含型号、系列及缓存) ：

```
[root@linuxcool ~]# esxcli hardware cpu list
```

获取虚拟机的内存设备信息：

```
[root@linuxcool ~]# esxcli hardware memory get
```

获取虚拟机的网络设备信息：

```
[root@linuxcool ~]# esxcli network nic
```
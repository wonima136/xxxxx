---



title: "setpci命令 – 配置PCI硬件设备参数"
description: "setpci命令 – 配置PCI硬件设备参数"
keywords: "setpci命令 – 配置PCI硬件设备参数"
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

setpci命令来自英文词组“Set PCI”的缩写，其功能是用于配置PCI硬件设备参数。setpci命令能够帮助管理员查询与配置PCI硬件设备的工作参数，必须root管理员才有权限运行，动手前一定要三思。

* 查看当前系统中已有PCI设备信息可使用lspci命令

**语法格式：** setpci [参数] [PCI设备名]

**常用参数：**

-A设置支持多种访问PCI设备的方式-d显示指定厂商和设备的信息-D使用测试模式，并不真正将信息写入寄存器-f当没有任何操作需要完成时，不显示任何信息-G设置库的调试级别-s显示指定总线、插槽上的设备功能块信息-v显示执行过程详细信息

**参考示例**

将设备0:14.0设备，PCI配置空间偏移量为0x60，写入新的字节变量6：

```
[root@linuxcool ~]# setpci -s 0:14.0 60.B=6
```

设置PCI设备的定时器：

```
[root@linuxcool ~]# setpci -d : latency_time=40
```

列出PCI设备并对其进行调节：

```
[root@linuxcool ~]# lspci
00:0f.0 VGA compatible controller: VMware SVGA II Adapter
[root@linuxcool ~]# setpci -s 00:0f.0 F4.B=FF
[root@linuxcool ~]# setpci -s 00:0f.0 F4.B=CC
```
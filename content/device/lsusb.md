---



title: "lsusb命令 – 显示USB设备列表"
description: "lsusb命令 – 显示USB设备列表"
keywords: "lsusb命令 – 显示USB设备列表"
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

lsusb命令用于显示本机的USB设备列表，以及USB设备的详细信息。

lsusb命令显示的USB设备信息来自“/proc/bus/usb”目录下的对应文件。

**语法格式：** lsusb [参数]

**常用参数：**

(-v显示USB设备的详细信息-s<总线：设备号>仅显示指定的总线和（或) 设备号的设备-d<厂商：产品>仅显示指定厂商和产品编号的设备-t以树状结构显示无理USB设备的层次-V显示命令的版本信息

**参考实例**

显示USB设备列表：

```
[root@linuxcool ~]# lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 0e0f:0002 VMware, Inc. Virtual USB Hub
Bus 002 Device 002: ID 0e0f:0003 VMware, Inc. Virtual Mouse
```

以树状显示USB设备列表：

```
[root@linuxcool ~]# lsusb -t
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=uhci_hcd/2p, 12M
|_ Port 1: Dev 2, If 0, Class=Human Interface Device, Driver=usbhid, 12M       |_ Port 2: Dev 3, If 0, Class=Hub, Driver=hub/7p, 12M
/:  Bus 01.Port 1: Dev 1, Class=root_hub, Driver=ehci-pci/6p, 480M
```

显示USB设备详细信息：

```
 [root@linuxcool ~]# lsusb -v
```
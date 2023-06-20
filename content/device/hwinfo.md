---



title: "hwinfo命令 – 查询硬件信息"
description: "hwinfo命令 – 查询硬件信息"
keywords: "hwinfo命令 – 查询硬件信息"
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

hwinfo命令来自英文词组“Hardware Information”的缩写，其功能是用于查询硬件信息。这是一个应用非常广泛的硬件信息查询命令，能够详细地报告多个硬件设备的参数信息，不必再去计算机机身或互联网上找说明书啦。

**语法格式：** hwinfo [参数] [对象]

**常用参数：**

--cpu显示cpu设备信息--log将硬件信息写入到日志文件--short显示简略信息--storage显示硬盘设备信息--usb显示usb设备信息

**参考示例**

查询所有硬件信息：

```
[root@linuxcool ~]# hwinfo
```

查询简要硬件信息：

```
[root@linuxcool ~]# hwinfo --short
```

指定查询CPU设备信息：

```
[root@linuxcool ~]# hwinfo --short --cpu
```

指定查询网卡设备信息：

```
[root@linuxcool ~]# hwinfo --short --netcard
```

指定查询硬盘设备信息：

```
[root@linuxcool ~]# hwinfo --short --storage
```

指定查询USB设备信息：

```
[root@linuxcool ~]# hwinfo --short --usb
```

查询所有硬件信息，并将结果输出记录到文件中：

```
[root@linuxcool ~]# hwinfo --all --short --log File.log
```
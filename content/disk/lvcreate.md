---



title: "lvcreate命令 – 创建逻辑卷设备"
description: "lvcreate命令 – 创建逻辑卷设备"
keywords: "lvcreate命令 – 创建逻辑卷设备"
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

lvcreate命令的功能是用于创建逻辑卷设备。LVM逻辑卷管理器技术由物理卷、卷组和逻辑卷组成，其中lvcreate命令的工作属于最后一个环节——创建逻辑卷设备。

设定逻辑卷容量可以使用-L参数直接写具体值，亦可以写-l参数指定PE个数，每个PE大小默认为4M，因此-L 400M和-l 100的效力是等价的。

**语法格式：** lvcreate 参数 逻辑卷

**常用参数：**

(-A设置逻辑卷的可用性-c设置快照逻辑卷的块大小-C设置逻辑卷的连续分配策略-i设置条带数量-l设置逻辑卷的大小（PE个数) -L设置逻辑卷的大小（容量值）-m创建一个镜像逻辑卷-n设置新的逻辑卷名-p设置逻辑卷的访问权限-r设置逻辑卷的超前读取扇区数-s为指定的逻辑卷创建快照卷-T创建精简逻辑卷

**参考示例**

(在已有的卷组中（VG01) 创建一个逻辑卷（V001），大小为100个PE：

```
[root@linuxcool ~]# lvcreate -n V001 -l 100 VG01
 Logical volume "V001" created.
```

(在已有的卷组中（VG01) 创建一个逻辑卷（V001），大小为400M：

```
[root@linuxcool ~]# lvcreate -n V001 -L 400 VG01
 Logical volume "V001" created.
```

(在已有的卷组中（VG01) 创建一个逻辑卷（V001），大小为卷组中剩余的全部空间：

```
[root@linuxcool ~]# lvcreate -n V001 -l 100%FREE VG01
Logical volume "V001" created.
```
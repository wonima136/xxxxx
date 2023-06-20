---



title: "vgcreate命令 – 创建卷组设备"
description: "vgcreate命令 – 创建卷组设备"
keywords: "vgcreate命令 – 创建卷组设备"
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

vgcreate命令的功能是用于创建卷组设备。LVM逻辑卷管理器技术由物理卷、卷组和逻辑卷组成，其中vgcreate命令的工作属于第二个环节——创建卷组设备。

卷组，顾名思义是将多个物理卷组成一个整体，屏蔽了底层物理设备细节，让用户在后续的逻辑卷创建工作后无须再考虑具体的硬件设备信息。

**语法格式：** vgcreate [参数] 卷组名 设备名

**常用参数：**

-l设置卷组上允许创建的最大逻辑卷数 -p设置卷组中允许添加的最大物理卷数 -s设置卷组中物理卷的PE大小

**参考示例**

使用两块硬盘，创建出一块指定名称的卷组设备：

```
[root@linuxprobe ~]# vgcreate VG01 /dev/sdb /dev/sdc
 Volume group "VG01" successfully created
```
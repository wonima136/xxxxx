---



title: "pvck命令 – 检测物理卷LVM元数据一致性"
description: "pvck命令 – 检测物理卷LVM元数据一致性"
keywords: "pvck命令 – 检测物理卷LVM元数据一致性"
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

pvck命令用来检测物理卷的LVM元数据的一致性。默认情况下，物理卷中的前4个扇区保存着LVM卷标。

**语法格式：** pvck [参数]

**常用参数：**

-d调试模式 -v详细信息模式 --labelsector 指定LVE卷标所在扇区

**参考实例**

使用pvck命令检查物理卷/dev/sdb1：

```
[root@linuxcool ~]# pvck -v /dev/sdb1
Scanning /dev/sdb1
Found label on /dev/sdb1, sector 1, type=LVM2 001
Found text metadata area: offset=4096, size=192512
Found LVM2 metadata record at offset=125952,
size=70656, offset2=0 size2=0
```
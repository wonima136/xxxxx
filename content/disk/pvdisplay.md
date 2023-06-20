---



title: "pvdisplay命令 – 显示物理卷属性"
description: "pvdisplay命令 – 显示物理卷属性"
keywords: "pvdisplay命令 – 显示物理卷属性"
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

pvdisplay命令用于显示物理卷的属性。显示的物理卷信息包括：物理卷名称、所属的卷组、物理卷大小、PE大小、总PE数、可用PE数、已分配的PE数和UUID。

**语法格式：** pvdisplay [参数]

**常用参数：**

-s以短格式输出 -m显示PE到LE的映射

**参考实例**

显示物理卷基本信息：

```
[root@linuxcool ~]# pvdisplay /dev/xvda2
--- Physical volume ---
PV Name               /dev/xvda2
VG Name               VolGroup
PV Size               7.51 GiB / not usable 3.00 MiB
Allocatable           yes (but full)
PE Size               4.00 MiB
Total PE              1922
Free PE               0
Allocated PE          1922
PV UUID               6MQM6I-pgfg-PHVp-0cvz-k2WQ-YwP7-M0ee0b
```
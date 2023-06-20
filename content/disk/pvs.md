---



title: "pvs命令 – 格式化输出物理卷信息报表"
description: "pvs命令 – 格式化输出物理卷信息报表"
keywords: "pvs命令 – 格式化输出物理卷信息报表"
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

pvs命令用于格式化输出物理卷信息报表，使用pvs命令仅能得到物理卷的概要信息。

**语法格式：** pvs [参数]

**常用参数：**

--noheadings 不输出标题头 --nosuffix 不输出空间大小的单位

**参考实例**

输出物理卷信息报表：

```
[root@linuxcool ~]# pvs
PV         VG       Fmt  Attr PSize  PFree
/dev/xvda2 VolGroup lvm2 a--u  7.51g    0
/dev/xvda3 VolGroup lvm2 a--u 11.99g 1.99g
```
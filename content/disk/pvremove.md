---



title: "pvremove命令 – 删除物理卷"
description: "pvremove命令 – 删除物理卷"
keywords: "pvremove命令 – 删除物理卷"
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

pvremove命令用于删除一个存在的物理卷。使用pvremove指令删除物理卷时，它将LVM分区上的物理卷信息删除，使其不再被视为一个物理卷。

**语法格式：** pvremove [参数]

**常用参数：**

-d调试模式-f强制删除-y对提问回答yes

**参考实例**

使用pvremove命令删除物理卷/dev/sdb1：

```
[root@linuxcool ~]# pvremove /dev/sdb1
```

使用pvremove命令强制删除物理卷/dev/sdb2：

```
[root@linuxcool ~]# pvremove -f /dev/sdb2
```
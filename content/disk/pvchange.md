---



title: "pvchange命令 – 改变物理卷分配许可"
description: "pvchange命令 – 改变物理卷分配许可"
keywords: "pvchange命令 – 改变物理卷分配许可"
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

pvchange命令允许管理员改变物理卷的分配许可，如果物理卷出现故障，可以使用pvchange命令禁止分配物理卷上的PE。

**语法格式：** pvchange [参数]

**常用参数：**

-u生成新的UUID -x 是否允许分配PE

**参考实例**

禁止分配/dev/sdb1上的PE：

```
[root@linuxcool ~]# pvchange -x n /dev/sdb1
Physical volume "/dev/sdb1" changed
1 physical volume changed / 0 physical volumes not changed
```
---



title: "pvscan命令 – 列出找到的物理卷"
description: "pvscan命令 – 列出找到的物理卷"
keywords: "pvscan命令 – 列出找到的物理卷"
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

pvscan命令会扫描系统中连接的所有硬盘，列出找到的物理卷列表。使用pvscan命令的-n选项可以显示硬盘中的不属于任何卷组的物理卷，这些物理卷是未被使用的。

**语法格式：** pvscan [参数]

**常用参数：**

-d调试模式-e仅显示属于输出卷组的物理卷-n仅显示不属于任何卷组的物理卷-s短格式输出-u显示UUID

**参考实例**

扫描所有硬盘上的物理卷：

```
[root@linuxcool ~]# pvscan
```

仅显示属于输出卷组的物理卷：

```
[root@linuxcool ~]# pvscan -e
```

仅显示不属于任何卷组的物理卷：

```
[root@linuxcool ~]# pvscan -n
```
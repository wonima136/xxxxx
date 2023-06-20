---



title: "rdev命令 – 查询、设置内核映像文件"
description: "rdev命令 – 查询、设置内核映像文件"
keywords: "rdev命令 – 查询、设置内核映像文件"
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

rdev命令可以用来查询/设置内核映像文件的根设备，RAM 磁盘大小或视频模式。 不带任何参数的 rdev 命令将输出当前根文件系统的 /etc/mtab 文件行。

**语法格式：** rdev [参数]

**常用参数：**

-r使得 rdev 作为 ramsize 运行-R使得 rdev 作为 rootflags 运行-v使得 rdev 作为 vidmode 运行-h提供帮助

**参考实例**

输出当前根文件系统的 /etc/mtab 文件行：

```
[root@linuxcool ~]# rdev
```

作为 ramsize 运行：

```
[root@linuxcool ~]# rdev -r
```

作为 rootflags 运行 ：

```
[root@linuxcool ~]# rdev -R
```

使得 rdev 作为 vidmode 运行：

```
[root@linuxcool ~]# rdev -v
```
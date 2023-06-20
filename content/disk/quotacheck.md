---



title: "quotacheck命令 – 扫描获取磁盘信息"
description: "quotacheck命令 – 扫描获取磁盘信息"
keywords: "quotacheck命令 – 扫描获取磁盘信息"
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

(quotacheck命令通过扫描指定的文件系统，获取磁盘的使用情况，创建、检查和修复磁盘配额（quota) 文件。

**语法格式:** quotacheck [参数]

**常用参数：﻿**

-a扫描在/etc/fstab文件里，有加入quota设置的分区 -d详细显示指令执行过程，便于排错或了解程序执行的情形 -g扫描磁盘空间时，计算每个群组识别码所占用的目录和文件数目 -R排除根目录所在的分区 -u扫描磁盘空间时，计算每个用户识别码所占用的目录和文件数目

**参考实例**

将所有的在/etc/mtab内，含有quota支持的partition进行扫描：

```
[root@linuxcool ~]# quotacheck -avug
```

强制扫描已挂载的filesystem：

```
[root@linuxcool ~]# quotacheck -avug -m
```
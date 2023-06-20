---



title: "cpio命令 – 复制文件到归档包"
description: "cpio命令 – 复制文件到归档包"
keywords: "cpio命令 – 复制文件到归档包"
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

cpio命令主要是用来建立或者还原备份档的工具程序，cpio命令可以复制文件到归档包中，或者从归档包中复制文件。

**语法格式:** cpio [参数]

**常用参数：﻿**

-0接受新增列控制字符，通常配合find指令的“-print0”参数使用 -a重新设置文件的存取时间  -A 附加到已存在的备份文档中，且这个备份文档必须存放在磁盘上，而不能放置于磁带机里 -B将输入/输出的区块大小改成5210Bytes -c使用旧ASCII备份格式

**参考实例**

将/etc下的所有普通文件都备份到/opt/etc.cpio：

```
[root@linuxcool ~]# find /etc –type f | cpio –ocvB >/opt/etc.cpio
```

将系统上所有资料备份到磁带机内：

```
[root@linuxcool ~]# find / -print | cpio -covB > /dev/st0
```

将系统上所有资料备份到磁带机内：

```
[root@linuxcool ~]# cpio  -icdvt < /dev/st0 > /tmp/st_content
```
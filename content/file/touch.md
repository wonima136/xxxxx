---



title: "touch命令 – 创建空文件与修改时间戳"
description: "touch命令 – 创建空文件与修改时间戳"
keywords: "touch命令 – 创建空文件与修改时间戳"
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

(touch命令的功能是用于创建空文件与修改时间戳。如果文件不存在，则会创建出一个空内容的文本文件；如果文件已经存在，则会对文件的Atime（访问时间) 和Ctime（修改时间）进行修改操作，管理员可以完成此项工作，而普通用户只能管理主机的文件。

**语法格式：** touch [参数] 文件名

**常用参数：﻿**

-a设置文件的读取时间记录-c不创建新文件-d设置时间与日期-m 设置文件的修改时间记录-t设置文件的时间记录，格式与date命令相同--help显示帮助信息--version显示版本信息

**参考示例**

创建出一个指定名称的空文件：

```
[root@linuxcool ~]# touch File.txt
```

结合通配符，创建出多个指定名称的空文件：

```
[root@linuxcool ~]# touch File{1..5}.txt
```

修改指定文件的查看时间和修改时间：

```
[root@linuxcool ~]# touch -d "2023-05-18 15:44" File.cfg
[root@linuxcool ~]# stat File.cfg
  File: File.cfg
  Size: 1256      	Blocks: 8          IO Block: 4096   regular file
Device: fd00h/64768d	Inode: 35319937    Links: 1
Access: (0600/-rw-------)  Uid: (    0/    root)   Gid: (    0/    root)
Context: system_u:object_r:admin_home_t:s0
Access: 2023-05-18 15:44:00.000000000 +0800
Modify: 2023-05-18 15:44:00.000000000 +0800
Change: 2023-05-06 15:43:47.843170709 +0800
 Birth: -
```
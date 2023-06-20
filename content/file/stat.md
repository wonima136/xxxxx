---



title: "stat命令 – 显示文件的状态信息"
description: "stat命令 – 显示文件的状态信息"
keywords: "stat命令 – 显示文件的状态信息"
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

(stat命令来自英文单词status的缩写，其功能是用于显示文件的状态信息。Linux系统中每个文件都有三个“历史时间”——最后访问时间（ATIME) 、最后修改时间（MTIME）、最后更改时间（CTIME），用户可以使用stat命令查看到它们，进而判别有没有其他人修改过文件内容。

* 使用touch命令可以轻易修改文件的ATIME和MTIME，因此请勿单纯以文件历史时间作为判别系统有无被他人入侵的唯一标准。

**语法格式：** stat [参数] 文件名

**常用参数**：

-c设置显示格式-f显示文件系统信息-L支持符号链接-t设置以简洁方式显示-Z显示SELinux安全上下文值--help显示帮助信息--version显示版本信息

**参考示例**

(查看指定文件的状态信息（含ATIME、MTIME与CTIME) ：

```
[root@linuxcool ~]# stat File.cfg
  File: File.cfg
  Size: 1388      	Blocks: 8          IO Block: 4096   regular file
Device: fd00h/64768d	Inode: 35314179    Links: 1
Access: (0600/-rw-------)  Uid: (    0/    root)   Gid: (    0/    root)
Context: system_u:object_r:admin_home_t:s0
Access: 2023-10-17 02:59:34.692395342 +0800
Modify: 2023-10-17 02:32:41.346972365 +0800
Change: 2023-10-17 02:32:41.346972365 +0800
 Birth: -
```

仅查看指定文件的文件系统信息：

```
[root@linuxcool ~]# stat -f File.cfg
  File: "File.cfg"
    ID: fd0000000000 Namelen: 255     Type: xfs
Block size: 4096       Fundamental block size: 4096
Blocks: Total: 4452864    Free: 3442276    Available: 3442276
Inodes: Total: 8910848    Free: 8792229
```

以简洁的方式查看指定文件的状态信息：

```
[root@linuxcool ~]# stat -t File.cfg
File.cfg 1388 8 8180 0 0 fd00 35314179 1 0 0 1665946774 1665945161 1665945161 0 4096 system_u:object_r:admin_home_t:s0
```
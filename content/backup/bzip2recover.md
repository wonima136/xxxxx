---



title: "bzip2recover命令 – 修复损坏的.bz2文件"
description: "bzip2recover命令 – 修复损坏的.bz2文件"
keywords: "bzip2recover命令 – 修复损坏的.bz2文件"
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

bzip2recover命令用来修复损坏的.bz2文件 ， bzip2是以区块的方式来压缩文件，每个区块视为独立的单位。因此，当某一区块损坏时，便可利用bzip2recover，试着将文件中的区块隔开来，以便解压缩正常的区块。通常只适用在压缩文件很大的情况。

**语法格式：** bzip2recover [参数]

**常用参数：**

-c将解压或者解压文件写到标准输出 -d解压 -z强制压缩，而不管调用名称如何-t检查指定文件的完整性，但不要解压缩它们-f强制执行-k解压之后，保留源文件-s减少内存使用，用于压缩、解压缩和测试

**参考实例**

修复.bz2文件：

```
[root@linuxcool ~]# bzip2recover col.bz2
```

将1.c压缩到foo：

```
[root@linuxcool ~]# bzip2recover -c 1.c > foo.gz
```

解压foo：

```
[root@linuxcool ~]# bzip2recover -d foo.gz
```
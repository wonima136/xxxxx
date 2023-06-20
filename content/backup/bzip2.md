---



title: "bzip2命令 – 压缩或解压缩.bz2文件"
description: "bzip2命令 – 压缩或解压缩.bz2文件"
keywords: "bzip2命令 – 压缩或解压缩.bz2文件"
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

bzip2命令来自英文词组“bunzip2”的缩写，其功能是用于压缩或解压缩.bz2文件。Linux系统中常见的以.bz2结尾的文件即是由bzip2命令压缩而成的，bzip2是一种压缩算法较新，压缩比较充分的压缩方式，与gzip命令十分相似。

**语法格式：** bzip2 [参数] 压缩包.bz2 文件或目录名

**常用参数：**

-c显示处理结果-d执行解压缩操作-f强制覆盖已有文件而不询问-k保留已有文件-q跳过所有警告信息-s降低内存使用量-t测试压缩包完整性-v显示执行过程详细信息-z执行压缩操作--help显示帮助信息--version显示版本信息

**参考示例**

对指定的文件进行压缩操作：

```
[root@linuxcool ~]# bzip2 File.cfg
```

对指定的文件进行压缩操作，并显示详细过程：

```
[root@linuxcool ~]# bzip2 -v File.cfg
  initial-setup-ks.cfg:  1.524:1,  5.250 bits/byte, 34.37% saved, 1542 in, 1012 out.
```

检查指定压缩包文件的完整性：

```
[root@linuxcool ~]# bzip2 -t File.bz2
```

解压缩指定的压缩包文件：

```
[root@linuxcool ~]# bzip2 -d File.bz2
```
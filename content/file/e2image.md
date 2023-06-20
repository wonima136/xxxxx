---



title: "e2image命令 – 保存ext2/ext3文件元数据"
description: "e2image命令 – 保存ext2/ext3文件元数据"
keywords: "e2image命令 – 保存ext2/ext3文件元数据"
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

e2image命令可以将处于危险状态的“ext2”或者“ext3”文件系统保存到文件中。生成的文件可以被dumpe2fs命令和debugfs命令通过“-i”参数使用。有经验的管理员可以用它来做文件系统的灾难恢复。

为了节省磁盘空间，e2Image将image文件创建为稀疏文件，或以QCOW2格式创建。因此，如果需要将稀疏image文件复制到另一个位置，则应该首先对其进行压缩，或者使用GNU版本的cp ” sparse=always”选项。这不适用于QCOW2映像，它并不稀疏。

**语法格式：** e2image [参数] [文件/文件系统]

**常用参数：**

-I将文件中的元数据恢复到分区-r创建raw格式的image-Q创建QCOW2格式的image

**参考实例**

生成制定分区元数据映像文件：

```
[root@linuxcool ~]# e2image /dev/sda1 sda1
e2image 1.44.3 (10-July-2018)
```

查看文件的系统类型：

```
[root@linuxcool ~]#file sda1
sda1：Linux rev 1.0 ext2 filesystem data
```

生成一个QCOW2图像文件：

```
[root@linuxcool ~]# e2image -Q /dev/hda1 hda1.qcow2
```

生成一个原始image文件：

```
[root@linuxcool ~]# e2image -r /dev/hda1 | bzip2> hda1.e2i.bz2
```
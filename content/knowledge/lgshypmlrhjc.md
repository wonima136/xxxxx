---



title: "linux 格式化硬盘命令 如何将超过2TB的新硬盘添加到现有Linux"
description: "linux 格式化硬盘命令 如何将超过2TB的新硬盘添加到现有Linux"
keywords: "linux 格式化硬盘命令 如何将超过2TB的新硬盘添加到现有Linux"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux格式化磁盘分区命令_linux 格式化硬盘命令_linux格式化分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_0.jpg)

作为一个系统管理员，我们会有这样的一些需求：作为升级服务器容量的一部份，或则有时出现c盘故障时更换c盘，我们须要将新的硬碟配置到现有服务器。

--LakshmiDhandapani

本文导航

作为一个系统管理员，我们会有这样的一些需求：作为升级服务器容量的一部份linux操作系统论文，或则有时出现c盘故障时更换c盘，我们须要将新的硬碟配置到现有服务器。

在这篇文章中，我会向你逐渐介绍添加新硬碟到现有RHEL/CentOS或则Debian/UbuntuLinux系统的步骤。

推荐阅读：怎么将超过2TB的新硬碟添加到现有Linux[1]。

重要：请注意这篇文章的目的只是告诉你怎么创建新的分区，而不包括分区扩充或则其它选项。

我使用fdisk工具[2]完成这种配置。

我早已添加了一块20GB容量的硬碟，挂载到了/data分区。

fdisk是一个在Linux系统上用于显示和管理硬碟和分区命令行工具。

#e:c:命令9:e:e:1:1:e:8:7:9:6:f:9:9:e:4:5:1:3:1:5:b:0:8:3:d:f:1#

这个命令会列举当前分区和配置。

查看Linux分区详情

添加了20GB容量的硬碟后，fdisk-l的输出像下边这样。

```
# fdisk -l
```

查看新分区详情

新添加的c盘显示为/dev/xvdc。假如我们添加的是化学c盘，基于c盘类型它会显示为类似/dev/sda。这儿我使用的是虚拟c盘。

要在特定硬碟上分区，比如/dev/xvdc。

![linux格式化分区命令_linux 格式化硬盘命令_linux格式化磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_2.jpg)

```
# fdisk /dev/xvdc
```

常用的fdisk命令。

这儿既然我们是要创建一个分区 **linux 格式化硬盘命令**，就用n选项。

![linux格式化磁盘分区命令_linux 格式化硬盘命令_linux格式化分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_3.png)

在Linux上创建新分区

创建主分区或则扩充分区。默认情况下我们最多可以有4个主分区。

创建主分区

按需求输入分区编号。推荐使用默认的值1。

![linux格式化磁盘分区命令_linux格式化分区命令_linux 格式化硬盘命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_6.jpg)

分配分区编号

输入第一个磁道的大小。假如是一个新的c盘，一般选择默认值。假如你是在同一个c盘上创建第二个分区，我们须要在前一个分区的最后一个磁道的基础上加1。

为分区分配磁道

输入最后一个磁道或则分区大小的值。一般推荐输入分区的大小。总是添加前缀+以避免值超出范围错误。

分配分区大小

保存修改并退出。

保存分区修改

![linux格式化分区命令_linux 格式化硬盘命令_linux格式化磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_8.jpg)

如今使用mkfs命令低格c盘。

```
# mkfs.ext4 /dev/xvdc1
```

低格新分区

低格完成后，根据下边的命令挂载分区。

```
# mount /dev/xvdc1 /data
```

在/etc/fstab文件中添加条目便于永久启动时手动挂载。

```
/dev/xvdc1  /data   ext4    defaults     0   0
```

总结

如今你晓得怎样使用fdisk命令[3]在新c盘上创建分区并挂载了。

![linux 格式化硬盘命令_linux格式化分区命令_linux格式化磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_9.webp)

当处理分区、尤其是编辑已配置c盘的时侯 **linux 格式化硬盘命令**，我们须要愈发的当心。请分享你的反馈和建议吧。

(（题图：Pixabay，CC0) 

作者简介：

我的工作内容包括IBM-AIX、Solaris、HP-UX多种平台以及储存技术ONTAP和OneFS，并具有Oracle数据库的经验。

via:

作者：LakshmiDhandapani[4]译者：ictlyh校对：jasminepeng

本文由LCTT原创编译百度网盘LINUX，Linux中国荣誉推出

LCTT译者

![linux 格式化硬盘命令_linux格式化磁盘分区命令_linux格式化分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682194679589_10.jpg)

나원호ictlyh)

共计翻译：115篇

贡献时间：2015-04-03->2017-04-24
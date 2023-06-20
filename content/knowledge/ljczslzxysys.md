---



title: "( （Linux基础知识) Linux中学压缩与缩命令的方法"
description: "( （Linux基础知识) Linux中学压缩与缩命令的方法"
keywords: "( （Linux基础知识) Linux中学压缩与缩命令的方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683807312595_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

序言

Linux小学习怎么运用压缩与解压缩命令，把握基础知识。

提示：以下是本篇文章正文内容，下边案例可供参考

一、？

示例：在文件系统中，存在一些大的文件如安装包、音频、视频、图片、各类小型文档等，大文件占用大量c盘空间，通过网路传输大文件时，也占用大量网路带宽。Linux支持使用压缩与打包命令，将文件或则目录压缩成较小的文件进行储存与传输。〉在Linux中压缩与打包是两个不同概念硬盘安装linux，压缩是指把一个较大的文件 **linux解压缩命令rpm**，采用一定的压缩技术，压缩成一个较小的压缩文件，即其关系是一对一的，一个大文件对应一个压缩文件上；而打包是指将目录下的所有文件及子目录打包成一个文件，其关系是多对一，即多个文件及子目录对应一个打包文件，也可以将打包文件进行压缩，称为打包压缩文件。

![linux解压缩命令rpm_解压rpm包的linux命令_linux解压rpm](https://www.linuxcool.com/wp-content/uploads/2023/05/1683807312595_0.webp)

二、常用命令1.gzip与gunzip命令

gzip命令主要用于压缩，形成的gz格式的压缩文件，文件后缀名为.gz **linux解压缩命令rpm**，gunzip命令用于解压缩，将gz格式的压缩文件还原为原先的文件。其用法如下：

```
[root@localhost ~]# cp /etc/passwd testfile   #将/etc/目录下文件passwd拷贝到当前目录
下的testfile文件
 [root@localhost ~]# gzip testfile            #使用gzip命令压缩当前目录下文件testfile
[root@localhost ~]# ll testfile*              #查看当前目录下所有以testfile开始的文件
-rw-r--r--. 1 root root 781 8月 30 09：51 testfile.gz      #命令结果，生成testfile.gz压缩文件
```

```
[root@localhost ~]# gunzip testfile.gz        #使用gunzip命令解压缩当前目录下的压缩
文件testfile.gz
[root@localhost ~]# ll testfile*              #查看当前目录下所有以testfile开始的文件
 -rw-r--r--. 1 root root 1950 8月 30 09：51 testfile       #命令结果，将压缩文件还原为原文件
```

![linux解压缩命令rpm_解压rpm包的linux命令_linux解压rpm](https://www.linuxcool.com/wp-content/uploads/2023/05/1683807312595_1.jpg)

```html
也可以使用gzip命令来解压缩gz压缩文件，其用法如下：
```

```
[root@localhost ~]# gzip -d testfile.gz #使用gzip加-d参数表示解压缩
```

```html
如果希望将目录下的所有文件压缩，可以使用参数-r，其用法如下：
```

```
[root@localhost ~]# gzip -r testdir/  #该命令会将当前目录下的testdir目 录及其所有子目录的文件压缩为gz格式的压缩文件
```

2.bzip2与bunzip2命令

bzip2命令主要用于压缩，形成的bz2格式的压缩文件，文件后缀名为.bz2，bunzip2命令用于解压缩，将bz2格式的压缩文件还原为原先的文件。其用法如下：

```
[root@localhost ~]# bzip2 testfile  #使用bzip2命令压缩当前目录下文件testfile
[root@localhost ~]# ll test*        #查看当前目录下所有以test开始的文件
-rw-r--r--. 1 root root 822 8月 30 09：51 testfile.bz2  #命令结果，生成testfile.bz2压缩文件
```

```
[root@localhost ~]# bunzip2 testfile.bz2   #使用gunzip命令解压缩当前目录下的压缩文件
testfile.bz2
• [root@localhost ~]# ll test*             #查看当前目录下所有以test开始的文件
• -rw-r--r--. 1 root root 1950 8月 30 09：51 testfile #命令结果，将压缩文件还原为原文件
```

![linux解压rpm_解压rpm包的linux命令_linux解压缩命令rpm](https://www.linuxcool.com/wp-content/uploads/2023/05/1683807312595_2.jpg)

也可以使用bzip2命令来解压缩bz2压缩文件linux端口映射，其用法如下：

```
[root@localhost ~]# bzip2 -d testfile.bz2 #使用bzip2加-d参数表示解压缩
```

3.xz与unxz命令

xz命令主要用于压缩，形成的xz格式的压缩文件，文件后缀名为.xz，unxz命令用于解压缩，将xz格式的压缩文件还原为原先的文件。其用法如下：

![linux解压缩命令rpm_linux解压rpm_解压rpm包的linux命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683807312595_3.jpg)

```
[root@localhost ~]# xz testfile #使用xz命令压缩当前目录下文件testfile
[root@localhost ~]# ll test*    #查看当前目录下所有以test开始的文件
-rw-r--r--. 1 root root 840 8月 30 09：51 testfile.xz #命令结果，生成testfile.xz压缩文件
```

```
[root@localhost ~]# unxz testfile.xz #使用unxz命令解压缩当前目录下的压缩文件testfile.xz
[root@localhost ~]# ll test*         #查看当前目录下所有以test开始的文件
-rw-r--r--. 1 root root 1950 8月 30 09：51 testfile #命令结果，将压缩文件还原为原文件
```

也可以使用xz命令来解压缩xz压缩文件，其用法如下：

```
[root@localhost ~]# xz -d testfile.xz #使用xz加-d参数表示解压缩
```

总结

gzip/gunzip、bzip2/bunzip2和xz/unxz的区别
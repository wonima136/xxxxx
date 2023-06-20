---



title: "nl命令-显示文件内容及行号"
description: "nl命令-显示文件内容及行号"
keywords: "nl命令-显示文件内容及行号"
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

nl命令来自英文词组“Number of lines”的缩写，其功能是用于显示文件内容及行号，使用nl命令会有类似于“cat -n 文件名”的效果，除此之外还可以对于显示的行号格式进行深度定制。

**语法格式：** nl [参数] 文件名

**常用参数：**

-b设置行号指定的方式-f设置页脚行数-h设置页眉行数-i设置自动递增值-l设置将N个空行视为一行-n显示行号表示的方式-p在逻辑定界符处不重新开始计算-s在行号后添加字符串-w设置行号栏位的占用位数--help显示帮助信息--version显示版本信息

**参考示例**

显示指定文件内容及行号信息：

```
[root@linuxcool ~]# nl File.cfg
     1	#version=RHEL8
     2	ignoredisk --only-use=sda
     3	autopart --type=lvm
     4	# Partition clearing information

     5	clearpart --none --initlabel
     6	# Use graphical install
     7	graphical

     8	# Use CDROM installation media
     9	cdrom
……………………省略部分输出信息………………
```

显示指定文件内容及行号信息，空行也加上行号：

```
[root@linuxcool ~]# nl -b a File.cfg
     1	#version=RHEL8
     2	ignoredisk --only-use=sda
     3	autopart --type=lvm
     4	# Partition clearing information
     5
     6	clearpart --none --initlabel
     7	# Use graphical install
     8	graphical
     9
     10	# Use CDROM installation media
     11	cdrom
……………………省略部分输出信息………………
```

空行也算一行，并且行号前面自动补0，统一输出格式后显示指定文件内容及行号信息：

```
[root@linuxcool ~]# nl -b a -n rz File.cfg
     000001	#version=RHEL8
     000002	ignoredisk --only-use=sda
     000003	autopart --type=lvm
     000004	# Partition clearing information
     000005
     000006	clearpart --none --initlabel
     000007	# Use graphical install
     000008	graphical
     000009
     000010	# Use CDROM installation media
     000011	cdrom
……………………省略部分输出信息………………
```
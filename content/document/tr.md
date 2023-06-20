---



title: "tr命令 – 字符转换工具"
description: "tr命令 – 字符转换工具"
keywords: "tr命令 – 字符转换工具"
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

tr命令来自英文单词“transform”的缩写，中文译为“转换”，其功能是用于字符转换。tr命令是一款批量字符转换、压缩、删除的文本工具，但仅能从标准输入中读取文本内容，需要与管道符或输入重定向操作符搭配使用。

**语法格式：** tr [参数] 字符串1 字符串2

**常用参数：**

-c反选字符串1的补集-d删除字符串1中出现的所有字符-s删除所有重复出现的字符序列-t将字符串1截断为字符串2的长度--help显示帮助信息--version显示版本信息

**参考示例**

将指定文件中的小写字母转换成大写字母后输出内容到终端界面：

```
[root@linuxcool ~]# tr [a-z] [A-Z] < File.cfg
#VERSION=RHEL8
IGNOREDISK --ONLY-USE=SDA
AUTOPART --TYPE=LVM
# PARTITION CLEARING INFORMATION
CLEARPART --ALL --INITLABEL --DRIVES=SDA
# USE GRAPHICAL INSTALL
………………省略部分输出信息………………
```

删除指定文件中所有的数字后输出内容到终端界面：

```
[root@linuxcool ~]# tr -d [0-9] < File.cfg
#version=RHEL
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --all --initlabel --drives=sda
# Use graphical install
………………省略部分输出信息………………
```

将指定文件中的多个相邻空行去重后输出内容到终端界面：

```
[root@linuxcool ~]# tr -s "[n]" < File.cfg
#version=RHEL8
ignoredisk --only-use=sda
autopart --type=lvm
# Partition clearing information
clearpart --all --initlabel --drives=sda
# Use graphical install
………………省略部分输出信息………………
```
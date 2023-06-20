---



title: "cut命令 – 按列提取文件内容"
description: "cut命令 – 按列提取文件内容"
keywords: "cut命令 – 按列提取文件内容"
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

cut命令的功能是用于按列提取文件内容。常用的grep命令仅能对关键词进行按行提取过滤，而cut命令则是可以根据指定的关键词信息，针对特定的列内容进行过滤。

**语法格式：** cut [参数] 文件名

**常用参数：﻿**

-b以字节为单位进行分割-c以字符为单位进行分割 -d设置分隔符-f显示指定字段的内容-n取消分割多字节字符--complement补足被选择的字节、字符或字段--help显示帮助信息--version显示版本信息

**参考示例**

以冒号为间隔符，仅提取指定文件中第一列的内容：

```
[root@linuxcool ~]# cut -d : -f 1 /etc/passwd
root
bin
daemon
adm
lp
sync
………………省略部分输出信息………………
```

仅提取指定文件中每行的前4个字符：

```
[root@linuxcool ~]# cut  -c 1-4 /etc/passwd
root
bin:
daem
adm:
lp:x
sync
shut
halt
mail
……………省略部分输出信息………………
```
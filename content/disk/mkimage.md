---



title: "mkimage命令 – 制作可启动镜像文件"
description: "mkimage命令 – 制作可启动镜像文件"
keywords: "mkimage命令 – 制作可启动镜像文件"
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

mkimage命令来自英文词组“Make image”的缩写，其功能是用于制作可启动镜像文件。mkimage命令是u-boot嵌入式系统引导加载程序用于制作系统镜像文件的工具，在使用bootm命令加载内核和根文件系统时都要用到这个工具。

**语法格式：** mkimage [参数] 文件名

**常用参数：**

-a设置RAM地址-A设置CPU架构-C设置压缩类型-d设置程序文件名-e设置内核的入口地址-n设置镜像文件名-O设置操作系统-T设置镜像类型

**参考示例**

指定CPU架构和操作系统，制作系统镜像文件：

```
[root@linuxcool ~]# mkimage -A arm -O linux -a 0x20008000 -e 0x20008000 -d File.bin.gz uImage
```

指定压缩格式，制作系统镜像文件：

```
[root@linuxcool ~]# mkimage -A arm -O linux -C bzip2 -a 0x20008000 -e 0x20008000 -d File.bin.gz uImage
```
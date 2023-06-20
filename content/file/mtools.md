---



title: "mtools命令 – 显示mtools支持的指令"
description: "mtools命令 – 显示mtools支持的指令"
keywords: "mtools命令 – 显示mtools支持的指令"
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

mtools为MS-DOS文件系统的工具程序，可模拟许多MS-DOS的指令。这些指令都是mtools的符号连接，因此会有一些共同的特性 。

**语法格式：** mtools [参数]

**常用参数：**

-a  长文件名重复时自动更改目标文件的长文件名 -A  短文件名重复但长文件名不同时自动更改目标文件的短文件名 -o  长文件名重复时，将目标文件覆盖现有的文件 -O 短文件名重复但长文件名不同时，将目标文件覆盖现有的文件 -r  长文件名重复时，要求用户更改目标文件的长文件名 -R 短文件名重复但长文件名不同时，要求用户更改目标文件的短文件名 -s  长文件名重复时，则不处理该目标文件-S 短文件名重复但长文件名不同时，则不处理该目标文件 -v  执行时显示详细的说明 -V  显示版本信息

**参考实例**

在命令提示符中直接输入mtools，可显示其所支持的MS-DOS命令，如下所示：

```
[root@linuxcool ~]# mtools
Supported commands:
mattrib, mbadblocks, mcat, mcd, mclasserase, mcopy, mdel, mdeltree
mdir, mdoctorfat, mdu, mformat, minfo, mlabel, mmd, mmount
mpartition, mrd, mread, mmove, mren, mshowfat, mtoolstest, mtype
mwrite, mzip
```
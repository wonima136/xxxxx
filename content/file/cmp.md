---



title: "cmp命令 – 比较两个文件是否有差异"
description: "cmp命令 – 比较两个文件是否有差异"
keywords: "cmp命令 – 比较两个文件是否有差异"
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

cmp命令有用于比较两个任意类型的文件，若两个文件相同则默认不输出任何信息，若两个文件不同，则会输出第一个不同之处的字符和列数编号，结果输出到标准输出。

若不指定任何文件名称或是所给予的文件名为”-“，则cmp命令会从标准输入设备读取数据。

**语法格式：** cmp [参数] [文件] [文件]

**常用参数：﻿**

--help显示帮助-v/--version显示版本信息-s/--quit/--silent不显示错误信息-l/--verbose标示出所有不一样的地方-i/--ignore-initial指定一个数目-c/--print-chars 除了标明差异处的十进制字码之外，一并显示该字符所对应字符

**参考实例**

比较文件“tempfile”和“tempfile1”(两文件相同时，不显示任何信息，两文件不同时)：

```
[root@linuxcool ~]# cmp tempfile tempfile1
tempfile tempfile1 differ：byte 1, line 1
```

比较文件“tempfile”和“tempfile1” ，不显示错误信息：

```
[root@linuxcool ~]# cmp -s tempfile tempfile1
```

比较文件“tempfile”和“tempfile1”，标示出所有不一样的地方：

```
[root@linuxcool ~]# cmp -l tempfile tempfile1
1 12 151
2 151 167
8 167 12
cmp: EOF on tempfole1 after byte8
```

比较文件“tempfile”和“tempfile1” ，指定一个数目：

```
[root@linuxcool ~]# cmp -i 2 tempfile tempfile1
tempfile tempfile1 differ：byte 6, line 1
```

比较文件“tempfile”和“tempfile1” , 除了标明差异处的十进制字码之外，一并显示该字符所对应字符：

```
[root@linuxcool ~]# cmp -c tempfile tempfile1
tempfile tempfile1 differ：byte 1, line 1 is 12 'J 151 i
```
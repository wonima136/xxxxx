---



title: "colrm命令 – 过滤指定列"
description: "colrm命令 – 过滤指定列"
keywords: "colrm命令 – 过滤指定列"
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

colrm命令的英文全称是“column remove”，即意为删除列，功能是从标准输入设备读取数据，转而输出到标准输出设备，如果不加任何参数，则该指令不会过滤任何一列。

**语法格式：** colrm [开始列数编号<结束列数编号>]

**常用参数：**

开始列数编号 指定要删除的列的起始编号 结束列数编号 指定要删除的列的结束编号，有时候这个参数可以省略

**参考实例**

删除第4 列之后的所有内容 ：

```
[root@linuxcool ~]# colrm 4
```

删除第4列到第6列的内容 ：

```
[root@linuxcool ~]# colrm 4 6
```
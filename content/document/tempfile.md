---



title: "tempfile命令 – 临时文件命名"
description: "tempfile命令 – 临时文件命名"
keywords: "tempfile命令 – 临时文件命名"
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

有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是/tmp，因为该目录中所有的内容在系统重启后就会被清空。

tempfile命令只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他发行版没有这个命令。

**语法格式：** tempfile [参数]

**常用参数：**

$变量

**参考实例**

用一个加带了随机数的文件名作为临时文件命名：

```
[root@linuxcool ~]# temp_file_name="/tmp/file_$RANDOM"
```
---



title: "sum命令 – 计算文件的校验码和显示块数"
description: "sum命令 – 计算文件的校验码和显示块数"
keywords: "sum命令 – 计算文件的校验码和显示块数"
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

sum命令用于计算并显示指定文件的校验和与文件所占用的磁盘块数

**语法格式：** sum[参数]

**常用参数：**

-r 使用BSD的校验和算法，块大小为1k -s 使用system V的校验和算法，块大小为512字节

**参考实例**

计算文件校验码：

```
[root@linuxcool ~]# sum insert.sql
00827    12
```
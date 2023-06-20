---



title: "tac命令 – 反向显示文件内容"
description: "tac命令 – 反向显示文件内容"
keywords: "tac命令 – 反向显示文件内容"
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

tac命令的功能是用于反向显示文件内容，即常见的查看文件内容命令cat的反写形式，非常有趣，好记。也就是说，当我们使用tac命令查看文件内容时，最先显示的是最后一行，倒数第二行，倒数第三行，以此类推到最后显示原本文件的第一行内容。

**语法格式：** tac [参数] 文件名

**常用参数：**

-b在行前添加分隔标志-r将分隔标志视作正则表达式来解析-s使用字符串作为分隔标志 --help显示帮助信息--version 显示版本信息

**参考示例**

反向显示指定文件的内容：

```
[root@linuxcool ~]# cat File.txt
hello world
hello linuxcool.com
hello linuxprobe.com
[root@linuxcool ~]# tac File.txt
hello linuxprobe.com
hello linuxcool.com
hello world
```
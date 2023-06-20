---



title: "look命令 – 查询单词"
description: "look命令 – 查询单词"
keywords: "look命令 – 查询单词"
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

look指令用于英文单字的查询。您仅需给予它欲查询的字首字符串，它会显示所有开头字符串符合该条件的单字。

**语法格式：** look [参数] [字符串] [文件]

**常用参数：**

-a使用另一个字典文件web2，该文件也位于/usr/dict目录下-d 只对比英文字母和数字，其余一慨忽略不予比对 -f  忽略字符大小写差别。-t  <字尾字符串> 设置字尾字符串

**参考示例**

查询file文件中以L开头的行：

```
[root@linuxcool ~]# cat file
 LINUX!
 Linux is a free unix-type opterating system.
 This is a linux testfile!
 Linux test
[root@linuxcool ~]# look L file
 LINUX!
 Linux is a free unix-type opterating system.
```
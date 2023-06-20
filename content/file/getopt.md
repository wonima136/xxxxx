---



title: "getopt命令 – 解析命令行选项"
description: "getopt命令 – 解析命令行选项"
keywords: "getopt命令 – 解析命令行选项"
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

getopt命令用于解析命令行选项，检测给定的选项是否合法。在此命令中，选项部分主要用于影响getopt命令解析选项,其中optstring是需要解析的合法选项的字符串，paramenters通常是一组变量，用于存储从命令行获取的每个选项及参数。

**语法格式：** getopt [参数]

**常用参数：**

-a允许长选项以单个字符”-“开始-n指定一个程序，供getopt(3)函数输出错误信息时使用-o识别单字符的短选项-q禁止输出错误信息

**参考实例**

检查提供的参数列表(-a -b test1 -cd test2 test3)，并基于提供的optstring进行解析 ：

```
[root@linuxcool ~]# getopt ab:cd -a -b test1 -cd test2 test3
```
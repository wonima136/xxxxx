---



title: "expand命令 – 转换为空白字符"
description: "expand命令 – 转换为空白字符"
keywords: "expand命令 – 转换为空白字符"
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

(expand命令用于将文件的制表符（TAB) 转换为空白字符（space），将结果显示到标准输出设备。

**语法格式:** expand [参数]

**常用参数：﻿**

-t指定制表符所代表的空白字符的个数，而不使用默认的8。-i不转换非空白符后的制表符 --help显示帮助信息--version显示版本信息

**参考实例**

将文件中每行第一个Tab符替换为6个空格符，非空白符后的制表符不作转换：

```
[root@linuxcool ~]# expand -i -t 6 file
```
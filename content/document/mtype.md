---



title: "mtype命令 – mtools工具"
description: "mtype命令 – mtools工具"
keywords: "mtype命令 – mtools工具"
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

mtype为mtools工具命令，模拟MS-DOS的type命令，可显示MS-DOS文件的内容。

**语法格式：** mtype [参数] [文件]

**常用参数：**

-s去除8位字符码集的第一个位，使它兼容于7位的ASCII。-t将MS-DOS文本文件中的”换行+光标移至行首”字符转换成Linux的换行字符。

**参考实例**

打开名为dos.txt 的MS-DOS文件可使用如下命令：

```
[root@linuxcool ~]# mtype dos.txt
```
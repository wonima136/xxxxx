---



title: "gawk命令 – 模式扫描与处理语言"
description: "gawk命令 – 模式扫描与处理语言"
keywords: "gawk命令 – 模式扫描与处理语言"
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

gawk是Unix中原始awk程序的GNU版本,强大之处在于可以写脚本来读取文本行的数据，然后处理并显示数据。

**语法格式：** gawk [参数]

**常用参数：**

(-f从文件程序文件读取AWK程序源，而不是从第一个命令行参数。可以使用多个-f（或--file) 选项-F指定描绘一行中数据字段的文件分隔符-v定义gawk程序中使用的变量和默认值-mr指定数据文件中的最大记录大小

**参考实例**

命令行读取程序脚本：

```
[root@linuxcool ~]# gawk '{print "hello world"}'
```

指定描绘一行中数据字段的文件分隔符：

```
[root@linuxcool ~]# gawk -F: '{print $1}' /etc/passwd
```
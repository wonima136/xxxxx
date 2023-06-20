---



title: "wc命令 – 统计文件的字节数、单词数、行数"
description: "wc命令 – 统计文件的字节数、单词数、行数"
keywords: "wc命令 – 统计文件的字节数、单词数、行数"
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

wc命令来自英文词组“Word count”的缩写，其功能是用于统计文件的字节数、单词数、行数等信息，并将统计结果输出到终端界面。利用wc命令可以很快的计算出准确的单词数及行数，评估出文本的内容长度，要想了解一个文件，不妨先wc一下吧~

**语法格式：** wc [参数] 文件名

**常用参数：﻿**

-c统计字节数-l统计行数-L设置最长行的长度-m统计字符数-w统计单词数--help 显示帮助信息--version显示版本信息

**参考示例**

统计指定文件的单词数量：

```
[root@linuxcool ~]# wc -w File.cfg
117 File.cfg
```

统计指定文件的字节数量：

```
[root@linuxcool ~]# wc -c File.cfg
1256 File.cfg
```

统计指定文件的字符数量：

```
[root@linuxcool ~]# wc -m File.cfg
1256 File.cfg
```

统计指定文件的总行数：

```
[root@linuxcool ~]# wc -l File.cfg
43 File.cfg
```
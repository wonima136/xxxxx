---



title: "cdparanoia命令 – 翻录CD文件"
description: "cdparanoia命令 – 翻录CD文件"
keywords: "cdparanoia命令 – 翻录CD文件"
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

cdparanoia命令用于翻录CD文件。

cdparanoia翻录工具通常被认为是可用于翻录CD的最佳工具。它直接从CD中切割数据，没有模拟步骤，并且还很好地报告在翻录时感觉到的任何抖动，因此您知道您的CD撕裂尽可能接近原始。

**语法格式：** cdparanoia [参数]

**常用参数：**

-B强制将每首曲目放到一个单独的文件1-从第一首曲目到最后一首2-从音乐CD上“刮写”除了第一道音轨之外的所有音轨数字以1~16x的速度刻录

**参考实例**

安装cdparanoia：

```
[root@linuxcool ~]# apt-get install cdparanoia
```

按4x的速度“刮写”所有的音轨，每个音轨存为不同的*.wav文件：

```
[root@linuxcool ~]# cdparanoia -S 4 -B "1-"
```

从音乐CD上“刮写”除了第一道音轨之外的所有音轨：

```
[root@linuxcool ~]# cdparanoia -B "2-"
```
---



title: "pr命令 – 将文本文件转换成适合打印的格式"
description: "pr命令 – 将文本文件转换成适合打印的格式"
keywords: "pr命令 – 将文本文件转换成适合打印的格式"
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

pr命令用来将文本文件转换成适合打印的格式，它可以把较大的文件分割成多个页面进行打印，并为每个页面添加标题。

**语法格式：** pr [参数]

**常用参数：**

-h 为页指定标题

**参考实例**

将较大的文件分割成多个页面进行打印：

```
[root@linuxcool ~]# pr test.txt
```

为页指定标题 ：

```
[root@linuxcool ~]# pr -h 'Hello World' test.txt
```

将文件内容分割成多列进行打印：

```
[root@linuxcool ~]# pr -6 test.txt
```
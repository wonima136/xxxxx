---



title: "fmt命令 – 编排文本文件"
description: "fmt命令 – 编排文本文件"
keywords: "fmt命令 – 编排文本文件"
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

fmt命令会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备。若指定的文件名为”-“，则fmt指令会从标准输入设备读取数据。

**语法格式：** fmt [参数] [文件]

**常用参数：**

-c每段前两列缩排 -s只拆开字数超出每列字符数的列，但不合并字数不足每列字符数的列 -t每列前两列缩排，但第1列和第2列的缩排格式不同 -u每个字符之间都以一个空格字符间隔，每个句子之间则两个空格字符分隔 -w设置每列的最大字符数

**参考实例**

重排指定文件。如文件file共5行文字，可以通过命令对该文件格式进行重排：

```
[root@linuxcool ~]# fmt file
```

将文件file重新排成85 个字符一行：

```
[root@linuxcool ~]# fmt -w 85 file
```

让fmt突出显示第一行：

```
[root@linuxcool ~]# fmt -t file
```

用fmt拆分长行：

```
[root@linuxcool ~]# fmt -s file
```

在单词与单词之间，句子之间用空格分开：

```
[root@linuxcool ~]# fmt -u file
```
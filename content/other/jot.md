---



title: "jot命令 – 创建数字列表"
description: "jot命令 – 创建数字列表"
keywords: "jot命令 – 创建数字列表"
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

jot命令可以创建一系列数字。给定数字总数及起始数字即可。可帮助您根据您提供的值创建数字列表，作为起始编号和要在其后查看的值的数量。

通过jot执行计算的语法，并使用jot命令在Ubuntu命令行中执行高效数学运算。 不过可能首先需要安装Athena-jot才能在Ubuntu上使用jot命令。

**语法格式：** jot [参数]

**常用参数：**

x打印x个数值y数字y之后z在数字y之后反转打印x个数字，直到数字z

**参考实例**

在数字2之后打印6个数值：

```
[root@linuxcool ~]# joy 6 2
2
3
4
5
6
7
```

在数字10之后反转打印8个数字，直到数字2：

```
[root@linuxcool ~]# joy 8 10 2
10
9
8
7
5
4
3
2
```

从第1天(y值)开始打印12月份的9天(x值)：

```
[root@linuxcool ~]# $ for i in `jot 9 1`; do echo December$i; done
december1
december2
december3
december4
december5
december6
december7
december8
december9
```
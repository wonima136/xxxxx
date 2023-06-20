---



title: "tset命令 – 终端初始化"
description: "tset命令 – 终端初始化"
keywords: "tset命令 – 终端初始化"
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

tset命令的作用是可以进行终端初始化。默认终端类型为“unknown”。

如果命令行上没有指定终端类型，则应用-m选项映射，如果终端类型以问号(” ? “)开头，则提示用户确认终端类型。或者可以输入另一个类型来指定新类型。一旦确定了终端类型，就会检索终端。如果没有找到该类型的，则提示用户输入另一种终端类型。

一旦获取了条目，就会设置窗口大小、退格、中断和行终止字符(以及许多其他内容)，并且将终端和制表符初始化字符串发送到标准错误输出。最后，如果擦除、中断和行终止字符已经更改，或者没有设置为默认值，那么它们的值将显示在标准错误输出中。

**语法格式：** tset [参数] [终端]

**常用参数：**

-w调整窗口的大小，以匹配通过setupterm推导的大小-c控制字符和模式-e<ch>将擦除字符设置为ch-i<ch>将中断字符设置为ch-I不要发送终端或标签初始化字符串到终端-k<ch>将行删除字符设置为ch-m<映射>从一个端口类型到一个终端指定一个映射-Q为擦除、中断和行删除字符不显示任何值-q终端类型被显示到标准输出，并且所述终端是不以任何方式进行初始化-r输出终端类型到标准输出-s输出shell命令的序列来初始化环境变量TEERM到标准输出

**参考实例**

终端初始化：

```
[root@linuxcool ~]# tset
```

显示终端类型：

```
[root@linuxcool ~]# tset -q
```

将中断字符设置为ch：

```
[root@linuxcool ~]# tset -i ch
Interrupt set to c.
```
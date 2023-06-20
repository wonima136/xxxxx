---



title: "gedit命令 – GNOME桌面的文本编辑器"
description: "gedit命令 – GNOME桌面的文本编辑器"
keywords: "gedit命令 – GNOME桌面的文本编辑器"
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

gedit命令来自英文词组“GNOME text editor”的缩写，其功能是用于编辑文本信息，是GNOME桌面环境的文本编辑器。gedit命令拥有非常强大的通用文本编辑功能，能够创建和编辑各类型文本文件，用户还可以向gedit中添加自主选择的插件，让编辑器支持更多高级功能。

**语法格式：** gedit [参数] [文件名]

**常用参数：**

-f忽略部分错误信息-R递归处理所有子文件-s使用独立模式-v显示执行过程详细信息-w使用独占方式打开文件--encoding设置字符编码--help显示帮助信息--list-encodings显示可使用的编码列表--new-document新建一个新文档--new-window新建一个新窗口--preserve-root禁止对目录进行递归操作--version显示版本信息

**参考示例**

打开并编辑指定的文件：

```
[root@linuxcool ~]# gedit File.cfg
```

显示可使用的编码列表：

```
[root@linuxcool ~]# gedit --list-encodings
UTF-8
ISO-8859-1
ISO-8859-2
ISO-8859-3
ISO-8859-4
ISO-8859-5
………………省略部分输出信息………………
```

设置打开文件时使用的字符编码：

```
[root@linuxcool ~]# gedit --encoding=UTF-8
```

新建一个新窗口，置于桌面最上层：

```
[root@linuxcool ~]# gedit --new-window
```

以独立模式运行：

```
[root@linuxcool ~]# gedit -s
```
---



title: "gitview命令 – 查看文件内容"
description: "gitview命令 – 查看文件内容"
keywords: "gitview命令 – 查看文件内容"
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

gitview的命令全称为“gnu interactie tools viewer”。该命令用于查看文件内容。 当使用gitview命令查看文件内容时，会同时显示十六进制和ASCII格式的字符。

**语法格式：** gitview [参数]

**常用参数：**

-b单色模式，不使用ANSI控制码显示彩色-c彩色模式，使用ANSI控制码显示色彩-i显示存放gitview程序的所在位置-l不使用先前的显示字符-h显示帮助信息

**参考实例**

以彩色模式观看指定文件中的内容：

```
[root@linuxcool ~]# gitview -c /home/linuxcool/file.txt
```

以单色模式观看指定文件中的内容：

```
[root@linuxcool ~]# gitview -b /home/linuxcool/file.txt
```

显示存放gitview程序的所在位置：

```
[root@linuxcool ~]# gitview -i
```
---



title: "strings命令 – 在对象文件或二进制文件中查找可打印的字符串"
description: "strings命令 – 在对象文件或二进制文件中查找可打印的字符串"
keywords: "strings命令 – 在对象文件或二进制文件中查找可打印的字符串"
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

strings命令在对象文件或二进制文件中查找可打印的字符串。字符串是4个或更多可打印字符的任意序列，以换行符或空字符结束。 strings命令对识别随机对象文件很有用。

**语法格式：** strings [参数]

**常用参数：**

-a 扫描整个文件而不是只扫描目标文件初始化和装载段 -f 在显示字符串前先显示文件名 -t输出字符的位置，基于八进制，十进制或者十六进制

**参考实例**

列出ls中所有的ASCII文本：

```
[root@linuxcool ~]# strings /bin/ls
```

列出ls中所有的ASCII文本：

```
[root@linuxcool ~]# cat /bin/ls strings
```

查找ls中包含libc的字符串，不区分大小写：

```
[root@linuxcool ~]# strings /bin/ls | grep -i libc
```

在显示字符串前先显示文件名：

```
[root@linuxcool ~]# strings -f /bin/ls | grep libc
```

输出字符的位置：

```
[root@linuxcool ~]# strings -t /bin/ls | grep libc
```
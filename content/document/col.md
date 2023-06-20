---



title: "col命令 – 用于过滤控制字符"
description: "col命令 – 用于过滤控制字符"
keywords: "col命令 – 用于过滤控制字符"
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

**功能介绍：**

col命令的英文全称是“colation”，其中文释义就是“过滤”。该命令是一个标准输入文本过滤器，它从标注输入设备读取文本内容，并把内容显示到标注输出设备。 在许多UNIX说明文件里，都有RLF控制字符。当我们运用shell特殊字符”>”和”>>”，把说明文件的内容输出成纯文本文件时，控制字符会变成乱码，col指令则能有效滤除这些控制字符。

**语法格式：** col [参数]

**常用参数：**

-b过滤掉所有的控制字符，包括RLF和HRLF -f滤除RLF字符，但允许将HRLF字符呈现出来 -x以多个空格字符来表示跳格字符 -l<缓冲区列数>预设的内存缓冲区有128列，您可以自行指定缓冲区的大小

**参考实例**

将man命令的帮助文档保存为man_help，使用-b 参数过滤所有控制字符：

```
[root@linuxcool ~]# man man | col-b > man_help
```

将man的说明文件转存为纯文本文件并过滤掉所有控制字符 ：

```
[root@linuxcool ~]# man col | col -b > file
```

利用 cat -A 显示出所有特殊按键，最后以 col 将 转成空白：

```
[root@linuxcool ~]# cat -A /etc/man.config
```

将 col 的 man page 转存成为 /root/col.man 的纯文本档：

```
[root@linuxcool ~]# man col | col -b > /root/col.man
```
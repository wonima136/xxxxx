---



title: "strip命令 – 从文件中去除指定符号或调试信息"
description: "strip命令 – 从文件中去除指定符号或调试信息"
keywords: "strip命令 – 从文件中去除指定符号或调试信息"
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

strip命令的功能是用于从文件中去除指定符号或调试信息，可以针对一般文件与函数库文件进行操作，能够减少文件占用空间大小。

**语法格式：** strip [参数] 文件名

**常用参数：**

-e在对象文件的可选头中设置F_LOADONLY标志-E复位对象文件的可选头中的F_LOADONLY位-H去除对象文件头-l从对象文件里去除行号信息-r除了外部符号和静态符号条目，去除其余信息-t除了函数符号和行号，去除其余信息-x除了静态或外部符号，去除其余符号表信息--help显示帮助信息--version显示版本信息

**参考示例**

去除指定文件中的符号表和行号信息：

```
[root@linuxcool ~]# strip File.out
```

去除指定文件的对象文件头信息：

```
[root@linuxcool ~]# strip -H File.out
```

去除指定文件中的32、64位符号表信息：

```
[root@linuxcool ~]# strip -X 32-64 File.a
```
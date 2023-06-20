---



title: "diff3命令 – 比较3个文件的不同之处"
description: "diff3命令 – 比较3个文件的不同之处"
keywords: "diff3命令 – 比较3个文件的不同之处"
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

diff3命令用于比较3个文件，将3个文件的不同的地方显示到标准输出。

**语法格式：** diff3 [参数]

**常用参数：**

-A全部显示，有冲突内容用括号括起来-a将所有文件视为文本-T使制表符对齐

**参考实例**

比较3个文件的不同之处：

```
[root@linuxcool ~]# diff3 file1 file2 file3
```

全部显示，有冲突内容用括号括起来：

```
[root@linuxcool ~]# diff3 -A file1 file2 file3
```

将所有文件视为文本：

```
[root@linuxcool ~]# diff3 -a file1 file2 file3
```

使制表符对齐：

```
[root@linuxcool ~]# diff3 -T file1 file2 file3
```
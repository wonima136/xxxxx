---



title: "bzcat命令 – 读取bzip2压缩文件的内容"
description: "bzcat命令 – 读取bzip2压缩文件的内容"
keywords: "bzcat命令 – 读取bzip2压缩文件的内容"
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

相比较于gzip，bzip2有更好的压缩比，bzcat则是查看bzip2压缩文件后的内容。

**语法格式：** bzcat [命令]

**参考实例**

创建bzip2文件：

```
[root@linuxcool ~]# bzip2 -z test.txt
[root@linuxcool ~]# ls
test.txt.bz2
```

显示test.txt.bz2解压缩之后的文件内容：

```
[root@linuxcool ~]# bzcat test.txt.bz2
 a b c d
 e f g h
 i j k l
```
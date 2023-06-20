---



title: "split命令 – 分割文件内容"
description: "split命令 – 分割文件内容"
keywords: "split命令 – 分割文件内容"
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

split命令来自英文单词“分裂”，其功能是用于分割文件内容。Linux系统运维人员可以使用split命令对指定的大文件进行内容分割，默认会按照每1000行切割成一个小文件来执行，也可以自定义分割大小，方便阅读和传输。

**语法格式：** split [参数] 文件名

**常用参数：**

-数字设置要分割的行数-a设置后缀长度-b设置分割的字节-C保持每行的完整性-d使用数字后缀而不是字母-l设置每个分割文件的行数-t设置间隔符--help显示帮助信息--verbose显示执行过程详细信息--version显示版本信息

**参考示例**

将指定的文件内容每6行分割成一个小文件：

```
[root@linuxcool ~]# split -6 File.cfg
[root@linuxcool ~]# ls -a xa*
xaa  xab  xac  xad  xae  xaf  xag  xah
```

将指定的文件内容每60个字节分割成一个小文件：

```
[root@linuxcool ~]# split -b 60 File.cfg
[root@linuxcool ~]# ls xa*
xaa  xac  xae  xag  xai  xak  xam  xao  xaq  xas  xau  xaw
xab  xad  xaf  xah  xaj  xal  xan  xap  xar  xat  xav  xax
```

以数字为后缀，将指定的文件内容每10行分割成一个小文件：

```
[root@linuxcool ~]# split -d -l 10 File.cfg
[root@linuxcool ~]# ls x0*
x00  x01  x02  x03  x04
```
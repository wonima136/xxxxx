---



title: "nntpget命令 – 下载新闻组文章"
description: "nntpget命令 – 下载新闻组文章"
keywords: "nntpget命令 – 下载新闻组文章"
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

执行nntpget命令将从指定的新闻组服务器下载文章。nntpget命令会从标准输入设备读取信息识别码，而下载的新闻文章则呈现到标准输出设备。

**语法格式：** nntpget [参数]

**常用参数：**

-d<组类型清单> 指定新闻组类型为distribution的清单-f<文件或目录>  下载其更改时间较指定文件或目录的更改时间更接近现在的新闻文章-n<组名称清单> 指定新闻组名称的清单-o 下载本地主机所没有的新闻文章 -t<时间日期>  指定时间与日期，较该日期时间更新的新闻文章都会被下载-u<文件或目录> 此参数的效果和指定”-f”参数类似，但它在成功下载文章之后会去更改指定文件或木的更改时间，便于下次再作为参考 -v 当命令执行时，把每篇文章的信息识别码都送到标准输出，本参数需配合参数”-o”使用

**参考实例**

下载指定日期的文章：

```
[root@linuxcool ~]# nntpget -t 2020.01.01
```

指定下载目录：

```
[root@linuxcool ~]# nntpget -u /linuxcool
```

显示下载具体信息：

```
[root@linuxcool ~]# nntpget -u -v /linuxcool
```
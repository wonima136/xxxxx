---



title: "axel命令 – 多线程下载工具"
description: "axel命令 – 多线程下载工具"
keywords: "axel命令 – 多线程下载工具"
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

axel是优秀的http/ftp多线程下载工具。支持断点续传，可以从多个地址或者从一个地址的多个连接来下载同一个文件。适合单线程下载限速的情景，通过多线程加速下载。

**语法格式：** axel [参数]

**常用参数：**

-s设置最高速度-n设置连接数-o下载另存为本地文件-H指定HTTP头-U指定HTTP代理-V版本信息

**参考实例**

以5个链接数下载testfile.zip，并另存为/tmp/目录下的filetest.zip 文件：

```
[root@linuxcool ~]# axel -n 5 -o /tmp/filetest.zip  http://www.Linuxcool.com/testfile.zip
```
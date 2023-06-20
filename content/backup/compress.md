---



title: "compress命令 – unix档案压缩命令"
description: "compress命令 – unix档案压缩命令"
keywords: "compress命令 – unix档案压缩命令"
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

compress命令是一个相当古老的 unix 档案压缩指令，压缩后的档案会加上一个 .Z 延伸档名以区别未压缩的档案，压缩后的档案可以以 uncompress 解压。若要将数个档案压成一个压缩档，必须先将档案 tar 起来再压缩。由于 gzip 可以产生更理想的压缩比例，一般人多已改用 gzip 为档案压缩工具。

**语法格式：** compress [参数]

**常用参数：**

(-c输出结果至标准输出设备（一般指荧幕)  -f强迫写入档案，若目的档已经存在，则会被覆盖 (force) -v将程序执行的讯息印在荧幕上 (verbose) -b设定共同字串数的上限，以位元计算，可以设定的值为 9 至 16 bits 。由于值越大，能使用的共同字串就 越多，压缩比例就越大，所以一般使用预设值 16 bits (bits) -d将压缩档解压缩 -V列出版本讯息

**参考实例**

压缩文件：

```
[root@linuxcool ~]# compress abc.h
```

解压文件：

```
[root@linuxcool ~]# compress -d abc.h.Z
```

按指定压缩比例进行压缩：

```
[root@linuxcool ~]# compress -b 7 abc.h
```

强制压缩文件夹：

```
[root@linuxcool ~]# compress -rf /home/abc/
```
---



title: "gzip命令 – 压缩和解压文件"
description: "gzip命令 – 压缩和解压文件"
keywords: "gzip命令 – 压缩和解压文件"
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

gzip命令来自英文单词gunzip的缩写，其功能是用于压缩和解压文件。gzip是一款使用广泛的压缩工具，文件经过压缩后一般会以.gz后缀结尾，与tar命令合用后即为.tar.gz后缀。

据统计，gzip命令对文本文件的压缩比率通常能达到60%~70%，压缩后可以很好地提升存储空间的使用率，还能够在网络传输文件时减少等待时间。

**语法格式：** gzip [参数] 文件名

**常用参数：**

-a使用ASCII文本模式-c把压缩后的文件输出到标准输出设备-d解压指定压缩包文件-f强行压缩文件而不询问-h显示帮助信息-k保留原文件-l显示压缩包内的文件信息-L显示版权信息-n不保存原来的文件名及时间戳-N保存原来的文件名及时间戳-t测试压缩包是否正确无误-q静默执行模式-r递归处理所有子文件-S设置解压或压缩后文件的后缀名-v显示执行过程详细信息-V显示版本信息

**参考示例**

将指定的文件进行压缩，压缩包默认会以“原文件名.gz”保存到当前工作目录下，原文件会被自动删除：

```
[root@linuxcool ~]# gzip File.cfg
```

解压指定的压缩包文件并显示解压过程，解压后的文件会保存在当前工作目录下，压缩包会被自动删除：

```
[root@linuxcool ~]# gzip -dv File.cfg.gz
File.cfg.gz:	 44.3% -- replaced with File.cfg
```

将指定的文件进行压缩，但是不删除原文件：

```
[root@linuxcool ~]# gzip -k File.cfg
```

显示指定文件的压缩信息：

```
[root@linuxcool ~]# gzip -l File.cfg.gz
         compressed        uncompressed  ratio uncompressed_name
                929                1585  43.8% File.cfg
```
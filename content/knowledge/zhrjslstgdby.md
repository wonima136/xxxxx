---



title: "正厚软件沙老师提供打包压缩命令1.gzip命令·命令功能"
description: "正厚软件沙老师提供打包压缩命令1.gzip命令·命令功能"
keywords: "正厚软件沙老师提供打包压缩命令1.gzip命令·命令功能"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

本文由【正厚软件】沙老师提供

打包压缩命令

1.gzip命令

·命令功能：压缩或展开文件

·命令格式：

ogzip[-acdfhlLnNrtvV19][-S后缀][文件名…]：压缩文件

ogunzip[-acfhlLnNrtvV][-S后缀][文件名…]：解压缩文件

ozcat[-fhLV][文件名…]：解压缩文件

·特点：

ogzip只能压缩文件，不能压缩目录，后缀名为.gz，压缩后原文件会被删掉

·[选项]：

o-c：讲到标准输出上，保持原始文件

o-d：解压缩

o-f：强制压缩或解压缩

o-r：递归访问目录结构，压缩文件

·gzip是在Linux系统中常常使用的一个对文件进行压缩和解压缩的命令 **linux文件传输命令**，既便捷又好用。gzip除了可以拿来压缩大的、较少使用的文件以节约c盘空间，还可以和tar命令一起构成Linux操作系统中比较流行的压缩文件格式。gzip命令对文本文件有60%～70%的压缩率。降低文件大小有两个显著的益处，一是可以降低储存空间linux apache 虚拟主机，二是通过网路传输文件时，可以降低传输的时间。

·gunzip命令拿来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这种压缩文件预设最后的扩充名为.gz。

·示例：

o对test目录下的全部文件进行压缩

![linux命令下载文件_linux执行exe文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_0.jpg)

o对test目录下的所有压缩文件进行解压缩

![linux文件传输命令_linux执行exe文件命令_linux命令下载文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_1.jpg)

o#gzip-dr*同命令：#gunzip-r*

ozcat解压缩后输出到标准输出

![linux命令下载文件_linux执行exe文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_2.jpg)

2.tar命令

·命令功能：对文件和目录进行打包/解包

·命令格式：tar[-zcf]压缩后文件名文件或目录

·参数：

o-c：构建一个包文件，后缀为.tar

o-x：解开一个包文件

![linux命令下载文件_linux执行exe文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_3.png)

o-z：以gzip命令压缩/解压缩

o-v：处理的过程中显示文件

o-f：file指定文件名

·参数示例：

otar-zcvf——打包同时进行压缩 **linux文件传输命令**，生成.tar.gz

otar-zxvf——对压缩后的打包文件进行解压

otar-cvf——只对文件进行打包，没压缩

otar-xvf——对.tar文件进行解包

·-C：指定解压后的目录

·示例：

o打包test文件夹

![linux执行exe文件命令_linux文件传输命令_linux命令下载文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_4.jpg)

o将test.tar.gz解压缩

![linux命令下载文件_linux文件传输命令_linux执行exe文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_5.jpg)

![linux命令下载文件_linux执行exe文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_6.jpg)

3.zip命令

·命令功能：将文件打包为zip格式的压缩文件

·命令格式：

ozip压缩文件名源文件：将源文件打包为zip格式的压缩文件，名为指定的压缩文件名

ounzip压缩文件名：从zip包里解压出文件

o在linux压缩后的文件，基本都可以在Windows系统中解压；Windows中压缩的文件，在Linux中不一定可用，并且zip格式的压缩文件，可以做到可用

ozip的压缩比不是很高

·参数：

o-r：递归压缩，包含目录内的全部文件

o-f：只更新有变动的文件学linux有前途吗，生成新的压缩包

·示例：

o将test目录打包为test.zip

![linux执行exe文件命令_linux文件传输命令_linux命令下载文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_7.jpg)

![linux执行exe文件命令_linux文件传输命令_linux命令下载文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_8.jpg)

o把test.zip文件解压到test目录下

![linux命令下载文件_linux文件传输命令_linux执行exe文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_9.jpg)

![linux文件传输命令_linux执行exe文件命令_linux命令下载文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677189816258_10.jpg)
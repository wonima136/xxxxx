---



title: "Zcompress程序压缩的常见命令及常见的压缩文件扩展名"
description: "Zcompress程序压缩的常见命令及常见的压缩文件扩展名"
keywords: "Zcompress程序压缩的常见命令及常见的压缩文件扩展名"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

常见的压缩文件扩充名

1、*.Zcompress程序压缩的文件

2、*.gzgzip程序压缩的文件

3、.bz2bzip2程序压缩的文件

4、.tartar程序打包的数据，并没有压缩过

5、.tar.gztar程序打包的文件，其中经过gzip的压缩

6、.tar.bz2tar程序打包的文件，其中经过bzip2的压缩

常见的三种压缩命令

1、compress

![linux中只压缩不打包命令_linux压缩打包命令_linux 常见文件打包压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_0.jpg)

2、gzip

3、bzip2

compress是十分老旧的一个压缩程序，在比较旧的系统版本才能自带，其压缩的文件*.Z可以用gzip解压，但compress不能解压gizp压缩的文件*.gz，因而已被其他压缩命令代替。另外，bzip2的压缩比优于gzip的压缩比。

常见打包命令

1、tar

tar既可以打包多个文件或文件夹，同时还可以通过gzip/bzip2进行压缩 **linux 常见文件打包压缩命令**，是使用最广泛的命令。

常见查看压缩文件内容命令

1、zcat查看gzip压缩的文件

![linux中只压缩不打包命令_linux压缩打包命令_linux 常见文件打包压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_1.jpg)

2、bzcat查看bzip2压缩的文件

各命令的用户使用：

1、gzip

gzip[-cdtv#]文件名

参数：

-c：将压缩的数据输出到屏幕上，可通过数据流重定向来处理；

-d：解压缩的参数；

-t：可以拿来检验一个压缩文件的一致性，瞧瞧文件有无错误；

![linux压缩打包命令_linux 常见文件打包压缩命令_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_2.jpg)

-v：可以显示源文件/压缩文件的压缩比等信息；

-#：压缩等级，-1最快，而且压缩比最差，-9最慢 **linux 常见文件打包压缩命令**，而且压缩比最好是默认-6。

2、bzip2

bzip2[-cdkzv#]文件名

参数：

-c：将压缩的数据输出到屏幕上如何安装linux，可通过数据流重定向来处理；

-d：解压缩的参数；

-k：保留原文件linux命令行和shell脚本编程宝典，而不会删掉原始文件；

![linux中只压缩不打包命令_linux 常见文件打包压缩命令_linux压缩打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_3.png)

-z：压缩的参数；

-v：可以显示源文件/压缩文件的压缩比等信息；

-#：压缩等级，与gzip同样，-9最佳，-1最快。

3、tar

tar的参数十分多，下边只列出几个常用的。

压缩：tar-jcv-ffilename.tar.bz2被压缩文件或目录

查询：tar-jtv-ffilename.tar.bz2

解压缩：tar-jxv-ffilename.tar.bz2-C解压到的目录

![linux压缩打包命令_linux 常见文件打包压缩命令_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683662680747_4.webp)

参数：

-c：新建打包文件；

-t：查看打包文件的内容含什么文件名，重点在查看文件名；

-x：解打包或解压缩参数；

-j：通过bzip2压缩/解压缩文件；

-z：通过gzip压缩/解压缩文件；

-v：在压缩/解压缩过程中，将正在处理的文件显示下来；

-ffilename：-f前面要接被处理的文件名，建议-f单独写一个参数；

-C目录：在解压缩时，若要在特定目录下解压缩，可用此参数。
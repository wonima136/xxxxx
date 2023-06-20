---



title: "Linux下最常见的压缩格式有哪些？软件测试小结"
description: "Linux下最常见的压缩格式有哪些？软件测试小结"
keywords: "Linux下最常见的压缩格式有哪些？软件测试小结"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679860946632_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

松勤软件测试

坚持教育初心

既问收获也问耕耘

对于刚才接触Linux的人来说，一定会给Linux下一大堆各色各样的文件名给搞晕。别个不说，单单就压缩文件为例，我们晓得在Windows下最常见的压缩文件就只有两种，一是zip **linux rar压缩命令**，另一个是.rar。

但是Linux就不同了，它有.gz、.tar.gz、tgz、bz2、.Z、.tar等诸多的压缩文件名，再者windows下的.zip和.rar也可以在Linux下使用，不过在Linux使用.zip和.rar的人就太少了。下边我就来对那些常见的压缩文件进行一番小结，希望你上次碰到这种文件时不至于被搞晕.

Linux中打包和压缩的区别：

在具体总结各种压缩文件之前呢，首先要弄清两个概念：打包和压缩。

打包是指将一大堆文件或目录哪些的弄成一个总的文件，压缩则是将一个大的文件通过一些压缩算法弄成一个小文件。

为何要分辨这两个概念呢？虽然这缘于Linux中的好多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你就得先利用另它的工具将这一大堆文件先打成一个包，之后再就原先的压缩程序进行压缩。

linux常用解压缩命令：

![linux rar 压缩大文件_linux命令解压rar_linux rar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679860946632_0.jpg)

我们常见的文件压缩格式windows下有zip和rar，rar在windows系统下成为了事实的标准。并且在Linux下常见的有tar.gztar.bz2tar.xz格式。

Linux下实际中将文件归档和文件压缩分开，借助tar将数据文件归档，依靠于其他压缩工具压缩。其中以tar.gz最为常见。

Linux下不常见的压缩格式有tar.lztar.lzma等。

遵守于windows下的DOS系统的文件命名方法和宽度限制Linux下的压缩格式有如下的表现方式：

LongShort

.tar.bz2.tb2,.tbz,.tbz2

.tar.gz.tgz

.tar.lz

.tar.lzma.tlz

.tar.xz.txz

.tar.Z.tZ

.zip格式

解压：unzip文件名.zip

压缩：zip文件名.zip目录名

.tar格式

压缩：tarcvf文件名.tar文件名

解压：tarxvf文件名.tar

.tar.gz格式

解压：tarzxvf文件名.tar.gz

压缩：tarzcvf文件名.tar.gz文件名

.tar.bz2格式

解压：tarjxvf文件名.tar.bz2

![linux rar 压缩大文件_linux rar压缩命令_linux命令解压rar](https://www.linuxcool.com/wp-content/uploads/2023/03/1679860946632_1.jpg)

压缩：tarjcvf文件名.tar.bz2目录名

.bz2格式

解压：bzip2-d文件名.bz2

压缩：bzip2-z文件名

linux下软件安装

假如你的Linux系统带有安装程序linux压缩，最好用系统自带的安装程序来安装。例如SuSE的YaST2就带有安装程序，在KDE环境下只要是rpm，就可以在Konqueror上面点击再“InstallwithYaST2”，这样做的用处是YaST2会给你提示包的详尽信息，手动检测信赖关系，但是之后可以便捷地在YaST2上面卸载软件包。SuSE的Red-Carpet也提供了安装功能，也不错。

另一种方法是使用rpm命令 **linux rar压缩命令**，须要打开终端，切换到xxx.rpm所在目录，执行：

rpm-ivhxxx.rpm

假如须要还可以带上其他参数。不过在SuSE上面，用rpm命令安装的软件包，在YaST2的控制面板上面显示为“锁定状态”linux培训机构，我不晓得这是哪些意思，不过软件包是可用的，也可以在YaST2上面卸载。

2.1、rpm安装：RedhatLinux提供的一种包封装格式。

1)安装：rpm–ivh软件包名

![linux rar压缩命令_linux rar 压缩大文件_linux命令解压rar](https://www.linuxcool.com/wp-content/uploads/2023/03/1679860946632_2.jpg)

如：rpm-ivhsoftware.rpm

2)卸载：rpm–e软件名

如：rpm-esoftware

rpm参数说明

-i安装软件

-t测试安装，不是真的安装

-p显示安装进度

-f忽视任何错误

-U升级安装

-v复印安装进度信息

2.2、编译安装

![linux命令解压rar_linux rar 压缩大文件_linux rar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679860946632_3.png)

示例步骤：

1)步入/usr/local/linux设置默认网关，并创建jdk目录。

2)将下载好的源码包解压到该目录：tar-zxvfjdk8.tar.gz。

3)执行configure，生成Makefile文件：./configure--prefix=/usr/local/jdk/

说明：

–prefix参数指定软件安装目录。当执行makeinstall命令时，会将软件安装在此路径中。

4)执行make，从Makefile中读取指令，编译源码：makeclean;make

5)makeinstall，二补码文件会被安装到原本configureprefix参数设置的路径中去。

我们一起去松笃学测试
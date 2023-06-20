---



title: "【每日一题】解压"
description: "【每日一题】解压"
keywords: "【每日一题】解压"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675145113370_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

.tar

解包：tar zxvf FileName.tar

打包：tar czvf FileName.tar DirName

———————————————

.gz

解压1：gunzip FileName.gz

解压2：gzip -d FileName.gz

压缩：gzip FileName

.tar.gz 和 .tgz

解压：tar zxvf FileName.tar.gz

压缩：tar zcvf FileName.tar.gz DirName

———————————————

.bz2

解压1：bzip2 -d FileName.bz2

解压2：bunzip2 FileName.bz2

压缩： bzip2 -z FileName

.tar.bz2

解压：tar jxvf FileName.tar.bz2

压缩：tar jcvf FileName.tar.bz2 DirName

———————————————

![linux解压命令 tar.gz_linux解压tar文件命令_linux tar 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675145113370_0.webp)

.bz

解压1：bzip2 -d FileName.bz

解压2：bunzip2 FileName.bz

压缩：未知

.tar.bz

解压：tar jxvf FileName.tar.bz

压缩：未知

———————————————

.Z

![linux解压tar文件命令_linux解压命令 tar.gz_linux tar 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675145113370_1.jpg)

解压：uncompress FileName.Z

压缩：compress FileName

.tar.Z

解压：tar Zxvf FileName.tar.Z

压缩：tar Zcvf FileName.tar.Z DirName

———————————————

.zip

解压：unzip FileName.zip

压缩：zip FileName.zip DirName

———————————————

.rar

解压：rar a FileName.rar

压缩：rar e FileName.rar

rar请到：下载 **linux解压tar文件命令 linux解压tar文件命令**！

(解压后请将rar_static拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2 tmp]# cp rar_static /usr/bin/rar

———————————————

.lha

![linux tar 解压命令_linux解压tar文件命令_linux解压命令 tar.gz](https://www.linuxcool.com/wp-content/uploads/2023/01/1675145113370_3.jpg)

解压：lha -e FileName.lha

压缩：lha -a FileName.lha FileName

lha请到：~ishii/lhaunix/下载linux学习论坛linux培训！

(>解压后请将lha拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2 tmp]# cp lha /usr/bin/

———————————————

.rpm

解包：rpm2cpio FileName.rpm | cpio -div

———————————————

.deb

解包：ar p FileName.deb data.tar.gz | tar zxf --

———————————————
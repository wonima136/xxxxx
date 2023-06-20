---



title: "一下压缩的方法及方法压缩方法"
description: "一下压缩的方法及方法压缩方法"
keywords: "一下压缩的方法及方法压缩方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677881100296_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

.tar.gz

解压：tarzxvfFileName.tar.gz

压缩：tarzcvfFileName.tar.gzDirName

大致总结了一下linux下各类格式的压缩包的压缩、解压方式。并且部份方式我没有用到，也就不全，希望你们帮我补充，我将随时更改建立 **linux压缩文件命令**，感谢！

.tar

解包：tarxvfFileName.tar

打包：tarcvfFileName.tarDirName

(（注：tar是打包，不是压缩！) 

———————————————

.gz

解压1：gunzipFileName.gz

解压2：gzip-dFileName.gz

压缩：gzipFileName

.tar.gz和.tgz

解压：tarzxvfFileName.tar.gz

压缩：tarzcvfFileName.tar.gzDirName

———————————————

.bz2

解压1：bzip2-dFileName.bz2

解压2：bunzip2FileName.bz2

压缩：bzip2-zFileName

.tar.bz2

解压：tarjxvfFileName.tar.bz2

压缩：tarjcvfFileName.tar.bz2DirName

———————————————

.bz

解压1：bzip2-dFileName.bz

解压2：bunzip2FileName.bz

压缩：未知

.tar.bz

解压：tarjxvfFileName.tar.bz

压缩：未知

———————————————

.Z

解压：uncompressFileName.Z

压缩：compressFileName

.tar.Z

解压：tarZxvfFileName.tar.Z

压缩：tarZcvfFileName.tar.ZDirName

———————————————

.zip

解压：unzipFileName.zip

压缩：zipFileName.zipDirName

———————————————

.rar

解压：rarxFileName.rar

压缩：raraFileName.rarDirName

rar请到：下载！

(解压后请将rar_static拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2tmp]#cprar_static/usr/bin/rar

———————————————

.lha

解压：lha-eFileName.lha

压缩：lha-aFileName.lhaFileName

lha请到：~ishii/lhaunix/下载！

(>解压后请将lha拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

[root@www2tmp]#cplha/usr/bin/

———————————————

.rpm

解包：rpm2cpioFileName.rpm|cpio-div

———————————————

.deb

解包：arpFileName.debdata.tar.gz|tarzxf-

———————————————

.tar.tgz.tar.gz.tar.Z.tar.bz.tar.bz2.zip.cpio.rpm

.deb.slp.arj.rar.ace.lha.lzh.lzx.lzs.arc.sda.sfx.lnx

.zoo.cab.kar.cpt.pit.sit.sea

解压：sExxFileName.*

压缩：sExaFileName.*FileName

sEx只是调用相关程序，本身并无压缩、解压功能，请注意！

sEx请到：下载！

(解压后请将sEx拷贝到/usr/bin目录（其他由$PATH环境变量指定的目录也可以) ：

![linux压缩文件夹命令_linux压缩文件命令_linux 压缩 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677881100296_0.jpg)

[root@www2tmp]#cpsEx/usr/bin/

参考文献：Linux文件压缩工具手册

(（虽然看帮助是最好的方式，通常各个命令都可以用”--help”参数得到常用使用方式！) 

用户常常须要备份计算机系统中的数据，为了节约储存空间，经常将备份文件进行压缩。下边分别介绍备份与压缩的命令。

tar命令

(tar可以为文件和目录创建档案。借助tar，用户可以为某一特定文件创建档案（备份文件) ，也可以在档案中改变文件，或则向档案中加入新的文件。tar最初被拿来在磁带上创建档案，如今，用户可以在任何设备上创建档案，如软驱。借助tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以易于网路传输是十分有用的。Linux上的tar是GNU版本的。

句型：tar［主选项+辅选项］文件或则目录

使用该命令时，主选项是必需要有的，它告诉tar要做哪些事情，辅选项是辅助使用的，可以选用。

主选项：

c创建新的档案文件。假如用户想备份一个目录或是一些文件，就要选择这个选项。

r把要存档的文件追加到档案文件的未尾。诸如用户早已作好备份文件，又发觉还有一个目录或是一些文件忘掉备份了，这时可以使用该选项，将忘掉的目录或文件追加到备份文件中。

t列举档案文件的内容，查看早已备份了什么文件。

u更新文件。就是说linux系统介绍，用新增的文件代替原备份文件，假如在备份文件中找不到要更新的文件，则把它追加到备份文件的最后。

x从档案文件中释放文件。

辅助选项：

(b该选项是为磁带机设定的。其后跟一数字，拿来说明区块的大小，系统预设值为20（20*512bytes) 。

f使用档案文件或设备，这个选项一般是必选的。

k保存早已存在的文件。诸如我们把某个文件还原，在还原的过程中，遇见相同的文件，不会进行覆盖。

m在还原文件时，把所有文件的更改时间设定为现今。

M创建多卷的档案文件，便于在几个c盘中储存。

v详尽报告tar处理的文件信息。如无此选项，tar不报告文件信息。

w每一步都要求确认。

z用gzip来压缩/解压缩文件，加上该选项后可以将档案文件进行压缩，但还原时也一定要使用该选项进行解压缩。

例1：把/home目录下包括它的子目录全部做备份文件，备份文件名为usr.tar。

![linux 压缩 命令_linux压缩文件命令_linux压缩文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677881100296_1.png)

$tarcvfusr.tar/home

例2：把/home目录下包括它的子目录全部做备份文件，并进行压缩，备份文件名为usr.tar.gz。

$tarczvfusr.tar.gz/home

例3：把usr.tar.gz这个备份文件还原并解压缩。

$tarxzvfusr.tar.gz

例4：查看usr.tar备份文件的内容，并以分屏形式显示在显示器上。

$tartvfusr.tar|more

要将文件备份到一个特定的设备，只需把设备名作为备份文件名。

例5：用户在/dev/fd0设备的软驱中创建一个备份文件，并将/home目录中所有的文件都拷贝到备份文件中。

$tarcf/dev/fd0/home

要恢复设备c盘中的文件，可使用xf选项：

$tarxf/dev/fd0

假如用户备份的文件大小超过设备可用的存储空间，如软驱，您可以创建一个多卷的tar备份文件。M选项指示tar命令提示您使用一个新的存储设备，当使用M选项向一个软盘进行存档时linux就该这么学，tar命令在一张软驱已满的时侯会提醒您再装入一张新的软驱。这样您就可以把tar档案存入几张c盘中。

$tarcMf/dev/fd0/home

要恢复几张盘中的档案，只要将第一张装入软盘，之后输入有x和M选项的tar命令。在必要时您会被提醒装入另外一张软驱。

$tarxMf/dev/fd0

gzip命令

降低文件大小有两个显著的益处，一是可以降低储存空间，二是通过网路传输文件时，可以降低传输的时间。gzip是在linux系统中常常使用的一个对文件进行压缩和解压缩的命令，既便捷又好用。

(句型：gzip［选项］压缩（解压缩) 的文件名

各选项的含意：

-c将输出讲到标准输出上 **linux压缩文件命令**，并保留原有文件。

-d将压缩文件解压。

-l对每位压缩文件，显示下述数组：

压缩文件的大小

![linux压缩文件夹命令_linux压缩文件命令_linux 压缩 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677881100296_2.jpg)

未压缩文件的大小

压缩比

未压缩文件的名子

-r递归式地查找指定目录并压缩其中的所有文件或则是解压缩。

-t测试，检测压缩文件是否完整。

-v对每一个压缩和解压的文件，显示文件名和压缩比。

(-num用指定的数字num调整压缩的速率，-1或--fast表示最快压缩方式（低压缩比) ，-9或--best表示最慢压缩方式（高压缩比）。系统缺省值为6。

假定一个目录/home下有文件mm.txt、sort.txt、。

例1：把/home目录下的每位文件压缩成.gz文件。

$cd/home

$gzip*

$ls

m.txt.gzsort.txt.gz.gz

例2：把例1中每位压缩的文件解压，并列举详尽的信息。

$gzip-dv*

mm.txt.gz43.1%—--replacedwithmm.txt

sort.txt.gz43.1%—--replacedwithsort.txt

.gz43.1%—--replacedwith

$ls

mm.txtsort.txt

例3：详尽显示例1中每位压缩的文件的信息，并不解压。

$gzip-l*

compresseduncompr.ratiouncompressed_name

27744543.1%mm.txt
---



title: "( （Linux基础知识) zip命令"
description: "( （Linux基础知识) zip命令"
keywords: "( （Linux基础知识) zip命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679774677896_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统下的压缩解压缩命令解读

Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。以下斗蟹小编整理的Linux系统下的压缩解压缩命令解读，欢迎阅读!

linuxzip命令

zip-rmyfile.zip./*

将当前目录下的所有文件和文件夹全部压缩成myfile.zip文件,-r表示递归压缩子目录下所有文件.

2.unzip

unzip-o-d/home/sunnymyfile.zip

把myfile.zip文件解压到/home/sunny/

-o:不提示的情况下覆盖文件;

-d:-d/home/sunny指明将文件解压缩到/home/sunny目录下;

3.其他

zip-dmyfile.zipsmart.txt

删掉压缩文件中smart.txt文件

zip-mmyfile.zip./rpm_info.txt

向压缩文件中myfile.zip中添加rpm_info.txt文件

——————————————————————————-

要使用zip来压缩文件，在shell提示下键入下边的命令：

zip-rfilename.zipfilesdir

在这个事例里，filename.zip代表你创建的文件，filesdir代表你想放置新zip文件的目录。-r选项指定你想递归地(recursively)包括所有包括在filesdir目录中的文件。

要抽取zip文件的内容，键入以下命令：

unzipfilename.zip

你可以使用zip命令同时处理多个文件和目录，方式是将它们逐一列举，并用空格间隔：

zip-rfilename.zipfile1file2file3/usr/work/school

里面的命令把file1、file2、file3、以及/usr/work/school目录的内容(假定这个目录存在)压缩上去，之后倒入filename.zip文件中。

tar命令解读

-c:构建压缩档案

-x：解压

-t：查看内容

-r：向压缩归档文件末尾追加文件

![linux zip文件解压命令_linux解压命令zip_linux 解压zip文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679774677896_0.jpg)

-u：更新原压缩包中的文件

这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下边的参数是按照须要在压缩或解压档案时可选的。

-c:构建压缩档案

-x：解压

-t：查看内容

-r：向压缩归档文件末尾追加文件

-u：更新原压缩包中的文件

下边的参数-f是必须的

-f:使用档案名子，切忌，这个参数是最后一个参数，前面只能接档案名。

#tar-cfall.tar*.jpg

这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示形成新的包，-f指定包的文件名。

#tar-rfall.tar*.gif

这条命令是将所有.gif的文件降低到all.tar的包上面去。-r是表示降低文件的意思。

#tar-ufall.tarlogo.gif

这条命令是更新原先tar包all.tar中logo.gif文件，-u是表示更新文件的意思。

#tar-tfall.tar

这条命令是列举all.tar包中所有文件，-t是列举文件的意思

#tar-xfall.tar

这条命令是解出all.tar包中所有文件，-t是解开的意思

压缩

tar–cvfjpg.tar*.jpg//将目录里所有jpg文件打包成tar.jpg

tar–czfjpg.tar.gz*.jpg//将目录里所有jpg文件打包成jpg.tar后，但是将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz

tar–cjfjpg.tar.bz2*.jpg//将目录里所有jpg文件打包成jpg.tar后，但是将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2

tar–cZfjpg.tar.Z*.jpg//将目录里所有jpg文件打包成jpg.tar后 **linux zip文件解压命令**，但是将其用compress压缩linux格式化命令，生成一个umcompress压缩过的包，命名为jpg.tar.Z

rarajpg.rar*.jpg//rar格式的压缩，须要先下载rarforlinux

zipjpg.zip*.jpg//zip格式的压缩，须要先下载zipforlinux

解压

tar–xvffile.tar//解压tar包

tar-xzvffile.tar.gz//解压tar.gz

![linux解压命令zip_linux zip文件解压命令_linux 解压zip文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679774677896_1.jpg)

tar-xjvffile.tar.bz2//解压tar.bz2

tar–xZvffile.tar.Z//解压tar.Z

unrarefile.rar//解压rar

unzipfile.zip//解压zip

总结

1、*.tar用tar–xvf解压

2、*.gz用gzip-d或则gunzip解压

3、*.tar.gz和*.tgz用tar–xzf解压

4、*.bz2用bzip2-d或则用bunzip2解压

5、*.tar.bz2用tar–xjf解压

6、*.Z用uncompress解压

7、*.tar.Z用tar–xZf解压

8、*.rar用unrare解压

9、*.zip用unzip解压

tar命令

tar可以为文件和目录创建档案。借助tar，用户可以为某一特定文件创建档案(备份文件)，也可以在档案中改变文件，或则向档案中加入新的文件。tar最初被拿来在磁带上创建档案，如今，用户可以在任何设备上创建档案，如软驱。借助tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以易于网路传输是十分有用的。Linux上的tar是GNU版本的。

句型：tar[主选项+辅选项]文件或则目录

使用该命令时，主选项是必需要有的，它告诉tar要做哪些事情，辅选项是辅助使用的，可以选用。

主选项：

c创建新的档案文件。假如用户想备份一个目录或是一些文件，就要选择这个选项。

r把要存档的文件追加到档案文件的未尾。诸如用户早已作好备份文件，又发觉还有一个目录或是一些文件忘掉备份了，这时可以使用该选项，将忘掉的目录或文件追加到备份文件中。

t列举档案文件的内容 **linux zip文件解压命令**，查看早已备份了什么文件。

u更新文件。就是说，用新增的文件代替原备份文件，假如在备份文件中找不到要更新的文件，则把它追加到备份文件的最后。

x从档案文件中释放文件。

辅助选项：

b该选项是为磁带机设定的。其后跟一数字，拿来说明区块的大小，系统预设值为20(20*512bytes)。

f使用档案文件或设备，这个选项一般是必选的。

k保存早已存在的文件。诸如我们把某个文件还原，在还原的’过程中，遇见相同的文件，不会进行覆盖。

m在还原文件时，把所有文件的更改时间设定为现今。

M创建多卷的档案文件，便于在几个c盘中储存。

v详尽报告tar处理的文件信息。如无此选项，tar不报告文件信息。

w每一步都要求确认。

z用gzip来压缩/解压缩文件，加上该选项后可以将档案文件进行压缩，但还原时也一定要使用该选项进行解压缩。

Linux下的压缩文件分析

对于刚才接触Linux的人来说，一定会给Linux下一大堆各色各样的文件名给搞晕。别个不说，单单就压缩文件为例，我们晓得在Windows下最常见的压缩文件就只有两种，一是,zip，另一个是.rap。而且Linux就不同了，它有.gz、.tar.gz、tgz、bz2、.Z、.tar等诸多的压缩文件名，再者windows下的.zip和.rar也可以在Linux下使用，不过在Linux使用.zip和.rar的人就太少了。本文就来对那些常见的压缩文件进行一番小结，希望你上次遇见那些文件时不至于被搞晕。

在具体总结各种压缩文件之前呢，首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录哪些的弄成一个总的文件，压缩则是将一个大的文件通过一些压缩算法弄成一个小文件。为何要分辨这两个概念呢?虽然这缘于Linux中的好多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你就得先利用另它的工具将这一大堆文件先打成一个包，之后再就原先的压缩程序进行压缩。

Linux下最常用的打包程序就是tar了，使用tar程序打下来的包我们常称为tar包，tar包文件的命令一般都是以.tar结尾的。生成tar包后，就可以用其它的程序来进行压缩了，所以首先就来讲讲tar命令的基本用法：

tar命令的选项有好多(用mantar可以查看到)，但常用的就这么几个选项，下边来举例说明一下：

#tar-cfall.tar*.jpg

这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示形成新的包，-f指定包的文件名。

#tar-rfall.tar*.gif

这条命令是将所有.gif的文件降低到all.tar的包上面去。-r是表示降低文件的意思。

#tar-ufall.tarlogo.gif

这条命令是更新原先tar包all.tar中logo.gif文件，-u是表示更新文件的意思。

#tar-tfall.tar

这条命令是列举all.tar包中所有文件，-t是列举文件的意思

#tar-xfall.tar

这条命令是解出all.tar包中所有文件，-t是解开的意思

以上就是tar的最基本的用法。为了便捷用户在打包解包的同时可以压缩或解压文件，tar提供了一种特殊的功能。这就是tar可以在打包或解包的同时调用其它的压缩程序，例如调用gzip、bzip2等。

1)tar调用gzip

gzip是GNU组织开发的一个压缩程序，.gz结尾的文件就是gzip压缩的结果。与gzip相对的解压程序是gunzip。tar中使用-z这个参数来调用gzip。下边来举例说明一下：

#tar-czfall.tar.gz*.jpg

这条命令是将所有.jpg的文件打成一个tar包，但是将其用gzip压缩，生成一个gzip压缩过的包，包名为all.tar.gz

#tar-xzfall.tar.gz

这条命令是将前面形成的包解开。

2)tar调用bzip2

bzip2是一个压缩能力更强的压缩程序，.bz2结尾的文件就是bzip2压缩的结果。与bzip2相对的解压程序是bunzip2。tar中使用-j这个参数来调用gzip。下边来举例说明一下：

#tar-cjfall.tar.bz2*.jpg

![linux解压命令zip_linux 解压zip文件命令_linux zip文件解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679774677896_2.png)

这条命令是将所有.jpg的文件打成一个tar包，但是将其用bzip2压缩，生成一个bzip2压缩过的包，包名为all.tar.bz2

#tar-xjfall.tar.bz2

这条命令是将前面形成的包解开。

3)tar调用compress

compress也是一个压缩程序linux deepin，而且似乎使用compress的人不如gzip和bzip2的人多。.Z结尾的文件就是bzip2压缩的结果。与compress相对的解压程序是uncompress。tar中使用-Z这个参数来调用gzip。下边来举例说明一下：

#tar-cZfall.tar.Z*.jpg

这条命令是将所有.jpg的文件打成一个tar包，但是将其用compress压缩，生成一个uncompress压缩过的包，包名为all.tar.Z

#tar-xZfall.tar.Z

这条命令是将前面形成的包解开

有了前面的知识，你应当可以解开多种压缩文件了，下边对于tar系列的压缩文件作一个小结：

1)对于.tar结尾的文件

tar-xfall.tar

2)对于.gz结尾的文件

gzip-dall.gz

gunzipall.gz

3)对于.tgz或.tar.gz结尾的文件

tar-xzfall.tar.gz

tar-xzfall.tgz

4)对于.bz2结尾的文件

bzip2-dall.bz2

bunzip2all.bz2

5)对于tar.bz2结尾的文件

tar-xjfall.tar.bz2

6)对于.Z结尾的文件

uncompressall.Z

7)对于.tar.Z结尾的文件

tar-xZfall.tar.z

另外对于Window下的常见压缩文件.zip和.rar，Linux也有相应的方式来解压它们：

1)对于.zip

![linux zip文件解压命令_linux解压命令zip_linux 解压zip文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679774677896_3.jpg)

linux下提供了zip和unzip程序，zip是压缩程序，unzip是解压程序。它们的参数选项好多，这儿只做简单介绍，仍然举例说明一下其用法：

#zipall.zip*.jpg

这条命令是将所有.jpg的文件压缩成一个zip包

#unzipall.zip

这条命令是将all.zip中的所有文件解压下来

2)对于.rar

要在linux下处理.rar文件，须要安装RARforLinux，可以从网上下载，但要记住，RARforLinux

不是免费的;之后安装：

#tar-xzpvfrarlinux-3.2.0.tar.gz

#cdrar

#make

这样就安装好了，安装后就有了rar和unrar这两个程序，rar是压缩程序，unrar是解压程序。它们的参数选项好多，这儿只做简单介绍，仍然举例说明一下其用法：

#raraall*.jpg

这条命令是将所有.jpg的文件压缩成一个rar包，名为all.rar，该程序会将.rar扩充名将手动附加到包名后。

#unrareall.rar

这条命令是将all.rar中的所有文件解压下来

到此为至，我们早已介绍过linux下的tar、gzip、gunzip、bzip2、bunzip2、compress、uncompress、zip、unzip、rar、unrar等程式，你应当早已才能使用它们对.tar、.gz、.tar.gz、.tgz、.bz2、.tar.bz2、.Z、.tar.Z、.zip、.rar这10种压缩文件进行解压了，之后应当不须要为下载了一个软件而不晓得怎么在Linux下解开而苦恼了。并且以上方法对于Unix也基本有效。

本文介绍了linux下的压缩程式tar、gzip、gunzip、bzip2、bunzip2、compress、uncompress、zip、unzip、rar、unrar等程式，以及怎样使用它们对.tar、.gz、.tar.gz、.tgz、.bz2、.tar.bz2、.Z、.tar.Z、.zip、.rar这10种压缩文件进行操作

【Linux系统下的压缩解压缩命令解读】相关文章：

Linux系统下的uname命令08-09

Linux系统下tar命令的使用方法08-30

linux系统下sudo命令使用方式08-20

关于Linux系统chmod命令的含意和权限解读07-30

linux系统下dd命令的使用方式08-09

怎样在Linux系统下正确使用tar命令08-11

Linux系统常用操作命令10-07

linux中ipcs命令使用解读08-15

Linux常用命令解读10-07

Linux系统下使用grep命令搜索多个词组的方式07-20
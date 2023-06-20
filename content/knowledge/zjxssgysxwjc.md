---



title: "直接先上三个1.压缩下/文件.c"
description: "直接先上三个1.压缩下/文件.c"
keywords: "直接先上三个1.压缩下/文件.c"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux tar压缩解压缩文件夹、文件命令详解,第1张](https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_0.jpg)

linuxtar压缩解压缩文件夹、文件命令解读

直接先上三个常用命令

1.压缩当前目录下文件夹/文件yk到yk.tar.gz:

2.解压缩当前目录下的yk.tar.gz到file:

参数解读

五个命令中必选一个

-c:构建压缩档案

-x：解压

-t：查看内容

-r：向压缩归档文件末尾追加文件

-u：更新原压缩包中的文件

这几个参数是可选的

![linux下的tar压缩命令_linux解压tar文件命令_linux压缩文件夹命令 tar](https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_1.webp)

-z：有gzip属性的

-j：有bz2属性的

-Z：有compress属性的

-v：显示所有过程

-O：将文件解开到标准输出

-f必选参数

-f:使用档案名子，这个参数是最后一个参数，前面只能接档案名。

查看

在不解压的情况下查看压缩包的内容：

原词组tar命令最初的设计目的是将文件备份到磁带上(tapearchive)，因此得名tar

实物长这样

tar命令是linux系统中常用的压缩文件和解压缩文件命令

tar命令的参数异常之多，俺们只学习满足压缩文件和解压缩文件命令的参数就可以了

&ltmark&gt工作中应用于安装软件,搭建应用,布署环境&lt/mark&gt

举例：将root目录下的adir目录和a.txt文件压缩为test.tar.gz

注意是小写C

若果不使用-C参数则默认解压至当前工作目录

举例：将test.tar.gz压缩文件解压到/root目录

-c构建新的备份文件。

-x从备份文件中还原文件。

-v显示指令执行过程。

-f指定备份文件。

-z通过gzip指令处理备份文件。(假如解压文件后缀是.tar,没有.gz则不须要使用-z参数)

-C指定解压到的目录

![linux下的tar压缩命令_linux解压tar文件命令_linux压缩文件夹命令 tar](https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_3.png)

使用xshell联接linux

在root目录下新建tarTest目录

步入tarTest目录

压缩/root/lnTest文件夹和/root/Centos-7.repo文件到/root/tarTest目录下 **linux压缩文件夹命令 tar**，压缩文件名为test.tar.gz

步入/root/tarTest目录

(解压test.tar.gz到当前目录（/root/tarTest) 

解压test.tar.gz到/root/rmTest目录

tar的功能类似于Windows中的WinRAR。它可以将多个目录或文件打包成一个大文件，在打包的过程中还可以透过gzip/bzip2/xz的支持，对文件进行压缩1。

tar的选项参数好多，主要用到的有以下这种：

还是太多，记不住如何办？记住下边那些最常用的命令即可：

总结一下：z为gzip；j为bzip2；J为xz。c为压缩；t为查询；x为解压缩。最后跟随vf。f一定要是最后一个，假如置于其他选项之前，tar都会把文件名弄错。例如tar-zcfvxxx命令linux开源软件，tar指令都会觉得压缩文件名为v！

压缩的文件名称要按照压缩算法加上响应的后缀：

![linux下的tar压缩命令_linux解压tar文件命令_linux压缩文件夹命令 tar](https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_4.jpg)

只有晓得了压缩算法，我们就能解的下来，你说是吗？所以文件名规范很重要。

假定我们须要备份/etc文件夹，把它打成一个压缩包1。这在实际应用中很常见，由于/etc文件夹储存了系统主要配置文件。在英语中完整词组是etc.，也就是前面会带上一个句点，表示“等等”之意。

接出来，我们分别使用gzip、bzip2与xz算法对/etc文件夹进行打包压缩。

gzip压缩指令：timetar-zpcvf/root/etc.tar.gz/etc

bzip2压缩指令：timetar-jpcvf/root/etc.tar.bz2/etc

xz压缩指令：timetar-Jpcvf/root/etc.tar.xz/etc

从real中可以看出：gzip的压缩速率最快，而xz的压缩速率最慢。

从大小上来看linux系统iso下载，xz的压缩率最高，而gzip压缩率最差。

压缩率高，自然须要时间成本。因而须要压缩的文件夹很大，这么就要多多考虑时间成本咯。由于gzip压缩速率快，这也是*.tar.gz比较流行的诱因之一。

(假定有这样一种场景：我们须要打包某个文件夹（/root) ，但这个文件夹中的某个文件或则子文件夹不想打包进去（带etc前缀）。也就是希望这个文件夹部份打包，部份不打包。可以执行以下指令：

tar-zcvf/root/test.tar.gz--exclude=/root/etc*--exclude=/root/test.tar.gz/root

加了--exclude=/root/test.tar.gz是为了排除自身，否则压缩包中会包含一个大小为0的自身文件，这显然不是我们希望听到的：

![linux解压tar文件命令_linux压缩文件夹命令 tar_linux下的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682453697835_5.jpg)

通过tar-ztvftest.tar.gz就可以查看刚才新打的压缩包中所包含的文件列表：

使用命令tar-ztvfetc.tar.gz查看刚才打好的压缩包。注意要使用匹配的解压缩算法能够正确解压，例如示例中是gz作为后缀，所以加了-z选项表示使用gzip算法进行解压。

部份输出内容：

可以看见该命令把文件的权限、账户以及归属组也一并复印下来了。

但是还有一点很关键，这种文件都没有根目录。假如没有拆掉根目录，解压缩后的文件名都会是绝对路径，亦称解压缩后的数据一定会被放置到/etc/xxx去1！这样系统的/etc文件夹都会被覆盖，后果很严重。所以，tar打包指令默认就会消除装入包中文件的根目录。除非通过-P显示要求保留这种文件的根目录。

(（1) 完全解压

借助tar-zxvfetc.tar.gz-C/tmp命令把etc.tar.gz解压到/tmp。解压成功后，才会在/tmp下见到/etc文件夹。

假如须要在本地路径下直接解开，那直接执行tar-zxvfetc.tar.gz即可。

(（2) 部分解压

(假定我们须要把压缩包（etc.tar.gz) 中的vconsole.conf解压下来。可以先执行以下命令，查询出该文件所对应的相对路径：

tar-ztvfetc.tar.gz|grep‘console’

领到须要解压的文件路径以后，就可以执行tar-zxvfetc.tar.gzetc/vconsole.conf

步入当前目录的etc文件夹，就可以看见vconsole.conf早已被解压下来了：

【1】鸟哥.鸟哥的Linux私房菜基础学习篇[M].第四版.上海：人民邮电出版社 **linux压缩文件夹命令 tar**，2018:359-362.
---



title: "Linux系统的压缩技术使用的压缩算法区别根据扩展名能够使用对应的解压算法"
description: "Linux系统的压缩技术使用的压缩算法区别根据扩展名能够使用对应的解压算法"
keywords: "Linux系统的压缩技术使用的压缩算法区别根据扩展名能够使用对应的解压算法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682252747600_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux压缩命令tar.gz,第1张](https://www.linuxcool.com/wp-content/uploads/2023/04/1682252747600_0.jpg)

方式如下：

设备：华为电脑。

系统：linux。

1、连接上相应的linux主机，步入到等待输入shell指令的linux命令行状态下。

2、在linux命令行下输入shell指令：tar-czftest.tar.gztest.txt。

3、最后，按下回车键执行shell指令，此时会听到test.txt被成功压缩为test.tar.gz。

(打包:指将多个文件（或目录) 合并成一个文件,便捷在不同节点之间传递或在服务器集群上布署.

压缩或打包文件常见扩充名:*.tar,*.tar.gz,*.gz,*.bz2,*.Z；

Linux系统通常文件的扩充名用途不大,并且压缩或打包文件的扩充名是必须的.由于linux支持的压缩命令较多,不同的压缩技术使用的压缩算法区别较大,按照扩充名才能使用对应的解压算法.

将文件夹打包,也能将包解开成文件夹.

例1:在/tmp文件夹下创建demo文件夹,将/etc目录拷贝到/tmp/demo目录里,之后打包压缩成gz格式,要求显示压缩详情。

1)在/tmp文件夹下创建demo文件夹,将/etc目录拷贝到/tmp/demo目录里.

注意:拷贝非空目录要加-r

2)将etc文件夹打包压缩成gz格式,并显示压缩详情.

tar-czvf打包压缩后文件名被打包压缩的文件夹

假如打包压缩成.bz2格式,这么tar命令的参数:-cjvf.

例2:先删掉etc目录,解压缩myetc.tar.gz到当前目录.

1)删掉etc目录

2)解压缩myetc.tar.gz到当前目录

例3:将myetc.tar.gz解压缩到指定目录/home

例4:仅仅解压缩myetc.tar.gz里的某个目录,比如etc/udev

1)先删掉etc目录

2)解压缩myetc.tar.gz到etc/udev目录

tar的功能类似于Windows中的WinRAR。它可以将多个目录或文件打包成一个大文件，在打包的过程中还可以透过gzip/bzip2/xz的支持，对文件进行压缩1。

tar的选项参数好多，主要用到的有以下这种：

还是太多，记不住如何办？记住下边这种最常用的命令即可：

![linux压缩文件夹命令 tar_linux压缩gz文件命令_linux解压tar文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682252747600_2.jpg)

总结一下：z为gzip；j为bzip2；J为xz。c为压缩；t为查询；x为解压缩。最后跟随vf。f一定要是最后一个，假如置于其他选项之前，tar都会把文件名弄错。例如tar-zcfvxxx命令，tar指令都会觉得压缩文件名为v！

压缩的文件名称要按照压缩算法加上响应的后缀：

只有晓得了压缩算法，我们就能解的下来，你说是吗？所以文件名规范很重要。

假定我们须要备份/etc文件夹，把它打成一个压缩包1。这在实际应用中很常见，由于/etc文件夹储存了系统主要配置文件。在英语中完整词组是etc. **linux压缩文件夹命令 tar**，也就是前面会带上一个句点，表示“等等”之意。

接出来 **linux压缩文件夹命令 tar**，我们分别使用gzip、bzip2与xz算法对/etc文件夹进行打包压缩。

gzip压缩指令：timetar-zpcvf/root/etc.tar.gz/etc

bzip2压缩指令：timetar-jpcvf/root/etc.tar.bz2/etc

xz压缩指令：timetar-Jpcvf/root/etc.tar.xz/etc

从real中可以看出：gzip的压缩速率最快，而xz的压缩速率最慢。

从大小上来看，xz的压缩率最高，而gzip压缩率最差。

压缩率高，自然须要时间成本。因而须要压缩的文件夹很大，这么就要多多考虑时间成本咯。由于gzip压缩速率快，这也是*.tar.gz比较流行的缘由之一。

(假定有这样一种场景：我们须要打包某个文件夹（/root) ，但这个文件夹中的某个文件或则子文件夹不想打包进去（带etc前缀）。也就是希望这个文件夹部份打包，部份不打包。可以执行以下指令：

tar-zcvf/root/test.tar.gz--exclude=/root/etc*--exclude=/root/test.tar.gz/root

加了--exclude=/root/test.tar.gz是为了排除自身，否则压缩包中会包含一个大小为0的自身文件，这或许不是我们希望听到的：

通过tar-ztvftest.tar.gz就可以查看刚才新打的压缩包中所包含的文件列表：

使用命令tar-ztvfetc.tar.gz查看刚才打好的压缩包。注意要使用匹配的解压缩算法能够正确解压，例如示例中是gz作为后缀，所以加了-z选项表示使用gzip算法进行解压。

部份输出内容：

可以看见该命令把文件的权限、账户以及归属组也一并复印下来了。

但是还有一点很关键，这种文件都没有根目录。假如没有拆掉根目录，解压缩后的文件名都会是绝对路径，亦称解压缩后的数据一定会被放置到/etc/xxx去1！这样系统的/etc文件夹都会被覆盖，后果很严重。所以，tar打包指令默认就会消除装入包中文件的根目录。除非通过-P显示要求保留这种文件的根目录。

(（1) 完全解压

借助tar-zxvfetc.tar.gz-C/tmp命令把etc.tar.gz解压到/tmp。解压成功后64位linux，才会在/tmp下见到/etc文件夹。

假如须要在本地路径下直接解开linux操作系统原理，那直接执行tar-zxvfetc.tar.gz即可。

(（2) 部分解压

(假定我们须要把压缩包（etc.tar.gz) 中的vconsole.conf解压下来。可以先执行以下命令，查询出该文件所对应的相对路径：

tar-ztvfetc.tar.gz|grep‘console’

领到须要解压的文件路径以后，就可以执行tar-zxvfetc.tar.gzetc/vconsole.conf

步入当前目录的etc文件夹，就可以看见vconsole.conf早已被解压下来了：

【1】鸟哥.鸟哥的Linux私房菜基础学习篇[M].第四版.上海：人民邮电出版社，2018:359-362.
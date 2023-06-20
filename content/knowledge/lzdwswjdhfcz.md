---



title: "Linux中的误删文件的恢复操作环境介绍"
description: "Linux中的误删文件的恢复操作环境介绍"
keywords: "Linux中的误删文件的恢复操作环境介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684699779843_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

```
作者：漠效链接：http://r6d.cn/JzNf
```

序言

无论在那个系统中，删掉文件都是必须慎重的操作。

由于假如不留神删掉了重要文件linux系统日志，都会造成个人或公司出现重大的损失。

类似于windows系统删掉了文件 **linux删除用户命令**，可以使用一些软件进行恢复操作。Linux也是有几款软件可以做到删掉恢复的。

注意事项：尽管有软件可以对删掉的数据进行恢复，并且完全恢复数据的机率并不是百分百的。

因而，使用rm命令删掉文件的时侯，一定要当心；重要的数据一定要有备份；而且恢复删掉的数据前，删掉文件的目录内不能往进储存新东西，否则覆盖掉的信息未能寻回。

下边介绍的就是对Linux中删掉文件的恢复操作。

1、lsof

原理：

这个命令实际上并不能直接拿来恢复文件，不过它可以列举被各类进程打开的文件信息。

配合其他命令，从/proc目录下的信息中恢复“文件已删掉linux系统镜像下载，但进程仍保持打开该文件的状态”的文件。

/proc目录是挂载的是在显存中所映射的一块区域，当我们对那些文件进行读取和写入时，实际上是在从显存中获取相关信息。

因而，当我们对文件进行读取或写入时(即有进程正使用文件时)，哪怕硬碟中的该文件已删掉，还可以从显存中的信息恢复文件。

注意：

必须以root用户的权限运行，由于lsof须要访问核心显存和各类文件。

![linux 下新建用户命令_linux 用户管理命令_linux删除用户命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684699779843_0.png)

只能恢复“文件已删掉，但进程仍保持打开该文件的状态”的文件。

假如删掉了目录，目录中的其他文件未被进程打开，没有进行使用的文件将难以使用此方式恢复。

lsof输出信息的意义：

```
COMMAND       进程的PID(进程标识符)USER          进程所有者FD            用来识别该文件(文件描述符)DEVICE        指定磁盘的名称SIZE          文件的大小NODE          索引节点(文件在磁盘上的标识)NAME          打开文件的确切名称
```

```
最常用参数:

 -c       显示某进程现在打开的文件 -p       显示哪些文件被某pid进程打开 -g       显示归属某gid的进程情况 -d       显示目录下被进程开启的文件 -d       显示使用fd为4的进程 -i:80    显示打开80端口的进程

恢复文件操作
环境：
在/mnt下有一些文件，其中一个文件train.less正在被查看，之后另一个终端将其删掉
【1】lsof查看
查看正在使用删掉文件的进程号

lsof /mnt

【2】恢复

切换到/proc下，删掉文件对应的进程的pid下的文件描述符中的目录中；将对应的内容重定向或cp到其他文件中
重点关注：PID与FD

   cd /proc/31284/fd/   cat 4 > /mnt/ferris_train.less

2、extundelete
原理：
使用储存在分区日志中的信息，尝试恢复已从ext3或ext4的分区中删掉的文件
优点：
相比于ext3grep只能恢复ext3文件系统的文件，其适用范围更广，恢复速率更快
extundelete官方地址(官方文档)：
extundelete下载地址：
最新版本的extundelete是0.2.4，于2013年1月发布)
注意：

安装
1、依赖安装

centos安装操作yum install e2fsprogs-devel   e2fsprogs* gcc*
ubuntu安装操作apt-get install build-essential  e2fslibs-dev  e2fslibs-dev

2、编译安装

wget http://downloads.sourceforge.net/project/extundelete/extundelete/0.2.4/extundelete-0.2.4.tar.bz2tar xf  extundelete-0.2.4.tar.bz2cd  extundelete-0.2.4./configuremakemake install

cd /root/extundelete-0.2.4/src

extundelete -v

执行make命令会在src目录下生成extundelete可执行文件linux删除用户命令，可在此直接执行恢复命令。
执行makeinstall会将程序安装在/usr/local/bin/下
恢复文件操作
执行extundelete命令的当前目录必须是可写的。
1、查看要恢复文件的分区的文件系统

df  -Th

2、对要恢复文件的分区解除挂载

umount /mnt

3、查看可以恢复的数据
指定删掉文件的分区进行查找
最后一列标记为Deleted的文件，即为删掉了的文件

(extundelete /dev/vdb1 --inode 2 （根分区的inode值是2) 

4、恢复单个目录
指定要恢复的目录名
假如是空目录，则不会恢复

extundelete /dev/vdb1 --restore-directory  ferris

当执行恢复文件的命令后，会在执行命令的当前的目录下生成RECOVERED_FILES目录，恢复的文件就会倒入此目录中。如未生成目录，即为失败。
5、恢复单个文件
指定要恢复的文件名
假如几k大小的小文件，有很大机率恢复失败

extundelete /dev/vdb1 --restore-file openssh-7.7p1.tar.gz

6、恢复全部删掉的文件
无需指定文件名或目录名，恢复全部删掉的数据

extundelete /dev/vdb1 --restore-all

良许个人陌陌
添加良许个人陌陌即送3套程序员必看资料
→精选技术资料共享
→高手如云交流社群
本公众号全部博文已整理成一个目录，请在公众号里回复「m」获取！
```
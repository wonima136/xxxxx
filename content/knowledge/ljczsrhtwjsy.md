---



title: "【Linux基础知识】如何tartar文件？使用tarball工具"
description: "【Linux基础知识】如何tartar文件？使用tarball工具"
keywords: "【Linux基础知识】如何tartar文件？使用tarball工具"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1675087642574_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

如何解压tar文件？

使用tarball工具或者使用图像化工具都可以

1、既然你有所谓的桌面了，也就是你的Linux系统是桌面版的，带有Gnone或者KDE或者其他的桌面环境，只要双击打开然后释放或者右键单击解压即可，有对应的解压管理软件帮你解压的。

2、使用CLI命令行模式，cd ~/Desktop/然后 tar -xvf compressed_file.tar这样就可以解压到桌面上了~~Good Luck~

linux中 **linux解压tar文件命令**，如果不想看到解压过程，后台要执行什么命令？

Linux系统解压一般是用tar命令的哈，和Linux的许多命令一样，tar也有一个-v参数，但是执行tar命令时即使不用-v参数，解压的文件名依然会显示在屏幕上。如果不想让解压过程显示出来，就需要使用Linux的数据重定向功能，用英文>符号将标准输出数据重定向到/dev/null或者是一个文本文件中，如果重定向到/dev/null中表示丢弃输出的解压过程数据，而如果重定向到一个文本文件，以后可以来查看解压过程的数据。示例：

tar -zxv -f /home/user/123.tar.gz -C /tmp > /dev/null

tar命令大全？

tar命令是类Linux中比较常用的解压与压缩命令。

其实在使用tar命令的时候，tar命令本身用到的是归档功能，即文件没有真正进行压缩打包，创建之后的归档文件，往往会比原来所有文件的大小总和要大，就相当于日常生活中把一些东西放入到收纳盒里面，整个收纳盒的重量是要大于原来被收纳的物品的总重量的。

如果要对文件进行压缩，一般会调用其他的命令来实现，常用的有三种：zip,gzip2,bzip，其中zip命令一般是单独使用的，gzip2,bzip一般要跟tar命令结合到一起使用。

tar命令的具体使用方法，可以使用命令 (man tar) 命令来进行查看tar的基本命令。下面举例说明一下tar 的基本命令。

![linux tar命令解压_linux解压tar.xz命令_linux解压tar文件命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675087642574_0.png)

一些常用的命令参数如下：

-c --create创建新的文档

-v --verbose 显示详细的tar处理的文件信息

-f --file 要操作的文件名

-x --extract, --get 解压文件

-z --gzip, --gunzip, --ungzip通过 gzip 来进行归档压缩

-j --bzip2通过 bzip2 来归档压缩文件

-t --list 表示查看文件，查看文件中的文件内容

-C --directory=DIR解压文件至指定的目录

-r --append 表示增加文件，把要增加的文件追加在压缩文件的末尾

-u --update 仅将较新的文件附加到存档中

-d --diff, --compare比较存档与当前文件的不同之处；--delete从存档中删除

--remove-files 压缩后删除原文件

--exclude 排除不需要压缩的目录或者文件

具体的用法：

-c --create创建新的文档

-v --verbose 显示详细的tar处理的文件信息

-f --file 要操作的文件名

#tar -cvfsysconfig.tar /etc/sysconfig

命令解释：将目录/etc/sysconfig/目录下的文件打包成文件sysconfig.tar文件，并且放在当前目录中

(（可以使用pwd命令查看当前路径 **linux解压tar文件命令**，可以使用ls命令来查看当前文件夹) 。

-r --append 表示增加文件，把要增加的文件追加在压缩文件的末尾

#tar -rvfsysconfig.tar /etc/sysconfig/

命令解释：将目录/etc/sysconfig/目录下的文件添加到文件sysconfig.tar文件中linux命令详解词典，并放在末尾的位置。

-t --list 表示查看文件，查看文件中的文件内容

#tar -tf sysconfig.tar

命令解释：查看sysconfig.tar压缩文件中包含了哪些文件。

--remove-files 压缩后删除原文件

#tar -cvfsysconfig.tar 1.txt 2.txt 3.txt --remove-files

命令解释：将1.txt 2.txt 3.txt三个文件进行归档压缩linux开源软件，归档成功后并将这三个文件删除。

--exclude 排除不需要压缩的目录或者文件

#tar -cvfsysconfig.tar test1/* --exclude=test1/log

命令解释：将test1目录下除log目录外所有的文件和文件夹进行压缩。

log目录后面不能加/，不能写成--exclude=test1/log/

#tar -cvfsysconfig.tar 1.txt 2.txt 3.txt --exclude=txt4.txt

命令解释：将1.txt 2.txt 3.txt三个文件进行归档压缩，但是排除txt4.txt这个文件。

-x --extract, --get 解压文件

#tar -xvf sysconfig.tar

命令解释：解压文件sysconfig.tar，将压缩文件sysconfig.tar文件解压到当前文件夹内。

-C --directory=DIR解压文件至指定的目录

![linux tar命令解压_linux解压tar.xz命令_linux解压tar文件命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1675087642574_2.png)

#tar -xvf sysconfig.tar -C /root

命令解释：解压文件sysconfig.tar，将压缩文件sysconfig.tar文件解压到/root目录内。

tar调用程序进行压缩与解压缩：

1、tar调用gzip。

.gz结尾的文件就是调用gzip程序进行压缩的文件，相反文件以.gz结尾的文件需要使用gunzip来进行解压。tar中使用-z参数

来调用gzip程序。在这里通过举例子来进行解释。

-z --gzip, --gunzip, --ungzip通过 gzip 来进行归档压缩

#tar -czvf sysconfig.tar.gz /etc/sysconfig/

命令解释：将目录/etc/sysconfig/打包成一个tar文件包，通过使用-z参数来调用gzip程序，对目录/etc/sysconfig/进行压缩，

压缩成文件sysconfig.tar.gz，并且将压缩成的文件放在当前文件夹内。

-z 调用gzip程序来压缩文件，压缩后的文件名称以.gz结尾。

#tar -xzvf sysconfig.tar.gz
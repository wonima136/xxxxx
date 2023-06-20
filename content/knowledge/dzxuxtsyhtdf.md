---



title: "大中小Unix系统使用和tar的方法和步骤"
description: "大中小Unix系统使用和tar的方法和步骤"
keywords: "大中小Unix系统使用和tar的方法和步骤"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681215012855_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

[字体：大中小]

在Unix系统业务使用(非常是数据管理与备份)中，经过一番研究、整理后，充分借助Unix系统本身的命令tar、cpio和compress等来做到打包和压缩，使之充当类似DOS下的压缩软件，同时在Unix系统中亦具有通用性。

在Unix系统中，是先通过cpio或tar将诸多的文件打包成一个文件库后，再用compress将文件库压缩来达到目的的。下边分别以cpio和tar来说明使用的技巧和步骤。

一、cpio

1.文件或目录打包。

打包有如下多种情况:

A)含子目录打包:

find/usr/lib-print|cpio-o〉/u0/temp1.cpio

将/usr/lib目录下的文件与子目录打包成一个文件库为/u0/temp1.cpio。

若通过-o选项来打包整个目录下的所有文件与子目录，常先借助find目录名-print来找出所有文件与子目录的名称，通过管线“|”传给cpio打包。

B)不含子目录的打包:

ls/usr/lib|cpio-o〉/u0/temp1.cpio

将/usr/lib目录下的文件(不含子目录下的文件)打包成一个文件库为/u0/temp1.cpio。

C)特定文件打包:

可借助文本搜索命令grep与管线配合，可以排除或选择特定类型的文件传给cpio打包。如:ls/usr/lib/*.c|cpio-o〉/u0/temp1.cpio

或ls/usr/lib|grep′.c$′|cpio-o〉/u0/temp1.cpio

意思均为找出/usr/lib目录下以.c结尾的文件给以打包。

又如:ls/usr/lib|grepabcd|cpio-o〉/u0/temp1.cpio，其意为找出/usr/lib目录下文件名中富含abcd字符的文件给以打包。

ls/usr/lib|grep-vabcd|cpio-o〉/u0/temp1.cpio，其意为找出/usr/lib目录下文件名中不含abcd字符的文件给以打包。-v选项在grep命令中的意思是排除富含字符串的行列。

这般，可充分借助Unix的管线和一些命令的强悍功能来实现文件的打包。

二、cpio

1.文件或目录打包。

打包有如下多种情况:

A)含子目录打包:

find/usr/lib-print|cpio-o〉/u0/temp1.cpio

将/usr/lib目录下的文件与子目录打包成一个文件库为/u0/temp1.cpio。

若通过-o选项来打包整个目录下的所有文件与子目录，常先借助find目录名-print来找出所有文件与子目录的名称 **linux中打包命令**，通过管线“|”传给cpio打包。

![linux中打包命令_linux压缩打包命令视频_linux 打包zip 命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681215012855_1.png)

B)不含子目录的打包:

ls/usr/lib|cpio-o〉/u0/temp1.cpio

将/usr/lib目录下的文件(不含子目录下的文件)打包成一个文件库为/u0/temp1.cpio。

C)特定文件打包:

可借助文本搜索命令grep与管线配合，可以排除或选择特定类型的文件传给cpio打包。如:ls/usr/lib/*.c|cpio-o〉/u0/temp1.cpio

或ls/usr/lib|grep′.c$′|cpio-o〉/u0/temp1.cpio

意思均为找出/usr/lib目录下以.c结尾的文件给以打包。

又如:ls/usr/lib|grepabcd|cpio-o〉/u0/temp1.cpio，其意为找出/usr/lib目录下文件名中富含abcd字符的文件给以打包。

ls/usr/lib|grep-vabcd|cpio-o〉/u0/temp1.cpiolinux使用教程，其意为找出/usr/lib目录下文件名中不含abcd字符的文件给以打包。-v选项在grep命令中的意思是排除富含字符串的行列。

这般，可充分借助Unix的管线和一些命令的强悍功能来实现文件的打包。

2.压缩:

同上:compress/u0/temp2.tar压缩为/u0/temp2.tar.Z

3.解压:

uncompress/u0/temp2.tar.Z则还原为/u0/temp2.tar。

4.解包展开:

tar-xvf/u0/temp2.tar

若以相对路径打包的，解包时，以相对路径储存展开的文件数据;若以绝对路径打包的，解包时，以绝对路径储存展开的文件数据。

若指定展开的文件名 **linux中打包命令**，须注意文件的目录路径。

5.显示:

tar-tvf/u0/temp2.tar显示文件库内的文件名称。当指定文件名时，亦须注意文件的路径。

相对来说这两个命令各有异同点。

1)tar速率比cpio慢，且不能跨越两份储存媒体，但文件格式几乎在所有的Unix系统中都能通用，且使用简便。

2)cpio则因为可通过管路功能，致使其打包时的文件选择、排除功能十分强，且能跨越多份媒体，并能备份特殊的系统文件。

另外，压缩命令compress比DOS下的Pkzip的压缩率要低些。经测试，在一个目录下527个文本文件共15.7MB，在Unix打包后用compress压缩，大小为2.1MB;相同的文件拷到DOS系统用Pkzip压缩，则大小为1.4MB。

本人在Unix系统业务使用(非常是数据管理与备份)中，经过一番研究、整理后，充分借助Unix系统本身的命令tar、cpio和compress等来做到打包和压缩arm linux，使之充当类似DOS下的压缩软件，同时在Unix系统中亦具有通用性。

在Unix系统中，是先通过cpio或tar将诸多的文件打包成一个文件库后，再用compress将文件库压缩来达到目的的。
---



title: "轻松打包：Linux系统tar.gz命令使用技巧"
description: "轻松打包：Linux系统tar.gz命令使用技巧"
keywords: "轻松打包：Linux系统tar.gz命令使用技巧"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678197997501_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中 **linux打包命令 tar.gz**，打包命令tar.gz是一项非常重要的工具。它可以将多个文件或目录压缩为一个归档文件，方便传输、备份和存储。本文将详细介绍tar.gz命令的使用方法，包括打包、解压缩、查看等方面，以及一些实用技巧和注意事项。让我们一起来探索吧！

1.打包文件和目录

首先，我们需要掌握如何使用tar.gz命令进行打包。在终端中输入以下命令：

“`bash

tar -czvf [归档文件名.tar.gz][文件/目录路径]

“`

其中，“-c”表示创建新的归档文件，“-z”表示使用gzip压缩算法，“-v”表示输出详细信息，“-f”表示指定输出的归档文件名。

例如，我们要将/home/user/docs目录下的所有文件和子目录打包成一个名为docs.tar.gz的归档文件，可以输入以下命令：

“`bash

tar -czvf docs.tar.gz /home/user/docs

“`

2.解压缩归档文件

接下来LINUX社区，我们需要知道如何解压缩已经打包好的归档文件。在终端中输入以下命令：

“`bash

tar -xzvf [归档文件名.tar.gz]-C[解压缩路径]

“`

![centos解压tar.gz命令_linux打包命令 tar.gz_linux打包命令 tar.gz](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197997501_0.png)

其中，“-x”表示解压缩已有的归档文件，“-z”表示使用gzip解压算法，“-v”表示输出详细信息，“-f”表示指定要解压缩的归档文件名，“-C”表示指定解压缩路径。

例如，我们要将docs.tar.gz解压缩到/home/user目录下，可以输入以下命令：

“`bash

tar -xzvf docs.tar.gz -C/home/user

“`

3.查看归档文件内容

有时候我们需要查看已经打包好的归档文件里都有哪些内容。在终端中输入以下命令：

“`bash

tar -ztvf [归档文件名.tar.gz]

“`

其中，“-t”表示列出归档文件中所有内容的列表。

例如，我们要查看docs.tar.gz里都有哪些内容，可以输入以下命令：

“`bash

tar -ztvf docs.tar.gz

“`

4.排除指定目录或文件

![centos解压tar.gz命令_linux打包命令 tar.gz_linux打包命令 tar.gz](https://www.linuxcool.com/wp-content/uploads/2023/03/1678197997501_1.png)

在打包时，有时候我们需要排除某些不必要的目录或文件。在终端中输入以下命令：

“`bash

tar --exclude=[目录/文件路径]-czvf [归档文件名.tar.gz][打包路径]

“`

其中，“--exclude”表示排除指定目录或者文件。

例如，我们要排除docs目录下的temp子目录，在/home/user/docs目录下打包所有内容并保存为docs.tar.gz，可以输入以下命令：

“`bash

tar --exclude=/home/user/docs/temp -czvf docs.tar.gz /home/user/docs

“`

5.压缩级别设置

(默认情况下，tar.gz使用gzip算法进行压缩，并且采用最高级别的压缩（级别为9) 。如果你需要更快地进行打包操作，并且不需要特别高的压缩率，可以降低压缩级别。在终端中输入以下命令：

“`bash

tar -czvf [归档文件名.tar.gz]--level=[级别][打包路径]

“`

其中，“--level”后面跟着数字1到9之间的任意一个数值。

(例如，我们要以较低的级别（级别为5) 进行打包操作，在/home/user/docs目录下保存为docs.tar.gz，则可以输入以下命令：

“`bash

tar -czvf docs.tar.gz --level=5/home/user/docs

“`

6.打印进度条

如果你想在执行打包或解压缩操作时显示进度条，则可以添加“--progress”选项。在终端中输入以下命令：

“`bash

tar --progress -czvf [归档文件名.tar.gz][打包路径]

“`

例如，在/home/user/docs目录下执行打包操作并显示进度条，则可以输入以下命令：

“`bash

tar --progress -czvf docs.tar.gz /home/user/docs

“`

7.按日期过滤

如果你只想对某个日期之后修改过的文集进行打包操作linux论坛，则可以添加“--newer-mtime”选项。在终端中输入以下命令：

“`bash

tar --newer-mtime=[日期]-czvf [归档文件名.tar.gz][打包路径]

“`

其中，“--newer-mtime”后面跟着日期格式为YYYY-MM-DD。

例如，在/home/user/docs目录下只对2023年3月1日之后修改过的文集进行打包操作，并保存为docs_20230301之后.tar.gz，则可以输入以下命令：

“`bash

tar --newer-mtime=2023-03-01 -czvf docs_20230301之后.tar.gz /home/user/docs

“`

8.多个源路径

如果你要同时对多个源路径进行打包操作，则可以把它们放到一个数组里，并用空格分隔开来。在终端中输入以下命令：

“`bash

paths=([源路径1][源路径2]…[源路径n])

tar -czvf [归档文件名.tar.gz]”${paths[@]}”

“`

例如，在/home/user/docs和/home/user/pics两个路径下都有需要进行打包操作的文集和图片，则可以把它们放到一个数组里，并保存为docs_pics.tar.gz。

“`bash

paths=(/home/user/docs /home/user/pics)

tar -czvf docs_pics.tar.gz “${paths[@]}”

“`

9.强制覆盖

如果你已经存在了同名的归档文件，并且希望强制覆盖原有内容，请添加“--overwrite”选项。在终端中输入以下命令：

“`bash

tar --overwrite -czvf [归档文件名.tar.gz][源路径]

“`

例如，在/home/user/docs目录下执行强制覆盖原有内容并保存为docs_force.tar.gz，则可以输入以下命令：

“`bash

tar --overwrite -czvf docs_force.tar.gz /home/user/docs

“`

10.管道传输

最后一种情况是将多个Linux指令通过管道连接起来，并将结果传输给其他应用程序或者存储数据。这种方式通常用于快速筛选和处理大量数据。

例如，在/home/user/docs目录下查找所有以.txt结尾的文本文集 **linux打包命令 tar.gz**，并将它们通过管道传输给grep指令进行筛选。

“`bash

find .-name “*.txt”| grep “keyword”| tar czf files.tgz --

“`

以上就是关于Linux打包命令tar.gz详细介绍及其实用技巧和注意事项。希望能够对您学习Linux系统有所帮助！
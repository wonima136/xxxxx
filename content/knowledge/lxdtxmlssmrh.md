---



title: "Linux下的tar下命令是什么？如何处理各种格式的压缩文件"
description: "Linux下的tar下命令是什么？如何处理各种格式的压缩文件"
keywords: "Linux下的tar下命令是什么？如何处理各种格式的压缩文件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674887804375_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

**linux下解压命令** 是Linux系统中比较常用的功能之一 **linux下解压命令**，使用它可以将压缩文件解压出来，提取其中的内容。在Linux系统中，通常有多种解压命令可供选择，如tar、gzip、bzip2、unzip、rar等。其中tar是最常用的，它可以处理各种格式的压缩文件。

首先，我们来看一下Linux下的tar命令。它是一个用于创建、修改、抽取或者列出文档归档的工具，也可以将多个文件和目录打包成一个归档文件。tar命令有三个子命令：c用于创建归档文件linux操作系统怎么样linux系统镜像下载，x用于解压归档文件，t用于列出归档文件中包含的内容。

![linux下tgz解压命令_linux rar 解压命令_linux下解压命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887804375_0.png)

要将目录dir1和dir2打包成.tar格式 **linux下解压命令**，可用如下命令：

-c表示创建归档文件；-v表示显示过程信息；-f表示后面跟随的是要创建的归档文件名。上面这条命令会将dir1和dir2打包成archive.tar文件。

![linux下解压命令_linux下tgz解压命令_linux rar 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887804375_1.png)

要将上面生成的archive.tar解压出来，可使用如下命令：

-x表示解压归档文件。此命令会将archive.tar解压出来，并把里面的内容解压到当前目录下。

要将gz格式的文件file1.gz解压出来，可使用如下命令：

gunzip命令会将file1.gz文件解压出来并放在当前目录下。

要将bz2格式的文件file1.bz2解压出来，可使用如下命令：

bunzip2会将file1.bz2文件解压出来并放在当前目录下。

![linux rar 解压命令_linux下tgz解压命令_linux下解压命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674887804375_2.png)

5.把rar格式解压要将rar格式的文件file1.rar解压出来，需要先安装unrar工具。安装完成后就可使用如下命令进行解压了：$ unrar x file1.rar unrar x file1.rar会将file1.rar文件解压出来并放在当前目录下。

6.把zip格式解压 要将zip格式的文件file1.zip解压出来，需要先安装unzip工具。安装完成后就可使用如下命令进行解压了：$ unzip file1.zip unzip file1.zip会将file1.
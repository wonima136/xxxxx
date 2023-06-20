---



title: "Linux下可不下载的功能"
description: "Linux下可不下载的功能"
keywords: "Linux下可不下载的功能"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454937_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

序言

在Linux中，我们常常会涉及到下载一些文件、软件压缩包之类的，在黑漆漆的终端下可不像桌面浏览器那样子 **linux下载命令sz**，打开浏览器就可以选择保存地址，终端下都是使用命令来搞定的。没有说很高效，而且也不难。

![linux下载文件命令sz_linux下载命令sz_linux中rz和sz命令用法](https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454937_0.png)

wget

wget是最常用的工具，支持通过HTTP、HTTPS、FTP三个最常见的TCP/IP合同下载。

![linux下载命令sz_linux中rz和sz命令用法_linux下载文件命令sz](https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454937_1.jpg)

“wget”这个名称来始于“WorldWideWeb”与“get”的结合。

事例：

wget直接加上URL就可以直接下载啦！

wget

默认就是存在当前的路径，假如须要另存路径可以使用-O参数

wget-O/home/isos/archlinux.iso

下载大的文件 **linux下载命令sz**，下载到一半断网了如何办？推荐使用-c参数，可以断点续传下载文件。

wget-c-O/home/isos/archlinux.iso

wget还有好多丰富的功能，可以使用wget--help进行查看帮助！

curl

curl是借助URL句型在命令行形式下工作的开源文件传输工具。它被广泛应用在Unix、多种Linux发行版中。

![linux下载命令sz_linux中rz和sz命令用法_linux下载文件命令sz](https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454937_2.png)

curl命令很强悍红帽子linux下载，我们这儿就只介绍下载的功能哈！

事例：

curl-o/tmp/archlinux.iso

多线程下载axel

axel是Linux下一个不错的HTTP/ftp高速下载工具。支持多线程下载、断点续传，且可以从多个地址或则从一个地址的多个联接来下载同一个文件。适宜网速不给力时多线程下载提升下载速率。

axel参数文件下载地址

常用的参数：

-n指定线程数

-o指定另存为目录

-s指定每秒的最大比特数

-q沉静模式

事例：

axel-n10

须要更多中级功能可以查看帮助！

aria2

aria2开源命令行下载加速器，支持多个端口linux定时器，你可以使用最大带宽来下载文件，是一款便于安装、易于使用的工具。

事例：

aria2c

总结

在终端下，进行文件下载那些命令完全够用啦！
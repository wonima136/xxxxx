---



title: "Linux中常见的linux查看硬盘内存的命令汇总！！"
description: "Linux中常见的linux查看硬盘内存的命令汇总！！"
keywords: "Linux中常见的linux查看硬盘内存的命令汇总！！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675376585256_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux是一种开源的、免费的操作系统 **linux查看硬盘内存命令** linux版qq，有很多用户都在使用它。Linux有很多功能linux模拟，它可以帮助用户更好地使用和管理计算机。除此之外，它还可以帮助用户查看硬盘内存使用情况，下面就来讲解一些linux查看硬盘内存的命令。

1、df –k命令：df –k是Linux中最常用的查看硬盘内存使用情况的命令，它可以显示出文件系统各分区的大小和可用量。例如：df –k/home 命令将会显示/home分区的大小和可用量。

![linux查看硬盘内存命令_linux查看硬盘命令_linuxshell命令查看内存对齐大小](https://www.linuxcool.com/wp-content/uploads/2023/02/1675376585256_0.png)

2、du 命令：du 命令可以显示出每个文件和子目录所占用的磁盘空间。例如：du –sh 命令将会显示出当前文件夹下所有文件和子目录所占用的总大小。

3、free 命令：free 命令是一个常用的工具，它可以显示出当前计算机内存的使用情况。例如：free –m命令将会显示出当前计算机内存总量、已使用量、剩余量和已使用比例。

4、top 命令：top 命令是一个实时监测工具，它可以显示出当前计算机上各个进程所占用的CPU和内存资源情况。例如：top –c命令将会显示出当前正在运行的所有进程信息。

5、lsof 命令：lsof 命令是一个列出打开文件信息的工具。它可以列出当前计算机上正在运行的所有进程中打开的文件信息，包括文件名、文件大小、文件格式和文件所在位置。例如：lsof -i:8080 将会列出正在使用 8080 端口的所有进行信息和对应文件信息。

(6、cat /proc/meminfo命令：cat /proc/meminfo 是一个Linux中非常常用的命令 **linux查看硬盘内存命令**，它可显示出系统 物理 内存 情况 （MemTotal, MemFree, Buffers, Cached, SwapTotal, SwapFree 等信息) 。 这些信息对于诊断 Linux 系统中内存使用情况非常重要。

上面就是linux中一些常用的查看硬盘内存使用情况的命令，通过这些命令，我们能够快速有效地查看系统中磁盘和内存等资源的使用情况，这样可以有效避免因资源不足而对 Linux 系统造成不必要影响。
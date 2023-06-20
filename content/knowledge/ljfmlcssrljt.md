---



title: "了解format命令参数，深入了解它的功能！"
description: "了解format命令参数，深入了解它的功能！"
keywords: "了解format命令参数，深入了解它的功能！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677420895957_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

format 命令是 Windows 系统里面的一个非常常用的命令，它能够将磁盘格式化成某种文件系统，并且能够将磁盘上的文件数据擦除，让其可以重新使用。在使用 format 命令之前，我们必须了解它的几个参数，这样才能正确地使用它。下面就让我们来看看 format 命令的参数有哪些。

1、/q

/q是 format 命令中最常用的一个参数 **format命令参数有哪些** 查看linux是什么系统，它表示快速格式化，也就是说当使用这个参数时，format 命令会快速地将磁盘格式化成指定的文件系统，但不会对磁盘上的文件数据进行擦除。

2、/p:n

(/p:n这个参数表示校验分区中的 n 个扇区 **format命令参数有哪些**，其中 n 是一个正整数。当 format 命令使用这个参数时，它会校验分区中的 n 个扇区（n的大小由你来决定) ，如果有问题就会显示出来。

3、/fs:file_system

/fs:file_system 这个参数表示将要格式化的文件系统名字。例如/fs:fat32 表示将要将分区格式化成 fat32 文件系统。Windows 系统中支持的文件系统有 NTFS 、FAT32 、exFAT 等多种。

4、/v:volume_label

/v:volume_label 这个参数表示设定卷标。卷标就是一个字母或者字母数字混合的名字常用linux系统，用来表明这是哪一块分区。例如/v:disk1 表明这是 disk1 分区。

5、/f:size

/f:size 这个参数表明要根据所选文件大小去分割分区大小。例如/f:512 表明要将分区分割成 512KB 的大小；/f:1024 表明要将分区分割成 1024KB 的大小。

![format 命令_low format命令参数_format命令参数有哪些](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420895957_0.png)

6、/x

/x这个参数表明要强制格式化已存在的分区，而不会询问是否要进行格式化操作；否则当使用 format 命令时会首先询问是否要进行格式化操作。

![format 命令_format命令参数有哪些_low format命令参数](https://www.linuxcool.com/wp-content/uploads/2023/02/1677420895957_1.jpg)

7、/a

/a这个参数表明要执行自动校验功能；当使用此命令时，format 命令会在根据所选文件大小去分割分区之前对该分区进行自动校验功能。

8、/c

/c这个参数表明当 format 命令执行完之后执行一些特定的命令。例如/c:”dir”表明当 format 命令执行完之后会自动执行 dir 命令来显示该盘里面的内容信息。

9、/y

(/y这个参数也是常用的一个参数；当使用此命令时（如/y) format 命令会马上对该盘里面的文件数据进行清理（即不会问你是否要进行此项清理功能）。

10、/?

/?这是 format 命令中最常用的一个参数之一；当使用此命令时 format 命令会显示出帮助信息来帮助你正确地使用该命令。
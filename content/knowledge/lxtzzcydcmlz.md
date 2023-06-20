---



title: "Linux系统中最常用的cp命令之一方法"
description: "Linux系统中最常用的cp命令之一方法"
keywords: "Linux系统中最常用的cp命令之一方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679320856655_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

这篇文章将为你们详尽讲解有关Linux系统的cp命令如何用，小编感觉挺实用的 **linux系统命令topfree的使用及参数详解**，因而分享给你们做个参考 **linux系统命令topfree的使用及参数详解**，希望你们阅读完这篇文章后可以有所收获。

cp命令拿来复制文件或则目录，是Linux系统中最常用的命令之一。通常情况下linux嵌入式开发，shell会设置一某些名，在命令行下复制文件时，假如目标文件早已存在，还会寻问是否覆盖，不管你是否使用-i参数。而且假如是在shell脚本中执行cp时，没有-i参数时不会寻问是否覆盖。这说明命令行和shell脚本的执行方法有些不同。

![Linux系统的cp命令怎么用](https://www.linuxcool.com/wp-content/uploads/2023/03/1679320856655_0.jpg)

句型

![linux系统命令topfree的使用及参数详解_linux netstat 命令详解_linux命令详解之df命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679320856655_1.jpg)

```
cp选项)(参数)
```

选项

```
-a：此参数的效果和同时指定"-dpR"参数相同；
-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
-f：强行复制文件或目录，不论目标文件或目录是否已存在；
-i：覆盖既有文件之前先询问用户；
-l：对源文件建立硬连接，而非复制文件；
-p：保留源文件或目录的属性；
-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
-s：对源文件建立符号连接，而非复制文件；
-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；
-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；
-b：覆盖已存在的文件目标前将目标文件备份；
-v：详细显示命令执行的操作。
```

![linux系统命令topfree的使用及参数详解_linux netstat 命令详解_linux命令详解之df命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679320856655_2.png)

参数实例

假如把一个文件复制到一个目标文件中，而目标文件早已存在，这么，该目标文件的内容将被破坏。此命令中所有参数既可以是绝对路径名，也可以是相对路径名。一般会用到点.或点点..的方式。诸如，下边的命令将指定文件复制到当前目录下：

```
cp ../mary/homework/assign .
```

所有目标文件指定的目录必须是己经存在的，cp命令不能创建目录。若果没有文件复制的权限，则系统会显示出错信息。

将文件file复制到目录/usr/men/tmp下，并更名为file1

```
cp file /usr/men/tmp/file1
```

将目录/usr/men下的所有文件及其子目录复制到目录/usr/zh中

```
cp -r /usr/men /usr/zh
```

交互式地将目录/usr/men中的以m打头的所有.c文件复制到目录/usr/zh中

![linux命令详解之df命令_linux netstat 命令详解_linux系统命令topfree的使用及参数详解](https://www.linuxcool.com/wp-content/uploads/2023/03/1679320856655_5.png)

```
cp -i /usr/men m*.c /usr/zh
```

我们在Linux下使用cp命令复制文件时侯，有时侯会须要覆盖一些同名文件，覆盖文件的时侯就会有提示：须要不停的按Y来确定执行覆盖。文件数目不多还好，而且要是几百个恐怕按Y都要呕血了中国linux，于是折腾来半天总结了一个方式：

```
cp aaa/* /bbb
复制目录aaa下所有到/bbb目录下，这时如果/bbb目录下有和aaa同名的文件，需要按Y来确认并且会略过aaa目录下的子目录。
cp -r aaa/* /bbb
这次依然需要按Y来确认操作，但是没有忽略子目录。
cp -r -a aaa/* /bbb
依然需要按Y来确认操作，并且把aaa目录以及子目录和文件属性也传递到了/bbb。
cp -r -a aaa/* /bbb
成功，没有提示按Y、传递了目录属性、没有略过目录。
```

关于“Linux系统的cp命令如何用”这篇文章就分享到这儿了，希望以上内容可以对你们有一定的帮助，使诸位可以学到更多知识，假如认为文章不错，请把它分享出去让更多的人听到。
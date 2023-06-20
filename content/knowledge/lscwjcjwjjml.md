---



title: "( Linux删除文件、创建文件（夹) 命令是什么？"
description: "( Linux删除文件、创建文件（夹) 命令是什么？"
keywords: "( Linux删除文件、创建文件（夹) 命令是什么？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678111486457_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux删掉文件(夹)、创建文件(夹)命令是哪些？在Linux系统中删掉文件，好多用户都惯用rmdir命令，由于Linux没有回收站功能，所以笔者建议用户使用rm-rf命令 **linux新建文件夹指令**，具体用法可以根据以下命令进行操作。

![1028e26219dba964e55bc5dc66ce1d77.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111486457_0.jpg)

一、Linux删掉文件夹命令

Linux删掉目录很简单 **linux新建文件夹指令**，好多人还是习惯用rmdir，不过一旦目录非空，就深陷深深的烦恼之中，如今使用rm-rf命令。

直接rm就可以了，不过要加两个参数-rf即：rm-rf目录名子

注：使用rm-rf的时侯一定要分外留神，Linux没有回收站的。

1、删除目录、文件rm(remove)

功能说明：删掉文件或目录。

句型：rm[-dfirv][--help][--version][文件或目录]

![linux 新建 utf 8文件_新建硬盘 指令_linux新建文件夹指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111486457_1.png)

补充说明：执行rm指令可删掉文件或目录，如欲删掉目录必须加上参数”-r”，否则预设仅会删掉文件。

参数：

-d或–directory直接把欲删掉的目录的硬联接数据删成0，删掉该目录。

-f或–force强制删掉文件或目录。

-i或–interactive删掉既有文件或目录之前先寻问用户。

-r或-R或–recursive递归处理，将指定目录下的所有文件及子目录一并处理。

-v或–verbose显示指令执行过程。

![linux 新建 utf 8文件_新建硬盘 指令_linux新建文件夹指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111486457_2.jpg)

2、删除文件夹：

de>rm-rffileNamede>

删掉文件夹实例：

rm-rf/var/log/httpd/access

将会删掉/var/log/httpd/access目录以及其下所有文件、文件夹。

3、删除文件：

de>rm-ffileNamede>

二、Linux添加文件命令

1、创建目录：mkdir(makedirectories)

句型：mkdir[-p][--help][--version][-m][目录名称]

注：mkdir可构建目录并同时设置目录的权限。

参数：

-m或–mode构建目录时同时设置目录的权限。

-p或–parents若所要完善目录的下层目录目前仍未完善，则会一并完善下层目录。

![linux新建文件夹指令_新建硬盘 指令_linux 新建 utf 8文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1678111486457_3.png)

例：mkdirtest

2、创建文件touch

功能说明：改变文件或目录时间

句型：touch[-acfm][-d][-r][-t][--help][--version][文件或目录]或touch[-acfm][--help][--version][日期时间][文件或目录]

注：使用touch指令可修改文件或目录的日期时间，包括存取时间和修改时间。

参数：

-a或–time=atime或–time=access或–time=use只修改存取时间。

-c或–no-create不完善任何文件。

-d使用指定的日期时间，而非如今的时间。

-f此参数将忽视不予处理，仅负责解决BSD版本touch指令的兼容性问题。

-m或–time=mtime或–time=modify只更改变动时间。

-r把指定文件或目录的日期时间，统统设成和参考文件或目录的日期时间相同。

-t使用指定的日期时间linux系统下载，而非如今的时间。

例：touchtest.txt

注：Linux下没有文件后缀名分辨文件类型之说，系统文件类型只有可执行文件和不可执行文件。

以上句型和参数便是Linux删掉文件(夹)、创建文件(夹)命令，注意命令写法的关系和路径linux入门，可举一反三。
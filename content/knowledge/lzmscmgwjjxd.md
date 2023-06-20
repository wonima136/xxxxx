---



title: "linux怎么删除某个文件夹下的所有文件？|教程"
description: "linux怎么删除某个文件夹下的所有文件？|教程"
keywords: "linux怎么删除某个文件夹下的所有文件？|教程"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685477596900_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

好多同学在想linux怎么删掉文件夹下所有文件？下边就来给你们介绍一下！

linux删掉文件夹下所有文件

1、打开linux系统，在linux的桌面的空白处右击。

2、在弹出的下拉选项里linux 分区，点击打开终端即可步入命令行。

3、在终端窗口中输入cd命令，再点击右侧档案。

4、把要删掉文件的文件夹拖到cd后，回车步入此目录。

5、输入删掉命令rm*，回车即可删掉当前目录下所有的文件。

linux如何删掉某个文件夹下的文件

基础：在Linux终端中删掉文件和文件夹

本教程述说了怎样在Linux终端中安全地删掉文件和文件夹。

![linux命令目录重命名_linux find 目录 命令_linux删除空目录命令是](https://www.linuxcool.com/wp-content/uploads/2023/05/1685477596900_0.jpg)

要想使用图形化界面删掉计算机上的文件，你可能会直接将文件或文件夹拖放到“垃圾箱”或“回收站”。或则你也可以选择要删掉的文件或文件夹，右键单击并选择删掉。

(而在终端中删掉文件或文件夹时并没有垃圾箱一说（起码默认情况下没有) 。在图形化桌面上，Trash（即垃圾箱文件夹）是一个受保护的目录，保护机制可以避免用户不留神将该目录删掉，或将其从默认位置联通因而造成找不到它。Trash本质不过是一个被高度管理的文件夹，因而你可以创建自己的Trash文件夹以在终端中使用。

为终端设置一个垃圾箱

在家目录中创建一个名为Trash的目录：

$mkdir~/Trash

删掉文件

要删掉文件或文件夹时，使用mv命令将文件或文件夹移至Trash中：

$mvexample.txt~/Trash

永久删掉文件或文件夹

(当你打算从系统中永久删掉某个文件或文件夹时 **linux删除空目录命令是**，可以使用rm命令消除垃圾箱文件夹中的所有数据。通过将rm命令指向星号（*)  **linux删除空目录命令是**，可以删掉Trash文件夹内的所有文件和文件夹，而不会删掉Trash文件夹本身。由于用户可以便捷且自由地创建目录，所以虽然不留神删掉了Trash文件夹，你也可以再度新建一个。

$rm--recursive~/Trash/*

删掉空目录

删掉空目录有一个专门的命令rmdirlinux通配符，它只能拿来删掉空目录，因而保护你免受递归删掉错误的影响。

$mkdirfull$touchfull/file.txt$rmdirfullrmdir:failedtoremove’full/’:Directorynotempty$mkdirempty$rmdirempty

更好的删掉形式

(据悉还有一些并没有默认安装在终端上的删掉文件命令，你可以从软件库安装它们。这种命令管理和使用的Trash文件夹与你在桌面模式使用的是同一个（而非你自己单独创建的) ，因而使删掉文件显得愈发便捷。

$trash~/example.txt$trash--listexample.txt$trash--empty

via:

作者：SethKenlon选题：lujun9972译者：unigeorge校对：wxy

本文由LCTT原创编译，Linux中国荣誉推出
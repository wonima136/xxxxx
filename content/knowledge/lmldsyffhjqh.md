---



title: "Linuxmkdir命令的使用方法和技巧和使用技巧命令"
description: "Linuxmkdir命令的使用方法和技巧和使用技巧命令"
keywords: "Linuxmkdir命令的使用方法和技巧和使用技巧命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677938689119_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux(Ubuntu/Fedora/CentOS/RetHat)可以通过GMONE和KDE界面直接创建文件夹和文件目录。其实，有时侯直接通过终端用mkdir命令来创建会更便捷 **linux新建文件夹指令**，非常是在Root权限的文件夹和目录中，普通用户是难以直接创建文件夹和目录的，这时侯可以通过终端用mkdir命令来创建，这儿介绍mkdir命令的使用方式和方法。

一、mkdir命令使用权限

所有用户都可以在终端使用mkdir命令在拥有权限的文件夹创建文件夹或目录。

二、mkdir命令使用格式

格式：mkdir[选项]DirName

三、mkdir命令功能

![linux新建文件夹指令_linux新建python文件_linux 新建txt文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677938689119_0.jpg)

通过mkdir命令可以实现在指定位置创建以DirName(指定的文件名)命名的文件夹或目录。要创建文件夹或目录的用户必须对所创建的文件夹的父文件治具有写权限(了解Linux文件-文件夹权限请点击这儿)。而且linux防火墙设置，所创建的文件夹(目录)不能与其父目录(即父文件夹)中的文件名重名linux命令行和shell脚本编程宝典，即同一个目录下不能有同名的(分辨大小写)。

四、mkdir命令选项说明

![linux新建python文件_linux 新建txt文件_linux新建文件夹指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677938689119_1.png)

命令中的［选项］通常有以下两种：

-m用于对新建目录设置存取权限，也可以用chmod命令进行设置。

![linux新建文件夹指令_linux 新建txt文件_linux新建python文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677938689119_2.png)

-p须要时创建下层文件夹(或目录)，假如文件夹(或目录)早已存在，则不视为错误。

五、mkdir命令使用举例

![linux新建文件夹指令_linux新建python文件_linux 新建txt文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677938689119_3.png)

例一：在/home/cc/下边创建以“”命名的文件夹。

使用以下命令即可。

mkdir/home/cc/

例二：在/home/cc/下边创建以“”命名的文件夹，而且给文件夹赋权限 **linux新建文件夹指令**，权限为777。

mkdir777/home/cc/
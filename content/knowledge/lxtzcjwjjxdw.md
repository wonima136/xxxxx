---



title: "Linux系统中创建文件夹新的文件夹我们可以使用命令详解"
description: "Linux系统中创建文件夹新的文件夹我们可以使用命令详解"
keywords: "Linux系统中创建文件夹新的文件夹我们可以使用命令详解"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677823779651_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统中创建一个新的文件夹我们可以使用命令来执行，下边由学习啦小编为你们整理了Linux系统中创建文件夹命令解读马哥linux，希望对你们有帮助!

Linux系统中创建文件夹命令解读

一、mkdir命令使用权限

所有用户都可以在终端使用mkdir命令在拥有权限的文件夹创建文件夹或目录。

二、mkdir命令使用格式

格式：mkdir[选项]DirName

![linux新建文件夹指令_linux 替换文件指令_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677823779651_0.jpg)

三、mkdir命令功能

通过mkdir命令可以实现在指定位置创建以DirName(指定的文件名)命名的文件夹或目录。要创建文件夹或目录的用户必须对所创建的文件夹的父文件治具有写权限(了解Linux文件-文件夹权限请点击这儿)。而且，所创建的文件夹(目录)不能与其父目录(即父文件夹)中的文件名重名，即同一个目录下不能有同名的(分辨大小写)。

四、mkdir命令选项说明

命令中的[选项]通常有以下两种：

-m用于对新建目录设置存取权限，也可以用chmod命令进行设置。

![linux 新建conf文件_linux新建文件夹指令_linux 替换文件指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677823779651_1.jpg)

-p须要时创建下层文件夹(或目录)，假如文件夹(或目录)早已存在，则不视为错误。

Linux系统中创建文件夹命令解读实例

例一：在/home/cc/下边创建以“”命名的文件夹。

使用以下命令即可。

mkdir/home/cc/

例二：在/home/cc/下边创建以“”命名的文件夹，而且给文件夹赋权限，权限为777。

mkdir777/home/cc/

补充：Linux系统中批量创建文件夹的命令方式

1,命令方式

touch456{1,2,3,4,5}会在目录中生成(4561，4562 **linux新建文件夹指令**，4563linux查看操作系统，4564，4565)五个目录文件

![linux 替换文件指令_linux新建文件夹指令_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677823779651_2.png)

mkdir456{1,2,3,4,5}会在目录中生成(4561，4562，4563，4564，4565)五个文件夹

2,shell脚本

比如：mycomm.sh

#!/bin/bash

var1=1

whiletest$var1-1e$2

do

mkdir$1$var1

var1=expr$var1+1

done

运行时输入：mycomm.shuser1000

user是文件夹的前缀 **linux新建文件夹指令**，10000是要创建文件夹的书目)
---



title: "查找文件-1713:56121次浏览的主要用来查找文件的用法"
description: "查找文件-1713:56121次浏览的主要用来查找文件的用法"
keywords: "查找文件-1713:56121次浏览的主要用来查找文件的用法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680610028327_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linuxfind查找文件及文件夹命令,cmd命令大全查找文件

admin08-1713:56121次浏览

find的主要拿来查找文件，查找文件的用法我们比较熟悉，也可用它来查找文件夹，用法跟查找文件类似，只要在最后面指明查找的文件类型-typed,倘若不指定type类型，会将包含查找内容的文件和文件夹一起输出。

比如：find/-nameAnmyTest-typed(查找AnmyTest目录位置)

find基本句型如下：

![linux查找文件夹命令_linux more命令查找_linux命令vi查找字符串](https://www.linuxcool.com/wp-content/uploads/2023/04/1680610028327_0.png)

find[PATH][Option][action]

-newerfile:file为一个存在的文件，列举比file还要新的文件名

find/-mtime0———0代表当前的时间 **linux查找文件夹命令**，即从现今开始到24小时前linux makefile，有改动过内容的文件就会被列下来

find/etc-newer/etc/passwd———寻找/etc下边的文件linux系统iso下载，假如文件日期比/etc/passwd新就列举

![linux命令vi查找字符串_linux查找文件夹命令_linux more命令查找](https://www.linuxcool.com/wp-content/uploads/2023/04/1680610028327_1.png)

find/-namefile——/代表全文搜索

find/home-userAnmy——查找/home下属于Anmy的文件

find/-nouser——查找系统中不属于任何人的文件，可以轻易找出这些不太正常的文件

find/-namepassed——查找文件名为passed的文件

find其他参数：

(-typeTYPE:查找文件类型为TYPE的，类型主要有：通常正规文件(f)、设备文件(b,c)、目录(d)、连接文件(l)、socket（s) 及FIFO(p)等属性

-permmode:查找文件权限正好等于mode的文件

-perm+mode:查找文件权限“包含任一mode的权限”的文件。

-perm-mode:查找文件权限“必需要全部包括mode的权限”的文件。

find后其他可进行的操作：

-execcommand:command为其他命令，-exec前面可再接其他的命令来处理查找到的结果。

-print:将结果复印到屏幕上，为默认操作。

(查找目录：find/（查找范围) -name’查找关键字’-typed

AnmyTest目录下有个AnmyTest文件

若不指定查找类型，使用命令：find/-nameAnmyTest则会将目录和文件一齐输出

若指定查找类型 **linux查找文件夹命令**，使用命令：find/-nameAnmyTest-typed则只会将目录输出

php页脚方式分页函数支持静态化地址及ajax分页RocketMQ消息失败重试解析——图解

linuxc盘信息命令,linux复印信息命令linux替换文件内容,find查找文件内容
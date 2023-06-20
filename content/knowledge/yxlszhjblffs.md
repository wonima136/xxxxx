---



title: "一下linux设置环境变量方法是怎样的以及Linux环境变量配置注意事项是什么等问题"
description: "一下linux设置环境变量方法是怎样的以及Linux环境变量配置注意事项是什么等问题"
keywords: "一下linux设置环境变量方法是怎样的以及Linux环境变量配置注意事项是什么等问题"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677506732793_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux系统是一种多用户的任务系统，它可以对每位用户都指定特定的用户变量。不同的程序在不同的环境下运行的时侯，都须要去对环境变量来做订制，有好多同学在设置linux环境变量的时侯，不晓得怎么操作，很是头痛，不得不求救于专业的人士 **linux 环境变量命令**，明天新网就给你们详尽的来说明一下linux设置环境变量方式是如何的以及Linux环境变量配置注意事项是哪些等问题，希望提供帮助。

linux设置环境变量方式是如何的？

环境变量浅显讲是操作系统或程序执行时侯默认设定的参数，例如path路径变量。当要执行某个命令或程序的时侯默认寻觅的路径。

环境变量都有什么类型环境变量有好多种类通常有2种界定方式按变量的周期界定。

永久变量：

通过更改配置文件红旗linux系统下载，配置以后变量永久生效。

临时性变量：

(使用命令如export等命令设置，设置然后马上生效。当关掉shell的时侯失效（这些主要用于测试比较多) 。

![linux环境搭建命令_linux 环境变量命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677506732793_0.jpg)

[root@mail~]#env显示所有变量

根据影响范围分：

(用户变量（局部变量) ：更改的设置只对某个用户的路径或执行起作用。

(系统变量（全局变量) ：影响范围是整个系统。

显示环境变量设置变量之前，我们要先晓得怎样查看变量。路径变量path。

[root@mail~]#echo$PATH

![linux环境搭建命令_linux 环境变量命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677506732793_1.png)

临时更改设置变量刚才说的环境变量根据生存周期，临时变量通常是用于测试或学习的时侯使用临时变量对于更改永久变量之前先确定软件运行或命令执行是否有问题很有帮助。

常见的设置方式是通过命令export指定linux最常见的就是lamp配置，指定软件运行路径为例。

例如指定php或mysql执行的路径变量。

[root@mail~]#exportPATH=$PATH:/usr/local/php/bin为php环境。

[root@mail~]#exportPATH=$PATH:/usr/local/mysql/bin为mysql环境。

假如设置多个可以采用格式[root@mail~]#exportPATH=$PATH:/usr/local/mysql/bin;

类似配置win版本php环境时侯加到path上面的路径一样。设置以后，执行php或mysql就手动链接辨识到/usr/local/php/bin和/usr/local/mysql/bin，注意：

这是临时变量的设置方式，只对当前会话有效。这个shell终端关掉或则另外复制一个都是找不到这个变量的。

永久变量设置

后面介绍的变量设置关掉会话失效，对于须要写入系统变量永久生效的须要更改配置文件。通常有用户级别的变量设置，和全局系统级别设置。更改用户变量linux下每位用户寄主目录下都有一个~/.bash_profile文件，上面记录直接加到文件上面，最后面exportpath=$path:/path1:/path2全局变量，系统环境变量linux支持多用户多任务，假如要让所有用户都采用相同的变量设置。更改/etc/profile文件，通过vi或vim降低变量，更改变量以后，须要马上生效变量设置。可执行[root@mail~]source/etc/profile。

Linux环境变量配置注意事项

标准位置及非标明位置环境变量：

![linux命令中的head命令_linux 环境变量命令_linux环境搭建命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677506732793_2.jpg)

对于：“/bin”、“/sbin”、“/usr/bin”、“/usr/sbin”、“/usr/local/bin”等路径早已在系统环境变量中了，若果可执行文件在这几个标准位置，在终端命令行输入该软件可执行文件的文件名和参数(假如须要参数)**linux 环境变量命令**，回车即可。

倘若不在标准位置，文件名后面须要加上完整的路径。

不过每次都这样跑就太麻烦了，一个“一劳永逸”的办法是把这个路径加入环境变量。命令“PATH=$PATH:路径”可以把这个路径加入环境变量，并且退出这个命令行就失效了。要想永久生效，须要把这行添加到环境变量文件里。有两个文件可选：“/etc/profile”和用房主目录下的“.bash_profile”，“/etc/profile”对系统里所有用户都有效，用房主目录下的“.bash_profile”只对这个用户有效。

“PATH=$PATH:路径1:路径2:…:路径n”，意思是可执行文件的路径包括原来设定的路径，也包括从“路径1”到“路径n”的所有路径。当用户输入一个一串字符并按回车后，shell会依次在这种路径里找对应的可执行文件并交给系统核心执行。那种“$PATH”表示原本设定的路径依然有效，注意不要漏掉。个别软件可能还有“PATH”以外类型的环境变量须要添加，但方式与此相同，但是也须要注意“$”。

Linux环境下怎样更改环境变量

一介绍

假定笔记本中早已安装了matlab软件，软件的安装路径为：

/usr/local/MATLAB/R2013b/bin/matlab；

下边就以matlab为例具体介绍下怎样来更改环境变量。

二暂时性更改环境变量

打开Linux终端命令窗口，输入如下命令：

exportPATH=$PATH:/usr/local/MATLAB/R2013b/bin；

为了验证是否更改成功可以再继续输入命令eport进行查看。在右图中可以听到成功添加了matlab的环境变量。

里面更改后若果退出终端并重新打开再度查看环境变量时才会发觉前面添加的环境变量又消失了。即这样只做到了临时性更改环境变量。

linux设置环境变量方式是如何的？你们在设置linux环境变量的时侯，就可以根据前面的方式去操作，这个方式看上去有些复杂，虽然只要依照步骤一步步的去操作，也并不是非常困难，你们在操作的时侯linux软件下载，一定要有耐心，这样就能设置成功，假如还有不明白的地方，可以咨询新网。
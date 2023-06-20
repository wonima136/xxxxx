---



title: "如何对不同加密方式的压缩包密码进行破解？"
description: "如何对不同加密方式的压缩包密码进行破解？"
keywords: "如何对不同加密方式的压缩包密码进行破解？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、背景介绍

在我们日常使用计算机办公或则是在互联网下载的一些资源的时侯常常会碰到一些不晓得加密的但是你不晓得压缩包密码的文件 **linux下载压缩包命令**，常常我们可能还是比较着急地须要那份文件的，这么我们怎么获取加密的压缩包的密码呢？怎样对不同加密方法的压缩包密码进行破解呢？我想这是一个对网路安全感兴趣的人十分有兴趣学习和了解的一件事情，这么究竟该如何操作呢？怎么get到这个神奇的技能呢linux系统安装教程，接出来让我们通过本文一起了解，一起学习！

二、资源武器

1.安装好的KaliLInux虚拟机一台

2.整装待发的小白一个。

三、渗透实战

3.1第一步、创建一个加密的压缩包。

![linux的tar压缩命令_linux解压压缩tar包命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_0.jpg)

步骤2：使用的命令红旗linux6.0教程，rar命令

![linux的tar压缩命令_linux下载压缩包命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_1.png)

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_2.jpg)

步骤2：查看rar命令的帮助信息，如右图所示。

命令：rar--help

-a:后跟文件名

-p：表示文件加密

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_3.jpg)

步骤3：查看当前文件夹下有没有可以进行试验压缩的文件，如右图所示。

![linux解压压缩tar包命令_linux的tar压缩命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_4.jpg)

命令：ls

或则命令：ls-l

![linux的tar压缩命令_linux下载压缩包命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_5.jpg)

步骤4：创建加密的压缩包文件，如右图所示。

命令：taratest1.txt2.txt3.txt-p

![linux解压压缩tar包命令_linux的tar压缩命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_6.jpg)

步骤5：查看test.rar的加密压缩文件是否创建成功，如右图所示。

命令：ls

![linux下载压缩包命令_linux的tar压缩命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_7.jpg)

步骤6：借助图形化窗口试图打开新建的压缩包，查看是否须要密码，如右图所示。

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_8.jpg)

3.2生成压缩包文件的hash值并重定向保存成文本文件，如右图所示。

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_9.jpg)

命令：rar2johntest.rar

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_10.jpg)

![linux的tar压缩命令_linux解压压缩tar包命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_11.jpg)

命令：rar2johntest.rar>hash.txt

![linux解压压缩tar包命令_linux下载压缩包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_12.jpg)

3.3破解hash值 **linux下载压缩包命令**，如右图所示。

![linux下载压缩包命令_linux的tar压缩命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_13.jpg)

步骤1：借助命令破解hash值，如右图所示。

命令：johnhash.txt

![linux解压压缩tar包命令_linux的tar压缩命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_14.jpg)

![linux下载压缩包命令_linux解压压缩tar包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_15.jpg)

步骤2：对应的hash值破解中，如右图所示。

![linux的tar压缩命令_linux解压压缩tar包命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_16.jpg)

步骤3：对应的hash值破解成功，如右图所示。

![linux解压压缩tar包命令_linux下载压缩包命令_linux的tar压缩命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_17.jpg)

3.4借助破解hash值得到的密码解压加密的压缩包，如右图所示。

![linux下载压缩包命令_linux的tar压缩命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_18.jpg)

如右图所示，文件解压成功！！！！！！

![linux下载压缩包命令_linux的tar压缩命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685563580744_19.jpg)
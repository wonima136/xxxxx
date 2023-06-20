---



title: "linux安装deb包命令 错误或未考虑完全的地方，望望不吝赐教"
description: "linux安装deb包命令 错误或未考虑完全的地方，望望不吝赐教"
keywords: "linux安装deb包命令 错误或未考虑完全的地方，望望不吝赐教"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

这篇文章主要介绍Linux系统下如何用CheckInstall从源码创建一个RPM或DEB包，对于目前你搜索查找的问题还是具有挺好的参考价值，希望编程之家小编整理的这个内容对你们有所帮助。如有错误或未考虑完全的地方，望不吝讨教。

问题:我想要从源码创建安装的软件包。有没有一种方法从源码来创建和安装软件包，而不是运行“makeinstall”？这样的话，之后假如我想，我可以容易的卸载程序。

假如你早已从它的源码运行“makeinstall”安装了linux程序。想完整移除它将显得真的很麻烦，除非程序的开发者在Makefile里提供了uninstall的目标设置。否则你必须在安装前后比较你系统里文件的完整列表，之后手工移除所有在安装过程中加入的文件。

![ubuntu命令安装deb_linux安装软件命令deb_linux安装deb包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_0.jpg)

(这时侯Checkinstall就可以派上使用。Checkinstall会跟踪install命令行所创建或更改的所有文件的路径(比如：“makeinstall”、“makeinstall_modules”等)并构建一个标准的二补码包，让你能用你发行版的标准包管理系统安装或卸载它，（比如RedHat的yum或则Debian的apt-get命令) 。已知它在slackware、SuSe、Mandrake和Gentoo上也工作挺好 **linux安装deb包命令**，请参考其官方文档。

在这篇文章中，我们只集中在红围巾和Debian为基础的发行版深度linux系统，并展示如何从源码使用Checkinstall创建一个RPM和DEB软件包

在linux上安装Checkinstall

在Debian及其衍生发行版上安装Checkinstall：

#aptitudeinstallcheckinstall

在红围巾的发行版上安装Checkinstall，你须要下载一个早已打包好的Checkinstallrpm包(比如：从找到)，不过它早已从Repoforge库里删掉了。这个包是针对CentOS6的，不过也可在CentOS7里工作。

#wget

ftp:///mirror/ftp5.gwdg.de/pub/opensuse/repositories/home:/ikoinoba/CentOS_CentOS-6/x86_64/checkinstall-1.6.2-3.el6.1.x86_64.rpm

#yuminstallcheckinstall-1.6.2-3.el6.1.x86_64.rpm

一旦checkinstall安装好，你就可以用下述格式创建一个特定的软件包

#checkinstall

若果没有参数，默认安装命令“makeinstall”将被使用

用Checkinstall创建一个RPM或DEB包

(在这个事例里，我们将创建一个htop包，这是一个linux交互式文本模式进程查看器（类似top) 。

![linux安装deb包命令_ubuntu命令安装deb_linux安装软件命令deb](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_1.png)

首先，让我们从项目的官方网站下载源代码，作为一个好的习惯，我们储存源码包到/usr/local/src下，并解压它。

#cd/usr/local/src#wget#tarxzfhtop-1.0.3.tar.gz#cdhtop-1.0.3

让我们瞧瞧htop的安装命令是哪些，便于我们能用Checkinstall命令调用它，如下边所示linux系统编程，htop用“makeinstall”命令安装。

#./configure#makeinstall

为此，要创建一个htop安装包，我们可以不带任何参数的调用checkinstall **linux安装deb包命令**，这将使用“makeinstall”命令创建一个包。在这个过程中，checkinstall命令会问你几个问题。

简而言之，如下命令会创建一个htop包：

#./configure#checkinstall

(“ShouldIcreateadefaultsetofpackagedocs?（我会创建一个默认设置的包文件？) ”，回答“Y”：

![linux安装软件命令deb_ubuntu命令安装deb_linux安装deb包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_2.jpg)

你可以输入一个包的简略描述，之后按两次回车：

输入一个数字以更改下边的任何值或ENTER继续：

![linux安装deb包命令_linux安装软件命令deb_ubuntu命令安装deb](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_4.png)

![linux安装软件命令deb_linux安装deb包命令_ubuntu命令安装deb](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_5.jpg)

之后checkinstall将手动地创建一个.rpm或则.deb包，按照你的linux系统是哪些：

在CentOS7：

在Debian7:

![linux安装软件命令deb_ubuntu命令安装deb_linux安装deb包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679407403733_6.jpg)
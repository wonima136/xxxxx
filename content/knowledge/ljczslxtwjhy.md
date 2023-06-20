---



title: "【Linux基础知识】Linux系统文件还有特殊权限，那头就要爆炸了"
description: "【Linux基础知识】Linux系统文件还有特殊权限，那头就要爆炸了"
keywords: "【Linux基础知识】Linux系统文件还有特殊权限，那头就要爆炸了"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

有的同事一听Linux系统文件还有特殊权限，那头就要爆燃了，那还是接着瞧瞧/tmp目录和/usr/bin/passwd文件，如何回事啊！！！看到没有啊！

不是应当只有rwx吗？还有其他的特殊权限(s跟t)啊？啊…..头又开始昏了～

不急，等等阅读完这篇文章后你就应当晓得了如何回事了！！！

SetUID

当s这个标志出现在文件拥有者的x权限上时，比如刚才讲到的/usr/bin/passwd这个文件的权限

状态：『-rwsr-xr-x』，此时就被称为SetUID，简称为SUID的特殊权限。

Suid的功能总结一下！！

![linux命令查看权限_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_1.jpg)

执行者对于程序须要x执行权限。

本权限只在执行程序运行时侯有效。

Suid权限对二补码程序有效。

(执行者见具有该程序（owner) 的权限。

平时我们的密码都只存在/etc/shadow这个文件中，我们瞧瞧这个shadow的文件权限！！

看了这个shadow的权限发觉基本无人拥有这个文件的权限，因而就只能root来强行写入了，等等，既然只能root帐户才会更改，意味着使用passwd来更改登录的密码，那普通用户使用passwd更改的密码，那如何存在/etc/shadow里呢？

![linux命令查看权限_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_3.jpg)

追忆一下suid的功能。

对于普通用户来说对于/etc/bin/passwd的可执行文件具有x的权限。

Passwd的拥有者是root。

所以suid的作用就是普通用户在执行passwd的时侯 **linux 修改权限命令**，就回短暂的获取root的

权限，因而/etc/shadow就可以被普通用户来执行的passwd来更改！！

如右图：

![linux命令查看权限_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_5.jpg)

![linux 修改权限命令_linux文件夹权限命令_linux命令查看权限](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_6.png)

SetGID

SGID对二补码程序有用；

程序执行者对于该程序来说，需具备x的权限；

执行者在执行的过程上将会获得该程序群组的支持！

![linux命令查看权限_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_9.jpg)

S在组权限上，因而类似suid一样，当使用locate的命令的时侯，为此，我使用普通帐户执行locate时侯，普通帐户才会短暂的获取slocate群组的支持，因而能够去读取mlocate.db了。

借鉴一下suid就可以了。

StickyBit

这个sbit只针对目录了！！

当用户对目录具有w和x权限的时侯，就有写入的权限时。

当用户在改目录下构建文件或则目录仅自己和root才有权利删掉！！

当甲这个用户于A目录是具有群组或其他人的身分linux下socket编程，而且拥有该目录w的权限，这表示『甲用户对该目录内任何人构建的目录或文件均可进行”删掉/改名/搬动”等动作。』但是，假若将A目录加上了SBIT的权限项目时，则甲只才能针对自己完善的文件或目录进行删掉/改名/联通等动作linux操作系统培训，而未能删掉别人的文件。

用自己的语言就是说，当普通用户拥有这个目录的可写权限的时侯，不能删掉他人的文件 **linux 修改权限命令**，只能自己删掉自己的文件或则root删掉你的文件！！

实例：

对于tmp来说早已开到最大权限了！！！因而虽然lzc普通的帐户对/tmp都有生杀大权！！！！

我用了lzc的帐户竟然不能删掉lzc66帐户的目录。

![linux命令查看权限_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676614755533_12.png)

所以说sbit这个权限在开发的时侯是最好用的！！！
---



title: "Linux系统下使用权限来保护资源的安全将是一种不错"
description: "Linux系统下使用权限来保护资源的安全将是一种不错"
keywords: "Linux系统下使用权限来保护资源的安全将是一种不错"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674374418536_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

导读

(在Linux系统下，使用权限来保护资源的安全将是一种不错的选择。系统中每个文件的权限都有可读（r) 、可写（w）和可执行（x）这三种权限，它们分别对应权限数值4、2 和1。系统为每个文件和目录都设有默认的权限，每个文件中可分有拥有者（u）、同群组的用户（g）和其他组用户（o）。

1．文件权限的概述

文件的类型不同，权限就有所不同，虽然每个文件的权限都是 777，但在创建一个文件时，并没有看到该文件的权限是777，这是由于掩码的作用使得某些权限被屏蔽。

对于每个文件，其都由不同的信息组成，如图所示，这是我们之前创建的一个名为CAT1的空文件 **linux权限命令**，该文件的详细信息如下所示。

文本文件与目录文件的区别就在于第一个描述符不同，目录则以“d”为描述符。如图所示，这是之前所创建的一个名为CAT的目录嵌入式linux，该目录的详细信息及相关介绍如下所示。

![linux命令查看权限_linux权限命令_linux赋予权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674374418536_0.png)

使用带有-l选项的ls命令，可从许可字符串的首字母来识别所列出每个文件的类型，以下是几个常见的标识号。

(●-：一般文件（硬链接) 。

(● l：符号链接（软链接，可使用带有-s选项的ln命令来创建一个软链接) 。

● d：目录。

● c：字符设备文件。

![linux命令查看权限_linux权限命令_linux赋予权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674374418536_1.jpg)

● p：命名管道。

● s：套接字。

● b：块设备特殊文件。

2．文件权限管理

(从刚创建的CAT1文件中看到，该文件虽是cat用户创建的，但cat用户对该文件并没有可执行权限。现在要为CAT1添加可执行权（x) ，将这项任务交给chmod命令就可以。使用chmod命令也非常简单，如下所示，为cat用户添加对CAT1文件的可执行权。

```
[cat@cat ～]$ chmod u+x CAT1
```

通过以上操作后，cat用户拥有了对CAT1文件的可执行权。当然linux 虚拟主机，要添加其他权限的操作也差不多，也可以使用“chmod+rwx 文件名”来授权。感兴趣的读者可以试试，这里只讲方法，可以通过这种方法来进行练习，以便更好地掌握。

如果对CAT目录下的目录同时授予可执行权，则可以使用带有-R选项的Chmod命令进行操作，其格式如下：

chmod–R 目录名1/目录名2

其中目录2是目录1的子目录，即在目录1下创建目录2。

使用-R选项，可递归地授予各种权限。

(接下来讲解取消某个用户（或用户组) 拥有该文件的权限，使用的命令还是chmod，如下所示，取消cat用户对文件CAT1拥有的可执行权。

![linux命令查看权限_linux权限命令_linux赋予权限命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674374418536_2.png)

```
[cat@cat ～]$ chmod u-x CAT1
```

(根据文件权限数值，4代表可读，2代表可写，而1则代表可执行 **linux权限命令**，并且权限数值存在时以1表示，否则就用0来表示（实际上就是用二进制的方式来表示) ，就可以对于某个文件或目录中的权限数值计算。如图所示，计算名为CAT1文件的权限值。

若需要对该文件授予权限，也可使用“chmod 664 CAT1”的形式来为用户授权。

有时为了方便，把文件的拥有权授予其他人，可以使用chown来改变文件的拥有者，下面演示将cat用户的CAT1文件转给dog用户，先切换到root用户，然后才可以执行。由于CAT1文件在cat用户的主目录下，因此使用/home/CAT1。

```
[root@cat ～]# chown dog /home/cat/CAT1
```

执行命令之后，可以使用带有-l选项的ls命令来确认更改文件拥有者的操作是否成功。如下命令显示更改文件拥有者之后该文件的详细信息。

```
[cat@cat ～]$ ls–l
total 0
-rw-rw-r--　1　dog　cat　0 Aug　9　21:27　CAT1
```

原文来自：
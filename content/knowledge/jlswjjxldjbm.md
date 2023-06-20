---



title: "( 建立shell文件进行Linux的基本命令（二) 编程"
description: "( 建立shell文件进行Linux的基本命令（二) 编程"
keywords: "( 建立shell文件进行Linux的基本命令（二) 编程"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675922692185_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

建立shell文件

进行Linux的shell编程，我们首先需要建立基本的工程文件，关于Linux的基本命令linux端口映射，请查看本专栏的

(Linux基本命令（一) 和Linux基本命令（二）

![linux命令创建文件_linux创建磁盘分区命令_linux创建doc文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675922692185_0.png)

接着继续讲解Linux的shell编程

首先，我们需要建立一个后缀名以.sh的文件。我们打开命令窗口，找到自己需要创建文件的文件夹。利用命令touch 文件名.sh进行文件的创建

![linux创建磁盘分区命令_linux创建doc文件命令_linux命令创建文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1675922692185_1.jpg)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675922692185_2.png)

打开文件

在Linux中打开文件只能使用vi/vim文本编辑器，关于vi/vim的使用，请查看Linux系统文本编辑器：vi和vim

打开文件的命令的指令是vi 文件.sh

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675922692185_4.png)

输入小写字母i就表示插入模式输入，此时就可以编写Linux脚本了。

为文件加上可执行权限

文件创建后 **linux命令创建文件 linux命令创建文件**，可能权限不足，进而导致文件不能正常执行、因此需要求修改文件的权限。其具体指令为chmod+X 文件名.sh。其他关于文件的其他命令，请看本专栏的Linux基本命令。

运行程序

当我们创建文件之后，写入执行命令后，我们就要尝试运行程序了。Linux系统与Windows系统不同，Windows系统的脚本文件只需要双击一下后就可以运行。由于Linux是文件系统linux mint，因此需要用指令进行执行。其具体指令为:./ 文件名.sh
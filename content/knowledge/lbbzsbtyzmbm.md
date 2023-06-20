---



title: "Linux版本中是不通用怎么办？密码怎么处理？"
description: "Linux版本中是不通用怎么办？密码怎么处理？"
keywords: "Linux版本中是不通用怎么办？密码怎么处理？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678716287121_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

RedHatLinux是这样来处理的，现今新版本的具体是如何的你们可以参考下发行的文档。

本方式可能在其它Linux版本中是不通用的。

在多人共用一台笔记本或管理局域网时，经常会遇见这些情况：普通用户必须执行某个命令 **linux普通用户关机命令**，例如死机。但普通用户却不具备足够的权限，而出于隐私和安全的考虑我们又不希望把root密码告诉他人。

有两种方式可以解决这一问题。

第一种方式是设置命令文件的suid，可以使普通用户借此文件的拥有者的身分运行该程序，具体命令为chmodu+sfile，file为你想让他人执行的文件。还可以设置guid，让用户以文件所属组的身分运行程序，命令为chmodg+sfile。

第二种方式是使用sudo程序 **linux普通用户关机命令**，它可以使某个用户以特定的身分去运行程序linux服务器维护，其实也能以root身分去运行，它相比第一种方式更安全也易于维护。在RedHat发行版的光碟里就有这个工具。使用方式为，在终端中输入visudo编辑sudoers文件，在空白处添加以下四行：

Host_AliasMYHOST=linuxcool

![linux关机命令图片_linux普通用户关机命令_linux关机和重启命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678716287121_0.jpg)

User_AliasMYUSER=A的用户名，B的用户名

Cmnd_AliasMYFILE=A和B要运行的程序路径

MYUSERMYHOST=NOPASSWD：MYFILE

(注意大小写，之后要降低新的程序或用户时linux 输入法，直接修改前三行即可。假如要让某个不晓得root密码的用户具有全部权限，不仅运行个别危险程序（如低格) ，只需降低：

![linux关机和重启命令_linux普通用户关机命令_linux关机命令图片](https://www.linuxcool.com/wp-content/uploads/2023/03/1678716287121_1.png)

Cmnd_AliasDANGER=危险程序的路径

C的用户名ALL=(ALL)NOPASSWD：ALL，！DANGER

设置完成后，和vi一样保存退出，编辑器会手动检测你的句型是否正确，假如出错按e可以回来更改。之后该用户即可以“sudo+空格+某命令”的格式运行具体命令了。
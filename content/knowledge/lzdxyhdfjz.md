---



title: "Linux指定新用户的附加组"
description: "Linux指定新用户的附加组"
keywords: "Linux指定新用户的附加组"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676412033123_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1、添加新的用户帐号使用useradd命令，

添加用户帐号就是在/etc/passwd文件中为新用户降低一条记录，同时更新其他系统文件如/etc/shadow,/etc/group等.

Linux提供了集成的系统管理工具userconf，它可以拿来对用户帐号进行统一管理。

句型:

![linux用户有关的命令_linux 用户管理命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676412033123_0.jpg)

useradd选项用户名

语义:

-ccomment指定一段注释性描述。

-d目录指定用房主目录，假若此目录不存在，则同时使用-m选项 **linux 用户管理命令 linux 用户管理命令**，可以创建主目录。

-g用户组指定用户所属的用户组。

-G用户组用户组指定用户所属的附加组。

-sShell文件指定用户的登陆Shell。

-u用户号指定用户的用户号，若果同时有-o选项，则可以重复使用其他用户的标示号。

用户名指定新用户的登陆名。

例1:

$useradd–d/usr/sam-msam

释义:

![linux用户有关的命令_linux 用户管理命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676412033123_1.png)

此命令创建了一个用户samlinux系统安装教程，

其中-d和-m选项拿来为登陆名sam形成一个主目录/usr/sam(/usr为默认的用房主目录所在的父目录)。

例2：

$useradd-s/bin/sh-ggroup-Gadm,rootgem

![linux 用户管理命令_linux用户有关的命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676412033123_2.png)

释义:

此命令新建了一个用户gem,该用户的登陆Shell是/bin/sh（有时要用/bin/bash),

它属于group用户组，同时又属于adm和root用户组linux多线程，其中group用户组是其主组。

新建用户组可用命令:

groupaddadm
---



title: "( （文档介绍) linux下修改用户权限的全部是自己目录下得权限"
description: "( （文档介绍) linux下修改用户权限的全部是自己目录下得权限"
keywords: "( （文档介绍) linux下修改用户权限的全部是自己目录下得权限"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685103089658_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文档介绍：linux下更改用户权限

我们晓得linux一般是新用户没啥权限的全部是自己目录下得权限你想要给她权限要根据文件来给或命令下边设置权限chmod这个命令拿来修改。接出来是X为你们收集的的方式 **linux更改权限命令**，欢迎你们阅读：的方式

更改权限：

1)管理用户(user)的工具或命令;

useradd注：添加用户

![linux赋予权限命令_linux更改权限命令_linux更改权限失败](https://www.linuxcool.com/wp-content/uploads/2023/05/1685103089658_0.jpg)

adduser注：添加用户

passwd注：为用户设置密码

usermod注：更改用户命令，还能经过usermod来更改登入名、用户的家目录等等;

pwcov注：同时用户从/etc/passwd到/etc/shadow

pwck注：pwck是校准用户配置文件/etc/passwd和/etc/shadow文件内容是否正当或完整;

pwunconv注：是pwcov的立逆向操作，是从/etc/shadow和/etc/passwd成立/etc/passwd，之后会删掉/etc/shadow文件;

![linux更改权限失败_linux更改权限命令_linux赋予权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685103089658_2.jpg)

finger注：查看用户信息工具

id注：查看用户的UID、GID及所归属的用户组

chfn注：修改用户信息工具

su注：用户切换工具

sudo注：sudo是经过另一个用户来施行命令(executeacommandasanotheruser)，su是拿来切换用户，之后经过切换到的用户来完成对应的任务，但sudo能前面直接施行命令，例如sudo不须要root密码就才能施行root赋和的施行只有root能够施行对应的命令;但得经过visudo来xx/etc/sudoers来实现;

visudo注：visodo是xx/etc/sudoers的命令;也才能不用这个命令，直接用vi来xx/etc/sudoers的疗效是一样的;

![linux更改权限命令_linux更改权限失败_linux赋予权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685103089658_3.png)

sudoedit注：和sudo功效差不多。

般如果你更改用户本身的权限，也没有太多好改的linux系统教程，一般用户成立用户(useradd)之后，，全部分为“user自己、usergroup、其它user”能够“读、写、实施”三类，用ls-la才能见到 **linux更改权限命令** linux软件，如：

#ls-l

-rwxr-xr-x1rootbin62528Jan232021zip

其中r表示才能read/读，w表示才能write/写，x表示才能execute/施行。

userid一般全部是惟一的，但你才能更改自己user的group信息，以加入
---



title: "【智传网优】Linux系统如何获取root权限？"
description: "【智传网优】Linux系统如何获取root权限？"
keywords: "【智传网优】Linux系统如何获取root权限？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

请关注本头条号 **linux 修改权限命令**，每晚坚持更新原创干货技术文章。

如需学习视频，请在陌陌搜索公众号“智传网优”直接开始自助视频学习

序言

本文主要讲解Linux系统怎样获取root权限，步入系统系统执行任务。

在每位Linux系统上，root账户都是具有管理权限的超级帐户。许多任务都须要以root身分登入(或使用root特权执行命令)。假如须要使用root用户执行任务，请确保完全理解正在运行的命令及其后果。一个马大哈大意或格式不正确的命令(以root用户身分运行)就可能使整个操作系统难以使用。提早做好功课，每次按回车键前都要仔细检测一下。

![linux权限命令_linux 修改权限命令_linux 777权限 命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_0.png)

![linux 修改权限命令_linux权限命令_linux 777权限 命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_1.jpg)

linux怎么步入root

方式一：使用root帐号登入获取超级权限

root类似于任何其他账户linux操作系统安装，由于它有用户名(“root”)和密码。假如晓得root的密码，可以使用它从命令行登陆到root账户。

![linux 777权限 命令_linux 修改权限命令_linux权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_2.jpg)

使用root帐号登入获取超级权限

有一个名为su的特殊命令(用于“超级用户superuser”或“切换用户switchuser”)，它容许您作为root账户临时运行命令。从命令行输入:

```
su
```

一旦提示输入密码，就输入密码。假如成功，您将切换到root用户，并可以运行具有完全系统特权的命令。

作为root用户登入时要当心;很容易忘掉您目前是root用户linux开源软件，但是您可能无意中运行了一个命令，觉得您只是一个普通的新手，但系统不是那么觉得的。提醒自己是否是root用户的一种方式是检测命令提示符。倘若您是以普通用户的身分登入的，许多系统就会以美金符号(“$”)结束命令提示符，倘若您是root用户，则以磅符号(“#”)结束命令提示符。

或则，您可以使用whoami命令来确定您正在使用的账户。

完成管理任务后，可以运行exit或logout命令返回到标准用户账户。

当以root用户登入时，在su命令前面使用一个冒号一般很有用，如下所示:

```
su -

```

这个命令将完全使用root用户登入系统，它执行所有root用户的shell初始化脚本，并设置所有环境变量，如同root用户登入到一个新的shell会话中一样。按照须要执行的任务以及root账户的配置，这些方式的su命令可能是最适宜您的。

方式二：

以root用户身分运行命令而不使用root帐号和密码

使用sudo命令(代表“superuserdo”)以root用户身分运行命令，而不登陆root账户，这是可能的，并且一般更可取。假如在命令后面加上sudo，还会提示输入当前账户所对应的密码(而不是root密码)，并按照一个名为sudoers的特殊文件检测您的名子。倘若您的账户列在哪里，您的命令将以root特权运行。

![linux 修改权限命令_linux权限命令_linux 777权限 命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_5.png)

![linux 777权限 命令_linux权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676643145191_6.jpg)

使用sudo命令获取root权限

使用sudo使您的系统愈发安全，由于您没有登陆到root账户，但是永远不会忘掉注销而导致安全车祸。据悉，每次运行一个可能具有破坏性的命令时都要输入sudo，这提醒您要分外当心，并仔细考虑该命令的作用。

假如须要将用户添加到sudoers列表中，应当使用visudo命令，该命令要求运行root特权 **linux 修改权限命令**，并容许您安全地编辑sudoers文件。

本文已同步至博客站，尊重原创，转载时请在正文中附送以下链接：
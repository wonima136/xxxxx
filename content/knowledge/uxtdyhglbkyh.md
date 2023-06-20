---



title: "Unix/Linux系统的用户管理包括用户与组账号的管理"
description: "Unix/Linux系统的用户管理包括用户与组账号的管理"
keywords: "Unix/Linux系统的用户管理包括用户与组账号的管理"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686485260887_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

用户是Unix/Linux系统工作中重要的一环，用户管理包括用户与组帐号的管理。

在Unix/Linux系统中，不论是本机或则是远程登入系统，每位系统都必须拥有一个帐号，但是对于不同的系统资源拥有不同的使用权限。

Unix/Linux系统中的root帐号一般用于系统的维护和管理，他对Unix/Linux操作系统的所有部份具有不受限制的访问权限。

在Unix/Linux系统安装的过程中，系统会手动创建许多用户帐号，而这种默认的用户就称为“标准用户”。

在大多数版本的Unix/Linux系统中linux系统下载，都不推荐直接使用root帐号进行系统登入。

(（一) 查看当前用户：whoami

whoami该命令用于用户查看当前系统当前用户的用户名。可以通过cat/etc/passwd查看系统用户信息。

因为系统管理员一般须要使用多种身分登入操作系统，比如一般以普通用户登入系统，之后在以su命令切换到root身分对系统进行管理 **linux用户相关命令**，这时侯就可以使用whoami来查看当前用户的身分。在linux系统上输入whoami命令，显示结果如下：

(（二) 查看登入用户：who

who命令用于查看当前所有登入系统的用户信息linux虚拟主机，显示目前登入系统的用户信息。执行who命令可获知目前有这些用户登录系统 **linux用户相关命令**，单独执行who命令会列举登录账号，使用的终端机，登陆时间以及从何处登陆。在命令行上输入who，结果如下：

![linux用户相关命令_linux注销用户命令_linux新建用户命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686485260887_0.jpg)

(（三) 退出登入帐户：exit

在我的笔记本上使用的是远程登陆，当我输入exit以后，显示结果如下：
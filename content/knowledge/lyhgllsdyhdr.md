---



title: "( linux用户管理Linux是多用户多任务的操作系统，用户（group)"
description: "( linux用户管理Linux是多用户多任务的操作系统，用户（group)"
keywords: "( linux用户管理Linux是多用户多任务的操作系统，用户（group)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686398476872_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux用户管理

(Linux是多用户多任务的操作系统，用户(user)和用户组（group) 的管理是linux使用者应当了解和把握的基础之一。

用户管理常用命令

用户在系统中是分角色的，在linux系统中，因为角色不同，权限和所完成的任务也不同。值得注意的是，用户的角色是通过UID来辨识的，用户的UID是全局惟一的。Linux用户可以分为三类。

1、root用户：系统惟一，真实的，该用户既可以登入系统，也可以操作系统任何文件和命令 **linux用户相关命令**，拥有最高权限。

2、虚拟用户：这类用户也被称为伪用户或假用户，与真实用户区分开来，这类用户不具有登入系统的能力，但却是系统运行不可缺乏的用户；这类用户是系统自身拥有的，而非后来添加的，其实，我们也可以添加虚拟用户。

3、普通真实用户：这类用户能登入系统，但只能操作其根目录的内容，权限遭到限制，这类用户是系统管理员自行添加的。

![linux用户相关命令_linux系统下建立用户命令是什么_linux用户 ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686398476872_0.png)

Linux用户管理的常用命令主要有：用户帐号添加命令useradd、修改用户命令usermod、删除用户命令userdel及用户口令管理命令passwd等。

一、用户帐号添加命令：useradd

1、用于创建新的用户帐号。命令格式如下：

useradd命令选项用户名

2、useradd命令的选项及意义

-g:用于添加用户帐号时指定该用户的私有组

-G:用于添加附属组

-D：用于显示或设置useradd命令所使用的默认值

-d:指定用户目录

-m:使用者目录若不存在，则手动构建

-u:指定用户号，若果同时有-o选项 **linux用户相关命令**，则可以重复使用其他用户的标示号。注意：ID值不能为负值，预设为最小不得大于9而逐次降低。0-99传统上保留给系统帐号使用

使用useradd或adduser命令降低新用户时，系统将为用户创建一个与用户名相同的组，称为私有组，这一方式是为了能让新用户与其他用户隔离，确保安全性的举措。假如要改变私有组的名子linux游戏，可以使用-g选项来完成。

![linux系统下建立用户命令是什么_linux用户相关命令_linux用户 ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686398476872_1.jpg)

二、修改用户帐号：usermod

1、usermod命令可拿来更改用户帐号的各类属性，格式如下：

usermod命令选项用户名

2、usermod命令的选项及其涵义

-d:更改用户登入时的目录

-g:更改用户所属的群组

![linux用户 ftp命令_linux用户相关命令_linux系统下建立用户命令是什么](https://www.linuxcool.com/wp-content/uploads/2023/06/1686398476872_2.png)

-l:变更用户登入时的名称

-p:更改用户的密码

三、用户口令管理命令：passwd

1、passwd命令格式

passwd命令选项用户名

2、passwd命令的选项及其意义

-l:锁定用户口令

-u:口令解锁

-d:关掉使用者的密码确认功能，使用者在登入时可以不用输入密码

-f:逼迫用户上次登陆时更改密码

-l:变更用户登入时的名称

-s：显示指定使用者的密码认证种类

四、删除用户命令：userdel

userdel命令十分简单，只有一个可选项-r,倘若在userdel后加上-r选项嵌入式linux驱动程序设计从入门到精通，则在删掉用户的同时也一并删掉储存在/home目录下的该用户目录和文件
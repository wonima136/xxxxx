---



title: "linux更改权限命令 Linux中的用户概念用户与用户组的相关知识汇总"
description: "linux更改权限命令 Linux中的用户概念用户与用户组的相关知识汇总"
keywords: "linux更改权限命令 Linux中的用户概念用户与用户组的相关知识汇总"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684843604763_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(摘要Linux是一个多用户登录的操作系统，不同用户可以同时登陆一台主机。本文会介绍Linux系统中用户管理的相关知识，例如怎样「创建用户（组) 」，「修改用户（组）」，「查看用户（组）信息」等。

文章目录(TableofContents)

简介

Linux是一个多用户登录的操作系统，不同用户可以同时登陆一台主机。诸如「小A」和「小B」都可以同时登入同一台主机，她们共享一些主机的资源，且分别拥有自己的用户空间，用于储存各自的文件。实际上她们的文件都是置于同一个数学c盘上的甚至同一个逻辑分区或则目录里 **linux更改权限命令**，因为Linux的用户管理和权限机制，不同的用户不可以轻易地查看、修改彼此的文件。接出来就一起学习Linux系统中用户管理的相关知识。

本文的大部份内容按照实验楼课程，「楼+之运维进阶实战」进行改编。

Linux中的用户概念用户与用户组

首先我们会介绍一下「用户」与「用户组」的概念：

「用户」，由于Linux是个多用户多任务的分时操作系统，想要调用系统资源必须先向系统管理员申请一个帐号，通过用户身分步入系统。用户的帐号一方面能帮助系统管理员对使用系统的用户进行跟踪，并控制她们对系统资源的访问；另一方面也能帮助用户组织文件，为用户提供安全性保护。每位帐号都拥有一个惟一的用户名和用户密码。用户在登入时键入正确的用户名和密码后，才会步入系统和自己的主目录。

「用户组」，用户组是具有相同特点的用户的逻辑集合。有时须要让多个用户具有相同的权限，例如查看、修改某一个文件的权限，一种技巧是逐一对多个用户进行文件访问授权；另一种方式是构建一个组，让这个组具有查看、修改此文件的权限，之后将所有须要访问此文件的用户装入这个组中，这么所有该组用户就具有了和组一样的权限。这就是用户组，将用户分组是Linux系统中对用户进行管理及控制访问权限的一种手段，通过定义用户组，在很大程度上简化了管理工作。

(里面的用户与用户组的关系，可以用下边的一张图片来进行说明（有许多用户，两个用户组，同一个用户可以在不同的用户组上面) ：

用户与用户组之间存在以下的联系：

相关配置文件密码信息，被单独保存在/etc/shadow文件中，文件每一行有9个数组：用户组文件，Linux系统对用户组的所有信息被保留在/etc/group文件中，文件一行有4个数组：

Linux中的用户管理创建用户

添加新的用户帐号是通过useradd命令。下边是useradd的句型：

```
useradd [选项] [用户名]
```

其中选项可以有以下的选择：

下边看一个具体的事例，怎样创建用户，设置密码和切换用户。我们创建一个tmp_wmn的用户同时设置shell与设置「用房主目录」，并查看/etc/passwd文件：

```
# 添加用户，指定 `shell`
sudo useradd -md /home/tmp_wmn -s /bin/bash tmp_wmn
# 查看添加的用户信息
tail -1 /etc/passwd
# >> tmp_wmn:x:1001:1001::/home/tmp_wmn:/bin/bash
```

(接着我们为tmp_wmn用户设置密码，使用passwd来更新密码（passwd还可以用于更改用户密码，设置密码过期等操作，具体可以通过passwd-h来查看说明) ：

```
# 设置密码
sudo passwd tmp_wmn
```

更新密码的界面如下所示：

(最后我们可以使用su命令从当前wmn7用户切换到tmp_wmn用户（注意，这儿切换之前一定要在前面重置过密码，否则可能会出现su:Authenticationfailure的报错信息) ：

```
su tmp_wmn
```

当切换成功以后，可以查看当前的用户：

更改用户信息

一般情况下，可以通过usermod来更改早已存在用户信息。usermod的句型如下所示：

```
usermod [选项] [用户名]
```

usermod的选项参数大部份与useradd命令是一致的，可以参考前面「创建用户」部分的内容。在下边的事例中，我们更改用户tmp_wmn的备注消息：

```
sudo usermod -c "temp account" tmp_wmn
```

运行的结果如下所示，可以看见在/etc/passwd中多了用户的备注信息：

特别说明一下，我们可以使用usermod的命令来给用户添加sudo的权限，如下所示：

usermod-aGsudousername

里面命令中的a表示append，G表示group，就是将用户添加到sudo的group中即可。

删掉用户

从系统中删掉一个不再使用的用户，可以通过userdel命令实现。假如一个用户的帐号不再使用，删掉用户帐号就要把/etc/passwd等系统文件中的该用户记录都删掉，必要时还要删掉用户的主目录。

userdel的简单事例如下所示，其中选项-r表示将用户的主目录一起删掉：

```
sudo userdel -r tmp_wmn
```

查看用户

通过/etc/passwd文件查看，一个最直观查看用户信息的方法就是通过/etc/passwd文件；

下边是使用id来查看用户id与组信息的结果：

Linux中管理用户组

Linux中「用户组的管理」和「用户的管理」非常类似，主要包括：用户组的添加、删除和更改以及用户组间切换的权限。其中用户组的增删改实际上就是对/etc/group文件的处理。

添加新用户组

降低一个新的用户组调用groupadd命令。他的句型如下所示：

```
groupadd [选项] [用户组]
```

其中选项有以下的几个常用的参数：

在下边的事例中 **linux更改权限命令**，我们创建一个用户组test红帽子linux下载，其标示号为1024；

```
# 添加用户组
sudo groupadd -g 1024 test
# 在 /etc/group 中查看
tail -1 /etc/group
# >> test:x:1024:
```

更改用户组信息

我们一般使用groupmod来更改用户组的属性。下边是groupmod的基本句型：

```
groupmod [选项] [用户组]
```

其中选项有以下的几个常用参数：

比如在下边的事例中，我们首先将用户组的名称从test更改为test1：

```
sudo groupmod -n test1 test
```

(接着我们更改用户组test1的GID（组标示号) ，从1024更改为1027：

```
sudo groupmod -g 1023 test1
tail -1 /etc/group
# >> test1:x:1027:
```

删掉用户组

我们使用groupdel命令把一个用户组从系统中删掉。诸如删掉里面的test1这个用户组：

```
sudo groupdel test1
```

查看用户所属的所有组

(查看一个用户属于什么组，可以使用groups命令，不指定用户时，查看的是当前用户属于什么组。比如我们查看当前用户wmn7所属的组（这个和使用id查看到的信息是一样的) ：

用户的禁用和恢复登陆

假如一个用户在操作过程中存在违规行为，我们可以对其进行锁定，下边是「锁定」和「恢复」的句型：

禁用，其中L是lock的简写：

```
# usermod -L username
# passwd -l username
```

恢复，其中U表示unlock的简写：

```
# usermod -U username
# passwd -u username
```

比如我们如今将tmp_wmn禁用，并恢复：

```
sudo passwd -l tmp_wmn # 禁用
sudo passwd -u tmp_wmn # 恢复
```

我们看一下禁用帐号和恢复帐号的原理。首先查看在禁用前的密码：

```
# 禁用前查看密码
sudo tail -1 /etc/shadow
# 禁用
sudo passwd -l tmp_wmn
# 再次查看密码
sudo tail -1 /etc/shadow
# 恢复
sudo passwd -u tmp_wmn
# 再次查看密码
sudo tail -1 /etc/shadow
```

里面的运行结果如右图所示：

![linux更改目录权限_chmod更改权限命令_linux更改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684843604763_1.png)

可以看见，禁用密码以后linux系统安装教程，在文件/etc/shadow中密码依然存在，只是在上面多了叹号!，这样该用户就没法登陆了，由于验证端改变了密码。其实，在解锁以后，密码后面的感叹号会被除去。

用户与文件改变归属关系-chown

使用chown拿来更改文件的所属者。下边的事例中，我们将所属者从「wmn7」修改为「root」：

```
sudo chown root install.sh
```

![Linux 用户与权限](https://www.linuxcool.com/wp-content/uploads/2023/05/1684843604763_2.jpg)

下边是更通常的写法：

chown-Rwmn./

其中的参数为：

改变归属组-chgrp

前面我们更改了文件的「所属者」，我们还可以进一步更改文件的「所属组」。下边的事例中我们将文件的「所属组」从「wmn7」修改为「root」：

```
sudo chgrp root install.sh
```

下边是更通常的写法，与前面的类似，下边是更改「更改用户组」：

chgrp-Rwmn./

其中的参数为：

下边是参考的链接：
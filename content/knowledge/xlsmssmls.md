---



title: "1.先来什么是shell命令：shell"
description: "1.先来什么是shell命令：shell"
keywords: "1.先来什么是shell命令：shell"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681157165544_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1.先来解释一下哪些是shell命令：

shell似乎是一个应用程序，用户在输入命令以后，shell可以作为一个应用程序将命令解析之后传到内核当中，再把相关的信息返回

比如在linux系统当中简单输入以下命令，旁边是输出结果

ls

ls–l

ls/usr

```
laozhichi@laozhichi-virtual-machine:~$ ls
DevelopmentEnvConf  hello.sh  test    模板  图片  下载  桌面
examples.desktop    linux     公共的  视频  文档  音乐
laozhichi@laozhichi-virtual-machine:~$ ls -a
.                   examples.desktop  .pki                       模板
..                  .gnupg            .profile                   视频
.bash_history       hello.sh          .ssh                       图片
.bash_logout        .hello.sh.swo     .sudo_as_admin_successful  文档
.bashrc             .hello.sh.swp     test                       下载
.cache              .ICEauthority     .thunderbird               音乐
.config             linux             .viminfo                   桌面
DevelopmentEnvConf  .local            .vscode
.dotnet             .mozilla          公共的
laozhichi@laozhichi-virtual-machine:~$ ls /usr
bin  games  include  lib  lib32  libexec  libx32  local  sbin  share  src
```

“ls”命令拿来复印出当前目录下的所有文件和文件夹，而“ls-l”同样是复印出当前目录下的所有文件和文件夹，然而此命令会列举所有文件和文件夹的详尽信息，比如文件大小、拥有者、创建日期等等。最有一个“ls/usr”是拿来复印出目录“/usr”下的所有文件和文件夹。

2.目录信息查看命令ls

![用dos命令ping_linux可以用dos命令吗_用dos命令格式化c盘](https://www.linuxcool.com/wp-content/uploads/2023/04/1681157165544_0.png)

ls命令主要用于显示指定目录下的内容，列举指定目录下包含的所有的文件以及子目录，它的主要参数有：

-a显示所有的文件以及子目录，包括以“.”开头的隐藏文件。

-l显示文件的详尽信息，例如文件的形态、权限、所有者、大小等信息。

-t将文件根据创建时间排序列举。

3.目录切换命令cd

cd///步入到根目录“/”下，Linux系统的根目录为“/”,

cd/usr//步入到目录“/usr”里面。

![用dos命令格式化c盘_linux可以用dos命令吗_用dos命令ping](https://www.linuxcool.com/wp-content/uploads/2023/04/1681157165544_1.jpg)

cd..//步入到上一级目录。cd~//切换到当前用房主目录

4.当前路径显示命令pwd5.系统信息查看命令uname

可选的选项参数如下：

-r列举当前系统的具体内核版本号。

-s列举系统内核名称。

-o列举系统信息。

6.切换用户执行身分命令sudo

Ubuntu(Linux)是一个允许多用户的操作系统linux视频教程，其中权限最大的就是超级用户root **linux可以用dos命令吗**，有时侯我们执行一些操作的时侯是须要用root用户身分能够执行，例如安装软件。通过sudo命令可以使我们暂时将身分切换到root用户。当使用sudo命令的时侯是须要输入密码的，这儿要注意输入密码的时侯是没有任何提示的！

7.切换用户命令su

后面在讲解命令“sudo”的时侯说过，“sudo”是以root用户身分执行一个命令，并没有更改当前的用户身分，所有须要root身分执行的命令都必须在后面加上“sudo”。命令“su”可以直接将当前用户切换为root用户，切换到root用户之后就可以恣意的进行任何操作了！由于你早已获得了系统最高权限 **linux可以用dos命令吗**，在root用户下，所有的命令都可以无障碍执行，不须要在后面加上“sudo”

先使用命令“sudosu”切换到root用户，su命令不写明用户名的话默认切换到root用户。之后输入密码，密码正确的话还会切换到root用户，可以看见切换到root用户之后提示符的“@”符号后面的用户名弄成了“root”，表示当前的用户是root用户。但是以“#”结束。注意！！因为root用户权限太大，稍稍不注意就可能删掉掉系统文件，造成系统奔溃，因而强烈建议你们，不要以root用户运行Ubuntu。当要用到root身分执行个别命令的时侯使用“sudo”命令即可。要切换回原先的用户，使用命令“sudosu用户名”即可，例如我要从root切换回zuozhongkai这个用户，操作如图所示：

8.显示文件内容命令cat

查看文件内容是最常见的操作了，在windows下可以直接使用记事本查看一个文本文件内容，linux下也有类似记事本的软件，称作gedit，找到一个文本文件，双击打开红旗linux，默认使用的就是gedit，如图所示：

9.显示和配置网路属性命令ifconfig

ifconfig是一个跟网路属性配置和显示密切相关的命令，通过此命令我们可以查看当前网路属性，也可以通过此命令配置网路属性，例如设置网路IP地址等等，此命令格式如下：

ifconfiginterfaceoptions|address

主要参数如下：

interface网路插口名称，例如eth0等。

up开启网路设备。

down关掉网路设备。

addIP地址，设置网路IP地址。

netmaskadd子网网段。

在图中有两个网卡：ens33和lo，ens33是我的笔记本实际使用的网卡，lo是回测网卡。可以看出网卡ens33的IP地址为192.168.31.235，我们使用命令“ifconfig”将网卡ens33的IP地址改为192.168.31.20，操作如图所示：

从图中可以看出，我在使用命令“ifconfig”修改网卡ens33的IP地址的时侯使用了“sudo”，说明在Ubuntu下更改网卡IP地址是须要root用户权限的。当更改完之后使用命令“ifconfigens33”再次查看网卡ens33，发觉网卡ens33的IP地址弄成了192.168.31.20
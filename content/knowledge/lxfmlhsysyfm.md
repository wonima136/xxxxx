---



title: "linux下ftp命令行使用使用ftp命令进行远程文件传输命令"
description: "linux下ftp命令行使用使用ftp命令进行远程文件传输命令"
keywords: "linux下ftp命令行使用使用ftp命令进行远程文件传输命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677967352145_0.gif"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下ftp命令行使用

使用ftp命令进行远程文件传输ftp命令是标准的文件传输合同的用户插口。ftp是在TCP/IP网路上的计算机之间传输文件的简单有效的技巧。它容许用户传输ASCII文件和二补码文件。

在ftp会话过程中，用户可以通过使用ftp顾客程序联接到另一台计算机上。自此，用户可以在目录中上下联通、列出目录内容、把文件从远程机拷贝到本地机上、把文件从本地机传输到远程系统中。须要注意的是，假如用户没有哪个文件的存取权限，就不能从远程系统中获得文件或向远程系统传输文件。

为了使用ftp来传输文件，用户必须晓得远程计算机上的合法用户名和口令。这个用户名/口令的组合拿来确认ftp会话，并拿来确定用户对要传输的文件可以进行哪些样的访问。另外，用户或许须要晓得对其进行ftp会话的计算机的名子或IP地址。

Ftp命令的功能是在本地机和远程机之间传送文件。该命令的通常格式如下：

$ftp主机名/IP

其中“主机名/IP”是所要联接的远程机的主机名或IP地址。在命令行中，主机名属于选项，倘若指定主机名，ftp将企图与远程机的ftp服务程序进行联接；若果没有指定主机名，ftp将给出提示符，等待用户输入命令：

$ftp

ftp>

此时在ftp>提示符前面输入open命令加主机名或IP地址，将企图联接指定的主机。

不管使用哪一种方式，假如联接成功红旗linux官网，须要在远程机上登陆。用户假如在远程机上有账号，就可以通过ftp使用这一账号并须要提供口令。在远程机上的用户账号的读写权限决定该用户在远程机上能下载哪些文件和将上载文件放在那个目录中。

假如没有远程机的专用登陆账号，许多ftp站点设有可以使用的特殊账号。这个账号的登陆名为anonymous(俗称为匿名ftp)，当使用这一账号时，要求输入email地址作为口令。

假如远程系统提供匿名ftp服务linux 发邮件，用户使用这项服务可以登入到特殊的，供公开使用的目录。通常专门提供两个目录：pub目录和incoming目录。pub目录包含该站点供公众使用的所有文件，incoming目录储存上载到该站点的文件。

一旦用户使用ftp在远程站点上登陆成功，将得到“ftp>”提示符。如今可以自由使用ftp提供的命令，可以用help命令取得可供使用的命令清单，也可以在help命令前面指定具体的命令名称，获得这条命令的说明。

最常用的命令有：

ls列举远程机的当前目录

cd在远程机上改变工作目录

lcd在本地机上改变工作目录

ascii设置文件传输方法为ASCII模式

binary设置文件传输方法为二补码模式

close中止当前的ftp会话

hash每次传输完数据缓冲区中的数据后就显示一个#号

getmget)从远程机传送指定文件到本地机

putmput)从本地机传送指定文件到远程机

open联接远程ftp站点

断掉与远程机的联接并退出ftp

?显示本地帮助信息

!转入Shell中

下边简单将ftp常用命令作一简介。

启动ftp会话

open命令用于打开一个与远程主机的会话。该命令的通常格式是：

open主机名/IP

假如在ftp会话期间要与一个以上的站点联接 **linux ftp命令 退出**，一般只用不带参数的ftp命令。假如在会话期间只想与一台计算机联接，这么在命令行上指定远程主机名或IP地址作为ftp命令的参数。

中止ftp会话

close、disconnect、和bye命令用于中止与远程机的会话。close和disronnect命令关掉与远程机的联接，并且使用户留在本地计算机的ftp程序中。和bye命令都关掉用户与远程机的联接，之后退出用户机上的ftp程序。

改变目录

“cd[目录]”命令用于在ftp会话期间改变远程机上的目录，lcd命令改变本地目录，使用户能指定查找或放置本地文件的位置。

远程目录列表

ls命令列举远程目录的内容，如同使用一个交互shell中的ls命令一样。ls命令的通常格式是：

ls[目录][本地文件]

倘若指定了目录作为参数，这么ls就列举该目录的内容。假如给出一个本地文件的名子 **linux ftp命令 退出**，这么这个目录列表被装入本地机上您指定的这个文件中。

从远程系统获取文件

get和mget命令用于从远程机上获取文件。get命令的通常格式为：

get文件名

您还可以给出本地文件名，这个文件名是这个要获取的文件在您的本地机上创建时的文件名。倘若您不给出一个本地文件名，这么就使用远程文件原先的名子。

![linux ftp命令 退出_ftp linux 命令 退出_linux ftp命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677967352145_0.gif)

mget命令一次获取多个远程文件。mget命令的通常格式为：

mget文件名列表

使用用空格分隔的或带键值的文件名列表来指定要获取的文件，对其中的每位文件都要求用户确认是否传送。

向远程系统发送文件

put和mput命令用于向远程机发送文件。Put命令的通常格式为：

put文件名

mput命令一次发送多个本地文件，mput命令的通常格式为：

mput文件名列表

使用用空格分隔的或带键值的文件名列表来指定要发送的文件。对其中的每位文件都要求用户确认是否发送。

改变文件传输模式

默认情况下，ftp按ASCII模式传输文件，用户也可以指定其他模式。ascii和brinary命令的功能是设置传输的模式。用ASCII模式传输文件对纯文本是特别好的，但为防止对二补码文件的破坏，用户可以以二补码模式传输文件。

检测传输状态

传输小型文件时，可能会发觉让ftp提供关于传输情况的反馈信息是十分有用的。hash命令使ftp在每次传输完数据缓冲区中的数据后，就在屏幕上复印一个#字符。本命令在发送和接收文件时都可以使用。

ftp中的本地命令

当您使用ftp时，字符“!”用于向本地机上的命令shell传送一个命令。假如用户处在ftp会话中，须要shell做个别事，就很有用。诸如用户要构建一个目录来保存接收到的文件。倘若输入!mkdirnew_dir，这么Linux就在用户当前的本地目录中创建一个名为new_dir的目录。

![linux ftp命令_ftp linux 命令 退出_linux ftp命令 退出](https://www.linuxcool.com/wp-content/uploads/2023/03/1677967352145_1.png)

从远程机grunthos下载二补码数据文件的典型对话过程如下：

$ftpgrunthos

Connectedtogrunthos

220grunthosftpserver

Name(grunthos:pc):anonymous

33lGuestloginok,sendyourcompletee-mailaddressaspassword.

Password:

230Guest1oginok,accessrestrictionsapply.

RemotesystemtypeisUNIX.

ftp>cdpub

250CWDcommandsuccessful.

ftp>ls

200PORTcommandsuccessful.

l50openingASCIImodedataconnectionfor/bin/1s.

totalll4

rog1

rog2

226Transfercomp1ete.

ftp>binary

200typesettoI.

ftp>hash

Hashmarkprintingon(1024bytes/hashmark).

ftp>getrog1

200PORTcommandsuccessfu1.

150openingBINARYmodedataconnectionforrogl(l4684bytes).

#############

226Transfercomplete.

14684bytesreceivedin0.0473secs(3e+02Kbytes/sec)

ftp>

22lGoodbye.
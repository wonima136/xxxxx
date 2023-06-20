---



title: "【航运法律英语学习】2016年10月21日"
description: "【航运法律英语学习】2016年10月21日"
keywords: "【航运法律英语学习】2016年10月21日"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676498486810_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下强制踢开登录用户

查看机器中登录的用户

[root@sunsyk~]#w

16:29:02up2days,2:35,5users,loadaverage:0.03,0.05,0.01

USERTTYFROMLOGIN@IDLEJCPUPCPUWHAT

rootpts/1:0.0Tue152days1:440.04s-bash

rootpts/2:0.0Tue1546:42m0.05s0.05sbash

rootpts/3:0.0Tue152days0.02s0.02sbash

rootpts/4172.20.52.11414:1758:480.16s0.03ssqlplus

rootpts/5172.20.52.11415:310.00s0.03s0.00sw

我把pts/1踢开(只有root才会去踢开用户)

[root@sunsyk~]#pkill-kill-tpts/1

[root@sunsyk~]#pkill-kill-tpts/2

[root@sunsyk~]#pkill-kill-tpts/3

查看是不是踢开

[root@sunsyk~]#w

16:34:16up2days,2:40,2users,loadaverage:0.00,0.05,0.02

USERTTYFROMLOGIN@IDLEJCPUPCPUWHAT

rootpts/4172.20.52.11414:171:04m0.16s0.03ssqlplus

rootpts/5172.20.52.11415:310.00s0.03s0.00sw

以login命令登陆：

在用户登入系统期间，不仅可使用“su-”命令之外，也可以用“login”命令来改变身分，甚至可以登陆其他的主机。假如用“login”命令来改变身分，只要直接在命令后输入即将改变的用户名即可：[root@ns1root]#logincaroline->改变用户名为caroline **linux 用户管理命令**，若要登陆其他的主机，须要使用“-h”参数来配合“login”命令：[root@ns1root]#login-hlinux2->登陆名为Linux2的主机。

以rlogin命令登陆：

不仅使用“login”命令外，“rlogin”也可以拿来登陆远程主机，它的用法很简单。下边是一个联接到的范例：

![linux用户命令_linux 下新建用户命令_linux 用户管理命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676498486810_0.png)

[root@ns1root]#rlogin->登陆

password:******->默认是以相同名登录，所以没有出现“login”信息

Loginincorrect->假如拿来登陆的名称与当前的用户名不同，可直接按“Enter”，且忽视错误信息

Login:jack->重新输入不同的用户名

Password:******->密码

/etc/nologin文件的使用：

假如希望只有root可以登陆主机，其他帐号都不可以登陆，可以在/etc目录下添加名为“nologin”的文件，在该文件中只要随便输入几个字符即可，由于只要系统发觉该文件的存在都会严禁其他用户登入。

系统注销：

后面介绍了以“login”命令来改变身分，甚至可以登陆其他的主机，而与login相对的命令“logout”，它可以使目前登陆的用户注销系统，便于其他用户登入。这个命令的用法很简单，只要输入“logout”即可登入系统：[root@ns1root]#logout

后面介绍过，Linux系统是一个多用户操作系统，系统中每一个用户的使用权限都须要由系统管理员来设定。这一节将介绍一些系统管理员对用户和用户组进行管理的命令。

4.6.1创建新用户

useradd命令(也可以使用adduser)拿来创建新的用户账号，其命令格式如下：

表4—19useradd命令常用选项

常用现象

意义

-d

设置新用户的登录目录

-e

设置新用户的停止日期，日期格式为MM/DD/YY

-f

账户过期几日后永久停权。当值为0时账号则立即被停权。而当值为-1时则关掉此功能。预设值为-1

-g

使新用户加入群组

![linux 下新建用户命令_linux 用户管理命令_linux用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676498486810_1.png)

-G

使新用户加入一个新组。每位群组使用冒号“，”隔开，不可以参杂空白字

-s

指定新用户的登录Shell

-u

设定新用户的ID值

成功创建一个新用户之后，在/etc/passwd文件中都会降低一行该用户的信息，其格式如下：

〔用户名〕：〔密码〕：〔UID〕：〔GID〕：〔身份描述〕：〔主目录〕：〔登陆Shell〕

其中个数组被逗号“：”分成7各部份。

因为大于500的UID和GID通常都是系统自己保留，不用做普通用户和组的标志，所以新降低的用户和组通常都是UID和GID小于500的。

比如使用如下命令：

〔root@linuxcoolroot〕#useradduser1

将会创建一个名为userl的用户，关于用户管理命令已然介绍过，在此也不做更多的介绍了。

执行useradd命令的结果如图11-13所示。

4.6.2设置和更改用户口令passwd

passwd命令拿来设置和更改用户命令，只有超级用户和用户自己可以更改密码，其他的普通用户没有更改其他用户密码的权力。其命令如下：

#passwd〔用户名〕

为防止输入密码是被人注意到有多少位linux查看磁盘空间，Linux并不采用类似Windows的密码回显〔显示为*号〕，所以，输入的那些字符是看不见的。诸如，为新建的userl用户设置密码可使用如下命令：

〔root@linuxcoolroot〕#passwduser1

按照系统的提示信息输入两次密码，系统会显示：

passwd：:allauthenticationtokensupdatedsuccessfully

表示更改密码成功了。新建用户的工作只有在该用户设置了口令后才算完成，否则难以使用该用户名登录。

4.6.3更改用户信息usermod

![linux 用户管理命令_linux 下新建用户命令_linux用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676498486810_2.png)

usermod命令拿来更改用户信息，其命令格式如下：

#usermod〔选项〕〔用户名〕

常用命令选项11-20所示。

表4-20usermod命令常用选项

常用选项

意义

-d

更新使用者新的登录目录

-e

设置新用户的停止日期，日期格式为MM/DD/YY

-f

账户过期几日后永久停权。当值为0时账号则立即被停权。而当值为-1时则关掉此功能。预设值为-1

-g

更新使用者新用户加入群组

-G

定义使用者为一堆groups的成员。每位群组使用“？？”隔开，不可以参杂空白字

-l

变更用户登录时的名称，同时使用者目录名也会跟随更动成新的名称

-s

指定新用户Shell

-u

用户ID值，必须为惟一的ID值。用户目录树下所用的文档目录其userID会手动变更，置于拥护目录外的文档则要自行自动更动

比如，下边的命令更改用户信息：

![linux 下新建用户命令_linux 用户管理命令_linux用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676498486810_3.png)

〔root@linuxcoolroot〕#usermod–d/home/user2–s/bin/bashuser2

将用户名user2的主目录路径设置在/home/user1,登录的Shell设置为/usr/bin/gcc。

通常情况下usermod命令会参照命令指令的部份更改用户账号信息。但usermod不容许改变正在线上的使用者账号名称，为此，当用usermod来改变用户账号信息时，必须确认这名没在笔记本上执行任何程序。

4.6.４新建组群groupadd

groupadd命令拿来完善新的用户组，其命令格式如下：

#groupadd〔选项〕〔用户名称〕

常用选项有：

-g：GID值。除非使用-o参数不然该值必须是惟一 **linux 用户管理命令**，不可相同，数值不可为负。

GID值预设为最小不得大于500而逐次降低。0—499传统上是保留系统账号使用。

-f：新增的一个早已存在的群组账号，系统会出现错误讯息之后结束groupadd.

若果是这样的情况，不会新增这个群组(假如是这个情况，系统不会在新增一次)。也可同时加上-g选项，当你加上一个GID时，此时GID就不用是惟一值，可不加-o参数,建好的群组会显示完善后的结果(addingagroupasneither–gor–ooptionswerespecified),这是RedHatLinux额外增设的选项。

4.6.5删掉用户userdel

userdel命令拿来删掉早已存在的用户及相关的文档linux系统入门学习，其命令格式如下：

#userdel〔选项〕用户名

userdel命令的常用选项：

-r将用户目录下的文档一并删掉。在其他位置上的文档也将一一找出并删掉。

Userdel不容许移除正在线上的用户账号，为此，假如想删掉这类用户账号，必须先杀掉用户在系统上运行的程序能够进行账号删掉。

4.6.6删掉群组groupdel

groupdel命令拿来删掉早已存在的用户组，其命令格式如下：

#groupdel组名

同userdel类似，若果有任何一个组内的用户在上线，就不能移除该用户组，为此，假如组内有用户在线的话，最好先移出该用户，之后在删掉该用户。

4.6.7用户间切换su

su命令常用于不同用户间切换。其命令格式如下：

#su〔用户名〕

su命令的常见用法是弄成跟用户或超级用户，假如发出不带用户名的su命令，则系统提示输入根口令，输入然后则可换为根用户。假如登录为根用户，则可以用su命令成为系统上任何用户而不须要口令。

比如，假如登录为user1，要切换为user2，只要用如下命令：

#suuser2

之后系统提示输入user2口令，输入正确的口令以后就可以切换到user2。完成以后就可以用exit命令返回到user1。

4.6.8查看当前在线用户who

who命令主要用于查看当前在线上的用户情况。这个命令特别有用。假如用户想和其他用户构建虽然通信，例如使用talk命令，这么首先要确定的就是该用户确实在线上，不然talk进程就难以完善上去。

又如，系统管理员希望监视每位登入的用户此时此刻的所作所为，也要使用who命令。Who命令的常用命令格式和常用选项如下：

#who〔选项〕

命令who常用命令选项如表4-21所示。

表4-21命令who常用命令选项

常用选项

意义

-a

显示所有用户的所有信息

-m

显示运行该程序的用户名，和“whoamI”的作用一样

-q

只显示用户的登录账号和登录用户的数目，该选项优先级低于其他任何选项

-u

在登入用户旁边显示该用户最后一次对系统进行操作距今的时间

-H

显示列标题

所有的选项是可选的，比如，使用命令：

〔root@localhoseroot〕#who-aH
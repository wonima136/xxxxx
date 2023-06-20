---



title: "Linux中无论有多少个分区都有一个根？"
description: "Linux中无论有多少个分区都有一个根？"
keywords: "Linux中无论有多少个分区都有一个根？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

目录

四：目录管理

(Linux系统的目录组成类拟一个倒置的树型结构 **linux压缩文件夹命令 t**，它以一个名为根（“/”) 的目录开始向上延展。

它不同与其它操作系统。诸如windows,在windows中，它有多少分区这么就有多少个根,而这种根之间是并列的，而在Linux中无论有多少个分区都有一个根。

在Linux系统中对应的文件类型字符为“d”。

目录是一种特殊的文件

目录上的读写执行权限与普通文件有所不同。

读：用户可以读取目录内的文件

写：单独使用没有作用。它与读和执行权限连用可以在目录内添加与删掉任何文件。

执行：用户可以步入目录，调用目录内的资料

1、常见目录：

/bin储存常用用户指令。

/boot储存用于系统引导时使用的各类文件

/dev储存设备文件

/etc储存系统、服务的配置目录与文件

/home储存用户家目录

/lib储存库文件，如内核模块、共享库等

/usr储存系统应用程序目录i

(（1) setuid

设置使文件在执行阶段具有文件所有者的权限(比如：/usr/bin/passwd);假如通常用户执行该文件,则在执行过程中,该文件可以获得root权

句型：

chmodu±s

(（2) setgid

该权限只对目录有效，目录被设置该位后,任何用户在此目录下创建的文件都具有和该目录所属的组相同的组

句型：

chmodg±s

u+s实验：

su-uos1

touch/root/file#权限严禁

chmodu+s/usr/bin/touch#给touch设置强制位setuid以后就可以以root身分去执行

su-uos

touch/root/file#权限容许

切回root查看

g+s实验：

mkdiruos1//创建目录/uos并设置所属组为uos

chown:uos/uos1/

touch/uos1/1.txt//新创建文件、可以见到其属组还是属于创建者的

chmodg+s/root/uos1///为属组添加强制位setgid

touch/uos/2.txt//可以看见新建的文件会手动承继此前目录的属组

o+t实验：

useradd-m-s/bin/bashuos1

mkdir/tx

chmodo=rwx/tx/

touch/tx/uos1

su-uos1

rm/tx/uos1//是可以删掉的

exit注销

chmodo+t/tx/

touch/tx/uos2

su-uos1

rm/tx/uos2

rm:难以删掉'/tx/uos1':不容许的操作//加上t权限以后就不可以删掉其他人的文件

2、umask：控制新建的文件或目录的权限

umask值与新建文件、目录权限对照表

umask值目录权限值文件权限值

076

166

254

344

432

522

610

700

比如：umask值为0000，则目录权限值777，文件权限值666

umask值为0022，则目录权限值755，文件权限值644

(（1) 反例：

umask

0022//当前umask网段是0022，新创建文件的权限是644，目录的权限是755

touchfile1

mkdirdi1

ls-l

umask0027//将umask网段更改为0027以后，新建文件的权限是640，目录的权限是750

touchfile2

mkdirdi2

ls-l

五：系统交互工具与编辑器1、实验要求：

除管理员root用户外linux教程下载，新建普通用户uos1

使用tty1登陆root用户，tty2登陆uos1

(（1) write命令指定一个在线用户发送短消息

//使用root用户对uos1用户发送消息

root@uos1-PC:~#writeuos1

write:write:youhavewritepermissionturnedoff.

aaaaaaaaaaa

aaaaaaaaaaa

ctrl+d结束

//去uos1用户验证查看

(（2) wall命令向所有在线用户广播

//使用root用户对所有用户发送消息

root@uos1-PC:~#wall123456789

//顾客端验证接收

2、vim编辑器：

vi编辑器是所有Unix和Linux系统下标准的编辑器，相当于Windows的记事本一样，它工作在字符模式，因为不须要图形界面，所以效率高；vim是vi编辑器的升级版本，不仅兼容vi的所有指令以外，还添加了许多重要的特点，比如支持正则搜索，句型高亮，对C语言的手动缩进等；

(（1) vim的三种模式：

命令模式(其它模式->ESC)：

控制光标联通，删掉字符，段落复制

编辑/插入模式(命令模式->a、i、o、A、I、O)

新增文字及更改文字

末行模式(命令模式->:)

保存文件，离开vi，以及其他设置

(（2) vim基础操作

vim--help查看帮助

命令模式：

yy复制当前行正行

nyy复制从光标所在行开始的n行

dd剪切当前光标所在行

ndd剪切从光标所在行开始的n行

p粘贴光标位置以后

G跳转至尾行

g跳转至首行

dw删至辅音

ndw删掉后n个词

d$删至行尾

(nd$删掉后n行（从光标当前处开始算起) 

u撤消上一次更改

U撤消一行内的所有更改

末行模式

:r/etc/passwd读文件内容进vim

:r!ls-l/读命令结果保存到文件中

:setnumber行号

:setnonumber消除行号

:s/old/new/g在当前行中查找到的所有字符串old替换为new

:2,6s/old/new/g2-6行替换

:%s/old/new/g在整个文件范围内替换

:X加入密码

:q不保存退出

:q!强制退出不保存

:wq保存退出，同x

:wq!强制保存退出

步入编辑模式

a光标后插入

i当前光标前插入

o在当前光标下插入空行

A在光标所在行尾插入

I在光标行首插入内容

O在当前光标上插入空行

(（3) 更改vim配置

echo”:setnumber”>>/etc/vim/vimrc

vim/etc/passwd

3、实验-非正常关掉vim的恢复

vimuos直接关掉终端

ls-la

vimuos会有提示信息

删掉同目录下边同名的隐藏文件即可

六：系统文件查找与文件管理1、可执行文件的搜索

which显示一个指令的完整路径与别称。

whereis搜索一个指令的完整路径以及其帮助文件

locate用于查找文件或目录，比find命令快，是由于不回家搜索目录，而是搜索一个数据库/var/lib/mlocate/mlocate.db，这个库有本地所有文件信息，Linux会手动创建这个数据库，每晚手动更新一次，因而，我们在用whereis和locate查找文件时，有时会找到早已被删掉的数据，或则刚才构建文件，却未能查找到，缘由就是由于数据库文件没有被更新。为了防止这些情况，可以在使用locate之前，先使用updatedb命令，自动更新数据库

apt-getinstalllocate-y

updatedb

locatepasswd

(2、find在指定目录下查找文件（1) 特性：

从指定路径下递归向上搜索文件。

支持根据各类条件形式搜索。

支持对搜索得到的文件再进一步的使用指令操作(比如：删掉、统计大小、复制等)

(（2) 常用选项：

-name按照文件名找寻文件

-user按照文件拥有者找寻文件

-group按照文件所属组找寻文件

-perm按照文件权限找寻文件

-size按照文件大小找寻文件[±Sizek]

(-type按照文件类型找寻文件，常见类型有：f(普通文件)、c(字符设备文件)、b(块设备文件)、l(联接文件)、d（目录) 

-o表达式或

-a表达式与

(（3) 示例：

find/-nameuos1

find/-userhehe

find/-groupxiaolizi

find/-perm644

find/-size+10k

find/etc-size-10k

find/etc-typef/c/b/l/d

(（4) 对文件进一步操作

find[路径][参数][表达式]-exec指令{}；

{}代表find找到的文件

；命令结束标志linux手机软件，因为各个系统中的;会有不同的意义，所以上面加通配符

(（5) 示例：

find/tmp/-typef-execrm-rf{};用exec选项执行cp命令

(3、grep查找文件里符合条件的字符串。（1) 常用选项：

-c估算匹配关键字的行数

-i忽视字符大小写的差异

-n显示匹配的行及其行号

-s不显示不存在或不匹配文本的错误信息

-h查询多个文件时不显示文件名

-l查询文件时只显示匹配字符所在的文件名

-v取反

--color=auto

(（2) 示例：

greproot/etc/passwd

grep^root/etc/passwd

grepbash$/etc/passwd

grep-iROOT/etc/passwd

(4、tar文件归档压缩（1) 功能说明：

用于构建、还原备份文件的工具，它也可以加入或解开备份文件内的文件。有时亦称之为“打包”。

(（2) 常用选项：

c完善新的备份文件

v显示指令执行过程

x解包

t显示tar文件的内容

z用gzip压缩或解压文件，以.tar.gz或.tgz为后缀

j用bzip压缩或解压文件，以.tar.bz2为后缀

f指定要操作的文件

-C指定解压目录

(（3) 示例：

tarczvf`date+%F`.log.tar.gz/var/log/#以时间为名称打包

tarxzvf2016-03-09.log.tar.gz-C/tmp/#-C指定解压目录

(（4) gzip压缩

gunzip或gzip-d解压

只能压缩文件，不能压缩目录；后缀名为.gz **linux压缩文件夹命令 t**，但是不保留原文件

(（5) bzip2压缩

bunzip2或bzip2-d解压

压缩文件，-k参数可以保留原文件；后缀为.bz2
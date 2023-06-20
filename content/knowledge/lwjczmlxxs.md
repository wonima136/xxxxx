---



title: "Linux文件查找命令，xargs详述"
description: "Linux文件查找命令，xargs详述"
keywords: "Linux文件查找命令，xargs详述"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux文件查找命令find，xargs剖析

序言：关于find命令

因为find具有强悍的功能，所以它的选项也好多，其中大部份选项都值得我们花时间来了解一下。虽然系统中富含网路文件系统(NFS)，find命令在该文件系统中同样有效，只你具有相应的权限。

在运行一个十分消耗资源的find命令时，好多人都倾向于把它放到后台执行，由于遍历一个大的文件系统可能会耗费很长的时间(这儿是指30G字节以上的文件系统)。

一、find命令格式

1、find命令的通常方式为；

findpathname-opTIons［-print-exec-ok。..］

2、find命令的参数；

pathname：find命令所查找的目录路径。诸如用。来表示当前目录，用/来表示系统根目录。

-print：find命令将匹配的文件输出到标准输出。

-exec：find命令对匹配的文件执行该参数所给出的shell命令。相应命令的方式为‘command’{};，注意{}和；之间的空格。

-ok：和-exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，就会给出提示，让用户来确定是否执行。

3、find命令选项

-name

根据文件名查找文件。

-perm

根据文件权限来查找文件。

-prune

使用这一选项可以使find命令不在当前指定的目录中查找 **linux查找文件命令**，假如同时使用-depth选项，这么-prune将被find命令忽视。

-user

根据文件属主来查找文件。

-group

根据文件所属的组来查找文件。

-mTIme-n+n

根据文件的修改时间来查找文件，-n表示文件修改时间距如今n天以内，+n表示文件修改时间距如今n天曾经。find命令还有-aTIme和-cTIme选项，但它们都和-mtime选项。

-nogroup

查找无有效所属组的文件，即该文件所属的组在/etc/groups中不存在。

-nouser

查找无有效属主的文件，即该文件的属主在/etc/passwd中不存在。

-newerfile1！file2

查找修改时间比文件file1新但比文件file2旧的文件。

![linux 查找大文件命令_linux grep命令查找[]_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_0.jpg)

-type

查找某一类型的文件，例如：

b-块设备文件。

d-目录。

c-字符设备文件。

p-管线文件。

l-符号链接文件。

f-普通文件。

-sizen：［c］查找文件宽度为n块的文件，带有c时表示文件宽度以字节计。

-depth：在查找文件时，首先查找当前目录中的文件，之后再在其子目录中查找。

-fstype：查找坐落某一类型文件系统中的文件，这种文件系统类型一般可以在配置文件/etc/fstab中找到，该配置文件中包含了本系统中有关文件系统的信息。

-mount：在查找文件时不跨越文件系统mount点。

-follow：假如find命令遇见符号链接文件，就跟踪至链接所指向的文件。

-cpio：对匹配的文件使用cpio命令，将这种文件备份到磁带设备中。

另外，下边三个的区别：

-aminn

查找系统中最后N分钟访问的文件

-atimen

查找系统中最后n*24小时访问的文件

-cminn

查找系统中最后N分钟被改变文件状态的文件

-ctimen

查找系统中最后n*24小时被改变文件状态的文件

-mminn

查找系统中最后N分钟被改变文件数据的文件

-mtimen

查找系统中最后n*24小时被改变文件数据的文件

4、使用exec或ok来执行shell命令

使用find时，只要把想要的操作写在一个文件里，就可以用exec来配合find查找，很便捷的

![linux查找文件命令_linux grep命令查找[]_linux 查找大文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_1.png)

在有些操作系统中只容许-exec选项执行例如ls或ls-l这样的命令。大多数用户使用这一选项是为了查找旧文件并删掉它们。建议在真正执行rm命令删掉文件之前，最好先用ls命令看一下，确认它们是所要删掉的文件。

exec选项旁边跟随着所要执行的命令或脚本，之后是一对儿{}，一个空格和一个，最后是一个分号。为了使用exec选项，必需要同时使用print选项。假如验证一下find命令，会发觉该命令只输出从当前路径起的相对路径及文件名。

比如：为了用ls-l命令列举所匹配到的文件，可以把ls-l命令置于find命令的-exec选项中

#find。-typef-execls-l{};

-rw-r--r--1rootroot349282003-02-25。/conf/httpd.conf

-rw-r--r--1rootroot129592003-02-25。/conf/magic

-rw-r--r--1rootroot1802003-02-25。/conf.d/README

里面的反例中，find命令匹配到了当前目录下的所有普通文件，并在-exec选项中使用ls-l命令将它们列举。

在/logs目录中查找修改时间在5日曾经的文件并删掉它们：

$findlogs-typef-mtime+5-execrm{};

记住：在shell中用任何方式删掉文件之前，应该先查看相应的文件，一定要当心！当使用例如mv或rm命令时，可以使用-exec选项的安全模式。它将在对每位匹配到的文件进行操作之前提示你。

在下边的反例中，find命令在当前目录中查找所有文件名以.LOG结尾、更改时间在5日以上的文件，并删掉它们，只不过在删掉之前先给出提示。

$find。-name“*.conf”-mtime+5-okrm{};

《rm。..。/conf/httpd.conf》？n

按y键删掉文件，按n键不删掉。

任何方式的命令都可以在-exec选项中使用。

在下边的反例中我们使用grep命令。find命令首先匹配所有文件名为“passwd*”的文件，比如passwd、passwd.old、passwd.bak，之后执行grep命令瞧瞧在这种文件中是否存在一个sam用户。

#find/etc-name“passwd*”-execgrep“sam”{};

sam:x：501:501：：/usr/sam:/bin/bash

二、find命令的反例；

1、查找当前用房主目录下的所有文件：

下边两种方式都可以使用

$find$HOME-print

$find~-print

2、让当前目录中文件属主具有读、写权限，而且文件所属组的用户和其他用户具有读权限的文件；

$find。-typef-perm644-execls-l{};

3、为了查找系统中所有文件宽度为0的普通文件，并列举它们的完整路径；

$find/-typef-size0-execls-l{};

4、查找/var/logs目录中修改时间在7日曾经的普通文件，并在删掉之前寻问它们；

![linux查找文件命令_linux grep命令查找[]_linux 查找大文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_2.png)

$find/var/logs-typef-mtime+7-okrm{};

5、为了查找系统中所有属于root组的文件；

$find。-grouproot-execls-l{};

-rw-r--r--1rootroot59510月3101:09。/fie1

6、find命令将删掉当目录中访问时间在7日以来、含有数字后缀的admin.log文件。

该命令只检测三位数字，所以相应文件的后缀不要超过999。先建几个admin.log*的文件，能够使用下边这个命令

$find。-name“admin.log［0-9］［0-9］［0-9］”-atime-7-ok

rm{};

《rm。..。/admin.log001》？n

《rm。..。/admin.log002》？n

《rm。..。/admin.log042》？n

《rm。..。/admin.log942》？n

7、为了查找当前文件系统中的所有目录并排序；

$find。-typed|sort

8、为了查找系统中所有的rmt磁带设备；

$find/dev/rmt-print

三、xargs

xargs-buildandexecutecommandlinesfromstandardinput

在使用find命令的-exec选项处理匹配到的文件时，find命令将所有匹配到的文件一起传递给exec执行。但有些系统对能否传递给exec的命令宽度有限制，这样在find命令运行几分钟以后，都会出现溢出错误。错误信息一般是“参数列太长”或“参数列溢出”。这就是xargs命令的好处所在，非常是与find命令一起使用。

find命令把匹配到的文件传递给xargs命令，而xargs命令每次只获取一部份文件而不是全部，不像-exec选项那样。这样它可以先处理最先获取的一部份文件，之后是下一批，并这么继续下去。

在有些系统中，使用-exec选项会为处理每一个匹配到的文件而发起一个相应的进程，并非将匹配到的文件全部作为参数一次执行；这样在有些情况下才会出现进程过多，系统性能增长的问题，因此效率不高；

而使用xargs命令则只有一个进程。另外，在使用xargs命令时，到底是一次获取所有的参数，还是分批取得参数，以及每一次获取参数的数量就会按照该命令的选项及系统内核中相应的可调参数来确定。

来瞧瞧xargs命令是怎样同find命令一起使用的，并给出一些事例。

下边的事例查找系统中的每一个普通文件，之后使用xargs命令来测试它们分别属于哪类文件

#find。-typef-print|xargsfile

。/.kde/Autostart/Autorun.desktop：UTF-8UnicodeEnglishtext

。/.kde/Autostart/.directory：ISO-8859text

。..。..

在整个系统中查找显存信息存贮文件(coredump)，之后把结果保存到/tmp/core.log文件中：

![linux grep命令查找[]_linux查找文件命令_linux 查找大文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_3.png)

$find/-name“core”-print|xargsecho“”》/tmp/core.log

前面这个执行太慢，我改成在当前目录下查找

#find。-name“file*”-print|xargsecho“”》/temp/core.log

#cat/temp/core.log

。/file6

在当前目录下查找所有用户具有读、写和执行权限的文件，并收回相应的写权限：

#ls-l

drwxrwxrwx2samadm409610月3020:14file6

-rwxrwxrwx2samadm010月3101:01http3.conf

-rwxrwxrwx2samadm010月3101:01httpd.conf

#find。-perm-7-print|xargschmodo-w

#ls-l

drwxrwxr-x2samadm409610月3020:14file6

-rwxrwxr-x2samadm010月3101:01http3.conf

-rwxrwxr-x2samadm010月3101:01httpd.conf

用grep命令在所有的普通文件中搜索hostname这个词：

#find。-typef-print|xargsgrep“hostname”

。/httpd1.conf：#differentIPaddressesorhostnamesandhavethemhandledbythe

。/httpd1.conf：#VirtualHost：Ifyouwanttomaintainmultipledomains/hostnames

onyour

用grep命令在当前目录下的所有普通文件中搜索hostnames这个词：

#find。-name*-typef-print|xargsgrep“hostnames”

。/httpd1.conf：#differentIPaddressesorhostnamesandhavethemhandledbythe

。/httpd1.conf：#VirtualHost：Ifyouwanttomaintainmultipledomains/hostnames

onyour

注意，在前面的事例中，拿来取消find命令中的*在shell中的特殊涵义。

find命令配合使用exec和xargs可以使用户对所匹配到的文件执行几乎所有的命令。

四、find命令的参数

下边是find一些常用参数的事例，有用到的时侯查查就行了，像上面前几个帖子，都用到了其中的的一些参数，也可以用man或查看峰会里其它帖子有find的命令指南

![linux查找文件命令_linux 查找大文件命令_linux grep命令查找[]](https://www.linuxcool.com/wp-content/uploads/2023/04/1680782766250_4.png)

1、使用name选项

文件名选项是find命令最常用的选项，要么单独使用该选项，要么和其他选项一起使用。

可以使用某种文件名模式来匹配文件，记住要用冒号将文件名模式导致来。

不管当前路径是哪些，假如想要在自己的根目录$HOME中查找文件名符合*.txt的文件，使用~作为‘pathname’参数，波浪号~代表了你的$HOME目录。

$find~-name“*.txt”-print

想要在当前目录及子目录中查找所有的‘*.txt’文件，可以用：

$find。-name“*.txt”-print

想要的当前目录及子目录中查找文件名以一个小写字母开头的文件 **linux查找文件命令**，可以用：

$find。-name“［A-Z］*”-print

想要在/etc目录中查找文件名以host开头的文件，可以用：

$find/etc-name“host*”-print

想要查找$HOME目录中的文件，可以用：

$find~-name“*”-print或find。-print

要想让系统高负荷运行，就从根目录开始查找所有的文件。

$find/-name“*”-print

假如想在当前目录查找文件名以两个大写字母开头，跟随是两个数字，最后是.txt的文件，下边的命令就才能返回名为ax37.txt的文件：

$find。-name“［a-z］［a-z］［0--9］［0--9］.txt”-print

2、用perm选项

根据文件权限模式用-perm选项，按文件权限模式来查找文件的话。最好使用八补码的权限表示法。

如在当前目录下查找文件权限位为755的文件，即文件属主可以读、写、执行，其他用户可以读、执行的文件，可以用：

$find。-perm755-print

还有一种抒发方式：在八补码数字后面要加一个横杠-，表示都匹配，如-007就相当于777，-006相当于666

#ls-l

-rwxrwxr-x2samadm010月3101:01http3.conf

-rw-rw-rw-1samadm3489010月3100:57httpd1.conf

-rwxrwxr-x2samadm010月3101:01httpd.conf

drw-rw-rw-2gemgroup409610月2619:48sam

-rw-rw-rw-1rootroot279210月3120:19temp

#find。-perm006

#find。-perm-006

。/sam
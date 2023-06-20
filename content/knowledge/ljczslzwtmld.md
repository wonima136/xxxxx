---



title: "( （Linux基础知识) Linux中五条命令的查找命令"
description: "( （Linux基础知识) Linux中五条命令的查找命令"
keywords: "( （Linux基础知识) Linux中五条命令的查找命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078335_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux中文件的五个查找命令总结

更新时间：2016年10月04日14:58:44作者：子匠_Zijor

使用笔记本的时侯，常常须要查找文件linux命令大全，在Linux中，有好多方式可以做到这一点。这篇文章总结了五条命令，你可以瞧瞧自己晓得几条。大多数程序员，可能常常使用其中的2到3条，对这5条命令都很熟悉的人应当是不多的。

Linux的查找命令有5个，分别如下：

which：在PATH变量指定的路径中，搜索某个系统命令的位置，但是返回第一个搜索结果；

type：用于分辨某个命令究竟是由shell自带的，还是由shell外部的独立二补码文件提供的。假如一个命令是外部命令，这么使用-p参数，会显示该命令的路径，相当于which命令。type命令虽然不能算查找命令；

(whereis：只能用于程序名的搜索，并且只搜索二补码文件（参数-b) 、man说明文件（参数-m）和源代码文件（参数-s）；

locate：相当于find-name，可快速查找文件；

find：最常用和最强悍的查找命令，可以用它找到任何想找的文件。

注意：

一般find不很常用 **linux查找文件命令**，由于速率慢！

常都是先使用whereis或则locate来检测，当真的找不到了，才用find查找。

是由于whereis与locate是借助数据库来查找数据，所以相当快速，并且没有实际查询硬碟，比较节约时间。

(whereis和locate找寻的数据是由已创建的数据/var/lib/中查找。并且数据库的更新默认是每晚更新一次（不同系统可能会有差别) ，所以当新建文件或删掉文件后去查找该文件，whereis和locate会告诉你文件“notfound”，由于必须更新数据库了。

要自动更新数据库的方式也很简单，直接输入updatedb即可。updatedb命令回来读取/etc/updatedb.conf中的配置，之后去硬碟上面进行查找文件名操作，最后更新整个数据库文件。

下边详尽讲解以上5个命令的使用：

一、which：查找系统命令位置

which命令在PATH变量指定的路径中，搜索某个系统命令的位置，但是返回第一个搜索结果。

which命令的格式如下：

```
which [-a] command
```

which命令的参数如下：

-a：将所有由PATH目录中可以找到的命令均列下来，而不是只列举第一个被找到的命令。

事例：

```
[root@www ~] # which ifconfig
/sbin/ifconfig
```

![linux more命令查找_linux grep命令查找[]_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078335_0.png)

二、whereis：程序名搜索

(whereis命令只能用于程序名的搜索，并且只搜索二补码文件（参数-b) 、man说明文件（参数-m）和源代码文件（参数-s）。

whereis命令的格式如下：

```
whereis [-bmsu] 文件或目录名
```

whereis命令的参数如下：

-b只查找二补码格式的文件

-m只查找在说明文件manual路径下的文件

-s只招source源文件

-u查找不在上述三个选项当中的其他特殊文件

事例：

```
[root@www ~] # whereis ifconfig
ifconfig: /sbin/ifconfig /usr/share/man/man8/ifconfig.8.gz
[root@www ~] # whereis -m ifconfig
ifconfig: /usr/share/man/man8/ifconfig.8.gz
```

三、locate：借助数据库查找文件

locate命令的格式如下：

```
locate [-ir] keyword
```

locate命令的参数如下：

-i：忽视大小写差别；

-r：前面可接正则表达式的实现方法。

比如：

```
[root@www ~] # locate passwd
/etc/passwd
/etc/passwd-
/etc/news/passwd.nntp
/etc/pam.d/passwd
```

四、find：查找任何文件

find命令的格式如下：

```
find [PATH] [option] [action]
```

4.1find参数：基于文件名的搜索

![linux more命令查找_linux grep命令查找[]_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078335_1.png)

与文件名有关的参数如下：

-namefilename：查找文件名为filename的文件。filename可使用正则表达式表示。

事例：

```
[root@www ~] # find / -name passwd
```

查找文件名为passwd的文件。

4.2find参数：基于文件大小的搜索

与文件大小有关的参数如下：

-sizeSIZE：查找文件大小恰好等于SIZE的文件；

-size-SIZE：查找文件大小小于SIZE的文件；

-size+SIZE：查找文件大小大于SIZE的文件。

其中，SIZE的单位有：

c——byte，字节；

(w——字（2字节) ；

(b——bit，块（512字节) ；

k——千字节；

M——兆字节；

G——吉字节。

事例：

```
[root@www ~] # find . -type f -size +10k
搜索大于10KB的文件
[root@www ~] # find . -type f -size 10k
搜索等于10KB的文件
```

4.3find参数：基于文件类型的搜索

与文件类型有关的参数如下：

-typeTYPE：查找文件的类型为TYPE的文件。

TYPE的参数列表有：

f：普通文件；

l：符号联接；

d：目录；

c：字符设备；

b：块设备；

s：套接字；

p：FIFO。

事例：

```
[root@www ~] # find /var -type s
```

查找/var目录下所有类型为socket的文件。

4.4find参数：基于目录深度的搜索

与目录深度有关的参数如下：

-maxdepthn：n为数字，表示向上最大深度限制为n；

-mindepthn：n为数字，搜索出深度距离当前目录起码n个子目录的所有文件。

事例：

```
[root@www ~] # find . -maxdepth 3 -type f
向下最大深度限制为3
[root@www ~] # find . -mindepth 2 -type f
搜索出深度距离当前目录至少2个子目录的所有文件
```

4.5find参数：基于时间进行搜索

与时间有关的参数共有-atime、-ctime、-mtime。下边以-mtime说明：

-mtimen：n为数字红旗linux，列举在n天之前的“一天之内”被更改过的文件名；

(-mtime+n：列举在n天之前（不含第n天本身) 被更改过的文件名；

(-mtime-n：列举在n天之内（不含第n天本身) 被更改过的文件名；

-newerfile：file为一个存在的文件，列举比file还要新的文件名。

事例：

![linux grep命令查找[]_linux查找文件命令_linux more命令查找](https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078335_2.png)

```
[root@www ~] # find /etc -mtime 0
查找从现在开始到24小时前，/etc目录下所有改动过内容的文件都会被列出来。
[root@www ~] # find /ect -newer /etc/passwd
查找/etc目录下，所有比/etc/passwd文件更新的文件。
```

4.6find参数：基于用户或用户组名进行搜索

与用户或用户组名有关的参数如下：

-uidn：n为数字，表示用户的UID；

-gidn：n为数字，表示用户的GID；

-username：name为用户帐号名称；

-groupname：name为用户组名；

-nouser：找寻文件的所有者不存在于/etc/passwd的文件；

-nogroup：找寻文件的所有用户组不存在于/etc/group的文件。

反例：

```
[root@www ~] # find /home -user root
```

查找root用户在/home目录下的所有文件。

4.7find参数：基于文件权限进行搜索

与文件权限有关的参数如下：

-permmode：查找文件权限正好等于mode的文件；

-perm+mode：查找文件权限“包含任一mode的权限”的文件；

-perm-mode：查找文件权限“必需要全部包括mode的权限”的文件。

反例：

```
[root@www ~] # find / -perm +7000
```

查找必须富含—s--s--t的所有三个权限的文件。

4.8find命令的其它一些方法

4.8.1查找所有宽度为零的文件：

```
find . -empty
```

4.8.2查找在n分钟内被更改的文件：

```
find . -cmin -60
```

(查找一个小时内文件状态改变的文件（也就是60分钟内) 。

(4.8.3仅仅查找非隐藏的文件（不显示隐藏文件) ：

```
find . ( ! -regex ".*/..*" )
```

显示当前目录及其子目录下的文件，而且只列举非隐藏文件。

五、type：显示指定命令的类型

type命令拿来显示指定命令的类型，判定给出的指令是内部指令还是外部指令。

type命令格式如下：

```
 type [option] [commond]
```

type命令的参数有：

-t：输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别称”或者“内部指令”；

-p：假如给出的指令为外部指令，则显示其绝对路径；

-a：在环境变量“PATH”指定的路径中，显示给定指令的信息，包括命令别称。

命令的类型可能有如下几种：

alias：别称；

keyword：关键字，Shell保留字；

function：函数，Shell函数；

builtin：内建命令，Shell内建命令；

file：文件 **linux查找文件命令**，c盘文件，外部命令；

unfound：没有找到。

反例：

```
[root@www ~] # type cd
cd is a shell builtin
[root@www ~] # type date
date is /bin/date
[root@www ~] # type mysql
mysql is /usr/bin/mysql
[root@www ~] # type nginx
-bash: type: nginx: not found
[root@www ~] # type if
if is a shell keyword
```

总结

以上就是这篇文章的全部内容，希望本文的内容对你们的学习或则工作能带来一定的帮助，假如有疑惑你们可以留言交流。
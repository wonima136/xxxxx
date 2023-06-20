---



title: "( 【干货】爆款好文的命令及使用实例分析（一)"
description: "( 【干货】爆款好文的命令及使用实例分析（一)"
keywords: "( 【干货】爆款好文的命令及使用实例分析（一)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676729870421_2.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

「点击

图片获取近来三年热卖好文」

1、which命令

我们常常在linux要查找某个文件，但不晓得放到那里了，可以使用下边的一些命令来搜索：which命令的作用是，在PATH变量指定的路径中，搜索某个系统命令的位置，但是返回第一个搜索结果。也就是说，使用which命令，就可以看见某个系统命令是否存在，以及执行的究竟是哪一个位置的命令。1．命令格式：

which可执行文件名称

2．命令功能：

which指令会在PATH变量指定的路径中，搜索某个系统命令的位置，但是返回第一个搜索结果。

3．命令参数：

4．使用实例：

实例1：查找文件、显示命令路径

```
命令：which lsmod
输出：
[root@localhost ~]# which pwd
/bin/pwd
[root@localhost ~]# which adduser
/usr/sbin/adduser
[root@localhost ~]#
```

说明：which是依照使用者所配置的PATH变量内的目录去搜救可运行档的！所以，不同的PATH配置内容所找到的命令其实不一样的！

实例2：用which去找出which

命令：whichwhich

输出：

```
[root@localhost ~]# which which
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
     /usr/bin/which
[root@localhost ~]#
```

说明：居然会有两个which，其中一个是alias这就是所谓的『命令别称』，意思是输入which会等於前面接的那串命令！

实例3：找出cd这个命令

命令：whichcd

输出：

说明：cd这个常用的命令居然找不到啊！为何呢？这是由于cd是bash内建的命令！并且which默认是找PATH内所规范的目录，所以其实一定找不到的！

2、whereis命令

(whereis命令只能用于程序名的搜索，并且只搜索二补码文件（参数-b) 、man说明文件（参数-m）和源代码文件（参数-s）。假如省略参数 **linux下载文件命令**，则返回所有信息。

和find相比，whereis查找的速率十分快，这是由于linux系统会将系统内的所有文件都记录在一个数据库文件中，当使用whereis和下边正式介绍的locate时，会从数据库中查找数据，而不是像find命令那样，通过遍历硬碟来查找，效率自然会很高。并且该数据库文件并不是实时更新，默认情况下时一礼拜更新一次，因而，我们在用whereis和locate查找文件时，有时会找到早已被删掉的数据，或则刚才构建文件，却难以查找到，诱因就是由于数据库文件没有被更新。

1．命令格式：

![linux下载文件命令sz_linux ftp下载文件命令_linux下载文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676729870421_2.jpg)

whereis[-bmsu][BMS目录名-f]文件名

2．命令功能：

whereis命令是定位可执行文件、源代码文件、帮助文件在文件系统中的位置。那些文件的属性应属于原始代码，二补码文件，或是帮助文件。whereis程序还具有搜索源代码、指定备用搜索路径和搜索不寻常项的能力。

3．命令参数：

4．使用实例：

实例1：将和**文件相关的文件都查找下来

```
命令：whereis svn
输出：
[root@localhost ~]# whereis tomcat
tomcat:
[root@localhost ~]# whereis svn
svn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz
```

说明：tomcat没安装，找不下来，svn安装找出了好多相关文件

实例2：只将二补码文件查找下来

```
命令：whereis -b svn
输出：
[root@localhost ~]# whereis -b svn
svn: /usr/bin/svn /usr/local/svn
[root@localhost ~]# whereis -m svn
svn: /usr/share/man/man1/svn.1.gz
[root@localhost ~]# whereis -s svn
svn:
[root@localhost ~]#
```

说明：whereis-msvn查出说明文档路径，whereis-ssvn找source源文件。

3、locate命令

locate让使用者可以很快速的搜救档案系统内是否有指定的档案。其方式是先构建一个包括系统内所有档案名称及路径的数据库，然后当找寻时就只需查询这个数据库，而毋须实际深入档案系统之中了。在通常的distribution之中，数据库的构建都被置于crontab中手动执行。

1．命令格式：

Locate[选择参数][式样]

2．命令功能：

(locate命令可以在搜救数据库时快速找到档案，数据库由updatedb程序来更新，updatedb是由crondaemon周期性构建的，locate命令在搜救数据库时比由整个由硬碟资料来搜救资料来得快 **linux下载文件命令**，但较差劲的是locate所找到的档案若是近来才完善或刚改名的，可能会找不到，在内定值中，updatedb每晚会跑一次，可以由更改crontab来更新设定值。(etc/crontab)locate指定用在搜救符合条件的档案，它会去储藏档案与目录名称的数据库内，找寻合乎范本式样条件的档案或目录录，可以使用特殊字元（如”*”或”?”等) 来指定范本式样，如指定范本为kcpa*ner,locate会找出所有起始字串为kcpa且结尾为ner的档案或目录红旗linux6.0教程，如名称为kcpartner若目录录名称为kcpa_ner则会列举该目录下包括子目录在内的所有档案。locate指令和find寻找档案的功能类似，但locate是透过update程序将硬碟中的所有档案和目录资料先构建一个索引数据库，在执行loacte时直接找该索引，查询速率会较快，索引数据库通常是由操作系统管理，但也可以直接下达update逼迫系统立刻更改索引数据库。

3．命令参数：4．使用实例：

实例1:查找和pwd相关的所有文件

```
命令：locate pwd
输出：
peida-VirtualBox ~ # locate pwd
/bin/pwd
/etc/.pwd.lock
/sbin/unix_chkpwd
/usr/bin/pwdx
/usr/include/pwd.h
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.pyc
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.pyc
/usr/lib/syslinux/pwd.c32
/usr/share/help/C/empathy/irc-join-pwd.page
/usr/share/help/ca/empathy/irc-join-pwd.page
/usr/share/help/cs/empathy/irc-join-pwd.page
/usr/share/help/de/empathy/irc-join-pwd.page
/usr/share/help/el/empathy/irc-join-pwd.page
```

实例2：搜索etc目录下所有以sh开头的文件

```
命令：locate /etc/sh
输出：
peida-VirtualBox ~ # locate /etc/sh
/etc/shadow
/etc/shadow-
/etc/shells
peida-VirtualBox ~ #
```

实例3：搜索etc目录下，所有以m开头的文件

```
命令：locate /etc/m
输出：
peida-VirtualBox ~ # locate /etc/m
/etc/magic
/etc/magic.mime
/etc/mailcap
/etc/mailcap.order
/etc/manpath.config
/etc/mate-settings-daemon
```

想要学习Linux系统运维的同事们可以看一看《Linux系统运维手册从入门到企业实战》这本书，特别适宜Linux学习及工作必备的工具书。

end

最新整理的2TB技术干货：包括构架师实战教程、大数据、Docker容器、系统运维、数据库、redis、MongoDB、电子书、Java基础课程、Java实战项目、ELKStack、机器学习、BAT笔试精讲视频等。只需在「民工哥技术之路」微信公众号对话框回复关键字：1024即可获取全部资料。
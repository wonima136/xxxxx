---



title: "内部命令也就是shellshell自己带的命令：有一个环境变量"
description: "内部命令也就是shellshell自己带的命令：有一个环境变量"
keywords: "内部命令也就是shellshell自己带的命令：有一个环境变量"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674684117596_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

内部命令也就是shell自己带的命令

外部命令：有一个环境变量中的路径变量记录了路径的变量 **linux 命令里支持变量吗**，这样你使用的这些命令，不用关心在哪个目录下面了linux修改文件名，它都会从path变量里面去搜索。

Linux系统为了提高系统运行效率，将经常使用的轻量的命令在系统启动时一并加载这些命令到内存中供SHELL随时调用，这部分命令即为内部命令。反之，系统层调用的较重的命令只有当被调用时才会硬盘加载的这部分命令即为外部命令。

在系统的某个目录下的可执行程序，外部命令的查找依赖于变量path

[root@promote ~]# echo $PATH

/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin

输入命令以后，它就会从path变量里面去依次查找，

![linux 命令 变量_linux 命令里支持变量吗_linux 命令输出到变量](https://www.linuxcool.com/wp-content/uploads/2023/01/1674684117596_0.jpg)

比如去ping一个网站

另外linux是区分大小写的，ping不能写成:PING，这样系统是不认识这个命令的。

而且是一直ping不像widows那样ping5个包就结束 了 **linux 命令里支持变量吗**，此时我们要按ctrl+C结束ping命令。

[root@promote ~]# cd /home //切换到/home文件目录下面

[root@promote home]# type cd //查看cd是哪个目录的命令

cd is a shell builtin //cd是一个shell 内部命令

[root@promote home]#

[root@promote home]# pwd//查看当前工作目录

/home //得到当前目录是/home

[root@promote home]# type pwd //通过命令type得知pwd是一个内部命令builtin

pwd is a shell builtin

[root@promote home]#

[root@promote home]# cd //切换到主目录

[root@promote ~]#

[root@promote ~]# type ping // type命令可以查看命令类型，以区别是内部命令还是外部命令。通过查看命令type可以得知ping是在/bin/这个目录下的命令，是外部命令

ping is hashed (/bin/ping)

[root@promote ~]#

![linux 命令 变量_linux 命令输出到变量_linux 命令里支持变量吗](https://www.linuxcool.com/wp-content/uploads/2023/01/1674684117596_1.jpg)

[root@promote ~]# type ifconfig //通过查看命令type可以得知ipconfig是在/sbin/这个目录下的命令，是外部命令

ifconfig is hashed (/sbin/ifconfig)

[root@promote ~]#

使用help 查看内部命令帮助

[root@promote ~]# help cd

cd: cd [-L|-P] [dir]

![linux 命令 变量_linux 命令里支持变量吗_linux 命令输出到变量](https://www.linuxcool.com/wp-content/uploads/2023/01/1674684117596_2.jpg)

Change the shell working directory.

Change the current directory to DIR. The default DIR is the value of the

HOME shell variable.

使用help查看外部命令红旗linux桌面版，命令—help 或者 命令-h

[root@promote ~]# ifconfig –help

[root@promote ~]# ifconfig –h

都可以得到如下界面

![linux 命令输出到变量_linux 命令 变量_linux 命令里支持变量吗](https://www.linuxcool.com/wp-content/uploads/2023/01/1674684117596_3.png)
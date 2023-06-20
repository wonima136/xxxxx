---



title: "( Linux中最常见的ls命令的基本格式（有关主目录)"
description: "( Linux中最常见的ls命令的基本格式（有关主目录)"
keywords: "( Linux中最常见的ls命令的基本格式（有关主目录)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678744918338_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

本节开始，我们不会再看到图形界面了，由于对服务器来讲，图形界面会占用更多的系统资源，并且会安装更多的服务、开放更多的端口，这对服务器的稳定性和安全性都有负面影响。虽然，服务器是一个连显示器都没有的家伙，要图形界面干十么？

说到这儿，有好多人会很崩溃。笔者就常常看到责怪Linux是落后于时代的老古董，如同笔者的白头发一样！并且，你们要理解，对服务器来讲，稳定性、可靠性、安全性才是最主要的。而简单易用不是服务器须要考虑的事情，所以学习Linux，这种无趣的命令是必须学习和记忆的内容。

命令提示符登陆系统后，第一眼看见的内容是：

[root@linuxcool~]#

这就是Linux系统的命令提示符。这么，这个提示符的涵义是哪些呢？

(家目录（又称主目录) 是哪些？Linux系统是纯字符界面，用户登入后什么是linux，要有一个初始登陆的位置，这个初始登陆位置就称为用户的家：

用户在自己的家目录中拥有完整权限，所以我们也建议操作实验可以置于家目录中进行。我们切换一下用户所在目录，瞧瞧有哪些疗效。

![linux rpm命令参数_linux命令行参数_linux source 命令参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744918338_0.png)

[root@linuxcool~]#cd/usr/local

[root@linuxcoollocal]#

仔细看，假如切换用户所在目录，这么命令提示符中的会弄成用户当前所在目录的最后一个目录（不显示完整的所在目录/usr/local，只显示最后一个目录local)。

命令的基本格式接出来瞧瞧Linux命令的基本格式:

[root@linuxcool~]#命令[选项][参数]

![linux rpm命令参数_linux命令行参数_linux source 命令参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744918338_1.jpg)

(命令格式中的[]代表可选项，也就是有些命令可以不写选项或参数，也能执行。这么，我们就用Linux中最常见的ls命令来解释一下命令的格式（有关ls命令的具体用法，后续章节会详尽介绍) 。假如依照命令的分类，这么ls命令应当属于目录操作命令。

[root@linuxcool~]#ls

anaconda-ks.cfginstall.loginstall.log.syslog

1)选项的作用ls命令以后不加选项和参数也能执行，不过只能执行最基本的功能，即显示当前目录下的文件名。这么加入一个选项 **linux命令行参数**，会出现哪些结果？

[root@linuxcool~]#Is-l

总药量44

-rw——-.1rootroot12071月1418:18anaconda-ks.cfg

-rw-r--r--.1rootroot247721月1418:17install.log

-rw-r--r--.1rootroot76901月1418:17install.log.syslog

(假如加一个”-l”选项，则可以见到显示的内容显著增多了。”-l”是长格式（longlist) 的意思，也就是显示文件的详尽信息。至于”-l”选项的具体含意，我们稍后再详尽讲解。可以看见选项的作用是调整命令功能。假如没有选项，这么命令只能执行最基本的功能；而一旦有选项，则可以显示愈发丰富的数据。

![linux rpm命令参数_linux source 命令参数_linux命令行参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744918338_2.jpg)

(Linux的选项又分为短格式选项（-l) 和长格式选项（--all）。短格式选项是英语的缩写，用一个负号调用，比如：

[root@linuxcool~]#ls-l

而长格式选项是英语完整词组，通常用两个加号调用，比如：

[root@linuxcool~]#ls--all

通常情况下，短格式选项是长格式选项的简写，也就是一个短格式选项会有对应的长格式选项。其实也有例外linux查看硬件信息，例如ls命令的短格式选项-l就没有对应的长格式选项。所以具体的命令选项可以通过前面我们要学习的帮助命令来进行査询。

![linux rpm命令参数_linux命令行参数_linux source 命令参数](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744918338_3.png)

2)参数的作用参数是命令的操作对象，通常文件、目录、用户和进程等可以作为参数被命令操作。诸如：

[root@linuxcool~]#ls-lanaconda-ks.cfg

-rw——-.1rootroot12071月1418:18anaconda-ks.cfg

然而为何一开始ls命令可以省略参数？那是由于有默认参数。命令通常都须要加入参数，用于指定命令操作的对象是谁。假如可以省略参数，则通常都有默认参数。诸如：

[root@linuxcool~]#ls

anaconda-ks.cfginstall.loginstall.log.syslog

这个ls命令前面没有指定参数，默认参数是当前所在位置，所以会显示当前目录下的文件名。

总结一下：命令的选项用于调整命令功能 **linux命令行参数**，而命令的参数是这个命令的操作对象。
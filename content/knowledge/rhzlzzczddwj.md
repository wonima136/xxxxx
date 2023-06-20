---



title: "如何在Linux中找出最大的文件夹文件和文件夹命令？"
description: "如何在Linux中找出最大的文件夹文件和文件夹命令？"
keywords: "如何在Linux中找出最大的文件夹文件和文件夹命令？"
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

(工作中时常会有查看某个目录下最大的文件的需求。诸如在运维工作中linux软件工程师培训，发觉某个系统或功能不工作了，经排查发觉是服务器空间满了…这么接出来就须要清除一下临时文件或则日志文件，或则其他不须要的文件，这么才会想要查看一下，在某个目录下，究竟那个文件占用空间最大，也就是须要找出最大的文件（或目录) 来。

通常来说，可以使用du，sort和head命令来完成这个工作。例如，在当前目录下查找前10个最大的文件夹，可参考如下命令：

du-h|sort-hr|head-n10

再例如，在当前目录中查找前10个最大的文件和文件夹，参考如下命令：

du-ah|sort-hr|head-n10

一、如何在Linux中找出最大的文件夹

du命令用于获取c盘使用情况，sort命令用于按照需求对数据进行排序，head命令用于显示输入数据的后面部份。

这只是在Linux命令行中获取最大文件和目录的一个命令组合linux 命令，除此以外，也还有其他一些方式来实现相同的疗效。

首先，如果在没有任何选项的情况下，使用这三个命令会发生哪些呢？其输出对你来说可能没有哪些实际好处。

当开始运行那些命令的时侯，除非使用du指定，否则所有操作都是针对当前目录。

不带选项的使用sort命令，其结果常常会出人预料 **linux查找文件夹命令**，例如，100会被觉得大于12，由于它是根据各个数位上的字符排序的，第一位都是1，100的第二位为0，12的第二位为2，而2>0，所以12会排在100后面。

head命令默认会显示前10个条目，按照你想要剖析的目录，可更改其执行参数。

如下所示为不带任何选项的运行示例：

$du|sort|head

100./.local/share/evolution/addressbook

108./.mozilla/firefox/jwqwiz97.default-release/datareporting

112./.local/share/gvfs-metadata

12./.cache/fontconfig

12./.cache/gnome-software/screenshots/112×63

12./.cache/thumbnails/fail

12./.config/dconf

12./.config/evolution

12./.config/gnome-control-center/backgrounds

12./.config/ibus

(回到题外话，下边我们瞧瞧怎样使用合适的选项来达到我们的目的（找到最大的文件) 。

sort命令中，-n选项表示将数组根据数值进行排序，-r选项表示逆序排序，这一般是我们在使用sort命令时所希望的。

(另外，在head中添加-5选项，表示查找前5个条目（而不是默认的10个) ，这依照你的具体需求和期望来决定。

之后，重新运行如下：

$du|sort-nr|head-5

1865396.

1769532./Documents

76552./.cache

64852./.cache/mozilla

64848./.cache/mozilla/firefox

这个结果看上去很多了，那个文件夹最大，一目了然。

du命令的-h选项，可以让列表中文件大小以人类易读的形式显示，如下所示：

$du-h|sort-nr|head-5

980K./.local/share/app-info

976K./.local/share/app-info/xmls

824K./.cache/thumbnails

808K./.cache/thumbnails/large

804K./.local/share/tracker

另外，sort命令也有-h选项如下所示：

$du-h|sort-hr|head-5

1.8G.

1.7G./Documents

75M./.cache

64M./.cache/mozilla/firefox/jwqwiz97.default-release

64M./.cache/mozilla/firefox

二、找到最大的文件

从上述命令的输出结果中，我们可以判别出Documents文件夹中包含了一些较大的文件。并且我们切换到Documents文件夹中，再度运行上述命令，却看不到最大的文件 **linux查找文件夹命令**，如下所示：

$du-h|sort-hr|head-5

1.7G.

这个结果表示，当前目录下.目录中富含1.7G的文件，而且对于我们找到最大的单个文件，却是没有帮助的。

这须要我们在du命令中使用另外一个选项，-a，如下所示：

$du-ah|sort-hr|head-5

1.7G.

1.1G./1gig-file.file

699M./doc.tar

2.9M./photo-of-woman-wearing-turtleneck-top-2777898.jpg

1.4M./semi-opened-laptop-computer-turned-on-on-table-2047905.jpg

END
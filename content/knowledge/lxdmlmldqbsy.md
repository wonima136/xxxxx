---



title: "Linux下的“命令”命令的全部使用方法和用途"
description: "Linux下的“命令”命令的全部使用方法和用途"
keywords: "Linux下的“命令”命令的全部使用方法和用途"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680811350349_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

每一种操作系统都是由成千上万个不同种类的文件所组成的。其中有系统本身自带的文件，用户自己的文件，还有共享文件等等。我们有时侯常常忘掉某份文件置于硬碟中的那个地方。在谷歌的WINDOWS操作系统中要查找一份文件是相当简单的事情，只要在桌面上点击“开始”－“搜索”中能够依照各类形式在本地硬碟上，局域网路，甚至在INTERNET上查找各类文件，文档。

但是使用Linux的用户就没有这么辛运了，在Linux上查找某个文件确实是一件比较麻烦的事情。虽然在Linux中须要我们使用专用的“查找”命令来找寻在硬碟上的文件。Linux下的文件抒发格式十分复杂，不象WINDOWS,DOS下都是统一的AAAAAAA.BBB格式这么便捷查找，在WINDOWS中，只要晓得要查找的文件的文件名或则后缀就十分容易查找到。Linux中查找文件的命令一般为“find”命令，“find”命令能帮助我们在使用,管理Linux的日常事务中便捷的查找出我们须要的文件。对于Linux菜鸟来说，“find”命令也是了解和学习Linux文件特征的方式。由于Linux发行版本繁杂linux 论坛，版本升级很快，在Linux书籍上常常写明某个配置文件的所在位置，常常Linux菜鸟按图索骥还是不能找到。例如说REDHATLinux7.O和REDHATLinux7.1中有些重要的配置文件所在的硬碟位置和文件目录就有了很大的改变，倘若不学会使用“find”命令，这么在成千上万的Linux文件中要找到其中的一个配置文件是相当困难的 **linux查找文件命令**，笔者在没有精通“find”命令之前就吃过这样的苦头。好，下边就详尽为你们介绍强悍的“find”命令的全部使用方式和用途。

![linux查找文件名命令_linux查找文件夹命令_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680811350349_1.png)

通过文件名查找法：

![linux查找文件命令_linux查找文件夹命令_linux查找文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680811350349_2.jpg)

这个方式说上去就和在WINDOWS下查找文件一样容易理解了。假如你把这个文件置于单个的文件夹上面，只要使用常见的“ls”命令能够便捷的查找下来，这么使用“find”命令来查找它就不能给你留下深刻的印象，虽然“find”命令的强悍功能不止这个。假如晓得了某个文件的文件名，而不晓得这个文件放在那个文件夹 **linux查找文件命令**，甚至是层层套嵌的文件夹里。举例说明，假定你忘掉了httpd.conf这个文件在系统的那个目录下，甚至在系统的某个地方也不晓得，则这是可以使用如下命令：

![linux查找文件名命令_linux查找文件命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680811350349_3.png)

find/-namehttpd.conf

![linux查找文件名命令_linux查找文件命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680811350349_4.jpg)

这个命令句型看上去很容易就明白了，就是直接在find旁边写上-namelinux操作系统怎么样，表明要求系统根据文件名查找，最后写上httpd.conf这个目标文件名即可。稍等一会系统会在计算机屏幕上显示出查找结果列表：
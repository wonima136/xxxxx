---



title: "为什么我把Linux命令称为“黑话”呢？|趣谈"
description: "为什么我把Linux命令称为“黑话”呢？|趣谈"
keywords: "为什么我把Linux命令称为“黑话”呢？|趣谈"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![查看linux版本命令_linux查看内核版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_0.jpg)

出处|极客时间《趣谈Linux操作系统》专栏

假如你还没有上手用过Linux，这么学习《趣谈Linux操作系统》，你可能会感深受困扰。由于没有一手的体验，你可能很难将Linux的机制和你的使用行为关联上去。所以这一节，俺们先介绍几个上手Linux的命令，通过这种命令，我们试试先把Linux用上去。

(为何我把Linux命令称为“黑话”呢？如同之前我们介绍的，Linux操作系统有好多功能，我们有好多种方法可以使用这种功能，其中最简单和直接的方法就是命令行（CommandLine) 。命令行就相当于你恳求Linux服务使用的专业术语。干任何事情，第一步就是学会使用正确的术语。这样，Linux作为服务方，能够听的懂。这种术语可不就是“黑话”吗？

Window系统你肯定很熟悉吧？如今，我就顺着你使用Windows的习惯linux运维面试题，来给你介绍相应的Linux命令。

用户与密码

当我们打开一个新系统的时侯，第一件要做的事就是登陆。系统默认有一个Administrator用户，也就是系统管理员，它的权限很大，可以在这个系统上干任何事。Linux里面也有一个类似的用户，我们叫Root。同样，它也具有最高的操作权限。

接出来，你须要输入密码了。密码从哪儿来呢？对于Windows来讲，在你安装操作系统的过程中，会让你设置一下Administrator的密码；对于Linux，Root的密码同样也是在安装过程中设置的。

![查看linux版本 命令_linux查看内核版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_1.png)

对于Windows，你设好以后，可以多次更改这个密码。例如说，我们在控制面板的帐户管理上面就可以完成这个操作。并且对于Linux呢？不好意思，没有那么一个统一的配置中心了。你须要使用命令来完成这件事情。“命令”很好记，passwd，虽然就是password的简称。

```
# passwd
Changing password for user root.
New password:
```

根据这个命令，我们就可以输入新密码啦。

在Windows里，不仅Administrator之外，我们还可以创建一个以自己名子命名的用户。那在Linux里可不可以创建其他用户呢？其实可以了，我们同样须要一个命令useradd。

```
 useradd cliu8
```

执行这个命令 **查看linux版本命令**，一个用户就被创建了。它不会弹出哪些让你输入密码之类的页面，都会直接返回了。由于接出来你须要自己调用passwdcliu8来设置密码，再进行登陆。

在Windows里设置用户的时侯，用户有一个“组”的概念。你可能没注意过，不过我一说名子你恐怕能够想上去了，例如“Adminsitrator组”“Guests组”“PowerUser组”等等。同样，Linux里也是分组的。上面我们创建用户的时侯，没有说加入那个组，于是默认都会创建一个同名的组。

能不能在创建用户的时侯就指定属于那个组呢？我们来试试。我们可以使用-h参数看一下，使用useradd这个命令，有没有相应的选项。

```
[root@deployer ~]# useradd -h
Usage: useradd [options] LOGIN
 useradd -D
 useradd -D [options]

Options:
 -g, --gid GROUP name or ID of the primary group of the new account
```

一看还真有这个选项。之后命令不会用的时侯，就可以通过-h参数看一下，它的意思是help。

假如想看愈发详尽的文档，你可以通过manuseradd获得，细细阅读。

![查看linux版本命令_linux查看内核版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_3.png)

上一节我们说过，Linux里是“命令行+文件”模式。对于用户的管理来说，也是一样的。俺们通过命令创建的用户，虽然是置于/etc/passwd文件里的。这是一个文本文件。我们可以通过cat命令，将上面的内容输出在命令行上。组的信息我们置于/etc/group文件中。

```
# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
......
cliu8:x:1000:1000::/home/cliu8:/bin/bash

# cat /etc/group
root:x:0:
......
cliu8:x:1000:
```

在/etc/passwd文件里，我们可以看见root用户和俺们刚创建的cliu8用户。x的地方应当是密码，密码其实不能放到这儿，不然谁都晓得了。接出来是用户ID和组ID，这和/etc/group上面就对应上了。

/root和/home/cliu8是哪些呢？它们分别是Root用户和cliu8用户的主目录。主目录是用户登入进去后默认的路径。虽然Windows上面也是这样的。当我们打开文件夹浏览器的时侯，右边会有“文档”“图片”“下载”等文件夹，路径在C:Userscliu8下边。要注意，同一台笔记本，不同的用户情况会不一样。

![查看linux版本命令_linux查看内核版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_4.png)

/bin/bash的位置是用于配置登陆后的默认交互命令行的，不像Windows，登陆进去是界面，虽然就是explorer.exe。而Linux登陆后的交互命令行是一个解析脚本的程序，这儿配置的是/bin/bash。

浏览文件

总算登陆进来啦，接出来你可以在文件系统上面随意逛一逛、看一看了。

可以看见，Linux的文件系统和Windows是一样的，都是用文件夹把文件组织上去，产生一个树状的结构。这一点没有哪些差异。只不过在Linux下边，大多数情况，我们须要通过命令行来查看Linux的文件。

虽然在Windows下也有命令行，比如cd就是changedirectory，就是切换目录；cd.表示当前目录；cd…表示上一级目录；使用dir，可以列举当前目录下的文件。Linux基本也是这样，只不过列举当前目录下的文件我们用的是ls，意思是list。

![查看linux版本命令_linux查看内核版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_5.png)

我们常用的是ls-l，也就是用列表的形式列举文件。

```
# ls -l
drwxr-xr-x 6 root root 4096 Oct 20 2017 apt
-rw-r--r-- 1 root root 211 Oct 20 2017 hosts
```

其中第一个数组的第一个字符是文件类型。假如是“-”，表示普通文件；假如是d，就表示目录。其实还有好多种文件类型，俺们前面遇见的时侯再说，你如今先记住我说的这两个就行了。

(第一个数组剩下的9个字符是模式，虽然就是权限位（accesspermissionbits) 。3个一组，每一组rwx表示“读（read）”“写（write）”“执行（execute）”。假如是字母，就说明有这个权限；假如是横线，就是没有这个权限。

这三组分别表示文件所属的用户权限、文件所属的组权限以及其他用户的权限。诸如，里面的事例中，-rw-r–r--就可以翻译为，这是一个普通文件，对于所属用户，可读可写不能执行，对于所属的组，仅仅可读，对于其他用户，也是仅仅可读。假如想改变权限，可以使用命令chmod711hosts。

(第二个数组是硬链接（hardlink) 数量，这个比较复杂，讲文件的时侯我会详尽说。

第三个数组是所属用户，第四个数组是所属组。第五个数组是文件的大小，第六个数组是文件被更改的日期，最后是文件名。可以通过命令chown改变所属用户，chgrp改变所属组。

安装软件

好了，你如今应当会浏览文件夹了，接出来应当做哪些呢？其实是开始安装这些“装机必备”的软件啦！

在Windows下边，在没有类似软件管家的软件之前，我们虽然都是在网上下载installer，之后再进行安装的。

就以我们常常要安装的JDK为反例。应当去哪儿下载呢？为了安全起见，通常去官网比较好。假如你去JDK的官网，它会给你一个这样的列表。

![查看linux版本命令_linux查看内核版本命令_查看linux版本 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_7.jpg)

对于Windows系统，最便捷的方法就是下载exe，也就是安装文件。下载后我们直接双击安装即可。

对于Linux来讲，也是类似的方式，你可以下载rpm或则deb。这个就是Linux下边的安装包。为何有两种呢？由于Linux现今常用的有两大体系，一个是CentOS体系，一个是Ubuntu体系，后者使用rpm，前者使用deb。

在Linux里面，没有双击安装这一说，因而想要安装，我们还得须要命令。CentOS下边使用rpm-ijdk-XXX_linux-x64_bin.rpm进行安装，Ubuntu下边使用dpkg-ijdk-XXX_linux-x64_bin.deb。其中-i就是install的意思。

在Windows下边，控制面板上面有程序管理，我们可以查看目前安装了什么软件，可以删掉那些软件。

![linux查看内核版本命令_查看linux版本 命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_8.png)

在Linux下边，凭着rpm-qa和dpkg-l就可以查看安装的软件列表，-q就是query，a就是all，-l的意思就是list。

假如真的去运行的话，你会发觉这个列表很长很长，很难找到你安装的软件。假如你晓得要安装的软件包含某个关键词，可以用一个挺好用的搜索工具grep。

rpm-qa|grepjdk，这个命令是将列下来的所有软件产生一个输出。|是管线，用于联接两个程序，上面rpm-qa的输出就放进管线上面，之后作为grep的输入，grep将在上面进行搜索带关键词jdk的行，但是输出下来。grep支持正则表达式，因而搜索的时侯很灵活，再加上管线，这是一个很常用的模式。同理dpkg-l|grepjdk也是才能找到的。

假如你不晓得关键词，可以使用rpm-qa|more和rpm-qa|less这两个命令，它们可以将很长的结果分页展示下来。这样你就可以一个个来找了。

我们还是借助管线的机制。more是分页后只能往前翻页，翻到最后一页手动结束返回命令行，less是往后往前都能翻页，须要输入q返回命令行，q就是quit。

假如要删掉，可以用rpm-e和dpkg-r。-e就是erase，-r就是remove。

我们昨天说的都是没有软件管家的情况，后来Windows上有了软件管家，就便捷多了。我们直接搜索一下，之后点击安装就行了。

![查看linux版本 命令_linux查看内核版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_9.png)

![查看linux版本 命令_查看linux版本命令_linux查看内核版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_10.png)

Linux也有自己的软件管家，CentOS下边是yum，Ubuntu下边是apt-get。

你可以依照关键词搜索，比如搜索jdk、yumsearchjdk和apt-cachesearchjdk，可以搜索出好多好多可以安装的jdk版本。假如数量太多，你可以通过管路grep、more、less来进行过滤。

选中一个以后，我们就可以进行安装了。你可以用yuminstalljava-11-openjdk.x86_64和apt-getinstallopenjdk-9-jdk来进行安装。

安装之后，怎么卸载呢？我们可以使用yumerasejava-11-openjdk.x86_64和apt-getpurgeopenjdk-9-jdk。

Windows上的软件管家会有一个统一的服务端，来保存这种软件，并且我们不晓得服务端在那里。而Linux容许我们配置从那里下载这种软件的，地点就在配置文件上面。

对于Centos来讲，配置文件在/etc/yum.repos.d/CentOS-Base.repo里。

```
[base]
name=CentOS-$releasever - Base - 163.com
baseurl=http://mirrors.163.com/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=http://mirrors.163.com/centos/RPM-GPG-KEY-CentOS-7
```

对于Ubuntu来讲，配置文件在/etc/apt/sources.list里。

```
deb http://mirrors.163.com/ubuntu/ xenial main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ xenial-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ xenial-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ xenial-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ xenial-backports main restricted universe multiverse
```

这儿为何都是呢？由于Linux服务器遍及全球，不能都从一个地方下载，最后选一个就近的地方下载，比如在中国，选择，就不用跨越重洋了。

虽然无论是先下载再安装，还是通过软件管家进行安装，都是下载一些文件，之后将这种文件置于某个路径下，之后在相应的配置文件中配置一下。比如，在Windows上面，最终会弄成C:ProgramFiles下边的一个文件夹以及注册表上面的一些配置。对应Linux上面会放的更散一点。诸如，主执行文件会置于/usr/bin或则/usr/sbin下边，其他的库文件会置于/var下边，配置文件会置于/etc下边。

所以虽然还有一种简单粗鲁的方式，就是将安装好的路径之间下载出来，之后解压缩成为一个整的路径。在JDK的安装目录中，Windows有jdk-XXX_Windows-x64_bin.zip，这是Windows下常用的压缩模式。Linux有jdk-XXX_linux-x64_bin.tar.gz，这是Linux下常用的压缩模式。

怎么下载呢？Linux里面有一个工具wget，前面加上链接，能够从网上下载了。

下载出来后，我们就可以进行解压缩了。Windows下可以有winzip之类的压缩解压缩程序，Linux下边默认会有tar程序。假如是解压缩zip包，就须要另行安装。

```
yum install zip.x86_64 unzip.x86_64
apt-get install zip unzip
```

假如是tar.gz这些格式的，通过tarxvzfjdk-XXX_linux-x64_bin.tar.gz就可以解压缩了。

对于Windows上jdk的安装，倘若采取这些下载压缩包的格式，须要在系统设置的环境变量配置上面设置JAVA_HOME和PATH。

![查看linux版本 命令_linux查看内核版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_11.png)

在Linux也是一样的，通过tar解压缩以后，也须要配置环境变量，可以通过export命令来配置。

```
export JAVA_HOME=/root/jdk-XXX_linux-x64
export PATH=$JAVA_HOME/bin:$PATH
```

export命令仅在当前命令行的会话中好使，一旦退出重新登陆进来，就不管用了，有没有一个地方可以像Windows上面可以配置永远好使呢？

在当前用户的默认工作目录，比如/root或则/home/cliu8下边，有一个.bashrc文件，这个文件是以点开头的，这个文件默认看不到，须要ls-la能够看见，a就是all。每次登入的时侯，这个文件就会运行，因此把它放到这儿。这样登陆进来都会手动执行。其实也可以通过source.bashrc自动执行。

要编辑.bashrc文件，可以使用文本编辑器vi，也可以使用愈发友好的vim。假如默认没有安装，可以通过yuminstallvim及apt-getinstallvim进行安装。

vim如同Windows上面的notepad一样，是我们第一个要学会的工具。要不然编辑、查看配置文件，这种操作你都没办法完成。vim是一个很复杂的工具，刚上手的时侯，你只须要记住几个命令就行了。

vimhello，就是打开一个文件，名子叫hello。假如没有这个文件linux系统怎么样，就先创建一个。

我们虽然就相当于打开了一个notepad。假如文件有内容，还会显示下来。联通光标的位置，通过上下左右键就行。假如想要编辑，就把光标联通到相应的位置，输入i，意思是insert。步入编辑模式，可以插入、删除字符，那些都和notepad很像。要想保存编辑的文本，我们使用esc键退出编辑模式，之后输入“:”，之后在“:”后面输入命令w，意思是write，这样就可以保存文本，逗号前面输入q，意思是quit，这样才会退出vim。假如编辑了，还没保存，不想要了，可以输入q!。

好了，把握这种基本够用了，想了解更复杂的，你可以自己去看文档。

通过vim.bashrc，将export的两行加入后，输入:wq，写入而且退出，这样就编辑好了。

运行程序

好了 **查看linux版本命令**，装好了程序，可以运行程序了。

我们都晓得Windows下的程序，假如后缀名是exe，双击就可以运行了。

Linux不是按照后缀名来执行的。它的执行条件是这样的：只要文件有x执行权限，都能到文件所在的目录下，通过./filename运行这个程序。其实，假如置于PATH里设置的路径下边，就不用./了，直接输入文件名就可以运行了，Linux会帮你找。

这是Linux执行程序最常用的一种方法，通过shell在交互命令行上面运行。

这样执行的程序可能须要和用户进行交互，比如容许让用户输入，之后输出结果也复印到交互命令行上。这些方法比较适宜运行一些简单的命令，比如通过date获取当前时间。这些模式的缺点是，一旦当前的交互命令行退出，程序就停止运行了。

这样恐怕不能拿来运行这些须要“永远“在线的程序。譬如说，运行一个博客程序，我总不能老是开着交互命令行，博客才可以提供服务。一旦我要去睡着了，关了命令行，我的博客他人就不能访问了，这样肯定是不行的。

于是，我们就有了Linux运行程序的第二种形式，后台运行。

(这个时侯，我们常常使用nohup命令。这个命令的意思是nohangup（不挂起) ，也就是说，当前交互命令行退出的时侯，程序还要在。

其实这个时侯，程序不能强占交互命令行，而是应当在后台运行。最后加一个&，就表示后台运行。

另外一个要处理的就是输出，原先哪些都复印在交互命令行里，现今在后台运行了，输出到那里呢？输出到文件是最好的。

最终命令的通常方式为nohupcommand>out.file2>&1&。这儿面，“1”表示文件描述符1，表示标准输出，“2”表示文件描述符2，意思是标准错误输出，“2>&1”表示标准输出和错误输出合并了。合并到那里去呢？到out.file里。

那这个进程怎么关掉呢？我们假定启动的程序包含某个关键字，那就可以使用下边的命令。

```
ps -ef |grep 关键字 |awk '{print $2}'|xargs kill -9
```

从这个命令中，我们多少能看出shell的灵活性和精致组合。

其中ps-ef可以单独执行，列举所有正在运行的程序，grep里面我们介绍过了，通过关键字找到俺们刚刚启动的程序。

awk工具可以很灵活地对文本进行处理，这儿的awk'{print$2}’是指第二列的内容，是运行的程序ID。我们可以通过xargs传递给kill-9，也就是发给这个运行的程序一个讯号，让它关掉。假如你已然晓得运行的程序ID，可以直接使用kill关掉运行的程序。

在Windows上面还有一种程序，称为服务。这是系统启动的时侯就在的，我们可以通过控制面板的服务管理启动和关掉它。

![查看linux版本 命令_linux查看内核版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_13.png)

Linux也有相应的服务，这就是程序运行的第三种形式，以服务的形式运行。诸如常用的数据库MySQL，就可以使用这些方法运行。

比如在Ubuntu中，我们可以通过apt-getinstallmysql-server的形式安装MySQL，之后通过命令systemctlstartmysql启动MySQL，通过systemctlenablemysql设置开机启动。之所以成为服务而且还能开机启动，是由于在/lib/systemd/system目录下会创建一个XXX.service的配置文件，上面定义了怎样启动、如何关掉。

在CentOS里有些特殊，MySQL被Oracle竞购后，由于害怕授权问题，改为使用MariaDB，它是MySQL的一个分支。通过命令yuminstallmariadb-servermariadb进行安装，命令systemctlstartmariadb启动，命令systemctlenablemariadb设置开机启动。同理，会在/usr/lib/systemd/system目录下，创建一个XXX.service的配置文件，因而成为一个服务。

systemd的机制非常复杂，这儿俺们不讨论。假如有兴趣，你可以自己查看相关文档。

最后俺们要学习的是怎样死机和重启。这个就很简单啦。shutdown-hnow是现今就死机，reboot就是重启。

总结时刻

好了，把握这种基本命令足够你熟练操作Linux了。假如你是个初学者，这种命令恐怕看上去还是好多。我把昨天这种基本的命令以及对应的操作总结了一下，便捷你操作和查阅。

你不用可以去死记硬背，根据我讲的这个步骤，从设置用户和密码、浏览文件、安装软件，最后到运行程序，自己去操作几遍，再自己整理一遍，手脑并用，加深理解，巩固记忆，疗效可能会更好。

![查看linux版本命令_查看linux版本 命令_linux查看内核版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678975334936_14.jpg)

如今你应当早已学会了安装JDK和MySQL，你可以尝试搭建一个基于Java+MySQL的服务端应用，上手使用一下。
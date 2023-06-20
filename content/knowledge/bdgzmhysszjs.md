---



title: "不懂git，怎么好意思说自己是个优秀的开发人员？"
description: "不懂git，怎么好意思说自己是个优秀的开发人员？"
keywords: "不懂git，怎么好意思说自己是个优秀的开发人员？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux查看svn版本命令_linux 查看 svn 版本命令_linux查看svn版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_0.png)

你若果不懂git，怎样好意思说自己是个优秀的开发人员呢？有些人认为git不就是几个命令吗？而且我们在工作中由于不懂gitlinux主机，却又让自己和整个团队的工作都处于一种低效模式，所以我们除了须要了解git的原理和常见的版本管理问题的解决之道，更要了解基于git的团队协作的工作流程。

现现在我们的所有开发几乎都离不开开源项目，而github又是全球最大的开源项目管理基地，有人俗称其为全球最大的同性爱友网站，这么在这个神奇的网站下是怎样管理开源项目的，我们可以怎样参与开源项目的获取甚至是参与开发当中来呢？

github是开源项目的管理，这么在各大企业里又是怎样管理自己本企业的项目的呢？这就不得不提gitlab了，这么怎么搭建gitlab，怎样进行权限管理，怎样进行项目管理，例如codereview、CI/CD和知识内容管理的呢？

本文上将会得到解答。

1.GIT基础

1.1在Linux上安装Git

安装命令如下：”’sudoapt-getinstallgit”’安装完成后，输入”git--version”查看git版本，假若出现“gitversionx.x.x”证明安装成功。

(正题：老一点的Debian或UbuntuLinux，要把命令改为sudoapt-getinstallgit-core，由于先前有个软件也叫GIT（GNUInteractiveTools) ，结果Git就只能叫git-core了。因为Git名气实在太大，后来就把GNUInteractiveTools改成gnuit，git-core即将改为git。

若果是其他Linux版本，可以直接通过源码安装。先从Git官网下载源码，之后解压，依次输入：./config，make，sudomakeinstall这几个命令安装就好了。

1.2在MacOSX上安装Git

假如你正在使用Mac做开发，有两种安装Git的方式。

一是安装homebrew，之后通过homebrew安装Git，具体方式请参考homebrew的文档：。

第二种方式更简单，也是推荐的方式，就是直接从AppStore安装Xcode，Xcode集成了Git，不过默认没有安装，你须要运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“CommandLineTools”，点“Install”就可以完成安装了。

![linux 查看 svn 版本命令_linux查看svn版本命令_linux查看svn版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_1.jpg)

1.3在Windows上安装Git

话说你们都用windows系统，这么git首先是在linux系统上开发运行的，后来才渐渐移植到windows。

先到git官网的下载页面()下载Git-2.19.1-64-bit.exe，之后安装，安装完成后在桌面上会创建gitbash工具，且假如我们在桌面上点击滑鼠右键，也会在右键菜单中出现“gitguihere”和“gitbashhere”两个菜单项。

1.4配置git环境

当安装完Git应当做的第一件事就是设置你的用户名称与电邮地址。这样做很重要，由于每一个Git的递交就会使用这种信息，但是它会写入到你的每一次递交中，不可修改：

```
$ git config --global user.name "lizhiyong"
$ git config --global user.email lizhiyong4360@gmail.com
```

再度指出，假如使用了--global选项，这么该命令只须要运行一次，由于以后无论你在该系统上做任何事情，Git就会使用这些信息。当你想针对特定项目使用不同的用户名称与电邮地址时，可以在哪个项目目录下运行没有--global选项的命令来配置。

好多GUI工具还会在第一次运行时帮助你配置这种信息。

![linux查看svn版本命令_linux查看svn版本命令_linux 查看 svn 版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_2.gif)

你也可以使用gitconfig--list来查看git的所有配置。

1.5获取帮助

若你使用Git时须要获取帮助，有三种方式可以找到Git命令的使用指南：

```
$ git help
$ git  --help
$ man git-
```

比如，要想获得config命令的指南，执行

```
$ git help config
```

其实，假如你碰到问题也可以查看git的官方文档。

2.GIT常用命令

2.1创建库房

哪些是版本库呢？版本库亦称库房，中文名repository，你可以简单理解成一个目录，这个目录上面的所有文件都可以被Git管理上去，每位文件的更改、删除，Git都能跟踪，便于任何时刻都可以追踪历史，或则在将来某个时刻可以“还原”。

所以 **linux查看svn版本命令**，创建一个版本库极其简单，使用gitinit命令创建一个新的git库房，它拿来将已存在但还没有版本控制的项目转换成一个Git库房，或则创建一个空的新库房。大多数Git命令在未初始化的库房中都是难以使用的，所以这就是你运行新项目的第一个命令了。

(运行gitinit命令会在你项目的根目录下创建一个新的.git目录，其中包含了你项目必需的所有元数据。不仅.git目录之外，早已存在的项目不会被改变（如同SVN一样，Git不强制每位子目录中都有一个.git目录) 。

比如：

```
$ mkdir learngit
$ cd learngit
$ git init
```

pwd命令用于显示当前目录。在我的Mac上，这个库房坐落/Users/michael/learngit。

(假如你使用Windows系统，为了防止遇见各类莫名其妙的问题，请确保目录名（包括父目录) 不包含英文。

![linux 查看 svn 版本命令_linux查看svn版本命令_linux查看svn版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_3.png)

第二步linux 发邮件，通过gitinit命令把这个目录弄成Git可以管理的库房：

```
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

(顿时Git就把库房建好了，并且告诉你是一个空的库房（emptyGitrepository) ，悉心的读者可以发觉当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的，没事千万不要自动更改这个目录上面的文件，不然改乱了，就把Git库房给破坏了。

假如你没有看见.git目录，那是由于这个目录默认是隐藏的，用ls-ah命令就可以看到。

也不一定必须在空目录下创建Git库房，选择一个早已有东西的目录也是可以的。不过，不建议你使用自己正在开发的公司项目来学习Git，否则致使的一切后果概不负责。

创建一个裸库房

先选取一个目录作为Git库房，假设是/srv/sample.git，在/srv目录下输入命令：$sudogitinit--baresample.git使用--bare都会创建一个裸库房，裸库房没有工作区，由于服务器上的Git库房纯粹是为了共享，所以不让用户直接登陆到服务器起来改工作区，但是服务器上的Git库房一般都以.git结尾。之后，把owner改为git：

$sudochown-Rgit:gitsample.git

向非裸库房添加文件

首先这儿再明晰一下，所有的版本控制系统，虽然只能跟踪文本文件的改动，例如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，例如在第5行加了一个词组“Linux”，在第8行删了一个词组“Windows”。而图片、视频这种二补码文件，尽管也能由版本控制系统管理，但无法跟踪文件的变化，只能把二补码文件每次改动串上去，也就是只晓得图片从100KB改成了120KB，但究竟改了啥，版本控制系统不晓得，也无法晓得。

不幸的是，Microsoft的Word格式是二补码格式，因而，版本控制系统是无法跟踪Word文件的改动的，上面我们举的反例只是为了演示，假如要真正使用版本控制系统，就要以纯文本形式编撰文件。

由于文本是有编码的，例如英文有常用的GBK编码，英文有Shift_JIS编码，假如没有历史遗留问题，强烈建议使用标准的UTF-8编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。

使用Windows的童鞋要非常注意：

(千万不要使用Windows自带的记事本编辑任何文本文件。缘由是Microsoft开发记事本的团队使用了一个特别白痴的行为来保存UTF-8编码的文件，她们自作聪明地在每位文件开头添加了0xefbbbf（十六补码) 的字符，你会碰到好多不可思议的问题，例如，网页第一行可能会显示一个“?”，明明正确的程序一编译就报句型错误，等等，都是由记事本的白痴行为带来的。建议你下载Notepad++取代记事本，不但功能强悍，但是免费！记得把Notepad++的默认编码设置为UTF-8withoutBOM即可：

![linux查看svn版本命令_linux查看svn版本命令_linux 查看 svn 版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_4.jpg)

言归正传，如今我们编撰一个readme.txt文件，内容如下：

```
Git is a version control system.
Git is free software.
```

(一定要放在learngit目录下（子目录也行) ，由于这是一个Git库房，放在其他地方Git再厉害也找不到这个文件。

和把小象放在冰柜须要3步相比，把一个文件放在Git库房只须要两步。

第一步，用命令gitadd告诉Git，把文件添加到库房：

```
$ git add readme.txt
```

执行前面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。

第二步，用命令gitcommit告诉Git，把文件递交到库房：

```
$ git commit -m "wrote a readme file"
[master (root-commit) cb926e7] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```

简单解释一下gitcommit命令，-m前面输入的是本次递交的说明，可以输入任意内容，其实最好是有意义的，这样你能够从历史记录里便捷地找到改动记录。

嫌麻烦不想输入-m”xxx”行不行？确实有办法可以如此干，并且强烈不建议你那么干，由于输入说明对自己对他人阅读都很重要。实在不想输入说明的童鞋请自行Google，我不告诉你这个参数。

(gitcommit命令执行成功后会告诉你，1个文件被改动（我们新添加的readme.txt文件) ，插入了两行内容（readme.txt有两行内容）。

为何Git添加文件须要add，commit一共两步呢？由于commit可以一次递交好多文件，所以你可以多次add不同的文件，例如：

```
$ git add file1.txt
$ git add file2.txt file3.txt
$ git commit -m "add 3 files."
```

2.2搭建git服务器

第一步，创建一个git用户，拿来运行git服务：

```
$ sudo adduser git
$ passwd git
$ groupadd git

$ usermod -G git git
```

第二步，创建证书登陆：

首先我们切换到git用户，但是为git用户创建私钥和公钥：

```
$ su git
$ ssh-keygen -t rsa //以rsa的加密方式生成秘钥对
$ cd /home/git/.ssh
$ touch authorized_keys
```

搜集所有须要登陆的用户的私钥，就是她们自己的id_rsa.pub文件，把所有私钥导出到/home/git/.ssh/authorized_keys文件里，一行一个。

第三步，初始化Git库房：

先选取一个目录作为Git库房，假设是/srv/nginx-docs.git，在/srv目录下输入命令：

$sudogitinit--barenginx-docs.gitGit都会创建一个裸库房，裸库房没有工作区，由于服务器上的Git库房纯粹是为了共享，所以不让用户直接登陆到服务器起来改工作区，但是服务器上的Git库房一般都以.git结尾。之后，把owner改为git：

$sudochown-Rgit:gitnginx-docs.git

第四步，禁用shell登陆：

作为服务器管理员，关于SSH还有一点须要考虑，那就是SSH的安全问题。在里面介绍本地合同时，我们说这些方法难以控制用户对Git库房的操作，难以避免用户有意或无意的毁坏Git库房，使用SSH合同一样存在这样的问题，用户能通过SSH拉取和递交代码，也就意味着用户可以通过SSH联接到服务器，对Git库房进行任何操作，这是一件很让人担忧的事情。

因而，我们还须要对git帐号做一些限制。默认情况下，我们新建帐号的登录shell是/bin/bash，这个配置在/etc/passwd文件中：

```
git:x:1000:1000:git,,,:/home/git:/bin/bash
```

可以使用chsh命令更改用户的登录shell，让他不能通过SSH访问服务器，如何更改呢？我们可以看一下/etc/shells文件，这儿定义了所有可以使用的登录shell，你可以将/bin/bash改成这儿的任何一个：

```
root@myserver:~# cat /etc/shells
# /etc/shells: valid login shells
/bin/sh

/bin/dash
/bin/bash
/bin/rbash
```

很其实，这种shell并不是我们想要的，有没有一个shell只容许用户进行git操作，而不容许其他操作呢？还好，Git的软件包提供了一个名叫git-shell的登录shell，我们可以把他加进去，通常情况下坐落/usr/bin/git-shell。我们使用chsh更改git的登录shell：

```
root@myserver:~# chsh git
Changing the login shell for git
Enter the new value, or press ENTER for the default
 Login Shell [/bin/bash]: /usr/bin/git-shell
```

这样当用户git通过SSH联接服务器时，都会直接被拒绝了。

第五步，克隆远程库房：

如今，其它用户可以通过gitclone命令克隆远程库房了，在各自的笔记本上运行：

$gitclonegit@server:/srv/nginx-docs.gitCloninginto’nginx-docs’…warning:Youappeartohaveclonedanemptyrepository.剩下的推送就简单了。

管理私钥假如团队很小，把每位人的私钥搜集上去放在服务器的/home/git/.ssh/authorized_keys文件里就是可行的。假如团队有几百号人，就无法如此玩了，这时，可以用Gitosis来管理私钥。

这儿我们不介绍如何玩Gitosis了，几百号人的团队基本都在500强了，相信找个高水平的Linux管理员问题不大。

(管理权限有好多不但视源代码如生命，并且视职工为逃犯的公司，会在版本控制系统里设置一套建立的权限控制，每位人是否有读写权限会精确到每位分支甚至每位目录下。由于Git是为Linux源代码托管而开发的，所以Git也承继了开源社区的精神，不支持权限控制。不过，由于Git支持钩子（hook) ，所以，可以在服务器端编撰一系列脚本来控制递交等操作，达到权限控制的目的。Gitolite就是这个工具。

这儿我们也不介绍Gitolite了，不要把有限的生命浪费到权限斗争中。

小结搭建Git服务器十分简单，一般10分钟即可完成；

要便捷管理私钥，用Gitosis；

要像SVN那样变态地控制权限 **linux查看svn版本命令**，用Gitolite。

其实有一个比较强悍的工具，gitlab，若果是做正规开发建议你们使用这个集成工具。

未完待续~

git视频教程，后台私信【git】免费获取

视频教程已更新至【处理突发风波】

![linux查看svn版本命令_linux 查看 svn 版本命令_linux查看svn版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677766173373_6.png)
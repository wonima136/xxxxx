---



title: "Linux非常灵活最佳选项，你会如何做呢？"
description: "Linux非常灵活最佳选项，你会如何做呢？"
keywords: "Linux非常灵活最佳选项，你会如何做呢？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675548059474_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![查看linux操作系统版本的命令_linux查看用户信息命令_linux查看文件属性命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675548059474_0.jpg)

有时当你需要移动一个文件时，mv 命令似乎不是最佳选项linux串口驱动，那么你会如何做呢？-- Seth Kenlon

不起眼的mv命令是在你见过的每个 POSIX 系统中都能找到的有用工具之一。它的作用是明确定义的，并且做得很好：将文件从文件系统中的一个位置移动到另一个位置。但是 Linux 非常灵活，还有其他移动文件的办法。使用不同的工具可以完美匹配一些特殊用例，这算一个小优势。

在远离mv之前，先看看这个命令的默认结果。首先，创建一个目录并生成一些权限为 777 的文件：

```
$ mkdir example$ touch example/{foo,bar,baz}$ for i in example/*; do ls /bin > "${i}"; done$ chmod 777 example/*
```

(你可能不会这么认为，但是文件在一个文件系统中作为条目存在，称为索引节点（通常称为 inode) ，你可以使用ls 命令及其--inode选项查看一个文件占用的 inode：

```
$ ls --inode example/foo7476868 example/foo
```

作为测试，将文件从示例目录移动到当前目录，然后查看文件的属性：

```
$ mv example/foo .$ ls -l -G -g --inode7476868 -rwxrwxrwx. 1 29545 Aug  2 07:28 foo
```

![linux查看用户信息命令_linux查看文件属性命令_查看linux操作系统版本的命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675548059474_1.png)

如你所见，原始文件及权限已经被“移动”，但它的 inode 没有变化。

(这就是mv工具用来移动的方式：保持 inode 不变（除非文件被移动到不同的文件系统) ，并保留其所有权和权限。

其他工具提供了不同的选项。

复制和删除

(在某些系统上，移动操作是真的在做移动：比特从文件系统中的某个位置删除并重新分配给另一个位置。这种行为在很大程度上已经失宠。现在，移动操作要么是属性重新分配（inode 现在指向文件组织中的不同位置) ，要么是复制和删除操作的组合。这种设计的哲学意图是确保在移动失败时，文件不会碎片化。

(与mv不同，cp命令会在文件系统中创建一个全新的数据对象，它有一个新的 inode 位置，并取决于 umask。你可以使用cp和rm（如果有的话，或者trash—— LCTT 译注：它是一个命令行回收站工具) 命令来模仿mv命令。

```
$ cp example/foo .$ ls -l -G -g --inode7476869 -rwxrwxr-x. 29545 Aug  2 11:58 foo$ trash example/foo
```

示例中的新foo文件获得了 755 权限，因为此处的 umask 明确排除了写入权限。

```
$ umask0002
```

有关 umask 的更多信息，阅读 Alex Juarez 这篇关于文件权限的文章。

查看和删除

(与复制和删除类似，使用cat（或tac) 命令在创建“移动”文件时分配不同的权限。假设当前目录中是一个没有foo的新测试环境：

```
$ cat example/foo > foo$ ls -l -G -g --inode7476869 -rw-rw-r--. 29545 Aug 8 12:21 foo$ trash example/foo
```

(这次，创建了一个没有事先设置权限的新文件 **linux查看文件属性命令**，所以文件最终权限完全取决于 umask 设置，它不会阻止用户和组的权限位（无论 umask 是什么，都不会为新文件授予可执行权限) ，但它会阻止其他人的写入（值为 2）。所以结果是一个权限是 664 的文件。

Rsync

rsync命令是一个强大的多功能工具，用于在主机和文件系统位置之间发送文件。此命令有许多可用选项，包括使其目标镜像成为源。

![linux查看文件属性命令_linux查看用户信息命令_查看linux操作系统版本的命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675548059474_2.png)

(你可以使用带有--remove-source-files选项的rsync复制，然后删除文件，并可以带上你选择执行同步的任何其他选项（常见的通用选项是--archive) ：

```
$ rsync --archive --remove-source-files example/foo .$ ls examplebar  baz$ ls -lGgi7476870 -rwxrwxrwx. 1 seth users 29545 Aug 8 12:23 foo
```

在这里，你可以看到保留了文件权限和所有权，只是更新了时间戳，并删除了源文件。

(警告：不要将此选项与--delete混淆，后者会从目标目录中删除（源目录中不存在的) 文件。误用--delete会清除很多数据，建议你不要使用此选项，除非是在测试环境中。

你可以覆盖其中一些默认值，更改权限和修改设置：

```
$ rsync --chmod=666 --times     --remove-source-files example/foo .$ ls examplebar  baz$ ls -lGgi7476871 -rw-rw-r--. 1 seth users 29545 Aug 8 12:55 foo
```

这里，目标的 umask 会生效，因此--chmod=666选项会产生一个权限为 644 的文件。

(好处不仅仅是权限，与简单的mv命令相比，rsync命令有很多有用的选项（其中最重要的是--exclude选项，这样你可以在一个大型移动操作中排除某些项目) ，这使它成为一个更强大的工具。例如，要在移动文件集合时排除所有备份文件：

```
$ rsync --chmod=666 --times     --exclude '*~'     --remove-source-files example/foo .
```

使用 install 设置权限

(install命令是一个专门面向开发人员的复制命令，主要是作为软件编译安装例程的一部分调用。它并不为用户所知（我经常想知道为什么它有这么一个直观的名字，而剩下的包管理器却只能使用缩写和昵称) ，但是install实际上是一种将文件放在你想要地方的有用方法。

(install命令有很多选项，包括--backup和--compare命令（以避免更新文件的新副本) 。

与cp和cat命令不同linux教程下载，但与mv完全相同，install命令可以在复制文件的同时而保留其时间戳：

```
$ install --preserve-timestamp example/foo .$ ls -l -G -g --inode7476869 -rwxr-xr-x. 1 29545 Aug  2 07:28 foo$ trash example/foo
```

(在这里，文件被复制到一个新的 inode **linux查看文件属性命令**，但它的 mtime（修改时间) 没有改变。但权限被设置为install的默认值755。

你可以使用install来设置文件的权限，所有者和组：

```
$ install --preserve-timestamp     --owner=skenlon     --group=dialout     --mode=666 example/foo .$ ls -li7476869 -rw-rw-rw-. 1 skenlon dialout 29545 Aug  2 07:28 foo$ trash example/foo
```

移动、复制和删除

文件包含数据，而真正重要的文件包含你的数据。学会聪明地管理它们是很重要的，现在你有了确保以你想要的方式来处理数据的工具包。

你是否有不同的数据管理方式？在评论中告诉我们你的想法。

via:

作者：Seth Kenlon选题：lujun9972译者：MjSeven校对：wxy

本文由LCTT原创编译，Linux中国荣誉推出

：还在看吗？
---



title: "Linux下的ok选项如何避免文件被意外删除，怎么办？"
description: "Linux下的ok选项如何避免文件被意外删除，怎么办？"
keywords: "Linux下的ok选项如何避免文件被意外删除，怎么办？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1682597106423_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

导读

当使用Linux下的find命令时 **linux find 目录 命令**，请使用-ok选项来防止文件被意外删掉，这个选项会在移除任何文件之前就会恳求你的许可。

当使用Linux下的find命令时，请使用-ok选项来防止文件被意外删掉，这个选项会在移除任何文件之前就会恳求你的许可。

![linux下查找文件命令find_linux find 目录 命令_find 命令查找目录](https://www.linuxcool.com/wp-content/uploads/2023/04/1682597106423_0.png)

近来有同学提醒我有一个有用的选项来愈发慎重地运行find命令，它就是-ok。不仅一个重要的区别之外，它的工作方法与-exec相像，它使find命令在执行指定的操作之前恳求权限。

这有一个反例。假如你使用find命令查找文件并删掉它们，你可能使用的是下边的命令：

```
$ find . -name runme -exec rm {} ;
```

在当前目录及其子目录中中任何名为“runme”的文件都将被立刻删掉——当然，你要有权限删掉它们。改用-ok选项常用linux系统，你会听到类似这样的东西，但find命令将在删掉文件之前会恳求权限。回答y代表“yes”将容许find命令继续并挨个删掉文件。

![find 命令查找目录_linux下查找文件命令find_linux find 目录 命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1682597106423_1.jpg)

```
$ find . -name runme -ok rm {} ;
 ?
```

-execdir命令也是一个选择

另一个可以拿来更改find命令行为，并可能使其更可控的选项是-execdir。-exec会运行指定的任何命令，而-execdir则从文件所在的目录运行指定的命令，而不是在运行find`命令的目录运行指定的命令。这是两个它的事例：

```
$ pwd
/home/shs
$ find . -name runme -execdir pwd ;
/home/shs/bin
```

```
$ find . -name runme -execdir ls ;
ls rm runme
```

到现今为止还很好。但要记住的是，-execdir也会在匹配文件的目录中执行该命令。假如运行下边的命令，但是目录包含一个名为“ls”的文件，这么虽然该文件没有执行权限，它也将运行该文件。使用-exec或-execdir类似于通过source来运行命令。

```
$ find . -name runme -execdir ls ;
Running the /home/shs/bin/ls file
```

```
$ find . -name runme -execdir rm {} ;
This is an imposter rm command
```

```
$ ls -l bin
total 12
-r-x------ 1 shs shs 25 Oct 13 18:12 ls
-rwxr-x--- 1 shs shs 36 Oct 13 18:29 rm
-rw-rw-r-- 1 shs shs 28 Oct 13 18:55 runme
```

```
cat bin/ls
echo Running the $0 file
$ cat bin/rm
echo This is an imposter rm command
```

-okdir选项也会恳求权限

要更慎重，可以使用-okdir选项。类似-ok什么是linux，该选项将恳求权限来运行该命令。

```
$ find . -name runme -okdir rm {} ;
 ?
```

你也可以当心地指定你想用的命令的完整路径，以防止像前面那样的冒牌命令出现的任何问题。

```
$ find . -name runme -execdir /bin/rm {} ;
```

find命令不仅默认复印之外还有很多选项，有些可以使你的文件搜索更精确 **linux find 目录 命令**，但慎重一点总是好的。

原文来自：
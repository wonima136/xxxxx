---



title: "( （Linux基础教程) 五条findfindfind使用实例解析"
description: "( （Linux基础教程) 五条findfindfind使用实例解析"
keywords: "( （Linux基础教程) 五条findfindfind使用实例解析"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678831317579_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

使用笔记本的时侯 **linux查找文件夹命令**，常常须要查找文件。在Linux中redhat linux 9.0下载，有好多方式可以做到这一点。下边给你们总结五条命令。

1.find

find是最常见和最强悍的查找命令，你可以用它找到任何你想找的文件。

find的使用格式如下：

```bash
$ find <指定目录> <指定条件> <指定动作>
```

-：所要搜索的目录及其所有子目录。默认为当前目录。

-：所要搜索的文件的特点。

![linux查找文件夹命令_linux查找历史命令_linux查找一个命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678831317579_0.png)

-：对搜索结果进行特定的处理。

(假如哪些参数也不加，find默认搜索当前目录及其子目录，但是不过滤任何结果（也就是返回所有文件) ，将它们全都显示在屏幕上。

find的使用实例：

```bash
$ find . -name 'my*'
```

(搜索当前目录（含子目录，以下同) 中，所有文件名以my开头的文件。

```bash
$ find . -name 'my*' -ls
```

搜索当前目录中，所有文件名以my开头的文件，并显示它们的详尽信息。

![linux查找一个命令_linux查找历史命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678831317579_1.png)

```bash
$ find . -type f -mmin -10
```

搜索当前目录中，所有过去10分钟中更新过的普通文件。倘若不加-typef参数，则搜索普通文件+特殊文件+目录。

2.locate

(locate命令虽然是”find-name”的另一种写法，而且要比前者快得多，缘由在于它不搜索具体目录，而是搜索一个数据库（/var/lib/locatedb) ，这个数据库中富含本地所有文件信息。Linux系统手动创建这个数据库，但是每晚手动更新一次，所以使用locate命令查不到最新变动过的文件。为了防止这些情况，可以在使用locate之前，先使用updatedb命令，自动更新数据库。

locate命令的使用实例：

```bash
$ locate /etc/sh
```

搜索etc目录下所有以sh开头的文件。

```bash
$ locate ~/m
```

搜索用房主目录下，所有以m开头的文件。

```bash
$ locate -i ~/m
```

搜索用房主目录下，所有以m开头的文件，但是忽视大小写。

3.whereis

(whereis命令只能用于程序名的搜索，并且只搜索二补码文件（参数-b) 、man说明文件（参数-m）和源代码文件（参数-s）。假如省略参数linux视频教程，则返回所有信息。

whereis命令的使用实例：

```bash
$ whereis grep
```

4.which

which命令的作用是，在PATH变量指定的路径中，搜索某个系统命令的位置，但是返回第一个搜索结果。也就是说，使用which命令，就可以看见某个系统命令是否存在，以及执行的究竟是哪一个位置的命令。

which命令的使用实例：

```bash
$ which grep
```

5.type

type命令虽然不能算查找命令，它是拿来分辨某个命令究竟是由shell自带的，还是由shell外部的独立二补码文件提供的。假如一个命令是外部命令，这么使用-p参数，会显示该命令的路径，相当于which命令。

type命令的使用实例：

```bash
$ type cd
```

(系统会提示，cd是shell的自带命令（build-in) 。

```bash
$ type grep
```

系统会提示，grep是一个外部命令，并显示该命令的路径。

```bash
$ type -p grep
```

加上-p参数后 **linux查找文件夹命令**，就相当于which命令。

原文链接：
---



title: "在命令间插入特定的符号来实现的应用方法介绍"
description: "在命令间插入特定的符号来实现的应用方法介绍"
keywords: "在命令间插入特定的符号来实现的应用方法介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680005138753_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

导读

Shell输出重定向通常通过在命令间插入特定的符号来实现。

Shell输出重定向通常通过在命令间插入特定的符号来实现。非常的，这种符号的句型如下所示:

![linux命令windows命令_linux top命令输出_linux输出重定向命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680005138753_0.png)

```
command1 > file1
```

前面这个命令执行command1之后将输出的内容存入file1。

![linux命令windows命令_linux top命令输出_linux输出重定向命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680005138753_1.png)

注意任何file1内的早已存在的内容将被新内容代替。倘若要将新内容添加在文件末尾linux操作系统界面，请使用>>操作符。

实例

执行下边的who命令 **linux输出重定向命令**，它将命令的完整的输出重定向在用户文件中(users):

```
$ who > users
```

(执行后，并没有在终端输出信息，这是由于输出已被从默认的标准输出设备（终端) 重定向到指定的文件。

你可以使用cat命令查看文件内容：

```
$ cat users
_mbsetupuser console  Oct 31 17:35
tianqixin    console  Oct 31 17:35
tianqixin    ttys000  Dec  1 11:33
```

输出重定向会覆盖文件内容，请看下边的事例：

```
$ echo "菜鸟教程：www.runoob.com" > users
$ cat users
菜鸟教程：www.runoob.com
$
```

若果不希望文件内容被覆盖 **linux输出重定向命令**，可以使用>>追加到文件末尾linux运维招聘，比如：

```
$ echo "菜鸟教程：www.runoob.com" >> users
$ cat users
菜鸟教程：www.runoob.com
菜鸟教程：www.runoob.com
$
输入重定向
```
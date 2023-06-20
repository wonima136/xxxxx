---



title: "Linux命令行上的101个命令–打印工作目录"
description: "Linux命令行上的101个命令–打印工作目录"
keywords: "Linux命令行上的101个命令–打印工作目录"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![史上最全的linux命令大全_linux命令大全 上一级_linux命令大全hds](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_0.jpg)

(在Linux命令行上操作时，很容易迷失方向，这可能会导致灾难性的后果。在意识到我早已联通了我的计算机的引导目录之前，我以前发出过一个删掉命令。我学会了使用pwd命令来确切地晓得我在文件系统的那个部份（现今，有一些命令项目，例如trashyandtrash-cli，它们在删掉文件时充当中间体) 。

当我刚接触Linux时 **linux命令大全 上一级**，我的椅子上挂着一张备忘单，以帮助我在管理Linux服务器时记住那些命令。它被称为Linux备忘单的101个命令。随着我对那些命令越来越熟悉，我也越来越精通服务器管理。

以下是我觉得最有用的12个Linux命令。

(1.复印工作目录（pwd) 

该pwd命令复印您的工作目录。换句话说，它输出您当前正在使用的目录的路径。有两个选项：--logical使用任何符号链接显示您的位置，以及--physical在解析任何符号链接后显示您的位置。

(2.制做目录（mkdir) 

mkdir使用该命令可以轻松创建目录。以下命令创建一个名为exampleunless的目录linux虚拟机，除非example已存在：

```
$ mkdir example
```

您可以在目录中创建目录：

![linux命令大全 上一级_linux命令大全hds_史上最全的linux命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_1.png)

```
$ mkdir -p example/one/two
```

假如目录example和one早已存在，则只two创建目录。假如它们都不存在，则创建三个嵌套目录。

(3.列表（ls) 

来自MS-DOS，我习惯于使用dir命令列举文件。我不记得当时在Linux上工作过，虽然明天dir在GNUCoreUtilities包中。大多数人使用该ls命令来显示文件及其所有属性都在一个目录中。该ls命令有许多选项 **linux命令大全 上一级**，包括-l查看文件的长列表、显示文件所有者和权限。

(4.修改目录（cd) 

常常须要修改目录。这就是cd命令的作用。诸如，此示例将您从主目录带入Documents目录：

```
$ cd Documents
```

cd~您可以使用或仅cd在大多数系统上快速切换到您的主目录。您可以使用cd..向下联通一个级别。

(5.删掉文件（rm) 

![linux命令大全 上一级_linux命令大全hds_史上最全的linux命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_2.png)

删掉文件本质上是危险的。传统上，Linux终端没有像桌面那样的Trash或Bin，因而许多终端用户有永久删掉她们觉得不再须要的数据的坏习惯。并且linux定时器，没有“取消删掉”命令，因而倘若您不留神删掉了包含重要数据的目录，这些习惯可能会形成问题。

Linux系统提供rm和shred用于数据删掉。要删掉文件example.txt，请键入以下内容：

```
$ rm example.txt
```

(然而，安装垃圾命令（比如trashy或) 要安全得多trash-cli。之后，您可以将文件发送到暂存区，之后永久删掉它们：

```
$ trash example.txt
```

(6.复制文件（cp) 

使用命令复制文件cp。句型是从这儿复制到哪里。这是一个反例：

```
$ cp file1.txt newfile1.txt
```

您也可以复制整个目录：

![linux命令大全 上一级_linux命令大全hds_史上最全的linux命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_3.png)

```
$ cp -r dir1 newdirectory
```

(7.联通和重命名文件（mv) 

重命名和联通文件在功能上是相同的过程。当您联通一个文件时，您从一个目录中取出一个文件并将其装入一个新目录中。重命名文件时，您从一个目录中取出一个文件并将其放回同一目录或不同目录，但使用新名称。无论哪种方法，您都使用以下mv命令：

```
$ mv file1.txt file_001.txt
```

(8.创建一个空文件（touch) 

使用以下命令轻松创建一个空文件touch：

```
$ touch one.txt
$ touch two.txt
$ touch three.md
```

(9.修改权限（chmod) 

使用命令修改文件的权限chmod。最常见的用途之一chmod是使文件可执行：

![linux命令大全hds_linux命令大全 上一级_史上最全的linux命令大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_4.jpg)

```
$ chmod +x myfile
```

此示例是您怎么授予文件权限以作为命令执行。这对于脚本非常便捷。试试这个简单的练习：

```
$ echo 'echo Hello $USER' > hello.sh
$ chmod +x hello.sh
$ 。/hello.sh你好
，唐
```

(10.提高权限（sudo) 

(在管理您的系统时，可能须要充当超级用户（亦称为root) 。这就是sudo（或超级用户do）命令的用武之地。假定您正在尝试执行计算机提醒您只有管理员（或root）用户可以执行的操作，只需在命令后面加上sudo：

```
$ touch / etc / os-release && echo "Success"
touch: cannot touch '/etc/os-release' : 权限被拒绝
$ sudo touch / etc / os-release && echo "Success"
成功
```

(11.死机（poweroff) 

该poweroff命令的作用与听上去完全一样：它会关掉您的计算机。它须要sudo成功。

(实际上有好多方式可以关掉您的计算机，但是该过程有一些变化。比如，该shutdown命令准许您在任意时间（比如60秒) 后关掉计算机：

![linux命令大全 上一级_史上最全的linux命令大全_linux命令大全hds](https://www.linuxcool.com/wp-content/uploads/2023/05/1685304315834_5.png)

```
$ sudo shutdown -h 60
```

或立刻：

```
$ sudo shutdown -h now
```

您也可以使用sudoshutdown-rnow或仅重新启动计算机reboot。

(12.阅读指南（man) 

该man命令可能是所有命令中最重要的。它使您可以访问Linux系统上每位命令的文档。比如，要阅读更多关于mkdir：

```
$ man mkdir
```

(一个相关的命令是info，它提供了一组不同的指南（只要它们可用) ，一般比一般简约的指南页写得更繁琐。

你最喜欢的Linux命令是哪些？

Linux系统上还有更多的命令——数百个！你最喜欢的命令是哪些，你发觉自己一次又一次地使用这个命令？
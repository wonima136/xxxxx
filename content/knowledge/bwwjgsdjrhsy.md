---



title: "本文我将告诉大家如何使用Zip命令进行本地提权"
description: "本文我将告诉大家如何使用Zip命令进行本地提权"
keywords: "本文我将告诉大家如何使用Zip命令进行本地提权"
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

本文我将告诉你们怎么使用Zip命令进行本地加壳。Zip是一个简单的基于平台的文件打包和压缩实用程序，适用于类Unix系统，如Linux，Windows等。

ZIP简介

Zip是一个实用的文件打包和压缩程序，通过压缩文件和目录它可以帮助我们打包许多分发文件，归档文件和c盘储存。你可以将整个目录结构打包到单个命令zip存档中。对于文本文件，2:1到3:1是常见的压缩比。而不仅这最基本的解压缩功能外，虽然我们还可以借助Zip命令进行本地加壳。在即将开始之前，让我们先来了解下在Linux中Zip命令的作用。

使用ZIP命令执行的主要操作

首先，我们将运行zip-h命令，查看帮助；它会告诉你zip命令中可用的所有选项 **linux压缩文件命令zip**，如下所示。

```
zip -h

所以，我们的第一步是创建一个目录。我们先创建一个名称为Ignite的目录，之后再使用touch命令创建一些文本文件。
可以看见，我在此文件夹Ignite中创建了文件名为file1.txt，file2.txt，file3.txt的三个文本文件。如今我将压缩file1.txt和file3.txtlinux安全加固，并将该压缩文件命名为file.zip。
完成此步骤后，我们使用ls-la命令复查文件列表。

使用-d选项删掉
-d选项-从zip文件中删掉该文件。生成zip文件后，你可以使用-d选项从存档中删掉该文件。我们使用-d命令从zip文件中删掉file3.txt。首先，我们须要指定要从中删掉文件的zip文件名。

zip -d file.zip file3.txt

使用-u选项更新
可以看见file3.txt已从file.zip中删掉。如今，我们要更新zip文件并将文本文件直接添加到zip文件中，我们须要用到-u选项

zip -u file.zip file2.txt

(通过执行以上命令，你会注意到file2.txt被直接添加到了zip文件中（即file.zip) 。
使用-m选项联通多个文件
如今鸟哥的linux私房菜，让我们先在名为Ignite的文件中创建几个不同扩充名的文件。正如你所看见的，我创建了两个txt文件，两个pdf文件以及两个jpg文件。假如你想在zip文件中联通那些不同扩充名的文件，就须要使用-m选项。你可以通过执行以下命令来联通zip文件中的所有文本文件。

zip -m 1.zip *.txt

你可以通过ls-la检测所有文本文件是否已被联通到zip文件中。如今，让我们尝试把pdf和jpg文件联通到1.zip文件中。

使用zip执行系统命令
你可能还没有想过，或许我们可以使用zip文件来运行任何的Linux命令。首先，使用touch命令创建一个名为raj.txt的文本文件。如今，让我们尝试通过zip命令执行Linux命令。运行以下命令和zip文件，我们将获取输出结果。

zip 1.zip raj.txt -T --unzip-command="sh -c ifconfig"

可以看见，我们已成功通过zip命令执行了系统命令。

借助zip加壳
当以更高权限运行时，zip的行为将会发生改变。假定系统管理员已授予本地用户sudo运行zip的权限。一旦系统被侵入则很有可能造成加壳。所以这儿我们将把测试用户放到sudoers文件中，这样测试用户能够以sudo用户身分以root权限来运行zip命令了。

如今想像一下，我们可以通过使用zip程序获得被害者PC的Privilegeshell吗？让我们来试试看。首先，访问kali的终端并将ubuntu与ssh联接，如下所示：

ssh test@192.168.1.108

可以看见，我们已成功通过ssh构建联接。

如今linux压缩文件命令zip，我们将运行sudo-l命令来检测sudo文件的条目列表，它们是sudoers文件的成员。在列表中，我们可以见到test是sudoers文件的成员，而且可以使用root权限运行zip程序。
首先，我们使用touch命令创建一个文件，我们已创建了一个raj.txt文件，如今我们通过zip文件压缩raj.txt文件，并执行一个获取shell的命令。如下：

sudo zip 1.zip raj.txt -T --unzip-command="sh -c /bin/bash"

可以看见，我们早已通过zip命令成功获取到了被害者机器的shell。
*参考来源：hackingarticles，FB小编secist编译，转载请标明来自FreeBuf.COM
```
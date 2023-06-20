---



title: "Linux安装rar命令：压缩解压神器，操作简单！"
description: "Linux安装rar命令：压缩解压神器，操作简单！"
keywords: "Linux安装rar命令：压缩解压神器，操作简单！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678744983967_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，rar是一种经常使用的压缩格式，但是默认情况下Linux并不支持rar格式的解压和压缩。那么如何在Linux系统中安装并使用rar命令呢？本文将为您详细介绍。

1.确认系统是否安装unrar

在安装rar之前，我们需要确认系统是否已经安装了unrar。unrar是一个解压缩RAR文件的工具，如果已经安装了unrar，则可以直接使用unrar命令来解压RAR文件。

我们可以通过以下命令来检查系统是否已经安装了unrar：

```
bash
which unrar
```

如果该命令返回结果，则表示系统已经安装了unrar。如果未返回结果，则需要先安装unrar **linux 安装rar 命令**，具体操作请参考第2步。

2.安装unrar

![linux解压缩命令rar_linux 安装rar 命令_linux rar命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744983967_0.jpg)

我们可以通过以下命令来安装unrar：

```
bash
sudo apt-get install unrar
```

如果您使用的是其他Linux发行版，请根据其官方文档进行相应操作。

3.下载并安装RAR软件

我们可以从RAR官网上下载相应版本的RAR软件。下载完成后，可以将其解压到任意目录下。然后进入该目录 **linux 安装rar 命令** redhat linux 下载，执行以下命令进行安装：

![linux 安装rar 命令_linux解压缩命令rar_linux rar命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744983967_1.png)

```
bash
sudo make install
```

4.验证RAR是否成功安装

执行以下命令来验证RAR是否成功安装：

```
bash
which rar
```

如果该命令返回结果，则表示RAR已经成功安装。

5.使用RAR进行压缩和解压缩

使用RAR进行压缩和解压缩非常简单。以下是一些常用的RAR命令示例：

-解压缩RAR文件：

```
bash
unrar x filename.rar
```

-压缩文件或目录：

```
bash
rar a filename.rar file1 file2 dir1/ dir2/
```

-查看RAR文件内容列表：

```
bash
rar l filename.rar
```

-删除RAR文件中指定文件：

```
bash
rar d filename.rar file1 file2
```

![linux 安装rar 命令_linux解压缩命令rar_linux rar命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678744983967_2.png)

-添加密码保护：

```
bash
rar a -p password filename.rar file1 file2 dir1/ dir2/
```

6.使用7-Zip替代RAR

如果您不想使用RAR，也可以选择使用7-Zip进行压缩和解压缩。7-Zip是一个免费开源的跨平台文件归档器，支持多种格式的文件压缩和解压缩，包括RAR、ZIP、TAR等。

您可以通过以下命令来安装7-Zip：

```
bash
sudo apt-get install p7zip-full p7zip-rar
```

7.总结

本文介绍了在Linux系统中安装和使用RAR命令的方法linux文本编辑器，并提供了一些常用的RAR命令示例。此外，我们还介绍了7-Zip作为替代方案的方法。希望本文能够帮助您更好地处理各种类型的归档文件。
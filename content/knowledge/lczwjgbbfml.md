---



title: "Linux查找文件：9个必备Find命令"
description: "Linux查找文件：9个必备Find命令"
keywords: "Linux查找文件：9个必备Find命令"
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

Linux Find命令是Linux系统中最常用的命令之一，它可以帮助用户快速地查找并定位文件。本文将从以下9个方面详细介绍Linux Find命令。

1.查找当前目录下的文件

在Linux系统中，我们可以使用“.”来表示当前目录。因此，如果您需要查找当前目录下的所有文件，只需在终端中输入以下命令：

```
find .-type f
```

这个命令将会列出当前目录下的所有文件。

2.查找特定类型的文件

如果您只需要查找特定类型的文件，比如说PDF文件 **linux find查找文件命令**，可以使用以下命令：

```
find .-type f -name "*.pdf"
```

这个命令将会列出当前目录下所有后缀名为.pdf的文件。

3.查找特定大小的文件

如果您需要查找特定大小的文件，可以使用以下命令：

```
find .-type f -size +10M
```

这个命令将会列出大于10兆字节的所有文件。

4.查找修改时间在一定范围内的文件

如果您需要查找修改时间在一定范围内的文件，可以使用以下命令：

```
find .-type f -mtime +7-mtime -14
```

这个命令将会列出修改时间在7到14天之间的所有文件。

5.查找某个用户创建或修改过的文件

如果您需要查找某个用户创建或修改过的文件，可以使用以下命令：

```
find .-type f -user username
```

这个命令将会列出由指定用户创建或修改过的所有文件。

6.在某个目录下递归查找

如果您需要在某个目录以及其子目录中递归查找某个类型的文件，可以使用以下命令：

```
find /path/to/directory -type f -name "*.txt"
```

这个命令将会递归地查找/path/to/directory目录以及其子目录中所有后缀名为.txt的文件。

7.执行对查找到的结果进行操作

如果您需要对查找到的结果进行操作 **linux find查找文件命令**，比如说删除、移动等操作，可以使用以下命令：

```
find .-type f -name "*.log"-exec rm {};
```

这个命令将会删除当前目录下所有后缀名为.log的文件。

8.将查找结果保存到文本文件中

如果您需要将查找结果保存到文本文件中，可以使用以下命令：

```
find .-type f > result.txt
```

这个命令将会把当前目录下所有文件路径保存到result.txt文本文件中。

9.结合其他Linux命令进行操作

最后，在实际应用中，我们通常需要结合其他Linux命令进行操作。比如说linux软件工程师，我们可以结合grep和awk来对查找结果进行进一步处理：

```
find /path/to/directory/-name "*.txt"| xargs grep "keyword"| awk '{print $1}'
```

这个命令将会递归地查找/path/to/directory/目录以及其子目录中所有后缀名为.txtlinux 输入法，并包含关键词“keyword”的行，并输出匹配行所在文件路径和行号。

通过以上九个方面对Linux Find进行详细介绍，相信读者已经掌握了该工具基本用法，并能够熟练地运用它来定位你所需寻求解决答案。
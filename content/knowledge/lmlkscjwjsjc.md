---



title: "Linux touch命令：快速创建文件时间戳的方法"
description: "Linux touch命令：快速创建文件时间戳的方法"
keywords: "Linux touch命令：快速创建文件时间戳的方法"
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

Linux touch命令是一个强大的工具，可以让你轻松管理文件的时间戳。本文将深入探讨touch命令的各个方面，包括如何使用touch命令来更改文件的时间戳、如何使用touch命令创建新文件、如何使用touch命令批量更改文件时间戳等。

1. touch命令简介

touch命令是一个基于Unix和Linux系统的标准命令，用于更改文件的时间戳以及创建新文件。如果指定的文件不存在，则会创建一个新文件。如果指定的文件已经存在，则会更新该文件的修改时间和访问时间。Touch命令还可以用于批量更改多个文件的时间戳。

2.更改文件时间戳

要更改单个文件的时间戳，请使用touch命令linux常用命令，并提供要更改的文件名作为参数。例如，要将“file.txt”的修改和访问时间设置为当前日期和时间，请运行以下命令：

```
$ touch file.txt
```

如果您想将“file.txt”的修改和访问时间设置为特定日期和时间 **linux touch命令**，请使用下面的语法：

```
$ touch -t[[CC]YY]MMDDhhmm[.SS] file.txt
```

例如linux常用命令，要将“file.txt”的修改和访问时间设置为2023年3月19日上午9点30分，请运行以下命令：

```
$ touch -t 2 file.txt
```

3.创建新文件

要使用touch命令创建新文件，请提供一个新文件名作为参数。例如，要创建名为“newfile.txt”的新文本文档，请运行以下命令：

```
$ touch newfile.txt
```

4.批量更改多个文件的时间戳

要批量更改多个文件的时间戳，请使用通配符来匹配所有要更改时间戳的文件，并将它们作为参数传递给touch命令。例如，要更改所有以“.txt”结尾的文本文档的修改和访问时间，请运行以下命令：

```
$ touch *.txt
```

5.更改只读属性

(有时候您可能会遇到需要更改只读属性以便进行编辑或删除某些特定目录中某些特定类型的所有内容。在这种情况下，您可以使用chmod +w（写入权限) 来解决此问题。

6.更改所有者和组

(如果您想更改特定目录中所有内容（包括子目录) 所有者或组，则可以使用chown或chgrp。

7.更改默认日期格式

(默认情况下，touch命令使用系统日期格式（通常为YYYY-MM-DD) 。如果您想更改日期格式，则可以在执行touch之前设置环境变量LC_TIME。

8.按照指定格式输出日期

(有时您可能希望按照特定格式输出日期（例如：19-Mar-2023) 。在这种情况下 **linux touch命令**，您可以使用date命令生成所需格式，并将其传递给touch命令。例如，要将“file.txt”的修改和访问时间设置为当前日期并以“19-Mar-2023”格式显示，请运行以下命令：

```
$ touch -t$(date +%Y%m%d%H%M.%S) file.txt
```

9.总结

本文深入介绍了Linux touch命令，并提供了各种实用技巧。通过这些技巧，您可以轻松地管理您的系统中大量不同类型的文档，并确保它们始终保持最新状态。无论是作为专业人士还是普通用户，都应该掌握这些技巧以提高自己在Linux系统上工作效率。
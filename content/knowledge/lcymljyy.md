---



title: "「Linux find xargs」常用命令及应用"
description: "「Linux find xargs」常用命令及应用"
keywords: "「Linux find xargs」常用命令及应用"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684671083415_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，文件搜索是常见的操作。而find命令和xargs命令则可以帮助我们更加高效地完成这项任务。本文将介绍这两个强大的命令 **linux find命令 xargs**，并探讨它们的使用技巧以及常见应用场景。

一、find命令简介

find命令是Linux系统下最常用的文件搜索工具之一。它可以根据指定的条件在指定目录下查找文件，并对这些文件执行某些操作。find命令有着丰富的选项和参数，可以满足不同场景下的需求。

二、使用find命令查找文件

1.根据文件名查找

要根据文件名查找文件，可以使用以下命令：

```
find /path/to/search -name "filename"
```

其中 **linux find命令 xargs**，/path/to/search是要搜索的目录路径，filename是要查找的文件名。例如，要在当前目录下查找名为test.txt的文件，可以运行以下命令：

```
find ./-name "test.txt"
```

2.根据文件类型查找

![linux find命令 xargs_linux查找文件命令find_linux命令 find](https://www.linuxcool.com/wp-content/uploads/2023/05/1684671083415_0.jpg)

除了根据文件名查找外，还可以根据文件类型来查找文件。以下是几个常见的选项：

--type f：查找普通文件

--type d：查找目录

--type l：查找符号链接

--type b：查找块设备文件

--type c：查找字符设备文件

例如linux计划任务，要在当前目录下查找所有的目录，可以运行以下命令：

```
find ./-type d
```

3.根据文件大小查找

有时候需要按照文件大小来查找文件。以下是几个常见的选项：

--size n：查找大小为n个512字节块的文件

--size +n：查找大小大于n个512字节块的文件

--size -n：查找大小小于n个512字节块的文件

例如，要在当前目录下查找大小大于1MB的文件，可以运行以下命令：

```
find ./-size +1000k
```

4.根据修改时间查找

![linux命令 find_linux查找文件命令find_linux find命令 xargs](https://www.linuxcool.com/wp-content/uploads/2023/05/1684671083415_1.jpg)

还可以根据修改时间来查找文件。以下是几个常见的选项：

--mtime n：查找n天前被修改过的文件

--mtime +n：查找n天前或更早被修改过的文件

--mtime -n：查找n天内被修改过的文件

例如linux操作系统怎么样，要在当前目录下查找最近7天内被修改过的文件，可以运行以下命令：

```
find ./-mtime -7
```

三、xargs命令简介

xargs命令是一个非常实用的工具，它可以将标准输入转换为命令行参数。这意味着我们可以使用xargs命令将find命令返回的文件列表作为参数传递给其他命令。

![linux find命令 xargs_linux命令 find_linux查找文件命令find](https://www.linuxcool.com/wp-content/uploads/2023/05/1684671083415_2.png)

四、使用xargs命令处理find命令的输出

1.删除匹配的文件

以下命令可以删除当前目录及其子目录下所有扩展名为txt的文件：

```
find ./-name "*.txt"| xargs rm -f
```

2.统计匹配文件的行数

以下命令可以统计当前目录及其子目录下所有扩展名为txt的文件中包含指定字符串的行数：

```
find ./-name "*.txt"| xargs grep "string"-c
```

3.修改匹配文件的权限

以下命令可以将当前目录及其子目录下所有扩展名为sh的脚本文件修改为可执行权限：

```
find ./-name "*.sh"| xargs chmod +x
```

4.打印匹配文件列表

以下命令可以打印当前目录及其子目录下所有扩展名为txt的文件列表：

```
find ./-name "*.txt"| xargs echo
```

五、总结

本文介绍了Linux系统下最强大的搜索工具——find命令和xargs命令。通过使用它们，我们可以更加高效地完成文件搜索和处理任务。在实际应用中，我们还可以根据自己的需求灵活运用它们，以提高工作效率。

六、参考链接

-- find命令手册：

-- xargs命令手册：
---



title: "Linux新建文件夹命令攻略"
description: "Linux新建文件夹命令攻略"
keywords: "Linux新建文件夹命令攻略"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683230947911_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，新建文件夹是一个经常使用到的操作。无论是初学者还是经验丰富的用户，都需要掌握这个基本技能。本文将为大家详细介绍Linux新建文件夹命令，帮助大家轻松创建自己的文件夹。

一、什么是Linux新建文件夹命令？

Linux新建文件夹命令是指在Linux系统中创建新的目录或文件夹的命令。在Linux系统中，一切文件和目录都被视为一个节点。每个节点都可以包含其他节点或文件，形成一个层次结构。

二、如何使用Linux新建文件夹命令？

1.使用mkdir命令创建新目录

mkdir命令用于在当前目录下创建一个新目录。例如，要在当前目录下创建一个名为“test”的目录，可以使用以下命令：

```
mkdir test
```

2.使用mkdir -p命令创建多级目录

(如果要在当前目录下创建多级目录（即嵌套目录) ，可以使用mkdir -p命令。例如，要在当前目录下创建一个名为“test1/test2”的嵌套目录结构，可以使用以下命令：

```
mkdir -p test1/test2
```

这个命令会依次创建test1和test2两个目录。如果test1目录已经存在，则不会报错。

3.使用mkdir -m命令创建新目录并设置权限

如果需要在创建新目录时设置权限，可以使用mkdir -m命令。例如，要在当前目录下创建一个名为“test”的目录中国linux操作系统，并将其权限设置为777，可以使用以下命令：

```
mkdir -m 777 test
```

4.使用mkdir --help命令获取帮助信息

如果需要查看mkdir命令的详细用法 **linux新建文件夹命令**，可以使用mkdir --help命令。

![linux 常见文件打包压缩命令_linux新建文件夹命令_linux 下载文件命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683230947911_1.jpg)

三、Linux新建文件夹命令的常见错误

在使用Linux新建文件夹命令时，可能会遇到一些常见错误。下面列举了几个可能出现的问题及其解决方法。

1.没有足够的权限

(如果没有足够的权限来创建新目录，系统会提示“Permission denied”（权限不足) 错误信息。此时，可以使用sudo命令以管理员身份运行mkdir命令。

2.目录已经存在

(如果要创建的目录已经存在红旗linux系统，系统会提示“File exists”（文件已存在) 错误信息。此时 **linux新建文件夹命令**，可以使用-r选项强制删除原有目录并重新创建。

四、总结

本文介绍了Linux新建文件夹命令的基本用法和常见错误。掌握这个技能对于Linux用户来说非常重要。希望本文能够帮助大家更好地理解Linux系统，并顺利创建自己的文件夹。
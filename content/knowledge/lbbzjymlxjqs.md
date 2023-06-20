---



title: "Linux必备：7zip解压命令详解，轻松压缩/解压缩"
description: "Linux必备：7zip解压命令详解，轻松压缩/解压缩"
keywords: "Linux必备：7zip解压命令详解，轻松压缩/解压缩"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678140157952_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

7zip是一款非常高效的压缩和解压缩软件，在Windows上广受欢迎。但是，对于Linux用户来说，7zip也是一款很好用的解压神器。本文将详细介绍7zip在Linux下的解压命令以及使用方法。

1.安装7zip

在Linux系统中，我们可以通过以下命令来安装7zip：

“`

sudo apt-get install p7zip-full

“`

安装完成后，我们就可以开始使用了。

2.解压文件

要使用7zip进行解压，我们需要先找到要解压的文件。假设我们要解压名为“test.zip”的文件，我们可以通过以下命令来实现：

“`

7z x test.zip

“`

![7zip linux 解压命令_linux文件解压命令_linux zip 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678140157952_0.jpg)

这个命令会将“test.zip”文件中的所有内容解压缩到当前目录中。

如果你想将文件解压到指定目录中，可以使用以下命令：

“`

7z x test.zip -o/path/to/directory

“`

这个命令会将“test.zip”文件中的所有内容解压缩到指定目录中。

3.查看文件列表

有时候我们需要查看一个压缩文件中包含了哪些内容。对于7zip来说，我们可以使用以下命令来查看：

“`

7z l test.zip

“`

这个命令会列出“test.zip”文件中包含的所有文件和目录。

4.压缩文件

除了解压之外，7zip还可以用来进行文件压缩。要将一个目录或者一个文件进行压缩linux教程下载，我们可以使用以下命令：

“`

7z a test.7z /path/to/directory

“`

这个命令会将指定目录中的所有内容打包成一个名为“test.7z”的文件。如果你只想打包某个特定的文件，可以将路径替换成该文件的路径。

5.压缩级别

当使用7zip进行压缩时，默认情况下会使用最高级别的压缩算法。如果你希望在速度和大小之间进行平衡，则可以指定不同的压缩级别。具体来说红旗linux系统下载，可以使用以下参数：

(--mx0：存储（不进行压缩) 

--mx1：快速模式

(--mx3：正常模式（默认值) 

(--mx5：最大模式（建议) 

--mx7：更高级别的最大模式

--mx9：超级最大模式

例如 **7zip linux 解压命令**，如果你希望使用“快速模式”进行打包，则可以使用以下命令：

“`

7z a -mx1 test.7z /path/to/directory

“`

![linux文件解压命令_linux zip 解压命令_7zip linux 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678140157952_1.png)

6.处理加密文件

有时候我们需要处理加密过的压缩文件。对于这种情况 **7zip linux 解压命令**，我们需要提供密码才能够进行解密和解压。如果你知道密码，则可以使用以下命令来对加密过的文件进行操作：

“`

7z x test.zip -pmy_password

“`

这个命令会将“test.zip”文件中加密过的内容解密并且解压到当前目录中。

如果你希望对一个已经存在的加密过的文件进行修改或者添加新内容，则需要指定密码，并且在执行完成后重新保存该文件。具体来说，你需要执行以下步骤：

1.解密原始文件：

“`

7z e test.zip -pmy_password

![linux zip 解压命令_linux文件解压命令_7zip linux 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678140157952_2.jpg)

“`

2.在当前目录下添加或者修改需要更新的内容。

3.将所有内容重新打包成一个新的加密过的文件：

“`

7z a test_new.zip -pmy_password *

“`

注意，在执行第三步时，“*”代表当前目录下所有未被排除掉的内容都会被打包进新生成的加密过的文件中。

总结

本文介绍了如何在Linux系统上使用7zip进行解压和打包操作，并且介绍了一些常用参数、技巧和注意事项。相信读者在阅读本文后已经掌握了基本操作，并且能够更加高效地处理各种不同类型的压缩和加密过的文件。

参考资料：

[1]

[2]
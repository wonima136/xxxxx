---



title: "Linux下tar命令：使用与创建"
description: "Linux下tar命令：使用与创建"
keywords: "Linux下tar命令：使用与创建"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684699719259_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统自带的tar命令是一个非常有用的工具，可以用于将多个文件或目录打包成一个单独的文件，也可以将这个文件进行压缩。它是备份和压缩文件不可或缺的工具之一。在本文中，我们将深入探讨tar命令的使用redhat linux，包括如何创建、解压、列出、添加和删除tar文件等方面。

**1.创建tar文件**

要创建一个tar文件，我们可以使用“-cvf”选项。例如，要将目录“/home/user/docs”打包成一个名为“mydocs.tar”的文件，请执行以下命令：

```
$ tar -cvf mydocs.tar /home/user/docs
```

这将在当前目录下创建一个名为“mydocs.tar”的文件，并将目录“/home/user/docs”中的所有内容打包到该文件中。

**2.解压tar文件**

要解压一个tar文件，我们可以使用“-xvf”选项。例如，要解压名为“mydocs.tar”的tar文件，请执行以下命令：

```
$ tar -xvf mydocs.tar
```

这将解压缩mydocs.tar并将其中的所有内容提取到当前目录中。

**3.列出tar文件内容**

要查看tar文件中包含哪些内容 **linux下的tar命令**，我们可以使用“-tvf”选项。例如，要列出名为“mydocs.tar”的tar文件中包含的所有文件，请执行以下命令：

![linux下tar命令_linux下的tar命令_linux tar命令打包](https://www.linuxcool.com/wp-content/uploads/2023/05/1684699719259_0.jpg)

```
$ tar -tvf mydocs.tar
```

这将列出mydocs.tar中包含的所有文件和目录。

**4.向tar文件中添加文件**

要向一个已有的tar文件中添加文件，我们可以使用“-rvf”选项。例如，要向名为“mydocs.tar”的tar文件中添加一个名为“newfile.txt”的文件，请执行以下命令：

```
$ tar -rvf mydocs.tar newfile.txt
```

这将将newfile.txt添加到mydocs.tar中。

**5.从tar文件中删除文件**

要从一个已有的tar文件中删除文件，我们可以使用“--delete”选项。例如，要从名为“mydocs.tar”的tar文件中删除一个名为“oldfile.txt”的文件，请执行以下命令：

```
$ tar --delete -f mydocs.tar oldfile.txt
```

这将从mydocs.tar中删除oldfile.txt。

![linux tar命令打包_linux下tar命令_linux下的tar命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684699719259_1.jpg)

**6.压缩tar文件**

要压缩一个tar文件，我们可以使用gzip或bzip2工具。例如，要使用gzip压缩名为“mydocs.tar”的tar文件免费linux主机，请执行以下命令：

```
$ gzip mydocs.tar
```

这将压缩mydocs.tar并创建一个名为“mydocs.tar.gz”的压缩包。

**7.解压缩压缩的tar文件**

要解压缩gzip或bzip2压缩的tar文件，我们可以使用相应的工具。例如，要解压缩名为“mydocs.tar.gz”的gzip压缩的tar文件，请执行以下命令：

```
$ gzip -d mydocs.tar.gz
$ tar -xvf mydocs.tar
```

这将解压缩mydocs.tar.gz并提取其中的所有内容。

**8.总结**

tar命令是Linux系统中备份和压缩文件时必备的工具之一。本文介绍了使用tar命令创建、解压、列出、添加和删除tar文件的方法 **linux下的tar命令**，以及如何使用gzip和bzip2进行压缩和解压缩。希望这篇文章能够帮助您更好地了解tar命令，并在日常工作中更好地使用它。
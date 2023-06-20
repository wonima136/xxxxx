---



title: "掌握Linux解压RAR文件命令，轻松解压文件！"
description: "掌握Linux解压RAR文件命令，轻松解压文件！"
keywords: "掌握Linux解压RAR文件命令，轻松解压文件！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681042493968_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中 **linux解压rar文件命令**，经常会遇到需要解压RAR文件的情况。但是，由于RAR格式并不是开源的压缩格式，所以在Linux系统中默认是不支持解压RAR文件的。那么，在这种情况下 **linux解压rar文件命令**，我们该如何解压RAR文件呢？本文将为大家介绍Linux下解压RAR文件的方法。

**1.安装unrar工具**

要在Linux系统中解压RAR文件，首先需要安装unrar工具。在大多数Linux发行版中，unrar工具并未默认安装，因此需要手动安装。

对于Debian/Ubuntu系统，可以使用以下命令进行安装：

```
sudo apt-get update
sudo apt-get install unrar
```

对于CentOS/RHEL系统，可以使用以下命令进行安装：

```
sudo yum install epel-release
sudo yum install unrar
```

**2.解压RAR文件**

安装完成unrar工具后linux系统镜像下载，就可以开始解压RAR文件了。在Linux系统中，可以使用以下命令进行解压：

```
unrar x filename.rar
```

其中，filename.rar为要解压的RAR文件名。

如果要将RAR文件解压到指定的目录中，则可以使用以下命令：

![linux解压rar包命令_linux解压rar文件命令_rar linux 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681042493968_0.jpg)

```
unrar x filename.rar /path/to/directory/
```

其中，/path/to/directory为要将RAR文件解压到的目录路径。

**3.查看RAR文件内容**

在Linux系统中，可以使用以下命令查看RAR文件的内容：

```
unrar l filename.rar
```

其中，filename.rar为要查看的RAR文件名。

**4.解压指定文件**

如果只需要解压RAR文件中的某个文件，可以使用以下命令：

```
unrar e filename.rar path/to/file
```

其中，path/to/file为要解压的文件路径。

**5.解压密码保护的RAR文件**

如果RAR文件设置了密码保护，需要在解压时输入密码。可以使用以下命令进行解压：

```
unrar x -pPASSWORD filename.rar
```

其中，PASSWORD为RAR文件的密码。

**6.批量解压RAR文件**

如果需要批量解压多个RAR文件，可以使用以下命令：

```
for f in *.rar; do unrar x "$f"; done
```

这个命令会解压当前目录下所有的RAR文件。

![rar linux 解压命令_linux解压rar文件命令_linux解压rar包命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681042493968_2.png)

**7.查看unrar工具帮助文档**

如果对unrar工具不熟悉linux 删除文件夹，可以使用以下命令查看帮助文档：

```
man unrar
```

这个命令会显示unrar工具的使用说明和参数列表。

**8.总结**

本文介绍了Linux下解压RAR文件的方法。首先需要安装unrar工具，然后就可以使用unrar命令进行解压、查看文件内容、解压指定文件、解压密码保护的RAR文件、批量解压RAR文件等操作。对于初学者来说，可以使用man unrar命令查看帮助文档，更好地掌握unrar工具的使用方法。
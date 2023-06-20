---



title: "Linux查看空间大小，轻松掌握"
description: "Linux查看空间大小，轻松掌握"
keywords: "Linux查看空间大小，轻松掌握"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683548256981_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

想要充分利用你的Linux系统的存储资源，就需要掌握一些基本命令。本文将带你了解如何使用Linux查看空间大小命令，并且深入讨论它的各个方面。

**1. df 命令：查看文件系统磁盘使用情况**

df命令可以显示文件系统的总容量、已用容量、可用容量和文件系统类型等信息。在终端输入以下命令可以查看文件系统磁盘使用情况：

```
df -h
```

其中，-h参数表示以人类可读的方式显示磁盘使用情况。

![linux查看tmp目录大小_linux查看空间大小命令_查看linux空间命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683548256981_0.png)

**2. du 命令：查看指定目录或文件所占用的磁盘空间**

du命令可以显示指定目录或文件所占用的磁盘空间。在终端输入以下命令可以查看当前目录下所有文件和子目录所占用的磁盘空间：

```
du -sh *
```

其中，-s参数表示只显示总计信息 **linux查看空间大小命令** linux 命令，-h参数表示以人类可读的方式显示磁盘使用情况，*表示当前目录下所有文件和子目录。

**3. ls 命令：查看指定目录下所有文件大小**

![linux查看tmp目录大小_查看linux空间命令_linux查看空间大小命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683548256981_1.jpg)

ls命令可以显示指定目录下所有文件的大小。在终端输入以下命令可以查看当前目录下所有文件的大小：

```
ls -lh
```

其中 **linux查看空间大小命令**，-l参数表示以长格式显示文件信息，-h参数表示以人类可读的方式显示文件大小。

**4. find 命令：查找指定目录下指定大小的文件**

find命令可以查找指定目录下指定大小的文件。在终端输入以下命令可以查找当前目录下所有大小大于1G的文件：

```
find .-type f -size +1G
```

其中，.表示当前目录，-type f表示只查找文件linux系统教程，-size +1G表示大小大于1G。

**5. lsof 命令：查看被打开的文件及进程**

lsof命令可以显示所有被打开的文件及进程。在终端输入以下命令可以查看当前系统中所有被打开的文件及进程：

```
lsof
```

**6. ncdu 命令：交互式地查看磁盘使用情况**

ncdu命令可以交互式地查看磁盘使用情况。在终端输入以下命令可以启动ncdu交互式界面：

```
ncdu
```

**7. fdisk 命令：查看磁盘分区情况**

fdisk命令可以显示磁盘分区情况。在终端输入以下命令可以查看当前系统中所有磁盘的分区情况：

![查看linux空间命令_linux查看tmp目录大小_linux查看空间大小命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683548256981_2.jpg)

```
sudo fdisk -l
```

**8. blkid 命令：查看文件系统类型及UUID**

blkid命令可以显示文件系统类型及UUID。在终端输入以下命令可以查看当前系统中所有文件系统的类型及UUID：

```
blkid
```

通过上述8个方面的讨论，相信你已经掌握了Linux查看空间大小命令的各种用法和技巧。无论是在服务器管理还是日常使用中，这些命令都能够帮助你更好地管理磁盘空间，提高工作效率。
---



title: "Linux查硬盘空间命令，轻松掌握！"
description: "Linux查硬盘空间命令，轻松掌握！"
keywords: "Linux查硬盘空间命令，轻松掌握！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685823276706_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，查看硬盘空间是一项非常重要的任务。无论您是在运行服务器还是在个人电脑上使用Linux，了解如何检查硬盘空间都是必要的。本文将带您深入了解如何使用不同的命令来查看Linux系统中的硬盘空间。

**1. df命令**

df命令可以显示文件系统的磁盘使用情况，包括已用和可用的磁盘空间。该命令还可以显示文件系统的总大小和已用百分比。使用df命令可以轻松获得有关磁盘使用情况的快速概述。

要使用df命令，请打开终端并输入以下命令：

```
df -h
```

该命令将显示所有挂载点的可用磁盘空间，并以易于阅读的格式显示每个挂载点的大小、已用和可用磁盘空间。

**2. du命令**

(du（磁盘使用) 命令可以帮助您确定哪些文件或目录在硬盘驱动器上占用了多少空间。该命令还可以按大小顺序列出文件或目录。

要使用du命令，请打开终端并输入以下命令：

![linux查看硬盘内存命令_linux查看硬盘空间命令_linux查看操作系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823276706_0.jpg)

```
du -h
```

该命令将显示当前目录及其子目录中所有文件和目录的大小。

**3. ls命令**

ls命令可以列出指定目录中的所有文件和子目录。该命令还可以按大小顺序列出文件。

要使用ls命令 **linux查看硬盘空间命令 linux查看硬盘空间命令**，请打开终端并输入以下命令：

```
ls -lSr
```

该命令将列出当前目录中的所有文件和目录，并按大小排序。

**4. ncdu命令**

(ncdu（NCurses Disk Usage) 是一种基于文本的磁盘使用分析器，它使用Ncurses库来提供交互式用户界面。ncdu命令可以帮助您快速确定哪些文件和目录占用了大量空间。

![linux查看操作系统版本命令_linux查看硬盘内存命令_linux查看硬盘空间命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823276706_1.jpg)

要使用ncdu命令，请打开终端并输入以下命令：

```
sudo apt-get install ncdu
ncdu
```

该命令将安装ncdu，并在终端中显示交互式用户界面。

**5. find命令**

find命令可以搜索整个文件系统以查找匹配特定条件的文件。该命令还可以按文件大小搜索文件。

要使用find命令，请打开终端并输入以下命令：

```
sudo find /-size +1G
```

该命令将搜索整个文件系统以查找大于1GB的文件，并列出找到的所有文件。

**6. locate命令**

locate命令可以快速搜索整个文件系统以查找匹配特定条件的文件。该命令比find命令快得多，因为它使用数据库而不是搜索整个文件系统。

要使用locate命令，请打开终端并输入以下命令：

```
sudo updatedb
sudo locate *.log
```

第一个命令将更新locate数据库。第二个命令将搜索所有以.log结尾的文件，并列出找到的所有文件。

**7. lsblk命令**

(lsblk命令可以显示所有块设备（例如硬盘驱动器) 及其相关信息，例如大小、挂载点和设备名称。

要使用lsblk命令，请打开终端并输入以下命令：

```
lsblk
```

该命令将显示所有块设备及其相关信息。

![linux查看硬盘空间命令_linux查看硬盘内存命令_linux查看操作系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685823276706_2.jpg)

**8. fdisk命令**

fdisk命令是一种磁盘分区工具，可用于创建、调整和删除分区。该命令还可以显示磁盘分区表和分区详细信息。

要使用fdisk命令，请打开终端并输入以下命令：

```
sudo fdisk -l
```

该命令将显示所有可用磁盘驱动器的分区表和详细信息。

**9. gparted工具**

gparted是一种图形化磁盘分区工具，可用于创建、调整和删除分区。该工具还可以显示磁盘分区表和分区详细信息。

要使用gparted，请打开终端并输入以下命令：

```
sudo apt-get install gparted
sudo gparted
```

第一个命令将安装gparted。第二个命令将启动gparted。

**10. GNOME磁盘实用程序**

GNOME磁盘实用程序是一种图形化磁盘使用分析器，可用于查看文件系统的磁盘使用情况、删除文件和格式化驱动器。该工具还可以显示文件系统的详细信息。

要使用GNOME磁盘实用程序，请打开终端并输入以下命令：

```
sudo apt-get install gnome-disk-utility
gnome-disks
```

第一个命令将安装GNOME磁盘实用程序。第二个命令将启动GNOME磁盘实用程序。

结论：

在Linux中，有许多不同的命令和工具可用于查看硬盘空间。无论您是在运行服务器还是在个人电脑上使用Linuxlinux操作系统界面，了解如何检查硬盘空间都是必要的。通过掌握这些命令和工具red hat linux 下载，您可以轻松地确定哪些文件或目录占用了大量空间，并及时清理它们，以确保您的硬盘驱动器始终具有足够的可用空间。
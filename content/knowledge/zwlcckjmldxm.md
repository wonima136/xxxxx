---



title: "掌握Linux存储空间：目录大小命令"
description: "掌握Linux存储空间：目录大小命令"
keywords: "掌握Linux存储空间：目录大小命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684181444711_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，经常需要查看某个目录的大小，以便及时释放磁盘空间。本文将介绍Linux查看目录大小命令 **linux查看目录大小命令**，帮助你轻松掌握存储空间。

**一、du命令**

du命令是最常用的查看目录大小的命令之一。它可以显示当前目录下所有文件和子目录的磁盘使用情况。使用du命令时，可以加上-h参数将结果以人类可读的方式显示出来。

例如：

```
$ du -h/home/user
```

该命令将会显示/home/user目录下所有文件和子目录的磁盘使用情况，并以人类可读的方式显示出来。

**二、df命令**

df命令可以显示系统中所有文件系统的磁盘使用情况，包括已经挂载的和未挂载的文件系统。使用df命令时，可以加上-h参数将结果以人类可读的方式显示出来。

例如：

```
$ df -h
```

该命令将会显示系统中所有文件系统的磁盘使用情况，并以人类可读的方式显示出来。

**三、ncdu命令**

ncdu是一个交互式工具，可以帮助用户快速查看目录大小，并以交互式的方式管理磁盘空间。使用ncdu命令时，用户可以按照文件大小排序，以便找出占用空间最大的文件。

例如：

![windows查看目录大小_linux查看目录大小命令_windows 查看目录命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684181444711_0.png)

```
$ ncdu /home/user
```

该命令将会显示/home/user目录下所有文件和子目录的磁盘使用情况，并以交互式的方式管理磁盘空间。

**四、ls命令**

ls命令可以列出指定目录下所有文件和子目录的信息，包括文件大小、修改时间等。使用ls命令时，可以加上-lh参数将结果以人类可读的方式显示出来。

例如：

```
$ ls -lh /home/user
```

该命令将会列出/home/user目录下所有文件和子目录的信息，并以人类可读的方式显示出来。

**五、find命令**

find命令是一个功能强大的查找工具linux deepin，可以在指定目录下查找符合条件的文件。使用find命令时，可以加上-size参数按照文件大小进行查找。

例如：

```
$ find /home/user -size +100M
```

该命令将会在/home/user目录下查找大于100MB的文件。

**六、tree命令**

tree命令可以以树形结构显示指定目录下所有文件和子目录的信息。使用tree命令时，可以加上-h参数将结果以人类可读的方式显示出来。

例如：

```
$ tree -h/home/user
```

该命令将会以树形结构显示/home/user目录下所有文件和子目录的信息，并以人类可读的方式显示出来。

**七、stat命令**

stat命令可以显示指定文件或目录的详细信息，包括文件大小、修改时间等。使用stat命令时linux命令手册，可以加上-c参数将结果以人类可读的方式显示出来。

例如：

```
$ stat -c"%s%n"/home/user/file.txt
```

![windows查看目录大小_windows 查看目录命令_linux查看目录大小命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684181444711_1.png)

该命令将会显示/home/user/file.txt文件的大小，并以人类可读的方式显示出来。

**八、du、grep和sort联合使用**

du、grep和sort命令可以联合使用，快速查找占用空间最大的文件。使用该方法时，先使用du命令获取目录下所有文件和子目录的磁盘使用情况，然后通过grep命令查找特定大小的文件，并最后通过sort命令按照文件大小排序。

例如：

```
$ du -h/home/user | grep '[0-9.]+G'| sort -hr
```

该命令将会列出/home/user目录下所有大于1GB的文件 **linux查看目录大小命令**，并按照文件大小进行排序。

通过本文介绍的Linux查看目录大小命令，相信你已经掌握了如何快速查找占用空间最大的文件。无论是在个人电脑还是服务器上，都可以轻松管理磁盘空间。
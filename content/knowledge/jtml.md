---



title: "( （讲堂) 命令"
description: "( （讲堂) 命令"
keywords: "( （讲堂) 命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680523958304_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

文章目录

1查看文件大小1.1方式1：ls-lh

使用ls-lh命令可以查看当前目录下所有文件的大小：

```python
$ ls -lh
total 1.1M
-rw-r--r-- 1 user user  55K Mar 18 15:03 file1.txt
-rw-r--r-- 1 user user 900K Mar 18 15:03 file2.pdf
drwxr-xr-x 2 user user 4.0K Mar 18 15:04 folder
```

在前面的输出中 **linux查找文件夹命令**，第一列是文件的权限和类型，第五列是文件大小。

1.2技巧2：du-sh

```python
$ du -sh file1.txt
55K    file1.txt
```

![linux find命令查找字符串_linux查找文件夹命令_linux 中find查找在某两个范围之间的命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680523958304_0.png)

1.3方式3：stat

使用statfile1.txt命令可以查看file1.txt文件的详尽信息

```python
$ stat file1.txt
  File: ‘file1.txt’
  Size: 10713623401     Blocks: 20925048   IO Block: 4096   regular file
Device: 801h/2049d      Inode: 58162022430  Links: 1
Access: (0664/-rw-rw-r--)  Uid: (11135942/user)   Gid: (11135942/user)
Access: 2023-03-28 13:01:58.562241894 +0800
Modify: 2023-03-28 13:21:06.408632159 +0800
Change: 2023-03-28 13:21:06.408632159 +0800
 Birth: -
```

在前面的输出中，第二行是文件大小。

2查看文件夹所占大小2.1方式1：du

使用du命令可以显示文件或目录的c盘使用情况。你可以使用-h选项以人类可读的形式显示大小，或使用-s选项仅显示总大小。

比如，使用du-sh/path/to/folder命令可以查看/path/to/folder文件夹的总大小：

```python
$ du -sh /path/to/folder
2.5G	/path/to/folder
```

在里面的输出中，-h选项以人类可读的形式显示文件夹大小，-s选项仅显示总大小。

2.2方式2：ncdu

ncdu是一款交互式的命令行工具，可以显示目录结构和文件大小，并以可视化的方法呈现。使用ncdu命令可以轻松查看文件夹所占空间大小。

比如 **linux查找文件夹命令**，使用ncdu/home/users/other/shipinKE命令可以查看/home/users/other/shipinKE文件夹的大小：

```python
ncdu 1.15.1 ~ Use the arrow keys to navigate, press ? for help
--- /home/users/other/shipinKE --------
    5.2 GiB [##########] /env_name
    2.1 GiB [###       ] /ptq_install_whl
  654.1 MiB [#         ] /py36
  114.9 MiB [          ] /model_convert_and_perf
   72.0 KiB [          ] /image_convert
 Total disk usage:   8.0 GiB  Apparent size:   7.9 GiB  Items: 28539
```

在里面的输出中linux培训，每行表示一个子目录或文件linux是什么系统，以及它的大小。最后一行显示了整个目录的总大小。你可以使用方向键和回车键来浏览文件夹中的文件和子目录情况。按q键或Ctrl+c退出ncdu。
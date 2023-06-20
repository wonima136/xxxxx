---



title: "Linux修改文件名命令：9个技巧详解"
description: "Linux修改文件名命令：9个技巧详解"
keywords: "Linux修改文件名命令：9个技巧详解"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454865_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux作为一款免费开源的操作系统，不仅具有高安全性和高可靠性，而且还有着强大的命令行操作功能。而其中一个常见的操作就是修改文件名。今天我们就来详细讲解一下Linux修改文件名命令，一共分为以下9个方面进行逐步分析讨论。

1.查看当前目录下的文件列表

2.修改单个文件名

3.批量修改文件名

4.使用通配符批量修改文件名

5.修改文件后缀名

6.重命名目录及其下所有子目录和文件

![linux修改文件名命令_linux修改文件权限命令_linux 下载文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454865_0.png)

7.撤销刚才的修改操作

8.常用选项介绍

9.实战演练

在实际使用中，我们还需要注意到一些细节问题，例如对于含有特殊字符或空格的文件名需要特殊处理等。接下来，我们将通过具体实例进行演示，帮助大家更好地掌握这些技巧。

1.查看当前目录下的文件列表

在使用Linux修改文件名命令之前 **linux修改文件名命令**，首先需要查看当前目录下的文件列表。可以使用ls命令查看当前目录下所有的文件和子目录。

![linux修改文件名命令_linux修改文件权限命令_linux 下载文件命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679947454865_1.jpg)

```
ls
```

2.修改单个文件名

如果需要修改单个文件名，可以使用mv命令来实现。例如，将文件oldfile.txt修改为newfile.txt，可以使用以下命令：

```
mv oldfile.txt newfile.txt
```

3.批量修改文件名

如果需要批量修改文件名linux查看操作系统，可以使用for循环结合mv命令来实现。例如 **linux修改文件名命令**，将多个文件名中的“_”替换为“-”，可以使用以下命令：

```
for i in *; do mv "$i""${i/_/-}"; done
```

4.使用通配符批量修改文件名

在批量修改文件名时，我们还可以利用通配符来匹配符合条件的文件名。例如，将以“.txt”结尾的所有文件名中的“old”替换为“new”，可以使用以下命令：

```
for i in *.txt ; do mv "$i""${i/old/new}"; done
```

5.修改文件后缀名

如果需要修改单个文件的后缀名，可以使用rename命令。例如，将文件oldfile.txt的后缀名改为csv，可以使用以下命令：

```
rename 's/.txt/.csv/' oldfile.txt
```

6.重命名目录及其下所有子目录和文件

如果需要重命名目录及其下所有子目录和文件，可以使用find结合mv命令来实现。例如，将目录oldname重命名为newname，可以使用以下命令：

```
find .-depth -name "oldname*"-execdir sh -c'mv "$0""${0/oldname/newname}"'{};
```

7.撤销刚才的修改操作

在使用Linux修改文件名命令时，有时候会误操作，需要撤销刚才的修改操作。可以使用Ctrl +Z快捷键来撤销刚才的命令。

8.常用选项介绍

在使用Linux修改文件名命令时，我们还可以利用一些常用选项来实现更多功能。例如：

--i：在进行重命名操作时，提示用户是否确认；

--v：显示详细信息，包括每个文件是否被修改；

--n：不执行重命名操作linux内存管理，只显示会被修改的文件名。

9.实战演练

接下来，我们将通过一个实际例子来演示如何使用Linux修改文件名命令。假设我们有一个目录包含多个文件，其中文件名中含有空格和特殊字符，并且需要将所有文件名中的“old”替换为“new”。具体步骤如下：

```
#查看当前目录下的文件列表
ls
#批量修改文件名
for i in *; do mv "$i""${i/old/new}"; done
#验证修改结果
ls
```
---



title: "Linux编译C程序找不到cc命令？"
description: "Linux编译C程序找不到cc命令？"
keywords: "Linux编译C程序找不到cc命令？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686571689819_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统下编译C程序时 **linux找不到cc命令**，经常会使用gcc和cc命令。但有时候在使用cc命令时 **linux找不到cc命令**，却会提示“command not found”，即找不到cc命令。这是怎么回事呢？本文将从8个方面对这个问题进行逐步分析。

**1. cc命令是什么**

(cc（C compiler) 命令是Unix/Linux操作系统下的C语言编译器，用于将C源代码编译成可执行文件。在大多数Linux发行版中，cc命令都是gcc的一个链接linux 删除文件，因此可以通过gcc来使用cc命令。

**2. cc命令的查找路径**

当用户在终端输入cc命令时，系统会按照一定的查找路径去寻找这个命令。一般情况下，Linux系统会将/usr/bin和/usr/local/bin目录添加到PATH环境变量中。如果cc命令没有被安装在这些目录下，那么系统就无法找到它。

**3. cc命令是否被安装**

如果系统无法找到cc命令，那么第一件事就是要确认该命令是否已经被安装了。可以通过以下两种方式来检查：

(（1) 使用which命令查看

```
bash
$ which cc
```

如果输出结果为空，则说明该命令没有被安装。

(（2) 使用find命令查找

```
bash
$ find /-name cc
```

这个命令会在整个文件系统中查找cc命令，如果找到了，则会输出cc命令所在的路径。如果没有找到，则会输出一些错误信息。

**4. cc命令是否被删除**

有时候，用户可能会误操作将cc命令删除了。如果是这种情况，那么就需要重新安装cc命令了。

**5. gcc是否被安装**

前面提到过，在大多数Linux发行版中，cc命令都是gcc的一个链接。因此，如果gcc没有被正确安装，那么也无法使用cc命令。可以通过以下命令来检查gcc是否已经被安装：

```
bash
$ gcc -v
```

如果输出gcc版本号，则说明已经安装成功；否则需要重新安装。

**6. PATH环境变量是否被修改**

PATH环境变量指定了系统查找可执行文件的路径。如果该环境变量被修改了，那么系统就无法找到cc命令。可以通过以下命令来查看PATH环境变量的值：

![linux压缩命令zip命令_linux命令_linux找不到cc命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686571689819_0.png)

```
bash
$ echo $PATH
```

如果PATH环境变量不包含/usr/bin和/usr/local/bin目录linux公社，则需要手动添加这两个目录：

```
bash
$ export PATH=$PATH:/usr/bin:/usr/local/bin
```

**7.是否存在软链接**

有时候，cc命令可能被设置为一个软链接，而不是一个实际的可执行文件。可以使用以下命令来查看cc命令是否是一个软链接：

```
bash
$ ls -l$(which cc)
```

如果输出结果中包含“->”，则说明cc命令是一个软链接。可以通过以下命令来删除该软链接：

```
bash
$ sudo rm $(which cc)
```

**8.是否需要重新编译内核**

在一些特殊的情况下，cc命令可能会被内核模块所使用。如果这个内核模块被删除或者升级了，就需要重新编译内核，以便让系统能够正确地找到cc命令。

综上所述，当Linux系统找不到cc命令时，需要从多个方面进行排查。只有找到了问题的根源，才能采取相应的措施来解决这个问题。
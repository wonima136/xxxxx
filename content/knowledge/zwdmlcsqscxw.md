---



title: "掌握dir命令参数，轻松查询文件！"
description: "掌握dir命令参数，轻松查询文件！"
keywords: "掌握dir命令参数，轻松查询文件！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683288928664_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Windows系统一直以来都是最受欢迎的操作系统之一，而dir命令则是Windows系统中最常用的命令之一。dir命令可以列出指定目录中的所有文件和子目录，并且还可以查看文件的属性、大小、创建日期等详细信息。本文将介绍dir命令的各种参数及其用法，让您更好地掌握Windows文件管理利器。

**1. dir命令的基本格式**

首先我们来了解dir命令的基本格式。在打开命令提示符窗口后，只需输入dir即可列出当前目录下的所有文件和子目录。例如：

```
C:UsersUWriter>dir
```

这会列出当前目录下的所有文件和子目录。

**2.列出指定目录下的文件和子目录**

如果想列出指定目录下的所有文件和子目录，只需在dir命令后加上要列出的目录路径即可。例如：

```
C:UsersUWriter>dir D:Documents
```

这会列出D盘下Documents文件夹中的所有文件和子目录。

**3.列出指定类型的文件**

如果只想列出特定类型的文件，可以使用dir命令后面加上通配符*和要列出的文件类型。例如：

```
C:UsersUWriter>dir *.txt
```

这会列出当前目录下所有扩展名为txt的文件。

**4.列出指定时间范围内修改过的文件**

![dir命令参数_chkdsk命令参数_nba2kol台服命令参数错误](https://www.linuxcool.com/wp-content/uploads/2023/05/1683288928664_1.png)

如果想查看在指定时间范围内修改过的文件，可以使用dir命令后面加上/t参数和时间范围。例如：

```
C:UsersUWriter>dir /t:w 2023-04-01,2023-05-01
```

这会列出在2023年4月1日至2023年5月1日期间修改过的所有文件。

**5.列出指定大小范围内的文件**

如果想查看指定大小范围内的文件，可以使用dir命令后面加上/s参数和大小范围。例如：

```
C:UsersUWriter>dir /s*.txt | find "bytes"
```

这会列出当前目录下所有扩展名为txt的文件，并显示它们的大小。

**6.将结果输出到文本文件中**

如果想将dir命令的结果输出到文本文件中 **dir命令参数**，可以使用dir命令后面加上”>”符号和要输出到的文本文件路径。例如：

```
C:UsersUWriter>dir >D:output.txt
```

这会将当前目录下所有文件和子目录的列表输出到D盘下的output.txt文本文件中。

**7.将结果按照字母顺序排序**

如果想将结果按照字母顺序排序，可以使用dir命令后面加上/o参数和排序方式。例如：

```
C:UsersUWriter>dir /o:n
```

![dir命令参数_nba2kol台服命令参数错误_chkdsk命令参数](https://www.linuxcool.com/wp-content/uploads/2023/05/1683288928664_2.png)

这会列出当前目录下的所有文件和子目录，并按照名称字母顺序排序。

**8.列出子目录中的文件**

如果想列出子目录中的文件深度linux系统，可以使用dir命令后面加上/s参数。例如：

```
C:UsersUWriter>dir /s
```

这会列出当前目录下所有文件和子目录中的所有文件。

**9.列出隐藏文件**

如果想列出隐藏文件，可以使用dir命令后面加上/a参数。例如：

![nba2kol台服命令参数错误_chkdsk命令参数_dir命令参数](https://www.linuxcool.com/wp-content/uploads/2023/05/1683288928664_3.jpg)

```
C:UsersUWriter>dir /a
```

这会列出当前目录下所有文件和子目录中的所有文件长春linux培训，包括隐藏文件。

**10.将结果分页显示**

如果想将结果分页显示，可以使用dir命令后面加上/p参数。例如：

```
C:UsersUWriter>dir /p
```

这会将结果分页显示 **dir命令参数**，每页显示一屏。按任意键继续查看下一页。

以上就是本文对Windows系统中最常用的命令之一——dir命令各种参数及其用法的详细介绍。掌握这些参数及其用法能够使你更好地管理Windows系统中的文件，提高工作效率。
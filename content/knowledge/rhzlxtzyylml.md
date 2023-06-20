---



title: "如何在Linux系统中运用lsls命令？"
description: "如何在Linux系统中运用lsls命令？"
keywords: "如何在Linux系统中运用lsls命令？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678255500330_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

ls命令时linux中最常用的命令之一，通常在学习早期，接触最多的就是ls命令，在Linux系统下怎样使用ls命令，其作用是哪些?可能好多人对这个都不太了解，以下是详尽的内容：

1、通过ls列举文件或目录

运行没有选项的ls命令没有加任何选项的格式列举文件和目录，我们将难以查看文件类型 **linux命令选项全称**，大小，更改日期和时间，权限和链接等详尽信息。

[root@sharpleecreatfile]#ls

![linux命令选项全称_命令行选项语法错误.键入命令/ 获得帮助_linux 短选项 长选项](https://www.linuxcool.com/wp-content/uploads/2023/03/1678255500330_0.png)

2、通过ls列举文件的长列表

使用”ls-l”选项将显示当前目录每行一个内容的长列表格式。该行以”文件或目录权限，所有者和组名，文件大小，创建/更改日期和时间linux系统应用，文件/文件夹名称”的一些特点开始。

[root@sharpleecreatfile]#ls-l

3、通过ls列举所有文件包括隐藏文件

![命令行选项语法错误.键入命令/ 获得帮助_linux 短选项 长选项_linux命令选项全称](https://www.linuxcool.com/wp-content/uploads/2023/03/1678255500330_1.png)

ls-a'将列举所有以('.')格式开头的隐藏文件以及普通文件。在Unix/Linux中，所有隐藏文件都以点”.”开头。格式被标记为隐藏。

[root@sharpleecreatfile]#ls-a

4、通过ls列举文件或则目录以/结尾

使用”ls-F”将在每位目录的末尾添加”/”分类。在下边的示例中，您可以看见所有目录都以”/”符号结尾列举。

[root@sharpleecreatfile]#ls-F

5、通过ls命令跳过所有者的详尽信息

“ls-g”选项类似于”ls-l”选项linux解压命令，但使用”-g”选项时，它将跳过文件和目录的所有者详尽信息。在下边的示例中，它列举了没有所有者详尽信息的所有文件。

[root@sharpleecreatfile]#ls-g

![命令行选项语法错误.键入命令/ 获得帮助_linux 短选项 长选项_linux命令选项全称](https://www.linuxcool.com/wp-content/uploads/2023/03/1678255500330_2.png)

6、ls命令列举文件的索引

“ls-i”选项将列举每位文件和目录的索引(称为inode)编号。以下示例中 **linux命令选项全称**，您可以在文件和目录之前复印一些数字索引/inode。

[root@sharpleecreatfile]#ls-i

7、通过ls命令显示文件通过冒号分隔

![linux命令选项全称_linux 短选项 长选项_命令行选项语法错误.键入命令/ 获得帮助](https://www.linuxcool.com/wp-content/uploads/2023/03/1678255500330_3.jpg)

使用”ls-m”将显示所有文件和目录，以冒号分隔。

[root@sharpleecreatfile]#ls-m

8、通过ls列举文件或目录的uid和gid

使用”ls-n”选项将列举所有文件和目录的UID(用户ID)和GID(组ID)，作为每行一个。以下示例中，您可以看见普通用户和组(UID和GID)不是0.而根UID和GID是0.

[root@sharpleecreatfile]#ls-n
---



title: "Linux中的8个stat命令用法-乐题库"
description: "Linux中的8个stat命令用法-乐题库"
keywords: "Linux中的8个stat命令用法-乐题库"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674655484560_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

来自：Linux迷

链接：

在Linux中，似乎总有一种巧妙的方法来完成任务。对于任何任务，总是有多个命令行实用程序以更好的方式执行它。Linux stat命令是一个命令行工具，用于显示关于文件的详细信息。在本指南中，我们将重点介绍Linux中的8个stat命令用法。这适用于所有Linux发行版。Linux stat命令我们可以将stat命令看作是ls -l命令的更好版本。虽然-l标志提供了有关文件的更多详细信息，例如文件所有权和权限 **linux更改文件名命令**，但stat命令更深入明了，并提供了有关文件的丰富信息。Linux stat命令的语法如下所示：$ stat [选项] 文件名1、不带参数的Stat命令stat命令以最简单的形式(不带任何参数)显示默认输出。这包括文件大小和类型、设备类型、inode编号、UID、GID、链接数量和文件的访问/修改日期。例如，要查看当前主目录下文件的详细信息，执行:linuxmi@linuxmi:~/$ stat

我们介绍下输出的具体含义：

2、查看多个文件信息

通过依次指定命令行上的文件，您可以查看关于多个文件的详细报告，如下所示。

linuxmi@linuxmi:~/$ stat linuxmi.cpp linuxmi.py

3、显示文件系统状态

可以使用-f选项检查文件所在的文件系统状态，如下所示。这给出了块大小、总内存和可用内存，仅举几个属性。

linuxmi@linuxmi:~/$ stat -f /home

4、以简洁的形式显示信息

t选项用于以简洁的格式显示信息，如下所示:

linuxmi@linuxmi:~/$ stat -t linuxmi.cpp

![linux更改文件属主和属组_linux更改时区命令_linux更改文件名命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674655484560_0.jpg)

5、启用符号链接的跟随

通常，如果在符号链接上运行stat命令，它将仅为您提供有关链接的信息，而不会提供链接指向的文件。以/usr/share/zoneinfo/America/Cayman符号链接为例。

linuxmi@linuxmi:~/$ stat /usr/share/zoneinfo/America/Cayman

在上面的示例中，符号链接/usr/share/zoneinfo/America/Cayman 指向 -> Panama。符号链接只有6个字节。

(要获取有关链接指向的文件的信息，请使用-L选项（也称为取消引用选项) 。

linuxmi@linuxmi:~/$ stat -L /usr/share/zoneinfo/America/Cayman

现在，这将显示有关文件而不是链接的信息，即使输出表明它是链接。这是因为我们通过stat命令将其作为参数传递。

6、格式排序

从前面的示例中 **linux更改文件名命令**，我们已经看到stat命令在终端上打印出一系列信息。如果需要特定信息，可以使用格式序列来自定义输出，以准确提供所需内容并保留其他详细信息。

用于自定义输出的常用表达式包括–printf 或–format选项

例如，要仅显示文件的索引节点，请使用％i格式序列，如下所示。该n操作打印新的生产线。

linuxmi@linuxmi:~/$ stat --printf=’%in’ linuxmi.cpp

(要显示访问权限和uid（用户ID) linux系统iso下载，请使用％a和％u格式序列。

linuxmi@linuxmi:~/$ stat --printf=’%a:%un’ linuxmi.cpp

该-format选项打印出一个新行，而不需要额外的操作。

linuxmi@linuxmi:~/$ stat --format=’%a:%F’ linuxmi.cpp

以下是您可以使用的格式序列的完整列表：

7、获得有关stat命令的帮助有关更多命令选项，请使用–help选项和stat命令，如图所示。linuxmi@linuxmi:~/$ stat --help

您还可以访问stat命令的手册页，运行linuxmi@linuxmi:~/$ man stat

8、检查stat版本最后检查stat命令的版本，运行命令：linuxmi@linuxmi:~/$ stat --version

这就是我们在本指南中为您准备的。如您所见64位linux，stat命令超越了ls命令为您提供的功能，非常适合收集有关文件或文件系统的详细信息。

…END…
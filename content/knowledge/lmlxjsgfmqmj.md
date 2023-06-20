---



title: "Linux du命令详解：十个方面全面介绍"
description: "Linux du命令详解：十个方面全面介绍"
keywords: "Linux du命令详解：十个方面全面介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679148353669_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

随着计算机技术的不断发展，数据量呈现爆炸式增长 **linux du命令**，磁盘空间的管理变得越来越重要。Linux系统中有一个非常强大的工具——du命令，它可以帮助我们快速、准确地了解文件和目录的大小，让我们更好地管理磁盘空间。本文将从以下十个方面对Linux du命令进行详细介绍。

一、du命令简介

(du（Disk Usage) 是一款Linux系统下的文件大小检查工具，它能够统计指定目录或文件的磁盘使用情况，并以可读性较高的形式输出结果。du命令在Linux系统中非常常用，是磁盘空间管理的必备工具之一。

二、du命令语法

du命令语法如下：

```
du [选项][文件或目录]
```

其中，选项是可选参数，可以用来控制du命令输出结果的格式和内容。文件或目录则是必选参数，可以指定待检查的文件或目录。

![du 命令_linux du命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679148353669_0.webp)

三、du命令参数详解

1.-a或--all：显示所有文件和目录的大小。

2.-b或--bytes：以字节为单位显示大小。

3.-c或--total：显示所有文件和目录的总大小。

4.-h或--human-readable：以K、M、G等单位显示大小。

5.-s或--summarize：只显示总大小。

6.-x或--one-file-system：不跨越文件系统边界。

![du 命令_linux压缩命令zip命令_linux du命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679148353669_1.png)

7.--exclude=pattern：排除符合模式pattern的文件或目录。

8.--max-depth=N：限制检查深度为N层。

9.--time：同时显示最后修改时间。

(10.--si：使用国际单位制（1000进制) 而非二进制单位。

四、du命令实例演示

1.查看当前目录下所有文件和子目录所占空间大小：

```
$ du
```

![du 命令_linux压缩命令zip命令_linux du命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679148353669_2.png)

2.以人类可读方式查看当前目录下所有文件和子目录所占空间大小：

```
$ du -h
```

3.查看当前目录下所有文件和子目录所占空间总大小：

```
$ du -sh
```

4.查看当前目录下所有文件和子目录所占空间总大小，并只显示总大小：

```
$ du -shc .
```

(5.查看当前目录下所有文件和子目录所占空间总大小linux移植，并只显示总大小（国际单位制) ：

![linux du命令_linux压缩命令zip命令_du 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679148353669_3.png)

```
$ du -shc --si .
```

6.查看当前目录下所有文件和子目录所占空间总大小 **linux du命令** linux是什么，并按照修改时间排序：

```
$ find .-type f -print0 | xargs -0 ls --time-style=long-iso | sort | cut -d''-f6-| xargs du -h
```

五、实战案例分析

1.案例一：查找最大的几个文件

有时候我们需要找到占用磁盘空间最大的几个文件，可以使用以下命令：

```
$ find .-type f | xargs ls -lh | awk '{print $5,$NF}'| sort -n| tail
```

该命令会列出当前目录下所有普通文件，并按照文件大小进行排序，最后输出最大的几个文件。

2.案例二：排除某些类型的文件

有时候我们需要排除某些类型的临时文件等不必要检查的内容，可以使用以下命令：

```
$ du --exclude='*.log'/
```

该命令会排除所有后缀为.log的日志文件，在检查磁盘空间时不予考虑。

六、小结

本文从du命令简介、语法、参数详解、实例演示以及实战案例分析等多个方面对Linux du命令进行了全面深入地介绍。相信通过本文的学习，读者已经掌握了这个强大工具在磁盘空间管理中的应用技巧。
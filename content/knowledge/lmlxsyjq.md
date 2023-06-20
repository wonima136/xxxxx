---



title: "Linux find命令 xargs实用技巧"
description: "Linux find命令 xargs实用技巧"
keywords: "Linux find命令 xargs实用技巧"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684325696719_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux作为开源操作系统，常常被用于服务器等高端应用。而在Linux的命令行中，find和xargs是两个强大的命令，掌握它们的使用方法可以让你事半功倍。本文将深入讲解find和xargs的使用技巧，帮助你更好地利用它们来完成各种任务。

**一、find命令**

find是Linux下常用的文件查找命令，它可以根据文件名、大小、时间等多种条件来查找文件，并支持使用正则表达式进行匹配。下面是一些常用的find命令参数：

**1.查找指定类型的文件**

```
bash
#查找当前目录及其子目录下所有扩展名为txt的文件
$ find .-name "*.txt"
```

**2.按文件大小查找**

```
bash
#查找当前目录及其子目录下大小大于10M的文件
$ find .-size +10M
#查找当前目录及其子目录下大小小于10M的文件
$ find .-size -10M
```

**3.按时间查找**

```
bash
#查找当前目录及其子目录下最近7天内修改过的文件
$ find .-mtime -7
#查找当前目录及其子目录下7天前修改过的文件
$ find .-mtime +7
```

**二、xargs命令**

xargs是Linux下常用的命令行工具，它可以将标准输入转换成命令行参数。通常情况下，我们使用find命令查找到一些文件后，需要对这些文件执行一些操作 **linux find命令 xargs**，比如删除或者复制等。这时候就可以使用xargs命令来实现。

**4.删除查找到的文件**

```
bash
#查找当前目录及其子目录下扩展名为bak的文件，并删除它们
$ find .-name "*.bak"| xargs rm -f
```

**5.复制查找到的文件**

```
bash
#查找当前目录及其子目录下扩展名为txt的文件，并复制到/tmp目录中
$ find .-name "*.txt"| xargs -I{} cp {}/tmp
```

**6.利用xargs并行执行命令**

默认情况下 **linux find命令 xargs**，xargs是按顺序执行命令的。但是如果你有多个CPU核心，想要利用多线程来加速任务完成速度，就可以使用-x或--max-procs选项来指定并行执行的进程数。

```
bash
#查找当前目录及其子目录下所有jpg文件，并利用4个进程同时进行转换
$ find .-name "*.jpg"| xargs -n1 -P4 -I{} convert {}{}.png
```

![linux下的find命令_linux find命令 xargs_linux 命令 find](https://www.linuxcool.com/wp-content/uploads/2023/05/1684325696719_1.jpg)

**三、find和xargs的组合使用**

find和xargs的组合使用可以让我们更加高效地处理大量文件。比如永久免费linux服务器，我们可以使用find命令查找到所有扩展名为txt的文件，然后利用xargs命令对这些文件进行处理。

**7.统计多个文件中某个字符串出现的次数**

```
bash
#查找当前目录及其子目录下所有txt文件，并在每个文件中查找"hello world"出现的次数
$ find .-name "*.txt"| xargs grep -o"hello world"| wc -l
```

**8.利用find和xargs批量修改文件名**

```
bash
#将当前目录及其子目录下所有jpg文件的扩展名修改成png
$ find .-name "*.jpg"| xargs -I{} mv {}{}.png
```

**9.利用find和xargs批量压缩文件**

```
bash
#查找当前目录及其子目录下所有txt文件，并压缩成zip格式
$ find .-name "*.txt"| xargs zip text.zip
```

通过以上九个实例，我们可以看到find和xargs的强大之处。它们不仅能够帮助我们快速定位到需要操作的文件，还能够让我们高效地对这些文件进行处理。掌握它们的使用方法suse linux 下载，可以让你在Linux命令行下更加得心应手。
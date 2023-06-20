---



title: "linux ldd命令 掌握Linux LDD命令，9招全搞定"
description: "linux ldd命令 掌握Linux LDD命令，9招全搞定"
keywords: "linux ldd命令 掌握Linux LDD命令，9招全搞定"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684440379439_1.gif"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，LDD命令是一条非常重要的命令，它可以用于查看可执行文件或共享库的依赖关系，帮助我们更好地理解程序运行时的环境。本文将从以下9个方面详细介绍Linux LDD命令的使用和原理。

**1.什么是动态链接库**

(动态链接库（Dynamic Linking Library) 是一种可重定位的代码文件，它可以在运行时被加载到内存中，并由操作系统动态地将其与其他代码文件链接起来，形成一个完整的可执行程序。相比静态链接库，动态链接库有以下优点：节省内存空间、提高代码重用性、方便升级和维护。

**2. LDD命令基本语法**

LDD命令的基本语法为：

```
ldd [选项]文件名
```

其中，选项包括：

--v：显示详细信息

--u：显示未被解析的符号

--r：显示可重定位文件所需的符号

**3.查看可执行文件依赖关系**

通过LDD命令可以查看一个可执行文件所依赖的动态链接库，在终端中输入以下命令：

```
ldd /path/to/executable
```

例如，查看ls命令所依赖的动态链接库：

```
ldd /bin/ls
```

![linux ldd命令_ldd 命令_linux ldd 不是动态可执行文件](https://www.linuxcool.com/wp-content/uploads/2023/05/1684440379439_1.gif)

**4.查看共享库依赖关系**

(除了可执行文件，LDD命令还可以用于查看共享库（.so文件) 的依赖关系。在终端中输入以下命令：

```
ldd /path/to/shared/library
```

例如 **linux ldd命令**，查看libpthread.so.0库所依赖的动态链接库：

```
ldd /lib/x86_64-linux-gnu/libpthread.so.0
```

**5.查看未被解析的符号**

在使用LDD命令时，有时会出现未被解析的符号，这时可以使用-u选项来查看这些未解析的符号。在终端中输入以下命令：

```
ldd -u/path/to/executable
```

例如，查看/usr/bin/gcc可执行文件中未被解析的符号：

```
ldd -u/usr/bin/gcc
```

**6.查看可重定位文件所需的符号**

(除了可执行文件和共享库，LDD命令还可以用于查看可重定位文件（.o文件) 所需的符号。在终端中输入以下命令：

```
ldd -r/path/to/object/file
```

例如，查看hello.o文件所需的符号：

![linux ldd命令_linux ldd 不是动态可执行文件_ldd 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684440379439_3.gif)

```
ldd -r hello.o
```

**7. LDD原理**

(LDD命令是通过读取可执行文件或共享库中的ELF头（Executable and Linking Format) 信息来实现的。ELF头包含了程序运行所需的各种信息，包括程序入口地址、代码段、数据段、符号表、重定位表等。

**8. LDD命令的使用场景**

LDD命令可以用于以下场景：

-检查可执行文件或共享库的依赖关系，避免缺失动态链接库导致程序无法运行；

-检查程序中未被解析的符号 **linux ldd命令**，帮助我们找到程序编译或链接时的错误；

-检查可重定位文件所需的符号linux模拟，帮助我们找到程序编译时的错误。

**9. LDD命令的注意事项**

在使用LDD命令时，需要注意以下事项：

-- LDD命令只能检查可执行文件或共享库所依赖的动态链接库，不能检查静态链接库；

-- LDD命令只能检查ELF格式的文件红旗linux安装，不能检查其他格式的文件；

-- LDD命令只能检查当前系统中已安装的动态链接库，不能检查未安装的动态链接库。

通过本文对Linux LDD命令的详细介绍，相信大家已经掌握了该命令的使用方法和原理，并且能够更好地理解Linux系统中动态链接库的奥秘。
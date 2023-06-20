---



title: "gcc命令 – C/C++语言编译器"
description: "gcc命令 – C/C++语言编译器"
keywords: "gcc命令 – C/C++语言编译器"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

gcc命令来自英文词组“GNU Compiler Collection”的缩写，其功能是用于C/C++语言编译器。gcc是开源领域使用最广泛的编译工具，具有功能强大、兼容性强，效率高等特点。

编译工作的四个阶段：预编译(Preprocessing)、编译(Compilation)、汇编 (Assembly)、连接(Linking)。

**语法格式：** gcc [参数] 文件名

**常用参数：**

-B将指定目录添加到搜索路径-c仅执行编译，不进行连接操作-E仅执行编译预处理-l设置头文件-L设置链接库-o指定要生成的输出文件-S将C代码转换为汇编代码-v显示编译器调用的程序--help显示帮助信息--pipe使用管道符--shared创建动态共享库--static使用静态链接--time设置每个子流程的执行时间--version显示版本信息

**参考示例**

编译指定的源码文件：

```
[root@linuxcool ~]# gcc File.c
```

编译指定的源码文件，并生成出可执行文件：

```
[root@linuxcool ~]# gcc File.c -o linux
```

对指定的源码文件进行预处理：

```
[root@linuxcool ~]# gcc -E File.c -o linux.i
```

对指定预处理后的文件进行汇编操作：

```
[root@linuxcool ~]# gcc -S File.i -o linux.s
```

对指定汇编处理后的文件进行编译操作：

```
[root@linuxcool ~]# gcc -c File.s -o linux.o
```

对指定编译处理后的文件进行连接操作：

```
[root@linuxcool ~]# gcc File.o -o linux
```
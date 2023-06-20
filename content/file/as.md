---



title: "as命令 – 汇编语言编译器"
description: "as命令 – 汇编语言编译器"
keywords: "as命令 – 汇编语言编译器"
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

as命令的功能是用于汇编语言编译器，属于二进制工具集GNU Binutils的一员，也是GNU开放源代码项目推出的一款重量级汇编语言编译器。as命令能够将汇编代码编译成二进制程序，支持多种类型的处理器，非常好用。

**语法格式：** as [参数] 文件名

**常用参数：**

-ac忽略失败条件-ad忽略调试指令-ah包括高级源-al包括装配-am包括宏扩展-an忽略形式处理-as包括符号-I将指定目录加入到搜索列表-f跳过空白和注释预处理-g显示调试信息-J对于有符号溢出不显示警告信息-L在符号表中保留本地符号-o设置要生成的目标文件--no-warn不显示告警信息--statistics打印汇编所用的最大空间和总时间--version显示版本信息--warn显示告警信息

**参考示例**

(将指定的汇编文件（File.s) 编译成为二进制程序（File.o）：

```
[root@linuxcool ~]# as File.s -o File.o
```

将指定的汇编文件编译成为二进制程序，忽略失败条件：

```
[root@linuxcool ~]# as -ac File.s -o File.o
```

将指定的汇编文件编译成为二进制程序，并生成出调试信息：

```
[root@linuxcool ~]# as -g File.s -o File.o
```
---



title: "gdb命令 – GUN程序调试器"
description: "gdb命令 – GUN程序调试器"
keywords: "gdb命令 – GUN程序调试器"
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

gdb命令来自英文词组“GNU Debugger”的缩写，其功能是用于GNU程序调试。gdb命令是类UNIX系统下常见的程序调试工具，是Linux系统软件库gcc开发套件中的一员，掌握了以下十余个常用命令和参数，定能帮助您完成日常的基本程序调试工作。

**语法格式：** gdb [参数] 文件名

**常用参数：**

-a显示为地址-c显示为字符-cd设置工作目录-d添加文件查找路径-o显示为八进制数-q静默执行模式-f显示为浮点数-s显示为字符串-t显示为二进制数-u显示为无符号十六进制数

**常用动作：**

(backtrace显示函数调用的栈帧和层级关系continue继续运行delete删除断点dir重定向源码文件的位置display监视的变量或者内存地址enable启用某个断点file加载被调试的可执行程序文件finish结束当前函数，返回到函数调用点frame切换函数的栈帧info显示函数内部局部变量的数值list显示源代码列表next单步调试（逐过程，函数直接执行) print显示值及地址quit退出gdbrun重新开始运行文件set设置变量的值start停在第一执行语句step单步调试（逐语句，自定义函数内部执行）thread切换至指定的线程

**参考示例**

开启gdb调试工具，进入到调试界面：

```
[root@linuxcool ~]# gdb
gdb)
```

加载指定的二进制可执行程序：

```
[root@linuxcool ~]# gdb
gdb)file File.out
```

运行并追踪指定的二进制可执行程序：

```
[root@linuxcool ~]# gdb
gdb)file File.out
gdb)start
```
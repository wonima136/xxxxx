---



title: "ldd命令 – 打印程序依赖的共享库"
description: "ldd命令 – 打印程序依赖的共享库"
keywords: "ldd命令 – 打印程序依赖的共享库"
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

ldd命令用于打印程序或者库文件所依赖的共享库列表。

**语法格式:** ldd [参数] [文件]

**常用参数：**

-v详细信息模式，打印所有相关信息-u打印未使用的直接依赖-d执行重定位和报告任何丢失的对象-r执行数据对象和函数的重定位，并且报告任何丢失的对象和函数-- -help显示帮助信息

**参考实例**

显示命令依赖的共享库：

```
[root@linuxcool ~]# ldd /bin/vim
linux-vdso.so.1 =>  (0x00007ffe3dbc1000)
libm.so.6 => /lib64/libm.so.6 (0x00007f17a5b55000)
libselinux.so.1 => /lib64/libselinux.so.1 (0x00007f17a592e000)
libtinfo.so.5 => /lib64/libtinfo.so.5 (0x00007f17a5704000)
```
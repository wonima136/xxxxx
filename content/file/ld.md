---



title: "ld命令 – GUN连接器"
description: "ld命令 – GUN连接器"
keywords: "ld命令 – GUN连接器"
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

ld命令是GNU的连接器，将目标文件连接为可执行程序。

很少单独使用ld命令对目标进行连接操作，通常都是使用gcc命令在编译后自动进行连接。

**语法格式:** ld [参数]

**常用参数：**

-o指定输出文件名-e指定程序的入口符号

**参考实例**

将文件“/lib/linuxcool_1.o”与“ linuxcool_2 .o”和库“linuxcool_3.a”链接起来，生成一个名为 linuxcool_4的文件，该文件将来自标准搜索目录：

```
[root@linuxcool ~]# ld -o linuxcool_4 /lib/linuxcool_1.o linuxcool_2 .o -lc
```
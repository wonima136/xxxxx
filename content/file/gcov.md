---



title: "gcov命令 – 测试代码覆盖率"
description: "gcov命令 – 测试代码覆盖率"
keywords: "gcov命令 – 测试代码覆盖率"
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

gcov命令是一款测试程序的代码覆盖率的工具。

gcov可以统计每一行代码的执行频率，实际上哪些代码确实被执行了，每一段代码的执行时间。 gcov只在使用GCC编译的代码上工作。它与任何其他概要或测试覆盖机制不兼容。

gcov命令在测试代码覆盖率时，必须使用gcc命令的“-fprofile-arcs”选项和“-ftest-coverage”选项编译C语言文件。

**语法格式：** gcov [参数] [文件]

**常用参数：**

-a显示每个基本的信息-b输出包含分支概率-c给出跳转的分支数，而不是百分比-n不创建输出文件-l为包含进来的源文件使用长输出文件名-f输出每个函数的小结信息-p保留所有路径名

**参考实例**

显示/root/linuxcool.c文件的代码覆盖信息：

```
[root@linuxcool ~]# gcov /root/linuxcool.c
```
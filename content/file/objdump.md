---



title: "objdump命令 – 显示目标文件附加信息"
description: "objdump命令 – 显示目标文件附加信息"
keywords: "objdump命令 – 显示目标文件附加信息"
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

objdump命令来自于英文词组“object files dump”的缩写，其功能是用于显示目标文件附加信息。如果只是想让自己编写的代码运行起来，做个能用的小程序，那么这个命令确实用处不大。但如果想深入了解指定二进制可执行文件的附加信息，那么就一定要试试objdump命令了。

**语法格式：** objdump [参数] 文件名

**常用参数：**

-a显示档案库的成员信息-g 显示调试信息-d从objfile中反汇编那些特定指令机器码的section-D与 -d 类似，但反汇编所有section-f显示objfile中每个文件的整体头部摘要信息 -H简短的帮助信息-s显示指定section的完整内容。默认所有的非空section都会被显示

**参考实例**

查看档案库文件中的信息：

```
[root@linuxcool ~]# objdump -a libmy2.a
```

显示mytest.o文件中的text段的内容：

```
[root@linuxcool ~]# objdump --section=.text -s mytest.o
```
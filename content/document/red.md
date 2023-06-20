---



title: "red命令 – 文本编辑工具"
description: "red命令 – 文本编辑工具"
keywords: "red命令 – 文本编辑工具"
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

red命令的功能是用于文本编辑工具，能够将文件内容读入编辑器缓存，对副本进行编辑操作后再写入回硬盘中。与vi/vim命令很大不同点在于red命令在编辑时无法查看到文件内容，因此一定要仔细检查输入信息的正确性，避免频繁往返于编辑和命令行模式，浪费大量的时间。

很少有Linux系统运维人员会直接使用red命令编辑文本内容，而更多的是基于Shell脚本调用red命令，从而对指定文件内容进行准确地修改操作，这样就比vi/vim有优势了。

**语法格式：** red [参数] 文件名

**常用参数：**

i在最后一行前插入新内容o把最后一行替换成新内容q退出编辑器w保存文件内容.使用命令行模式-G使用兼容模式-l失败后使用0状态退出-p设置指定字符串作为交互提示-v显示执行过程详细信息

**参考示例**

在指定文件的最后一行插入新内容：

```
[root@linuxcool ~]# red File.cfg
1387
a
welcome to Linuxcool.com
.
w
1412
q
```

在指定文件的最后一行前插入新内容：

```
[root@linuxcool ~]# red File.cfg
1412
i
Vist Linuxprobe.com
.
w
1436
q
```

查看前面两条命令的插入效果：

```
[root@linuxcool ~]# tail -n 2 File.cfg
Vist Linuxprobe.com
welcome to Linuxcool.com
```
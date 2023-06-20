---



title: "loadkeys命令 – 改变linux键盘驱动程序"
description: "loadkeys命令 – 改变linux键盘驱动程序"
keywords: "loadkeys命令 – 改变linux键盘驱动程序"
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

loadkeys命令可以根据一个键盘定义表改变 linux 键盘驱动程序转译键盘输入过程。

**语法格式：** loadkeys [参数] [文件]

**常用参数：**

-v 印出详细的资料，你可以重复以增加详细度  -q 不要显示任何讯息 -c  清除所有 composite 定义  -s 将定串定义表清除

**参考实例**

显示功能键：

```
[root@linuxcool ~]# loadkeys --funcs-only
```

将定串定义表清除：

```
[root@linuxcool ~]# loadkeys -s
```

清除所有 composite 定义：

```
[root@linuxcool ~]# loadkeys -c
```

印出详细的资料，你可以重复以增加详细度：

```
[root@linuxcool ~]# loadkeys -v
```

不要显示任何讯息：

```
[root@linuxcool ~]# loadkeys -q
```
---



title: "dumkeys命令 – 显示键盘映射表"
description: "dumkeys命令 – 显示键盘映射表"
keywords: "dumkeys命令 – 显示键盘映射表"
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

dumpkeys命令用于显示键盘映射表，输出的内容可以被loadkeys命令识别,改变映射关系.。loadkeys命令可以根据一个键盘定义表改变 linux 键盘驱动程序转译键盘输入过程。

**语法格式：** dumkeys [参数]

**常用参数：**

-i驱动信息(键码范围、数量、状态键)-l详细驱动信息-n十六进制显示-f显示全部信息-1分行显示按键组合-S设定输出格式(0：预设 1：完整 2：分行 3简单)--funcs-only功能键信息--keys-only 键组合信息 --compose-only普通键信息

**参考实例**

显示功能键信息：

```
[root@linuxcool ~]# dumkeys --funcs-only
```

显示驱动信息：

```
[root@linuxcool ~]# dumkeys -i
```

十六进制显示键盘映射表：

```
[root@linuxcool ~]# dumkeys -n
```

显示键组合信息：

```
[root@linuxcool ~]# dumkeys --keys-only
```

显示普通键信息：

```
[root@linuxcool ~]# dumkeys --compose-only
```
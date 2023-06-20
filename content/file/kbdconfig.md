---



title: "kbdconfig命令 – 设置键盘类型"
description: "kbdconfig命令 – 设置键盘类型"
keywords: "kbdconfig命令 – 设置键盘类型"
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

kbdconfig(Red Hat Linux才有的指令)是一个用来设置键盘的程序，提供图形化的操作界面。kbdconfig实际上是修改/etc/sysconfig/keyboard的键盘配置文件。

**语法格式：** kbdconfig [参数]

**常用参数：**

--back 执行时将预设的Cancel按钮更改为Back按钮 --test  仅作测试，不会实际更改设置

**参考实例**

键盘设置：

```
[root@linuxcool ~]# kdbconfig
```
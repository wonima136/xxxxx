---



title: "lpc命令 – 打印机控制程序"
description: "lpc命令 – 打印机控制程序"
keywords: "lpc命令 – 打印机控制程序"
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

lpc命令是命令行方式打印机控制程序，有5个内置命令。

**语法格式:** lpc [参数]

**常用参数:**

?/help显示帮助 exit/quit退出打印机命令行status显示打印机状态

**参考实例**

进入lpc命令行：

```
[root@localhost ~]# lpc
```

显示打印机状态：

```
[root@localhost ~]# lpc --status
```

退出lpc命令行：

```
 [root@localhost ~]# lpc --exit
```
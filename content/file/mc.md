---



title: "mc命令 – 菜单式文件管理程序"
description: "mc命令 – 菜单式文件管理程序"
keywords: "mc命令 – 菜单式文件管理程序"
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

mc命令用于提供一个菜单式的文件管理程序，执行mc之后，将会看到菜单式的文件管理程序，共分成４个部分。

**语法格式：** mc [参数] [文件]

**常用参数：**

-a 　当mc程序画线时不用绘图字符画线-b 　使用单色模式显示-c 　使用彩色模式显示-d 　 不使用鼠标-f 　显示mc函数库所在的目录

**参考实例**

使用单色模式管理test文件：

```
[root@linuxcool ~]# mc -b test
```

使用彩色模式管理test文件：

```
[root@linuxcool ~]# mc -c test
```
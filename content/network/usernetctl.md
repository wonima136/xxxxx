---



title: "usernetctl命令 – 操作指定的网络接口"
description: "usernetctl命令 – 操作指定的网络接口"
keywords: "usernetctl命令 – 操作指定的网络接口"
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

usernetctl命令在用于被允许时操作指定的网络接口。在使用上和”ifup”、”ifon”命令有些类似。

**语法格式：** usernetctl [参数] [网络接口]

**常用参数：**

up激活网络接口down禁用网络接口report报告网络接口

**参考实例**

激活网络接口：

```
[root@linuxcool ~]# usernetctl enp1s0 up
```

禁用网络接口：

```
[root@linuxcool ~]# usernetctl enp1s0 down
```

报告网络接口状态：

```
[root@linuxcool ~]# usernetctl enp1s0 report
```
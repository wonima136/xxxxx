---



title: "mingetty命令 – 登入程序"
description: "mingetty命令 – 登入程序"
keywords: "mingetty命令 – 登入程序"
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

mingetty命令是精简版的getty。 mingetty适用于本机上的登入程序。

**语法格式：** mingetty [参数]

**常用参数：**

--long-hostname显示完整的主机名称 --noclear 在询问登入的用户名称之前不要清楚屏幕画面

**参考实例**

显示完整的主机名称：

```
[root@linuxcool ~]# mingetty -long-hostname gethostname()
```

在提示输入用户名之前不进行清屏操作 (通常屏幕被清除)：

```
[root@linuxcool ~]# mingetty -noclear
```
---



title: "chfn命令 – 系统管理"
description: "chfn命令 – 系统管理"
keywords: "chfn命令 – 系统管理"
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

chfn命令的英文全称是“change finger”，即用来改变finger命令显示的信息。这些信息都存放在/etc目录里的passwd文件里。若不指定任何选项，则chfn命令会进入问答式界面。

**语法格式：** chfn [参数]

**常用参数**：

-f设置真实姓名-h设置家中的电话号码-u 在线帮助-v显示版本信息

**参考实例**

改变finger信息 ：

```
[root@linuxcool ~]# chfn
Changing finger information for root.
Name [root]: linuxcool
Office []: cool
Office Phone []: 888888
Home Phone []: 999999
Finger information changed.
```

改变账号真实姓名：

```
[root@linuxcool ~]# chfn -f
hnunix Changing finger information for root.
Finger information changed.
```
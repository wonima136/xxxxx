---



title: "get_module命令 – 获取模块信息"
description: "get_module命令 – 获取模块信息"
keywords: "get_module命令 – 获取模块信息"
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

get_module命令用于获取Linux内核模块的详细信息。

使用get_module命令获取模块详细信息时，必须确定该模块已经加载到内核，否则会提示“模块找不到”的错误。

**语法格式:** get_module [模块名]

**参考实例**

获取指定模块信息：

```
[root@linuxcool ~]# get_module ipv6
```

查看内核模块sr_mod的详细信息：

```
[root@linuxcool ~]# get_module sr_mod
```
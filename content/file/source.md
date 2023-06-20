---



title: "source命令 – 从指定文件中读取和执行命令"
description: "source命令 – 从指定文件中读取和执行命令"
keywords: "source命令 – 从指定文件中读取和执行命令"
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

source命令的功能是用于从指定文件中读取和执行命令，通常用于被修改过的文件，使之新参数能够立即生效，而不必重启整台服务器。

**语法格式：** source [文件名]

**参考示例**

读取和执行指定文件中的命令：

```
[root@linuxcool ~]# source ~/.bash_profile
```
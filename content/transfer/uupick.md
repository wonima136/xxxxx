---



title: "uupick命令 – 处理传送进来的文件"
description: "uupick命令 – 处理传送进来的文件"
keywords: "uupick命令 – 处理传送进来的文件"
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

当其他主机通过UUCP将文件传送进来时，可利用uupick命令取出这些文件。

**语法格式：** uupick [参数]

**常用参数：**

-I 指定配置文件  -s 处理由指定主机传送过来的文件  -v  显示版本信息  --help   显示帮助信息

**参考实例**

处理由主机localhost传送过来的文件：

```
[root@linuxcool ~]# uupick -s localhost
```
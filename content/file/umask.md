---



title: "umask命令 – 管理权限掩码"
description: "umask命令 – 管理权限掩码"
keywords: "umask命令 – 管理权限掩码"
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

umask命令来自英文词组“user file-creation mode mask”的缩写，其功能是用于管理权限掩码。umask中文常被译为文件掩码，权限掩码是由3个八进制的数字所组成，将现有的存取权限减掉权限掩码后，即可获得建立文件时预设的权限啦。

例如当前Linux系统默认对于普通文件的存取权限为666，若将umask设定为022，则最终建立文件时权限为644。

**语法格式：** umask [参数] [权限掩码]

**常用参数：**

-p输出的权限掩码可直接作为指令来执行-S 使用文字来表示权限掩码

**参考示例**

查看当前系统中预设的权限掩码：

```
[root@linuxcool ~]# umask
0022
```

(设置新建文件权限默认为654（即666-umask) ：

```
[root@linuxcool ~]# umask 012
```
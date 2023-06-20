---



title: "unarj命令 – 解压.arj文件"
description: "unarj命令 – 解压.arj文件"
keywords: "unarj命令 – 解压.arj文件"
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

unarj命令用于解压缩.arj文件。

**语法格式：** unarj [参数] [.arj压缩文件]

**常用参数：**

-e 解压缩.arj文件 -l显示压缩文件内所包含的文件 -t检查压缩文件是否正确 -x解压缩时保留原有的路径

**参考实例**

解压缩.arj文件：

```
[root@linuxcool ~]# unarj -e test.arj
```

显示压缩文件内所包含的文件：

```
[root@linuxcool ~]# unarj -l test.arj
```

检查压缩文件是否正确：

```
[root@linuxcool ~]# unarj -t test.arj
```

解压缩时保留原有的路径：

```
[root@linuxcool ~]# unarj -x test.arj
```

把文件解压到当前路径：

```
[root@linuxcool ~]# unarj -ex test.arj
```
---



title: "bunzip2命令 – bz2文件的解压缩程序"
description: "bunzip2命令 – bz2文件的解压缩程序"
keywords: "bunzip2命令 – bz2文件的解压缩程序"
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

bunzip2可解压缩.bz2格式的压缩文件。bunzip2实际上是bzip2的符号连接，执行bunzip2与bzip2 -d的效果相同。

**语法格式：** bunzip2 [参数]

**常用参数**：

-f 解压缩时，若输出的文件与现有文件名时，预设不会覆盖现有的文件。若要覆盖，请使用此参数 -k 在解压缩后，预设会删除原来的压缩文件。若要保留压缩文件，请使用此参数 -s 降低程序执行时，内存的使用量 -v 解压缩文件时，显示详细的信息 -L 显示版本信息

**参考实例**

解压.bz2文件：

```
[root@linuxcool ~]# bunzip2 -v temp.bz2
```
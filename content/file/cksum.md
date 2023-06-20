---



title: "cksum命令 – 校验文件"
description: "cksum命令 – 校验文件"
keywords: "cksum命令 – 校验文件"
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

(cksum命令用于检查文件的CRC是否正确， 确保文件从一个系统传输到另一个系统的过程中的正确性 。循环冗余校验法 （ CRC ) 是一种排错检查方式，该校验法的标准由CCITT所指定，至少可检测到99.998%的已知错误。

这种方法要求校验和在源系统和目的系统中分别被计算出来，之后进行比较，如果校验和相等，则认为该文件传输正确。若不指定任何文件名称或是所给予的文件名为”-“，则指令”cksum”会从标准输入设备中读取数据。

**语法格式：** cksum [参数] [文件]

**常用参数：﻿**

--help在线帮助--version显示版本信息

**参考实例**

计算文件“tempfile”的完整性：

```
[root@linuxcool ~]# cksum tempfile
4294967295 0 tempfile
```

注：“4294967295”表示校验码，“0”表示字节数。
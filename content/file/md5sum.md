---



title: "md5sum命令 – 计算文件内容的md5值"
description: "md5sum命令 – 计算文件内容的md5值"
keywords: "md5sum命令 – 计算文件内容的md5值"
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

md5sum命令来自英文词组“md5 summation”的缩写，其功能是用于计算文件内容的md5值，进而比较两个文件相同与否。md5值是一个128位的二进制数据，转换成16进制则是32位。

用户可以通过此命令对文件内容进行汇总并计算出一个md5值，当两个文件的md5值完全相同时，则代表两个文件内容亦完全相同，文件名称不对计算结果产生影响。

**语法格式：** md5sum [参数] 文件名

**常用参数：﻿**

-b使用二进制模式-c使用已生成的md5值对文件进行检验-t 使用文本模式-w检查输入的md5值有没有非法行--quiet静默执行模式

**参考示例**

生成文件md5值：

```
[root@linuxcool ~]# md5sum File.cfg
24eefbc43eb4f019c05f478e4378428e  File.cfg
```

以文本模式读取文件内容，并生成md5值：

```
[root@linuxcool ~]# md5sum -t File.cfg
24eefbc43eb4f019c05f478e4378428e  File.cfg
```

以二进制模式读取文件内容，并生成md5值：

```
[root@linuxcool ~]# md5sum -b File.cfg
24eefbc43eb4f019c05f478e4378428e File.cfg
```
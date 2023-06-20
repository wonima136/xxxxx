---



title: "uudecode命令 – 还原档案"
description: "uudecode命令 – 还原档案"
keywords: "uudecode命令 – 还原档案"
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

uudecode命令将uuencode编码后的档案还原，uudecode只会将begin与end标记之间的编码资料还原，程序会跳过标记以外的资料。

**语法格式：** uuencode [参数]

**常用参数：**

h 列出指令使用格式v列出版本讯息

**参考实例**

将 file.uud 还原，而还原后的档名储存在 file.uud 档中：

```
[root@linuxcool ~]# uuencode file.uud
```

还原多个档案：

```
[root@linuxcool ~]# uuencode file1.uud file2.uud
```
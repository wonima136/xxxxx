---



title: "rhmask命令 – 加密和解密文件"
description: "rhmask命令 – 加密和解密文件"
keywords: "rhmask命令 – 加密和解密文件"
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

Linux rhmask命令用于对文件进行加密和解密操作。执行rhmask指令可制作加密过的文件，方便用户在公开的网络上传输该文件，而不至于被任意盗用。

**语法格式：** rhmask [参数] [加密文件] [输出文件]

**常用参数：**

-d 产生加密过的文件

**参考实例**

将加密文件”file1.txt”进行加密后，另存为输出文件”file2.txt” ：

```
[root@linuxcool ~]# rhmask file1.txt file2.txt
```
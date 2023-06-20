---



title: "db_load命令 – 加密信息并生成数据库文件"
description: "db_load命令 – 加密信息并生成数据库文件"
keywords: "db_load命令 – 加密信息并生成数据库文件"
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

db_load命令来自英文词组“read and load data”的缩写，其功能是用于加密信息并生成数据库文件。Linux系统中最常用的数据库文件生成工具之一，能够将用户信息进行hash加密并生成db数据库文件，方便第三方应用程序调用。

* 源文件内容为明文形式，奇数行为用户名，偶数行为密码。

**语法格式：** db_load [参数] 源文件名 目标数据库名

**常用参数：**

-f指定用户名和密码文件-t指定数据库的加密格式

**参考示例**

新建一个用户名和密码文件，并对其进行hash加密操作：

```
[root@linuxcool ~]# cat users.txt
linuxprobe
redhat
linuxcool
redhat
[root@linuxcool ~]# db_load -T -t hash -f users.txt users.db
```
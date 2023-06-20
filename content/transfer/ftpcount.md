---



title: "ftpcount命令 – 显示当前登录FTP的用户人数"
description: "ftpcount命令 – 显示当前登录FTP的用户人数"
keywords: "ftpcount命令 – 显示当前登录FTP的用户人数"
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

执行ftpcount这项命令可得知目前用FTP登入系统的人数以及FTP登入人数的上限。

**语法格式：** ftpcount [参数]

**常用参数：**

-f指定文件的路径-h显示帮助

**参考实例**

直接查询FTP服务器上用户的人数：

```
[root@linuxcool ~]# ftpcount
```
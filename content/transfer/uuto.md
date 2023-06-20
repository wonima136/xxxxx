---



title: "uuto命令 – 将文件传送到远端的UUCP主机"
description: "uuto命令 – 将文件传送到远端的UUCP主机"
keywords: "uuto命令 – 将文件传送到远端的UUCP主机"
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

uuto命令为script文件，它实际上会执行uucp，用来将文件传送到远端UUCP主机，并在完成工作后，以邮件通知远端主机上的用户。

**语法格式：** uuto [文件]

**常用参数：**

文件需要执行的传送文件目的指定目标文件路径

**参考实例**

将文件传送到远程UUCP主机localhost的tmp目录：

```
[root@linuxcool ~]# uuto ./testfile localhost/tmp
```

将文件传送到远程UUCP主机localhost 的www目录：

```
[root@linuxcool ~]# uuto ./testfile localhost/www
```

将文件传送到远程UUCP主机localhost 的test目录：

```
[root@linuxcool ~]# uuto ./testfile localhost/test
```

将文件传送到远程UUCP主机localhost 的test1目录:

```
[root@linuxcool ~]# uuto ./testfile localhost/test1
```

将文件传送到远程UUCP主机localhost 的test2目录:

```
[root@linuxcool ~]# uuto ./testfile localhost/test2
```
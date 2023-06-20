---



title: "cancel命令 – 取消已存在的打印任务"
description: "cancel命令 – 取消已存在的打印任务"
keywords: "cancel命令 – 取消已存在的打印任务"
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

cancel指令用来取消已经存在的打印任务。

**语法格式：** cancle [参数] [打印任务号]

**常用参数：**

-a取消所有打印任务 -E当连接到服务器时强制使用加密 -U指定连接服务器时使用的用户名 -h指定连接的服务器名和端口号 -u指定打印任务所属的用户

**参考实例**

取消4号任务：

```
[root@linuxcool ~]# cancle 4
```

使用加密模式：

```
[root@linuxcool ~]# cancle -E 4
```

取消所有打印任务：

```
[root@linuxcool ~]# cancle -a
```

指定4号打印任务所属的用户：

```
[root@linuxcool ~]# cancle -u username 4
```

指定连接服务器时使用的用户名：

```
[root@linuxcool ~]# cancle -U username 4
```
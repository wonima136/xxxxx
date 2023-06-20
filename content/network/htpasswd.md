---



title: "htpasswd命令 – 管理用户基本认证文件"
description: "htpasswd命令 – 管理用户基本认证文件"
keywords: "htpasswd命令 – 管理用户基本认证文件"
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

htpasswd命令是Apache的Web服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。

**语法格式：** htpasswd [参数] [用户和密码]

**常用参数：**

-c创建一个加密文件-n不更新加密文件，只将加密后的用户名密码显示在屏幕上-m默认采用MD5算法对密码进行加密 -d采用CRYPT算法对密码进行加密-p不对密码进行进行加密，即明文密码-s采用SHA算法对密码进行加密-b在命令行中一并输入用户名和密码而不是根据提示输入密码-D删除指定的用户

**参考实例**

添加用户并设置密码：

```
[root@linuxcool ~]# htpasswd -bc .passwd linuxcool 123456
```

在上面生成的密码文件中添加一个用户并设置密码 ：

```
[root@linuxcool ~]# htpasswd -b .passwd linuxprobe 123456
```

删除用户名和密码：

```
[root@linuxcool ~]# htpasswd -D .passwd linuxcool
```

修改密码：

```
[root@linuxcool ~]# htpasswd -D .passwd linuxcool
[root@linuxcool ~]# htpasswd -b .passwd linuxcool 654321
```
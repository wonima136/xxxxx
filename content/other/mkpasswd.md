---



title: "mkpasswd命令 – 生成用户的新密码"
description: "mkpasswd命令 – 生成用户的新密码"
keywords: "mkpasswd命令 – 生成用户的新密码"
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

mkpasswd命令来自英文词组“Make Password”的缩写，其功能是用于生成用户的新密码。mkpasswd命令可以生成出一个适用于用户的随机的新密码，管理员可以指定随机密码的长度及所含字符规则。高阶用户可以结合管道符将新生成出的密码直接作用于用户，一条命令即可设置好新密码。

*随机字符每次均不同，请在正式设置用户密码前保存好，不要忘记哦。

**语法格式：** mkpasswd [参数] 用户名

**常用参数：**

(-c 设置在密码中小写字母的最少个数-C 设置在密码中大写字母的最少个数-d设置密码的最少字符数-l设置生成口令的长度-p指定程序来设置密码（默认：/bin/passwd) -s设置在密码中特殊字符的最少个数-v设置密码互动可见

**参考示例**

生成出一个长度为20字符的新密码：

```
[root@linuxcool ~]# mkpasswd -l 20
I#4Zwretqzyhq3xnsaeo
```

生成出一个含3位数字的新密码：

```
[root@linuxcool ~]# mkpasswd -d 3
c30UMd2h:
```

生成出一个长度为20字符，含5位大写字母的新密码，并自动为指定用户进行新密码设定：

```
[root@linuxcool ~]# mkpasswd -C 5 -l 10 | passwd --stdin linuxcool
Changing password for user linuxcool.
passwd: all authentication tokens updated successfully.
```
---



title: "slappasswd命令 – 设置LDAP管理员密码"
description: "slappasswd命令 – 设置LDAP管理员密码"
keywords: "slappasswd命令 – 设置LDAP管理员密码"
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

slappasswd命令的作用是可以生成LDAP管理员密码。

slappasswd命令支持多种加密方案如：CRYPT、MD5、SMD5、SSHA和SHA。

其中最常用的是：MD5全称为Message Digest algorithm 5，信息摘要算法。SHA全称为Secure Hash Algorithm，安全散列算法。而SHA算法中SHA256相对安全。

**语法格式：** slappasswd [参数]

**常用参数：**

(-h<加密方案>指定加密方案，它支持{CRYPT}、{MD5}、{SMD5}、{SSHA}和{SHA}等方式，默认值是{SSHA}-v启用详细信息模式-g生成随机密码-s<>生成哈希密码-u生成RFC2307值（默认) -c crypt-salt-format生成{CRYPT}密码

**参考实例**

生成SSHA方案密码：

```
[root@linuxcool ~]# slappasswd
```

生成随机密码：

```
[root@linuxcool ~]# slappasswd -g
```

生成哈希密码：

```
[root@linuxcool ~]# slappasswd -s linuxcool
```
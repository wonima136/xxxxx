---



title: "pwdhash命令 – 密码哈希生成器"
description: "pwdhash命令 – 密码哈希生成器"
keywords: "pwdhash命令 – 密码哈希生成器"
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

pwdhash命令的作用是可以在LDIF密码字段中生产可以使用的密码哈希值。

哈希值是一段数据唯一且极其紧凑的数值表示形式。如果散列一段明文而且哪怕只更改该段落的一个字母，随后的哈希都将产生不同的值。要找到散列为同一个值的两个不同的输入，在计算上是不可能的，所以数据的哈希值可以检验数据的完整性。一般用于快速查找和加密算法。

在密码学中，hash算法的作用主要是用于消息摘要和签名，换句话说，它主要用于对整个消息的完整性进行校验。

**语法格式：** pwdhash [参数] [密码]

**常用参数：**

-H显示摘要信息-s<方案>指定要使用的密码方案，比如MD5、SHA1、SHA256、SHA512、SSHA、SSHA256或SSHA512-c<密码><密码2>对密码进行比较-D<配置目录>从ns-slapd配置直接进入密码模式

**参考实例**

产生密码linuxcool的哈希值：

```
[root@linuxcool ~]# pwdhash linuxcool
```

以密码方案MD5产生密码linuxcool的哈希值：

```
[root@linuxcool ~]# pwdhash -s MD5 linuxcool
```

对密码linuxcool和linux产生的哈希值进行比较：

```
[root@linuxcool ~]# pwdhash -c linuxcool linux
```
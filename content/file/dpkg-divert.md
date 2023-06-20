---



title: "dpkg-divert命令 – 将文件安装到转移目录"
description: "dpkg-divert命令 – 将文件安装到转移目录"
keywords: "dpkg-divert命令 – 将文件安装到转移目录"
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

dpkg-divert命令是用于将引起冲突的文件安装到转移目录而非默认目录。

**语法格式:** dpkg-divert [参数] [文件]

**常用参数：**

-- -add添加一个转移文件-- -remove删除一个转移文件-- -list列出匹配的转移-- -truename对应转移文件真实文件名-- -quidet安静模式

**参考实例**

指定软件包wibble安装时，写入/usr/bin/linuxcool.foo，而不是/usr/bin/ linuxcool：

```
[root@linuxcool ~]# dpkg-divert --package wibble --divert /usr/bin/linuxcool.foo --rename /usr/bin/linuxcool
```

指定软件包wibble安装时，删除对/usr/bin/linuxcool的转移修改：

```
[root@linuxcool ~]# dpkg-divert --package wibble --rename --remove /usr/bin/linuxcool
```

删除对/usr/bin/linuxcool的转移修改：

```
[root@linuxcool ~]# dpkg-divert --rename --remove /usr/bin/linuxcool
```

添加一个软件包安装时，写入/usr/bin/linuxcool.foo，而不是/usr/bin/ linuxcool的修改：

```
[root@linuxcool ~]# dpkg-divert --divert /usr/bin/linuxcool.foo --rename /usr/bin/linuxcool
```
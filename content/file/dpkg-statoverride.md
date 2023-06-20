---



title: "dpkg-statoverride命令 – 改写所有权和模式"
description: "dpkg-statoverride命令 – 改写所有权和模式"
keywords: "dpkg-statoverride命令 – 改写所有权和模式"
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

dpkg-statoverride命令是Debian linux下改写软件包状态的实用工具，dpkg-statoverride命令有3个基本功能即添加、删除、和显示改写列表。

使用dpkg-statoverride命令删除改写后，如果希望恢复旧的权限，需要手工设置权限或重新安装包含该文件的软件包。

**语法格式:** dpkg-statoverride [参数]

**常用参数：**

-add为文件添加一个改写-- -remove为文件删除一个改写-- -list显示所有改写列表-- -update如果文件存在，则立刻执行改写操作

**参考实例**

显示当前所有改写列表：

```
[root@linuxcool ~]# dpkg-statoverride --list
```

修改文件夹的权限属性：

```
[root@linuxcool ~]# dpkg-statoverride --update --add nagios nagios 751 /var/lib/nagios3
```

强制修改文件夹的权限属性：

```
[root@linuxcool ~]# dpkg-statoverride --force --update --add root sasl 755 /var/spool/postfix/var/run/saslauthd
```

将文件从数据库中删除：

```
[root@linuxcool ~]# dpkg-statoverride --remove /usr/bin/wall
```
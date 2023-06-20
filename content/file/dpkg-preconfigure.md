---



title: "dpkg-preconfigure命令 – 软件包安装之前询问问题"
description: "dpkg-preconfigure命令 – 软件包安装之前询问问题"
keywords: "dpkg-preconfigure命令 – 软件包安装之前询问问题"
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

dpkg-preconfigure命令用于在Debian linux中软件包安装之前询问问题。如果软件包不需要进行配置，则不会询问任何问题。

在非交互式环境下安装支持debconf的软件时，用户无法在线提供软件的配置项。因此用户需要通过dpkg-preconfigure命令预先指定软件配置。

**语法格式:** dpkg-preconfigure [参数] [软件包]

**常用参数：**

-f选择使用的前端-p感兴趣的最低的优先级问题-- -apt在apt模式下运行

**参考实例**

导入debconf模板：

```
[root@linuxcool ~]# dpkg-preconfigure /var/cache/apt/archives/mysql-server-5.5*.deb
```

安装前询问问题：

```
[root@linuxcool ~]# dpkg-preconfigure mysql-server-5.5*.deb
```

在apt模式下运行：

```
[root@linuxcool ~]# dpkg-preconfigure - -apt
```
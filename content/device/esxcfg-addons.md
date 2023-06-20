---



title: "esxcfg-addons命令 – 列出ESX主机所安装的Addons"
description: "esxcfg-addons命令 – 列出ESX主机所安装的Addons"
keywords: "esxcfg-addons命令 – 列出ESX主机所安装的Addons"
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

esxcfg命令集分为网络管理类、存储管理类、系统管理类等几种类型，esxcfg-addons列出ESX主机所安装的Addons信息，是一种用来操作虚机上的Vsphere的命令。

**语法格式：** esxcfg-addons [参数]

**常用参数：**

-l显示所有安装的Addons信息-e启动已经disabled的Addons

**参考实例**

显示所有安装的Addons信息：

```
[root@linuxcool ~]# esxcfg-addons -l
```

启动已经关闭的Addons：

```
[root@linuxcool ~]# esxcfg-addons -e
```

关闭已经启动的Addons：

```
[root@linuxcool ~]# esxcfg-addons -d
```

显示所有addons版本信息：

```
[root@linuxcool ~]# esxcfg-addons -v
```

查看帮助文档：

```
[root@linuxcool ~]# esxcfg-addons -help
```
---



title: "( linux安装deb包命令 （小编) 以下内容往下看吧，一定会有所收获的哦"
description: "( linux安装deb包命令 （小编) 以下内容往下看吧，一定会有所收获的哦"
keywords: "( linux安装deb包命令 （小编) 以下内容往下看吧，一定会有所收获的哦"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679378481507_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

明天小编给你们分享的是使用linux的dpkg命令管理deb包 **linux安装deb包命令** linux命令vilinux解压命令，相信好多人都不太了解，为了让你们愈发了解 **linux安装deb包命令**，所以给你们总结了以下内容，一起往下看吧。一定会有所收获的哦。

dpkg命令的中文全称是“Debianpackage”，故名意思是DebianLinux系统拿来安装、创建和管理软件包的实用工具。

句型格式：dpkg[参数]

常用参数：﻿

-i

![deb 安装命令 依赖_linux安装deb包命令_linux安装rpm包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679378481507_0.png)

安装软件包

-r

删掉软件包

-l

显示已安装软件包列表

-L

显示于软件包关联的文件

-c

显示软件包内文件列表

参考实例﻿

安装包：

```
[root@linuxcool ~]# dpkg -i package.deb
```

删掉包：

```
[root@linuxcool ~]# dpkg -r package.deb
```

列举当前已安装的包：

```
[root@linuxcool ~]# dpkg -l
```

列举deb包的内容：

```
[root@linuxcool ~]# dpkg -c package.deb
```

配置：

```
[root@linuxcool ~]# dpkg --configure package
```

关于使用linux的dpkg命令管理deb包就分享到这儿了，希望以上内容可以对你们有一定的参考价值，可以学因而用。假如喜欢本篇文章，不妨把它分享出去让更多的人听到。
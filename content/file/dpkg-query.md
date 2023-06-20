---



title: "dpkg-query命令 – 在dpkg数据库中查询软件包"
description: "dpkg-query命令 – 在dpkg数据库中查询软件包"
keywords: "dpkg-query命令 – 在dpkg数据库中查询软件包"
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

dpkg-query命令是Debian linux中软件包的查询工具，它从dpkg软件包数据库中查询并显示软件包的信息。

查询软件包时，软件包的名称支持通配符，如“gcc*”将查询所有以“gcc”开头的软件包。

**语法格式:** dpkg-query [参数] [软件包]

**常用参数：**

-l列出符合匹配模式的软件包-s查询软件包的状态信息-L显示软件包所安装的文件列表-S从安装的软件包中查询文件-w显示软件包信息-c显示软件包的控制文件路径-p显示软件包的细节

**参考实例**

查找文件linuxcool_1在哪个包里安装：

```
[root@linuxcool ~]# dpkg-query -S linuxcool_1
```

查看软件包详细信息：

```
[root@linuxcool ~]# dpkg-query -s gimp
```

查看软件包安装时安装到系统的文件列表：

```
[root@linuxcool ~]# dpkg-query -L gimp
```

列出所有安装的包：

```
[root@linuxcool ~]# dpkg-query -l
```
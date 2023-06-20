---



title: "apt-sortpkgs命令 – 排序软件包索引文件"
description: "apt-sortpkgs命令 – 排序软件包索引文件"
keywords: "apt-sortpkgs命令 – 排序软件包索引文件"
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

apt-sortpkgs命令是Debian linux下对软件包索引文件进行排序的简单工具。

该命令会获取索引文件(源索引或包索引)并对记录进行排序，它还将根据内部排序规则对每个记录的内部字段进行排序。

**语法格式:** apt-sortpkgs [参数] [文件]

**常用参数：**

-c指定要使用的配置文件-s使用源索引字段排序-o设置配置选项-h显示帮助信息

**参考实例**

排序软件包(Packages)索引文件：

```
[root@linuxcool ~]# apt-sortpkgs Packages
```

使用指定的配置文件进行操作：

```
[root@linuxcool ~]# apt-sortpkgs -c Packages
```

使用源索引字段进行排序：

```
[root@linuxcool ~]# apt-sortpkgs -s Packages
```
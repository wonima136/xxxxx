---



title: "slocate命令 – 查找文件或目录"
description: "slocate命令 – 查找文件或目录"
keywords: "slocate命令 – 查找文件或目录"
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

slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信息 。

**语法格式：** slocate [参数] [目录]

**常用参数：**

-d指定数据库所在的目录 -u 更新slocate数据库 --help  查看帮助信息 --version  显示版本信息

**参考实例**

使用指令”slocate”显示文件名中含有关键字”fdisk”的文件路径信息：

```
[root@linuxcool ~]# slocate fdisk
```
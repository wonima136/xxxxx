---



title: "mkdir命令 – 创建目录文件"
description: "mkdir命令 – 创建目录文件"
keywords: "mkdir命令 – 创建目录文件"
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

mkdir命令来自英文词组”make directories“的缩写，其功能是用来创建目录文件。使用方法简单，但需要注意若要创建的目标目录已经存在，则会提示已存在而不继续创建，不覆盖已有文件。而目录不存在，但具有嵌套的依赖关系时，例如/Dir1/Dir2/Dir3/Dir4/Dir5，要想一次性创建则需要加入-p参数，进行递归操作。

**语法格式 :** mkdir [参数] 目录名

**常用参数：**

-m创建目录的同时设置权限-p递归创建多级目录-v显示执行过程详细信息-z设置目录安全上下文

**参考示例**

建立一个目录文件：

```
[root@linuxcool ~]# mkdir Dir1
```

创建一个目录文件并设置700权限，不让除所有主以外任何人读、写、执行它：

```
[root@linuxcool ~]# mkdir -m 700 Dir2
```

一次性创建多个目录文件：

```
[root@linuxcool ~]# mkdir Dir3 Dir4 Dir5
```

在系统根目录中，一次性创建多个有嵌套关系的目录文件：

```
[root@linuxcool ~]# mkdir -p /Dir1/Dir2/Dir3/Dir4/Dir5
```
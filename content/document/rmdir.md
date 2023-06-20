---



title: "rmdir命令 – 删除空目录文件"
description: "rmdir命令 – 删除空目录文件"
keywords: "rmdir命令 – 删除空目录文件"
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

rmdir命令来自英文词组“remove directory”的缩写，其功能是用于删除空目录文件。rmdir命令仅能够删除空内容的目录文件，如需删除非空目录时，则需要使用带有-R参数的rm命令进行操作。而rmdir命令的-p递归删除操作并不意味着能删除目录中已有的文件，而是要求每个子目录都必须是空的。

**语法格式：** rmdir [参数] 目录名

**常用参数：**

-p递归处理所有子文件-v显示执行过程详细信息--help显示帮助信息--version显示版本信息

**参考示例**

删除指定的空目录：

```
[root@linuxcool ~]# rmdir Dir
```

删除指定的空目录，及其内的子空目录：

```
[root@linuxcool ~]# rmdir -p Dir
```

删除指定的空目录，并显示删除的过程：

```
[root@linuxcool ~]# rmdir -v Dir
rmdir: removing directory, 'Dir'
```
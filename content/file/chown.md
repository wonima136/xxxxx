---



title: "chown命令 – 改变文件或目录的用户和用户组"
description: "chown命令 – 改变文件或目录的用户和用户组"
keywords: "chown命令 – 改变文件或目录的用户和用户组"
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

chown命令来自英文词组“change owner”的缩写，其功能是用于改变文件或目录的用户和用户组信息。管理员可以改变一切文件的所属信息，而普通用户只能改变自己文件的所属信息。

**语法格式：** chown [参数] 所属主:所属组 文件名

**常用参数：**

-c显示所属变更信息-f若该文件拥有者无法被更改也不显示错误-h仅对链接文件进行更改，而非真正指向的文件-P不遍历任何符号链接-R递归处理所有子文件-v显示执行过程详细信息--help显示帮助信息--no-preserve-root不特殊对待根目录--preserve-root不允许在根目录上执行递归操作--version 显示版本信息

**参考示例**

改变指定文件的所属主与所属组：

```
[root@linuxcool ~]# chown root:root File.txt
```

改变指定文件的所属主与所属组，并显示过程：

```
[root@linuxcool ~]# chown -c linuxprobe:linuxprobe /Dir
changed ownership of '/Dir' from root:root to linuxprobe:linuxprobe
```

改变指定目录及其内所有子文件的所属主与所属组：

```
[root@linuxcool ~]# chown -R root:root /Dir
```
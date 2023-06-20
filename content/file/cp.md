---



title: "cp命令 – 复制文件或目录"
description: "cp命令 – 复制文件或目录"
keywords: "cp命令 – 复制文件或目录"
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

cp命令来自英文单词“copy”的缩写，中文译为“复制”，其功能是用于复制文件或目录。cp命令能够将一个或多个文件或目录复制到指定位置，亦常用于文件的备份工作。-r参数用于递归操作，复制目录时若忘记添加则会直接报错，而-f参数则用于当目标文件已存在时会直接覆盖不再询问，这两个参数尤为常用。

**语法格式：** cp [参数] 源文件名 目标文件名

**常用参数：**

-a功能等价于“pdr”参数组合-b覆盖目标文件前先进行备份-d复制链接文件时，将目标文件也建立成链接文件-f若目标文件已存在，则会直接覆盖-i若目标文件已存在，则会询问是否覆盖-l对源文件建立硬链接，而非复制文件-p保留源文件或目录的所有属性信息-r递归复制所有子文件-s对源文件建立软链接，而非复制文件 -v显示执行过程详细信息

**参考示例**

复制指定源文件，并定义新文件名称：

```
[root@linuxcool ~]# cp File1.cfg File2.cfg
```

复制指定源目录，并定义新目录名称：

```
[root@linuxcool ~]# cp -r Dir1 Dir2
```

复制文件时，保留其原始权限及用户归属信息：

```
[root@linuxcool ~]# cp -a File1.cfg File2.cfg
```

将指定文件复制到/etc目录中，并覆盖已有文件，不进行询问：

```
[root@linuxcool ~]# cp -f File1.cfg /etc
```

将多个文件一同复制到/etc目录中，如已有目标文件名称则默认询问是否覆盖：

```
[root@linuxcool ~]# cp File1.cfg File2.cfg /etc
cp: overwrite '/etc/File1.cfg'? y
```
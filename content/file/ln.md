---



title: "ln命令 – 为文件创建快捷方式"
description: "ln命令 – 为文件创建快捷方式"
keywords: "ln命令 – 为文件创建快捷方式"
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

(ln命令来自英文单词“link”的缩写，中文译为“链接”，其功能是用于为某个文件在另外一个位置建立同步的链接。Linux系统中的链接文件有两种形式，一种是硬链接（hard link) ，另一种是软链接（symbolic link）。软链接相当于Windows系统中的快捷方式文件，原始文件被移动或删除后，软链接文件也将无法使用，而硬链接则是通过将文件的inode属性块进行了复制 ，因此把原始文件移动或删除后，硬链接文件依然可以使用。

**语法格式：** ln [参数] 源文件名 目标文件名

**常用参数：**

-b为已存在的目标文件创建备份-d允许管理员创建目录的硬链接-f强制创建链接而不询问-i若目标文件已存在，则需要用户二次确认-L若目标文件为软链接时，找到其对应文件-n将指向目录的软链接视为普通文件-P若目标文件为软链接时，直接链接它自身-r创建相对于文件位置的软链接-s对源文件创建软链接-S设置备份文件的后缀-t设置链接文件存放于哪个目录-v显示执行过程详细信息--backup备份已存在的文件--help显示帮助信息--version显示版本信息

**参考示例**

(为指定的源文件创建快捷方式（默认为硬链接形式) ：

```
[root@linuxcool ~]# ln File1.cfg File2.cfg
```

(为指定的源文件创建快捷方式（设定为软链接形式) ：

```
[root@linuxcool ~]# ln -s File1.cfg File2.cfg
```

在指定的源文件创建快捷方式，并输出制作的过程信息：

```
[root@linuxcool ~]# ln -v File1.cfg File2 .cfg
'File1.cfg' => 'File2.cfg'
```
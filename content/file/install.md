---



title: "install命令 – 复制文件和设置权限属性"
description: "install命令 – 复制文件和设置权限属性"
keywords: "install命令 – 复制文件和设置权限属性"
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

install命令来自英文单词“安装”，但单词含义与功能无任何关联，其功能是用于复制文件和设置权限属性。使用install命令能够在复制文件的同时设置所有权和权限模式，一次性完成cp和chmod两条命令的工作内容。

**语法格式：** install [参数] 源文件名 目标文件名

**常用参数：**

-c比较源文件和目标文件-d将所有参数视为目标名称-D递归处理所有子文件-g设置所属组-m设置权限属性-o设置所属用户-p同步源文件和目标文件的访问和修改时间-s拆解二进制程序文件-S覆盖常用备份文件后缀-t将源文件所有参数复制到指定目录-T将目标文件视为普通文件--help显示帮助信息--version显示版本信息

**参考示例**

创建指定名称的新目录：

```
[root@linuxcool ~]# install -d /home/Dir
```

复制文件到目录中：

```
[root@linuxcool ~]# install File.cfg /home/Dir
```

复制文件到目录中，并设置权限属性：

```
[root@linuxcool ~]# install -m 644 File.cfg /home/Dir
```

复制文件并设置所属用户及用户组：

```
[root@linuxcool ~]# install -o linuxcool -g linuxcool File1.cfg File2.cfg
```

复制文件到不存在的目录中，自动创建它：

```
[root@linuxcool ~]# install -D File.cfg /home/Dir
```
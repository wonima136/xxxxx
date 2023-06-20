---



title: "file命令 – 识别文件类型"
description: "file命令 – 识别文件类型"
keywords: "file命令 – 识别文件类型"
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

file命令的功能是用于识别文件类型，也可以用来辨别一些内容的编码格式。由于Linux系统并不是像Windows系统那样通过扩展名来定义文件类型的，因此用户无法直接通过文件名来进行区别。file命令则是为了解决此问题，通过分析文件头部信息中的标识信息来显示文件类型，使用很方便。

**语法格式：** file [参数] 文件名

**常用参数：**

-b不显示文件名-c显示执行过程-f显示文件类型信息-i显示MIME类别信息-L显示符号链接所指向文件的类型-m指定魔法数字文件 -v显示版本信息-z尝试去解读压缩内的文件内容

**参考示例**

查看指定文件的类型：

```
[root@linuxcool ~]# file File.cfg
File.cfg: ASCII text
[root@linuxcool ~]# file Dir
Dir: directory
[root@linuxcool ~]# file /dev/sda
/dev/sda: block special (8/0)
[root@linuxcool ~]# file /bin/ls
/bin/ls: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=937708964f0f7e3673465d7749d6cf6a2601dea2, stripped, too many notes (256)
```

查看指定文件的类型，但不显示文件名：

```
[root@linuxcool ~]# file -b File.cfg
ASCII text
```

通过MIME来分辨指定文件的类型：

```
[root@linuxcool ~]# file -i File.cfg
File.cfg: text/plain; charset=us-ascii
```

查看符号链接文件的类型，会提示实际的文件名称：

```
[root@linuxcool ~]# file /dev/cdrom
/dev/cdrom: symbolic link to sr0
```

直接查看指定符号链接文件所对应的目标文件的类型：

```
[root@linuxcool ~]# file -L /dev/cdrom
/dev/cdrom: block special (11/0)
```
---



title: "linux系统压缩格式有哪些文件"
description: "linux系统压缩格式有哪些文件"
keywords: "linux系统压缩格式有哪些文件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683748976538_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

tar

用于对文件进行打包压缩或解压

在linux系统中，常见的压缩格式有.tar.tar.bz2.tar.gz

-c|创建压缩文件

-x|解开压缩文件

-t|查看压缩包内有什么文件

-z|用Gzip压缩或解压

-j|用bzip2压缩或解压

![linux 常见文件打包压缩命令_linux中只压缩不打包命令_linux压缩命令 zip](https://www.linuxcool.com/wp-content/uploads/2023/05/1683748976538_0.jpg)

-v|显示压缩或解压的过程

-f|目标文件名

-p|保留原始的权限和属性

-P|使用绝对路径来压缩

-C|指定解压到的目录

-f参数一定要放在参数的最后一位

常用压缩命令格式

```
tar -czvf 压缩包名称.tar.gz  要打包的目录
```

常用解压缩命令格式

```
tar -xzvf 压缩包名称.tar.gz  -C 解压到的目录
```

grep

用于在文本中执行关键词搜索

-b|将可执行文件当成文本文件来搜索，不常用

-c|仅显示找到的行数

-i|忽视大小写

-n|显示行号

![linux 常见文件打包压缩命令_linux压缩命令 zip_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683748976538_1.png)

-v|反向选择，仅列举没有关键词的行

在/etc/passwd中百度网盘LINUX，搜索富含/sbin/nologin的行

```
ronghe@DESKTOP-SLVD5EM:~$ grep /sbin/nologin /etc/passwd
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
games:x:5:60:games:/usr/games:/usr/sbin/nologin
...
...
...
```

find

用于根据指定条件来搜索文件

命令格式如下

```
find   查找路径   寻找条件   操作
```

-name|匹配名称

-perm|匹配权限(mode为完全匹配linux主机，-mode为包含即可)

-user|匹配所有者

-group|匹配所有组

-mtime-n+n|匹配更改内容的时间 **linux 常见文件打包压缩命令**，-n指n天以内，+n指n天曾经

-atime-n+n|匹配访问内容的时间，-n指n天以内，+n指n天曾经

-ctime-n+n|匹配更改文件权限的时间，-n指n天以内，+n指n天曾经

-nouser|匹配无所有者的文件

-nogroup|匹配无所有组的文件

![linux压缩命令 zip_linux 常见文件打包压缩命令_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683748976538_2.jpg)

-newerf1!f2|匹配比文件f1新但比f2旧的文件

—typeb/d/c/p/l/f|匹配文件类型(前面的字母参数依次表示块设备、目录、字符设备、管道、链接文件、文本文件)

-size|匹配文件的大小(+50KB为查找超过50KB的文件 **linux 常见文件打包压缩命令**，而-50KB为查找大于50KB的文件)

-prune|忽视某个目录

-exec…{};|前面可跟用于进一步处理搜索结果的命令

​

​

​
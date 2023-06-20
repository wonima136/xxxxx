---



title: "mmove命令 – 移动文件或目录"
description: "mmove命令 – 移动文件或目录"
keywords: "mmove命令 – 移动文件或目录"
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

Linux mmove命令用于在MS-DOS文件系统中，移动文件或目录，或更改名称。

mmove为mtools工具命令，模拟MS-DOS的move命令，可在MS-DOS文件系统中移动现有的文件或目录，或是更改现有文件或目录的名称。

**语法格式：** mmove [源文件或目录] [目标文件或目录]

**常用参数：**

源文件或目录 执行操作的源文件或目录路径 目标文件或目录 执行操作后的目标文件或目录路径

**参考实例**

使用指令mmove将文件a.txt移动到目录dir中：

```
[root@linuxcool ~]# mmove a.txt dir
```

使用指令mmove将文件”autorun.bat”移动到目录”test”中 ：

```
[root@linuxcool ~]# mmove autorun.bat test
```

以上命令执行以后，指令mmove会将文件”autorun.bat”移动到指定目录”test”中。

使用指令mmove将文件test移动到目录”autorun.bat”中 ：

```
[root@linuxcool ~]# mmove test autorun.bat
```

注意：用户可以使用mdir指令查看移动后的文件或目录信息。

使用该命令前先查看原来的目录，得到如下结果：

```
[root@linuxcool ~]# mdir -/ a:*
Volume in drive A has no label #加载信息
Volume Serial Number is 13D2~055C
Directory for A:/ #以下为目录信息
#文件名目录大小 修改时间
./TEST <DIR> 2009-09-23 16:59
AUTORUN.INF 265 2009-09-23 16:53
AUTORUN.BAT 43 2009-09-23 16:56
3 files 308 bytes #统计总大小
724 325 bytes free #剩余空间
```

使用mmove命令，并再次查看，结果如下：

```
[root@linuxcool ~]# mmove autorun.bat test
[root@linuxcool ~]# mdir -/ a:*
Volume in drive A has no label #加载信息
Volume Serial Number is 13D2~055C
Directory for A:/ #以下为目录信息
#文件名目录大小 修改时间
./TEST <DIR> 2009-09-23 16:59
AUTORUN.INF 265 2009-09-23 16:53
2 files 265 bytes #统计总大小
724 683 bytes free #剩余空间
cmd@cmd-desktop:~$ mdir -/ a:test* #再次查看test目录中文件
AUTORUN.BAT 43 2009-09-23 16:56
1 files 43 bytes #统计总大小
```
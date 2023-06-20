---



title: "mattrib命令 – 更改或显示MS-DOS文件的属性"
description: "mattrib命令 – 更改或显示MS-DOS文件的属性"
keywords: "mattrib命令 – 更改或显示MS-DOS文件的属性"
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

(mattrib命令用于变更或显示MS-DOS文件的属性，MS-DOS文件是指记录在存储介质（如磁盘、光盘) 上的一组相关信息的集合。

mattrib为mtools工具指令，模拟MS-DOS的attrib指令，可变更MS-DOS文件的属性 。

**语法格式：** mattrib [参数] [文件]

**常用参数：**

-a/+a除去/设定备份属性 -h/+h  除去/设定隐藏属性 -r/+r 除去/设定只读属性 -s/+s 除去/设定系统属性 -/ 递归的处理包含所有子目录的文件-X 以较短的格式输出结果

**参考实例**

列出 A 槽 MSDOS 格式磁片上所有文件的属性：

```
[root@linuxcool ~]# mattrib a:
```

除去 A 槽磁片上 msdos.sys 档案的隐藏属性 ：

```
[root@linuxcool ~]# mattrib -h a:msdos.sys
```

增加 A 槽磁片上 msdos.sys 档案的只读属性 ：

```
[root@linuxcool ~]# mattrib +r a:msdos.sys
```

除去 A 槽磁片上 msdos.sys 档案的备份、系统属性 ：

```
[root@linuxcool ~]# mattrib -a -s a:msdos.sys
```

除去 A 槽磁片上包含子目录下所有档案的只读属性：

```
[root@linuxcool ~]# mattrib -r -/ a:*.*
```
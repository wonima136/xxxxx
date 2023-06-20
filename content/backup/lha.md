---



title: "lha命令 – 压缩或解压文件"
description: "lha命令 – 压缩或解压文件"
keywords: "lha命令 – 压缩或解压文件"
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

lha是从lharc演变而来的压缩程序，文件经它压缩后，会另外产生具有”.lzh”扩展名的压缩文件。

**语法格式：** lha [参数] [文件]

**常用参数：**

-a压缩文件，并加入到压缩文件内 -c压缩文件，重新建构新的压缩文件后，再将其加入 -d从压缩文件内删除指定的文件 -x解开压缩文件 -t检查备份文件内的每个文件是否正确无误

**参考实例**

压缩a.b文件，压缩后生成 abc.lhz文件：

```
[root@linuxcool ~]# lha -a abc.lhz a.b
```

压缩目录：

```
[root@linuxcool ~]# lha -a abc2 /home/linuxcool
```

解压文件到当前目录：

```
[root@linuxcool ~]# lha -xiw=agis abc
```

列出压缩文件的相关信息：

```
[root@linuxcool ~]# lha -l abc.lhz
```

检查备份文件内的每个文件是否正确无误：

```
[root@linuxcool ~]# lha -t abc.lhz
```
---



title: "mktemp命令 – 建立暂存文件"
description: "mktemp命令 – 建立暂存文件"
keywords: "mktemp命令 – 建立暂存文件"
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

mktemp用来建立暂存文件，其创建的临时文件是唯一的 ，供shell 使用 。

默认情况下，mktemp会在本地当前目录创建一个临时文件，创建临时文件时只需要创建模板文件，模板可以包含任意的文件名，文件末尾可以根据需要添加n个x。

**语法格式：** mktemp [参数] [文件]

**常用参数：**

-q  执行时若发生错误，不会显示任何信息-u 暂存文件会在mktemp结束前先行删除

**参考实例:**

生成临时文件，文件名参数应当以”文件名.XXXX”的形式给出 ：

```
[root@linuxcool ~]# mktemp tmp.xxxx
```

生成临时目录：

```
[root@linuxcool ~]# mktemp -d
```

在指定目录下生成临时文件：

```
[root@linuxcool ~]# mktemp -d --tmpdir=/home abc.XXX
```

自定义文件模板，并且生成在系统目录下：

```
[root@linuxcool ~]# mktemp -t abc.XXXXXX
```

自定义文件模板，并且生成在系统目录下， 执行时若发生错误，不会显示任何信息 ：

```
[root@linuxcool ~]# mktemp -t -q abc.XXXXXX
```
---



title: "dos2unix命令 – 将DOS格式的文本文件转换成UNIX格式"
description: "dos2unix命令 – 将DOS格式的文本文件转换成UNIX格式"
keywords: "dos2unix命令 – 将DOS格式的文本文件转换成UNIX格式"
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

(dos2unix命令用来将DOS格式的文本文件转换成UNIX格式的（DOS/MAC to UNIX text file format converter) 。DOS下的文本文件是以rn作为断行标志的，表示成十六进制就是0D 0A。而Unix下的文本文件是以n作为断行标志的，表示成十六进制就是0A。

DOS格式的文本文件在Linux下，用较低版本的vi打开时行尾会显示^M，而且很多命令都无法很好的处理这种格式的文件。如果是个shell脚本，而Unix格式的文本文件在Windows下用Notepad打开时会拼在一起显示。因此产生了两种格式文件相互转换的需求，对应的将UNIX格式文本文件转成成DOS格式的是unix2dos命令。

**语法格式：** dos2unix [参数] [文件]

**常用参数：**

-k保持输出文件的日期不变-q安静模式，不提示任何警告信息-V查看版本-c转换模式：ASCII 7bit ISO Mac-o写入到源文件-n写入到新文件

**参考实例**

最简单的用法就是dos2unix直接跟上文件名：

```
[root@linuxcool ~]# dos2unix file
```

(如果一次转换多个文件，把这些文件名直接跟在dos2unix之后。（注：也可以加上-o参数，也可以不加，效果一样) 

```
[root@linuxcool ~]# dos2unix file1 file2 file3
[root@linuxcool ~]# dos2unix -o file1 file2 file3
```

上面在转换时，都会直接在原来的文件上修改，如果想把转换的结果保存在别的文件，而源文件不变，则可以使用-n参数。

```
[root@linuxcool ~]# dos2unix -n oldfile newfile
```

如果要保持文件时间戳不变，加上-k参数。所以上面几条命令都是可以加上-k参数来保持文件时间戳的。

```
[root@linuxcool ~]# dos2unix -k file
[root@linuxcool ~]# dos2unix -k file1 file2 file3
[root@linuxcool ~]# dos2unix -k -o file1 file2 file3
[root@linuxcool ~]# dos2unix -k -n oldfile newfile
```
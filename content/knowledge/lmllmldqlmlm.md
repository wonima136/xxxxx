---



title: "Linuxdiff命令Linux命令大全Linux命令命令"
description: "Linuxdiff命令Linux命令大全Linux命令命令"
keywords: "Linuxdiff命令Linux命令大全Linux命令命令"
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

Linux diff命令Linux diff命令

Linux 命令大全

Linux diff命令用于比较文件的差异。

diff以逐行的方式，比较文本文件的异同处。如果指定要比较目录linux嵌入式开发，则diff会比较目录中相同文件名的文件 **linux命令column linux命令column** linux安装教程，但不会比较其中子目录。

语法

```
diff [-abBcdefHilnNpPqrstTuvwy][-][-C ][-D ][-I ][-S ][-W ][-x ][-X ][--help][--left-column][--suppress-common-line][文件或目录1][文件或目录2]
```

参数：

-- 指定要显示多少行的文本。此参数必须与-c或-u参数一并使用。-a或--text diff预设只会逐行比较文本文件。-b或--ignore-space-change 不检查空格字符的不同。实例1：比较两个文件

```

[root@localhost test3]# diff log2014.log log2013.log
3c3
 2013-03
8c8
 2013-08

11,12d10
< 2013-11
< 2013-12
```

上面的”3c3″和”8c8″表示log2014.log和log20143log文件在3行和第8行内容有所不同；”11,12d10″表示第一个文件比第二个文件多了第11和12行。

实例2：并排格式输出

```
[root@localhost test3]# diff log2014.log log2013.log  -y -W 50
2013-01                 2013-01

2013-02                 2013-02
2014-03               | 2013-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06
2013-07                 2013-07
2013-07               | 2013-08
2013-09                 2013-09
2013-10                 2013-10

2013-11               <
2013-12               <
[root@localhost test3]# diff log2013.log log2014.log  -y -W 50
2013-01                 2013-01
2013-02                 2013-02
2013-03               | 2014-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06

2013-07                 2013-07
2013-08               | 2013-07
2013-09                 2013-09
2013-10                 2013-10
                      > 2013-11
                      > 2013-12
```

说明：

Linux 命令大全

Linux diff命令
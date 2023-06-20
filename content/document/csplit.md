---



title: "csplit命令 – 分割文件"
description: "csplit命令 – 分割文件"
keywords: "csplit命令 – 分割文件"
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

csplit命令的英文全称是“context split”，该命令用于将一个大文件分割成小的碎片，并且将分割后的每个碎片保存成一个文件。碎片文件的命名类似“xx00”，“xx01”。csplit命令是split的一个变体，split只能够根据文件大小或行数来分割，但csplit能够根据文件本身特点来分割文件。

**语法参数：** csplit [参数]

**常用参数：**

-b<输出格式>或--suffix-format=<输出格式> 预设的输出格式其文件名称为xx00，xx01等，用户可以通过改变<输出格式>来改变输出的文件名 -f<输出字首字符串>或--prefix=<输出字首字符串> 预设的输出字首字符串其文件名为xx00，xx01等，如果制定输出字首字符串为“hello”，则输出的文件名称会变成hello00，hello、01…… -k或--keep-files 保留文件，就算发生错误或中断执行，与不能删除已经输出保存的文件-n<输出文件名位数>或--digits=<输出文件名位数> 预设的输出文件名位数其文件名称为xx00，xx01……如果用户指定输出文件名位数为“3”，则输出的文件名称会变成xx000，xx001等-q或-s或--quiet或--silent 不显示指令执行过程 -z或--elide-empty-files 删除长度为0 Byte文件。

**参考实例**

将文本文件filename以第 2 行为分界点切割成两份：

```
[root@linuxcool ~]# csplit filename 2
```

将文本文件filename以120行为分界点切割成2份，并指定输出文件名的位数为3：

```
[root@linuxcool ~]# csplit -n 3 filename 120
```

将文本文件textfile以120行为分界点切割成2份，并指定输出文件名的前缘为fileName位数为3：

```
[root@linuxcool ~]# csplit -f fileName testfile 120
```

将文件 filename 以10行为单位分割8次，并指定输出文件名的格式 :

```
[root@linuxcool ~]# csplit -b "myfile%o% filename 10 {8}
```

将文本文件 filename 以每20行为单位分割：

```
[root@linuxcool ~]# csplit filename 20 {*}
```

把文件以字符串”Chapter X”为分界符，分成两部分：

```
[root@linuxcool ~]# csplit filename /"Chapter X"/
```
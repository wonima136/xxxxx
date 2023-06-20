---



title: "comm命令 – 比较两个已排过序的文件"
description: "comm命令 – 比较两个已排过序的文件"
keywords: "comm命令 – 比较两个已排过序的文件"
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

comm命令会一列列地比较两个已排序文件的差异，并将其结果显示出来，如果没有指定任何参数，则会把结果分成3行显示：第1行仅是在第1个文件中出现过的列，第2行是仅在第2个文件中出现过的列，第3行则是在第1与第2个文件里都出现过的列。若给予的文件名称为”-“，则comm指令会从标准输入设备读取数据。

**语法格式：**[参数] [文件1][文件2]

-1  不显示只在第1个文件里出现过的列-2不显示只在第2个文件里出现过的列 -3不显示只在第1和第2个文件里出现过的列 –help 在线帮助 –version 显示版本信息

**参考实例**

对比文件filename1.txt和filename2.txt：

```
[root@linuxcool ~]# comm filename1.txt filename2.txt
```

打印两个文件的交集，需要删除第一列和第二列：

```
[root@linuxcool ~]# comm filename1.txt filename2.txt -1 -2
```

打印出两个文件中不相同的行，需要删除第三列：

```
[root@linuxcool ~]# comm filename1.txt filename2.txt -3 | sed 's/^t//'
```

相较于filename2.txt，filename1.txt的差集 :

```
[root@linuxcool ~]# comm filename1.txt filename2.txt -2 -3
```

相较于filename1.txt，filename2.txt的差集 :

```
[root@linuxcool ~]# comm filename2.txt filename1.txt -2 -3
```
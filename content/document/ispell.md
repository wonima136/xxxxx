---



title: "ispell命令 – 用于拼写检查程序"
description: "ispell命令 – 用于拼写检查程序"
keywords: "ispell命令 – 用于拼写检查程序"
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

ispell预设会使用/usr/lib/ispell/english.hash字典文件来检查文本文件。若在检查的文件中找到字典没有的词汇，ispell会建议使用的词汇，或是让你将新的词汇加入个人字典。

**语法格式：** ispell [参数]

**常用参数：**

-a当其他程序输出送到ispell时，必须使用此参数 -A读取到”&Include File&”字符串时，就去检查字符串后所指定文件的内容 -b产生备份文件，文件名为.bak -B检查连字错误-C不检查连字错误 -d指定字典文件 -l从标准输入设备读取字符串，结束后显示拼错的词汇 -L指定内文显示的行数 -m自动考虑字尾的变化 -M进入ispell后，在画面下方显示指令的按键 -n检查的文件为noff或troff的格式 -N进入ispell后，在画面下方不显示指令的按键 -p指定个人字典文件 -P不考虑字尾变化的情形 -S不排序建议取代的词汇 -t检查的文件为TeX或LaTeX的格式 -V非ANSI标准的字符会以”M-^”的方式来显示 -w检查时，特别挑出含有指定的字符 -W不检查指定长度的词汇 -x不要产生备份文件

**参考实例**

检查testfile文件：

```
[root@linuxcool ~]# ispell testfile
```

文件testfile中有拼写错误，对该文件进行修改后需备份文件：

```
[root@linuxcool ~]# ispell -b testfile
```
---



title: "sedLinux下如何使用sed命令替换字符串的方法命令"
description: "sedLinux下如何使用sed命令替换字符串的方法命令"
keywords: "sedLinux下如何使用sed命令替换字符串的方法命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

sed命令可以按照规定的格式替换指定文件的字符串并输出，本篇文章我们就来介绍关于Linux下sed命令替换字符串的方式。

要替换字符串，我们须要使用以下格式。

```
$ sed s/替换的目标字符串/替换后的字符串/ 文件名
```

在下边我们替换写为“appleorangemelon”的字符串“sample.txt”。

```
$ sed s/orange/ORANGE/ sample.txt
```

执行结果为

```
appleORANGEmelon
```

![vim中删除光标所在字符命令_linux 字符串命令_串是字符的有限序列](https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_0.jpg)

替换并输出字符串。

另外，如下所示，在cat命令后用“|”连接sed命令也能得到同样的结果。

```
$ cat sample.txt | sed s/apple/APPLE/
```

注意 **linux 字符串命令**，sed命令仅替换字符串并输出它，但不会重写实际文件的内容

倘若要将替换的内容保存在文本中，请使用重定向“>”。

sed命令使用的选项

![vim中删除光标所在字符命令_linux 字符串命令_串是字符的有限序列](https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_1.png)

命令选项

说明

-e

替换为指定的脚本

-f文件

添加指定文件中描述的脚本文件的内容

![串是字符的有限序列_linux 字符串命令_vim中删除光标所在字符命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_2.jpg)

-r

使用扩充正则表达式

sed命令的使用

替换所有行

在以前介绍的格式中，虽然在一个行中存在与多个替换对象字符串匹配的字符串，也仅替换第一个匹配的字符串。

因而，要替换所有匹配的字符串 **linux 字符串命令**，请执行以下操作：

![vim中删除光标所在字符命令_串是字符的有限序列_linux 字符串命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_3.png)

```
$ sed -e s/apple/APPLE/g sample.txt
```

执行结果为

```
APPLEorangemelonAPPLE
```

替换行的开头与结尾

```
$ sed -e "s/^apple/APPLE/" sample.txt
$ sed -e "s/apple$/APPLE/" sample.txt
```

假如要替换多个子字符串，则可以指定多个脚本。

![串是字符的有限序列_linux 字符串命令_vim中删除光标所在字符命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681070668869_4.jpg)

```
$ sed -e "s/apple/APPLE/" -e "s/orange/ORANGE/" sample.txt
```

删掉行

指定“d”以删掉指定的行。诸如，要删掉第二行就为“2d”。

```
$ sed -e &＃39;2d&＃39; sample.txt
```

据悉deepin linux，也可以删掉多行，下边是删掉第1行到第3行。

```
$ sed -e &＃39;1,3d&＃39; sample2.txt
```

本篇文章到这儿就全部结束了，更多精彩内容你们可以关注PHP英文网相关栏目教程！！！

以上就是Linux下怎样使用sed命令替换字符串的详尽内容红联linux论坛，更多请关注第一PHP社区其它相关文章！
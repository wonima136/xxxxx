---



title: "Linux上常见的文件打包与压缩"
description: "Linux上常见的文件打包与压缩"
keywords: "Linux上常见的文件打包与压缩"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683893633780_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

【文件打包与压缩】

介绍

在学习Linux上的压缩工具之前，有必要先了解一下常见常用的压缩包文件格式。在Windows上最常见的不外乎这三种.zip，.rar后缀的压缩文件。而在Linux里面常见的格式不仅以上三种外，还有.gz，.xz，.bz2，.tar，.tar.gz，.tar.xz，*.tar.bz2，简单介绍如下：

```
 文件后缀名  说明
*.zip   zip 程序打包压缩的文件
*.rar   rar 程序压缩的文件
*.7z    7zip 程序压缩的文件
*.tar   tar 程序打包，未压缩的文件
(*.gz    gzip 程序（GNU zip) 压缩的文件
*.xz    xz 程序压缩的文件
*.bz2   bzip2 程序压缩的文件
*.tar.gz    tar 打包，gzip 程序压缩的文件
*.tar.xz    tar 打包，xz 程序压缩的文件
*.tar.bz2   tar 打包，bzip2 程序压缩的文件
*.tar.7z    tar 打包，7z 程序压缩的文件
```

1.1tar【重点把握】

(在Linux里面更常用的是tar工具，tar本来只是一个打包工具，只是同时还是实现了对7z、gzip、xz、bzip2等工具的支持，这种压缩工具本身只能实现对文件或目录（单独压缩目录中的文件) 的压缩。

```
语法：tar [-zjxcvfpP] filename
-z：是否同时用gzip压缩
-j：是否同时用bzip2压缩
-x：解包或者解压缩
-t：查看tar包里面的文件
-c：建立一个tar包或者压缩文件包
-v：可视化
-f：后面跟文件名，压缩时跟-f文件名，意思是压缩后的文件名为filename，解压时跟-f文件名，意思是解压filename。请注意，如果是多个参数组合的情况下带有-f，请把f写到最后面。
(-p：使用原文件的属性，压缩前什么属性压缩后还什么属性。（不常用) 
(-P：可以使用绝对路径。（不常用) 
【实例：】
将桌面上的zhiyou打成rar的包
tar -cvf zhiyou.rar zhiyou
将zhiyou删除，解压缩rar
tar -xvf zhiyou.rar
将桌面上的zhiyou打成tar的包,并进行压缩
tar -cvf zhiyou.tar.gz zhiyou
将zhiyou删除，解压缩rar
tar -xvf zhiyou.tar.gz
```

![linux 常见文件打包压缩命令_linux中只压缩不打包命令_linux把目录打包和压缩](https://www.linuxcool.com/wp-content/uploads/2023/05/1683893633780_0.png)

1.2gzip

[注：gzip只能压缩文件，不能压缩目录]

句型：gzip[-d#]filename其中#为1-9的数字

-d：解压缩时使用

-#：压缩等级，1压缩最差，9压缩最好linux应用程序，6为默认

```
[实例：]
压缩aa.txt文件：
gzip aa.txt    (压缩之后，变成了aa.txt.gz)
解压缩
gzip -d aa.txt.gz
```

1.3bzip2

句型：bzip2[-dz]filename

-d：解压缩

-z：压缩

```
压缩：
bzip2 -z aa.txt   (压缩之后，变成了aa.txt.bz2)
解压缩：
bzip2 -d aa.txt.bz2
```

【管道命令】

(管线是一种通讯机制，一般用于进程间的通讯（也可通过socket进行网路通讯) ，它表现下来的方式就是将上面每一个进程的输出(stdout)直接作为下一个进程的输入(stdin)。

```
管道又分为匿名管道和具名管道。我们在使用一些过滤程序时经常会用到的就是匿名管道，在命令行中由|分隔符表示。具名管道简单的说就是有名字的管道，通常只会在源程序中用到具名管道。
[实例：]
通过管道将前一个命令(ls)的输出作为下一个命令(less)的输入：
ls -al /etc | less
```

![linux把目录打包和压缩_linux 常见文件打包压缩命令_linux中只压缩不打包命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683893633780_1.png)

相关命令

2.1cat复印某一行中的某个数组

句型：cut-d‘分割字符’-ffields

cut-c字符范围

```
-d : 后面接分隔符，与-f一起使用；
-f : 依据-d的分隔符将一段信息切割成为数段，用-f取出第几段的意思；
-c : 以字符(characters)的单位取出固定字符区间；
[实例：]
打印出/etc/passwd中用户名和用户家目录
cut /etc/passwd -d ':' -f 1,6
打印出文件权限，文件所属用户，文件名
ls -l |cut -d  ' ' -f 1,3,12
打印/etc/passwd文件中每一行的前N个字符：
(# 前五个（包含第五个) 
$ cut /etc/passwd -c -5
(# 前五个之后的（包含第五个) 
$ cut /etc/passwd -c 5-
# 第五个
$ cut /etc/passwd -c 5
(# 2到5之间的（包含第五个) 
$ cut /etc/passwd -c 2-5
```

2.2grep剖析一行数据，假如有匹配的，就显示下来

grep(globalsearchregularexpression(RE)andprintouttheline,全面搜索正则表达式并把行复印下来)是一种强悍的文本搜索工具 **linux 常见文件打包压缩命令**，它能使用正则表达式搜索文本，并把匹配的行复印下来。

句型：grep[-acinv][–color=auto]‘查找字符串’filename

```
-a : 将binary文件以text文件的方式查找数据；
-c : 计算找到’查找字符串‘的次数；
-i : 忽略大小写的不同；
-n : 带行号；
-v : 反向选择，显示没有‘查找字符串’的行；
--color=auto : 可以将找到查找的关键字部分加上颜色显示
-r 参数表示递归搜索子目录中的文件
[实例：]
将/etc/passwd，有出现 root 的行取出来：
grep root /etc/passwd
将/etc/passwd，有出现 root 的行取出来,同时显示这些行在/etc/passwd的行号：
grep -n root /etc/passwd
将/etc/passwd，将没有出现 root 和nologin的行取出来：
grep -v root /etc/passwd | grep -v nologin
搜索/home/smile目录下所有包含"zhiyou"的所有文本文件，并显示出现在文本中的行号：
grep -rn "zhiyou" /home/smile
```

2.3wc命令

wc命令是一个统计的工具，主要拿来显示文件所包含的行、字和字节数。

wc命令是wordcount的简写。

句型：wc[-lwm]文件

-l:统计行数

-w:统计字数(英语单字 **linux 常见文件打包压缩命令** 中标linux，由空白、跳格或换行字符分隔的字符串)

-m:统计字符数，这个标志不能与-c标志一起使用

-c:统计字节数

```
[实例：]
统计a.txt文件行数：
wc -l a.txt
统计文件的字符数，只打印数字，不打印文件名：
cat a.txt | wc -m
统计/bin 目录下的命令个数，可以使用如下命令：
ls /bin | wc -l
```

【正则表达式】

它是指一个拿来描述或则匹配一系列符合某个复句规则的字符串的单个字符串。在好多文本编辑器或其他工具里，正则表达式一般被拿来检索和/或替换这些符合某个模式的文本内容。许多程序设计语言都支持借助正则表达式进行字符串操作。对于系统管理员来讲，正则表达式贯串在我们的日常运维工作中，无论是查找某个文档，甚或查询某个日志文件剖析其内容，还会用到正则表达式。

```
正则表达式元字符由以下字符组成：
^ $ . [ ] { } - ? * + ( ) |
正在表达式  描述
^   　匹配行的开始
$　   匹配行尾的文本
.   　匹配除换行符以外的任意字符
[]    匹配包含在[字符]之中的任意一个字符
[^]   匹配除了[^字符]之外的任意一个字符
[-]   匹配[]指定范围内的任意一个字符
{n}   匹配之前的项n次
{n,}  之前的项至少匹配n次
{n,m} 指定之前的项需要匹配的最小和最大次数
?   　匹配之前的项零次或一次
*   　匹配之前的项零次或更多次
+   　匹配之前的项一次或更多次
)    创建一个用于匹配的子串
|     匹配|两边的任意一项
     将上面特殊字符进行转义
w    匹配字母或数字或下划线或汉字
s  　匹配任意的空白符
d  　匹配数字
b  　匹配单词的开始或结束
W  　匹配任意不是字母，数字，下划线，汉字的字符
S  　匹配任意不是空白符的字符
D  　匹配任意非数字的字符
B  　匹配不是单词开头或结束的位置
示例：
^zhiyou 匹配以zhiyou开始的行
$zhiyou 匹配以zhiyou结尾的行
a.c   匹配abc、aac...但不匹配abbc
ab[cd] 匹配abc或abd
1[^01] 匹配12、13，但不匹配10、11
[1-5] 匹配1-5之间的任意一个数字
[0-9]{2} 匹配任意一个两位数
[0-9]{2,} 匹配任意一个两位或更多位数字
[0-9]{2,5} 匹配从两位数到五位数之间的任意一个数字
zhiy?ou   匹配zhiyou 或 zhiou
zhiy*ou   匹配zhiou、zhiyou、zhiyyou
zhiy+ou   匹配zhiyou 、zhiyyou、zhiyyyyou
main)？  匹配 ma或main
12|3)   匹配12或13
a+b     匹配a+b
[实例：]
列出/etc/passwd中带有zy的行
grep 'z.*y' /etc/passwd
利用 Linux 系统自带的字典查找一个五个字母的单词，第三个字母为 j,最后一个字母为 r ，/usr/share/dict 目录下存放字典文件：
grep '^..j.r$' /usr/share/dict/linux.words
验证固定电话，打印符合条件的电话，固定电话格式基本都是带有 0 的区号+连接符“-”＋电话号码，另外还有可能有分机号，区号有 3 位、4 位，电话号码有 7 位和 8 位的：
grep -E "^0[0-9]{2,3}-[0-9]{7,8}(-[0-9]{3,4})?$" telphone.txt
```
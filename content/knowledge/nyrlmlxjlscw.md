---



title: "2023年01月28日Linuxrm命令详解Linux删除文件目录的操作方法"
description: "2023年01月28日Linuxrm命令详解Linux删除文件目录的操作方法"
keywords: "2023年01月28日Linuxrm命令详解Linux删除文件目录的操作方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linuxrm命令解读Linux删掉文件目录的操作方式

更新时间：2023年01月28日10:35:06作者：士别十日wyx

这篇文章主要介绍了Linuxrm命令解读，Linux删掉文件目录,本文给你们介绍的十分详尽，对你们的学习或工作具有一定的参考借鉴价值，须要的同学可以参考下

目录

rm命令作用：删掉文件或目录

参数：

一、常用操作

```
(rm 文件名			# 删除文件（询问确认) 
(rm -f a.txt			# 删除文件（不询问) 
rm -f *.txt			# 删除以 txt 结尾的文件
rm -f a*			# 删除以 a 开头的文件
rm -f ./-file		# 删除以 - 开头的文件
(rm -f a.txt b.txt	# 同时删除多个文件（空格间隔) 
rm -f .*			# 删除隐藏文件
(rm -r 目录			# 删除目录（询问确认) 
(rm -rf 目录			# 删除目录（不询问) 
rm -rfv 目录			# 显示删除步骤
rm -df *			# 只删除空目录
```

1.删掉文件

(1) rm前面直接跟文件名，可以删掉文件linux视频，删掉前会寻问是否删掉（y确认，n取消）。

![linux ln命令 删除_linux删除命令_linux删除命令使用经验](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_0.png)

```
rm 文件名
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_1.png)

(2) 假如不须要寻问，直接删掉，可以加上-f参数

```
rm -f a.txt
```

(3) 删掉所有txt结尾的文件，配合键值

```
rm -f *.txt
```

(4) 删掉所有a开头的文件

![linux ln命令 删除_linux删除命令使用经验_linux删除命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_4.jpg)

```
rm -f a*
```

这些格式也可以，./代表当前目录 **linux删除命令**，意思是删掉当前目录下所有a开头的文件。

```
rm -f ./a*
```

(5) 同时删掉多个文件，用空格间隔

```
rm -f a.txt b.txt
```

提示：文件名可以用Tab键补全，避免自动输入错误。

![linux ln命令 删除_linux删除命令使用经验_linux删除命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_8.jpg)

(6) 删掉隐藏文件

rm-f*并不能删掉隐藏文件，想要删掉隐藏文件，可以使用转义

```
rm -f .*
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_9.png)

其实，.和..这两个目录依然不会被删掉

2.删掉目录

(1) 删掉目录须要使用-r参数（文件可以直接删，但目录不能直接删），默认会寻问是否删掉（y确认，n取消）。

```
rm -r 目录
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_10.png)

![linux ln命令 删除_linux删除命令_linux删除命令使用经验](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_11.png)

(2) 加上-f参数，可以直接删掉，不再寻问。

```
rm -rf 目录
```

(3) 显示删掉的步骤

```
rm -rfv test/
```

(4) 使用-d参数，可以只删掉空目录。

像下边这样，我删掉当前目录下的所有目录，只有空目录被删掉linux中文乱码，非空的目录就被跳过，不会删掉。

```
rm -df *
```

![linux删除命令_linux ln命令 删除_linux删除命令使用经验](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_14.jpg)

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_15.png)

二、其他操作

(1) 删掉链接文件时，只会删掉自身，而不会删掉链接文件所指向的文件。

(2) 删掉-开头的文件

系统默认-旁边跟参数 **linux删除命令**，倘若直接用rm-file，系统会把file当作参数，进而报错。

可以使用以下两种形式绕开：

```
rm -- -filerm -f ./-file
```

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/03/1678888935554_16.png)

(3) Linux没有回收站功能，删掉的文件难以寻回，删掉前一定要确认好，以免删掉。

到此这篇关于Linuxrm命令解读，Linux删掉文件目录的文章就介绍到这了,更多相关Linuxrm命令删掉文件内容请搜索脚本之家曾经的文章或继续浏览下边的相关文章希望你们之后多多支持脚本之家！
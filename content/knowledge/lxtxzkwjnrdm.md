---



title: "Linux系统下查看文件内容的命令"
description: "Linux系统下查看文件内容的命令"
keywords: "Linux系统下查看文件内容的命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679090688487_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统下查看文件内容的命令有：cat表示从第一行开始显示所有内容，tac从最后一行逆序显示所有内容，more按照窗口大小一页一页的显示内容等等。

![linux 中find查找在某两个范围之间的命令_linux查找文件夹命令_linux查找替换命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679090688487_0.jpg)

【推荐课程：Linux教程】

Linux下查看文件内容的命令

查看文件内容的命令：

cat与tac

cat

cat的功能是将文件从第一行开始连续的将内容输出在屏幕上。并且cat并不常用，缘由是当文件大，行数比较多时，屏幕未能全部容下时，只能看见一部份内容。

cat句型：

-n：显示时，连行号一起输出

```
cat [-n]  文件名
```

tac

tac的功能是将文件从最后一行开始倒过来将内容数据输出到屏幕上。我们可以发觉，tac实际上是cat反过来写。这个命令也不常用。

tac句型：

```
tac 文件名
```

(more和less（常用) 

more

(more的功能是将文件从第一行开始，按照输出窗口的大小，适当的输出文件内容。当一页未能全部输出时，可以用“回车键”向下翻行，用“空格键”向下翻页。退出查看页面，请按“q”键。另外，more还可以配合管线符“|”（pipe) 使用

more的句型：

```
more 文件名
```

Enter向上n行，须要定义，默认为1行；

Ctrlf向上滚动一屏；

空格键向上滚动一屏；

Ctrlb返回上一屏；

=输出当前行的行号；

:f输出文件名和当前行的行号；

v调用vi编辑器；

!命令调用Shell，并执行命令；

q退出more

less

less的功能和more相像，而且使用more未能往前翻页，只能向后翻。

less可以使用【pageup】和【pagedown】键进行前翻页和后翻页，这样看上去更便捷。

![linux查找文件夹命令_linux 中find查找在某两个范围之间的命令_linux查找替换命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679090688487_2.png)

less的句型：

```
less 文件名
```

less还有一个功能，可以在文件中进行搜索你想找的内容，假定你想在passwd文件中查找有没有weblogic字符串，这么你可以这样来做：

```
[root@redhat etc]# less passwd
```

之后输入：

```
/weblogic
```

回车

此时若果有weblogic字符串，linux会把该字符已高亮形式显示。

退出查看页面 **linux查找文件夹命令** linux服务器代维，请按“q”键。

head和tail

head

head和tail一般使用在只须要读取文件的前几行或则后几行的情况下使用。head的功能是显示文件的前几行内容

head的句型：

number显示行数

```
head [n number] 文件名
```

tail

tail的功能正好和head相反，只显示最后几行内容

tail的句型:

```
tail [-n number] 文件名
```

nl

![linux查找替换命令_linux 中find查找在某两个范围之间的命令_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679090688487_3.png)

nl的功能和cat-n一样，同样是从第一行输出全部内容，而且把行号显示下来

nl的句型：

```
nl 文件名
```

tailf

tailf命令几乎等同于tail-f，严格说来应当与tail--follow=name更相像些。当文件更名以后它也能继续跟踪，非常适宜于日志文件的

跟踪。由于它能节电，降低了c盘访问，tailf命令不是个脚本linux手机，而是一个用C代码编译后的二补码执行文件，并且个别Linux安装以后没有这个命令

tailf与tail-f对比

1、与tail-f不同的是 **linux查找文件夹命令**，假如文件不下降，它不会去访问c盘文件。tailf总是从文件开头一点一点的读，而tail-f则是从文件尾部开始读

2、tailfcheck文件下降时，使用的是文件名，用stat系统调用；而tail-f则使用的是已打开的文件描述符

注：tail也可以做到类似跟踪文件名的疗效；并且tail总是使用fstat系统调用，而不是stat系统调用；结果就是：默认情况下，当tail的文

件被偷偷删掉时，tail是不晓得的，而tailf是晓得的。

以上就是linux查看文件命令有什么的详尽内容，更多请关注php英文网其它相关文章！
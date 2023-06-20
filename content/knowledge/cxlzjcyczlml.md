---



title: "初学Linux总结常用操作Linux命令写常用的文件操作命令"
description: "初学Linux总结常用操作Linux命令写常用的文件操作命令"
keywords: "初学Linux总结常用操作Linux命令写常用的文件操作命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

初学Linux总结

接着上次写的常用操作Linux命令写常用的文件操作命令，主要掌握两点：

1. 掌握文件系统的结构及其作用；

2. 掌握文件类型和文件系统管理的常用命令；

一． Linux的文件导航命令：

1. ls：列出目录中的所有子目录和文件。

-a：显示指定目录下所有目录与文件 **linux命令创建文件**，包括隐藏文件；

-l:以长格式来显示文件的详细信息；

-m：用逗号分隔方式紧凑显示文件列表；

-R：递归式的显示指定目录的各个子目录中的文件；

(-r：代表逆序排序；（注意大小写区别) 

![linux命令创建文件_linux创建用户名命令_linux创建连接命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_0.jpg)

-i：在输出的第一列显示文件的索引节点号。

2. cd：改变当前工作目录。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_1.png)

二． Linux的文件信息显示命令：

1**. cat：**

(（1) 显示文件信息，将文件或标准输入组合输出到标准输出。

-n:从1开始对所有输出行进行编号显示；

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_2.png)

(（2) 建立小型文件，利用输出重定向把cat命令的屏幕输出信息写入到一个新的文件。

(（3) 合并文件。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_4.png)

2. more：分屏显示文件内容。

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_6.png)

三． Linux的文件复制、删除、及移动命令：

(1. cp：把指定源文件（或目录) 复制到目标文件，或者把多个源文件复制到目标文件中。

这里注意-f本来是不用提示直接复制，但是我在用的时候它依然出现提示linux模拟，原因就是我用alias cp查看它的cp在这里默认等价于cp -i此时我用unalias cp恢复cp为本身，他就不会再出现提示了

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_9.png)

2. mv：为文件或目录改名，或将一个一个目录移入另一个目录中。

3. rm：删除文件与目录。

-f:不用系统提示，和上面的cp的-f一样

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_13.png)

四． Linux的文件检索、排序命令：

1. grep：在指定文件中检索出匹配的关键字的信息内容。

2. sort：对文件进行排序与合并，是吧所有指定文件的行一起进行排序，结果写到标准输出上。

-n:对文件每行按第一个字段进行数值排序；

-k 数字 ：对文件按ls -l输出字段的第“数字”个字段进行排序，这里市第五个字段arm linux，即文件大小；

-r：反向排序；

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_15.png)

五． Linux的目录操作命令：

1. mkdir：创建目录。

-p:递归生成目录

2. rmdir：删除空目录。

-p:递归删除目录；

且这个命令删除目录时，被删除的目录必须为空才可以，如果不想被限制 **linux命令创建文件**，可以用rm -r 来删

![linux创建用户名命令_linux创建连接命令_linux命令创建文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1676009171794_17.png)

问题：

如何统计当前系统中的在线人数？

答：用命令who|wc –l

(把root目录下所有文件（包含隐藏文件) 按文件大小进行排序。

答：用命令ls –la|sort –n -k -r 5

下列命令的执行结果。

(（1) cd/：切换到根目录

(（2) cd．.：切换到上级目录

(（3) cd．./…：切换到上上级目录

(（4) cd：切换到默认工作目录

后面还会继续总结。。。
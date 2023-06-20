---



title: "( （技巧) linux系统中如何查找一个文件命令？"
description: "( （技巧) linux系统中如何查找一个文件命令？"
keywords: "( （技巧) linux系统中如何查找一个文件命令？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078122_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

我们常常须要在系统中查找一个文件，这么在linux系统中我们怎么确切高效的确定一个文件在系统中的具体位置呢？一下我总结了在linux系统中用于查找文件的几个命令。

1、find命令

find是最常用也是最强悍的查找命令，它可以查找任何类型的文件。

find命令的通常格式为：find，即findpathname-options[-print-exec-ok]

参数解释：

pathname：pathname为搜索的目录及其子目录，默认情况下为当前目录

常用的option选项：

-name：按文件名来查找文件

-user：根据文件的属主来查找文件

-group：根据文件所属的组来查找文件

-perm：根据文件权限来查找文件

-prune：不在当前指定目录中查找

比如：已知在/目录，/etc，/user以及/user/bin目录下都有一个名为1111的文件，我们看一下-prune的作用

find-name1111-print为在当前目录及其子目录下下查找名为1111的文件。

find.-path./etc-prune-o-name1111-print为在当前目录及其子目录(不仅/etc目录及其子目录)下查找名为1111的文件。

find.-path./usr-prune-o-name1111-print为在当前目录及其子目录(不仅/usr目录及其子目录)下查找名为1111的文件。

find.(-path./usr/bin-o-path./etc)-prune-o-name1111-print为在当前目录及其子目录(不仅/usr/bin目录及其子目录；/etc目录及其子目录)下查找名为1111的文件。因为命令行不能直接辨识圆括弧，因而要用通配符字符linux操作系统简介，在(和)前后都要有空格。

![linux 查找目录命令_linux查找文件路径命令_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078122_1.jpg)

注意：find命令不加任何参数时，表示搜索路径为当前目录及其子目录，默认的动作为-print，即不过滤任何结果，也就是说输出所有的文件。

-mtime-n+n：根据文件更改时间来查找文件 **linux查找文件命令**，-n表示文件更改时间距如今n天以内，+n表示文件更改时间据现今n天曾经

-type：查找某一类型的文件(b：块设备文件；d：目录文件；c：字符设备文件；p：管线文件；l：链接文件；f：普通文件)

-nogroup：查找无有效所属组的文件，即文件所属的组在/etc/group中不存在

-nouser；查找无有效所属主的文件，即文件的所属主在/etc/passwd中不存在

![linux查找文件路径命令_linux 查找目录命令_linux查找文件命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680869078122_2.jpg)

2、locate命令

locate命令实际是”find-name”的另一种写法，而且查找方法跟find不同，它比find快得多。由于它不搜索具体目录，而是在一个数据库(/var/lib/locatedb)中搜索指定的文件。次数据库富含本地文件的所有信息，此数据库是linux系统手动创建的，数据库由updatedb程序来更新，updatedb是由crondaemon周期性构建的，默认情况下为每晚更新一次，所以用locate命令你搜索不到最新更新的文件，除非你在用locate命令查找文件之前自动的用updatedb命令更新数据库。

注意：每次有新文件更新和删掉以后，在updatedb之前数据库中保存的文件信息不会改变嵌入式linux 培训，即新添加一个文件以后，updatedb之前用locate搜索不到指定的文件。同样再删掉一个文件信息早已在数据库中的文件时，updatedb之前用locate照样能搜索到该文件的信息，，虽然此时该文件早已不存在了。

3、whereis命令

whereis命令只能用于搜索二补码文件(-b)、源代码文件(-s)、说明文件(-m)。假如省略参数则返回所有的信息。

4、which命令

which命令是在PATH变量指定的路径中搜索指定的系统命令的位置。用echo$PATH可显示当前PATH变量的值。

5、type命令

type命令主要用于分辨一个命令究竟是shell自带的还是外部独立的二补码文件提供的。假如是shell自带的则会提示此命令为shellbuildin,否则会列举命令的位置。诸如：cd为shell自带的命令 **linux查找文件命令**，当用which查找时，which会根据PATH变量设置的路径进行搜索，结果显示nocdin…；用typecd则显示cd为shellbuildin命令。ssh不是shell自带命令，用type时会显示ssh的路径。
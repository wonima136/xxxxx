---



title: "详解Linux中zip压缩和unzip解压缩命令及使用方法详解"
description: "详解Linux中zip压缩和unzip解压缩命令及使用方法详解"
keywords: "详解Linux中zip压缩和unzip解压缩命令及使用方法详解"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676873435271_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux承继了Unix以网路为核心的设计思想红旗linux6.0教程，是一个性能稳定的多用户网路操作系统。在Linux中，我们可以借助命令进行文件压缩，即zip压缩和unzip解压缩，这篇文章主要介绍了解读Linux中zip压缩和unzip解压缩命令及使用解读,本文给你们介绍的十分详尽，须要的同学可以参考下

下边给你们介绍下Linux中zip压缩和unzip解压缩命令解读

1、把/home目录下边的mydata目录压缩为mydata.zip

zip-rmydata.zipmydata#压缩mydata目录

2、把/home目录下边的mydata.zip解压到mydatabak目录上面

unzipmydata.zip-dmydatabak

3、把/home目录下边的abc文件夹和123.txt压缩成为abc123.zip

zip-rabc123.zipabc123.txt

4、把/home目录下边的wwwroot.zip直接解压到/home目录上面

unzipwwwroot.zip

5、把/home目录下边的abc12.zip、abc23.zip、abc34.zip同时解压到/home目录上面

unzipabc*.zip

6、查看把/home目录下边的wwwroot.zip上面的内容

unzip-vwwwroot.zip

7、验证/home目录下边的wwwroot.zip是否完整

unzip-twwwroot.zip

8、把/home目录下边wwwroot.zip上面的所有文件解压到第一级目录

unzip-jwwwroot.zip

主要参数

-c：将解压缩的结果

-l：显示压缩文件内所包含的文件

-p：与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换

-t：检测压缩文件是否正确

-u：与-f参数类似，而且不仅更新现有的文件外，也会将压缩文件中的其它文件解压缩到目录中

![linux 常见文件打包压缩命令_linux压缩打包命令_linux多个文件打包命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676873435271_1.png)

-v：执行是时显示详尽的信息

-z：仅显示压缩文件的备注文字

-a：对文本文件进行必要的字符转换

-b：不要对文本文件进行字符转换

-C：压缩文件中的文件名称分辨大小写

-j：不处理压缩文件中原有的目录路径

-L：将压缩文件中的全部文件名改为大写

-M：将输出结果送到more程序处理

-n：解压缩时不要覆盖原有的文件

-o：不必先寻问用户 **linux 常见文件打包压缩命令**，unzip执行后覆盖原有文件

-P：使用zip的密码选项

-q：执行时不显示任何信息

-s：将文件名中的空白字符转换为底线字符

-V：保留VMS的文件版本信息

-X：解压缩时同时回存文件原先的UID/GID

下边给你们介绍下Linux-zip压缩、unzip解压缩命令的使用解读

因为服务器使用的是CentOS系统，对于文件的压缩和解压缩免不了要使用命令操作，这儿我对Linux系统下常用的zip和unzip命令做个总结。

一、zip压缩

1，应用实例

1)将当前文件夹下的所有文件打包成一个new1.zip文件

zipnew1.zip*

2)把当前文件夹下所有my1*.doc的文件打包成一个new1.zip文件

zipnew1.zipmy1*.doc

![linux压缩打包命令_linux 常见文件打包压缩命令_linux多个文件打包命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676873435271_2.jpg)

3)把一个文件abc.txt和一个目录dir1压缩成为yasuo.zip

zip-ryasuo.zipabc.txtdir1

4)将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip

备注：-q为安静模式，在压缩的时侯不显示指令的执行过程

zip-qrhtml.zip/home/Blinux/html

5)添加一个文件到.zip文件中

备注：假如当年并没有把my32.doc压在new1.zip上面，如今把它加进去。-g选项是降低而不要重新形成的意思。

zip-gnew1.zipmy32.doc

6)将更改过的文件添加到压缩包中

备注：假如当年my2*.doc都早已压缩进new1.zip上面了，然而后来my2*.doc中有几个文件有修改，又不想去找出究竟是什么文件修改了，这条命令请系统自行帮助检测，更改过的才更新到压缩，否则就毋须动。

zip-unew1.zipmy2*.doc

7)删掉除.zip文件中的指定文件

备注：假如当年my18.doc是压缩在new1.zip中的一个文件，如今这条命令把它从压缩文件中抽走并删去。-d是删掉的意思。

zip-dnew1.zipmy18.doc

2，主要参数

-f更新现有的文件

-u与-f参数类似，而且不仅更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中

-d指定文件解压缩后所要储存的目录

-m将文件压缩并加入压缩文件后硬盘安装linux，删掉原始文件，即把文件移到压缩文件中

-r将指定的目录下的所有子目录以及文件一起处理

-j不处理压缩文件中原有的目录路径

-0只储存，不压缩

-l显示压缩文件内所包含的文件

![linux 常见文件打包压缩命令_linux多个文件打包命令_linux压缩打包命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676873435271_3.png)

-1较快速度的压缩

-9较高质量的压缩

-q安静模式，在压缩的时侯不显示指令的执行过程

-v执行时显示详尽的信息

-c将解压缩的结果显示到屏幕上，并对字符做适当的转换

-z仅显示压缩文件的备注文字

-@从标准输入中读取名称，一个路径名称用一行

-o将压缩文件内的所有文件的最新变动时间设为压缩时侯的时间

-x指定不要处理.zip压缩文件中的什么文件

-i只压缩符合条件的文件

-F尝试修补破损的压缩文件

-D压缩文件内不完善目录名称

-A调整可执行的手动解压缩文件

-J删掉可执行文件，留下一个普通的zip归档文件

-T检测备份文件内的每位文件是否正确无误

-X解压缩时同时回存文件原先的UID/GID

-y直接保存符号联接，而非该联接所指向的文件，本参数仅在UNIX之类的系统下有效

-e加密

-n不压缩具有特定字尾字符串的文件

-h2显示更多帮助

二、unzip解压缩

1，应用实例

1)把文件解压到当前目录下

unziptest.zip

2)假如要把文件解压到指定的目录下，须要用到-d参数。

unzip-d/temptest.zip

3)解压的时侯，有时侯不想覆盖早已存在的文件，这么可以加上-n参数

unzip-ntest.zip

unzip-n-d/temptest.zip

4)将压缩文件test.zip在指定目录tmp下解压缩，假如已有相同的文件存在 **linux 常见文件打包压缩命令**，要求unzip命令覆盖先前的文件

unzip-otest.zip-d/tmp/

5)只看一下zip压缩包中包含什么文件，不进行解压缩

unzip-ltest.zip

6)查看显示的文件列表还包含压缩百分比

unzip-vtest.zip

7)检测zip文件是否受损

unzip-ttest.zip

2，主要参数

-c将解压缩的结果显示到屏幕上，并对字符做适当的转换

-p与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换。

-l显示压缩文件内所包含的文件

-f更新现有的文件

-t检测压缩文件是否正确，但不解压

-u与-f参数类似，而且不仅更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中

-z仅显示压缩文件的备注文字

-v执行时显示详尽的信息。或查看压缩文件目录，但不解压

-T将压缩文件内的所有文件的最新变动时间设为解压缩时侯的时间

-x指定不要处理.zip压缩文件中的什么文件

-d指定文件解压缩后所要储存的目录

-n解压缩时不要覆盖原有的文件

-q安静模式，执行时不显示任何信息

-o不必先寻问用户，unzip执行后覆盖原有文件

-a对文本文件进行必要的字符转换

-j不处理压缩文件中原有的目录路径

-aa把所有的文件目录当成文本处理

-Uuseescapesforallnon-ASCIIUnicode

-UU忽视Unicode编码字符

-C压缩文件中的文件名称分辨大小写

-L将压缩文件中的全部文件名改为大写

-X解压缩时同时回存文件原先的UID/GID

-V保留VMS的文件版本信息

-K保留文件的setuid/setgid/tacky属性

-M将输出结果送到more程序处理

-O指定字符编码为DOS，Windows和OS/2

-I指定字符编码为UNIX

补充：Linux基本命令

①ls意为list列举当前文件夹中的文件

-l显示文件的属性可用ll来表示

②alias别称瞧瞧是否有别称的文件

③cddir跳跃目录-P选项将路径中的链接文件替换成链接指向的文件路径

④pwd查看当前工作的文件夹名使用-P的选项，会直接步入到其中，相当于cd
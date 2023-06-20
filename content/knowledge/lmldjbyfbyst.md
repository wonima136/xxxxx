---



title: "linuxzip命令的基本用法，不压缩特定扩展名的文件"
description: "linuxzip命令的基本用法，不压缩特定扩展名的文件"
keywords: "linuxzip命令的基本用法，不压缩特定扩展名的文件"
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

linuxzip命令的基本用法是：

zip[参数][打包后的文件名][打包的目录路径]

linuxzip命令参数列表：

-a将文件转成ASCII模式

-F尝试修补破损的压缩文件

-h显示帮助界面

-m将文件压缩以后，删掉源文件

-n特定字符串不压缩具有特定字尾字符串的文件

-o将压缩文件内的所有文件的最新变动时间设为压缩时侯的时间

-q安静模式，在压缩的时侯不显示指令的执行过程

-r将指定的目录下的所有子目录以及文件一起处理

-S包含系统文件和蕴涵文件(S是小写)

-t日期把压缩文件的最后更改日期设为指定的日期linux教程下载，日期格式为mmddyyyy

zipLinux上适用的参数:

-1:最快压缩，压缩率最差。

-9:最大压缩，压缩率最佳。

-b:暂存文件的路径。这个参数通常在要形成的zip文件存在，而硬碟现有空间不足时。

-c:替新增或更新的文件降低一行注解。

-d:从zip文件移出一个文件。

-D:不要在zip文件中存储文件的目录信息。

-f:以新文件代替现有文件。

-F:修补早已被毁的压缩文件。

-g:将文件压缩附加到zip文件中。

-h:显示辅助说明。

-i:指定要含入的个别特定文件。

-j:只存储文件的名称 **linux压缩命令 zip**，不含目录。

-k:逼迫使用MSDOS格式文件名。

-l:将CR(CarriageReturn)LF(LineFeed)转换成LF，通常是要将MS-DOS上的文本文件压缩后领到UNIX下使用时才使用此参数。这只适用于文本文件(.txt)，假如用于二补码文件则会导致二补码文件损坏。

-L:显示zip命令的版权。

-m:将特定文件移入zip文件中，但是删掉特定文件。

-n:不压缩特定扩充名的文件。

-o:将zip文件的时间设成最后修正zip文件的时间。

-q:安静模式，不会显示相关讯息和提示。

-r:包括子目录。

-t:只处理mmddyy日期之后的文件。

-T:测试zip文件是否正常。

-u:只更新改变过的文件和新文件。

-v:显示版本资讯或详尽讯息。

-x:不须要压缩的文件。

-y:将symboliclink压缩 **linux压缩命令 zip**，而不是压缩所联结到的文件。

-z:为zip文件降低注解。

-#:设定压缩速率，-0表示不压缩，-1表示最快速度的压缩red hat linux 下载，

-9：表示最慢速率的压缩(最佳化的压缩)，预设值为-6。

-@:从标准输入读取文件名称。

举例：

将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip

zip-q-rhtml.zip/home/Blinux/html

里面的命令操作是将绝对地址的文件及文件夹进行压缩.以下给出压缩相对路径目录

例如目前在Bliux这个目录下,执行以下操作可以达到以上同样的疗效.

zip-q-rhtml.ziphtml

例如现今我的html目录下,我操作的zip压缩命令是

zip-q-rhtml.zip*

unzip命令的基本句型是：unzip[参数]zip文件

简单事例：

把本目录下的test.zip文件解压：unziptest.zip

参数列表：

-l列举压缩文件所包含的内容

-v显示详尽的执行过程
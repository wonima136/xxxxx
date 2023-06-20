---



title: "linux解压缩zip命令 linuxzip命令的基本用法-苏州安嘉凯教育培训"
description: "linux解压缩zip命令 linuxzip命令的基本用法-苏州安嘉凯教育培训"
keywords: "linux解压缩zip命令 linuxzip命令的基本用法-苏州安嘉凯教育培训"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676757958854_0.jpg"
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

![zip解压命令 linux_linux zip 解压命令_linux解压缩zip命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676757958854_0.jpg)

-r将指定的目录下的所有子目录以及文件一起处理

(-S包含系统文件和蕴涵文件（S是小写) 

-t日期把压缩文件的最后更改日期设为指定的日期，日期格式为mmddyyyy

举例：

将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的html.zip

zip–q–rhtml.zip/home/Blinux/html

里面的命令操作是将绝对地址的文件及文件夹进行压缩.以下给出压缩相对路径目录

例如目前在Bliux这个目录下,执行以下操作可以达到以上同样的疗效.

zip–q–rhtml.ziphtml

![zip解压命令 linux_linux解压缩zip命令_linux zip 解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676757958854_1.png)

例如如今我的html目录下,我操作的zip压缩命令是

zip–q–rhtml.zip*

以上是在安静模式下进行的，并且包含系统文件和蕴涵文件

//

unzip语法：

unzip[-cflptuvz][-agCjLMnoqsVX][-P][.zip文件][文件][-d][-x]或unzip[-Z]

补充说明：unzip为.zip压缩文件的解压缩程序。

unzip参数：

-c将解压缩的结果显示到屏幕上，并对字符做适当的转换。

-f更新现有的文件。

-l显示压缩文件内所包含的文件。

-p与-c参数类似，会将解压缩的结果显示到屏幕上，但不会执行任何的转换。

-t检测压缩文件是否正确。

-u与-f参数类似 **linux解压缩zip命令** 红旗linux系统，而且不仅更新现有的文件外 **linux解压缩zip命令** red hat linux，也会将压缩文件中的其他文件解压缩到目录中。

-v执行是时显示详尽的信息。

-z仅显示压缩文件的备注文字。

-a对文本文件进行必要的字符转换。

-b不要对文本文件进行字符转换。

-C压缩文件中的文件名称分辨大小写。

-j不处理压缩文件中原有的目录路径。

-L将压缩文件中的全部文件名改为大写。

-M将输出结果送到more程序处理。

-n解压缩时不要覆盖原有的文件。

-o不必先寻问用户，unzip执行后覆盖原有文件。

-P使用zip的密码选项。

-q执行时不显示任何信息。

-s将文件名中的空白字符转换为底线字符。

-V保留VMS的文件版本信息。

-X解压缩时同时回存文件原先的UID/GID。

[.zip文件]指定.zip压缩文件。

[文件]指定要处理.zip压缩文件中的什么文件。

-d指定文件解压缩后所要储存的目录。

-x指定不要处理.zip压缩文件中的什么文件。

-Zunzip-Z等于执行zipinfo指令

举例：

将/home/Blinux/html.zip解压到当前目录

unziphtml.zip
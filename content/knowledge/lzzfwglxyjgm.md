---



title: "Linux自主访问管理学院几个命令学习命令"
description: "Linux自主访问管理学院几个命令学习命令"
keywords: "Linux自主访问管理学院几个命令学习命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

明天学习了几个命令，是创建、删除文件和文件夹的，在linux里，文件夹是目录，下边说下我学习的命令。

创建文件夹【mkdir】

一、mkdir命令使用权限

所有用户都可以在终端使用mkdir命令在拥有权限的文件夹创建文件夹或目录。

二、mkdir命令使用格式

格式：mkdir[选项]DirName

三、mkdir命令功能

通过mkdir命令可以实现在指定位置创建以DirName(指定的文件名)命名的文件夹或目录。要创建文件夹或目录的用户必须对所创建的文件夹的父文件治具有写权限(了解Linux文件-文件夹权限请点击这儿)。而且，所创建的文件夹(目录)不能与其父目录(即父文件夹)中的文件名重名，即同一个目录下不能有同名的(分辨大小写)。

四、mkdir命令选项说明

命令中的［选项］通常有以下两种：

-m用于对新建目录设置存取权限，也可以用chmod命令进行设置。

-p须要时创建下层文件夹(或目录)，假如文件夹(或目录)早已存在，则不视为错误。

五、mkdir命令使用举例

例一：在桌面下边创建以“demo”命名的文件夹。

使用以下命令即可。

mkdir桌面/demo

![linux使用vim新建并编辑文件_linux 新建conf文件_linux新建文件夹指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_0.jpg)

例二：在桌面下边创建以“demo”命名的文件夹，而且给文件夹赋权限，权限为123。

mkdir123桌面/demo

![linux 新建conf文件_linux使用vim新建并编辑文件_linux新建文件夹指令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_1.jpg)

Linux内核更多免费文档,笔试资料,教程视频加qqun：891587639获取资源

![linux新建文件夹指令_linux使用vim新建并编辑文件_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_2.jpg)

删掉文件夹【rm】

一、rm命令使用权限

所有用户都可以在终端使用rm命令删掉目录。

二、rm命令使用格式

格式：rm[选项]DirName

三、rm命令功能

删掉档案及目录。

四、rm命令选项说明

命令中的［选项］通常有以下几种：

-i删掉前逐一寻问确认。

-f虽然原档案属性设为未读，亦直接删掉，无需逐一确认。

-r将目录及以下之档案亦逐一删掉。

五、rm命令使用举例

例一：删掉所有C语言程序文档；删掉前逐一寻问确认。

rm-i*.c

例二：将Finished子目录及子目录中所有档案删掉。

rm-rFinished

注：在linux没有回收站，在使用rm命令的时侯，一定要当心些，删掉以后就难以再恢复了。

创建文件【vi】

一、进入vi的命令

vifilename:打开或新建文件，并将光标放在第一行首

vi+nfilename：打开文件，并将光标放在第n行首

vi+filename：打开文件，并将光标放在最后一行首位

vi+/patternfilename：打开文件，并将光标放在第一个与pattern匹配的串处

vi-rfilename：在下次使用vi编辑时发生系统崩溃，恢复filename

vifilename….filename：打开多个文件linux解压rar，依次进行编辑

二、移动光标类命令

h：光标左移一个字符

l：光标右移一个字符

space：光标右移一个字符

Backspace：光标左移一个字符

k或Ctrl+p：光标上移一行

j或Ctrl+n：光标下移一行

Enter：光标下移一行

w或W：光标右移一个字至字首

b或B：光标左移一个字至字首

e或E：光标右移一个字至字尾

)：光标移至句尾

：光标移至句首

}：光标移至段落开头

{：光标移至段落结尾

nG：光标移至第n行首

n+：光标下移n行

n-：光标上移n行

n$：光标移至第n行尾

H：光标移至屏幕顶行

M：光标移至屏幕中间行

L：光标移至屏幕最后行

(0：（注意是数字零) 光标移至当前行首

$：光标移至当前行尾

三、屏幕翻滚类命令

![linux使用vim新建并编辑文件_linux新建文件夹指令_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_3.gif)

Ctrl+u：向文件首翻半屏

Ctrl+d：向文件尾翻半屏

Ctrl+f：向文件尾翻一屏

Ctrl＋b；向文件首翻一屏

nz：将第n行滚至屏幕底部，不指定n时将当前行滚至屏幕底部。

四、插入文本类命令

i：在光标前

I：在当前行首

a：光标后

A：在当前行尾

o：在当前行之下新开一行

O：在当前行之上新开一行

r：替换当前字符

R：替换当前字符及其后的字符，直到按ESC键

s：从当前光标位置处开始，以输入的文本取代指定数量的字符

S：删掉指定数量的行，并以所输入文本替代之

ncw或nCW：更改指定数量的字

nCC：更改指定数量的行

五、删除命令

ndw或ndW：删掉光标处开始及其后的n-1个字

do：删至行首

d$：删至行尾

ndd：删掉当前行及其后n-1行

x或X：删掉一个字符，x删掉光标后的，而X删掉光标前的

![linux新建文件夹指令_linux 新建conf文件_linux使用vim新建并编辑文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_4.jpg)

Ctrl+u：删掉输入方法下所输入的文本

六、搜索及替换命令

/pattern：从光标开始处向文件尾搜索pattern

?pattern：从光标开始处向文件首搜索pattern

n：在同一方向重复上一次搜索命令

N：在反方向上重复上一次搜索命令

：s/p1/p2/g：将当前行中所有p1均用p2取代

：n1,n2s/p1/p2/g：将第n1至n2行中所有p1均用p2取代

：g/p1/s//p2/g：将文件中所有p1均用p2替换

七、vi命令使用举例

例一：创建文件a.txt。

via.txt

Helloeveryone!

:wq//在退出时，直接输入:wq会发觉退不出去，退出方式是：编辑完成后按ESC，之后输入:q就是退出;还有:wq是保存后退出，加叹号是表示强制

![linux使用vim新建并编辑文件_linux新建文件夹指令_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_5.jpg)

![linux新建文件夹指令_linux使用vim新建并编辑文件_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_6.jpg)

![linux使用vim新建并编辑文件_linux新建文件夹指令_linux 新建conf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_7.jpg)

更改档案时间【touch】

一、touch命令使用权限

所有用户都可以在终端使用touch命令。

二、touch命令使用格式

格式：touch[-acfm][-d][-r][-t][--help][--version][文件或目录…]或touch[-acfm][--help][--version][日期时间][文件或目录…]

(（touch[-acfm][-rreference-file][--file=reference-file][-tMMDDhhmm[[CC]YY][.ss]][-dtime][--date=time][--time={atime,access,use,mtime,modify}][--no-create][--help][--version]file1[file2…]) 

三、touch命令功能

touchfileA，假如fileA存在，使用touch命令可修改这个文件或目录的日期时间 **linux新建文件夹指令**，包括存取时间和修改时间；假如fileA不存在，touch命令会在当前目录下新建一个空白文件fileA。

注：使用touch指令可修改文件或目录的日期和时间，包括存取时间和修改时间。文件的时间属性包括文件的最后访问时间，最后更改时间以及最后在c盘上更改的时间，命令stat显示结果显示了三个时间属性。

四、touch命令选项说明

a改变档案的读取时间记录。

m改变档案的更改时间记录。

c如果目的档案不存在，不会构建新的档案。与--no-create的疗效一样。

f不使用，是为了与其他unix系统的相容性而保留。

r使用参考档的时间记录，与--file的疗效一样。

d设定时间与日期，可以使用各类不同的格式。

t设定档案的时间记录，格式与date指令相同。[[CC]YY]MMDDhhmm[.SS]，CC为年数中的前两位，即”世纪数”;YY为年数的后两位，即某世纪中的年数.倘若不给出CC的值，则linux中touch命令参数将把年数CCYY限定在1969--2068之内.MM为月数，DD为天将把年数CCYY限定在1969--2068之内.MM为月数，DD为天数，hh为小时数(几点)，mm为分钟数，SS为秒数.此处秒的设定范围是0--61，这样可以处理闰秒.这种数字组成的时间是环境变量TZ指定的时区中的一个时间.因为系统的限制，早于1970年1月1日的时间是错误的.

--no-create不会构建新档案。

--help列举指令格式。

--version列举版本讯息。

五、touch命令使用举例

例一：更新file1.txt的存取和更改时间。

touchfile1.txt

例二：假如file1.txt不存在linux系统命令，不创建文件

touch-cfile1.txt

例三：更新file1.txt的时间戳和ref+file相同

touch-rref+filefile1.txt

例四：设置文件的时间戳为2011年5月18日9点45分10秒

ls-lfile1.txt

touch-t1105190945.10file1.txt

在新建文件时用touch命令可以构建一个空文件，而vi命令则可以直接编辑文件的内容并保存。touch命令在linux中极少用到，我个人还是比较喜欢vi命令 **linux新建文件夹指令**，可以直接对文档进行编辑。明天的学习就那些了，每晚进步一点点。O(∩_∩)O~

点此链接：纯C语言|实现轮询框架，底层原理与性能剖析，笔试利刃-学习视频教程-腾讯课堂享受一元试听vip课程

![linux新建文件夹指令_linux 新建conf文件_linux使用vim新建并编辑文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996319990_8.jpg)
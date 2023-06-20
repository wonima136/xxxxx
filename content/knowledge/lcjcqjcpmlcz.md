---



title: "1.:linux查进程、起进程ps命令查找与进程相关的"
description: "1.:linux查进程、起进程ps命令查找与进程相关的"
keywords: "1.:linux查进程、起进程ps命令查找与进程相关的"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678572342627_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

关键字:linux查进程、杀进程、起进程

1.查进程

ps命令查找与进程相关的PID号：

psa显示现行终端机下的所有程序，包括其他用户的程序。

ps-A显示所有程序。

psc列举程序时，显示每位程序真正的指令名称，而不包含路径，参数或常驻服务的标识。

ps-e此参数的疗效和指定”A”参数相同。

pse列举程序时，显示每位程序所使用的环境变量。

psf用ASCII字符显示树形结构，抒发程序间的互相关系。

ps-H显示树形结构，表示程序间的互相关系。

ps-N显示所有的程序，不仅执行ps指令终端机下的程序之外。

pss采用程序讯号的格式显示程序状况。

psS列举程序时，包括已中断的子程序资料。

ps-t指定终端机编号，并列举属于该终端机的程序的状况。

psu以用户为主的格式来显示程序状况。

psx显示所有程序，不以终端机来分辨。

最常用的方式是psaux,之后再通过管路使用grep命令过滤查找特定的进程,之后再对特定的进程进行操作。

psaux|grepprogram_filter_word,ps-ef|greptomcat

ps-ef|grepjava|grep-vgrep显示出所有的java进程，去处掉当前的grep进程。

2.杀进程

使用kill命令结束进程：killxxx

常用：kill－9324

Linux下还提供了一个killall命令，可以直接使用进程的名子而不是进程标示号linux手机软件，比如：#killall-9NAME

3.步入到进程的执行文件所在的路径下 **linux进程相关命令**，执行文件./文件名

附：

这是本人花了两天时间整理得来的，一些最常用的月球人都晓得的命令就省去啦！最后提供pdf指南下载

1.修改档案拥有者

命令:chown[-cfhvR][--help][--version]user[:group]file…

功能:修改文件或则文件夹的拥有者

参数格式:

user:新的档案拥有者的使用者IDgroup:新的档案拥有者的使用者群体(group)

-c:若该档案拥有者确实早已修改，才显示其修改动作

-f:若该档案拥有者难以被修改也不要显示错误讯息

-h:只对于联结(link)进行变更，而非该link真正指向的档案

-v:显示拥有者变更的详尽资料

-R:对目前目录下的所有档案与子目录进行相同的拥有者变更(即以递回的形式挨个变更)

比如：chown-Roracle:oinstall/oracle/u01/app/oracle

修改目录拥有者为oracle

2.更改权限

命令：chmod(changemode)

功能：改变文件的读写和执行权限。有符号法和八补码数字法。

选项：1)符号法：

命令格式：chmod{u|g|o|a}{+|-|=}{r|w|x}filename

uuser)表示用户本人。

ggroup)表示同组用户。

ooher)表示其他用户。

aall)表示所有用户。

+用于给与指定用户的许可权限。

-用于取消指定用户的许可权限。

=将所许可的权限赋给文件。

rread)读许可，表示可以拷贝该文件或目录的内容。

wwrite)写许可，表示可以更改该文件或目录的内容。

xexecute)执行许可，表示可以执行该文件或步入目录。

2)八补码数字法：

命令格式：chmodabcfile

其中a,b,c各为一个八补码数字，分别表示User、Group、及Other的权限。

4100)表示可读。

2010)表示可写。

1001)表示可执行。

若要rwx属性则4+2+1=7；

若要rw-属性则4+2=6；

若要r-x属性则4+1=5。

比如：#chmoda+rxfilename

让所有用户可以读和执行文件filename。

#chmodgo-rxfilename

取消同组和其他用户的读和执行文件filename的权限。

#chmod741filename

让本人可读写执行、同组用户可读、其他用户可执行文件filename。

#chmod-R755/home/oracle

递归修改目录权限，本人可读写执行、同组用户可读可执行、其他用户可读可执行

3.更改文件日期

命令：touch

格式：touchfilenae

功能：改变文件的日期，不对文件的内容做改动，若文件不存在则构建新文件。

比如：%touchfile

4.链接文件

命令：ln(link)

格式：ln[option]filenamelinkname

ln[option]directorypathname

功能：为文件或目录构建一个链。其中，filename和directory是源文件名和

源目录名；linkname和pathname分别表示与源文件或源目录名相链接的

![linux查看端口和进程命令_linux命令大全进程_linux进程相关命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678572342627_1.png)

文件或目录。

选项：-s为文件或目录构建符号链接。不加-s表示为文件或目录构建硬链接

注释：链接的目地在于，对一个文件或目录赋于两个以上的名子，使其可以出

现今不同的目录中，既可以使文件或目录共享，又可以节约c盘空间。

比如：%ln-sfilenamelinkname

5.显示日期

命令：date

比如：%date

6.显示月历

命令：cal(calendar)

格式：cal[month]year

功能：显示某年内指定的月历

比如：%cal1998

7.显示文件腹部

命令：head

格式：head[option]filename

功能：显示文件的腹部

选项：缺省显示文件的头10行。

-i显示文件的开始i行。

比如：%headfilename

8.显示文件尾部

命令：tail

格式：tail[option]filename

功能：显示文件的尾部

选项：缺省显示文件的末10行。

-i显示文件最后i行。

+i从文件的第i行开始显示。

比如：%tailfilename

9.显示用户标示

命令：id

格式：id[option][user]

功能：显示用户标示及用户所属的所有组。

选项：-a显示用户名、用户标示及用户所属的所有组

注释：

比如：%idusername

10.查看当前登入的用户

命令：users

11.显示都谁登陆到机器上

命令：who

格式：who

![linux查看端口和进程命令_linux命令大全进程_linux进程相关命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678572342627_2.jpg)

功能：显示当前正在系统中的所有用户名子，使用终端设备号 **linux进程相关命令**，注册时间。

比如：%who

12.显示当前终端上的用户名

命令：whoami

格式：whoami

功能：显示出当前终端上使用的用户。

比如：%whoami

13.找寻文件

命令：find

格式：findpathname[option]expression

功能：在所给的路经名下寻觅符合表达式相匹配的文件。

选项：-name表示文件名

-user用户名，选定该用户所属的文件

-size按大小查找，以block为单位，一个block是512B

-mtimen按最后一次更改时间查找，选定n天内被更改的文件

-perm按权限查找

-type按文件类型查找

-atime按最后一次访问时间查找

比如：%find./-name'*abc*'-print

14.搜索文件中匹配符

命令：grep

格式：grep[option]patternfilenames

功能：逐行搜索所指定的文件或标准输入，并显示匹配模式的每一行。

选项：-i匹配时忽视大小写

-v找出模式失配的行

比如：%grep-i'java*'./test/run.sh

15.统计文件字数

命令：wc[option]filename

功能：统计文件中的文件行数、字数和字符数。

选项：-l统计文件的行数

-w统计文件的词组数

-c统计文件的字符数

注释：若缺省文件名则指标准输入

比如：%wc-c./test/run.sh

16.显示c盘空间

命令：df(diskfree)

格式：df[option]

功能：显示c盘空间的使用情况，包括文件系统安装的目录名、块设备名、总

字节数、已用字节数、剩余字节数占用比率。

选项：

-a：显示全部的档案系统和各分割区的c盘使用情形

-i：显示i-nodes的使用量

-k：大小用k来表示(默认值)

-t：显示某一个档案系统的所有分割区c盘使用量

-x：显示不是某一个档案系统的所有分割区c盘使用量

-T：显示每位分割区所属的档案系统名称

-h:表示使用「Human-readable」的输出，也就是在档案系统大小使用GB、MB等易读的格式。

注释：

比如：%df-hi

17.查询档案或目录的c盘使用空间

命令：du(diskusage)

格式：du[option][filename]

功能：以指定的目录下的子目录为单位，显示每位目录内所有档案所占用的c盘空间大小

选项：

-a：显示全部目录和其次目录下的每位档案所占的c盘空间

-b：大小用bytes来表示(默认值为kbytes)

-c：最后再加上总计(默认值)

-s：只显示各档案大小的总合

-x：只估算同属同一个档案系统的档案

-L：估算所有的档案大小

-h:表示档案系统大小使用GB、MB等易读的格式。

比如：%du-a

%du-sh/etc只显示该目录的总合

%du/etc|sort-nr|more统计结果用sort指令进行排序，

sort的参数-nr表示要以数字排序法进行反向排序。

18.显示进程

命令：ps

格式：ps[option]

功能：显示系统中进程的信息。包括进程ID、控制进程终端、执行时间和命令。

选项：

-a显示所有进程信息

-Uuidlist列举这个用户的所有进程

-e显示当前运行的每一个进程信息

-f显示一个完整的列表

-x显示包括没有终端控制的进程状况。

注释：

比如：%ps-ef

%ps-aux之后再借助一个管线符号导向到grep去查找特定的进程,之后再对特定的进程进行操作。

19.中止进程

命令：kill

格式：kill[option]pid

功能：向指定的进程送讯号或中止进程。kill指令的用途是送一个signal给某一个process，

由于大部分送的都是拿来杀掉process的SIGKILL或SIGHUP，因而称为kill

选项：-9强行中止进程

注释：pid标识进程号红帽子linux下载，可由ps命令得到。

比如：%kill-9pid

你也可以用kill-l来察看可取代signal号码的数量字。kill的详尽情形请参阅mankill。

20.查看自己的IP地址

命令：ifconfig

格式：ifconfig-a

21.查看路由表

命令：netstat

格式：netstat-rn

22.远程登陆

命令：telnet

格式：telnethostname

23.文件传输

命令：ftp(filetransferprogram)

格式：ftphostname

功能：网路文件传输及远程操作。

选项：ftp命令：

cd[dirname]步入远程机的目录

lcd[dirname]设置本地机的目录

dir/ls显示远程的目录文件

bin以二补码形式进行传输

asc以文本文件形式进行传输

get/mget从远程机取一个或多个文件

put/mput向远程机送一个或多个文件

prompt打开或关掉多个文件传送时的交互提示

close关掉与远程机的联接

quit退出ftp

!/exitftp登录状态下，!表示暂时退出ftp状态回到本地目录，exit表示返回ftp状态

注释：

比如：%ftphostname

24.查看自己的电子电邮

命令：mailx

格式：mailx

选项：

delete删掉

next下一个

quit退出
---



title: "远程服务器的使用格式为：-name的自动登录"
description: "远程服务器的使用格式为：-name的自动登录"
keywords: "远程服务器的使用格式为：-name的自动登录"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678082774876_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

FTP的命令行格式为：

ftp-v-d-i-n-g[主机名]，其中

-v显示远程服务器的所有响应信息；

-n限制ftp的手动登入，即不使用；.netrc文件；

-d使用调试方法；

-g取消全局文件名。

FTP使用的内部命令如下(中括弧表示可选项):

1.![cmd[args]]：在本地机中执行交互shell，exit回到ftp环境，如：!ls*.zip

2.$macro-ame[args]：执行宏定义macro-name。

3.account[password]：提供登入远程系统成功后访问系统资源所需的补充口令。

4.appendlocal-file[remote-file]：将本地文件追加到远程系统主机，若未指定远程系统文件名，则使用本地文件名。

5.ascii：使用ascii类型传输方法。

6.bell：每位命令执行完毕后计算机响铃一次。

7.bin：使用二补码文件传输方法。

8.bye：退出ftp会话过程。

9.case：在使用mget时，将远程主机文件名中的小写转为大写字母。

10.cdremote-dir：步入远程主机目录。

11.cdup：步入远程主机目录的父目录。

12.chmodmodefile-name：将远程主机文件file-name的存取方法设置为mode，如：chmod777a.out。

13.close：中断与远程服务器的ftp会话(与open对应)。

14.cr：使用asscii形式传输文件时，将回车换行转换为回行。

15.deleteremote-file：删掉远程主机文件。

16.debug[debug-value]：设置调试方法，显示发送至远程主机的每条命令，如：debup3，若设为0，表示取消debug。

17.dir[remote-dir][local-file]：显示远程主机目录，并将结果存入本地文件

18.disconnection：同close。

19.formformat：将文件传输方法设置为format，缺省为file形式。

20.getremote-file[local-file]：将远程主机的文件remote-file传至本地硬碟的local-file。

21.glob：设置mdelete，mget，mput的文件名扩充，缺省时不扩充文件名，同命令行的-g参数。

22.hash：每传输1024字节，显示一个hash符号(#)。

23.help[cmd]：显示ftp内部命令cmd的帮助信息，如：helpget。

24.idle[seconds]：将远程服务器的休眠计时器设为[seconds]秒。

25.image：设置二补码传输方法(同binary)。

26.lcd[dir]：将本地工作目录切换至dir。

27.ls[remote-dir][local-file]：显示远程目录remote-dir，并存入本地文件local-file。

28.macdefmacro-name：定义一个宏，遇见macdef下的空行时，宏定义结束。

29.mdelete[remote-file]：删掉远程主机文件。

30.mdirremote-fileslocal-file：与dir类似，但可指定多个远程文件，如：mdir*.o.*.zipoutfile。

31.mgetremote-files：传输多个远程文件。

32.mkdirdir-name：在远程主机中建一目录。

33.mlsremote-filelocal-file：同nlist，但可指定多个文件名。

34.mode[modename]：将文件传输方法设置为modename，缺省为stream形式。

35.modtimefile-name：显示远程主机文件的最后更改时间。

36.mputlocal-file：将多个文件传输至远程主机。

37.newerfile-name：假如远程机中file-name的更改时间比本地硬碟同名文件的时间更近，则重传该文件。

38.nlist[remote-dir][local-file]：显示远程主机目录的文件清单，并存入本地硬碟的local-file。

39.nmap[inpatternoutpattern]：设置文件名映射机制，致使文件传输时，文件中的个别字符互相转换，如：nmap$1.$2.$3[$1，$2].[$2，$3]，则传输文件a1.a2.a3时，文件名变为a1，a2。该命令非常适用于远程主机为非UNIX机的情况。

40.ntrans[inchars[outchars]]：设置文件名字符的翻译机制，如ntrans1R，则文件名LLL将变为RRR。

41.openhost[port]：构建指定ftp服务器联接，可指定联接端口。

42.passive：步入被动传输方法。

43.prompt：设置多个文件传输时的交互提示。

44.proxyftp-cmd：在次要控制联接中，执行一条ftp命令，该命令准许联接两个ftp服务器，以在两个服务器间传输文件。第一条ftp命令必须为openlinux文本编辑器，以首先构建两个服务器间的联接。

45.putlocal-file[remote-file]：将本地文件local-file传送至远程主机。

46.pwd：显示远程主机的当前工作目录。

47.quit：同bye，退出ftp会话。

48.quotearg1，arg2…：将参数逐条发至远程ftp服务器，如：quotesyst.

49.recvremote-file[local-file]：同get。

50.regetremote-file[local-file]：类似于get，但若local-file存在，则从先前传输中断处续传。

![linux ftp下载命令_linux ftp命令_linux ftp命令 退出](https://www.linuxcool.com/wp-content/uploads/2023/03/1678082774876_0.png)

51.rhelp[cmd-name]：恳求获得远程主机的帮助。

52.rstatus[file-name]：若未指定文件名，则显示远程主机的状态，否则显示文件状态。

53.rename[from][to]：修改远程主机文件名。

54.reset：消除回答队列。

55.restartmarker：从指定的标志marker处，重新开始get或put，如：restart130。

56.rmdirdir-name：删掉远程主机目录。

57.runique：设置文件名只一性储存，若文件存在，则在原文件后加后缀.1，.2等。

58.sendlocal-file[remote-file]：同put。

59.sendport：设置PORT命令的使用。

60.sitearg1linux命令行和shell脚本编程宝典，arg2…：将参数作为SITE命令逐条发送至远程ftp主机。

61.sizefile-name：显示远程主机文件大小，如：siteidle7200。

62.status：显示当前ftp状态。

63.struct[struct-name]：将文件传输结构设置为struct-name，缺省时使用stream结构。

64.sunique：将远程主机文件名储存设置为只一(与runique对应)。

65.system：显示远程主机的操作系统类型。

66.tenex：将文件传输类型设置为TENEX机的所需的类型。

67.tick：设置传输时的字节计数器。

68.trace：设置包跟踪。

69.type[type-name]：设置文件传输类型为type-name，缺省为ascii **linux ftp命令 退出**，如:typebinary，设置二补码传输方法。

70.umask[newmask]：将远程服务器的缺省umask设置为newmask，如：umask3

71.useruser-name[password][account]：向远程主机表明自己的身分，须要口令时，必须输入口令，如：useranonymousmy@email。

72.verbose：同命令行的-v参数，即设置详细报告方法，ftp服务器的所有响应都将显示给用户，缺省为on.

73.?[cmd]：同help.

Linux操作系统下文件和文件夹的复制问题

在远程操控

Linux时，有好多强悍的shell命令可以帮助我们。其中复制文件和文件夹就是一个十分强悍的功能。

1、同一台机器上的复制命令cp。

复制文件cpfilename1filename2,把filename1复制一份并命名为filename2。

加上参数-f在覆盖重命名文件时不做任何提示。

如：cp-ffilename1filename2。

上述命令加上参数-r就可以复制文件夹了。如cp-rfdic1,dic2。关于cp更详尽的命令如下：

句型：cp[-abdfilpPrRsuvx][-S][-V][--help][--spares=][--version][源文件或目录][目标文件或目录][目的目录]

补充说明：cp指令用在复制文件或目录，就像时指定两个以上的文件或目录，且最后的目的地是一个早已存在的目录，则它会把上面指定的所有文件或目录复制到该目录中。若同时指定多个文件或目录，而最后的目的地并非是一个已存在的目录，则会出现错误信息。

参数：

-a或--archive此参数的疗效和同时指定”-dpR”参数相同。

-b或--backup删掉，覆盖目标文件之前的备份，备份文件会在字尾加上一个备份字符串。

-d或--no-dereference当复制符号联接时，把目标文件或目录也构建为符号联接，并指向与源文件或目录联接的原始文件或目录。

-f或--force强行复制文件或目录，不论目标文件或目录是否已存在。

-i或--interactive覆盖既有文件之前先寻问用户。

-l或--link对源文件构建硬联接，而非复制文件。

-p或--preserve保留源文件或目录的属性。

-P或--parents保留源文件或目录的路径。

-r递归处理，将指定目录下的文件与子目录一并处理。

-R或--recursive递归处理，将指定目录下的所有文件与子目录一并处理。

-s或--symbolic-link对源文件构建符号联接，而非复制文件。

-S或--suffix=用”-b”参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，预设的备份字尾字符串是符号”~”。

-u或--update使用这项参数后只会在源文件的修改时间较目标文件更新时或是名称互相对应的目标文件并不存在，才复制文件。

-v或--verbose显示指令执行过程。

-V或--version-control=用”-b”参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，这字符串除了可用”-S”参数变更，当使用”-V”参数指定不同备份方法时，也会形成不同字尾的备份字串。

-x或--one-file-system复制的文件或目录储存的文件系统 **linux ftp命令 退出**，必须与cp指令执行时所处的文件系统相同，否则不予复制。

--help在线帮助。

--sparse=设置保存稀疏文件的时机。

--version显示版本信息。

2、不同机器间的复制命令scp

scp的用法和cp很相像，不过就是在不同的机器间运行而已。

复制一个文件到另一台机器：scp-rffilename1:/usr/local/apache/htdocs/bak

(里面的命令表示把当前目录下的filename1文件（或则文件夹) 以username的身分复制到这台机器上的/usr/local/apache/htdocs/bak这个目录下。
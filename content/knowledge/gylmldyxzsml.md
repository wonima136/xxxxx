---



title: "关于Linuxcd命令的一些知识命令整理与网络"
description: "关于Linuxcd命令的一些知识命令整理与网络"
keywords: "关于Linuxcd命令的一些知识命令整理与网络"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684958736597_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux命令分类大全_红帽linux命令大全_linux命令大全 上一级](https://www.linuxcool.com/wp-content/uploads/2023/05/1684958736597_0.jpg)

最常用的linux命令top10[1]，这儿列举最常用的linux命令top10，信息搜集整理与网路，并不代表所有有人认同，该内容仅供你们参考。

其实你登入linux系统[2] **linux命令大全 上一级**，打开终端第一个linux命令就是cd，也能你第一个命令时ls，其实,有好多其实……。

1.cd

Linuxcd命令用于切换当前工作目录至dirName(目录参数)。

其中dirName表示法可为绝对路径或相对路径。若目录名称省略，则变换至使用者的home目录(也就是刚login时所在的目录)。

另外，”~”也表示为home目录的意思 **linux命令大全 上一级**，”.”则是表示目前所在的目录，”..”则表示目前目录位置的上一层目录。

句型

```
cd [dirName]
```

dirName：要切换的目标目录。

实例

跳到/usr/bin/:

```
cd /usr/bin
```

跳到自己的home目录:

```
cd ~
```

跳到目前目录的上上两层:

```
cd ../..
```

2.ls

(ls命令会列举当前该目录下所有的内容（文件及文件夹) linux培训班，加-l会列举文件的详尽信息，类似于命令ll。

句型

```
ls [-alrtAFR] [name...]
```

参数:

•-a显示所有文件及目录(ls内定将文件名或目录名称开头为”.”的视为隐藏档，不会列举)

•-l除文件名称外，亦将文件型态、权限、拥有者、文件大小等资讯详尽列举

•-r将文件以相反顺序显示(原定依英语字母顺序)

•-t将文件依构建时间之先后顺序列举

•-A同-a，但不列举”.”(目前目录)及”..”(父目录)

•-F在列举的文件名称后加一符号；诸如可执行档则加”*”,目录则加”/”

•-R若目录下有文件，则以下之文件亦皆依序列举

实例

![红帽linux命令大全_linux命令分类大全_linux命令大全 上一级](https://www.linuxcool.com/wp-content/uploads/2023/05/1684958736597_1.png)

列举根目录()下的所有目录：

```
# ls /bin               dev   lib         media  net   root     srv  upload  wwwboot              etc   lib64       misc   opt   sbin     sys  usrhome  lost+found  mnt    proc  selinux  tmp  var
```

列举目前工作目录下所有名称是s开头的文件，越新的排越前面:

```
ls -ltr s*
```

将/bin目录以下所有目录及文件详尽资料列举:

```
ls -lR /bin
```

列举目前工作目录下所有文件及目录；目录于名称后加”/”,可执行档于名称后加”*”:

```
ls -AF
```

3.ps

ps命令用于显示正在运行中的进程的信息。

句型

```
ps [options] [--help]
```

参数：

ps的参数十分多,在此仅列举几个常用的参数并大略介绍涵义

•-A列举所有的行程

•-w显示加宽可以显示较多的资讯

•-au显示较详尽的资讯

•-aux显示所有包含其他使用者的行程

aux)输出格式:

USERPID%CPU%MEMVSZRSSTTYSTATSTARTTIMECOMMAND

•USER:行程拥有者

•PID:pid

•%CPU:占用的CPU使用率

•%MEM:占用的记忆体使用率

•VSZ:占用的虚拟记忆体大小

•RSS:占用的记忆体大小

•TTY:终端的次要装置号码(minordevicenumberoftty)

•STAT:该行程的状态:

•D:不可中断的静止(通悸□□缜b进行I/O动作)

•R:正在执行中

![红帽linux命令大全_linux命令大全 上一级_linux命令分类大全](https://www.linuxcool.com/wp-content/uploads/2023/05/1684958736597_2.png)

•S:静止状态

•T:暂停执行

•Z:不存在但暂时未能清除

•W:没有足够的记忆体分页可分配

•-l若不加选项，则-l参数会列举全部的信息名称。-s指定要送出的信息。

[程序][程序]可以是程序的PID或是PGID，也可以是工作编号。

实例/h4>

杀害进程

```
pwd [--help][--version]
```

强制杀害进程

```
# kill -KILL 123456
```

发送SIGHUP讯号，可以使用一下讯号

```
# kill -HUP pid
```

彻底杀害进程

```
# kill -9 123456
```

显示讯号

```
# kill -l
1) SIGHUP     2) SIGINT     3) SIGQUIT     4) SIGILL     5) SIGTRAP
6) SIGABRT     7) SIGBUS     8) SIGFPE     9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
21) SIGTTIN    22) SIGTTOU    23) SIGURG    24) SIGXCPU    25) SIGXFSZ
26) SIGVTALRM    27) SIGPROF    28) SIGWINCH    29) SIGIO    30) SIGPWR
31) SIGSYS    34) SIGRTMIN    35) SIGRTMIN+1    36) SIGRTMIN+2    37) SIGRTMIN+3
38) SIGRTMIN+4    39) SIGRTMIN+5    40) SIGRTMIN+6    41) SIGRTMIN+7    42) SIGRTMIN+8
43) SIGRTMIN+9    44) SIGRTMIN+10    45) SIGRTMIN+11    46) SIGRTMIN+12    47) SIGRTMIN+13
48) SIGRTMIN+14    49) SIGRTMIN+15    50) SIGRTMAX-14    51) SIGRTMAX-13    52) SIGRTMAX-12
53) SIGRTMAX-11    54) SIGRTMAX-10    55) SIGRTMAX-9    56) SIGRTMAX-8    57) SIGRTMAX-7
58) SIGRTMAX-6    59) SIGRTMAX-5    60) SIGRTMAX-4    61) SIGRTMAX-3    62) SIGRTMAX-2
63) SIGRTMAX-1    64) SIGRTMAX
```

杀害指定用户所有进程

```
#kill -9 $(ps -ef | grep hnlinux) //方法一 过滤出hnlinux用户进程
#kill -u hnlinux //方法二
```

10.man

显示某个命令的man页面,最佳学习命令，假若不理解linux的某一个命令这么你只须要通过man就可快速查看改命令的详尽介绍。

不论是菜鸟老鸟，man命令都是你查看命令详尽介绍时的常用命令。

```
man 命令
```

总结

假如听到这儿，想必你已然大致浏览过这篇最常用的linux命令top10，这儿不是权威linux shell，不是绝对，仅仅是一份供您参考的举例。

在您的心中其实有更常用的linux命令，假如你有不通早已欢迎留言，说出你心里最常用的linux命令。

假如想了解更多Linux中命令使用，可以查看【Linux命令大全[3]】，关注我后，公号上面回复“命令”即可下载。

References

[1]最常用的linux命令top10:

[2]linux系统:

[3]Linux命令大全:
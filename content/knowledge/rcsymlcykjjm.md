---



title: "日常使用命令/常用快捷键命令命令命令命令"
description: "日常使用命令/常用快捷键命令命令命令命令"
keywords: "日常使用命令/常用快捷键命令命令命令命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679263238758_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、日常使用命令/常用快捷键命令

开关机命令

1、shutdown–hnow：立即进行死机

2、shutdown–rnow：现今重新启动计算机

3、reboot：现今重新启动计算机

4、su-：切换用户；passwd：更改用户密码

5、logout：用户注销

常用快捷命令

1、tab=补全

2、ctrl+l-：清屏，类似clear命令

(3、ctrl+r-：查找历史命令（history) ；ctrl+c=中止

4、ctrl+k=删掉此处至末尾所有内容

5、ctrl+u=删掉此处至开始所有内容

常用工具命令

man:帮助命令

wc:文本统计统计

wordcount

3529a.txt

行数词组数字符数文件名

常见参数：

-l：只查看行数

-w:只查看词组数

-c：只查看字符数

du:文件大小统计

格式：du[选项参数]dir_path

常见参数：

-s:只统计该文件目录的大小，不递归

-h:人性化的显示单位

find:文件检索命令

```
语法 find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} ; 参数说明 : find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。 expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。 -mount, -xdev : 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件 -amin n : 在过去 n 分钟内被读取过 -anewer file : 比文件 file 更晚被读取过的文件 -atime n : 在过去n天内被读取过的文件 -cmin n : 在过去 n 分钟内被修改过 -cnewer file :比文件 file 更新的文件 -ctime n : 在过去n天内被修改过的文件 -empty : 空的文件-gid n or -group name : gid 是 n 或是 group 名称是 name -ipath p, -path p : 路径名称符合 p 的文件，ipath 会忽略大小写 -name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写 -size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。-type c : 文件类型是 c 的文件。 d: 目录 c: 字型装置文件 b: 区块装置文件 p: 具名贮列 f: 一般文件 l: 符号连结 s: socket -pid n : process id 是 n 的文件 你可以使用 ( ) 将运算式分隔，并使用下列运算。 exp1 -and exp2 ! expr -not expr exp1 -or exp2 exp1, exp2实例 将目前目录及其子目录下所有延伸档名是 c 的文件列出来。 # find . -name "*.c" 将目前目录其其下子目录中所有一般文件列出 # find . -type f 将目前目录及其子目录下所有最近 20 天内更新过的文件列出 # find . -ctime -20 查找/var/log目录中更改时间在7日以前的普通文件，并在删除之前询问它们： # find /var/log -type f -mtime +7 -ok rm {} ; 查找前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件： # find . -type f -perm 644 -exec ls -l {} ; 为了查找系统中所有文件长度为0的普通文件，并列出它们的完整路径： # find / -type f -size 0 -exec ls -l {} ;
```

二、常用目录/文件操作命令

(1.展示目录列表命令ls（list) 

(ls展示当前目录下的可见文件ls-a展示当前目录下所有的文件（包括隐藏的文件) ls-l(ll)展示当前目录下文件的详尽信息ll-a展示当前目录下所有文件的详尽信息ll-h友好的显示当前目录下文件的详尽信息（当然就是文件的大小可读性更强了）

pwd：显示目前的目录

(2.切换目录命令cd（changedirectory) 

cdtest切换到test目录下cd..切换到上一级目录cd/切换到系统根目录下cd~切换到当前用户的根目录下cd-切换到上一级所在的目录

(3.目录的创建（mkdir) 和删掉（rmdir）命令

(mkdirtest在当前目录下创建一个test目录mkdir-ptest/a/b在test目录下的a目录下创建一个b目录linux伊甸园论坛，假如上一级目录不存在，则连它的父目录一起创建rmdirtest删掉当前目录下的test目录（注意：该命令只才能删掉空目录) 

(4.文件的创建（touch) 和删掉（rm）命令

(touchtest.txt在当前目录下创建一个test.txt的文件rmtest.txt删掉test.txt的文件（带寻问的删掉，需输入y能够删掉) rm-ftest.txt直接删掉text.txt文件rm-rtest递归删掉，即删掉test目录以及其目录下的子目录（带寻问的删掉）rm-rftest直接删掉test目录以及其目录下的子目录

![linux查看sql版本命令_linux命令查看版本_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679263238758_0.png)

5.文件打包或解压命令tar

打包并压缩文件

Linux中的打包文件通常是以.tar结尾的 **查看linux版本命令**，压缩的命令通常是以.gz结尾的。

而通常情况下打包和压缩是一起进行的qq for linux，打包并压缩后的文件的后缀名通常.tar.gz。

命令：tar-zcvf打包压缩后的文件名要打包压缩的文件

其中：z：调用gzip压缩命令进行压缩

c：打包文件

v：显示运行过程

f：指定文件名

示例：打包并压缩/test下的所有文件压缩后的压缩包指定名称为xxx.tar.gz

tar-zcvfxxx.tar.gzaaa.txtbbb.txtccc.txt

或：tar-zcvfxxx.tar.gz/test/*

(解压压缩包（重点) 

命令：tar[-xvf]压缩文件

其中：x：代表解压

示例：将/test下的xxx.tar.gz解压到当前目录下

tar-xvfxxx.tar.gz

示例：将/test下的xxx.tar.gz解压到根目录/usr下

tar-xvfxxx.tar.gz-C/usr——C代表指定解压的位置

Linux的权限命令

权限是Linux中的重要概念，每位文件/目录等都具有权限，通过ls-l命令我们可以查看某个目录下的文件或目录的权限

文件的类型：

d：代表目录

-：代表文件

(l：代表链接（可以觉得是window中的快捷方法) 

旁边的9位分为3组，每3位置一组，分别代表属主的权限，与当前用户同组的用户的权限，其他用户的权限

r：代表权限是可读，r也可以用数字4表示

w：代表权限是可写，w也可以用数字2表示

x：代表权限是可执行，x也可以用数字1表示

(属主（user) 

(属组（group) 

其他用户

r

w

x

r

w

x

r

![查看linux版本命令_linux查看sql版本命令_linux命令查看版本](https://www.linuxcool.com/wp-content/uploads/2023/03/1679263238758_1.jpg)

w

x

4

2

1

4

2

1

4

2

1

linux中用户的分类

小李小李对象老王

所有者u同组用户g其他人o

linux中文件权限

读r写w执行x没有权限-

文件详情信息：

-rw-r--r--.1rootroot5Aug2802:27a.txt

drwxr-xr-x.2rootroot4096Aug2708:52test

第一位：d:目录，-：文件

rw-r--r--

所有者同组用户其他人

只有读写只有读只有读

1：该文件的链接数

root：文件所属者

root：文件所属组

5Aug2802:27：最后的更改时间

更改文件/目录的权限的命令：chmod

示例：更改/test下的aaa.txt的权限为属主有全部权限，属主所在的组有读写权限 **查看linux版本命令**，

其他用户只有读的权限

chmodu=rwx,g=rw,o=raaa.txt

上述示例还可以使用数字表示：

chmod764aaa.txt

更改文件的所属用户和所属组chown

chownusername:groupNameaa.txt

chownusername:aa.txt

chown:groupNameaa.txt

-R：递归子目录更改所属者和所属组

三、文件/文件夹的cprm及文件的查看

![查看linux版本命令_linux查看sql版本命令_linux命令查看版本](https://www.linuxcool.com/wp-content/uploads/2023/03/1679263238758_2.png)

cp复制文件或目录)

cp即拷贝文件和目录。

句型:

```
[root@www ~]# cp [-adfilprsu] 来源档(source) 目标档(destination)
[root@www ~]# cp [options] source1 source2 source3 .... directory
```

选项与参数：

用root身分，将root目录下的.bashrc复制到/tmp下，并命名为bashrc

```
[root@www ~]# cp ~/.bashrc /tmp/bashrc
[root@www ~]# cp -i ~/.bashrc /tmp/bashrc
cp: overwrite `/tmp/bashrc'? n  <==n不覆盖，y为覆盖
```

rm移除文件或目录)

句型：

```
 rm [-fir] 文件或目录
```

选项与参数：

将刚才在cp的实例中创建的bashrc删掉掉！

```
[root@www tmp]# rm -i bashrc
rm: remove regular file `bashrc'? y
```

若果加上-i的选项都会主动寻问喔，防止你删掉到错误的档名！

mv联通文件与目录，或更改名称)

句型：

```
[root@www ~]# mv [-fiu] source destination
[root@www ~]# mv [options] source1 source2 source3 .... directory
```

选项与参数：

复制一文件，创建一目录，将文件联通到目录中

```
[root@www ~]# cd /tmp
[root@www tmp]# cp ~/.bashrc bashrc
[root@www tmp]# mkdir mvtest
[root@www tmp]# mv bashrc mvtest
```

将某个文件联通到某个目录去，就是这样做！

将刚才的目录名称改名为mvtest2

```
[root@www tmp]# mv mvtest mvtest2
```

Linux文件内容查看

Linux系统中使用以下命令来查看文件的内容：

你可以使用man[命令]来查看各个命令的使用文档，如：mancp。

cat

由第一行开始显示文件内容

句型：

```
cat [-AbEnTv]
```

选项与参数：

检看/etc/issue这个文件的内容：

```
[root@www ~]# cat /etc/issue
CentOS release 6.4 (Final)
Kernel r on an m
```

tac

tac与cat命令正好相反，文件内容从最后一行开始显示，可以看出tac是cat的倒着写！如：

```
[root@www ~]# tac /etc/issue
Kernel r on an m
CentOS release 6.4 (Final)
```

nl

显示行号

句型：

```
nl [-bnw] 文件
```

选项与参数：

实例一：用nl列举/etc/issue的内容

```
[root@www ~]# nl /etc/issue
     1  CentOS release 6.4 (Final)
     2  Kernel r on an m
```

more

一页一页翻动

```
[root@www ~]# more /etc/man.config
#
# Generated automatically from man.conf.in by the
# configure script.
#
# man.conf from man-1.6d
....(中间省略)....
--More--(28%)  <== 重点在这一行喔！你的光标也会在这里等待你的命令
```

在more这个程序的运行过程中，你有几个按钮可以按的：

less

一页一页翻动，以下实例输出/etc/man.config文件的内容：

```
[root@www ~]# less /etc/man.config
#
# Generated automatically from man.conf.in by the
# configure script.
#
# man.conf from man-1.6d
....(中间省略)....
:   <== 这里可以等待你输入命令！
```

less运行时可以输入的命令有：

head

取出文件后面几行

句型：

```
head [-n number] 文件
```

选项与参数：

```
[root@www ~]# head /etc/man.config
```

默认的情况中，显示后面10行！若要显示前20行，就得要这样：

```
[root@www ~]# head -n 20 /etc/man.config
```

tail

取出文件前面几行

句型：

```
tail [-n number] 文件
```

选项与参数：

```
[root@www ~]# tail /etc/man.config
# 默认的情况中，显示最后的十行！若要显示最后的 20 行，就得要这样：
[root@www ~]# tail -n 20 /etc/man.config
```

系统常用操作命令

visudo:编辑sudo命令的配置

编辑第98行

##Allowroottorunanycommandsanywhere

rootALL=(ALL)ALL

(用户名登陆的主机=（以哪些样的身分运行) 可以执行哪些命令

假如想让huadian用户也高踞root相关权限。。

huadianALL=(root)NOPASSWD:serviceiptablesstatus

huadianALL=(root)NOPASSWD:serviceiptablesstart

推荐用法

huadianALL=(root)NOPASSWD:ALL

(使用权限：sudoserviceiptablesstatus—-（检测防火墙状态) 

网路管理：ping、ifconfig

![查看linux版本命令_linux命令查看版本_linux查看sql版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679263238758_3.png)

服务管理命令：

service:必须把握

格式：

services_namestart|stop|status|restart

linux系统所有自带服务名称：/etc/init.d/

常用：

关掉防火墙服务

serviceiptablesstop

重启网路服务：

servicenetworkrestart

mysql数据库服务的名称：

mysql版本高于5.5mysqld

mysql版本低于5.5mysql

chkconfig:设置是否开机启动:必须把握

判断是否开机启动

chkconfigiptables--list

2.3.4.5是on表示开机启动

设置

chkconfigiptableson|off

进程管理：ps

ps:查当前进程

查看java的进程

ps-ef|grepjava

jps:==(ps-ef|grepjava)只有在linux中安装了JDK能够用

kill:杀害某个进程

kill-9pid

端口管理

nststat:查看端口开放情况

-a:表示列出所有的联接、服务器窃听

-t:列举所有tcp合同的服务

-u:列举所有udp合同的服务

-n:使用端标语来显示

-l:列举所有的窃听

(-p:列举所有服务的进程id（pid) 

常用：netstat-atunlp

redhat的selinux安全机制

关掉selinux安全机制

vim/etc/selinux/config

SELINUX=disabled

重启机器生效
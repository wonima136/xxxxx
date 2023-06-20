---



title: "Linux下输入nslookup，取显示command，直接yuminstallnslookup"
description: "Linux下输入nslookup，取显示command，直接yuminstallnslookup"
keywords: "Linux下输入nslookup，取显示command，直接yuminstallnslookup"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1. nslookup

(做DNS的人都知道nslookup（name server lookup：域名查询) 命令是做什么用的，windows系统自带的。但在Linux下输入nslookup，取显示command not found。直接yum install nslookup，出错了。此时需要找到哪个软件包提供这个命令。利用yum provides */nslookup就可以找出所需要的软件包了。

![linux创建root用户命令_ubuntu创建root用户_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_0.jpg)

知道了软件包，则使用yum install -y bind-utils安装即可。

查询 DNS 域的名称服务器信息：

查询邮件交换器记录：

查询域名服务器：

查询DNS记录：

查询起始授权机构：

(查询端口号（此处没查到) ：

更多使用请参考：8 Linux Nslookup Commands to Troubleshoot DNS(Domain Name Server)

2. ls

(此命令是列出目录内容（List Directory Contents) ，可能是文件也可能是文件夹。

(“ls -l” （long listing fashing) 命令表示以详情模式列出文件夹的内容。

“ls -a”命令列出文件夹里的所有内容，包括以“.”开头的隐藏文件。

“ls -l”

![linux创建root用户命令_ubuntu创建root用户_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_1.jpg)

3、md5sum

md5sum是计算和检验MD5信息签名。MD5 checksum使用匹配验证文件的完整性。

4、uname

此命令是Unix Name的简写linux下载，显示机器名、操作系统和内核的详细信息。

5、history

此命令记录历史记录。它显示在终端中所执行过的所有命令的历史。

6、sudo

(“sudo”（super user do) 命令允许授权用户执行超级管理用户或者其它用户的命令。

注意：sudo允许用户借用超级用户的权限，而su命令实际上是允许用户以超级用户登录 **linux创建root用户命令**，所以sudo比su更安全。

“To err is human, but to really foul up everything, you need root password.”

“人非圣贤孰能无过，但是拥有root密码就真的万劫不复了。”

7、su

可以使用此命令切换用户，su是switch user的缩写。从普通用户切换到root用户需要输入root的密码，从root用户切换到普通用户不需要输入密码。

su lee 表示切换到lee用户。

su 表示切换到root用户。

8、mkdir

(mkdir（Make directory) 命令在命名路径下创建新的目录。如果目录已存在，则返回一个错误信息：cannot create folder, folder already exists.

注：目录只能在用户拥有写权限的目录下才能创建。在linux中，文件、文件夹、驱动、命令、脚本都视为文件。

9、mkpasswd

(此命令根据指定长度，产生一个难猜的随机密码。其中-l表示长度（Length) 。如下图产生15位的随机密码。

10、date

此命令使用标准的输出打印当前的日期和时间。更多命令设置，可以使用date --help命令。

11、cp

“copy”复制，此命令把文件从一个地方复制到另外一个地方。

(有时直接用此命令，则会出现omitting directory的提示，那是因为lee_dir下还有目录，不能直接进行拷贝。利用cp --help查看，有一个参数可以解决这个问题。-r(recursive)，copy directories recursively（递归复制目录) 。

![ubuntu创建root用户_linux创建root用户命令_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_7.jpg)

12、pwd

此命令在终端显示当前工作目录的全路径。pwd表示print working directory。

13、cd

(此命令代表改变目录。它在终端中改变工作目录来执行复制、移动、读、写等。如”cd ~”会改变工作目录为用户的家目录，”cd ..”表示从当前目录切换到（当前工作目录的) 父目录。

![ubuntu创建root用户_linux创建root用户命令_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_9.png)

14、cal

calCalender)，它用来显示当前月份或未来、过去任何年份中的月份。

15、chmod

(“chmod”命令是改变文件的模式位。它会根据要求来改变每个所给的文件、文件夹、脚本等等的文件模式（权限) 。在文件中，存在三种类型权限：

Read(r) = 4

Write(w) = 2

Execute(x) = 1

如果只想给文件只读权限，就设置为“4”；只写权限，设置为“2”；只执行权限，设置为“1”；读写权限，就是4+2=6，以此类推。

现在需要设置三种用户和用户组权限。第一个是拥有者，然后是用户所在的组，最后是其他用户。

rwxr-x--x abc.sh

(这里root的权限是rwx（读写和执行权限) 

(所属用户组权限是r-x（读和执行权限) 

(其他用户权限是-x（只有执行权限) 

为了改变它的权限，为拥有者，用户所在组和其它用户提供读，写，执行权限：

chmod 777 abc.sh

三种都只有读写权限：

chmod 666 abc.sh

拥有者用户有读写和执行权限，用户所在的组和其它用户只有可执行权限:

chmod 711 abc.sh

16、useradd

建立用户账号。账号建好后，再用password设定账号的密码，而可用userdel删除账号。使用useradd指令所建立的账号，实际上是保存在/etc/password文本文件中。

![linux创建root用户命令_ubuntu创建root用户_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_12.jpg)

“useradd xiaoliang -p 45678900”创建用户xiaoliang，密码为45678900

17、chown

此命令改变文件拥有者和所在用户组。每个文件都属于一个用户组和一个用户。使用“ls -l”命令，就可以看到如下所示的东西。

文件leo.sh属于用户和用户组“root”linux删除文件夹，前一个root表示用户，后一个root表示用户组。

chown lee:root leo.sh 把leo.sh文件所属用户改为lee，用户组为root。

18、ifconfig

此命令用来配置常驻内核的网络接口信息。

19、netstat

此命令显示各种网络相关信息，如网络连接、路由表、接口统计、伪装连接、组播成员身份等。

netstat -a 列出所有网络端口

netstat -at 显示所有TCP相关端口

![ubuntu创建root用户_linux创建root用户命令_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_16.jpg)

netstat -s 显示所有连接的统计信息

![linux创建root用户命令_ubuntu创建root用户_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_17.jpg)

20、uptime

此命令是用来查询linux系统负载的。系统平均负载被定义在特定时间间隔内运行队列中的平均进程数。

如果一个进程满足以下条件，则其就会位于运行队列中：

1、当前时间 10:43:18

2、系统已运行时间 6:45

3、当前在线用户 1 user

4、平均负载 0.00, 0.01, 0.05，分别表示1分钟、5分钟、15分钟系统的负载。

(此外 **linux创建root用户命令**，此命令还有一个参数-V（大写) ，用来查询版本：

21、wall

此命令可以向所有登录系统的用户发送信息。

如果向已登录系统的某个用户发送消息，可以利用write这个命令。

22、service

此命令控制服务的启动、停止和重启。此命令能够不重启整个系统就可以让配置生效，开启、停止或重启某个服务。

如 service network restart, 重启网卡。

![linux创建root用户命令_linux切换root用户命令_ubuntu创建root用户](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_22.png)

23、rm

移除命令。可以用来删除文件和目录。

由于mm.txt是直接用 mkdir 命令创建的，所以是一个文件夹。rm 命令不能直接删除目录，需要加上参数 -rf 才可以。-r表示recursive，-f表示force。

24、touch

新建一个不存在的文件，或用来修改文件时间戳。

25、显示所有用户

```
getent passwd
```

26、查看jdk

```
yum list *jdk*
```

27、安装jdk

```
yum install *jdk*
```

安装JRE和JDK

```
# yum install java-1.7.0-openjdk java-1.7.0-openjdk-devel
```

28、查询安装哪个版本的git

```
rpm -qa git
```

29、出现这样的错误：syntax error near unexpected token `$'{r”

```
[root@leo platform_build]# sh envsetup.sh
envsetup.sh: line 1: syntax error near unexpected token `$'{r''
'nvsetup.sh: line 1: `function hmm() {
```

由于文件换行符是dos格式的”rn”

可以使用cat -v 文件名 来查看换行符是否是，如果是上述的，则行结尾会是^m

需要转换成linux/unix格式的”n”

具体转换办法就是转换换行符

可以用sed命令处理一下文件，命令如下：

```
sed 's/r//' 原文件 >转换后文件
```

如

```
sed 's/r//' envsetup.sh >envsetup1.sh
```

30、ubuntu下搜索适合的JDK版本并安装

```
apt-cache search openjdk
```

![linux切换root用户命令_ubuntu创建root用户_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_25.jpg)

![ubuntu创建root用户_linux切换root用户命令_linux创建root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_26.jpg)

执行安装

```
sudo apt-get install openjdk-7-jdk
```

31、ubuntu下配置java_home变量

直接运行

```
echo $JAVA_HOME
```

并不能看到输出。

设置：

```
echo export JAVA_HOME="/usr/lib/jvm/java-7-openjdk-amd64/" >> ~/.bashrc
```

然后重启terminal或通过使用以下命令

```
source ~/.bashrc
```

重新输出$JAVA_HOME

![ubuntu创建root用户_linux创建root用户命令_linux切换root用户命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674511273784_27.jpg)

32、查看一个端口被哪个程序使用

```
lsof -i:3306
```

33、cat命令主要有三大功能

1、一次显示整个文件

2、从键盘创建一个文件

3、将几个文件合并为一个文件

```
cat filename
```

```
cat > filename
```

```
cat file1 file2 > file
```

34、Ubuntu缺省下没有安装SSH Server

```
sudo apt-get install openssh-server
```

配置完成后重启

```
sudo /etc/init.d/ssh restart
```

35、解压tgz文件(使用tar打完包后再以gzip命令压缩的文件)

```
tar zxf filename
```

```
x : 从 tar 包中把文件提取出来
z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压
v : 显示详细信息
f : f后面必须跟上要处理的文件名
```

本文永久更新链接地址：
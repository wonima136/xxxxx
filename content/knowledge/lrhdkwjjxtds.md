---



title: "Linux如何打开文件夹？系统的设置显示当前目录？"
description: "Linux如何打开文件夹？系统的设置显示当前目录？"
keywords: "Linux如何打开文件夹？系统的设置显示当前目录？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680379673398_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux怎样打开文件夹？

1、进入到系统以后，双击箭头所指的符号，就可以步入系统根目录了，相当于Windows上面的“我的笔记本”。

2、点击“Computer”，就可以看到根目录下的文件和文件夹了。

3、窗口上方显示的是当前所在的目录位置，可以随时查看自己处于那个目录中。

4、如果使用的是Linux系统的命令行，则方式又会不一样了。首先要明晰自己须要步入那个位置，例如我如今想要到/usr/local/nginx/conf这个目录中去。这时使用Linux命令cd/usr/local/nginx/conf就可以了linux怎么查看系统版本，注意cd前面要加空格。

5、此时我早已步入到我想去的目录下边了，命令ls查看当前目录下有什么文件和文件夹。

6、由于是命令行界面，操作者在多次cd以后不清楚自己此时在那个目录下，这时你须要使用pwd这个命令来查看你当前所处的目录位置，

7、如果要查看文件内容的话，就须要使用Linux系统的文件编辑器vi或则vim，建议使用vim **linux查找文件夹命令**，可读性会更好一些。此时我须要查看fastcgi.conf这个文件的内容，就使用命令vimfastcgi.conf，注意vim旁边也有个空格。

8、这样就可以查看文件的具体内容了，

使用哪些命令步入Linux的/user目录，打开终端时是在用户目录下，怎样进行切换？

须要使用cd命令步入指定目录，步骤如下：

1、首先，联接上相应的linux主机，步入到等待输入shell指令的linux命令行状态下。

2、其次，在命令行中输入：cd/user。

3、键盘按“回车键”运行shell指令，此时会听到成功步入到了linux系统的user目录下。

怎么设置linux显示当前目录？

pwd命令拿来显示当前工作路径，命令是presentworkingdirectory当前工作路径的简写。

结合basename命令可以返回当前目录的名称。用法示例：返回当前工作路径$pwd返回当前所在目录$basename`pwd`注意：pwd左侧为反顿号`，作用是运行两个反顿号之间的命令，而且将命令运行的结果返回。

怎么查看软件安装目录linux？

1.which

which命令查找出相关命令是否早已在搜索路径中，反例如下：

$whichgcc//显示出GNC的C编译器安装在那个目录

返回结果为：

/usr/bin/gcc

注意：假如which没有找到要找的命令，可以试试whereis,该命令搜索更大的范围的系统目录。有些系统上的which命令不显示用户没有执行权限的文件。诸如

$whichipppd

/usr/bin/which:noipppdin(/bin:/usr/bin:/sbin:/usr/sbin)

$whereisipppd

ipppd:/usr/sbin/ipppd

$ls-l/usr/sbin/ipppd

-rwx——1rootroot124924Feb32000/usr/sbin/ipppd

2.locate

(locate命令用于查找文件，它比find命令的搜索速率快，它须要一个数据库，这个数据库由每晚的例行工作（crontab) 程序来构建。当我们构建好这个数据库后，就可以便捷地来搜救所需文件了。

(即先运行：updatedb（无论在哪个目录中均可，可以置于crontab中) 后在/var/lib/slocate/下生成slocate.db数据库即可快速查找。在命令提示符下直接执行#updatedb命令即可。

$locatesignal.h

/usr/include/asm/signal.h

/usr/include/linux/signal.h

/usr/include/signal.h

/usr/include/sys/signal.h

3.rpm

假如用户晓得自己要查找到软件包的名子，可以直接使用下边的命令。这个命令只在支持rpm的linux版本上有效，如redhat，centos，fedora和suse等。

$rpm-qpython//查找检测系统是否安装了python

python-1.5.2-27

或则：$rpm-qa|greppython//这是两个命令的结合

rpm的其他用法：

rpm-qa(列举所有安装了的包)

rpm-epackage(删掉某个包)

rpm-qipackage(查询某个包)

rpm-qfcommand(按照程序查询包的名子)

rpm-qlpackage(查询某个包所有的安装文件)

4.yum

![linux查找替换命令_linux查找文件夹命令_linux 查找目录命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680379673398_1.png)

yum的参数好多，以下是用于查找软件包的命令。并且也只支持特定的短发版本，centos下最常用的命令

$yumlist//列举所指定的软件包,后可以加上你想查找的软件包的名子

$yumlistinstalled//列举所有已安装的软件包

$yuminfoinstalled//列举所有已安裝的软件包信息

5.whereis

whereis是查找文件或则命令的所在目录

#whereispwd//查找pwd命令所在的目录

6.find

这个命令可拿来查找系统是否安装了指定的软件包，更重要的是也可以查找自己对软件包名称记忆不是很清晰的软件包。并且我想是这是所有linux和unix都支持的。find的查找范围很广，功能强悍，再搭配用正则抒发，疗效挺好，不过建议尽量缩小搜索范围，降低系统压力linux 安装，虽然，当系统文件多了，搜索花费时间和资源的。

$find/-name”python”//从根目录开始查找包含”python“这个字符的文件和文件夹。

find的详尽使用有如下反例：

#find.-maxdepth1-name*.jpg-print-execconvert在当前目录下查找，查找深度为一，查找以.jpg结尾文件，并将其转化

![linux查找文件夹命令_linux查找替换命令_linux 查找目录命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680379673398_2.png)

#find/-name*.rpm-execchmod755′{}’;搜索以’.rpm’结尾的文件并定义其权限

#find/-namefile1从’/’开始步入根文件系统搜索文件和目录

#find/-perm-u+s列举一个系统中所有使用了SUID控制的文件

#find/-useruser1搜索属于用户’user1’的文件和目录

#find/-xdev-name*.rpm搜索以’.rpm’结尾的文件，忽视硬盘、捷盘等可联通设备

#find/home/user1-name’*.txt’|xargscp-av--target-directory=/home/backup/--parents从一个目录查找并复制所有以’.txt’结尾的文件到另一个目录

#find/home/user1-name*.bin在目录’/home/user1’中搜索带有’.bin’结尾的文件

#find/usr/bin-typef-atime+100搜索在过去100天内未被使用过的执行文件

#find/usr/bin-typef-mtime-10搜索在10天内被创建或则更改过的文件

#find/var/log-name’*.log’|tarcv--files-from=-|bzip2>log.tar.bz2查找所有以’.log’结尾的文件并弄成一个bzip包

linux如何存入文件到文件夹？

使用命令:x文件夹/文件名来存入文件到文件夹。

总结

(以上是真正的笔记本专家为你搜集整理的linux步入文件夹命令（linux步入文件夹) 的全部内容，希望文章才能帮你解决所遇见的问题。

假如认为真正的笔记本专家网站内容还不错 **linux查找文件夹命令**，欢迎将真正的笔记本专家推荐给好友。
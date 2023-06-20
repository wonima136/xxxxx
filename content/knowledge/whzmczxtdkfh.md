---



title: "Windows或者Mac操作系统的开发环境及开发人员必备技能"
description: "Windows或者Mac操作系统的开发环境及开发人员必备技能"
keywords: "Windows或者Mac操作系统的开发环境及开发人员必备技能"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux 一、引言 1.1 开发环境

平时你们大多是在Windows或则Mac操作系统下去编撰代码进行开发，在开发环境中安装大量的软件，这样会导致环境的稳定性和安全性增加

1.2生产环境

是将程序运行在此环境中linux shell，供用户去使用。这个环境是由专业的人员去维护，一般人是没有权限去操作生产环境的

1.3 测试环境

一般克隆一份生产环境，会将开发环境中的程序布署到测试环境中，这个环境主要目的时去程序进程监测，手机程序中的各类问题，交给开发人员进行更改

1.4 操作系统的选择

生产环境中，常用的操作系统由Windows 2003 service，Linux，Unix等等，Linux操作系统，在生产环境中抢占了大量的市场份额，Linux主要以稳定，可靠免费的特征成为全球使用最多的服务器操作系统。

Linux操作系统如今已然成为后台开发人员必备的技能，并且后期学习的各类知识还会涉及到Linux操作系统。

二、Linux介绍 2.1 Linux介绍

在Linux操作系统出现之前，还有一个操作系统称作Minix，Minix操作系统是由Andrew的大学教授研制下来的，当时大学教授是为了给中学生上课，买了一套Unix操作系统，参考Unix自己写了一个操作系统，并且命名为Minix。同时将Minix开源，供中学内部的研究和教学，到了2000年，Andrew将Minix操作系统完全对外开源。

Minix因为完全对外开源以后，在互联网上迅速的传播，但是你们在使用时，发现Minix不是很完美，内部存在各种各样的问题。用户将问题解决后linux学习视频，编写了一个补丁，将补丁以短信的形式发给Andrew，但是Andrew院长最初的目的只是为了教学和研究。

于此同时，以为美国的大学生出现了，交Linus，在Minix操作系统的基础上，自己添加了一些补丁和插件，并将其命名为Linux操作系统，并且完全堆外开源，而且开始维护Linux操作系统。

之前学习的Git也是Linus研制的。

![Linus和Linux](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_0.png)

2.2Linux的版本

Linux的版本分为两种，一种是Linus团队正在维护的开源内核版本。另一种是一些厂商基于内核版本封装的发行版本。

![Linux的常见发行版本](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_1.png)

2.3 Linux和Windows区别

Ps:我们在学习Linux时 **linux压缩文件命令tgz**，参考Windows下做了哪些，就在Linux中做哪些

三、Linux安装 3.1 安装VMware

傻瓜式安装，下一步下一步下一步…

3.2 安装Xterm

解压即可使用…

3.3 在VMware中安装Linux

按照右图步骤，逐步安装Linux操作系统…

3.3.1 选择安装方法

![选择安装方式](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_2.png)

3.3.2 指定镜像形式

![选择稍候安装操作系统](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_3.png)

3.3.3 选择操作系统

![选择操作系统类型](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_4.png)

3.3.4 指定虚拟机名称

![指定虚拟机名称和安装目录](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_5.png)

3.3.5 磁盘储存方法

![拆分成多个文件存储](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_6.png)

3.3.6 指定虚拟机配置

![指定虚拟机的设置](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_7.png)

3.3.7 开始安装CentOS

![开始界面选择语言](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_8.png)

3.3.8 配置虚拟机网路联接

![配置安装位置以及网络和主机名称](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_9.png)

3.3.9 开始安装

3.3.10 安装成功

![安装成功](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_10.png)

3.4 使用Xterm联接Linux

直接在VMware中操作Linux由好多限制，我们可以在图形化界面中操作Linux操作系统

具体步骤如下…

3.4.1 查看ip地址

![查看ip地址](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_11.png)

3.4.2 通过Xterm联接

![在这里插入图片描述](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_12.png)

![连接成功](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_13.png)

四、Linux的目录结构

Windows的目录结构是带有c盘的。D：E：C：，而Linux中是没有c盘的

在Xterm中输入ls/查看Linux的顶尖目录

Linux的常用目录…

![Linux目录树状图](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_15.png)

五、Linux的基本命令

Linux中命令的基本格式：命令【选项】【参数】

需要注意，个别命令是不遵循这个格式

当命令中有多个选项时，可以写在一起的，并且选项也是由缩写形式的命令-选项A选项B

Linux的基本操作命令，不违背上述格式，但是后期会时常使用…

```sh
# 1.我是谁
who am i
# 2.我在哪
pwd
# 3.查看ip地址

ip a | ip address
# 4.清屏
clear
# 5.ping域名|ip
ping
# 6.强制停止
Ctrl + C
```

六、Linux目录命令 6.1 列出目录

查看指定目录下的内容，默认查看当前目录下内容

Linux中的隐藏文件是以.开头的，当前目录使用.表示，上一级目录使用…表示

```sh
ls [-ald][目录名]
# 目录名不填写，默认为当前目录。
# -a：列出的全部的文件，包括隐藏文件
# -l：列举出全部的信息
# -d：仅查看目录本身
```

6.2 切换目录

实现目录间切换，使用绝对路径、相对路径、特殊符号

```sh
cd 具体路径 | 特殊符号
```

特殊符号抒发的路径

.

当前目录

…

上一级目录

/

根目录

~

当前登入用户的HOME目录

--

返回

6.3 创建目录

创建目录，以及创建多级目录形式

```sh
mkdir [-p] 目录名
# -p：代表创建多级目录时，使用
```

6.4 删除目录

删除非空目录或包含内容的目录

```sh
# 只能删除空目录
rmdir 目录名
# 删除非空目录
rm [-rf] 目录名
# -r：代表递归删除目录下的全部内容
# -f：不询问，直接删除
```

七、Linux的文件命令 7.1 创建文件

创建空文件

```sh
touch 文件名1 文件名2 ...
```

7.2 编辑文件

编辑文件，后期最常用的命令之一

```sh
(vi 文件名			# 查看文件。（查看模式) 
(i | a | o		  # 进入编辑模式。（编辑模式) 
						# i：在当前光标处，进入编辑模式。
						# a：在当前光标后一格，进入编辑模式。
						# o：在当前光标下一行，进入编辑模式。
esc				  # 退出编辑模式，回到查看模式
(:				  # 从查看模式进入到底命令行模式。（底行命令模式) 
						# 在底行命令模式下，输入wq：保存并退出。输入q!：不保存并退出
						# 在查看模式下，摁ZZ，可以快速保存并退出
```

7.3 vi文件时，其他操作

编辑文件时，常用的快捷键，方便操作

```sh
# 在vi文件时，在底行命令模式下可以输入以下常用内容
# 行号操作

set nu				# 查看文件的行号
to rownum			# 快速的跳转到指定行
set nonu			# 取消行号
# 搜索操作
/word				# 类似Windows的Ctrl + F搜索文件中的具体内容所在位置，查看下一个可以输入字母n
# 快速定位
G					# 快速跳转到最后一行
gg					# 快速跳转到第一行
```

7.4 查看文件

根据不同的业务，可以选择不同的查看方法

```sh
# 查看文件，直接展示到最后一行
cat 文件名
# 从第一行开始查看文件内容，展示全部
tac 文件名
# 从最后一行开始展示
nl 文件名
# 显示文件的同时，展示行号
more 文件名
# 查看大文件时，可以一页一页的向下翻
# 摁space向下翻页，退出时摁q
less 文件名
# 查看大文加时，可以任意的向上或者向下翻
# 向上或向下翻页摁PageUp和PageDown，一行一行查看，摁光标的↑↓
# 只查看前几行
head 文件名
# 之查看后几行
tail 文件名
# tail -f 日志 监控日志
```

7.5 移动、重命名文件

移动、重命名目录，会依照第二个参数指定具体操作逻辑

```sh
mv 文件名 新文件名 | 路径
# 如果第二个参数指定的路径不存在，就是重命名，如果第二个参数的路径存在，就是移动
```

7.6 复制文件

复制文件到指定目录下

```sh
cp 文件名 目录
```

7.7 删除文件

删除文件形式

```sh
rm [-f] 文件名
# -f：是否询问
```

八、Linux的压缩包命令 8.1 针对tar命令

Linux中常用的压缩包，大多数是.tar，.tar.gz，tgz的

8.1.1 解压压缩包

针对压缩包后缀的情况，采用不同的参数，否则可能会损失文件

```sh
tar [-zxvf] 压缩包名称 [-C 路径]
# -z：代表压缩包后缀是.gz的
# -x：代表解压
# -v：解压时，打印详细信息
# -f：-f选项必须放在所有选项的最后，代表指定文件名称
# -C 路径：代表将压缩包内容解压到指定路径
```

8.1.2 打包成压缩包

可以将多个文件以及目录打成压缩包，根据选择的参数指定压缩包名

```sh
tar [-zcvf] 压缩包名称 文件1 文件2 目录1 目录2 ...
# -c：代表打包
# 其他参数同上
```

8.2 针对zip类型压缩包

Linux除了仅针对tar类型的压缩包，也支持zip，rar这些Windows下的压缩包。

不过须要安装软件针对各类类型压缩包的操作

![linux压缩文件命令tgz_linux压缩命令zip命令_linux压缩命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_18.jpg)

8.2.1 安装软件

```sh
yum -y install zip		# 打包程序
yum -y install unzip	# 解压程序
```

8.2.2 解压以及打包

```sh
# 解压
unzip 压缩包名称
# 打包
zip 压缩包名称 文件1 文件2 目录1 目录2 ...
```

九、用户&用户组的操作 9.1 用户的常用操作命令

Linux是一个多用户的操作系统，任何一个用户想要操作Linux操作系统，必须向系统管理员申请一个帐号才可以，并且以这个帐号的身分去操作Linux。

用户的帐号一方面可以帮助系统管理员追踪当前用户的操作。另一方面可以控制当前用户对系统资源访问。

9.1.1 用户的创建

```sh
useradd [-cgd] [选项指定的具体内容] 用户名
# -c：代表comment，给用户添加一段注释
# -g：代表group，可以修改用户所在组
# -d：代表指定用户的HOME目录
```

9.1.2 设置用户密码

```sh
passwd 用户名
```

9.1.3 切换用户

```sh
su 用户名
# [root@localhost ~]# -> root用户在本地登录，并且当前在~目录下，#代表是超级管理员
# [qf@localhost ~]$ -> qf用户在本地登录，并且当前在~目录下，$代表是普通用户
```

9.1.4 删除用户

```sh
userdel [-r] 用户名、
# -r：代表删除用户的同时，删除该用户的HOME目录
```

9.1.5 修改用户

```sh
usermod [-cgd] [选项指定的具体内容] 用户名
# -c：代表comment，给用户添加一段注释
# -g：代表group，可以修改用户的所在组
# -d：代表指定用户的HOME目录
```

9.2 用户组的操作

用户的身分不仅用户本身，还会分配到指定的用户组，可以通过用户组对设置一些文件的操作权限

9.2.1 创建用户组

```sh
groupadd 用户组名
```

9.2.2 修改用户组

```sh
groupmod [-n] [选项指定的具体内容] 用户组名
# -n 修改用户组名称
```

9.2.3 删除用户组

```sh
groupdel 用户组名
# 只能删除不存在用户的用户组
```

十、文件权限的更改

首先我们要消除Linux文件的权限信息

在Linux中输入ls -l或则 ll查看文件和目录的详尽信息

![文件详情](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_19.png)

实例中，a目录的第一个属性用”d”标识这个a是一个目录。

anaconda-ks.cfg第一个属性用”.”标识它是一个文件。

在Linux文件详情的旁边属性须要分为三组查看

其余信息

10.1 对文件的权限更改

使用chmod对文件的权限进行更改，一种使用数字，一种使用符号…

10.1.1 数字形式

```sh
chmod [-R] 777 文件|目录
# rwx在者三个权限中r：4，w：2，x：1
# -R：当修改一个目录权限时，可以添加—R，将目录下的全部内容，都修改权限。
```

10.1.2 符号形式

```sh
chmod [-R] a-rw 文件|目录
# user：u，group：g，other：o，all：a
# read：r，write：w，execute：x

# 赋予权限的方式，添加：+，减掉：-，设定：=
# -R：当修改一个目录权限时，可以添加-R，将目录下的全部内容，都修改权限。
```

10.2 文件拥有者及所属组更改

chown可以直接更改拥有者和所属做，chgrp只能更改所属组…

```sh
# 修改文件的拥有者和所属组
chown [-R] 拥有者：所属组 文件|目录
# 修改文件的拥有者
chown [-R] 拥有者 文件|目录
# 修改文件的所属组
chgrp [-R] 所属组 文件|目录
```

十一、Linux的其他操作命令 11.1 进程的操作

需要用到类似Windows的结束进程时，在Linux下须要使用如下命令

```sh
ps -ef
# 查看全部正在运行的进程
ps -ef | grep 搜索的内容
# 杀死进程
kill -9 pid
```

11.2 服务的操作

和Windows下的服务操作一致，只需如下命令，默认为centos7版本

```sh
# 针对服务的启动，停止，重启，开机自动启动，进制开机自动启动，查看服务状态。
systemctl start|stop|restart|enable|disable|status 服务名称
```

11.3 端口号查看

如发觉端口号被占用，可以使用如下形式查找pid，并结束进程

```sh
# 想使用指定的命令需要事先下载netstat
yum -y install net-tools
# 查看端口号占用情况
netstat -naop | grep 端口号
```

11.4 访问地址

类似浏览器访问路径 **linux压缩文件命令tgz**，无法图形化显示，一般用于测试

```sh
crul 访问地址
```

11.5 查找文件

在Linux中查找指定文件，参数较多，如下为依据文件名称查询

```sh
find 路径 -type f | grep profile
```

十二、Linux下安装软件 12.1 安装JDK

在Linux下安装JDK，并配置JAVA_HOME环境变量…

12.1.1 下载JDK的压缩包

去官网下载压缩包，由于oracle官网更新，需要登入并同意合同才准许下载

12.1.2 将jdk压缩包拉取到Linux系统中

需要使用图形化界面的Sftp拖放到Linux操作系统

![Xterm的Sftp图](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_21.png)

12.1.3 将jdk压缩包解压

后期大多软件都安装在/usr/local下，直接使用tar解压

```sh
tar -zxvf jdk-8u241-linux-x64.tar.gz -C /usr/local
```

12.1.4 将jdk的目录名更改一下

为了便捷配置环境变量，修改一下目录名称

```sh
cd /usr/local
mv jdk1.8.0_241 jdk
```

12.1.5 配置环境变量

Linux提供了两种环境变量的文件

修改那个文件都可以，毕竟虚拟机就我们自己使用

```sh
# 在环境变量文件中，添加如下内容
export JAVA_HOME=/usr/local/jdk
export PATH=$JAVA_HOME/bin/:$PATH
# 重新加载环境变量文件
source /etc/profile
# 最终测试
java -version
```

![测试效果](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_22.png)

12.5 安装MySQL

在MySQL下用yum的形式安装MySQL…

![linux压缩命令 区别_linux压缩命令zip命令_linux压缩文件命令tgz](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_23.png)

12.2.1 安装MySQL的YUM储存库

使用wget下载即可，不过须要先下载wget，在通过wget下载rpm包

```sh
# 首先通过yum下载wget命令
yum -y install wget
# 通过wget下载MySQL存储库
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```

12.2.2 安装下载好的rpm包

使用rpm包的命令直接安装

```sh
# 安装rpm包
rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
# 查看rpm包
rpm -qa | grep 内容
(# 卸载rpm（不需要指定当前命令。。。) 
rpm -e --nodeps rpm名称
```

12.2.3 选择发行版本

由于默认安装8.0版本的MySQL，我们须要更改为5.7版本

```sh
# 查看一下默认选择的发行版本
yum repolist all | grep mysql
# 通过编辑/etc/yum.repos.d/mysql-community.repo文件，去修改发行版本
# 将80的enable更改为0，将57的enable更改为1，保存即可，再次通过yum repolist all | grep mysql查看
# 效果如下
```

![MySQL安装版本](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_24.png)

12.2.4 安装MySQL社区版服务

开始安装，这一步须要下载一段时间，下载失败就是网路较差了，学会科学上网

```sh
yum -y install mysql-community-server
```

12.2.5 启动MySQL服务，并联接

安装成功后，手动启动，并使用日志中的密码登入，而且第一个操作必须是更改密码，才可后续正常操作

```sh
# 启动MySQL服务
systemctl start mysqld.service
# 查看初始化密码
grep 'temporary password' /var/log/mysqld.log
# 连接MySQL服务
mysql -u root -p
Enter password:随机密码
# 修改密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'P@ssw0rd';
# 要求密码，必须携带大写字母，小写字符，数字，特殊符号
```

12.2.6 开启远程联接

默认MySQL补码远程联接，需要单独创建一个用户开启远程联接，这样就可以在windows下使用图形化工具联接

```mysql
mysql> GRANT ALL PRIVILEGES ON *.* TO 'eric'@'%' INDENTIFIED BY 'P@ssw0rd' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
```

12.3 安装Tomcat

在Linux下安装Tomcat，以便布署工程到Linux操作系统

12.3.1 下载Tomcat的压缩包

通过wget直接下载即可

```sh
wget https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.53/bin/apache-tomcat-8.5.53.tar.gz
```

12.3.2 解压压缩包

一样解压到/usr/local目录下

```sh
tar -zxvf apache-tomcat-8.5.53.tar.gz -C /usr/local
```

12.3.3 启动Tomcat并窃听日志

通过./执行可运行文件，并使用tail监控日志信息

```sh
# 跳转到tomcat的bin目录
cd /usr/local/apache-tomcat-7.5.53/bin
# 启动
./startup.sh
# 监控日志
cd ../logs
tail -f catalina.out
# 启动成功如下
```

![日志及Tomcat首页](https://www.linuxcool.com/wp-content/uploads/2023/02/1675951466235_25.png)

十三、部署SSM工程

部署项目到Linux中须要注意以下内容：

将Maven项目打包按照项目路径的不同，将项目布署到Tomcat中。

署工程到Linux操作系统
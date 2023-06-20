---



title: "linux压缩文件命令tgz Linux开发必备的技能–AndrewAndrewLinux介绍"
description: "linux压缩文件命令tgz Linux开发必备的技能–AndrewAndrewLinux介绍"
keywords: "linux压缩文件命令tgz Linux开发必备的技能–AndrewAndrewLinux介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1675663437430_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

一、引言 1.1 开发环境

平时你们多是在Windows或Mac操作系统下进行代码开发，在开发环境中安装大量软件，同时这样也减少环境的安全和稳定性。

1.2 生产环境

是将程序运行在此环境中，供用户使用。这个环境是有专业的人员的去维护，一般人是没有权限去操作生产环境的

1.3 测试环境

一般克隆一份生产环境，会将开发好的程序布署到测试环境，主要目的是去程序进程监测 **linux压缩文件命令tgz**，收集各类问题，并交给开发人员更改

1.4 操作系统的选择

生产环境中，常用的OS有Windows 2003 service。Linux,Unix等，Linux在生产环境中抢占抢占大量的市场份额。Linux主要以稳定，可靠，免费这种特征成为全球使用最多的操作系统。所以，Linux成为了前端开发必备的技能。

二、 Linux介绍 2.1 Linux起源

在Linux系统未出现之前，还有一个操作系统叫Minix，它是由Anderew的大学教授研制下来的，当时大学教授是为了给中学生上课，买了一套Unix操作系统，参考Unix自己编撰了一个操作系统，即就是Minix。同时开源供中学内部的研究和教学。到2000年，才将该系统完全对外开源。

由于Minix完全对外开源后，在互联网上迅速传播 **linux压缩文件命令tgz**，后来经过你们使用发觉了内部存在各种各样的问题。用户将问题解决后，编写了一个补丁并以电邮的形式发给Andrew院士，但是院长最初的目的只是为了研究和教学。并不准备维护。所以这个时侯，一位英国的大学生出现了，叫Linus，也就是Linux的创始人。在Minix系统基础上， 自己添加一些补丁和插件并将其命名为Linux操作系统。并完全对外开源且开始维护Linux操作系统。

2.2 Linux的版本

分为两种，一是Linus团队正在维护的开源内核版本。另一种是一些厂商基于内核版本封装的发行版本。

一些常见的发行版本如下：

2.3 Linux和Windows区别 三、Linux安装

安装步骤网上有教程，这里不再赘言.

四、Linux的目录结构

如图:

目录说明:

五、Linux常用操作指令 5.1 Linux系统指令句型及一些基本命令

指令 [选项] [参数]

参数，指令正常执行所需的数据

基本命令

ip a 或 ip address查看ip地址

![linux压缩文件命令tgz_linux 压缩 命令_linux下tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675663437430_0.jpg)

clear

清屏

ping 地址

ping 域名 或 ip(ctrl + c 强制停止)

5.2 Linux系统操作目录常用命令 5.2.1 进入文件夹及退出文件夹

(#进入指定的目录（当我们输入目录名称的时侯，可以通过Tab进行手动补全) 

cd 目录名称

```
  # 进入到Linux系统跟路径
  cd /
  # 进入到当前用户的目录
  cd ~
```

(5.2.2 显示当前目录下的文件列表 5.2.3 目录的创建和删掉 rmdir 目录名 只能删掉非空目录 5.2.4 复制和联通、重命名目录 mv 目录名 新目录名 | 路径 六、Linux的文件命令 6.1 创建和更改文件 vi （visual)  文件编辑vim （visual improved） 增强文件编辑

# 打开目标文件；如果此文件不存在，则表示先创建此文件再打开 vi a.txt vi文件时，常用的快捷键，方便操作

在vi文件时，在底行命令模式下可以输入以下常用内容:

行号操作

6.2 阅读文件

// 阅读文件内容,直接展示到最后一行linux 关机命令，(适合阅读小文件)

cat 文件名

// 从第一行开始查看文件内容，展示全部

tac 文件名

// 从最后一行开始展示

nl 文件名

// 只查看前几行

head 文件名

// 只查看后几行

tail 文件名

tail -f 日志 (// 监控日志)

(// 阅读文件，带有翻页（一次往下一行linux 常用命令，不支持向下翻页,显示文件时还展示行号) 按space向上翻页，退出时按q

more 文件名

(// 阅读文件，适合阅读打文件；可以上下翻页（PgDn/PgUp) ，退出less阅读模式点击q

less 文件名

// 在less阅读模式下，输入“?查询内容”可以向下查询数据；输入“/查询内容”可以实现向上查询内容

6.3 查询文件和查询内容 6.4 管道命令 6.5 删除文件 6.6复制和联通 七、Linux的压缩包命令

windows系统下压缩文件一般是zip、rar等格式；Linux系统压缩文件一般为.tar，.tar.gz，tgz

7.1 tar 指令 完成linux系统的文件压缩和解压 7.2 zip文件压缩和解压

Linux默认不支持zip压缩包格式的。需要安装两个软件:

安装方式：

```powershell
# 解压
unzip 压缩包名称
# 打包
zip 压缩包名称 文件1 文件2 目录1 目录2
```

八、用户&用户组的操作 8.1 用户的常用操作命令

Linux是一个多用户的操作系统，任何一个用户想要操作Linux，必须向系统管理员申请一个帐号才可以，并且以这个帐号的身分去操作Linux。

用户的帐号一方面可以帮助系统管理员追踪当前用户的操作。另一方面可以控制当前用户对系统资源访问。

```sh
# 1. 创建用户
useradd [-cgd] [选项指定的具体内容] 用户名
# -c：代表comment,给用户添加一段注释
# -g：代表group,可以修改用户的所在组
# -d：代表指定用户的HOME目录
```

![linux压缩文件命令tgz_linux 压缩 命令_linux下tgz解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1675663437430_1.png)

```sh
# 2. 设置用户密码
passwd 用户名
```

```sh
# 3. 切换yoghurt
su 用户名
# [root@localhost ~]#  --> root 用户在本地登录，并且当前在~目录下，#代表是超级管理员
# [xty@localhost ~]$  --> xty用户在本地登录，并且当前在~目录下，$代表是普通用户
```

```sh
# 4. 删除用户
userdel [-r] 用户名
# -r : 代表删除用户的同时，删除该用户的HOME目录
```

```sh
# 5. 修改用户
usermod [-cgd] [选项指定的具体内容] 用户名
# -c：代表comment,给用户添加一段注释
# -g：代表group,可以修改用户的所在组
# -d：代表指定用户的HOME目录
```

8.2 用户组的操作

```sh
# 1. 创建用户组
groupadd 用户组名
```

```sh
# 2. 修改用户组
groupmod [-n]  [选项指定的具体内容]   用户组名
# -n 修改用户组名称
```

```sh
# 3. 删除用户组

groupdel  用户组名
# 只能删除不存在用户的用户组
```

九、 文件权限的更改

首先我们要清楚Linux文件的权限信息

在Linux中输入ls -l 或 ll查看文件和目录的详尽信息

```
				    文件详情
```

9.2 修改文件权限

使用chmod对文件的权限进行更改，一种使用数字，一种使用符号。

```sh
# 1. 数字方式
chmod [-R] 775 文件名 | 目录
# rwx这三个权限中r: 4, w: 2, x: 1
# -R：当修改一个目录权限时，可以添加-R，将目录下的全部内容，都修改权限。
```

```sh
# 2. 符号方式
# user: u,group: g, other: o, all: a
# read：r，write：w，execute：x
# 赋予权限的方式
	# 添加：+，减掉：-，设定：=
chmod [-R]  a=rw  文件|目录
```

9.2 对文件的拥有者和所属组更改

```sh
# 修改文件的拥有者和所属组
chown [-R]  拥有者： 所属组 文件|目录

# 修改文件的拥有者
chown [-R]  拥有者  文件|目录
# 修改文件的所属组
chgrp [-R]  所属组  文件|目录
```

十、Linux的其他操作命令

```sh
# 1. 进程的操作
ps -ef
# 查看全部正在运行的进程
ps -ef | grep 搜索的内容
# 搜索对应的进程
kill -9 pid
# 杀死进程
```

```sh
# 2. 服务的操作
# 针对服务的启动、停止、重启、开机自动启动、禁止开机自动启动。查看服务状态
systemctl  start|stop|restart|enable|disable|status 服务名称
```

```sh
# 3. 查看端口号占用情况
# 想使用指定的命令需要实现下载netstat
yum -y install net-tools
# 查看端口号占用情况
netstat -naop | grep 端口号
```

```sh
# 4. 访问地址
curl 访问地址
```
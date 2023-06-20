---



title: "Linux下创建SVN库的方法-SVN的安装"
description: "Linux下创建SVN库的方法-SVN的安装"
keywords: "Linux下创建SVN库的方法-SVN的安装"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676930607206_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

本文主要说明Linux下创建SVN库的技巧。

SVN的安装

下文主要介绍Linux操作系统安装和SVN服务器安装说明，以Centos6.2系统为例进行说明，因为Centos操作系统自带svn安装包，不须要下载。

安装CentOS系统

1)插入CentOS的安装光碟，选择第一项：

![7c99b0fd2f302e3c843a595a59dbbb24.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930607206_0.jpg)

2)跳过媒体测试步骤，如下：

![b5cb722f6f941de65b284528b58b073d.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930607206_1.jpg)

3)选择英语语言(默认即可)、“BasicStorageDevices”(默认即可)，之后一路安装为默认。到选择组件这一步，假如想要apache服务 **linux 查看 svn 版本命令** linux运维博客，可以如下操作选项如下【此处选择完成以后，系统会默认安装相关】。

![bc11b33ed6b695d518f9cbfc0247c229.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930607206_2.jpg)

4)选择好后，直接下一步安装，安装完成后重启。

安装svn

1)挂载光碟，借助yum形式安装(yum形式安装的确很便捷，不用担忧依赖包)，打开一个终端 **linux 查看 svn 版本命令**，按以下步骤操作：

[root@svn~]#mkdir/media/cdrom

[root@svn~]#mount/dev/cdrom/media/cdrom/

//挂载光碟

[root@svn~]#yum--disablerepo=*--enablerepo=c6-mediainstallmod_dav_svn

//使用yum安装SVN服务器安装包

2)在安装过程中，有两个地方须要输入“y”

TransactionSummary

===============================

Installdownloadsize:2.5M

Installedsize:12M

Isthisok[y/N]:y

DownloadingPackages:

———————————————————

From:/etc/pki/rm-gpg/RPM-GPG-KEY-CentOS-6

Isthisok[y/N]:y

3)安装成功后，会出现：

Installed:

mod_dav_svn.i6860:1.6.11-2.el6_1.4

DependencyInstalled:

libproxy.i6860:0.3.0-2.el6libproxy-bin.i6860:0.3.0-2.el6

libproxy-python.i6860:0.3.0-2.el6neon.i6860:0.29.3-1.2.el6

pakchois.i6860:0.4-3.2.el6subversion.i6860:1.6.11-2.el6_1.4

Complete!

4)检验svn安装是否成功

[root@svnPackages]#svn--version

svn,version1.6.11(r934486)

//出现以上信息说明早已安装成功SVN1.6.11版本

创建SVN项目库

创建一个test项目库

[root@SVN/]#mkdir/svn

//在根目录下创建svn文件夹

[root@SVN~]#svnadmincreate/svn/test

//在/svn路径下，创建test库。

[root@SVN~]#cd/svn/test

[root@SVNtest]#ls

confdbformathookslocksREADME.txt

//在“/svn/test”路径下，查看有这种文件，说明早已创建成功

SVN权限配置

创建svn项目库以后，需对项目库进行权限设置设置如下：

[root@SVNconf]#vi/svn/test/conf/svnserve.conf

[general]

anon-access=read

auth-access=write

password-db=passwd

authz-db=authz

realm=/svn/test

//在svnserve.conf配置文件，需更改以上内容。各参数配置如下：

anon-access：定义非授权用户的访问权限，有三种方法：none、read、write，设置为none限制访问，read为只读，write为具有读写权限，默认为read。

auth-access：定义授权用户的访问权限linux操作系统论文，有三种方法：none、read、write，设置为none限制访问，read为只读，write为具有读写权限，默认为write。

password-db：定义保存用户名和密码的文件名称，这儿为passwd，和该文件坐落同一目录。

authz-db：定义保存授权信息的文件名称，这儿为authz，和该文件坐落同一目录。

realm：定义顾客端联接是的“认证命名空间”，Subversion会在认证提示里显示，但是作为账簿缓存的关键字。

创建SVN登陆用户

在passwd配置文件设置项目库人员的用户和密码

[root@SVNconf]#vi/svn/test/conf/passwd

[users]

user1=123456

user2=123456

u1=123456

u2=123456

配置SVN权限

设置登陆svn权限的配置如下：

[root@SVNconf]#vi/svn/test/conf/authz

[groups]

tester=user1,user2//表示tester群组里的成员user1，user2

develop=u1,u2//表示develop群组里的成员u1，u2

[test:/]//这表示项目库权限设置

@tester=rw//表示test库tester群组用户具有读写权限

@develop=r//表示test库develop群组用户具有只读权限

重启SVN项目库

[root@SVNconf]#svnserve-d-r/svn//重启SVN项目库

[root@SVNconf]#psx|grepsvn//假如出现以下进程，说明重启成功

2169?Ss0:00svnserve-d-r/svn

2171pts/0S+0:00grepsvn

[root@SVNconf]#killallsvnserve//杀害svnserve服务

SVN服务器配置实例

按照以上步骤创建test项目库，tester群组人员为user1、user2，权限为读写；develop群组人员u1、u2，权限为只读。

1)user1用户，使用SVN顾客端，登陆SVN服务器，如右图所示：

![674d6c7ee872aae807178875ec939842.png](https://www.linuxcool.com/wp-content/uploads/2023/02/1676930607206_3.jpg)

注意：在登陆时，地址前面直接输入创建的新项目即可。

2)登陆成功。上传test.txt文件和更改txt文件名。可以进行读写操作。

3)使用u1用户登入，只能查看test库。不能进行任何操作。
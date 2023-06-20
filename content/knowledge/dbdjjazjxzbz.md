---



title: "deb包的简介、安装及卸载步骤、执行步骤简介"
description: "deb包的简介、安装及卸载步骤、执行步骤简介"
keywords: "deb包的简介、安装及卸载步骤、执行步骤简介"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679493953737_2.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux安装软件命令解读

目录

一、deb包的简介、安装及卸载步骤

简介：

deb文件是linux发行版debian系统的安装包格式，还有像基于debian系统的发行版ubuntu等系统也使用deb格式安装包，我们可以使用dpkg命令进行安装管理这种deb安装包文件。包的管理工具为apt-get。

Debian软件包命名遵照下述约定:-.deb

比如nano_1.3.10-2_i386.deb

安装步骤：

1、找到相应的软件包，例如xx.deb，下载到本机某个目录；

2、cdxx.deb所在的目录；

3、sudodpkg-ixx.deb。

卸载步骤:

1、sudodpkg-rxxSoftName。

二、rpm包的简介、安装及卸载步骤

简介：

rpm的全名为”RedHatPackageManager”，是RedHat公司研制的程序包管理器。主要用在CentOS系统，而CentOS是一个基于RedHatLinux的可自由使用的企业级发行版本。包的管理工具为YUM。

rpm软件包命名遵照下述约定:-.rpm

比如openssl-1.0.1c-1.i686.rpm

安装步骤：

1、找到相应的软件包，例如xx.rpm，下载到本机某个目录；

2、cdxx.rpm所在的目录；

(3、sudorpm-ivhxx.rpm。（安装并显示正在安装的文件信息及安装进度) 

卸载步骤:

(1、sudorpm-exxSoftName。（-e可以用--earse取代) 

三、AppImage包的简介、执行步骤

简介：

多年以来，我们仍然使用deb来管理Debian/Ubuntu的软件包，使用rpm管理Fedora/SUSE的软件包。这两种方法安装linux软件将会在不同的目录生成多个文件，而且须要root权限来对系统进行更改。

AppImage不须要如此做。事实上，AppImage并不须要安装。AppImage是一个压缩的镜像文件，它包含所有运行所须要的依赖和库文件，而且几乎可以在所有的linux发行版本中使用。

你可以直接执行AppImage文件不须要安装。当你把AppImage文件删掉，整个软件也被删掉了。你可以把它当作windows系统中的这些免安装的exe文件。

执行步骤：

1、找到相应的软件包，例如xx.AppImage，下载到本机某个目录；

2、cdxx.AppImage所在的目录；

3、添加可执行权限：sudochmoda+xxx.AppImage;

4、执行它：./xx.AppImage。

四、tar.gz、tar.bz2源代码包的简介、安装及卸载步骤

简介：

首先要说的是tar.gz、tar.bz2不是软件包格式，而是压缩档格式，你可以把任何格式的东西压缩成tar.gz和tar.bz2文件，如同.7z,.zip和.rar一样。

你下载的tar.gz包装的软件很可能是源码，但也有的地方把二补码码打包成tar.gz的。源代码包和二补码包是软件包的两种方式。

(二补码包上面包括了早已经过编译，可以马上运行的程序。你只须要下载和解包（安装) 它们之后，就马上可以使用。

源代码包上面包括了程序原始的程序代码，须要在你的计算机上进行编译之后才可以形成可以运行程序,所以从源代码安装的时间会比较长。

源代码包的编译安装步骤：

1、找到相应的软件包，例如xx.tar.gz，下载到本机某个目录；

2、cdxx.tar.gz所在的目录；

3、解压缩：tar-xvfxx.tar.gz；

4、cd进解压后的文件及：cdxx；

5、配置文件：./configure；

6、开始编译：make；

7、安装生成的二补码文件：makeinstall。

注意：具体安装方式以软件源代码中的README等帮助文件为准。

卸载步骤:

![deb安装命令_linux的deb包怎么安装_linux安装deb包命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679493953737_2.jpg)

1、在源代码包目录中,终端执行：makeuninstall。

五、apt-get解读

简介：

(apt-get（AdvancedPackageTool) ，是一条linux命令 **linux安装deb包命令**，适用于deb包管理式的操作系统，主要用于手动从互联网的软件库房（repositories）中搜索、安装、升级、卸载软件或操作系统。

(最初于1998年发布，用于检索应用程序并将其加载到DebianLinux系统。Apt-get成名的诱因之一在于其出众的解决软件依赖关系的能力。其一般使用.deb-formatted文件，但经过更改后可以使用apt-rpm处理红帽的PackageManager（RPM) 文件。

使用apt-get的主流Linux系统包括Debian和Ubuntu变异版本。大多数情况下，从命令行运行该工具。桌面上有几个图形后端可以使用，包括SynapticPackageManager、UbuntuSoftwareCenter、Aptitude和Kpackage。RaspberryPi和BeagleboneBlacknanoLinux版用户可以很容易地使用apt-get加载程序，由于这种系统一般来自Ubuntu或Debian代码。是debian，ubuntu发行版的包管理工具 **linux安装deb包命令**，与红帽中的yum工具十分类似。

apt-get命令通常须要root权限执行，所以通常跟随sudo命令。apt-get命令只能用于在repositories中的包，不能用于处理自己下载的deb包，要想处理自己下载的deb包，只能用dpkg命令。

常用命令：

```powershell
apt-get install packagename  #安装一个新软件包
(apt-get remove packagename #卸载一个已安装的软件包（保留配置文档) 
(apt-get remove --purge packagename #卸载一个已安装的软件包（删除配置文档) 
apt-get autoremove packagename #删除包及其依赖的软件包
apt-get autoremove --purge packagname #删除包及其依赖的软件包+配置文件，比上面的要删除的彻底一点
dpkg --force-all --purge packagename #有些软件很难卸载，而且还阻止了别的软件的应用，就能够用这个，但是有点冒险。
apt-get update #扫描每一个软件源服务器，并为该服务器所具有软件包资源建立索引文件，存放在本地的/var/lib/apt/lists/目录中。
apt-get upgrade #将系统中的所有软件包一次性升级到最新版本，可以很方便的完成在相同版本号的发行版中更新软件包。
```

几个和apt-get相关的目录：

```powershell
#文件的内容是软件包的描述信息, 该软件包括当前系统所使用的 ubunt 安装源中的所有软件包,其中包括当前系统中已安装的和未安装的软件包.
/var/lib/dpkg/available
#目录是在用 apt-get install 安装软件时，软件包的临时存放路径
/var/cache/apt/archives
#存放的是软件源站点
/etc/apt/sources.list
#使用apt-get update命令会从/etc/apt/sources.list中下载软件列表，并保存到该目录
/var/lib/apt/lists
```

APT工作原理：

(Ubuntu采用集中式的软件库房机制linux社区，将各色各样的软件包分门别类地储存在软件库房中，进行有效地组织和管理。之后，将软件库房放在许许多多的镜像服务器中，并保持基本一致。这样，所有的Ubuntu用户随时都能获得最新版本的安装软件包。因而，对于用户，这种镜像服务器就是她们的软件源（Reposity) 。但是，因为每个用户所处的网路环境不同，不可能随便地访问各镜像站点。为了才能有选择地访问，在Ubuntu系统中，使用软件源配置文件/etc/apt/sources.list列举最合适访问的镜像站点地址。

六、yum解读

简介：

yum是一个在Fedora和RedHat以及SUSE中的Shell后端软件包管理器。基于RPM包管理，才能从指定的服务器手动下载RPM包而且安装，可以手动处理依赖性关系，而且一次安装所有依赖的软体包，无须冗长地一次次下载、安装。yum提供了查找、安装、删除某一个、一组甚至全部软件包的命令，并且命令简练而又好记。

yum的命令方式通常是如下：yum[options][command][package…]

(其中的[options]是可选的，选项包括-h（帮助) ，-y（当安装过程提示选择全部为”yes”），-q（不显示安装的过程）等等。[command]为所要进行的操作linux内核，[package…]是操作的对象。

常用命令：

```powershell
#安装命令
yum install #全部安装
yum install  #安装指定的软件
yum groupinsall  #安装程序组
#更新和升级
yum update #全部更新
yum update  #更新指定程序包
yum check-update #检查可更新的程序
yum upgrade  #升级指定程序包
yum groupupdate  #升级程序组
#查找和显示
yum list #显示所有已安装和可以安装的程序包
yum list  #显示指定程序包的安装情况
yum info  #显示程序包信息
yum groupinfo  #显示程序组信息
#删除命令
yum remove  #删除程序包
yum groupremove  #删除程序组
yum deplist  #查看程序包的依赖情况
#清除缓存
yum clean packages #清除缓存目录下的软件包
yum clean headers #清除缓存目录下的heades
```

七、.run文件的简介、安装及卸载步骤

简介：

.run文件是运行在Linux里面的软件，类似windows里面的.exe文件。

安装步骤：

1、找到相应的软件包，例如xx.run，下载到本机某个目录；

2、cdxx.run所在的目录；

3、添加可执行权限：sudochmoda+xxx.run;

4、执行它：./xx.run。

卸载步骤:

1、找到安装目录下的uninstall文件：locatevirtualbox|grepuninstall；

2、执行uninstall文件：./uninstall。

八、bin包的简介、安装及卸载步骤

简介：

扩充名为.bin文件是二补码的，它也是源程序经编译后得到的机器语言。有一些软件可以发布为以.bin为后缀的安装包，诸如，jdk-1_5_0-linux-i586.bin。

安装步骤：

1、找到相应的软件包，例如xx.bin，下载到本机某个目录；

2、cdxx.bin所在的目录；

3、添加可执行权限：sudochmoda+xxx.bin;

(4、执行它：./xx.bin。（执行安装过程中可以指定安装目录) 

卸载步骤:

把安装时中选择的安装目录删掉就行。

扩充：

1、安装包的平台指的是硬件平台，包括了：i386、i486、i586、i686、x86_64、ppc、sparc、alpha。若平台是noarch，说明这样的软件包可以在任何平台上安装饥和运行，不须要特定的硬件平台。

2、包管理命令使用的特定参数既可以使用全称，也可以使用简称，以deb命令为例：

3、tar.gz源代码包中的配置一步可以制订安装目录，即在./configure命令前面加参数–prefix=/**，如：./configure–prefix=/usr/local/aaa，即把软件装在/usr/local/路径的aaaa这个目录里。通常的软件的默认安装目录是/usr/local或则/opt。

4、为什么不把软件全部转换成deb包，点击安装多便捷啊？

程序源码是不依赖软件和硬件平台的，所以写程序的人通常只维护源代码。一个好的程序可以在各类操作系统上运行。而deb包这类的二补码包是依赖硬件和软件平台的。例如说给深度操作系统用的deb包就是x86的ubuntu下才会用，其他系统不行。同时源码发行的话也同时给了用户自己很高的权限，他可以制做一个自己的二补码包，例如使用dpkg来制做，详情请见dpkg的帮助指南。

wget命令

wget命令拿来从指定的URL下载文件。wget十分稳定，它在带宽很窄的情况下和不稳定网路中有很强的适应性，假如是因为网路的诱因下载失败，wget会不断的尝试，直至整个文件下载完毕。假如是服务器打断下载过程，它会再度联到服务器上从停止的地方继续下载。这对从这些限定了链接时间的服务器上下载大文件特别有用。

```
wget http://test.com/testfile.zip ->下载指定文件到当前文件夹
wget -O wordpress.zip http://test.com/download ->指定保存名字
wget --limit-rate=300k http://www.linuxde.net/testfile.zip ->限制下载速度
wget -c http://www.linuxde.net/testfile.zip ->断点续传
wget -b http://www.linuxde.net/testfile.zip ->后台下载

(# 设置使用指定浏览器下载（伪装下载) 
wget --user-agent="Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16" http://www.linuxde.net/testfile.zip
wget --spider url ->测试下载
wget --tries=40 URL ->设置重试次数为40
wget -i filelist.txt ->从filelist.txt获取下载地址
# 镜像网站
# --miror开户镜像下载。
# -p下载所有为了html页面显示正常的文件。
# --convert-links下载后，转换成本地的链接。
# -P ./LOCAL保存所有文件和目录到本地指定目录
wget --mirror -p --convert-links -P ./LOCAL URL
wget --reject=gif ur ->下载一个网站，但你不希望下载图片，可以使用这条命令
wget -o download.log URL ->把下载信息存入日志文件
wget -Q5m -i filelist.txt ->限制总下载文件大小
wget -r -A.pdf url ->下载指定格式文件
# FTP下载
wget ftp-url
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```

选项描述-a在指定的日志文件中记录资料的执行过程；-A指定要下载文件的后缀名，多个后缀名之间使用冒号进行分隔；-b进行后台的形式运行wget；-B设置参考的连接地址的基地地址；-c继续执行先前终端的任务；-C设置服务器数据块功能标志on为激活，off为关掉，默认值为on；-d调试模式运行指令；-D设置沿着的域名列表，域名之间用“，”分隔；-e作为文件“.wgetrc”中的一部份执行指定的指令；-h显示指令帮助信息；-i从指定文件获取要下载的URL地址；-l设置沿着的目录列表，多个目录用“，”分隔；-L仅沿着关联的联接；-r递归下载形式；-nc文件存在时，下载文件不覆盖原有文件；-nv下载时只显示更新和出错信息，不显示指令的详尽执行过程；-q不显示指令执行过程；-nh不查询主机名称；-v显示详尽执行过程；-V显示版本信息；–passive-ftp使用被动模式PASV联接FTP服务器；–follow-ftp从HTML文件中下载FTP联接文件。————————————————版权申明：本文为CSDN博主「书香泼彩」的原创文章，遵守CC4.0BY-SA版权合同，转载请附上原文出处链接及本申明。原文链接：
---



title: "Oracle数据库及RAC配置清单(二)介绍及介绍"
description: "Oracle数据库及RAC配置清单(二)介绍及介绍"
keywords: "Oracle数据库及RAC配置清单(二)介绍及介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

目录

一、基础知识介绍

1.RAC是哪些

2.RAC的异同点

3.OracleRAC原理

二、RAID储存技术介绍

三、RAC系统结构设计

1.RAC系统拓扑结构基本如右图所示：

2.主机操作系统系统

1)用户组规划

2)用户规划

3)主机文件系统规划

3.储存规划

4.数据库RAC环境数据库规划

1)RAC环境信息

2)OracleRAC软件组件

3)OracleRAC网路规划

4)Oracle用户组信息

5)表空间规划

6)数据库备份规划

四、Oracle数据库及RAC配置清单

1.硬件清单

2.软件清单

3.网路硬件需求

4.网路规划

5.系统安装规划

6.系统环境需求

7.查所需软件包

五、安装工作

1.更改主机名称，在所有节点执行；

2.创建用户和组

3.更改用户密码

4.更改gird用户的环境变量

5.更改oracle用户的环境变量

6.创建软件目录

7.更改系统参数

8.配置用户等效性

9.配置NTPD服务

10.安装并配置ASM驱动

11.安装cvuqdisk软件包

12.安装Grid前检测

13.安装GridInfrastructure

14.确认群集安装成功

15.创建asmc盘组

16.安装oracle软件

17.创建数据库

18.数据库管理工作

一、基础知识介绍

1.RAC是哪些

RAC，全称realapplicationclusters，译为“实时应用集群”，是Oracle新版数据库中采用的一项新技术，是高可用性的一种，也是Oracle数据库支持网格估算环境的核心技术。

2.RAC的异同点

OracleRAC主要支持Oracle9i、10g、11g版本，可以支持24×7有效的数据库应用系统，在低成本服务器上建立高可用性数据库系统，但是自由布署应用，无需更改代码。在OracleRAC环境下，Oracle集成提供了集群软件和储存管理软件，为用户增加了应用成本。当应用规模须要扩展时，用户可以按需扩充系统，以保证系统的性能。

1)多节点负载均衡;

2)提供高可用：故障容错和无缝切换功能，将硬件和软件错误导致的影响最小化;

3)通过并行执行技术提升事务响应时间—-一般用于数据剖析系统;

4)通过纵向扩充提升每秒交易数和联接数—-一般对于联机事务系统;

5)节省硬件成本 **查linux高可用软件版本命令**，可以用多个廉价PC服务器取代高昂的大型机或小型机，同时节省相应维护成本;

6)可扩充性好，可以便捷添加删掉节点，扩充硬件资源。

1)相对单机，管理更复杂，要求更高;

2)可能会降低软件成本(假如使用高配置的pc服务器，Oracle通常根据CPU个数收费)。

3.OracleRAC原理

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_0.jpg)

在一个应用环境当中，所有的服务器使用和管理同一个数据库，目的是为了分散每一台服务器的工作量，硬件上起码须要两台以上的服务器，并且还须要一个共享储存设备。同时所有服务器上的OS都应当是同一类OS,按照负载均衡的配置策略，当一个顾客端发送恳求到某一台服务的listener后，这台服务器按照我们的负载均衡策略linux系统编程，会把恳求发送给本机的RAC组件处理也可能会发送给另外一台服务器的RAC组件处理，处理完恳求后，RAC会通过集群软件来访问共享储存设备.逻辑结构上看：

三类Resource：

二、RAID储存技术介绍

(独立冗余c盘阵列（RedundantArrayofIndependentDisk，RAID) 是一种把多块独立的硬碟（化学硬碟）按不同的形式组合上去产生一个硬碟组（逻辑硬碟），因而提供比单个硬碟更高的储存性能与数据备份能力的技术。RAID特色是N块硬碟同时读取速率推进及提供容错性。可以将RAID分为不同级别，级别并不代表技术高低，选择哪一种RAID产品纯视用户的操作环境及应用而定，与级别高低没有必然关系。

RAID0：无差错控制的带区组

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_1.jpg)

(要实现RAID0必需要有两个以上硬碟驱动器，数据并不是保存在一个硬碟上，而是分成数据块保存在不同驱动器上。由于将数据分布在不同驱动器上，所以数据吞吐率大大提升，驱动器的负载也比较平衡。它的缺点是它没有数据差错控制，假如一个驱动器中的数据发生错误，虽然其它盘上的数据正确也无济于事了。不应当将它用于对数据稳定性高的场合。在所有的级别中，RAID0的速率是最快的。并且RAID0没有冗余功能的，假如一个c盘（化学) 毁坏，则所有的数据都未能使用。

RAID1：存盘结构

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_2.jpg)

对于使用这些RAID1结构的设备来说，RAID控制器必须才能同时对两个盘进行读操作和对两个存盘盘进行写操作。存盘结构是在一组盘出现问题时，可以使用存盘c盘，提升系统的容错能力。每读一次盘只能读出一块数据，也就是说数据块传送速度与单独的盘的读取速度相同。当您的系统须要极高的可靠性时，如进行数据统计，这么使用RAID1比较合适。并且RAID1技术支持“热替换”，即不断电的情况下对故障c盘进行更换，更换完毕只要从镜像盘上恢复数据即可。当主硬碟损毁时，镜像硬碟就可以取代主硬碟工作。镜像硬碟相当于一个备份盘，这些硬碟模式的安全性是极其高的，RAID1的数据安全性在所有的RAID级别上来说是最好的。并且其c盘的借助率却只有50%，是所有RAID级别中最低的。

RAID5：分布式奇偶校准的独立c盘结构

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_3.jpg)

(RAID5将数据分散储存于多个硬碟里面，同时使用一定的编码技术形成奇偶校准码来提供错误检测及恢复能力，数据段的校准位交互储存于各个硬碟上。由于奇偶校准码在不同的c盘上，所以增强了可靠性，容许单个c盘出错。任何一个硬碟受损，都可以按照其它硬碟上的校准位来重建受损的数据。硬碟的借助率为n-1。优点是提供了冗余性（支持一块盘死机后依然正常运行) ，c盘空间借助率较高（N-1/N），读写速率较快（N-1倍）。RAID5是RAID级别中最常见的一个类型。

RAID10：高可靠性与高效c盘结构

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_4.jpg)

这些结构是一个带区结构加一个存盘结构，由于两种结构各有利弊点，因而可以互相补充，达到既高效又高速还可以互为镜像的目的。你们可以结合两种结构的优点和缺点来理解这些新结构。这些新结构的价钱高，可扩展性不好。主要用于容量不大，但要求速率和差错控制的数据库中。

RAID10是先镜射再分区数据。是将所有硬碟分为两组，之后将这两组各自视为RAID1运作。RAID10有着不错的读取速率，但是拥有比RAID0更高的数据保护性。

三、RAC系统结构设计

1.RAC系统拓扑结构基本如右图所示：

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_5.jpg)

2.主机操作系统系统

RAC支持常用的linux、AIX、windows、solaris等操作系统，本文以linux操作为例。

1)用户组规划

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_6.jpg)

2)用户规划

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_7.png)

3)主机文件系统规划

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_8.png)

3.储存规划

储存通常采用RAID5储存方法。

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_9.jpg)

4.数据库RAC环境数据库规划

1)RAC环境信息

2)OracleRAC软件组件

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_11.png)

3)OracleRAC网路规划

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_12.png)

4)Oracle用户组信息

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_13.png)

5)表空间规划

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_14.jpg)

6)数据库备份规划

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_15.png)

按照平台业务特点及考虑到节省硬件成本，建议每周作一次完全备份，每晚做一次增量备份。恢复时，首先恢复近来一次完全备份的数据，之后再依次恢复服务器硬碟上增量备份的数据，最后通过归档的日志文件将数据恢复到故障点处。

四、Oracle数据库及及RAC配置清单

1.硬件清单

2.软件清单

3.网路硬件需求

4.网路规划

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_16.jpg)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_17.jpg)

5.系统安装规划

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_18.jpg)

注意：服务器的主机名必须全部都是大写,但是不要有顿号。

6.系统环境需求

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_19.png)

7.查所需软件包

假如是64bit,须要检测以下的Packages。以下重复包名称的部份是64bit,标明32bit的是32bitpackages。假如是32bitOS,这么重复包名的只须要32bit部份的包。注意不同版本Linux系统前面的版本不太一样。

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_20.png)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_21.jpg)

检测方式：

之后输入：

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_23.png)

结果如下：

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_25.jpg)

查询一些文档，pdksh这个包可以不用安装。

五、安装工作

1.更改主机名称，在所有节点执行

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_26.png)

2.创建用户和组

创建RAC相关用户和组，在所有节点执行；

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_27.png)

3.更改用户密码

4.更改gird用户的环境变量

切换到grid用户，打算安装gridInfrastructure.首先须要更改所有节点grid用户的环境变量.bash_profile

以下grid的bash_profile,仅供参考，还有一些参数可以自行加入。

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_30.jpg)

使配置文件生效，同样在其他节点的Grid用户.bash_profile中加入，并注意更改ORACLE_SID=+ASM2

5.更改oracle用户的环境变量

Oracle用户也须要设置.bash_profile

以下Oracle的bash_profile,仅供参考

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_32.jpg)

使配置文件生效,同样在其他节点的Oracle用户.bash_profile中加入，并注意更改ORACLE_SID=orcl2

6.创建软件目录

创建OracleRAC所使用的目录，并更改相应的权限，在所有节点执行；

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_33.png)

7.更改系统参数

更改操作系统相关参数，在所有节点执行；

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_34.jpg)

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_35.png)

更改/etc/hosts文件，在所有节点添加以下内容

8.配置用户等效性

使用Oracle用户，配置Oracle用户等效性，在所有节点执行；

使用Oracle用户，配置Oracle用户等效性，在节点1执行

验证oracle用户等效性，在所有节点执行；

使用Grid用户，配置Grid用户等效性，在所有节点执行；

配置Grid用户等效性，在节点1执行；

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_41.png)

验证Grid用户等效性，在所有节点执行；

9.配置NTPD服务

各个节点时间同步(所有节点设置，两个节点互相同步，不设置时间服务器)

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_43.png)

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_44.jpg)

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_45.jpg)

10.安装并配置ASM驱动

检测操作系统版本，确认安装与操作系统相匹配的asmlib，在所有节点执行；

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_46.png)

OracleASMlib下载地址：

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_48.jpg)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_49.png)

初始化asmlib，在所有节点执行；

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_51.jpg)

ASMlib加载到内核，在所有节点执行；

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_52.png)

c盘分区

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_53.png)

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_54.jpg)

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_55.png)

创建asmc盘，在节点1执行；

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_56.png)

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_57.jpg)

在节点二执行扫描，辨识asm盘

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_58.jpg)

11.安装cvuqdisk软件包

cvuqdisk软件包用于发觉共享储存，在grid安装软件的rpm目录中，在所有

节点执行；

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_59.png)

12.安装Grid前检测

在所有节点执行，但是检测通过；

检测参数：

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_60.jpg)

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_61.png)

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_62.png)

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_63.jpg)

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_64.png)

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_65.jpg)

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_66.png)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_67.png)

13.安装GridInfrastructure

登录到grid用户，执行安装文件，在节点1执行；

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_68.png)

选择安装并配置一个集群

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_69.jpg)

选择中级安装

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_70.jpg)

将英文添加到右边边框，添加英文可防止在使用em时乱码

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_71.jpg)

填写集群名称和scan的解析名称及端口，点击next

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_72.jpg)

在弹出的界面中，点击add填写节点二的信息

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_73.jpg)

添加完成后显示如下：

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_74.jpg)

在右图界面中选择各个网卡的用途

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_75.jpg)

为OCR和表决盘选择ASM储存方法

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_76.jpg)

选择crsvol，并填写c盘组名称，点击下一步

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_77.jpg)

配置ASMSystem口令

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_78.jpg)

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_79.png)

不配置IPMI

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_80.jpg)

为asm的各类角色分配属组

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_81.jpg)

默认grid的目录，点击next

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_82.jpg)

点击next

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_83.jpg)

接出来，软件进行安装检查

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_84.jpg)

检查通过后，点击install，开始安装

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_85.jpg)

安装进行中。。

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_86.jpg)

安装完成，弹出窗口，提示须要以root依次在两个节点执行脚本

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_87.jpg)

脚本执行如下：

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_88.jpg)

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_89.png)

执行完毕后，点击ok，弹出如下界面，点击close，grid安装完成

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_90.jpg)

出现以下错误时，是由于在Hosts配置文件里配置了SCAN，未启用DNS解析，不影响RAC正常运行；

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_91.jpg)

点关掉完成安装

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_92.jpg)

14.确认群集安装成功

15.创建asmc盘组

本次任务将创建3个asmc盘组，分别为：ARCH,DATA,FLASH。其中DATA将储存数据库文件；FLASH储存闪回文件；ARCHc盘组将创建ACFS文件系统百度网盘LINUX，分别挂载到两个节点，拿来储存归档日志。

在grid用户下，执行asmca，启动asmc盘组创建向导

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_93.jpg)

点击create按键，在弹出的创建界面中填写c盘组名称，选择外面储存方，并勾选成员，选择完毕后点击ok；

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_94.jpg)

以同样的方式创建BACKUPc盘组，创建完毕后如下

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_95.jpg)

16.安装oracle软件

以oracle用户登入到节点一，切换到软件安装目录，执行安装

在弹出的安装界面中，点击next

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_96.jpg)

选择“installsoftwareonly”**查linux高可用软件版本命令**，点击next

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_97.jpg)

选择两个节点，点击next

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_98.jpg)

将繁体英文添加到安装选项

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_99.jpg)

选择企业版，点击next

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_100.jpg)

保持默认的目录，点击next

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_101.jpg)

保持默认的属组信息，点击next

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_102.jpg)

安装过程手动进行安装检测

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_103.jpg)

检测通过后，点击install

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_104.jpg)

开始安装

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_105.jpg)

安装完成，跳出一个界面，提示须要以root在两个节点上执行脚本

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_106.jpg)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_107.jpg)

以root用户，在两个节点上执行脚本

执行完毕后，点击ok，返回如下界面

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_109.jpg)

至此，oracle数据库软件安装完毕。

17.创建数据库

本节操作在节点1执行；

以oracle用户登入，执行dbca命令，选择rac数据库点击next

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_110.jpg)

选择通用类型，点击next

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_111.jpg)

填写数据库名称，选择两个节点，点击next

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_112.jpg)

默认，点击next

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_113.jpg)

为所有用户设置统一密码，点击next

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_114.jpg)

选择ASM储存方法，并选择相应的c盘组，点击next

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_115.jpg)

注：假如此处未能找到“ASMDISKGROUP”，使用root用户，则执行以下操作，之后再度执行“dbca”；

弹出ASM用户密码窗口，输入在安装grid时设置的密码

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_117.jpg)

选择闪回c盘组，勾选归档

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_118.jpg)

点击编辑归档模式参数，在归档路径出输入：+BACK/archive

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_119.jpg)

下一步

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_120.jpg)

使用手动显存管理

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_121.jpg)

点击字符集选项，选择ZHS16GBK类型

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_122.jpg)

显示概览，默认不变，点击next

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_123.jpg)

点击finish

![linux 查版本命令_linux高可用集群_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_124.jpg)

出现安装概要

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_125.jpg)

点击ok，开始安装过程

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_126.jpg)

等待一段时间后，安装结束，弹出如下界面

至此，数据库创建完毕。

18.数据库管理工作

oraclerac默认会开机自启动，如需维护时可使用以下命令：

注：以上命令需以root用户执行

以grid用户运行

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_129.png)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_131.jpg)

![linux高可用集群_查linux高可用软件版本命令_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_132.png)

![查linux高可用软件版本命令_linux高可用集群_linux 查版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_134.png)

![查linux高可用软件版本命令_linux 查版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_135.png)

![linux 查版本命令_查linux高可用软件版本命令_linux高可用集群](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_136.png)

![linux高可用集群_linux 查版本命令_查linux高可用软件版本命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676354746701_138.jpg)
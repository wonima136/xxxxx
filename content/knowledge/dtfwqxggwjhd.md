---



title: "倒腾服务器修改grub.conf文件后导致系统起不来了"
description: "倒腾服务器修改grub.conf文件后导致系统起不来了"
keywords: "倒腾服务器修改grub.conf文件后导致系统起不来了"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: ""
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

明天鼓捣服务器，更改grub.conf文件后造成系统起不来了。后来就学习了一下怎样从grub命令启动。grub引导虽然挺简单的linux命令tar，只要简单地几步就可以了。接出来是小编为你们搜集的Linuxgrub命令行启动系统简明教程，希望能帮到你们。

Linuxgrub命令行启动系统简明教程

一、指定/boot所在的分区

复制代码代码如下:

grub>root(hd0,0)

#指定第一块硬碟的第一个分区。这个root(hd[0,n],y)是可以省略的，假如省略了，我们要在kerenl命令手指定

二、指定内核映像及根分区

复制代码代码如下:

grub>kernel/boot/vmlinuz-2.6.11-1.1369_FC4roroot=LABEL=/

#kernel指令，拿来指定Linux的内核，及/所在的分区

三、指定initrd.img

复制代码代码如下:

grub>initrd/boot/initrd-2.6.11-1.1369_FC4.img

#initrd命令行来指定initrd文件

四、启动

复制代码代码如下:

grub

>boot

#输入boot，之后敲回车就可以了

我的一个虚拟机上(SUSE10.0)的grub配置文件：

#FormatImgID_0#

五、通过GRUB指令来引导Windows

假如我们启动Windows，只是输入指令就行了;

例如Windows的分区在(hd0,0)，我们在开机后 **linux 交互命令启动**，按ctrl+c，步入GRUB的命令模式;就可以用下边的

复制代码代码如下:

grub>rootnoverify(hd0,0)

grub>chainloader+1

grub>boot

附：GRUB启动命令解读

一、菜单命令

菜单命令只能用于grub配置文件的全局配置部份，不能用在grub命令行交互界面 **linux 交互命令启动**，菜单命令在配置文件中应置于其它命令之前。

1、default//设置默认启动的菜单项

2、fallback//设置启动某菜单项失败后反回的菜单项

3、hiddenmenu//隐藏菜单界面

4、timeout//设置菜单手动启动的延时时间

5、title//开始一个菜单项

二、常规命令

常规命令可以应当于配置文件和grub命令行交互界面linux操作系统界面，可使用的常规命令有

1、bootp//通过bootp初始化网路设备

2、color//设置菜单界面的颜色

3、device//指定设备文件作为驱动器

4、dhcp//通过DHCP初始化网路设备

5、hide//隐藏某分区

6、ifconfig//手工配置网路设备

7、pager//改变内部页程序的状态

8、partnew//新建一个主分区

9、parttype//改变分区的类型

10、password为菜单界面设置口令

11、rarp//通过RARP初始化网路设置

12、serial//设置并口设备

13、setkey//设置按键映射

14、splashimage//设置GRUB启动时的背景图片文件

15、termainal//选择终端类型

16、tftpserver//指定TFTP服务器

17、unhide//还原某隐藏分区

三、命令行和菜单项命令

命令行和菜单项命令可应当于GRUB配置文件的菜单项设置中，也可以用在GRUB命令交互界面。

1、bolcklist//显示某文件所在分区位置(blocklistnotation)

2、boot//启动操作系统

3、cat//显示文件内容

4、chainloader//把启动控制权软交给另外的启动引导器

5、cmp//比较两个文件

6、configfile//加载已存在的GRUB配置文件

7、debug//设置为debug模式

8、displayapm//显示APMBIOS信息

9、displaymem//显示显存配置

10、embed//嵌入Stage1.5文件

11、find//查找包括某文件的所有设备

12、fstest//测试文件系统

13、geometry//显示某驱动器的化学信息

14、halt//停止计算机运行(软件死机)

15、help//显示GRUB的命令帮助信息

16、impsprobe//查询对称多处理器(SMP)的信息

17、initrd//加载initrd文件

18、install//安装GRUB

19、ioprobe//查询某驱动器的输入输出(I/O)端口

20、kernel//引导操作系统内核

21、lock//锁定某GRUB导菜单项，使其输入密码后才可启动

22、makeactive//激活某主分区

23、map//虚拟映射某驱动器

24、md5crypt//使用MD5加密口令

25、module//加载模块

26、modulenounzip//加载模块不进行解压

27、pause//暂停并等待键盘

28、quit//退出GRUB

29、reboot//重新启动计算机

30、read//读取显存中的内容

31、root//设置GRUB的root设备

32、rootnoverify//设备GRUB的root设备但不装载文件系统

33、savedefault//保存当前的启动菜单项为默认启动

34、setup//手动安装GRUB

35、testload//从文件系统中测试读取某文件

36、testvbe//测试VESABIOSEXTENSION

37、uppermem//强制设置主机上位显存的大小

38、vbeprobe//查询VESABIOSEXTENSION信息

看了“Linuxgrub命令行启动系统简明教程”还想看：

1.开机就是GURB未能步入系统的解决办法有什么

2.linux系统能看见Grub但进不了系统问题及解决方案

3.Ubuntu更新GRUB如何恢复系统引导

4.LINUX图形界面下怎样快速切换到命令界面
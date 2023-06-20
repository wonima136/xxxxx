---



title: "Linux分区/格式化挂载存储设备第二页共31页"
description: "Linux分区/格式化挂载存储设备第二页共31页"
keywords: "Linux分区/格式化挂载存储设备第二页共31页"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686427258886_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

(本资源由会员分享，可在线阅读，更多相关《第七章c盘管理（31页典藏版) 》请在人人文库网上搜索。

第七章c盘管理第一页，共31页。本章概述Linux分区/低格挂载储存设备第二页，共31页。Linux分区程序格式：fdisk[参数][设备]作用：实现对硬碟的分区。参数：-l：显示计算机中所有硬碟或指定硬碟的信息。示例：fdisk-l显示系统中所硬碟的信息.fdisk-l/dev/sdb显示指定c盘的信息第三页，共31页。使用fdisk分区fdisk

/dev/sdbatoggleabootableflag：切换是否可以开机。mprintthismenu：列举功能菜单。naddanewpartition：降低新的分区。ddeleteapartition删掉一个分区。pprintehtpartitiontable：列出现有的分区表。qquitwithoutsavingchanges：不存储离开。tchangeapartitionssystemid：改变分区的类型。llistknownpartitiontypes列举已知的分区类型uchangedisplay/entryunit：切换显示的单位，只有cylinder/sector两种wwritetabletodiskandexit：将设置结果写入并退出。xextrafunctionality：一些更深入的功能，专家菜单。第四页，共31页。硬碟低格常用命令简略英文说明程序所在目录mke2fs低格驱动器/sbinmkfsext2低格驱动器/sbinext3vfat低格fat分区vfat-F32低格为32位分区swap低格交换分区第五页，共31页。mke2fs格式：mke2fs[-选项][设备名称]作用：将硬碟格式化成ext2/ext3文件系统-c选项是检测坏扇区。例：mke2fs-c/dev/sdb1-L(小写)选项，为它加上一个卷标名称。例：mke2fs-Lmyvol/dev/sdb2-j选项，代表加日志，并默认创建ext3文件系统。例：#mke2fs-j/dev/sdb2组合示例：mke2fs-c-Llaifu/dev/fd0第六页，共31页。mkfs的使用mkfs用法一:mkfs-t

#mkfs-text3/dev/sdb2mkfs用法二:mkfs.

#mkfs.ext3/dev/sdb2#mkfs.ext3-c/dev/sda2#mkfs.ext3-L(小写)myvol/dev/sda2#mkfs.ext3-c-Lmyvol/dev/sda2第七页，共31页。c盘命令df:显示c盘的相关信息df-a:显示全部的文件系统.df-t:显示指定文件系统的类型.df-T:显示文件系统的类型.df-h:以可读性较高的形式来显示信息.du:显示指定的目录或文件所占用的空间du-s:仅显示总计,例:du-s/*du–h:以K,M,G为单位,提升信息的可读性.du–H:与h参数一样,但K,M,G是以1000为换算单位.第八页，共31页。mout命令mount命令挂载外部储存设备mount命令格式：mount-t-o设备挂载点第九页，共31页。挂载硬碟mount设备名挂载点#mount/dev/sdb1/home/ftp注：挂载点应在挂载前，先构建成功。第十页，共31页。卸载硬碟设备umountumount/dev/sdb1或umount/mnt/cdrom注:直接移走联通介质，可能对介质形成一定的损害。第十一页，共31页。使用卷标挂载添加卷标-e2label例：#e2label/dev/sdb2test按照卷标挂载例：#mountLABEL=test/mnt/sdb2第十二页，共31页。模式转换格式:tune2fs[参数][分区]说明:将文件ext2文件系统转换为ext3文件系统示例:mountumounttune2fs-j/dev/hdb4第十三页，共31页。检测文件系统格式:e2fsck[参数][设备名称]说明:检测ext2文件系统的正确性参数:-a

![linux格式化磁盘命令_linux挂载硬盘 不格式化_linux 格式化硬盘命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686427258886_0.png)

不寻问使用者意见，便手动修补文件系统-f虽然文件系统没有错误征兆，仍强制地检测正确性-v

执行时显示详尽的信息-y

采取非互动形式执行，所有的问题均设置以“yes”回答示例:e2fsck/dev/hdb4第十四页，共31页。挂载软盘mount设备名挂载点#mount/dev/fd0/mnt/floppy注：挂载点/mnt/floppy是系统手动构建的，在图形介面下挂载时，手动载入该目录。卸载方式与卸载硬碟分区一样。第十五页，共31页。挂载硬盘mount-t设备名挂载点#mount-tiso9660

/dev/cdrom/mnt/cdrom注：挂载点/mnt/cdrom是系统手动构建的，在图形介面下挂载时，手动载入该目录。光碟的数据格式主要有iso9660和udf卸载方式与卸载硬碟分区一样。第十六页，共31页。eject格式:eject[-dfhnqrstv][-a][-c][设备]作用:退出抽取式设备，若设备已挂入，则eject会先将该设备卸除再退出。参数：-a或--auto控制设备的手动退出功能。

![linux格式化磁盘命令_linux 格式化硬盘命令_linux挂载硬盘 不格式化](https://www.linuxcool.com/wp-content/uploads/2023/06/1686427258886_1.jpg)

-c或--changerslut选择硬盘柜中的硬盘。

-d或--default显示预设的设备 **linux 格式化硬盘命令**，而不是实际执行动作。

-f或--floppy退出抽取式c盘。

-h或--help显示帮助。

-n或--noop显示指定的设备。

-q或--tape退出磁带。

-r或--cdrom退出光碟。

-s或--scsi以SCSI指令来退出设备。

![linux 格式化硬盘命令_linux格式化磁盘命令_linux挂载硬盘 不格式化](https://www.linuxcool.com/wp-content/uploads/2023/06/1686427258886_2.jpg)

-t或--trayclose关掉光碟的托盘。

-v或--verbose执行时，显示详尽的说明。第十七页，共31页。挂载U盘mount类型设备名挂载点#mount-tvfat

/dev/sdc1/mnt/usb注：U盘是USB设备，外置USB-SCSI转换插口，所以被觉得是SCSI硬碟，默认都界定了一个分区。挂载点应在挂载前，先构建成功，比如/mnt/usb。卸载方式与卸载硬碟分区一样。第十八页，共31页。使用ISO文件mount类型设备名挂载点#mount-oloop/dev/1.iso

/mnt/iso注：挂载点应在挂载前，先构建成功linux系统编程，比如/mnt/iso。-o代表一个参数。卸载方式与卸载硬碟分区一样。第十九页，共31页。从光碟制做ISO文件格式：cp/dev/cdromiso文件名功能：将光碟中的数据制做成ISO文件。应用：

![linux格式化磁盘命令_linux 格式化硬盘命令_linux挂载硬盘 不格式化](https://www.linuxcool.com/wp-content/uploads/2023/06/1686427258886_3.gif)

(cp/dev/cdrommyiso.iso第二十页，共31页。从目录/文件制做ISO文件格式：mkisofs-r-oISO文件名目录文件路径名叫做用：将系统中的文件或目录制做成ISO文件应用：mkisofs-r-omyiso.iso/homemkisofs-r-omyiso.iso/etc/yp.conf第二十一页，共31页。挂载Windows文件系统挂载WindowsFAT32模式的介质#mount-tvfat/dev/hda2/mnt/c#mount-tvfat/dev/fd0/mnt/floppyWindowsNTFS格式的介质默认的内核不能分辨，须要重新编译内核，或安装相应的rpm包，注意在安装相应的包时，须要与内核版本相对应。#mount-tntfs/dev/hda3/mnt/dWindows分区的常用挂载选项Iocharset=（设备文件系统的字符编码常用值为gb2312和utf8) #mount-tvfat-oiocharset=gb2312/dev/hda3/d#mount-tvfat-oiocharset=cp936/dev/sdb2/d#mount-tvfat-oiocharset=utf8/dev/hda3/d第二十二页，共31页。

(ext2/ext3挂载选项ro/rw只读/读写（默认挂载点都是读写的) exec/noexec容许/不容许可执行user/nouser容许/不容许普通用户挂载c盘，用于/etc/fstab文件中的选项mount-oremount,noexec/dev/sdc1/dataremount只适用于早已挂载的,可以通过/data/ls进行测试，不要将根文件系统设置为只读的。第二十三页，共31页。手动挂载/dev/cdrom/mnt/cdromutf,iso9660noauto,owner,ro00/dev/sdb5/mnt/sdb1ext3defaults00/dev/sdb6/mnt/sdb2vfatdefaults00mount/dev/sdb1或mount/mnt/sdb2可以直接进行挂载，不须要写挂载点。mount命令手动在fstab中查询挂载点default:rw,suid,dev,exec,auto,nouser,async手动挂载程序/etc/fstab第二十四页，共31页。常用联通介质挂载选项rw/ro说明：读写/只读模式，适用于所有类型，比如：#mount/dev/fd0/mnt/floppy-orouid=,gid=说明：为挂载点目录指定属主和组身分 **linux 格式化硬盘命令**，本命令适宜挂接外部设备。

例：#mount/dev/sdb2/d-ouid=redhat,gid=redhat第二十五页，共31页。Automounter作用:手动挂载访问的分区主配置文件/etc/auto.master，格式：挂载目录映射文件参数比如/misc/etc/auto.misc--timeout=60映射文件/etc/auto.misc格式：关键字挂载选项设备比如cd-fstype=iso9660,ro:/dev/cdromfd-fstype=auto:/dev/fd0重新启动autofs服务：#serviceautofsrestart访问设备的方式：挂载目录+关键字譬如ls/misc/cd方法：可以为挂载设备完善一个符号链接：ln-s/misc/cd/cd第二十六页，共31页。创建c盘阵列#rpm-qa|grepraidc盘阵列的配置文件为/etc/raidtab。默认并没有此配置文件，须要自行编辑或从/usr/share/doc/raidtools-1.00.3下拷贝.1、创建配置文件raiddev/dev/md0raid-level0nr-raid-disks2chunk-size32persistent-superblock1device/dev/hdb1raid-disk0device/dev/hdc1raid-disk1第二十七页，共31页。创建c盘阵列2、初始化刚才创建的/dev/md0c盘阵列

#mkraid/dev/md０3、重启，系统便会手动启动此c盘阵列4、格式化并挂载此c盘阵列

#mke2fs/dev/md0#mount–t/ext3/dev/md0/mnt/raid第二十八页linux操作系统论文，共31页。停止/启动c盘阵列1、停止已启动的c盘配额：先卸载已挂载的目录，之后再执行raidstop命令停止指定的c盘阵列#umount/dev/md0#raidstop/dev/md0注：raidstop命令的作用仅到系统死机为止2、启动停止中的c盘阵列#raidstart/dev/md0

(第二十九页，共31页。变更c盘阵列配置情况与删掉c盘阵列一、变更c盘阵列配置情况1、先执行raidstop命令停止c盘阵列2、修改/etc/raidtab配置文件3、执行mkraid重新初始化c盘阵二、删除c盘阵列1、先执行raidstop命令停止c盘阵列2、删除/etc/raidtab配置文件（或更名) 第三十页，共31页。感谢！第三十一页，共31页。
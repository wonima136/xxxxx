---



title: "linux 格式化u盘命令 史上最全的Linux设备扩展分区设备汇总！！"
description: "linux 格式化u盘命令 史上最全的Linux设备扩展分区设备汇总！！"
keywords: "linux 格式化u盘命令 史上最全的Linux设备扩展分区设备汇总！！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677074830309_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

c盘分区

1、基本c盘分区：

(（1) 最多可以分为四个主分区（包含扩充分区：只能有一个，将剩余的所有空间包含在内）。

(（2) 主分区和扩充分区的编号：1-4为主分区和扩充分区的编号。

(（3) 扩充分区不能直接使用，必须在扩充分区上构建逻辑分区并低格后才会使用。

(（4) 逻辑分区编号从5开始。

(（5) 对新加的c盘进行分区：（分2个主分区 **linux 格式化u盘命令**，1个扩充分区，2个逻辑分区）

fdiskc盘设备名

atoggleabootableflag

beditbsddisklabel

ctogglethedoscompatibilityflag

ddeleteapartition删掉分区

gcreateanewemptyGPTpartitiontable

GcreateanIRIX(SGI)partitiontable

llistknownpartitiontypes显示所有分区类型

mprintthismenu

naddanewpartition新建分区

ocreateanewemptyDOSpartitiontable

pprintthepartitiontable显示分区表

qquitwithoutsavingchanges

screateanewemptySundisklabel

tchangeapartition’ssystemid更改分区类型

uchangedisplay/entryunits

vverifythepartitiontable

wwritetabletodiskandexit保存并出退出

xextrafunctionality(expertsonly)

(（6) 对c盘进行低格：mkfs-t分区类型(ext2ext3ext4)c盘分区名

mkfs-text4/dev/sdb1

(（7) 新建挂载点，并将分区进行挂载。

mount[-t文件系统类型]设备分区名挂载点

mount-text4/dev/sdb1/mnt/sdb1

怎样查看早已挂载成功：mount(mount|grepsdb1)

取消挂载：umount挂载点

(（8) 挂载硬盘设备

硬盘设备在Linux系统中的表示方式：/dev/sr0

硬盘设备文件系统类型：iso9660

将光碟挂载到/mnt/cdrom目录：

（9)永久挂载：使用mount命令挂载只是临时的，假如重启系统后就失效了。

/etc/fstab

[root@wwwcdrom]#vim/etc/fstab

[root@wwwcdrom]#mount-a

(动态c盘分区（LVM卷) 

3、挂载文件系统

挂载由mount命令来完成，可以灵活的挂载各种类型的文件系统。

命令格式：mount[选项][设备名][挂载点]

(![u盘格式化分区怎么选（linux磁盘分区详解步骤) (2)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677074830309_0.jpg)

4、卸载文件系统

文件系统可以被挂载，不用时可以被卸载。卸载文件系统的命令是umount，这个命令可以把文件系统从Linux系统中的挂载点上分离，将原先构建的文件系统和挂载点的联接断开。

命令格式：umount[设备名或则挂载点]

在卸载一个文件系统的时侯，须要指定要卸载的文件系统的挂载点或则设备名。诸如：

#umount/dev/sdb1//指定设备名卸载

#umount/mnt/sdb1//指定挂载点卸载

假如卸载文件系统提示：“busy状态，不可卸载时”**linux 格式化u盘命令**，使用fuser命令查看正在使用该文件系统的用户信息。

命令格式：fuser[options]文件系统名或则文件名

(![u盘格式化分区怎么选（linux磁盘分区详解步骤) (3)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677074830309_1.jpg)

【举例1】查看那个进程打开了当前目录下的cdrom文件夹。

[root@linuxcool~]#fuser/mnt/cdrom

/mnt/cdrom:71992c

杀害进程的方式：

(（1) #kill-971992

(（2) #fuser-km/mnt/cdrom

5、使用U盘备份文件（ntfs-3g)

(（1) 联接U盘

(（2) 查询系统为U盘分配的设备名

(（3) 挂载U盘

(（4) 备份文件

(（5) 卸载U盘

6、扩充系统的硬碟空间

管理员root发觉Linux系统硬碟资源不足，因而在服务器上新降低了一块硬碟，想在Linux系统下使用它。一般遵守以下步骤：

1)向系统中添加一块硬碟

2)由系统辨识硬碟名

3)对新硬碟进行分区

(![u盘格式化分区怎么选（linux磁盘分区详解步骤) (4)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677074830309_2.jpg)

4)对分区进行低格

5)创建文件系统

6)挂载使用

7、命令行下提升工作效率的方式

(（1) Linux下Shell命令补全功能，按TAB键

(（2) 命令别称alias

(（3) 命令历史history

(（4) 文件系统的手动挂载

#vim/etc/fstab

第1数组：须要挂载的设备文件名。

第2数组：挂载点，必须是一个目录，但是必须用绝对路径。

对于交换分区，这个数组定义为swap。

第3数组：文件系统的类型。假如是ext3文件系统中国linux，则写成ext3；如

果是FAT32文件系统，则写成vfat；假如是光碟，可以写成

auto由系统手动检查或iso9660。

第4数组：挂载选项。通常都是采用“defaults”。

(![u盘格式化分区怎么选（linux磁盘分区详解步骤) (5)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677074830309_3.jpg)

第5数组：文件系统是否须要dump备份，1表示须要，0表示忽视。

第6数组：在系统启动时是否检测这个文件系统以及检测的次序，

0表示不检测linux命令vi，1表示优先检测，2表示其次检测。
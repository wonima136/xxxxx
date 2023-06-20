---



title: "Linux系统相关关机指令Linux目录相关文件相关操作压缩与解压缩"
description: "Linux系统相关关机指令Linux目录相关文件相关操作压缩与解压缩"
keywords: "Linux系统相关关机指令Linux目录相关文件相关操作压缩与解压缩"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1680351350898_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux系统相关死机指令Linux目录相关文件相关操作压缩与解压缩相关软件相关卸载软件c盘c盘分区相关

​在Linux中无论有多少个分区，分给哪一个目录使用，它归根结底就只有一个根目录，一个独立且惟一的文件结构 **linux磁盘相关命令**，Linux中每位分区都是拿来组成整个文件系统的一部份，Linux采用了一种“载入”的处理方式，它的整个文件系统中包含了一整绕的文件和目录，且将一个分区和一个目录联系上去，这时要载入的一个分区将使它的储存空间在一个目录下获得

​Linux的硬碟分IDE硬碟和SCSI两种，目前SCSI使用的比较多

给Linux降低硬碟案例

第一步：给Linux添加一块硬碟

​若是在虚拟机中，可以通过虚拟机添加一块硬碟，若不是虚拟机而是在实体机中可以添加实体硬碟，云服务器中可以进行扩容，添加硬碟以后须要重启Linux系统才可以在系统中通过上述命令查看到新添加的硬碟

第二步：给添加的硬碟分区

通过命令fdisk/dev/vda`对c盘进行分区，执行后输入m表示显示命令列表 **linux磁盘相关命令**，之后输入n添加一个分区，之后选择p红帽linux系统下载，分区类型为主分区，之后两次回车默认剩余全部空间，最后输入w写入分区并退出，若不保存操作退出则输入q

第三步：将分区进行低格

mkfs-text4/dev/sdb1将硬碟进行低格，其中ext4为分区类型，/dev/sdb1为新添加的分区，c盘低格后将会给硬碟生成一个UUID，可以通过lsblk-f查看

第四步：将分区挂载到一个目录下

通过命令mount/dev/sdb1/newdisk可以将新创建的分区挂载到一个目录下linux论坛，不过当系统重启后，通过命令形式进行的挂载将不会生效，通过命令umount/dev/sdb1或则umount/newdisk可以将分区卸载

第五步：设置可以手动挂载

![linux磁盘命令_linux磁盘相关命令_linux磁盘挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1680351350898_0.png)

通过更改配置文件/etc/fstab实现挂载，添加完成后，执行mount-a立刻生效，此方式实现的挂载不会由于重启而失效

c盘情况相关网路配置相关Linux网路环境配置Linux获取IP形式

(第一种为DHCP（手动获取IP模式) 

第二种为指定静态IP方式

通过更改/etc/sysconfig/network-scripts下的ifcfg-ens33配置文件更改

设置主机名和hosts映射进程管理

进程在系统中存在两种状态：一种为前台一种为后台

使用案例，查看sshd所运行的进程信息，命令为ps-aux|grepsshd防火墙firewall相关

通过systemctlstatusfirewalld可以查看防火墙是否开始

定时任务相关常用命令常见使用场景

使用crontab定时执行某个shell脚本，并将执行日志进行记录

```shell
0 * * * * sh ~/test/test.sh >> ~/test/test.log
```

可能会出现的问题：
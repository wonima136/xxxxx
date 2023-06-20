---



title: "如何NFSNFS开发环境的方法步骤——mount命令及umount命令的用法详解"
description: "如何NFSNFS开发环境的方法步骤——mount命令及umount命令的用法详解"
keywords: "如何NFSNFS开发环境的方法步骤——mount命令及umount命令的用法详解"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684008897413_1.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

怎么挂载NFS开发环境的方式步骤

(———mount命令及umount命令的用法解读（附图说明) Step1：设置好网路

主机IP：222.204.59.185网段：192.168.50.1子网网段：255.255.255.0

开发板IP：222.204.59.250网段：192.168.50.1子网网段：255.255.255.0

目的是促使两个处于同一个公网。

Step2:在主机的linux中设置共享目录

运行命令

#gedit/etc/exports

编辑nfs服务的配置文件(注意:第一次打开时该文件是空的),添加以下内容:

/root/share*(rw,sync,no_root_squash)保存退出

其中:

/root/share表示nfs共享目录,它可以作为开发板的根文件系统通过nfs挂接;

*表示所有的顾客机都可以挂接此目录

rw表示挂接此目录的顾客机对该目录有读写的权利

no_root_squash表示准许挂接此目录的顾客机享有该主机的root身分

![linux下nfs挂载命令_linux nfs 挂载_linux nfs挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684008897413_1.jpg)

使用showmount–e命令可以查看你的挂载点在哪，不加参数-e显示的是网路地址。

(在开发板上的/mnt下完善新的nfs文件（可以置于其他地方，名子不仅nfs也可以去其他的名子) 

Step3：通过命令启动和停止nfs服务

在命令行下运行:

#/etc/init.d/nfsrestart

这将启动nfs服务,可以输入以下命令检验nfs该服务是否启动。

(Step4：在minicom中使用mount命令（也可以在超级终端中使用) 

确定

步入minicom界面：

#mount-tnfs222.204.59.185:/root/share/mnt/nfs

(上图为minicom中显示的linux（也即开发板中的) 

假如提示：mount：RPC：unabletoreceive;errno=Noroutetohost说明你主机linux中的防火墙没关掉在主机linux中使用一下命令就可以解决：#serviceiptablesstop。在次使用mount命令就ok了。

注意：此处222.204.59.185主机的ip地址，使用mount命令是在超级终端或minicom中使用linux操作系统论文，而不是在主机的linux系统中。在取消挂载命令时也是在超级终端或minicom中使用linux apache 虚拟主机，具体用法是：#umount/mnt/

若果没有出现错误信息,您将可以浏览到/mnt目录中的内容和/root/share是一致的。

取消挂载：

使用这个命令可以停止nfs服务:#/etc/init.d/nfsstop

检测nfs服务器是否开启:#servicenfsstatus

启对应的2个服务：#serviceportmaprestart#servicenfsrestart

检测防火墙看是否屏蔽了nfs端口：#serviceiptablesstop#serviceiptablesstatus

看着看着LIPLinux忽然发觉nfs服务器类似于共享服务器 **linux nfs挂载命令**，可以在linux下挂载到本机的。太好了，家里那台破服务器上的东西正准备转移过来捏，上网找来这篇教程 **linux nfs挂载命令**，如今正在装portmap，网路太慢。。。

－－－－－－－－－－－－－－－－

一、NFS服务器的安装

检测linux系统中是否安装了nfs-utils和portmap两个软件包

(（RHEL4系统默认早已安装了这两个软件包) 

命令#rpm–qnfs-utilsportmap

二、查看NFS服务器是否启动

![linux nfs挂载命令_linux下nfs挂载命令_linux nfs 挂载](https://www.linuxcool.com/wp-content/uploads/2023/05/1684008897413_6.jpg)

命令#servicenfsstarus

#serviceportmapstatus

(三、如果服务器没有启动，则开启服务（默认服务下nfs没有完全开启) 

命令#servicenfsstart

#serviceportmapstart

四、指定NFS服务器的配置文件

NFS服务器的配置文件保存“/etc/”目录中，文件名称是“exports”，该文件用于被指NFS服务器提供的目录共享

命令#vi/etc/exports

配置“exports”文件格式如下

(/home*（sync，ro) 

Home：共享目录名

*：表示所有主机

(（sync，ro) ：设置选项

(exports文件中的“配置选项”字段放置在括弧对（“（) ”）中，多个选项间用冒号分隔

sync：设置NFS服务器同步写c盘，这样不会轻易遗失数据，建议所有的NFS共享目录都使用该选项

ro：设置输出的共享目录只读，与rw不能共同使用

rw：设置输出的共享目录可读写，与ro不能共同使用

exports文件中“客户端主机地址”字段可以使用多种方式表示主机地址192.168.152.13指定IP地址的主机

nfsclie指定域名的主机

192.168.1.0/24指定网关中的所有主机

*.指定域下的所有主机

*所有主机

五、重新输出共享目录

Exportfs管理工具可以对“exports”文件进行管理

命令#exportfs–rv可以让新设置的“exports”文件内容生效

六、显示NFS服务器的输出目录列表

显示当前主机中NFS服务器的输出列表

#showmount-e

七、显示NFS服务器中被挂载的共享目录

显示当前主机NFS服务器中早已被NFS顾客机挂载使用的共享目录

![linux nfs挂载命令_linux下nfs挂载命令_linux nfs 挂载](https://www.linuxcool.com/wp-content/uploads/2023/05/1684008897413_7.png)

#showmount-d

八、在另外一个linux系统中挂在共享目录

显示NFS服务器的输出

#showmount-e172.16.75.1

挂载NFS服务器中的共享目录

#mount-tnfs172.16.75.1：/software/mnt/

九、查看mnt目录中的内容

Cd/mnt|ll

十、卸载系统中已挂载的NFS共享目录

命令#umount/mnt/

总结：

1、在配置NFS服务器之前用ping命令确保两个linux系统正常联接，倘若未能联接关掉图形界面中的防火墙#serviceiptablesstop

2、在配置中确保输入的命令是正确的

3、更改完“exports”文件后要输入exportfs–rv，致使“exports”文件生效。

4、检查nfs服务是否开启，默认是关掉的。

5、卸载的时侯不能在/mnt目录中卸载，必须注销系统后卸载。
---



title: "Linux文件系统中的所有文件都以/为根的大树的形式排列"
description: "Linux文件系统中的所有文件都以/为根的大树的形式排列"
keywords: "Linux文件系统中的所有文件都以/为根的大树的形式排列"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683980644382_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux中的挂载命令mount你晓得如何用吗？

序言

(在LinuxGUI中，我们一般理所其实地觉得，当我们插入USB闪存驱动器、硬盘驱动器甚至DVDc盘时，它们就可以使用了。并且在后台有一个过程，设备被安装（打算好使用) 并分配了一个安装点。当使用服务器或远程联接时，并不能确定某个设备是否会手动可用，这么我们怎么挂载自己的设备呢？下边我们一上去看一下！

mount是哪些？

(Linux文件系统中的所有文件都以/为根的小树的方式排列。那些文件可以按照您的分区表分布在各类设备上，最初你的父目录安装（即附加) 到这棵树的/，其他的可以自动挂载使用GUI界面（假如可用）或使用挂载命令。

(mount命令用于将设备上找到的文件系统挂载到以/为根的小树结构（Linux文件系统) 上。相反，另一个命令umount可用于从树中分离这种设备。

mount的中级用法

mount命令挂载储存设备或文件系统，使其可访问并将其附加到现有目录结构。

![linux nfs挂载命令_linux下nfs挂载命令_nfs 挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683980644382_0.jpg)

句型：

```bash
mount -t 类型设备目录
```

(这告诉内核将设备上找到的文件系统（类型为type) 附加到目录dir。dir之前的内容（假如有）、owner和mode显得不可见linux移植，只要这个文件系统保持挂载，路径名dir指的是设备上文件系统的根目录。假如没有提及目标目录，默认情况下，它将设备挂载在/etc/fstab文件中。

其他方式：

```bash
mount [-l|-h|-V]
mount -a [-fFnrsvw] [-t fstype] [-O optlist]
mount [-fnrsvw] [-o options] device|dir
mount [-fnrsvw] [-t fstype] [-o options] device dir
```

这种命令告诉内核将在设备上找到的文件系统附加到dir。

示例

(要将硬碟驱动器的第二个分区挂载到现有目录/media/PHOTOS（挂载点) ：

```bash
$ mount /dev/hda2 /media/PHOTOS
```

显示所有已安装的分区：

```bash
$ mount
 proc on /proc type proc (rw)
sysfs on /sys type sysfs (rw)
devpts on /dev/pts type devpts (rw,gid=5,mode=620)
/dev/sda1 on /boot type ext3 (rw )
/tmp on /var/tmp type none (rw,noexec,nosuid,bind)
10.4.0.4:/srv/export/setup_server on /nfs/setup_server type nfs (ro,addr=10.4.0.4)
```

假如须要卸载刚刚的分区：

```bash
$ umount /dev/hda2
```

参照挂载点卸载：

```bash
$ umount /media/PHOTOS
```

使用特定选项重新挂载分区：

![linux下nfs挂载命令_nfs 挂载命令_linux nfs挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683980644382_1.jpg)

```bash
$ mount -o remount,rw /dev/hda2
```

umount的中级用法

umount命令从文件层次结构中分离指定的文件系统。一个文件系统是通过给出它被安装的目录来指定的。提供文件系统所在的特殊设备也可以工作linux软件下载，但这是一种过时的方式，主要是由于假如该设备安装在多个目录上，它会失败。

并且须要注意，文件系统在忙碌时难以卸载。比如，当它里面有打开的文件时，或则当某个进程在哪里有它的工作目录时，或则当它前面的交换文件正在使用时，umount将难以成功。

(有些难以使用umount的进程甚至可能是umount本身——例如，umount打开公共C库，而前者又可能打开了语言环境文件，假如它们在相关设备上，则会制止它被卸载。虽然出现这些冲突 **linux nfs挂载命令**，“惰性”卸载（参见下边卸载选项部份中的-l) 也会尝试卸载。

中级用法绑定挂载

绑定挂载准许将文件系统层次结构或文件挂载到不同的挂载点。与符号链接不同，文件系统本身不存在绑定挂载。在下边的事例中，路径/olddir将被挂载在/newdir

```bash
$ mount --bind /olddir /newdir
```

![nfs 挂载命令_linux nfs挂载命令_linux下nfs挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683980644382_2.jpg)

怎样在Linux上挂载和卸载驱动器

可以使用终端安装SSD、USB闪存驱动器、HDD和ISO映像。在终端仿真器中使用命令行界面(CLI)可以让我们更好地控制何时安装驱动器以及它们在文件系统中的安装位置。

使用lsblk命令辨识USB驱动器。在结果中 **linux nfs挂载命令**，您可能会看见许多标记为“循环”的条目。并且，您正在找寻被列为sda或sdb的结果，以辨识联接到您的系统的数学c盘。比较所联接驱动器的列举容量一般可以帮助您发觉目标驱动器的名称。在我们的事例中，我们可以将USB驱动器辨识为sdb1。

创建一个目录来挂载USB驱动器。当外部驱动器手动挂载时，它一般挂载在媒体目录中。并且使用CLI，我们可以创建并指定一个目录，我们将在其中挂载我们的pendrive。请注意，我们须要使用sudo来调用root权限，便于在媒体目录中创建一个目录。

```bash
sudo mkdir /media/pendrive
```

使用mount命令将U盘挂载到/media/pendrive目录。mount命令具有以下句型；

![linux下nfs挂载命令_linux nfs挂载命令_nfs 挂载命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683980644382_3.jpg)

```bash
sudo mount /dev/sdb1 /media/pendrive
```

通过重新运行lsblk检测驱动器是否已安装。

请注意，lsblk输出中的最后一列列举了列举设备的挂载点，假如列举了挂载点，则确认该设备已挂载。

结语

使用mount命令我们可以更好地控制在Linux中挂载和卸载c盘，并把握一些方法，在联接的驱动器难以手动正确挂载时可能会有所帮助。

在探求曾经使用的系统的旧备份映像或想要查看Linux发行版映像内容以进行探求或学习时，才能使用循环设备挂载c盘映像特别有用。

点击下方公众号卡片获取资料
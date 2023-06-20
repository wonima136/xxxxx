---



title: "linux命令格式化u盘 制作uefiwin7启动U盘启动安装盘教程！"
description: "linux命令格式化u盘 制作uefiwin7启动U盘启动安装盘教程！"
keywords: "linux命令格式化u盘 制作uefiwin7启动U盘启动安装盘教程！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Rufus是一款实用的自启动U盘制做工具。用户可以通过该软件快速制做linux系统或则windows启动硬盘，不过在这之前你须要把重要资料备份到笔记本中，由于低格后哪些都找不回去了。Rufus麻雀虽小，脏腑俱全，容积虽小，功能全面，假如身边没有系统安装盘或则刻录光碟，这么使用rufus就可以帮你安装系统了。

小编精选：U盘启动盘制做工具

【功能特性】

1、完全免费。

2、界面简单，上手容易。

3、功能全面，同时支持windows和linux系统。

4、速度快，这个软件制做自启动U盘时须要的速率比其他软件快得多。

5、这个软件还有带freedos版本。个人觉得这个应当是毫无益处的，随意制做一个linux启动盘都比dos好用几百倍。

6、使用rufus后的硬盘还是可以拿来储存文件，你可以在xp、vista、windows7、win8等系统上运行这个软件。

![rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_0.jpg)

![linux 格式化u盘命令_linux命令格式化u盘_format命令格式化u盘](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_1.jpg)

【制作Win10U盘启动安装盘教程】

1、把U盘插入笔记本，以管理员身分运行Rufus

2、在设备一栏选择你的硬盘——图中2的位置选择iso镜像文件——按照图上的次序进行选择操作

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_2.jpg)

3、点击开始后就可进行制做，但请注意，点击后会消除硬盘上所有数据，请提早备份

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_3.jpg)

4、接着等待rufus制做完成，稍待片刻，制做完成，打开资源管理器我们就可以看见制做成果啦

5、移除硬盘并拔出后才能拿去安装你想安装的win10啦，是不是很简单，几乎任何菜鸟都能一次性搞定。

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_5.jpg)

【制作uefiwin7启动U盘教程】

1、下载win7x64非ghost版iso镜像以及Rufus制做工具，在笔记本上插入U盘，双击打开Rufus，手动检查到U盘，【分区方案和目标系统类型】下拉框选择【用于UEFI计算机的GPT分区方案】；

2、创建一个启动盘使用【iso镜像】，之后点击光碟图标按键；

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_6.jpg)

3、选择Windows7x64的iso镜像，x86不行，点击打开；

![linux 格式化u盘命令_format命令格式化u盘_linux命令格式化u盘](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_7.png)

4、镜像选择以后，新卷标会手动更名字，这就是制做以后U盘的名称 **linux命令格式化u盘**，点击“开始”按钮；

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_8.jpg)

5、弹出这个对话框，确保U盘没有重要数据linux运维博客，点击确定；

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_9.jpg)

6、接着开始执行制做win7uefi启动盘过程，时间依照U盘的读写性能而定，几分钟到几十分钟不等；

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_10.jpg)

7、绿色进度条全满以后，启动盘就制做好了，点击关掉；

8、打开计算机，U盘名称弄成GSP1开头，uefi版的win7启动盘，是在efi目录下添加了boot目录，并在boot下添加bootx64.efi文件，uefi启动须要bootx64.efi文件。

![linux命令格式化u盘_linux 格式化u盘命令_format命令格式化u盘](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_11.jpg)

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_12.jpg)

【制作USB启动盘教程】

rufus会手动辨识到插在笔记本上的U盘，我们要做的就是点击“选择”找到我们下载好的系统ISO镜像，剩出来的事情rufus都帮我们做好了。接着我们点击“开始”按钮就可以制做了。虽然rufus的制做原理是，将U盘分成了两个区，一个是fat32分区，上面用于储存UEFI系统启动文件，一个分区是NTFS格式，用于储存完整的系统镜像文件，这样一来就鱼和熊掌可兼得了。

既然晓得了rufus的制做原理，我们不依靠工具也能完成以上的步骤：

1、手动给U盘分区，一个fat32分区，一个NTFS分区，fat32分区只须要很小的空间linux获取当前时间，几MB即可，我们不妨为其分配100M吧，剩下的都给NTFS分区即可，

2、将下载好的系统ISO镜像解压到NTFS分区，

3、将系统镜像里的bootmgr.efi文件和boot文件夹复制到fat32分区即可，注意boot文件夹里有好几个文件，我们只须要bcd、boot.sdi、bootfix.bin三个文件即可。

【操作步骤】

1、下载操作系统的iso镜像文件。

2、把U盘联接笔记本 **linux命令格式化u盘**，运行这个软件，在“device”的下拉菜单中选择硬盘所在的c盘。

3、createabootablediskusing：前面选择“isoimage”，在点击前面的图标选择iso镜像文件。

4、点击“start”，软件都会对U盘进行低格、制作可启动硬盘的操作。

![Rufus](https://www.linuxcool.com/wp-content/uploads/2023/02/1677535482135_13.jpg)

【更新内容】

*改善Ubuntu20.04支持

*改进对未安装分区的FIXED驱动器的检查

*将UEFINTFS文件系统驱动程序更新到v1.5

*在系统区域设置为UTF-8的情况下，在FreeDOS驱动器创建过程中修补断定

*修补使用非西方语言环境时的无效标签错误
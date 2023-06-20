---



title: "升级VIP,SVIP会员，轻松下载全站资料"
description: "升级VIP,SVIP会员，轻松下载全站资料"
keywords: "升级VIP,SVIP会员，轻松下载全站资料"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683490222889_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

升级VIP,SVIP会员，轻松下载全站资料>>>

![Linux的5种关机/重启命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683490222889_0.webp)

在Linux上，与所有任务一样，死机和重启操作也可以从命令行完成。

当Linux服务器没有gui界面时，使用命令行很好使，本文介绍的几个命令适宜centos、ubuntu、debian、fedora或suse等linux系统。让我们直接开始介绍！

1、shutdown

shutdown可用于关掉系统或重新启动系统，会以安全的方法关掉linux运维最佳实践，所有登入的用户就会收到系统正式关掉的通知，并在TIME的最后五分钟内制止新登陆。

句型：

shutdown[OPTION][TIME][MESSAGE]

关掉linux

要关掉机器，请像这样调用shutdown命令

#shutdown-hnow

h选项用于halt，表示停止，第二个参数是时间参数，“now”表示立刻关掉系统。

![linux 关机命令 区别_linux shutdown关机命令_linux 关机命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/05/1683490222889_1.png)

时间参数也可以以分钟或小时为单位指定。诸如

#shutdown-h+5“服务器正在关掉以进行升级，请保存您的工作。”

上述命令应将消息闪动给所有其他登陆用户，并在系统关掉前给她们5分钟。

重启linux

shutdown命令可用于使用r选项而不是h选项重新启动系统，使用方式和之前一样，只需将h选项替换为r选项即可。

#shutdown-r+5“服务器将在5分钟后重启。请保存您的工作。”

所有其他登陆用户将在她们的终端中听到这样的广播消息：

[root@dhcppc1~]#

Broadcastmessagefromroot@dhcppc1

/dev/tty1)at21:35…

Thesystemisgoingdownforrebootin5minutes!

![linux 关机命令 区别_linux shutdown关机命令_linux 关机命令 区别](https://www.linuxcool.com/wp-content/uploads/2023/05/1683490222889_2.jpg)

Serverwillrestartin5minutes.Pleasesaveyourwork.

此时可以通过使用“c”选项调用shutdown来取消关掉。

#shutdown-c

2、reboot

下一个命令是reboot命令，它也可以拿来关掉或重启linux。

关掉linux

以下命令将关掉linux：

#reboot-p

“p”选项代表死机。

重启linux

要重新启动linux，只需直接调用reboot命令，无需任何选项。

![linux 关机命令 区别_linux 关机命令 区别_linux shutdown关机命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683490222889_3.png)

#reboot

这将执行正常死机并重新启动机器，当您从菜单上单击重新启动时会发生此类情况。

强制重启linux

以下命令将强制重启机器。这类似于按下CPU的电源按键。不会发生死机，系统将立刻重置。

#reboot-f

man命令解释如下:

(当使用–force调用或处于运行级别0或6时，此工具调用reboot(2)系统调用本身（传递了REBOOTCOMMAND参数) 并直接重新启动系统 **linux 关机命令 区别**，否则，这只是使用适当的参数调用shutdown(8)工具，而不传递REBOOTCOMMAND参数。

3、halt

下一个命令是halt命令，这可以关掉系统：

#halt

halt命令也有一个force选项，通常不使用，由于它表示立刻关掉系统，但它的行为可能不一致，桌面可能会在运行此命令时挂起。

4、poweroff

还有一个命令与halt命令完全相同，并采用了相同的选项。

#poweroff

5、组合键

当您控制系统时linux运维招聘，可以使用里面显示的命令，假若系统挂起而且根本没有响应如何办？并且您不想按下CPU上的电源按键，由于这可能会造成数据受损，为了防止这些情况，神奇的sysRQ键出现了。

一个特殊的键盘组合，可以让你重新启动你的linux系统，不管它挂了多少。

神奇的SysRq秘钥的一个常见用途是对已锁定的Linux计算机执行安全重启。这可以避免在重新启动时须要fsck，并使个别程序有机会保存未保存工作的紧急备份。

警告：按以下键会立刻重新启动您的系统，它类似于按下CPU的电源按键或执行reboot-f命令。

ALT+PrintScreen+B

如今我们必须首先使用REISU字母替代B键，每位键执行如下所述的任务

unRaw(takecontrolofkeyboardbackfromX),

tErminate(sendSIGTERMtoallprocesses,allowingthemtoterminategracefully),

kIll(sendSIGKILLtoallprocesses,forcingthemtoterminateimmediately),

Sync(flushdatatodisk),

Unmount(remountallfilesystemsread-only),

reBoot.

(按住Alt和SysRq（复印屏幕) 键。

在按住这种键的同时，按次序键入以下键，间隔几秒钟：REISUB

计算机应重新启动。

确保每位键之间有一些时间间隔REISUB。

可以通过修改/proc/sys/kernel/sysrq的值来控制sysrq功能 **linux 关机命令 区别**，要检测系统是否启用了sysrq，请回显该值，它应当是非零的。

$cat/proc/sys/kernel/sysrq

176
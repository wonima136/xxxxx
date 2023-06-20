---



title: "引导语：win10自动关机的命令是什么？"
description: "引导语：win10自动关机的命令是什么？"
keywords: "引导语：win10自动关机的命令是什么？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681041687294_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

引导语：win10手动死机的命令是哪些？接出来是小编为你带来搜集整理的文章，欢迎阅读！

win10笔记本手动死机命令篇1

手动死机命令，笔记本手动死机命令

Windows操作系统中通过使用“shutdown.exe”程序，即可实现手动死机疗效，该程序坐落C:WINDOWSsystem32目录下，一般情况下我们仅须要通过“运行”程序输入shutdown命令才能启动手动死机功能，下边介绍一些常用的手动死机命令、电脑手动死机命令；

输入命令的形式：滑鼠点击“开始”菜单——>选择“运行”——>将下方的手动死机命令复制到其中，点击确定即可；

自定义笔记本手动死机时间命令：at20:30shutdown-s

命令的涵义：笔记本将在系统时间为20点30分时手动死机，假如想要设置其他时间LINUX 删除目录，请修改20:30处即可；-s表示关掉本地计算机)

倒计时方法实现笔记本手动死机命令：shutdown.exe-s-t1800

命令的含意：1800秒后笔记本手动死机，而且是以读秒倒计时的形式进行，1800则表示1800秒，也就是30分钟后，按照须要自定义时长，以秒为单位；-t表示以读秒倒计时的形式)

以可视化窗口方式设定手动死机命令：shutdown-i

输入运行该命令后，将弹出手动死机设置窗口，按照英文提示设定您的定时死机时间、形式等等，简单易懂；除了这般，您还可以通过-i命令实现远程控制局域网中的计算机手动死机)

取消笔记本手动死机命令：shutdown-a

如果您设定了笔记本手动死机，但中途想要取消，则输入里面的命令，系统将手动取消定时死机功能，恢复正常状态)

手动死机命令、电脑手动死机命令都须要使用“shutdown.exe”程序，两种定时死机的形式自由选择，须要注意的是，所有命令中的参数之间都有一个空格符，输入命令时不要删掉那些空格符，否则可能引起命令无效。

造成死机故障的诱因黑手

死机是我们结束笔记本使用必不可少的步骤之一，但就是在这最后关头却常常出现问题，致使死机未能完成，最终只能强制关掉电源。这些常常性强制死机操作除了容易导致文件遗失，但是也会作害硬碟。对此，我们就和你们来一一排查 **关机命令 shutdown 参数**，找出造成死机故障的诱因黑手。

一、电源设置错误

电源是笔记本的能源中枢，对电源的管理配置正确与否是造成死机故障的首个诱因。对此，我们可以在开机时按DEL步入BIOS，之后选择电源管理“PowerManagementSetup”，把“ACPIFunction”设为“Enabled”，把“PMControlByAPM”设为“YES”。

再步入控制面板打开电源选项，在“高级电源管理”标签中选中“启用中级电源管理”项，最后再运行“regedit”打开注册表编辑器，依次选择HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsNTCurrentVersionWinlogon，把右边的’PowerdownAfterShutdown值设为1，做完这种设置后重新启动计算机即可。

二、退出时声音文件受损

有些用户启用了声音方案，这样开机、关机等操作时就会有阅耳的音乐声音伴随。但这同样是导致死机故障的一个诱因，即死机时的声音文件受损。对此，我们可以步入控制面板，打开“声音和音频设备”项linux重启命令，切换到“声音”标签，之后将“声音方案”设为“无声”，或则将“程序风波”中的“退出Windows”的声音设为“无”即可。

三、部分软件在作祟

假如自己的笔记本死机仍然正常，然而在安装了个别应用软件后，却出现了难以死机的错误，对此很可能就是由于安装该软件时，更改了系统文件。这个时侯我们不防先将该软件卸载，或则使用WindowsXP的系统还原功能，将系统状态恢复到一个较早的状态，假如问题解决，这么则证明软件有问题。这些情况在各类测试版软件上尤其多见。

四、驻留程序没有退出

有的时侯，明明执行了“关机”命令，笔记本却反应很慢，而且只要你还能耐心的等上一段时间，最终也才能成功关掉，但是这些情况的出现是随机性的，并不是每次都出现。这时你则须要检测是否有其它留驻程序没有关掉。你可以打开任务管理器，在“进程”标签中查看有什么是应用程序的进程，可将其强制关掉，另外也可以按住Ctrl键，之后单击“任务管理器”中“关机”菜单中的“关机”命令即可。

![用shutdown命令后无法关机问题_关机命令 shutdown 参数_关机命令shutdown win7](https://www.linuxcool.com/wp-content/uploads/2023/04/1681041687294_0.jpg)

五、自动死机或重启

这些情况相信好多人也遇到过，对此可以首先从软件上排查。安装冲击波、震荡波等造成系统1分钟死机的病毒补丁；其次打开系统属性窗口，在“高级”标签上单击“启动和故障恢复”处的“设置”按钮，把“系统失败”中的“自动重新启动”项取消。另外手动死机还可能是散热问题，不防打开机箱，观察一下CPU电扇转动是否正常，假如怠速慢甚至不转，这么则须要更换吊扇了。

另外对于WindowsXP系统，好多时侯还可能是与电源管理有关。

win10笔记本手动死机命令篇2

一、设置定时死机bat

1、在桌面新建一个记事本txt；

2、打开记事本，输入“shutdown-s-t1800”，1800是指1800秒，即30分钟内死机，你们可以更改成别的时间，之后把时间换算成秒就行；

3、保存后，将txt后缀改成“bat”，改好以后按回车，弹出提示，点击是 **关机命令 shutdown 参数**，假如没有显示后缀名参考：win10修改文件后缀名方式；

4、然后我们双击“定时死机.bat”，就开始运行，之后右下角会弹出一个对话框，提示30分钟后死机；

5、需要更改时间的话，右击该文件-编辑，就可以重新更改数字了。

二、设置取消手动死机bat

1、运行手动死机指令后，可能会忽然不想关掉计算机，就须要运行下边这个取消手动死机bat指令了；

2、继续新建一个txt记事本，打开后，输入“shutdown-a”，保存，更改后缀为bat；

3、双击该文件，则提示手动死机被取消。

win10系统把手动死机和取消手动死机的命令写成bat文件，就可以像运行程序一样，一键操作。

【win10笔记本手动死机命令】相关文章：

笔记本手动死机命令01-26

笔记本手动死机为何会手动死机01-20

笔记本手动死机的诱因03-31

笔记本不定时手动死机03-29

笔记本手动死机手动重启03-29

笔记本会手动死机如何办06-08

金佛手动死机与笔记本锁软件介绍03-30

怎么让win10笔记本开机加速。03-18

手提笔记本手动死机是哪些缘由02-18
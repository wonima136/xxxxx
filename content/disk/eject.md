---



title: "eject命令 – 退出抽取式设备"
description: "eject命令 – 退出抽取式设备"
keywords: "eject命令 – 退出抽取式设备"
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

eject命令用于退出抽取式设备。若设备已挂入，则eject会先将该设备卸除再退出。

**语法格式：** eject [参数] [设备]

**常用参数：**

-a控制设备的自动退出功能 -c选择光驱柜中的光驱 -d显示预设的设备，而不是实际执行动作 -f退出抽取式磁盘 -h显示帮助 -n显示指定的设备 -q退出磁带 -r退出光盘 -s以SCSI指令来退出设备 -t关闭光盘的托盘 -v执行时，显示详细的说明

**参考实例**

不加参数默认弹出：

```
[root@linuxcool ~]# eject
```

指定设备:

```
[root@linuxcool ~]# eject -r /dev/cdrom
```
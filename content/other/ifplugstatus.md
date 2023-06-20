---



title: "ifplugstatus命令 – 检查网线是否已插到在网络接口"
description: "ifplugstatus命令 – 检查网线是否已插到在网络接口"
keywords: "ifplugstatus命令 – 检查网线是否已插到在网络接口"
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

ifplugstatus命令可以查看所有网络接口的状态，或是指定网络接口的状态。

这个命令Ubuntu没有预装，通过下面的命令来安装

sudo apt-get install ifplugd。

**语法格式：** ifplugstatus

**参考实例**

显示接口状态：

```
[root@linuxcool ~]# ifplugstatus
lo:link beat detected
wlan0:link beat detected
eth0:unplugged
```

查看上面的快照, 它显示了所有接口的状态。在这里, 检测到链接信号意味着已将其插入。在我们的系统中, lo和wlan0已插入, 而eth0未插入。
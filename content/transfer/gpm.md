---



title: "gpm命令 – 提供文字模式下的滑鼠事件处理"
description: "gpm命令 – 提供文字模式下的滑鼠事件处理"
keywords: "gpm命令 – 提供文字模式下的滑鼠事件处理"
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

gpm命令是linux的虚拟控制台下的鼠标服务器，用于在虚拟控制台下实现鼠标复制和粘贴文本的功能。gpm命令需要安装并开启相关服务才能使用。

**语法格式：** gpm [参数]

**常用参数：**

-a设置加速值-b设置波特率-B设置鼠标按键次序-m指定鼠标设备文件-t设置鼠标类型

**参考实例**

安装并开启gpm服务：

```
[root@linuxcool ~]# yum install -y gpm*
[root@linuxcool ~]# systemctl start gpm
```

指定鼠标设备文件：

```
[root@linuxcool ~]# gpm -m /dev/input/mice
```

设定鼠标类型：

```
[root@linuxcool ~]# gpm -m /dev/input/mice -t ps2
```
---



title: "shapecfg命令 – 管制网络设备的流量"
description: "shapecfg命令 – 管制网络设备的流量"
keywords: "shapecfg命令 – 管制网络设备的流量"
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

shapecfg命令用于管制网络设备的流量。自Linux-2.15开始,便支持流量管制的功能。

**语法格式：** shapecfg [参数]

**常用参数：**

attach  将流量管制器与实际的网络设备结合 speed设置流量管制器的对外传输带宽

**参考实例**

管制网络设备的流量：

```
[root@linuxcool ~]# shapecfg attach [流量管制器] [网络设备]
```
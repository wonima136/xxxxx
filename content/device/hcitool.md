---



title: "hcitool命令 – 蓝牙调试工具"
description: "hcitool命令 – 蓝牙调试工具"
keywords: "hcitool命令 – 蓝牙调试工具"
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

hcitool命令用于配置蓝牙连接，并向蓝牙设备发送一些特殊命令。如果没有给定命令，或者使用了选项-h，hcitool会打印一些使用信息并退出。

**语法格式：** hcitool [参数]

**常用参数：**

(lescan扫描周围低功耗设备（BLE) scan远程扫描设备-i [设备] dev显示本地设备name从远程设备获取名称info从远程设备获取信息

**参考实例**

(扫描周围低功耗设备（BLE) ：

```
[root@linuxcool ~]# hcitool lescan
```

远程扫描设备：

```
[root@linuxcool ~]# hcitool scan
```

显示本地hci0设备：

```
[root@linuxcool ~]# hcitool -i hci0 dev
```
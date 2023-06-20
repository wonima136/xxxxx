---



title: "apmd命令 – 进阶电源管理服务程序"
description: "apmd命令 – 进阶电源管理服务程序"
keywords: "apmd命令 – 进阶电源管理服务程序"
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

apmd命令用于进阶电源管理服务程序。apmd负责BIOS进阶电源管理(APM)相关的记录，警告与管理工作。

**语法格式：** apmd [参数]

**常用参数：**

-p 记录事件百分比变化量的预设值为5，若设置值超过100，则关闭此功能 -u 将BIOS时钟设为UTC-v 记录所有的APM事件 -V 显示版本信息 -w 当电池不在充电状态时，且电池电量低于设置的百分比值，则在syslog(2)的ALERT层记录警告信息。百分比值的预设置为10，若设置为0，则关闭此功能 -W 发出警告信息给所有人

**参考实例**

记录所有的电源管理事件：

```
[root@linuxcool ~]# apmd -v
```

设置BIOS时钟：

```
[root@linuxcool ~]# apmd -utc
```
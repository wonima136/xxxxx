---



title: "sensors命令 – 检测服务器硬件信息"
description: "sensors命令 – 检测服务器硬件信息"
keywords: "sensors命令 – 检测服务器硬件信息"
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

sensors命令用于检测服务器硬件信息，例如CPU电压与温度、主板、风扇转速等数据。

**语法格式：** sensors

**常用参数：**

-A不显示每个芯片的适配器信息-c指定配置文件-F显示华氏度温度-H显示帮助信息-u输出原始信息-v显示版本信息

**参考示例**

检查当前CPU处理器得电压和温度信息：

```
[root@linuxcool ~]# sensors
coretemp-isa-0000
Core 0:      +48.0°C  (high = +87.0°C, crit = +97.0°C)
Core 1:      +46.0°C  (high = +87.0°C, crit = +97.0°C)
Core 2:      +47.0°C  (high = +87.0°C, crit = +97.0°C)
Core 3:      +46.0°C  (high = +87.0°C, crit = +97.0°C)
```
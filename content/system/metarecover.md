---



title: "metarecover命令 – 恢复软分区信息"
description: "metarecover命令 – 恢复软分区信息"
keywords: "metarecover命令 – 恢复软分区信息"
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

metarecover命令扫描指定的组件以查找软分区配置信息并重新生成配置。

**语法格式：** metarecover[参数]

**常用参数：**

**–d** 从设备上的扩展数据头中恢复元设备状态数据库中的软分区–m根据元设备状态数据库中列出的软分区，重新生成扩展区头并将其重新应用于基础设备 **–n** 实际不执行该操作，显示运行该操作可能导致的输出或错误 **–p** 根据元设备状态数据库或基础设备上的扩展区头重新生成软分区–s setname指定用于元恢复的磁盘集的名称 **–v** 详细模式，显示所做的更改

**参考实例**

基于磁盘范围标头更新元设备状态数据库：

```
[root@linuxcool ~]# metarecover -v c0t3d0s2 -p -d
```

基于不完整的软分区创建来更新元设备状态数据库：

```
[root@linuxcool ~]# metarecover -v c0t3d0s2 -p -m
```

验证软分区配置：

```
[root@linuxcool ~]# metarecover c0t3d0s2 -p
```
---



title: "vgextend命令 – 扩展卷组设备"
description: "vgextend命令 – 扩展卷组设备"
keywords: "vgextend命令 – 扩展卷组设备"
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

vgextend命令来自英文词组“volume group extend”的缩写，其功能是用于扩展卷组设备。LVM逻辑卷管理器技术具有灵活调整卷组与逻辑卷的特点，卷组可以在创建时规定物理卷的数量，亦可以在后期使用vgextend命令进行扩展。

**语法格式：** vgextend [参数] 卷组

**常用参数：**

-A设置是否自动备份-d使用调试模式-f强制进行卷组扩展而不询问-h显示帮助信息-t仅进行测试，不实际操作-v显示执行过程详细信息-y所有询问均回答自动yes

**参考示例**

将指定的物理卷加入到卷组设备中：

```
[root@linuxcool ~]# vgextend VG01 /dev/sdb
 Volume group "VG01" successfully extended
```
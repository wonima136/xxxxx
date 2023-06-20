---



title: "vgremove命令 – 删除VG卷组设备"
description: "vgremove命令 – 删除VG卷组设备"
keywords: "vgremove命令 – 删除VG卷组设备"
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

vgremove命令来自英文词组“Volume group remove”的缩写，其功能是用于删除VG卷组设备。创建LVM逻辑卷的流程顺序为PV→VG→LV，而删除LVM逻辑卷流程顺序则为LV→VG→PV，因此请在决定删除VG卷组前先确认LV逻辑卷是否已被删除，然后再执行此命令。

*当要删除的卷组上已经创建了逻辑卷时，需要进行确认删除，防止误删除数据。

**语法格式：** vgremove [参数] 卷组名称

**常用参数：**

-f强制删除而不询问-t使用测试模式-v显示执行过程详细信息

**参考示例**

删除指定的卷组设备：

```
[root@linuxcool ~]# vgremove VG01
Volume group "VG01" successfully removed
```
---



title: "lvextend命令 – 扩展逻辑卷设备"
description: "lvextend命令 – 扩展逻辑卷设备"
keywords: "lvextend命令 – 扩展逻辑卷设备"
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

lvextend命令来自英文词组“logical volume extend”的缩写，其功能是用于扩展逻辑卷设备。LVM逻辑卷管理器技术具有灵活调整卷组与逻辑卷的特点，逻辑卷设备容量可以在创建时规定，亦可以后期根据业务需求进行动态扩展或缩小。

**语法格式 :** lvextend [参数] 逻辑卷

**常用参数：**

(-f强制扩展设备而不询问-i设置扩展的条带数量-l设置逻辑卷的大小（PE个数) -L设置逻辑卷的大小（容量值）-n扩展前不进行文件系统检查-r使用fsadm调整文件系统和逻辑卷大小

**参考示例**

将指定的逻辑卷设备扩展至290M：

```
[root@linuxcool ~]# lvextend -L 290M /dev/storage/vo
Rounding size to boundary between physical extents: 292.00 MiB.
Size of logical volume storage/vo changed from 148 MiB (37 extents) to 292 MiB (73 extents).
Logical volume storage/vo successfully resized.
```
---



title: "partprobe命令 – 重读分区表信息"
description: "partprobe命令 – 重读分区表信息"
keywords: "partprobe命令 – 重读分区表信息"
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

partprobe命令来自英文词组“partition probe”的缩写，其功能是用于重读分区表信息。将磁盘分区表变化信息通知给系统内核，请求操作系统重新加载分区表，有时当我们创建或删除分区设备后，系统并不会立即生效，这时就需要使用partprobe命令在不重启的情况下重新读取分区表信息，使得新设备信息被同步。

**语法格式：** partprobe [参数] [设备名]

**常用参数：**

-d不更新内核-h显示帮助信息-l显示分区信息-s显示摘要和分区信息-t设置分区类型-v显示版本信息

**参考示例**

重读系统中全部设备的分区表信息：

```
[root@linuxcool ~]# partprobe
```

重读系统中指定设备的分区表信息：

```
[root@linuxcool ~]# partprobe /dev/sda
```
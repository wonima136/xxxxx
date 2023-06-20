---



title: "convertquota命令 – 替换旧的磁盘额数据文件"
description: "convertquota命令 – 替换旧的磁盘额数据文件"
keywords: "convertquota命令 – 替换旧的磁盘额数据文件"
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

(convertquota命令用于将老的磁盘额数据文件（“quota.user”和“quota.group”) 转换为新格式的文件（“quota.user”和“quota.group”）。

**语法格式：** convertquota [参数]

**常用参数：**

-u仅转换用户磁盘配额数据文件-g仅转换组磁盘配额数据文件-f将老的磁盘配额文件转换为新的格式-e将新的文件格式从大字节序换为小字节序

**参考实例**

使用convertquota指令转换指定文件系统/data的磁盘配额数据文件：

```
[root@linuxcool ~]# convertquota -u /data
```
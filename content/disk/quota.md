---



title: "quota命令 – 显示磁盘已使用的空间与限制"
description: "quota命令 – 显示磁盘已使用的空间与限制"
keywords: "quota命令 – 显示磁盘已使用的空间与限制"
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

quota命令用于显示磁盘已使用的空间与限制。执行quota命令可查询磁盘空间的限制，并得知已使用多少空间。

**语法参数：** quota [参数]

**常用参数：**

-g 列出群组的磁盘空间限制-q 简明列表，只列出超过限制的部分 -u 列出用户的磁盘空间限制-v 显示该用户或群组，在所有挂入系统的存储设备的空间限制-V 显示版本信息

**参考实例**

(显示目前执行者（root ) 的 quota 值：

```
[root@linuxcool ~]# quota -guvs
```

显示 test 这个使用者的 quota 值：

```
[root@linuxcool ~]# quota -uvs test
```
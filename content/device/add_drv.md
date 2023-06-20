---



title: "add_drv命令 – 添加一个新的设备驱动程序到系统中"
description: "add_drv命令 – 添加一个新的设备驱动程序到系统中"
keywords: "add_drv命令 – 添加一个新的设备驱动程序到系统中"
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

add_drv命令用于通知系统新安装的设备驱动程序。系统中的每个设备都有一个与之相关的名称。这个名称由设备的name属性表示。同样，设备也可能有一个与之相关联的驱动程序名称列表。这个列表由设备的兼容属性表示。

**语法格式：** add_drv [参数]

**常用参数：**

-v显示详细信息-p指定设备的安全策略-u将驱动程序添加到系统里

**参考实例**

使用add_drv添加buffer驱动：

```
[root@linuxcool ~]# add_drv buffer
```

使用add_drv添加buffer驱动并显示详细的输出信息：

```
[root@linuxcool ~]# add_drv -v buffer
```

将驱动程序添加到系统：

```
[root@linuxcool ~]# add_drv -u buffer
```
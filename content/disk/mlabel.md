---



title: "mlabel命令 – 设定磁盘的标签"
description: "mlabel命令 – 设定磁盘的标签"
keywords: "mlabel命令 – 设定磁盘的标签"
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

mlabel命令用于设定磁盘的标签 (Label)。

如果磁盘上设定过标签，mlabel 会将他显示给使用者。如果没有指定新标签并且没有指定 c 或 s 选项，mlabel 会提示使用者输入新的标签。如果直接按下 Enter ，就会将原本的标签删除。

**语法格式：** mlabel [参数] [设备]

**常用参数：**

-v更多的讯息-c清除原有的标签，不出现提示讯息-s显示目前的标签，不出现提示讯息

**参考实例**

将 A 盘的标签更改为 newlabel：

```
[root@linuxcool ~]# mlabel a:newlabel
```
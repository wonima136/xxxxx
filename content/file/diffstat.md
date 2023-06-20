---



title: "diffstat命令 – 显示统计数字"
description: "diffstat命令 – 显示统计数字"
keywords: "diffstat命令 – 显示统计数字"
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

diffstat命令用于读取diff的输出结果，然后统计各文件的插入，删除，修改等差异计量 。

**语法格式：** diffstat [参数]

**常用参数：**

-n指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名 -p与-n参数相同，但此处的<文件名长度>包括了文件的路径 -w 指定输出时栏位的宽度 -V  显示版本信息

**参考实例**

将目录”test1″和”test2″下的同名文件”testf.txt”使用diff指令进行比较。然后使用diffstat指令对结果进行统计显示：

```
[root@linuxcool ~]# diff test1 test2 | diffstat
```
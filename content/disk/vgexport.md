---



title: "vgexport命令 – 导出卷组"
description: "vgexport命令 – 导出卷组"
keywords: "vgexport命令 – 导出卷组"
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

vgexport命令的作用是可以导出卷组。

vgexport命令允许设置系统未知的非活动卷组名称。 也可以将该卷组中的所有物理卷移动到不同的系统中，以便以后使用vgimport命令导入。

**语法格式：** vgexport [参数] [卷组名]

**常用参数：**

-a导出所有活动的卷组-p不从系统中中将卷组相关的信息去掉-s向映射文件中添加卷组标识符 (VGID)-m产生一个map文件-v显示详细过程

**参考实例**

导出卷组vgl：

```
[root@linuxcool ~]# vgexport linuxcool_vg
```

导出所有活动卷组：

```
[root@linuxcool ~]# vgexport -a
```

导出带有map文件的卷组：

```
[root@linuxcool ~]# vgexport -s -p -m /tmp/vglinuxcool.map /dev/vglinuxcool
```
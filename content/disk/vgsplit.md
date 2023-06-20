---



title: "vgsplit命令 – 将物理卷移动到新的或现有的卷组中"
description: "vgsplit命令 – 将物理卷移动到新的或现有的卷组中"
keywords: "vgsplit命令 – 将物理卷移动到新的或现有的卷组中"
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

(vgsplit命令的作用是可以从源卷组（物理卷) 移动到新的或现有的卷组中。

使用vgsplit命令将一个或多个物理卷时，移动的物理卷可以指定物理卷路径，也可以通过-n逻辑卷名指定，但在这种情况下，只移动指定逻辑卷底层的物理卷。

如果目标卷组名称确实存在，将在移动物理卷之前检查它是否与源卷组名称冲突。 不能在卷组之间分割逻辑卷。 vgsplit命令只移动完整的物理卷。每个现有的逻辑卷必须完全位于构成源卷组或目标卷组的物理卷上。

**语法格式：** vgsplit [参数] [源卷组名] [目标卷组名] [物理卷路径]

**常用参数：**

-d启用调试模式-v显示详细信息-l<最大逻辑卷数>指定卷组中最大的逻辑卷数-- -vgmeladatacopies<数量>指定副本数量-M<1|2>指定元数据类型-n<逻辑卷名>指定逻辑卷的名称-A<y|n>是否自动备份-t启用测试模式-p<最大物理卷数>指定卷组中最大的物理卷数

**参考实例**

将卷组vg1拆分为两个，生成新卷组vg2，该卷组成员为/dev/sda3：

```
[root@linuxcool ~]# vgsplit vg1 vg2 /dev/sda3
```

指定卷组中最大的物理卷数：

```
[root@linuxcool ~]# vgsplit -p 5 vg1 vg2 /dev/sda3
```

将/dev/sdg2与dev分离，添加到一个名为“ design”的新卷组：

```
[root@linuxcool ~]# vgsplit dev design /dev/sdg2
```
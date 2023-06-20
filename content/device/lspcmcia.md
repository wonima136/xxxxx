---



title: "lspcmcia命令 – 显示扩展的PCMCIA调试信息"
description: "lspcmcia命令 – 显示扩展的PCMCIA调试信息"
keywords: "lspcmcia命令 – 显示扩展的PCMCIA调试信息"
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

lspcmcia命令的作用是可以显示扩展的PCMCIA调试信息，是pccardctl ls命令的别名。

pccardctl命令用于监视和控制PCMCIA插槽的状态。 如果指定了插槽编号，则该命令只应用于一个插槽; 否则，所有插槽都将受到影响。 如果它是由非root用户执行，那么只有参考信息命令可访问。

**语法格式：** lspcmcia [参数] [插槽]

**常用参数：**

-v显示详细信息-vv进一步提高详细程度

**参考实例**

显示扩展的PCMCIA调试信息：

```
[root@linuxcool ~]# lspcmcia
Socket 0 Bridge: [linuxcool_cardbus] (bus ID: 0000:03:01.0)
```

显示扩展的PCMCIA调试详细信息：

```
[root@linuxcool ~]# lspcmcia -v 0
```

显示更详细的扩展的PCMCIA调试信息：

```
[root@linuxcool ~]# lspcmcia -vv 0
```
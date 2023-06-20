---



title: "applypatch命令 – 安装或卸载补丁"
description: "applypatch命令 – 安装或卸载补丁"
keywords: "applypatch命令 – 安装或卸载补丁"
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

applypatch 命令应用由 makepatch 程序生成的补丁包，它将执行以下操作，首先，它将广泛验证补丁包是否完整，是否在传输过程中被破坏；然后，它将应用一些启发式的方法来验证应用补丁的目录中是否包含了预期来源；如果检测到损坏或验证错误，applypatch会退出而不做更改。

**语法格式：** applypatch [参数]

**常用参数：**

-check检查，但不执行-retain打补丁后保留原文件-force验证失败后继续-quiet安装无信息显示-verbose安装显示详细信息

**参考实例**

检查，但不执行：

```
[root@linuxcool ~]# applypatch -check
```

打补丁后保留原文件：

```
[root@linuxcool ~]# applypatch -retain
```

验证失败后继续：

```
[root@linuxcool ~]# applypatch -force
```
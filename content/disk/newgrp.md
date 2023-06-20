---



title: "newgrp命令 – 登入另一个群组"
description: "newgrp命令 – 登入另一个群组"
keywords: "newgrp命令 – 登入另一个群组"
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

newgrp命令类的英文全称为“new group”,该命令类似login指令，当它是以相同的帐号，另一个群组名称，再次登入系统。欲使用newgrp指令切换群组，您必须是该群组的用户，否则将无法登入指定的群组。

单一用户要同时隶属多个群组，需利用交替用户的设置。若不指定群组名称，则newgrp指令会登入该用户名称的预设群组。

**语法格式：** newgrp [参数]

**常用参数：**

--help 在线帮助 --vesion 显示版本信息

**参考实例**

将群组切换到linuxcool组 ：

```
[root@linuxcool ~]# newgrp linuxcool
```
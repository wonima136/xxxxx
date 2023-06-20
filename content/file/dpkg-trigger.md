---



title: "dpkg-trigger命令 – 软件包触发器"
description: "dpkg-trigger命令 – 软件包触发器"
keywords: "dpkg-trigger命令 – 软件包触发器"
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

dpkg-trigger命令是Debian linux下的软件包触发器。 dpkg-trigger命令只能应用在维护者脚本中，或者必须使用“- -- by-package”参数。

**语法格式 :** dpkg-trigger [参数] [触发器]

**常用参数：**

-- -check-supported检查运行的dpkg是否支持触发器，返回值为0，则支持触发器-- -help显示帮助信息-- -admindir=<目录>设置dpkg数据库所在的目录-- -no-act仅用于测试，不执行任何操作-- -by-package=<软件包>覆盖触发器等待者

由于 dpkg-trigger 只能运行在维护者脚本程序中，直接在命令行运行会给出报错信息。如下参考实例。

**参考实例**

在命令行中运行dpkg-trigger：

```
[root@linuxcool ~]# dpkg-trigger nowait
dpkg-trigger: 错误: 必须从维护者脚本中调用(或者通过 --by-package 选项)
```
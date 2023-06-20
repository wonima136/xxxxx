---



title: "mdel命令 – 删除 MSDOS 格式的档案"
description: "mdel命令 – 删除 MSDOS 格式的档案"
keywords: "mdel命令 – 删除 MSDOS 格式的档案"
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

mdel为mtools工具命令，模拟MS-DOS的deltree命令，可删除MS-D0S文件系统中的目录及目录下所有子目录与文件，在删除只读之前会有提示信息产生。

**语法格式：** mdel [参数]

**常用参数：**

-v  显示更多的信息

**参考实例**

将 A 槽磁片根目录中的autoexec.bat删除：

```
[root@linuxcool ~]# mdel a:autoexec.bat
```

将 B 槽磁片根目录中的demo.bat删除：

```
[root@linuxcool ~]# mdel b:demo.bat
```
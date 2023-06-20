---



title: "ar命令 – 建立或修改备存文件"
description: "ar命令 – 建立或修改备存文件"
keywords: "ar命令 – 建立或修改备存文件"
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

ar命令用于建立或修改备存文件，或是从备存文件中抽取文件。可集合许多文件，成为单一的备存文件。在备存文件中，所有成员文件皆保有原来的属性与权限。

**语法格式：** ar [参数]

**常用参数：**

-d  删除备存文件中的成员文件  -m  变更成员文件在备存文件中的次序  -p 显示备存文件中的成员文件内容  -q  将文件附加在备存文件末端  -r  将文件插入备存文件中  -t 显示备存文件中所包含的文件 -x  自备存文件中取出成员文件

**参考实例**

打包a.c b.c文件：

```
[root@linuxcool ~]# ar rv one.bak a.c b.c
```

(打包以.c结尾的文件（打包多个文件) ：

```
[root@linuxcool ~]# ar rv two.bak *.c
```

显示打包文件的内容：

```
[root@linuxcool ~]# ar t two.bak
```

删除打包文件的成员文件：

```
[root@linuxcool ~]# ar d two.bak a.c b.c c.c
```
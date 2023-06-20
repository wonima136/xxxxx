---



title: "tzselect命令 – 查看设置时区"
description: "tzselect命令 – 查看设置时区"
keywords: "tzselect命令 – 查看设置时区"
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

tzselect命令在调用时不需要任何参数，它显示了一个由十几个地理区域组成的列表，人们可以粗略地将其视为大陆。按编号选择一个地理区域后，会显示这个区域的国家和城市列表。

**语法格式：** tzselect [参数]

**常用参数：**

(-c COORD根据自定义数值设置时区-n LIMIT当使用-c时，显示大多数LIMIT位置（默认为10) 

**参考实例**

按次序查看并设置时区：

```
[root@linuxcool ~]# tzselect
```

自定义设置时区：

```
[root@linuxcool ~]# tzselect -c -35-058
```

当使用-c时，显示LIMIT数量：

```
[root@linuxcool ~]# tzselect -c -35-058 -n 5
```
---



title: "fold命令 – 限制文件列宽"
description: "fold命令 – 限制文件列宽"
keywords: "fold命令 – 限制文件列宽"
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

fold命令会从指定的文件里读取内容，将超过限定列宽的列加入增列字符后，输出到标准输出设备。若不指定任何文件名称，或是所给予的文件名为”-“，则fold指令会从标准输入设备读取数据。

**语法格式：** fold [参数] [文件]

**常用参数：**

-b以Byte为单位计算列宽，而非采用行数编号为单位 -s以空格字符作为换列点 -w设置每列的最大行数 --help在线帮助 --version显示版本信息

**参考实例**

将一个名为testfile 的文件的行折叠成宽度为30：

```
[root@linuxcool ~]# fold -w 30 file
```

以空格字符作为换列点：

```
[root@linuxcool ~]# fold -s file
```

以Byte为单位计算列宽，而非采用行数编号为单位：

```
[root@linuxcool ~]# fold -b file
```
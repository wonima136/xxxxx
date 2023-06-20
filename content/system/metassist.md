---



title: "metassist命令 – 支持Solaris Volume Manager的自动卷创建实用程序"
description: "metassist命令 – 支持Solaris Volume Manager的自动卷创建实用程序"
keywords: "metassist命令 – 支持Solaris Volume Manager的自动卷创建实用程序"
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

metassist命令通过自动化提供使用常见Solaris卷管理器任务的帮助。

**语法格式：** metassist[参数]

**常用参数：**

**–c** 输出将执行指定或生成的卷配置的命令脚本–d输出满足指定或生成的卷请求的卷配置 **–f** 指定该卷在故障后是否应支持自动组件更换–n name指定新卷的名称–pn指定存储卷所需的路径数–vvalue指定详细程度

**参考实例**

在控制器1和控制器2的可用设备上创建一个双向36Gb镜像。它将卷放置在磁盘集mirrorset中：

```
[root@linuxcool ~]# metassist create -r 2 -a c1,c2 -s mirrorset -S 36GB
```

创建具有附加容错功能的镜像：

```
[root@linuxcool ~]# metassist create -f -r 2 -a c1,c2 -s mirrorset -S 36GB
```

确定并实现满足请求文件中指定的请求的配置：

```
[root@linuxcool ~]# metassist create -F request.xml
```

确定配置并将其保存在volume-config文件中：

```
[root@linuxcool ~]# metassist create -d -F request.xml > volume-config
```

实现给定的vol-config：

```
[root@linuxcool ~]# metassist create -F config.xml
```

将给定的vol-config转换为Shell脚本：

```
[root@linuxcool ~]# metassist create -c -F config.xml > setupvols.sh
```
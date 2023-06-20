---



title: "metaclear命令 – 删除活动的元设备和热备用池"
description: "metaclear命令 – 删除活动的元设备和热备用池"
keywords: "metaclear命令 – 删除活动的元设备和热备用池"
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

metaclear命令删除指定的metadevice或hot_spare_pool，或清除指定组件中的所有软分区。一旦元设备或热备用池被删除，必须使用metainit重新创建它，然后才能再次使用它。当前正在使用(打开)的任何元组件都不能删除。

**语法格式：** metaclear[参数]

**常用参数：**

(**–a** 删除–s或默认情况下的本地集中的所有元设备和已配置的热备用池–f删除（强制) 包含处于错误状态的子组件的元设备 **–h** 显示使用情况消息 **–p** 从指定的元设备或组件中删除（清除）所有软分区 **–r** 递归删除指定的元设备和热备用池，但不删除其他设备所依赖的元设备

**参考实例**

删除名为d10的元设备：

```
[root@linuxcool ~]＃metaclear / dev / md / dsk / d10
```

删除具有子镜像处于错误状态的镜像mymirror：

```
[root@linuxcool ~]＃metaclear -f mymirror
```

清除切片c2t3d5s2上的所有软分区，如果这些分区未被其他元设备使用或未打开：

```
[root@linuxcool ~]＃metaclear -p c2t3d5s2
```
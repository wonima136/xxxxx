---



title: "ifstat命令 – 统计网络信息"
description: "ifstat命令 – 统计网络信息"
keywords: "ifstat命令 – 统计网络信息"
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

ifstat命令就像iostat/vmstat描述其它的系统状况一样，是一个统计网络接口活动状态的工具。ifstat工具系统中并不默认安装，需要自己下载源码包，重新编译安装，使用过程相对比较简单。

**语法格式：** ifstat [参数]

**常用参数：**

-p优化打印-a忽略历史记录-e显示错误信息-r重置历史记录

**参考实例**

使用-p参数打印网络接口流量信息：

```
[root@linuxcool ~]# ifstat -p
```

使用-a参数忽略历史记录：

```
[root@linuxcool ~]# ifstat -a
```

使用-e参数显示网络接口错误信息：

```
[root@linuxcool ~]# ifstat -e
```
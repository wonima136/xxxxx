---



title: "ifup命令 – 激活网络接口"
description: "ifup命令 – 激活网络接口"
keywords: "ifup命令 – 激活网络接口"
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

ifup命令来自英文词组“interface up”的缩写，其功能是用于激活网络接口。ifup命令会去读取Linux系统中网络接口服务目录下的配置文件，随后根据配置文件的内容来激活对应的网络接口，这样就能实现对指定网卡启用的效果了。

**语法格式：** ifup 网络接口

**常用参数：**

网络接口设置要启用的网络接口名称

**参考示例**

激活指定的网络接口：

```
[root@linuxcool ~]# ifup eth0
```
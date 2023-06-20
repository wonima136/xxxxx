---



title: "ifdown命令 – 禁用网络接口"
description: "ifdown命令 – 禁用网络接口"
keywords: "ifdown命令 – 禁用网络接口"
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

ifdown命令来自英文词组“interface down”的缩写，其功能是用于禁用网络接口。ifdown命令会去读取Linux系统中网络接口服务目录下的配置文件，随后根据配置文件的内容来关闭对应的网络接口，这样就能实现对指定网卡停用的效果了。

**语法格式：** ifdown 网络接口

**常用参数：**

网络接口设置禁用的网络接口名称

**参考示例**

禁用指定的网络接口：

```
[root@linuxcool ~]# ifdown eth0
```
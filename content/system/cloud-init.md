---



title: "cloud-init命令 – 跨平台云实例初始化工具"
description: "cloud-init命令 – 跨平台云实例初始化工具"
keywords: "cloud-init命令 – 跨平台云实例初始化工具"
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

cloud-init命令是用于跨平台云实例初始化的行业标准多分布式方法，所有主要的公共云提供商、私有云基础设施的供应系统和裸机安装都支持该方法。

**语法格式：** cloud-init [参数]

**常用参数：**

init初始化cloud-init并执行初始化模块modules使用给定的配置键激活模块single单机运行status报告云启动状态或等待完成clean删除日志和工件，以便重新运行cloud-initcollect-logs收集并打包所有云计算调试信息devel运行开发工具dhclient-hook运行dhclient钩子记录网络信息

**参考实例**

初始化cloud-init并执行初始化模块：

```
[root@linuxcool ~]# cloud-init init
```

使用给定的配置键激活模块：

```
[root@linuxcool ~]# cloud-init modules
```

报告云启动状态或等待完成：

```
[root@linuxcool ~]# cloud-init status
```

删除日志和工件，以便重新运行cloud-init：

```
[root@linuxcool ~]# cloud-init clean
```
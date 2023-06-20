---



title: "rcconf命令 – Linux下运行等级服务配置工具"
description: "rcconf命令 – Linux下运行等级服务配置工具"
keywords: "rcconf命令 – Linux下运行等级服务配置工具"
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

rcconf命令是Debian Linux下的运行等级服务配置工具，用以设置在特定的运行等级下系统服务的启动配置。

**语法格式：** rcconf [参数]

**常用选项：**

--help打印帮助信息 --dialog 使用对话命令显示菜单 --notermcheck 不按照终端属性来设置窗口尺寸

**参考实例**

使用对话命令显示菜单：

```
[root@linuxcool ~]# rcconf --dialog
```

不按照终端属性来设置窗口尺寸：

```
[root@linuxcool ~]# rcconf --notermcheck
```

获取帮助信息：

```
[root@linuxcool ~]# rcconf --help
```
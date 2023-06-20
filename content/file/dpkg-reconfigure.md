---



title: "dpkg-reconfigure命令 – 重新配置已安装的软件包"
description: "dpkg-reconfigure命令 – 重新配置已安装的软件包"
keywords: "dpkg-reconfigure命令 – 重新配置已安装的软件包"
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

dpkg-reconfigure命令是Debian linux中重新配置已经安装过的软件包，可以将一个或者多个已安装的软件包传递给此指令，它将询问软件初次安装后的配置问题。

当用户需要再次对软件包配置的时候，可以使用dpkg-reconfigure命令来对指定的软件包进行配置。

**语法格式:** dpkg-reconfigure [参数] [软件包]

**常用参数：**

-a重新配置所有的软件包-u仅显示未提过的问题-- -default-priority使用默认优先级-- -force强制执行操作-- -no-reload不要轻易的重装模板-f指定 debconf 前端界面-p指定要显示的问题的最优先级-- -terse开启简要模式

**参考实例**

查询配置“bash”软件包：

```
[root@linuxcool ~]# dpkg-reconfigure bash
```

重配置所有软件包：

```
[root@linuxcool ~]# dpkg-reconfigure -a
```
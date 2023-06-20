---



title: "which命令 – 查找命令文件"
description: "which命令 – 查找命令文件"
keywords: "which命令 – 查找命令文件"
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

(which命令的功能是用于查找命令文件，能够快速搜索二进制程序所对应的位置。如果我们既不关心同名文件（find与locate) ，也不关心命令所对应的源代码和帮助文件（whereis），仅仅是想找到命令本身所在的路径，那么这个which命令就太合适了。

**语法格式：** which [参数] 文件名

**常用参数：**

(-a显示PATH变量中所有匹配的可执行文件-n设置文件名长度（不含路径) -p设置文件名长度（含路径）-V显示版本信息-w 设置输出时栏位的宽度--help显示帮助信息--read-functions从标准输入中读取Shell函数定义--show-tilde使用波浪线代替路径中的家目录--skip-dot跳过PATH变量中以点号开头的目录

**参考示例**

查找某个指定命令文件所在位置：

```
[root@linuxcool ~]# which reboot
/usr/sbin/reboot
```

查找多个指定命令文件所在位置：

```
[root@linuxcool ~]# which shutdown poweroff
/usr/sbin/shutdown
/usr/sbin/poweroff
```
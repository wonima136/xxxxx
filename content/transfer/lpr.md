---



title: "lpr命令 – 将文件放入打印队列等待打印"
description: "lpr命令 – 将文件放入打印队列等待打印"
keywords: "lpr命令 – 将文件放入打印队列等待打印"
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

lpr命令用于将文件发送给指定打印机进行打印，如果不指定目标打印机，则使用默认打印机。

**语法格式：** lpr [参数]

**常用参数：**

-E 与打印服务器连接时强制使用加密 -H 指定可选的打印服务器 -C 指定打印任务的名称 -P 指定接受打印任务的目标打印机 -U 指定可选的用户名 -# 指定打印的份数 -h 关闭banner打印 -m 打印完成后发送E-mail -r 打印完成后删除文件

**参考实例**

将man1和man2送到打印机lp进行打印：

```
[root@linuxcool ~]# lpr -P lp man1 man2
```

在名为mailroom的打印机上打印report文件 ：

```
[root@linuxcool ~]# lpr -P mailroom report
```

在名为laser1的打印机上打印3个文件 ：

```
[root@linuxcool ~]# lpr -P laser1 file_1.txt file_2.txt file_3.txt
```
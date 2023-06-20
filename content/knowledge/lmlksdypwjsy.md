---



title: "Linux LP命令，快速打印PDF文件，实用技巧分享"
description: "Linux LP命令，快速打印PDF文件，实用技巧分享"
keywords: "Linux LP命令，快速打印PDF文件，实用技巧分享"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677996362368_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，我们常常需要将PDF文件打印出来 **linux lp命令 pdf文件**，这时就需要用到lp命令。本文将详细介绍如何使用lp命令打印PDF文件，并分享一些实用技巧和注意事项。

一、LP命令简介

LP是Linux系统下的一个命令，用于控制打印机的操作。通过LP命令，我们可以管理系统中的打印作业，包括打印队列、打印作业状态等。

二、如何使用LP命令打印PDF文件

1. 查看系统中可用的打印机

在使用LP命令之前，我们需要确定系统中可用的打印机。可以使用以下命令查看：

$ lpstat -p -d

![linux lp命令 pdf文件_linux文件解压命令_linux下载文件到本地命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996362368_0.png)

其中，“-p”选项表示列出所有打印机的状态，“-d”选项表示显示默认打印机。

2. 打印PDF文件

使用LP命令打印PDF文件非常简单，只需执行以下命令即可：

$ lp filename.pdf

其中，“filename.pdf”为要打印的PDF文件名。

3. 指定打印机和打印选项

如果系统中有多个打印机，我们可以使用“-d”选项来指定要使用的打印机：

$ lp -d printer_name filename.pdf

其中，“printer_name”为要使用的打印机名称。

我们还可以使用“-o”选项来指定一些其他的打印选项。例如，要双面打印并设置边距为0.5英寸，可以执行以下命令：

$ lp -o sides=two-sided-long-edge -o page-border=top,bottom,left,right -o page-left=36 -o page-right=36 -o page-top=36 -o page-bottom=36 filename.pdf

其中，“sides=two-sided-long-edge”表示双面长边翻页，“page-border=top,bottom,left,right”表示设置页边距，“page-left=36”、“page-right=36”、“page-top=36”、“page-bottom=36”分别表示设置左、右、上、下边距为0.5英寸。

三、实用技巧和注意事项

1. 打印前预览

![linux下载文件到本地命令_linux文件解压命令_linux lp命令 pdf文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1677996362368_1.jpg)

在执行LP命令之前，我们可以先通过PDF阅读器对要打印的PDF文件进行预览，以确保要输出的内容和格式正确无误。例如，在Ubuntu系统中 **linux lp命令 pdf文件**，我们可以使用Evince PDF阅读器进行预览：

$ evince filename.pdf

2. 取消已经提交的打印作业

如果不小心提交了错误的打印作业或者想要取消已经提交的打印作业linux安装教程，可以使用以下命令取消：

$ cancel job_id

其中linux 安装，“job_id”为要取消的作业ID。如果不知道作业ID，可以通过“lpq”命令查看当前队列中所有作业：

$ lpq

3. 打开/关闭共享模式

(如果你想要在局域网内共享一台Linux服务器上连接的USB或LPT接口类型的本地设备（比如说USB或LPT接口类型的热敏票据式收据小票POS机) ，那么你可以执行以下操作：

开启共享模式：sudo /etc/init.d/cups start

关闭共享模式：sudo /etc/init.d/cups stop

4. 设置默认打印机

如果有多台不同型号或品牌不同的网络共享型号Linux服务器连接后端设备连接到同一个Linux服务器时,你需要设置默认连接设备以便于更方便地进行操作和管理。你可以通过以下步骤设置默认连接设备：

1) 执行以下命令查看可用设备：

sudo lpinfo --make-and-model “USB” --list

2) 执行以下命令将指定设备设置为默认：

sudo lpadmin -d 设备名

例如：

sudo lpadmin -d HP_LaserJet_1018

四、总结

本文介绍了如何在Linux系统下使用LP命令打印PDF文件，并分享了一些实用技巧和注意事项。通过学习本文内容，相信大家能够更好地掌握LP命令，在工作和学习中更加高效地管理和处理相关任务。
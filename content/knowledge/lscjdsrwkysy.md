---



title: "Linux上创建定时任务可以使用crontab吗？百度一下了"
description: "Linux上创建定时任务可以使用crontab吗？百度一下了"
keywords: "Linux上创建定时任务可以使用crontab吗？百度一下了"
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

在Linux上创建定时任务可以使用crontab **linux定时任务命令**，我的机器是自带的，安装应当也不会很麻烦如何安装linux，具体的百度一下了。

首先来看一下crontab的常用命令

crontab-e[user]使用默认的文本编辑器打开指定用户的任务列表文件，user是要打开的用户的文件

crontab-l[user]列举当前运行的任务，相当于查看任务列表文件的内容

我们通常的用法就是：

(第一步：crontab-e(打卡任务列表) 

第二步：假如使用的是Vi的话按i或则e编辑文件，光标移到最下边添加一行

第三步：esc **linux定时任务命令**，:wq保存并退出

我们要添加的那一行的格式为：

分时日月周命令

分的取值范围为0-59

时的取值范围为0-23

日的取值范围为1-31

月的取值范围为1-12

(周的取值范围为0-6（0是周末) 

命令就是我们要定时执行的命令了，命令中若果包含路径的话记得要使用绝对路径。

据悉还有*和/两个通用符号

*表示所有可能的取值linux命令行和shell脚本编程宝典，如：

5****cmd当分钟数为5时执行命令，即只考虑分钟数，其他的不考虑，由于其他的使用了*表示所有取值均满足条件

/表示每，拿来指定命令执行的频度，如：

*/5*****cmd每5分钟执行一次命令

两个结合上去用：

510*/2**cmd每三天执行一次命令，而且执行的时间为10点5分

愈加具体的可以参考：
---



title: "如何在Linux系统中创建Linux计划任务命令？"
description: "如何在Linux系统中创建Linux计划任务命令？"
keywords: "如何在Linux系统中创建Linux计划任务命令？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1677710689251_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

**linux 计划任务命令** 是 Linux 系统的一个重要组成部分，它可以帮助用户自动完成某些任务，比如在特定的时间自动运行特定的程序、在每天固定的时间备份文件等。在 Linux 中redflag linux，有很多工具可以用来创建和管理计划任务linux是什么，其中最常用的是 Crontab 命令。

Crontab 命令是 Linux 系统上最常用的计划任务工具，它可以让用户执行某些命令或者程序在特定的时间点，而不需要手动去执行。Crontab 命令非常强大 **linux 计划任务命令**，可以非常方便地创建、修改和删除计划任务 **linux 计划任务命令**，也可以让用户查看当前正在运行的计划任务列表。

使用 Crontab 命令之前，首先要了解它的一些选项。Crontab 命令包含下列几个选项：-e用来编辑当前用户的 Crontab 文件；-l用来查看当前用户 Crontab 文件中包含的所有计划任务；-r用来删除当前用户 Crontab 文件中包含的所有计划任务。

![linux命令windows命令_linux 计划任务命令_linux定时关机命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677710689251_0.png)

(使用 Crontab 命令来创建一个新的计划任务也很容易。要创建一个新的计划任务，只需要使用-e选项来编辑当前用户的 Cron 文件即可。Cron 文件中包含了一些特殊的语法格式：每一行代表一个独立的计划任务；每一行都必须包含 6 个字段：分、时、日、月、周、命令字段。前 5 个字段代表这个计划将会在何时执行（如何时间、何日何月何周何年) ；最后一个字段是要执行的命令。

例如要在每天 8 点 10 分执行/usr/bin/backup.sh 脚本：

10 8*/usr/bin/backup.sh

这样就可地创建出一个新的 Cron 作业。此外还可使用通配符*代表“所有”或“不关心”这样的意思来方便地创建复杂作业。例如想要在星期一到星期五上午 9 点 15 分执行/usr/bin/backup.sh 脚本：

15 9 **1-5/usr/bin/backup.sh

上述命名就会在星期一到星期五上午 9 点 15 分执行/usr/bin/backup.sh 脚本。

Crontab 还可使用@reboot 选项来重新启动之后立即执行相应作业。例如要重新启动之后立即执行/usr/bin/backup.sh 脚本:

@reboot /usr/bin/backup.sh

![linux定时关机命令_linux命令windows命令_linux 计划任务命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1677710689251_1.png)

Crontab 命令也可使用-r选项来删除当前正在运行中的作业队列中特定作业队列。例如想要删除正在运行中作业队列中 ID 为 12345 的作业队列:

此外 Crontab 还可使用-l选项来查看当前正在运行中作业队列中包含的作业队列信息:

Linux 还内置了很多额外工具可帮助用户简化 Cron 作业管理流程。例如 anacrontab 是一种特殊 Cron 作业工具；at 和 batch 命名是内都实现了单独作业队列。
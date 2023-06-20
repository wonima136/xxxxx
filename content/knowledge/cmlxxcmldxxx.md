---



title: "cron命令选项crontab命令的选项选项命令"
description: "cron命令选项crontab命令的选项选项命令"
keywords: "cron命令选项crontab命令的选项选项命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679522564860_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1、cron和crontab简介

cron是linux系统主要的调度进程，可以在无人干预的情况下执行命令。crontab命令容许用户编辑、删除、提交相应的作业，每一个用户都可以有自己的crontab文件来保存调度信息，你可以使用它每隔一小时、每隔一周或则一周四次来执行任意一个Shell脚本或则命令。

2、crontab的格式

(crontab的格式为：分时日月礼拜命令（中间用空格隔开) 。

crontab文件的条目是从右边读起的，第一列是分，以这种推linux驱动下载，最后一列是须要执行的命令。

每一列称为crontab的一个域，在这种域中，可以用-来联接一个时间范围，比如礼拜一到礼拜五，可以用1-5来表示。单个时间点可以用，号分隔，例如礼拜一和礼拜四，这么可以表示为1，4。假如某个表示时间的域没有非常限制，可以用*号表示。每一个时间条目包含5个域，用空格隔开。

例如我希望每晚白天21：30运行bin目录下的cleanup.sh文件linux论坛，这么该命令就应当为：

(3021***/app/bin/cleanup.sh（注意：因为不须要限定日期、月份、星期，所以日期、月份和礼拜域用*号表示) 

例如我希望每月得1、10、20的00：00运行backup.sh文件，这么命令应当为：

(00001，10，20**/app/bin/backup.sh（注意：因为不须要限定月份和礼拜 **linux下计划任务命令是**，所以月份和礼拜域用*号表示) 

3、crontab命令的选项

crontab命令的通常方式为：crontab[-uuser]-e-l-r

-u用户名(user)

(-e编辑crontab文件（edit) 

(-l列举crontab文件的内容（list) 

(-r删掉crontab文件（remove) 

若果是使用当前用户执行crontab命令，便不须要使用-u选项，由于crontab命令会手动辨识当前用户。

4、创建一个新的crontab文件

![linux下计划任务命令是_linux下解压命令_linux下查看jdk版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679522564860_0.png)

假如希望系统手动执行相应的Shell脚本，须要向调度进程cron递交一个crontab文件，首先须要让系统晓得该脚本的路径和环境变量，所以创建一个crontab文件的步骤如下：

(（1) 设置环境变量EDITOR

cron进程按照它来确定使用那个编辑器编辑crontab文件，假如使用vi来编辑crontab文件，这么在$HOME目录下的.profile文件中加入一行：

EDITOR=vi；exportEDITOR

![linux下查看jdk版本命令_linux下计划任务命令是_linux下解压命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679522564860_1.png)

(（2) 新建一个crontab文件，命名为usercron，在该文件中输入以下内容：

#每晚白天21：30运行bin目录下的cleanup.sh文件

3021***/app/bin/cleanup.sh

编辑完成后保存退出。

(（3) 递交刚才创建的crontab文件

$crontabusercron

此时 **linux下计划任务命令是**，usercron文件早已递交给cron进程，它将每晚白天21：30运行一次。
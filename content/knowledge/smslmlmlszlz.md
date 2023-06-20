---



title: "什么是Linux命令?命令是在Linux终端让你在特定时间和日期安排一次性工作"
description: "什么是Linux命令?命令是在Linux终端让你在特定时间和日期安排一次性工作"
keywords: "什么是Linux命令?命令是在Linux终端让你在特定时间和日期安排一次性工作"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679551521654_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

导读

at命令是一种在特定时间和日期安排一次性任务的Linux终端技巧。

计算机擅长手动化，但不是每位人都晓得怎样使手动化工作。不过，才能在特定的时间为笔记本安排一个任务，之后忘掉它，这确实是一种享受。其实你有一个文件要在特定的时间上传或下载，或则你须要处理一批还不存在但可以保证在某个时间存在的文件，或则须要监控设置，或则你只是须要一个友好的提醒，在上班回去的路上买里面包和奶油。

这就是at命令的好处。

哪些是Linuxat命令?

at命令是在Linux终端让你在特定时间和日期安排一次性工作的方式。它是一种自发的手动化，在终端上很容易实现。

安装at

在Linux上，at命令可能早已安装了。你可以使用at-V命令来验证它是否早已安装。只要返回一个版本号，就说明你已然安装了at。

```
$ at -Vat version x.y.z
```

假如你企图使用at，但没有找到该命令 **linux下计划任务命令是**，大多数现代的Linux发行版会为你提供缺乏的at软件包。

![linux下 find命令_linux下gcc版本查看命令_linux下计划任务命令是](https://www.linuxcool.com/wp-content/uploads/2023/03/1679551521654_0.jpg)

你可能还须要启动at守护程序，称为atd。在大多数Linux系统中，你可以使用systemctl命令来启用该服务，并将它们设置为从现今开始手动启动：

```
$ sudo systemctl enable --now atd
```

用at交互式地安排一个作业

当你使用at命令并加上你希望任务运行的时间，会打开一个交互式at提示符。你可以输入你想在指定时间运行的命令。

做个比喻，你可以把这个过程看作是一个月历应用，如同你在你的手机上使用的那样。首先，你在某三天的某个时间创建一个风波，之后指定你想要发生哪些。

比如，可以试试创建一个未来几分钟的任务linux系统介绍，来给自己计划一个备忘录。这儿运行一个简单的任务，以减低失败的可能性。要退出at提示符，请按按键上的Ctrl+D。

```
$ at 11:20 AM
warning: commands will be executed using /bin/sh
at> echo "hello world" > ~/at-test.txt
at>
job 3 at Mon Jul 26 11:20:00 2021
```

正如你所看见的，at使用直观和自然的时间定义。你不须要用24小时制的时钟，也不须要把时间翻译成UTC或特定的ISO格式。通常来说，你可以使用你自然想到的任何符号，如noon、1:30PM、13:37等等，来描述你希望一个任务发生的时间。

等待几分钟，之后在你创建的文件上运行cat或则tac命令，验证你的任务是否早已运行：

```
$ cat ~/at-test.txt
hello world
```

用at安排一个任务

你毋须使用at交互式提示符来安排任务。你可以使用echo或printf向它传送命令。在这个事例中，我使用了now符号，以及我希望任务从现今开始延后多少分钟：

```
$ echo "echo 'hello again' >> ~/at-test.txt" | at now +1 minute
```

一分钟后，验证新的命令是否已被执行：

```
$ cat ~/at-test.txt
hello world
hello again
```

时间表达式

at命令在解释时间时是十分谦让的。你可以在许多格式中选择，这取决于哪一种对你来说最便捷：

YYMMDDhhmm[.ss](两位的年份、月、日、小时、分钟，及可选的秒)

![linux下 find命令_linux下gcc版本查看命令_linux下计划任务命令是](https://www.linuxcool.com/wp-content/uploads/2023/03/1679551521654_2.jpg)

CCYYMMDDhhmm[.ss](四位的年份、月、日、时、分钟，及可选的秒)

now现今)

midnight(午夜00:00)

noon(下午12:00)

teatime(早上16点)

AM下午)

PM上午)

时间和日期可以是绝对时间，也可以加一个减号(+)，使其与now相对。当指定相对时间时，你可以使用你可能用过的成语：

minutes(分钟)

![linux下gcc版本查看命令_linux下 find命令_linux下计划任务命令是](https://www.linuxcool.com/wp-content/uploads/2023/03/1679551521654_3.gif)

hours(小时)

days(天)

weeks(礼拜)

months(月)

years(年)

时间和日期句型

at命令对时间的输入相比日期不这么谦让。时间必须置于第一位，接着是日期 **linux下计划任务命令是**，虽然日期默认为当前日期，但是只有在为未来某天安排任务时才须要。

这种是一些有效表达式的事例：

```
$ echo "rsync -av /home/tux me@myserver:/home/tux/" | at 3:30 AM tomorrow
$ echo "/opt/batch.sh ~/Pictures" | at 3:30 AM 08/01/2022
$ echo "echo hello" | at now + 3 days
```

查看你的at队列

当你爱上了at红旗linux下载，而且正在安排任务，而不是在椅子上的废纸上乱写乱画，你可能想查看一下你是否有任务还在队列中。

要查看你的at队列，使用atq命令：

```
$ atq
10 Thu Jul 29 12:19:00 2021 a tux
9 Tue Jul 27 03:30:00 2021 a tux
7 Tue Jul 27 00:00:00 2021 a tux
```

要从队列中删掉一个任务，使用atrm命令和任务号。比如，要删掉任务7：

```
$ atrm 7
$ atq
10 Thu Jul 29 12:19:00 2021 a tux
9 Tue Jul 27 03:30:00 2021 a tux
```

要看一个计划中的任务的实际内容，你须要查看/var/spool/at下的内容。只有root用户可以查看该目录的内容，所以你必须使用sudo来查看或cat任何任务的内容。

用Linuxat安排任务

at系统是一个挺好的方式，可以防止忘掉在三天中晚些时侯运行一个作业，或则在你离开时让你的计算机为你运行一个作业。与cron不同的是，它不像cron那样要求任务必须从现今起仍然按计划运行到永远，因而它的句型比cron简单得多。

等上次你有一个希望你的计算机记住并管理它的小任务，试试at命令。

原文来自：
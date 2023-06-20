---



title: "Linux系统下的定时任务执行工具不能正常执行(图)"
description: "Linux系统下的定时任务执行工具不能正常执行(图)"
keywords: "Linux系统下的定时任务执行工具不能正常执行(图)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674424870555_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux at命令是Linux系统下的一个定时任务执行工具linux操作系统版本雨林木风linux，它可以实现在指定的时间自动执行某些特定的任务，如果at命令不执行，那么可能会造成一些不必要的麻烦。因此，当at命令不能正常执行时，我们应该尝试解决这个问题。

首先，我们应该检查atd服务是否正常运行。atd服务是at命令的后台服务 **linux at命令 不执行**，如果atd服务没有正常运行，则at命令将不能正常工作。我们可以使用systemctl status atd来查看atd服务的当前状态：

└─535 /usr/sbin/atd -f

![linux at命令安装_linux at命令 不执行_python执行linux命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674424870555_0.jpg)

11月 17 14:51:06 linuxcool.localdomain systemd[1]: Starting Job spooling tools.11月 17 14:51:06 linuxcool.localdomain systemd[1]: Started Job spooling tools.

lines 1-15/15 (END)

如果显示Active为active(running)，则说明atd服务已经启动并正常运行。如果显示Active为inactive(dead)**linux at命令 不执行**，则意味着atd服务还没有启动。此时可以使用systemctl start atd来启动atd服务。

如果atd服务已经启动并正常运行了，但是at命令依然不能正常执行，则可能是由于cron和anacron的原因造成的。cron和anacron都是Linux上一些定时计划任务处理工具，如果cron或者anacron正在处理定时计划任务，则会阻塞住at命令的执行。因此，可以尝试关闭cron和anacron来解决这个问题。例如使用systemctl stop crond && systemctl stop anacron来关闭cron和anacron。

(在上面两个方法都尝试之后，如果linux at命令依然不能执行，则可能是由于linux内核版本太低导致的。由于Linux内核版本太低老旧（2.6.18版本及之前版本) 不支持新版at命令特性考虑到性能、兼容性和安全性方面的考虑）考虑到性能、兼容性和安全性方面的考虑因此会对新版at命令特性造成影响。因此在尝试上述几个方法之后如果linux at命令依然不能执行就可能是由于Linux内核版本太低导致的。在这种情况下就只能升级Linux内核版本来修复这个问题了。

总之：当linux at命令不能正常执行时应该先检查一下是否是因为Linux内核版本太低导致的问题。如果Linux内核版本是新版本并且已经升级了则应该尝试看看是否是因为cron或者anacron对at命令造成影响造成的。也应该注意查看一下atd服务是否已经开始并正常运行了。
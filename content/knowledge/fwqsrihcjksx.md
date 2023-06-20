---



title: "服务器输入init3回车即可实现从图形化界面切换成命令行模式永久修改"
description: "服务器输入init3回车即可实现从图形化界面切换成命令行模式永久修改"
keywords: "服务器输入init3回车即可实现从图形化界面切换成命令行模式永久修改"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681733622148_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

临时更改：

登陆服务器输入init3回车即可实现从图形化界面切换成命令行模式

![linux双机切换命令_linux输入法切换命令_linux切换输入法命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681733622148_0.png)

```
[root@localhost ~]# init 3
```

永久更改：

1、登录linux服务器 **linux双机切换命令**，输入systemctlget-default查看结果

```
[root@localhost ~]# systemctl get-default
graphical.target
[root@localhost ~]#
```

graphical.target指的是图形模式鸟哥的linux私房菜linux嵌入式开发，即模式5；

2、换成命令行模式

```
[root@localhost ~]# systemctl set-default multi-user.target
Removed symlink /etc/systemd/system/default.target.
Created symlink from /etc/systemd/system/default.target to /usr/lib/systemd/system/multi-user.target.
[root@localhost ~]#
```

3、再次查看运行模式

![linux双机切换命令_linux输入法切换命令_linux切换输入法命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681733622148_2.png)

```
[root@localhost ~]# systemctl get-default
multi-user.target
[root@localhost ~]#
```

multi-user.target即命令行模式 **linux双机切换命令**，重新启动服务器即可。

(![linux怎么切换命令行模式（linux 切换命令模式) ](https://www.linuxcool.com/wp-content/uploads/2023/04/1681733622148_3.jpg)
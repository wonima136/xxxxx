---



title: "( 一位便捷的命令行操作指南（RTFM) （量子位）"
description: "( 一位便捷的命令行操作指南（RTFM) （量子位）"
keywords: "( 一位便捷的命令行操作指南（RTFM) （量子位）"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

贾浩楠发自凹非寺

量子位报导|公众号QbitAI

无论你是Linux萌新用户还是老司机，使用命令行总会碰到不懂的问题。

(遇见问题要么去峰会寻问、谷歌搜索，要么查自带命令指南（RTFM) ，过程历时，结果也不直观。

![linux下gcc版本查看命令_linux版本查看命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_0.webp)

一位美国软件工程师针对这一困局，开发了一个方便的命令行操作手册Q&A工具howdoi。

直接在终端输入「howdoi+你要问的问题」 **查看linux版本命令**，这儿的问题不再是复杂的命令选项，而是普通的自然语言，和你去微软搜索没哪些两样。

之后howdoi马上才能返回详尽操作教程，实现了用日常对话的方式来查询Linux交互命令。

![查看linux版本命令_linux版本查看命令_linux下gcc版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_1.gif)

那么好用的工具安装上去也不复杂。

安装步骤

安装howdoi只要两步，还须要PHP5.0以上版本。

运行下方命令即可完成安装：

```
$ mkdir -p ~/bin && wget https://raw.githubusercontent.com/san-kumar/howdoi/master/howdoi -O ~/bin/howdoi && chmod +x ~/bin/howdoi$ sudo ln -s ~/bin/howdoi /usr/local/bin/howdoi
```

在使用时，有几个实用的命令字符：

howdoi[-n-v-h]—question

(其中，-n代表返回的解答数目（默认为1) linux 发邮件，-v表示返回完整解答（默认情况只返回相关代码），-h为显示此问题的帮助信息。

![linux下gcc版本查看命令_查看linux版本命令_linux版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_2.png)

操作实例快速查询教程

输入问题「如何解压bz2文件？」：

```
$ howdoi extract a bz2 file
```

返回结果：

```
-j, —bzip2           filter the archive through bzip2 tar -xvjf enginsxt.tar.bz2Source: https://askubuntu.com/questions/707861/how-to-extract-tar-bz2
```

howdoi除了给出了命令的使用方式linux虚拟主机，还给出了这个问题的来源网址。

详尽教程查询：

输入问题「如何把一个程序添加到cron中？」：

![linux版本查看命令_查看linux版本命令_linux下gcc版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_3.png)

```
$ howdoi -v add a program to cron
```

返回结果：

```
Put a shell script in one of these folders: /etc/cron.daily, /etc/cron.hourly, /etc/cron.monthly or /etc/cron.weekly.If these are not enough for you, you can add more specific tasks e.g. twice a month or every 5 minutes. Go to the terminal and type:crontab -e…snipSource: https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job
```

对于这样一个有延展拓展的问题，返回结果不仅有基本的操作指导，还有关于这个问题进一步的建议。

返回多个结果

输入问题「如何链接屏幕？」，要求2个返回结果：

```
$ howdoi -n 2 attach to a screen
```

返回：

```
screenscreen -S myprogramrunningunderscreenscreen -lsThere are screens on:   4964.myprogramrunningunderscreen    (05/31/2013 09:42:29 PM)    (Detached)   4874.pts-1.creeper  (05/31/2013 09:39:12 PM)    (Detached)Source: https://askubuntu.com/questions/302662/reattaching-to-an-existing-screen-sessionscreen -d -rSource: https://askubuntu.com/questions/302662/reattaching-to-an-existing-screen-session
```

这个事例中，在命令中要求返回2个结果，系统返回也给出了两种联接不同屏幕的方式。

其他功能

还可以查询怎么更新PHP：

```
$ howdoi upgrade to latest phpsudo apt-get upgrade sudo apt-get dist-upgrade sudo apt-add-repository ppa:ondrej/php sudo apt-add-repository ppa:ondrej/php5-oldstable sudo apt-add-repository ppa:ondrej/php5 sudo apt-add-repository ppa:ondrej/php5-5.6 sudo apt-get update sudo apt-get install php5.5 sudo apt-get install php5.6 sudo apt-get install php7.0 do-release-upgradeSource: https://askubuntu.com/questions/565784/how-do-i-upgrade-php-version-to-the-latest-stable-released-version
```

howdoi工具调用的解答库来始于峰会上的提问，峰会上已有的问题解答都可以通过本工具实现对话式查询。

5月19日，这个项目刚才在Github上开源。

![查看linux版本命令_linux版本查看命令_linux下gcc版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_5.png)

![查看linux版本命令_linux版本查看命令_linux下gcc版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_6.png)

主板驱动、硬件支持、图形平台稳定、用户体验、软件支持、社区协作，这种小问题叠加在一起 **查看linux版本命令**，成了谁都难以忽略的Linux缺陷，这种痛点其实就是让新用户望而生畏的真正缘由。

本项目在Hackernews上收获了网友的赞扬，其中有一位用户在赞扬之余，还强调了像Linux这些类Unix系统的弊病：用户友好性差，获取帮助非常困难。

![linux版本查看命令_查看linux版本命令_linux下gcc版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678917692970_7.webp)

那位美国小哥SanKumar解决了一个大问题：Linux菜鸟难以高效获取问题的解决方案，但是整个工具只用了100行代码实现。

同时那位用户还建议这些实用工具今后应当作为标准，加入所有类Unix操作系统的衍生版本。

假如这个Linux神器对你有帮助的话，可以直接通过文中的代码下载，项目旧址在下方。

Github项目地址：

—完—

量子位QbitAI·头条号签约
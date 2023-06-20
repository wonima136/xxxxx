---



title: "使用进程管理器PM2的一些常用命令，你知道吗？"
description: "使用进程管理器PM2的一些常用命令，你知道吗？"
keywords: "使用进程管理器PM2的一些常用命令，你知道吗？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684095335827_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

使用进程管理器PM2

PM2是一个流行的进程管理器，是在生产环境中后台运行nodejs的首选。它提供了好多的功能和选项 **linux启动应用程序 命令**，包括进程监控、自动重启、负载平衡等等。使用PM2后，我们可以便捷地将nodejs应用程序后台运行。

安装PM2

要使用PM2linux桌面，我们须要先进行安装。在终端中输入以下命令：

```
npm install -g pm2
```

登陆后复制

启动nodejs应用程序

在启动应用程序时，使用PM2非常简单，只须要在终端中输入以下命令即可：

```
pm2 start app.js
```

登陆后复制

这儿的app.js是我们nodejs应用程序的入口文件。PM2会手动创建一个后台进程来运行这个文件。

PM2还提供了许多有用的命令，我们可以使用这种命令来对nodejs进程进行管理。以下是一些最常用的命令：

```
pm2 list              # 列出所有进程
pm2 stop    # 停止指定应用程序
pm2 restart # 重启指定应用程序
pm2 delete  # 删除指定应用程序
```

登陆后复制

使用nohup

nohup是一个在Linux系统下启动后台进程的工具。它可以让我们在终端下运行一个命令，并在终端关掉后将其转移到后台。使用nohup后 **linux启动应用程序 命令**，虽然我们早已退出了终端，我们的nodejs应用程序依然可以在后台运行。

使用nohup后台运行nodejs

要使用nohup后台运行nodejs，只须要在终端中输入以下命令：

![linux启动网卡命令_linux启动应用程序 命令_linux 交互命令启动](https://www.linuxcool.com/wp-content/uploads/2023/05/1684095335827_0.jpg)

```
nohup node app.js &
```

登陆后复制

这儿的app.js是我们nodejs应用程序的入口文件。“&”符号表示将命令转移到后台执行。

结束运行

当我们须要停止后台运行的nodejs应用程序时，我们须要先使用ps命令找到应用程序的进程ID，之后使用kill命令结束进程：

```
ps -ef | grep node     # 找到进程 ID
kill              # 结束进程
```

登陆后复制

使用screen

screen是一个在一个单独的终端屏幕上运行命令的工具。我们可以在其中运行任何命令查看系统版本linux，包括nodejs应用程序。使用screen后，虽然我们退出了终端，我们的nodejs应用程序依然可以在屏幕上运行。

安装screen

假若您的服务器上没有安装screen，您须要先进行安装。在终端中输入以下命令：

```
sudo apt-get update
sudo apt-get install screen
```

登陆后复制

启动screen

要启动一个screen终端，我们可以使用以下命令：

```
screen -S
```

![linux 交互命令启动_linux启动网卡命令_linux启动应用程序 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684095335827_1.png)

登陆后复制

这儿的screen-name是我们为该终端命名的名称。

在screen中运行nodejs

如今，我们可以在启动的screen终端上运行nodejs应用程序。在终端中输入以下命令：

```
node app.js
```

登陆后复制

当我们退出screen终端时，应用程序仍将在后台运行。

重新联接到screen终端

假如须要重新联接到screen终端，只需使用以下命令：

```
screen -r
```

登陆后复制

这儿的screen-name是我们为该终端命名的名称。

结束运行

当我们须要停止后台运行的nodejs应用程序时，我们须要先在screen终端中使用Ctrl+C命令停止nodejs进程，之后使用以下命令关掉screen终端：

```
exit
```

登陆后复制

以上就是在Linux上如何后台运行nodejs的详尽内容，更多请关注php英文网其它相关文章！

申明：本文转载于：亿速云，如有侵害，请联系删掉
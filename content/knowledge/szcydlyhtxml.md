---



title: "四种常用的Linux用户通信命令是如何工作的？！"
description: "四种常用的Linux用户通信命令是如何工作的？！"
keywords: "四种常用的Linux用户通信命令是如何工作的？！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1686140071730_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

你们好，我是良许

在Linux命令行里向其他用户发送信息很简单，好多命令都可以做到这点，麻烦的是你须要从诸多命令中选购一个合适的命令来使用。为此RED HAT LINUX 9.0，我选购了四种常用的Linux用户通讯命令分享给你们并为大家讲解这四种命令是怎样工作的。

wall

(wall命令（意为writeall) 容许你向所有在系统已登入的用户发送信息。任何用户都可以使用wall命令linux ftp，但wall命令一般是系统管理员拿来向用户发送公告通知的（例如服务器将关掉维护）。

一个系统管理员可能会发送如下信息：

```
$ wall The system will be going down in 15 minutes to address a serious problem
```

之后，所有已登入的用户都能见到类似这样的通知：

```
Broadcast message from admin@dragonfly (pts/0) (Thu Mar  5 08:56:42 2020):
The system is going down in 15 minutes to address a serious problem
```

假如你要发送的信息里有单冒号，就须要用双冒号即将发送的信息括上去，如下所示：

```
$ wall "Don't forget to save your work before logging off"
```

上例所示的命令里，最内层的冒号在信息传送时不会显示下来，但若果没有最内层的破折号，这条命令执行时会仍然等待一个和句上单顿号配对的冒号以结束语句。

mesg

(假如由于个别缘由你想拒绝某位用户发送来的信息，就可以使用mesg命令。该命令使用时应携带参数n或则y，分别表示拒绝或接受某用户来信，其用例如下（alvin为用户名) ：

```
$ mesg n alvin
$ mesg y alvin
```

值得注意的是，使用mesg命令屏蔽用户后，被屏蔽的用户并不会收到自己已被屏蔽的通知，也就是说，被屏蔽的用户并不会晓得自己早已被屏蔽了。

你也可以使用这个命令来接受或屏蔽所有用户的通讯，只需把用户名参数省略掉即可：

```
$ mesg y
$ mesg n
```

write

另一个可以直接发送文本信息而不须要转换成邮件的命令是write。这个命令能被用于和特定用户的通讯中，例如你要向用户名为alvin的用户发送信息，可以用如下命令：

```
$ write alvin
Are you still at your desk?
I need to talk with you right away.
^C
```

写完发送信息后按ctrl+C退出。这个命令准许你传送信息，但不是开启一个双工通道，它仅仅只能用于送出信息。假如接收用户在不止一个终端上登陆，你能选择一个你想传输的终端或则借助系统选择一个历时最少的终端传输，如下所示：

```
$ write alvin#1
```

假如你被用户alvin屏蔽了，你会看见如下提示：

```
$ write alvin
write: alvin has messages disabled
```

talk/ytalk

talk和ytalk命令让你可以和一个或多个用户构建交互通讯，其中talk命令只容许你和一个用户构建交互通讯。talk与ytalk命令就会启动一个双版面的窗口 **linux用户相关命令**，通讯的每一方都可以在窗口的下部版面输入信息并在上部版面听到回应信息。

被恳求加入通讯的一方可以通过输入talk并在其后跟上通讯发起方的用户名即可回应通讯，如下所示：

```
Message from Talk_Daemon@dragonfly at 10:10 ...
talk: connection requested by alvin@127.0.0.1.
talk: respond with:  talk alvin@127.0.0.1
$ talk alvin
```

![linux用户命令_linux用户相关命令_linux 用户 相关指令](https://www.linuxcool.com/wp-content/uploads/2023/06/1686140071730_0.png)

值得注意的是，当系统既安装了talk也安装了ytalk时，talk命令默认会与ytalk命令相关联，所以当你输入talkalvin后，系统实际上执行的是ytalkalvin。因为我的系统两个命令都安装了，所以执行以上命令后看见的输出实际上是ytalkalvin的：

```
----------------------------= YTalk version 3.3.0 =--------------------------
Is the report ready?
-------------------------------= root@lxlinux =----------------------------
Just finished it
```

以上为用户alvin听到的窗口信息，而通讯另一方的root见到的窗口内容则是反过来的：

```
----------------------------= YTalk version 3.3.0 =--------------------------
Just finished it
-------------------------------= alvin@lxlinux =----------------------------
Is the report ready?
```

同样，这个命令也用ctrl+C来中止。

要用此命令和其他系统的用户通讯则须要加上-h的参数，参数值为主机名或IP地址。其用例如下：

```
$ talk -h 192.168.0.11 alvin
```

总结

Linux系统有好多可用于向已登陆的用户发送信息的命令，这种命令在个别情境中是十分有用的，例如用wall广播信息，用talk进行两用户间的交互式会晤 **linux用户相关命令**，它们都可以让用户快速地交换信息，学会使用这种常用的命令可以让用户间通讯愈发便捷，提升了沟通的效率。

最后希望本文的内容对你的工作有所帮助，假如你还对这种命令有任何疑惑，请留言告诉我呗！

>2020精选阿里/腾讯等一线大厂笔试、简历、进阶、电子书「**良许Linux**」后台回复「**资料**」免费获取

####看完的都是真爱，点个赞再走呗？您的「三连」就是良许持续创作的最大动力！

1.关注**原创**「**良许Linux**」，第一时间获取最新Linux干货！

2.后台回复【资料】【面试】【简历】获取精选一线大厂笔试、自我提高、简历等资料。

3.关注我的博客：[]()
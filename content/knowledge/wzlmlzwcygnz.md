---



title: "玩转Linux QQ命令，掌握常用功能！(19字)"
description: "玩转Linux QQ命令，掌握常用功能！(19字)"
keywords: "玩转Linux QQ命令，掌握常用功能！(19字)"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1683317463605_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux 命令是指在 Linux 终端下使用 的命令linux应用程序，它可以让你在不打开 软件的情况下node.js安装linux，直接在终端中发送消息、查看消息记录等操作，从而提高你的聊天效率。本文将为大家介绍 Linux 命令的使用方法及其常用功能。

**1.安装 Linux 命令**

首先，你需要安装 Linux 命令工具。目前比较流行的工具有`tencent-cloud-im`和`smartqq`。这里以`tencent-cloud-im`为例进行介绍。

```
bash
#安装 tencent-cloud-im
sudo npm install -g tencent-cloud-im
```

**2.登录 账号**

安装完成后，使用以下命令登录 账号：

![linux qq 命令_linux命令_linux安装qq命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1683317463605_0.jpg)

```
bash
#登录 账号
im login
```

按照提示输入账号和密码即可登录成功。

**3.发送消息**

使用以下命令可以向好友或群组发送消息：

```
bash
#发送消息给好友
im send buddy <buddy_uin><message>
#发送消息给群组
im send group <group_uin><message>
```

其中“是好友的 UIN 号，“是群组的 UIN 号 **linux qq 命令**，“是要发送的消息内容。

**4.查看聊天记录**

使用以下命令可以查看与某个好友或群组的聊天记录：

```
bash
#查看与好友的聊天记录
im list buddy <buddy_uin>
#查看群组的聊天记录
im list group <group_uin>
```

**5.接收消息**

使用以下命令可以在终端中接收 消息：

```
bash
#接收消息
im listen
```

此时 **linux qq 命令**，当你收到新消息时，终端会自动显示消息内容。

**6.设置状态**

使用以下命令可以设置自己的状态：

```
bash
#设置在线状态
im set online
#设置隐身状态
im set hidden
```

**7.添加好友和群组**

使用以下命令可以添加好友和群组：

```
bash
#添加好友
im add buddy <buddy_uin>
#添加群组
im add group <group_uin>
```

**8.查看好友列表和群组列表**

使用以下命令可以查看好友列表和群组列表：

```
bash
#查看好友列表
im ls buddy
#查看群组列表
im ls group
```
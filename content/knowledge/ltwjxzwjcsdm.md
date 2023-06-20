---



title: "Linux/Unix同Windows进行ZModem文件传输的命令行工具"
description: "Linux/Unix同Windows进行ZModem文件传输的命令行工具"
keywords: "Linux/Unix同Windows进行ZModem文件传输的命令行工具"
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

rz，sz是Linux/Unix同Windows进行ZModem文件传输的命令行工具。

优点就是不用再开一个sftp工具登陆起来上传下载文件。

(sz：将选取的文件发送（send) 到本地机器

rz：运行该命令会弹出一个文件选择窗口红旗linux5.0，从本地选择文件上传到Linux服务器

安装命令：

yuminstalllrzsz

从服务端发送文件到顾客端：

szfilename

从顾客端上传文件到服务端：

rz

在弹出的框中选择文件，上传文件的用户和组是当前登入的用户

SecureCRT设置默认路径：

Options->SessionOptions->Terminal->Xmodem/Zmodem->Directories

Xshell设置默认路径：

右键会话->属性->ZMODEM->接收文件夹

测试：

开发板接收文件：

步入开发板要接收文件的目录开发板执行命令#rz在minicom下，按住Ctrl+A键不放 **linux 传输文件命令**，按下Z键按下S键选择发送文件选择zmodem，用回车键确认用空格选择主机要发送的文件，用回车键确认传输完成后按任意键返回

开发板发送文件：

步入开发板要发送文件的目录步入主机要接收文件的目录主机执行命令#rz开发板执行命令#szfilename

PS：朋友和我说SecureCRT可以便捷的上传下载文件linux find，而Xshell没有。我上网一查原先用的是同一个sz/rz工具 **linux 传输文件命令**，Xshell下没有菜单选择要输命令。
---



title: "如何使用topgrade这一个命令升级Linux系统下所有的软件"
description: "如何使用topgrade这一个命令升级Linux系统下所有的软件"
keywords: "如何使用topgrade这一个命令升级Linux系统下所有的软件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679349633564_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

本文介绍怎样使用topgrade这一个命令升级Linux系统下所有的软件。就个人而言，我喜欢创建一个像topgrade程序的看法鸟哥的linux私房菜，并使用一个命令升级使用各类包管理器安装的所有软件。

序言

怎样用命令让我们的Linux操作系统下保持最新状态会用到多种包管理器。例如说linux安装教程，在Ubuntu中，你没法使用sudoaptupdate和sudoaptupgrade命令升级所有软件。此命令仅升级使用APT包管理器安装的应用程序。你有可能使用cargo、pip、npm、snap、flatpak或Linuxbrew包管理器安装了其他软件。你须要使用相应的包管理器能够使它们全部更新。

再也不用这样了！跟topgrade打个招呼，这是一个可以一次性升级系统中所有软件的工具。

你无需运行每位包管理器来更新包。这个topgrade工具通过检查已安装的软件包、工具、插件并运行相应的软件包管理器来更新Linux中的所有软件，用一条命令解决了这个问题。它是自由而开源的，使用rust语言编撰。它支持GNU/Linux和MacOSX平台。

在Linux系统下使用一个命令升级所有软件的方式

topgrade存在于AUR中。为此，你可以在任何基于Arch的系统中使用Yay助手程序安装它。

$yay-Stopgrade

在其他Linux发行版上，你可以使用cargo包管理器安装topgrade。

之后，运行以下命令来安装topgrade。

$cargoinstalltopgrade

安装完成后，运行topgrade以升级Linux系统中的所有软件。

$topgrade

一旦调用了topgrade，它将挨个执行以下任务。如有必要，系统会要求输入root/sudo用户密码。

1、运行系统的包管理器：

Arch：运行yay或则回挪到pacman

![linux系统升级命令_linux系统版本查看命令_linux系统查看ip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679349633564_0.png)

CentOS/RHEL：运行yumupgrade

Fedora：运行dnfupgrade

Debian/Ubuntu：运行aptupdate和aptdist-upgrade

Linux/macOS：运行brewupdate和brewupgrade

2、检查Git是否跟踪了以下路径。假如有，则拉取它们：

(~/.emacs.d（无论你使用Spacemacs还是自定义配置都应当可用) 

~/.zshrc

~/.oh-my-zsh

![linux系统升级命令_linux系统版本查看命令_linux系统查看ip命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679349633564_1.png)

~/.tmux

~/.config/fish/config.fish

自定义路径

3、Unix：运行zplug更新

4、Unix：使用TPM升级tmux插件

5、运行cargoinstall-update

6、升级Emacs包

7、升级Vim包。对以下插件框架均可用：

NeoBundle

Vundle

Plug

8、升级npm全局安装的包

9、升级Atom包

10、升级Flatpak包

11、升级snap包

(12、Linux：运行fwupdmgr显示固件升级。（仅查看​​。实际不会执行升级) 

![linux系统版本查看命令_linux系统查看ip命令_linux系统升级命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679349633564_2.png)

13、运行自定义命令。

最后 **linux系统升级命令**，topgrade将运行needrestart以重新启动所有服务。在MacOSX中，它会升级AppStore程序。

我的Ubuntu18.04LTS系统测试环境的示例输出：

用处是假如一个任务失败，它将手动运行下一个任务并完成所有其他后续任务。最后，它将显示摘要，其中包含运行的任务数目，成功的数目和失败的数目等详尽信息 **linux系统升级命令**，如右图所示：

相关主题

最常用的Linux十大命令的升级代替品
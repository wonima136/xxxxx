---



title: "Linux命令启动：新手必备！"
description: "Linux命令启动：新手必备！"
keywords: "Linux命令启动：新手必备！"
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

欢迎来到 Linux 世界！作为一名新手，你可能会感到有些迷茫。本文将为你详细介绍如何使用 Linux 交互命令启动系统，并提供一些常用的命令和技巧，帮助你更好地掌握 Linux 系统的使用。

**第一部分：了解启动过程**

在了解如何使用交互命令启动系统之前，我们需要先了解一下 Linux 系统的启动过程。简单来说，Linux 的启动过程可以分为以下几个步骤：

1. BIOS 自检

2.加载引导程序

3.加载内核

4.初始化系统

在这个过程中，我们主要需要关注的是第二步和第三步。在第二步中，计算机会加载 GRUB 引导程序，GRUB 会显示一个菜单让我们选择要启动的操作系统。在这里，我们可以通过按下 Tab 键来编辑菜单项，在菜单项后面加上“single”或“init=/bin/bash”等参数来进入单用户模式或者 shell 界面。

**第二部分：使用交互命令启动系统**

现在我们来看看如何使用交互命令启动系统。当我们按下电源按钮后，计算机会自动进行自检，并加载 GRUB 引导程序。在 GRUB 的菜单中，我们选择要启动的 Linux 系统，并按下 e 键进入编辑模式。

在编辑模式中linux解压rar，我们可以看到一个类似于下面这样的配置：

```
linux /boot/vmlinuz-5.10.0-7-amd64 root=UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx ro quiet
```

这里的 linux 表示要启动的内核文件，/boot/vmlinuz-5.10.0-7-amd64 是内核文件的路径，root=UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 表示根文件系统的 UUID，ro 表示只读模式，quiet 表示启动时不显示详细信息。

如果我们想要进入单用户模式或者 shell 界面，可以在这个配置后面加上“single”或“init=/bin/bash”等参数。比如linux查看进程，如果我们想要进入单用户模式，可以将配置修改为：

```
linux /boot/vmlinuz-5.10.0-7-amd64 root=UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx ro quiet single
```

修改完成后，按下 Ctrl+x键保存并启动系统即可。

**第三部分：常用命令和技巧**

现在我们已经成功地使用交互命令启动了 Linux 系统，接下来让我们来学习一些常用的命令和技巧。

1. whoami 命令

whoami 命令可以显示当前用户的用户名。在终端中输入 whoami 并按下回车键即可。

2. pwd 命令

pwd 命令可以显示当前所在目录的路径。在终端中输入 pwd 并按下回车键即可。

3. cd 命令

cd 命令可以切换当前所在目录。比如，如果我们想要进入/etc 目录，可以在终端中输入 cd /etc 并按下回车键。

4. ls 命令

ls 命令可以列出当前目录下的文件和子目录。在终端中输入 ls 并按下回车键即可。

5. cat 命令

cat 命令可以显示文本文件的内容。比如，如果我们想要查看/etc/passwd 文件的内容，可以在终端中输入 cat /etc/passwd 并按下回车键。

6. echo 命令

echo 命令可以输出指定的文本。比如，如果我们想要输出“Hello, World!”，可以在终端中输入 echo “Hello, World!”并按下回车键。

7. history 命令

history 命令可以显示最近使用过的命令。在终端中输入 history 并按下回车键即可。

8. TAB 键补全

TAB 键补全是一种非常方便的技巧，它可以帮助我们快速输入命令或者文件路径。比如 **linux 交互命令启动**，如果我们想要输入 cd /etc/apt/sources.list.d/，只需要输入 cd /e，然后按下 TAB 键即可自动补全。

**第四部分：总结**

在本文中，我们详细介绍了如何使用 Linux 交互命令启动系统，并提供了一些常用的命令和技巧。希望这些内容可以帮助你更好地掌握 Linux 系统的使用。如果你有任何问题或者建议 **linux 交互命令启动**，欢迎在评论区留言。
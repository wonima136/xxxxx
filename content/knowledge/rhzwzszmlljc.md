---



title: "如何在Windows中设置命令路径？程序是什么？"
description: "如何在Windows中设置命令路径？程序是什么？"
keywords: "如何在Windows中设置命令路径？程序是什么？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677362928141_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux文件传输命令_linux 命令输出到文件_linux vi命令 跨文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677362928141_0.jpg)

开源的 PSCP 程序可以轻松地在 Windows 和 Linux 计算机之间传输文件和文件夹。

你是否正在找寻一种将文件从 Windows 计算机快速传输到 Linux 计算机并再度传输回去的方式？开源的 PSCP 程序可以轻松传输文件和文件夹，当然它是开源的。

在 Windows 中设置 PATH

了解怎样在 Windows 中设置命令路径可以更轻松地使用 PSCP 等便捷的程序。如果你不熟悉该过程，请阅读 如何在 Windows 上设置 PATH。

使用 PSCP

(PSCP（PuTTY 安全复制合同) 是一个命令行工具，用于将文件和文件夹从 Windows 计算机传输到 Linux 计算机。

IP 地址

在进行传输之前，你必须晓得目标计算机的 IP 地址或完全限定域名。假设它是同一网路上的计算机，并且你没有运行 DNS 服务器来解析计算机名称，你可以在 Linux 机器上使用 ip命令找到目标 IP 地址：

```
[linux]$ ip addr show |grep 'inet '
inet 127.0.0.1/8 scope host lo

inet 192.168.1.23/24 brd 10.0.1.255 scope global noprefixroute eth0
```

(在所有情况下，127.0.0.1 都是计算机仅用于与自身通讯的环回地址，因此在此示例中 **linux文件传输命令**，正确的地址是 192.168.1.23。在你的系统上，IP 地址可能不同。如果你不确定那个是那个，你可以连续尝试每位，直到找到正确的（然后在某处写出来！) 

或者，你可以查看路由器的设置，其中列举了通过 DHCP 分配的所有地址。

防火墙和服务器

pscp命令使用 OpenSSH 协议，因此你的 Linux 计算机必须运行 OpenSSH 服务器软件64位linux，并且防火墙必须容许 SSH 流量。

如果你不确定你的 Linux 机器是否正在运行 SSH，请在 Linux 机器上运行以下命令：

```
[linux]$ sudo systemctl enable --now sshd
```

要确保你的防火墙容许 SSH 流量，请运行以下命令：

```
[linux]$ sudo firewall-cmd --add-servicessh --permanent
```

有关 Linux 上的防火墙的更多信息，请阅读 使用防火墙使 Linux 更强大。

传输文件

在这个事例中，我有一个名为 pscp-test.txt的文件，我想将它从我的 Windows 计算机上的C:UserspaulDocuments传输到我的目标 Linux 计算机主目录/home/paul。

现在你早已有了 pscp命令和目标地址，你可以传输测试文件pscp-test.txt。打开 Powershell 并使用dir命令切换到示例文件所在的Documents文件夹：

```
PS> dir %USERPROFILE%Documents
```

现在执行传输：

```
PS> pscp pscp-test.txt paul@192.168.1.23:/home/paul
| Password:
End of keyboard-interactive prompts from server
pscp-test.txt | 0 kb | 0.0 kB/s | ETA: 00:00:00 | 100%
```

这是句型，逐字逐句来：

对 Linux 计算机进行身分验证后，pscp-test.txt文件将传输到 Linux 计算机。

验证已传输

在你的 Linux 计算机上，打开终端并使用 ls命令验证文件pscp-test.txt是否出现在你的主目录中。

```
[linux]$ ls
Documents
Downloads
Music
Pictures
pscp-test.txt
```

从 Linux 系统复制文件

你除了限于将文件复制到 Linux 系统。使用 pscp，你还可以将文件从 Linux 复制到 Windows。语法是一样的，只是反过来：

```
PS> pscp paul@192.168.1.23:/home/paul/pscp-test.txt %USERPROFILE%Documentspscp-win.txt
```

这是句型：

打开文件管理器以验证 pscp-win.txt文件是否已从 Linux 计算机复制到 WindowsC:UserspaulDocuments下。

![linux vi命令 跨文件_linux文件传输命令_linux 命令输出到文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677362928141_2.png)

远程复制

借助开源 pscp命令的强悍功能 **linux文件传输命令**，你可以访问屋内的任何计算机、拥有账户的服务器，甚至是联通设备和边沿设备。

via:

作者：Paul选题：lkxed译者：geekpi校对：wxy

本文由 LCTT原创编译linux操作系统安装，Linux中国荣誉推出
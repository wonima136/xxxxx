---



title: "基于的Linux发行版下载文件的命令和wget命令"
description: "基于的Linux发行版下载文件的命令和wget命令"
keywords: "基于的Linux发行版下载文件的命令和wget命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681474125547_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux下载文件命令有：1、wget命令；2、curl命令；3、MyGet命令；4、scp命令；5、sz命令。wget命令拿来从指定的URL下载文件。wget命令十分稳定，它在带宽很窄的情况下和不稳定的网路中有很强的适应性。

1、wget命令

大多数Linux发行版都预装了wget。它在大多数发行版的储存库中也可用，可以使用发行版的包管理器轻松安装它。在基于Ubuntu和Debian的发行版上，可以使用apt包管理器命令：

```
sudo apt install wget
```

要下载多个文件，必须将它们的URL保存在一个文本文件中，并将该文本文件作为输入提供给wget，如下所示：

```
wget -i download_files.txt
```

![linux查看目录命令_linux下载目录命令_linux切换目录命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681474125547_0.png)

(Wget使文件下载显得轻松简单。虽然缺乏GUI，但wget为我们提供了大量有关下载的信息 **linux下载目录命令**，包括下载进度、传输速率和恐怕完成时间。终端底部附近的输出位只是wget尝试联接到服务器以下载文件。当用户在下载文件时碰到问题时，该输出可用于进行故障排除。若果不在命令中提供任何额外的参数，wget会将下载的文件保存到终端当前设置的任何目录中。假如要指定文件的保存位置，可以使用命令中的（output) 选项。wget的一个极具优势的功能是它可以恢复下载。假如文件下载被中断，无论是无意中还是由于须要使用Ctrl+C停止它，用户可以使用该选项从先前中断的地方继续。只要确保在正确的目录中，或则告诉wget在那里可以找到下载的部份文件。

2、curl命令

Curl是基于UNIX的系统中默认安装的工具，Curl支持多种合同，包括HTTP、HTTPS、FTP、FTPS、SFTP等。假如你没有指定任何合同，默认是HTTP合同。其实curl不是预装的，但在大多数发行版的官方库房中都有。你可以使用发行版的包管理器来安装它。要基于Debian的发行版上安装cyrl,请使用以下命令：

```
sudo apt install curl
```

(假如你在使用curl命令时没有在URL中带任何选项，它还会读取文件并复印在终端上。要在Linux终端中使用curl命令下载文件，你必须使用-O（小写字母o) 选项：

```
curl -O URL
```

在Linux中linux操作系统，用curl下载多个文件是比较简单的。你只须要指定多个URL即可：

```
curl -O URL1 URL2 URL3
```

要下载多个文件红帽linux，你必须将它们的URL保存在一个文本文件中，并将该文本文件作为输入提供给wget，如下所示：

```
wget -i download_files.txt
```

3、MyGet命令

Myget是GNU/Linux的下载加速器。它可以通过使用与主机的多联接来推动您的下载速率。最新版本0.1.0仅支持一个界面–命令行，可执行文件是mytget，_NOT_myget。尝试“mytget–help”以获取更多选项。

![linux切换目录命令_linux下载目录命令_linux查看目录命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681474125547_2.png)

当前功能：

MyGet命令安装：

```
 #tar jxvf myget-0.1.0.tar.bz2
 #cd myget-0.1.0 #./configure
 #make
 #make install
```

句型：

```
 #mytget [选项] [下载地址]
```

常用的选项：

4、scp命令

(SCP（安全复制合同) 是一种网路合同，用于在网路上的Linux（Unix）系统之间安全地复制文件/文件夹。要下载文件可以使用scp命令行实用程序，这是cp（复制）命令的更安全变体。SCP通过加密文件和密码来保护跨SSH（安全壳体）联接复制时的数据。为此，虽然流量被拦截，信息依然是加密的。

在以下情况下使用SCP：

句型：

```
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]
[-l limit] [-o ssh_option] [-P port] [-S program]
[[user@]host1:]file1 [...] [[user@]host2:]file2
```

```
scp [可选参数] file_source file_target
```

参数说明：

5、sz命令

(sz命令是借助ZModem合同来从Linux服务器传送文件到本地 **linux下载目录命令**，一次可以传送一个或多个文件。可以将选取的文件发送（send) 到本地机器。

句型：

```
sz [参数]
```

常用参数：
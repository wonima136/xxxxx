---



title: "轻松get各种软件！Linux下载命令教程"
description: "轻松get各种软件！Linux下载命令教程"
keywords: "轻松get各种软件！Linux下载命令教程"
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

Linux系统可以说是程序员的必备操作系统，但是对于一些新手来说，可能会对Linux的下载软件命令感到头疼。今天，我们就来分享一下Linux下载软件命令的使用方法，轻松get各种软件！

**一、在终端中使用apt-get命令下载软件**

在Linux系统中，apt-get命令是最常用的下载软件命令之一。它可以从Ubuntu和Debian的软件仓库中下载、安装和卸载软件。

**1.更新源列表**

在使用apt-get之前，需要先更新源列表。输入以下命令：

```
sudo apt-get update
```

**2.搜索软件包**

如果你不知道要下载哪个软件包，可以使用以下命令搜索：

```
sudo apt-cache search <package-name>
```

例如，如果你要搜索VLC Media Player:

```
sudo apt-cache search vlc
```

**3.安装软件包**

当你找到了需要下载的软件包后 **linux下载软件命令**，可以使用以下命令进行安装：

```
sudo apt-get install <package-name>
```

例如，如果你要安装VLC Media Player:

```
sudo apt-get install vlc
```

**4.卸载软件包**

如果你想卸载一个已经安装的软件包，可以使用以下命令：

```
sudo apt-get remove <package-name>
```

例如，如果你要卸载VLC Media Player：

```
sudo apt-get remove vlc
```

**二、使用yum命令下载软件**

(yum是Red Hat Enterprise Linux（RHEL) 和CentOS中最常用的下载软件命令之一。它可以从yum存储库中下载、安装和卸载软件包。

**1.更新源列表**

在使用yum之前，需要先更新源列表。输入以下命令：

```
sudo yum update
```

**2.搜索软件包**

如果你不知道要下载哪个软件包，可以使用以下命令搜索：

```
sudo yum search <package-name>
```

例如，如果你要搜索VLC Media Player:

```
sudo yum search vlc
```

**3.安装软件包**

当你找到了需要下载的软件包后，可以使用以下命令进行安装：

```
sudo yum install <package-name>
```

例如，如果你要安装VLC Media Player:

```
sudo yum install vlc
```

**4.卸载软件包**

如果你想卸载一个已经安装的软件包 **linux下载软件命令**，可以使用以下命令：

```
sudo yum remove <package-name>
```

例如，如果你要卸载VLC Media Player：

```
sudo yum remove vlc
```

**三、使用dpkg命令下载.deb文件**

dpkg是Debian和Ubuntu中最常用的下载.deb文件的命令。它可以从本地硬盘上的.deb文件中安装和卸载软件包。

**1.安装.deb文件**

在终端中输入以下命令来安装.deb文件：

```
sudo dpkg -i<package-name>.deb
```

例如，如果你要安装Google Chrome：

```
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

**2.卸载.deb文件**

如果你想卸载一个已经安装的.deb文件，可以使用以下命令：

```
sudo dpkg -r<package-name>
```

例如，如果你要卸载Google Chrome：

```
sudo dpkg -r google-chrome-stable
```

**四、使用rpm命令下载.rpm文件**

(rpm是Red Hat Enterprise Linux（RHEL) 和CentOS中最常用的下载.rpm文件的命令。它可以从本地硬盘上的.rpm文件中安装和卸载软件包。

**1.安装.rpm文件**

在终端中输入以下命令来安装.rpm文件：

```
sudo rpm -ivh <package-name>.rpm
```

例如linux 电子书，如果你要安装Google Chrome：

```
sudo rpm -ivh google-chrome-stable_current_x86_64.rpm
```

**2.卸载.rpm文件**

如果你想卸载一个已经安装的.rpm文件，可以使用以下命令：

```
sudo rpm -e<package-name>
```

例如，如果你要卸载Google Chrome：

```
sudo rpm -e google-chrome-stable
```

**五、使用snap命令下载软件**

snap是Ubuntu和Debian中最新的下载软件包的命令。它可以从snap store中下载、安装和卸载软件包。

**1.搜索软件包**

如果你不知道要下载哪个软件包，可以使用以下命令搜索：

```
sudo snap find <package-name>
```

例如，如果你要搜索VLC Media Player:

```
sudo snap find vlc
```

**2.安装软件包**

当你找到了需要下载的软件包后，可以使用以下命令进行安装：

```
sudo snap install <package-name>
```

例如，如果你要安装VLC Media Player:

```
sudo snap install vlc
```

**3.卸载软件包**

如果你想卸载一个已经安装的软件包，可以使用以下命令：

```
sudo snap remove <package-name>
```

例如，如果你要卸载VLC Media Player：

```
sudo snap remove vlc
```

**六、使用wget命令下载文件**

wget是一个在Linux系统中用于从Web服务器上自动下载文件的命令行工具。

**1.下载文件**

在终端中输入以下命令来下载文件：

```
wget <file-url>
```

例如qq linux，如果你要下载Python 3.9.0版本：

```
wget
```

**七、使用curl命令下载文件**

curl是一个在Linux系统中用于从Web服务器上自动下载文件的命令行工具。

**1.下载文件**

在终端中输入以下命令来下载文件：

```
curl -O<file-url>
```

例如，如果你要下载Python 3.9.0版本：

```
curl -O
```

**八、使用git命令从GitHub上下载代码**

在Linux系统中，使用git可以轻松地从GitHub上下载代码。

**1.下载代码**

在终端中输入以下命令来下载代码：

```
git clone <repository-url>
```

例如，如果你要下载TensorFlow的源代码：

```
git clone
```

**九、使用tar命令解压文件**

tar命令是在Linux系统中用于解压文件的命令行工具。

**1.解压文件**

在终端中输入以下命令来解压文件：

```
tar -zxvf <file-name>.tar.gz
```

例如，如果你要解压Python 3.9.0的源代码：

```
tar -zxvf Python-3.9.0.tgz
```

到此为止，我们已经详细介绍了Linux下载软件的常用命令。相信这些命令可以帮助你快速、方便地获取各种软件。
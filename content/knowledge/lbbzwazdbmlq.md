---



title: "Linux必备！掌握安装deb包命令，轻松装软件"
description: "Linux必备！掌握安装deb包命令，轻松装软件"
keywords: "Linux必备！掌握安装deb包命令，轻松装软件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681502802534_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在Linux系统中，deb包是一种常见的软件安装文件格式。但是，对于新手来说，可能不知道如何使用命令行来安装deb包。本文将为大家详细介绍如何使用命令行来安装deb包，让你轻松掌握Linux系统的软件安装技能。

**一、下载deb包**

首先需要从官方网站或其他可靠渠道下载需要安装的deb包。下载完成后，我们可以通过以下命令来查看文件所在路径：

```
bash
$ ls Downloads/
```

**二、安装dpkg**

dpkg是Debian Linux系统中用于管理.deb软件包的主要工具之一。如果我们的系统没有安装dpkg，则需要通过以下命令进行安装：

![ubuntu安装deb包命令_linux 安装deb包命令_linux的deb包怎么安装](https://www.linuxcool.com/wp-content/uploads/2023/04/1681502802534_0.jpg)

```
bash
$ sudo apt-get install dpkg
```

**三、安装deb包**

有了dpkg之后，我们就可以使用以下命令来安装deb包：

```
bash
$ sudo dpkg -i package_file_name.deb
```

其中，package_file_name.deb为我们下载的deb文件名。执行以上命令后 **linux 安装deb包命令**，系统会自动解压并安装该软件。

**四、卸载deb包**

如果我们想卸载已经安装的软件，可以使用以下命令：

```
bash
$ sudo dpkg -r package_name
```

其中，package_name为我们要卸载的软件名。

**五、强制卸载deb包**

如果我们无法正常卸载软件，可以使用以下命令来强制卸载：

```
bash
$ sudo dpkg -r--force-all package_name
```

这个命令会强制删除软件，但是可能会造成不可预知的后果，所以慎用。

**六、查看deb包信息**

我们可以使用以下命令来查看deb包的详细信息：

```
bash
$ dpkg-deb -I package_file_name.deb
```

该命令会列出deb包的所有信息嵌入式linux论坛，包括软件名称、版本号、作者等。

**七、查看已安装软件信息**

如果我们想要查看系统中已经安装的软件信息，可以使用以下命令：

```
bash
$ dpkg -l
```

该命令会列出所有已安装软件的详细信息。

**八、更新软件源**

在安装deb包之前 **linux 安装deb包命令**，我们需要先更新系统的软件源。我们可以使用以下命令来更新：

```
bash
$ sudo apt-get update
```

该命令会下载最新的软件列表，并更新本地缓存。

**九、升级已安装软件**

如果我们想要升级系统中已经安装的软件，可以使用以下命令：

```
bash
$ sudo apt-get upgrade
```

该命令会检查所有已经安装的软件linux系统，并尝试升级到最新版本。
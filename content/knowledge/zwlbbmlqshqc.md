---



title: "掌握Linux版本命令，轻松获取操作系统信息！"
description: "掌握Linux版本命令，轻松获取操作系统信息！"
keywords: "掌握Linux版本命令，轻松获取操作系统信息！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679724479322_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

作为一名Linux爱好者，你肯定知道版本信息对于系统管理和维护的重要性。而获取Linux操作系统版本的方法有很多种，比如使用命令行工具。本文将介绍9个方面的命令行工具以及它们的详细使用方法，帮助你成为Linux版本达人。

1. uname命令

uname命令是最基本、最常用的获取操作系统信息的命令。它可以显示许多关于操作系统的信息，包括内核版本、硬件架构、主机名称等。在终端中输入以下命令：

```
uname -a
```

这个命令会输出类似下面的结果：

```
Linux ubuntu 5.10.0-16-generic #17-Ubuntu SMP Fri Feb 26 22:57:30 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

其中，“Linux”表示操作系统类型，“ubuntu”是主机名，“5.10.0-16-generic”是内核版本号，“x86_64”表示硬件架构。

2. lsb_release命令

lsb_release命令可以显示Linux发行版的相关信息，包括发行版名称、版本号和代码名称等。在终端中输入以下命令：

```
lsb_release -a
```

![查询linux操作系统版本命令_linux操作系统版本命令_linux操作系统版本命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679724479322_0.webp)

这个命令会输出类似下面的结果：

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.2 LTS
Release:        20.04
Codename:       focal
```

其中，“Distributor ID”表示发行版名称，“Description”表示发行版描述，“Release”表示版本号，“Codename”表示代码名称。

3. cat /etc/os-release命令

cat /etc/os-release命令可以显示操作系统的信息，包括发行版名称、版本号、ID等。在终端中输入以下命令：

```
cat /etc/os-release
```

这个命令会输出类似下面的结果：

```
NAME="Ubuntu"
VERSION="20.04.2 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 20.04.2 LTS"
VERSION_ID="20.04"
HOME_URL=";
SUPPORT_URL=";
BUG_REPORT_URL=";
PRIVACY_POLICY_URL=";
VERSION_CODENAME=focal
UBUNTU_CODENAME=focal
```

其中，“NAME”表示发行版名称，“VERSION”表示版本号和代码名称。

4. hostnamectl命令

hostnamectl命令可以显示主机名和操作系统版本信息。在终端中输入以下命令：

```
hostnamectl
```

这个命令会输出类似下面的结果：

```
   Static hostname: ubuntu
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID: 1e8a4e23c4f74e0b8d47d8f9c596f9a7
           Boot ID: d5b73d5c5dd64f1a8d5e5e2a44b9a7b0
  Operating System: Ubuntu 20.04.2 LTS
            Kernel: Linux 5.10.0-16-generic
      Architecture: x86-64
```

其中，“Static hostname”表示主机名，“Operating System”表示操作系统名称和版本号。

5./proc/version命令

/proc/version是一个特殊的文件linux运维面试题，它包含了Linux内核的版本信息。在终端中输入以下命令：

```
cat /proc/version
```

这个命令会输出类似下面的结果：

```
Linux version 5.10.0-16-generic (buildd@lgw01-amd64-045)(gcc (Ubuntu 10.2.0-13ubuntu1) 10.2.0, GNU ld (GNU Binutils for Ubuntu)2.36.1)#17-Ubuntu SMP Fri Feb 26 22:57:30 UTC 2021
```

其中，“Linux version”后面的字符串表示内核版本信息。

6. getconf LONG_BIT命令

getconf LONG_BIT命令可以显示当前操作系统的位数。在终端中输入以下命令：

```
getconf LONG_BIT
```

这个命令会输出类似下面的结果：

```
64
```

其中 **linux操作系统版本命令**，“64”表示当前系统是64位的。

7. dpkg -l命令

dpkg -l命令可以列出当前系统中安装的所有软件包及其版本信息。在终端中输入以下命令：

```
dpkg -l
```

这个命令会输出类似下面的结果：

```
||/ Name           Version      Architecture Description
+++-==============-============-============-=================================
ii  accountsservic 0.6.55-0ubun amd64        query and manipulate user account i
ii  acl            2.2.53-6     amd64        access control list - utilities
...
```

其中，“Name”表示软件包名称，“Version”表示软件包版本号。

8. rpm -q命令

rpm -q命令可以列出当前系统中安装的所有RPM软件包及其版本信息。在终端中输入以下命令：

```
rpm -qa
```

这个命令会输出类似下面的结果：

```
libX11-devel-1.7.0-1.fc34.x86_64
glibc-common-2.33-5.fc34.x86_64
...
```

其中，“libX11-devel”表示软件包名称，“1.7.0-1.fc34.x86_64”表示软件包版本号。

9. ls /etc/*release命令

ls /etc/*release命令可以列出当前系统中所有与版本相关的文件。在终端中输入以下命令：

```
ls /etc/*release
```

这个命令会输出类似下面的结果：

```
/etc/os-release  /etc/redhat-release  /etc/system-release  /etc/lsb-release
```

其中，“/etc/os-release”表示发行版信息文件 **linux操作系统版本命令**，“/etc/redhat-release”表示Red Hat Enterprise Linux的版本文件，“/etc/system-release”表示Amazon Linux的版本文件，“/etc/lsb-release”表示LSB信息文件。

总结

以上9个方面的命令行工具可以帮助你轻松获取Linux操作系统版本信息。当你需要快速了解系统信息时马哥linux，这些命令将会是你的得力助手。
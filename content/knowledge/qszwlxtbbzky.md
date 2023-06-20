---



title: "轻松掌握Linux系统版本查看，一步搞定！"
description: "轻松掌握Linux系统版本查看，一步搞定！"
keywords: "轻松掌握Linux系统版本查看，一步搞定！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685967342616_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

你是否也曾因为不知道自己的Linux系统版本而感到尴尬？或者在使用Linux系统时，遇到了一些与版本相关的问题，却不知道如何查看自己的系统版本？别担心，今天UWriter就来为大家详细介绍一下Linux系统版本查看命令，让你轻松掌握这一技能！

**1. uname命令**

(4040592cec1880aa70936989f05e7c31（Unix Name) 是一个用于打印当前操作系统相关信息的命令。在Linux中，使用4040592cec1880aa70936989f05e7c31命令可以查看当前操作系统的内核版本号、主机名、操作系统发行版等信息。

例如，在终端中输入以下命令：

```
bash
uname -a
```

运行结果如下：

```
bash
Linux ubuntu 5.11.0-19-generic #20-Ubuntu SMP Fri May 7 14:36:10 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux
```

从输出结果中可以看出，当前系统使用的是Linux内核版本号为5.11.0-19-generic的Ubuntu发行版。

**2./etc/issue文件**

/etc/issue文件是一个包含当前操作系统发行版信息的文本文件。在大多数Linux发行版中，该文件位于根目录下。

例如，在终端中输入以下命令：

```
bash
cat /etc/issue
```

运行结果如下：

```
bash
Ubuntu 21.04 nl
```

从输出结果中可以看出，当前系统使用的是Ubuntu 21.04发行版。

**3./etc/os-release文件**

/etc/os-release文件是一个包含当前操作系统发行版信息的键值对文件。在大多数Linux发行版中 **linux系统版本查看命令**，该文件位于根目录下。

例如，在终端中输入以下命令：

```
bash
cat /etc/os-release
```

运行结果如下：

```
bash
NAME="Ubuntu"
VERSION="21.04 (Hirsute Hippo)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 21.04"
VERSION_ID="21.04"
HOME_URL=";
SUPPORT_URL=";
BUG_REPORT_URL=";
PRIVACY_POLICY_URL=";
VERSION_CODENAME=hirsute
UBUNTU_CODENAME=hirsute
```

从输出结果中可以看出 **linux系统版本查看命令**，当前系统使用的是Ubuntu 21.04发行版。

![linux查看qt版本命令_linux版本查看命令_linux系统版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685967342616_0.jpg)

**4. lsb_release命令**

(lsb_release（Linux Standard Base Release) 是一个用于查看当前操作系统发行版信息的命令。在大多数Linux发行版中，该命令已经预装。

例如，在终端中输入以下命令：

```
bash
lsb_release -a
```

运行结果如下：

```
bash
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 21.04
Release:        21.04
Codename:       hirsute
```

从输出结果中可以看出，当前系统使用的是Ubuntu 21.04发行版。

**5. cat /proc/version命令**

cat /proc/version命令可以查看当前系统的内核版本号。

例如linux系统官网，在终端中输入以下命令：

```
bash
cat /proc/version
```

![linux版本查看命令_linux查看qt版本命令_linux系统版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685967342616_1.gif)

运行结果如下：

```
bash
Linux version 5.11.0-19-generic (buildd@lgw01-amd64-040)(gcc (Ubuntu 10.3.0-1ubuntu1) 10.3.0, GNU ld (GNU Binutils for Ubuntu)2.36.1)#20-Ubuntu SMP Fri May 7 14:36:10 UTC 2021
```

从输出结果中可以看出linux vps，当前系统使用的是Linux内核版本号为5.11.0-19-generic。

**6. hostnamectl命令**

hostnamectl命令可以查看当前系统的主机名、操作系统发行版等信息。

例如，在终端中输入以下命令：

```
bash
hostnamectl
```

运行结果如下：

```
bash
   Static hostname: ubuntu
         Icon name: computer-desktop
           Chassis: desktop
        Machine ID: a8f7b9f7c4e74f32be4a8eaf28e47d43
           Boot ID: f4bda600d6d14a029c2edf2e5ca9e5db
  Operating System: Ubuntu 21.04
            Kernel: Linux 5.11.0-19-generic
      Architecture: x86-64
```

从输出结果中可以看出，当前系统使用的是Ubuntu 21.04发行版。

**7. cat /etc/debian_version命令**

![linux查看qt版本命令_linux版本查看命令_linux系统版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685967342616_2.png)

cat /etc/debian_version命令可以查看当前系统的Debian版本号。

例如，在终端中输入以下命令：

```
bash
cat /etc/debian_version
```

运行结果如下：

```
bash
bullseye/sid
```

从输出结果中可以看出，当前系统使用的是Debian发行版的bullseye/sid版本。

**8. cat /etc/redhat-release命令**

cat /etc/redhat-release命令可以查看当前系统的Red Hat版本号。

例如，在终端中输入以下命令：

```
bash
cat /etc/redhat-release
```

运行结果如下：

![linux查看qt版本命令_linux系统版本查看命令_linux版本查看命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685967342616_3.gif)

```
bash
cat:/etc/redhat-release: No such file or directory
```

从输出结果中可以看出，当前系统未安装Red Hat发行版。

**9. cat /etc/SuSE-release命令**

cat /etc/SuSE-release命令可以查看当前系统的SUSE版本号。

例如，在终端中输入以下命令：

```
bash
cat /etc/SuSE-release
```

运行结果如下：

```
bash
cat:/etc/SuSE-release: No such file or directory
```

从输出结果中可以看出，当前系统未安装SUSE发行版。

以上就是Linux系统版本查看命令的详细介绍。掌握这些命令，不仅可以帮助我们更好地了解自己的Linux系统，还可以在遇到版本相关问题时提供帮助。希望本文能够对大家有所帮助！
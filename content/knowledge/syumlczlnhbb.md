---



title: "使用uname命令查找Linux内核版本的几种方法方法介绍"
description: "使用uname命令查找Linux内核版本的几种方法方法介绍"
keywords: "使用uname命令查找Linux内核版本的几种方法方法介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679655698321_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

想知道您的系统使用哪个Linux内核版本吗？以下是在Linux终端中检查内核版本的几种方法。

当您需要了解系统上正在使用的确切Linux内核版本时，您可能会遇到这种情况。借助功能强大的Linux 命令行linux虚拟主机，您可以轻松地找到答案。

如何找到Linux内核版本

在撰写本文时 **linux命令查看内核版本**，我正在使用Ubuntu 18.04。但是这些 命令是通用的，可以在Fedora，Debian，CentOS红旗linux6.0，SUSE Linux或任何其他Linux发行版上使用。

使用uname命令查找Linux内核

uname是用于获取系统信息的Linux命令。您也可以使用它来确定您使用的是32位还是64位系统。

打开一个终端并使用以下命令：

[linuxmi@linux:~/]$ uname -r

输出将类似于以下内容：

![linux命令查看内核版本_查看linux内核版本_linux内核版本查看](https://www.linuxcool.com/wp-content/uploads/2023/03/1679655698321_0.jpg)

5.3.0-28-generic

这意味着您正在运行Linux内核5.3.0-28，或者更笼统地说，您正在运行Linux内核版本5.3。

但是其他数字在这里意味着什么？ 让我向您解释一下：

5 –内核版本

3 –重大修订

0 –轻微修订

28 –错误修复

generic–特定于版本的字符串。 对于Ubuntu，这意味着我正在使用桌面版本。 对于Ubuntu服务器版本，它应该是server。

您还可以将uname命令与-a选项一起使用。 如果需要，这将提供更多的系统信息。

[linuxmi@linux:~/]$ uname -a

输出将类似于以下内容：

Linux linux 5.3.0-28-generic #30~18.04.1-Ubuntu SMP Fri Jan 17 06:14:09 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux

让我解释一下输出并赋予它一个含义:：

Linux –内核名称。 如果在BSD或macOS上运行相同的命令，结果将有所不同。

linux –主机名

(5.3.0-28-generic –内核版本（我们刚刚说过了) 

#30~18.04.1-Ubuntu SMP Fri Jan 17 06:14:09 UTC 2020 – 这意味着Ubuntu编译了5.3.0-28-generic 30次。最后的编译时间戳也在那里。

x86_64 –机器架构

x86_64 –处理器架构

(x86_64 –操作系统体系结构（您可以在64位处理器上运行32位OS) 

(GNU/Linux –操作系统（不，它不会显示发行名称) 

2、使用/proc/version文件查找Linux内核

在Linux中，您还可以在文件/proc/version中找到Linux内核信息。 只需查看此文件的内容即可：

![linux内核版本查看_查看linux内核版本_linux命令查看内核版本](https://www.linuxcool.com/wp-content/uploads/2023/03/1679655698321_1.png)

[linuxmi@linux:~/]$ cat /proc/version

您会看到类似于我们用uname看到的输出。

Linux version 5.3.0-28-generic (buildd@lcy01-amd64-009) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #30~18.04.1-Ubuntu SMP Fri Jan 17 06:14:09 UTC 2020

您可以在此处看到内核版本5.3.0-28-generic

3.使用dmesg命令查找Linux内核版本

dmesg是用于编写内核消息的功能强大的命令。 在获取系统信息时也非常有用。

由于dmesg提供了很多信息，因此您应该使用类似less的命令来阅读它。 但是由于您只是在这里检查Linux内核版本，因此在Linux上进行grepping应该会提供所需的输出。

[linuxmi@linux:~/]$ dmesg | grep Linux

![linux命令查看内核版本_查看linux内核版本_linux内核版本查看](https://www.linuxcool.com/wp-content/uploads/2023/03/1679655698321_2.png)

输出只有几行，但是您应该能够很容易地识别出Linux内核版本。

[ 0.000000] Linux version 5.3.0-28-generic (buildd@lcy01-amd64-009) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #30~18.04.1-Ubuntu SMP Fri Jan 17 06:14:09 UTC 2020 (Ubuntu 5.3.0-28.30~18.04.1-generic 5.3.13)

[ 0.462531] ACPI: Added _OSI(Linux-Dell-Video)

[ 0.462532] ACPI: Added _OSI(Linux-Lenovo-NV-HDMI-Audio)

[ 0.462533] ACPI: Added _OSI(Linux-HPI-Hybrid-Graphics)

[ 0.600862] pps_core: LinuxPPS API ver. 1 registered

[ 1.290385] Linux agpgart interface v0.103

[ 1.355403] usb usb1: Manufacturer: Linux 5.3.0-28-generic ohci_hcd

[ 16.311337] 08:42:28.440352 main OS Product: Linux

您如何查看Linux内核版本和其他信息？在这里讨论的三种方式中 **linux命令查看内核版本**，我一直都使用uname。 比较方便。

你呢？ 您更喜欢使用哪个命令来获取Linux内核信息？
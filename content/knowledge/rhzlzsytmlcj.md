---



title: "如何在Linux中使用tar命令创建tar备份？"
description: "如何在Linux中使用tar命令创建tar备份？"
keywords: "如何在Linux中使用tar命令创建tar备份？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![linux执行bin文件命令_linux 命令输出到文件_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_0.jpg)

大企鹅－linux

假若您正在找寻Linux系统上的免费命令行备份工具，这么tar命令就是您的解决方案。Tar命令可以为您的应用程序、配置文件和系统文件夹创建备份。

tartapearchive)即磁带归档，可以将多个文件和目录归档到一个tar文件中。这个tar文件也可以使用gzip和bzip2压缩实用程序进行压缩。一旦我们打算好了tar备份，我们就可以使用scp或rsync命令轻松地将其传输到远程备份服务器。

在这篇文章中，我们将演示怎么在Linux中使用tar命令创建备份。

怎样创建tar备份文件?

要创建tar备份文件，首先确定作为备份的一部份的文件和文件夹。假定我们要备份/home/linuxtechilinux串口驱动，/etc和/opt文件夹。运行以下tar命令

```
$ sudo tar -cvpf  system-back.tar  /home/linuxtechi /etc /opt
```

这将在当前工作目录中创建一个tarball，在前面的tar命令中，我们使用了以下选项

![linux执行bin文件命令_linux 命令输出到文件_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_1.jpg)

创建tar备份并使用gzip压缩

在tar命令中使用z选项使用gzip压缩，tar备份文件的扩充名为.tgz或.tar.gz

```
$ sudo tar -zcvpf system-back.tgz /home/linuxtechi /etc /opt
```

创建tar备份并使用bzip2压缩

在tar命令中使用j选项使用bzip2压缩，tar备份文件的扩充名为.tbz2或.tar.bz2

```
$ sudo tar -jcvpf system-back.tbz2 /home/linuxtechi /etc /opt
```

怎么追加一个文件tar备份?

追加一个文件到现有的tar备份文件linux vps，使用-r选项，完整的命令将如下所示

![linux文件传输命令_linux执行bin文件命令_linux 命令输出到文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_2.png)

Syntax:$tar-rvf{tar-backup}{new-file-to-be-appended}

假定我们要将/root/app.yaml文件附加到system-backup.tar，运行

```
$ sudo tar -rvf system-back.tar /root/app.yaml
```

注意:我们不能追加文件或文件夹到已压缩的tar备份，由于它是不支持的。

怎样创建tar备份时排除文件?

要在创建tar备份时排除文件，请使用-X选项，前面跟随排除文件。要使用排除功能，我们必须创建一个排除文件，其少将包含要排除的文件名。

```
$ cat exclude.txt
/etc/debconf.conf

/etc/hosts
```

在创建/etc的tar备份时 **linux文件传输命令**，运行以下命令以排除exclude.txt中提及的文件

```
$ sudo tar -X exclude.txt -zcpvf etc-backup.tgz /etc
```

怎么查看tar备份的内容?

要查看tar备份的内容，使用-t选项，完整选项是-tvf，示例如下

```
$ sudo tar -tvf system-back.tgz | grep -i etc/fstab
-rw-rw-r-- root/root    665 2021-07-07 04:57 etc/fstab
```

怎么提取tar备份?

![linux 命令输出到文件_linux文件传输命令_linux执行bin文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_3.png)

在tar命令中使用-x选项提取tar备份，完整选项为-xpvf，示例如下

```
$ sudo tar -xpvf system-back.tgz
```

此命令将在当前工作目录中提取系统back.tgz，倘若您要在特定文件夹中提取它，请使用-C选项，在下边的示例中，我们将system-back.tgz提取到/var/tmp目录

```
$ sudo tar -xpvf system-back.tgz -C /var/tmp/
$ ls -l /var/tmp/
```

![linux执行bin文件命令_linux 命令输出到文件_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677334265402_4.jpg)

怎么验证tar备份的完整性?

对于tarball，使用-tf选项，之后将输出重定向到/dev/null

```
$ tar -tf system-back.tar > /dev/null
```

假如里面的命令没有任何输出，这么我们可以说没有毁坏。

在发生破损的情况下，我们将得到如下所示的输出

要验证压缩tar备份的完整性 **linux文件传输命令**，请使用以下方式

验证.tgz/.tar.gz完整性

```
$ gunzip -c system-back.tgz | tar -t > /dev/null
```

验证.tbz2/.tar.bz2完整性

```
$ tar -tvf system-back.tbz2 > /dev/null
```

以上命令不应当形成任何输出。假如有输出，可以说压缩的tar备份中可能有一些破损。
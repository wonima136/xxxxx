---



title: "Windows中的文件需要放在没有中文的目录下"
description: "Windows中的文件需要放在没有中文的目录下"
keywords: "Windows中的文件需要放在没有中文的目录下"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1682971881263_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

有时侯须要把Windows中的文件传给Linux,或则把Linux中的文件传给Windows,用Xftp就可以传输,

然而某日发觉Xftp不能用了,或则没有安装Xftp的话

![linux系统中怎么搜索文件命令大全_linux 传输文件命令_linux编辑文件命令 vi](https://www.linuxcool.com/wp-content/uploads/2023/05/1682971881263_0.webp)

在命令窗口中使用scp命令传输文件也是一个不错的选择

1在Windows中上传文件到Linux

在文件所在目录下shift+右键打开powershell窗口,输入命令

```
相对路径
scp .backup-platform.zip root@192.168.1.6:/opt/
绝对路径
scp E:Scp_filebackup-platform.zip root@192.168.1.6:/opt/
```

注意:

1)Windows中的文件须要置于没有英文的目录下,否则会报错./backup-platform:Nosuchfileordirectory

2)Windows中的文件须要打包成压缩包再发送,否则会报错./backup-platform:notaregularfile

可以看见上传成功

2在Linux中上传文件到Windows

```
相对路径
scp sql_bak.sql administrator@192.168.1.4:e:Scp_file
绝对路径
scp /opt/sql_bak.sql administrator@192.168.1.4:e:Scp_file
```

注意：由于windows系统本身不支持ssh合同linux公社中标linux，所以，要想这个命令成功执行，必须在windows顾客端安装sshforwindows的顾客端软件 **linux 传输文件命令 linux 传输文件命令**，例如winsshd，使windows系统支持ssh合同才行。
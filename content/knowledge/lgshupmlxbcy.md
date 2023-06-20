---



title: "linux 格式化u盘命令 小编查阅了各式资料整理出简单好用的操作方法帮助！"
description: "linux 格式化u盘命令 小编查阅了各式资料整理出简单好用的操作方法帮助！"
keywords: "linux 格式化u盘命令 小编查阅了各式资料整理出简单好用的操作方法帮助！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676844310551_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

这篇文章主要介绍“Ubuntu下低格U盘的方式”，在日常操作中，相信好多人在Ubuntu下低格U盘的方式问题上存在疑问，小编查阅了各色资料，整理出简单好用的操作方式，希望对你们解答”Ubuntu下低格U盘的方式”的疑问有所帮助！接出来red hat linux下载，请跟随小编一上去学习吧！

首先执行sudofdisk-l查看你的硬盘的序号 **linux 格式化u盘命令**，一般是/dev/sdb之类的，U盘分区一般是/dev/sdb1

对于硬盘我们通常低格为FAT格式或则FAT32格式 **linux 格式化u盘命令**，不过在linux下那些会都显示为FAT格式。我们只须要执行命令：

![linux 格式化u盘命令_cmd强行格式化u盘命令_命令格式化u盘](https://www.linuxcool.com/wp-content/uploads/2023/02/1676844310551_0.jpg)

sudomkfs.vfat-F32/dev/sdb1即可将硬盘低格为fat32格式。

如果你要把指定c盘低格为NTFS格式这么你须要sudoapt-getinstallntfsprogs来安装ntfs读写工具，之后执行sudomkfs.ntfs/dev/sda1，此过程会很慢。对于要低格为linuxext格式的分区就更容易了：

![命令格式化u盘_cmd强行格式化u盘命令_linux 格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676844310551_1.jpg)

sudomkfs.ext4/dev/sda1#低格为ext4分区

![cmd强行格式化u盘命令_命令格式化u盘_linux 格式化u盘命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676844310551_2.webp)

sudomkfs.ext3/dev/sda1#低格为ext3分区

sudomkfs.ext2/dev/sda1#低格为ext2分区

PS：对于要低格的分区必需要先用umount卸载掉就能低格哦。

到此，关于“Ubuntu下低格U盘的方式”的学习就结束了，希望才能解决你们的苦恼。理论与实践的搭配能更好的帮助你们学习，快去试试吧！若果继续学习更多相关知识linux系统编程，请继续关注亿速云网站，小编会继续努力为你们带来更多实用的文章！
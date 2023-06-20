---



title: "umount命令 – 卸载文件系统"
description: "umount命令 – 卸载文件系统"
keywords: "umount命令 – 卸载文件系统"
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

umount命令来自英文单词“unmount”的缩写，其功能是用于卸载文件系统。与mount挂载命令需要同时提供设备名与挂载目录不同，umount卸载命令只需要提供设备名或挂载目录之一即可。

**语法格式：** umount [参数] 设备或目录名

**常用参数：**

-a卸载“/etc/mtab”文件中记录的所有设备-F强制卸载设备而不询问-h显示帮助信息-n卸载时不要将信息写入“/etc/mtab”文件中-r使用只读方式重新挂载文件系统-t仅卸载指定的文件系统-v显示执行过程详细信息-V显示版本信息

**参考示例**

卸载指定的文件系统：

```
[root@linuxcool ~]# umount /dev/sdb
```

卸载指定的文件系统并显示过程：

```
[root@linuxcool ~]# umount -v /dev/cdrom
umount: /media/cdrom (/dev/sr0) unmounted
```
---



title: "bootadm命令 – 管理引导配置"
description: "bootadm命令 – 管理引导配置"
keywords: "bootadm命令 – 管理引导配置"
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

(bootadm 命令管理启动存档，对于 x86 的启动环境，管理 GRUB（GRand Unified Bootloader) 菜单。 对于x86来说，支持Legacy GRUB和GRUB2（但不是同时）。更新存档选项为用户提供了一种更新引导存档的方法，作为一种预防措施或作为恢复程序的一部分。

**语法格式：** bootadm [参数]

**常用参数：**

update-archive更新引导归档文件set-menu设置缺省的引导项list-menu显示GRUB 菜单项add-entry添加菜单项

**参考实例**

更新引导归档文件：

```
[root@linuxcool ~]# bootadm update-archive
```

设置缺省的引导项：

```
[root@linuxcool ~]# bootadm set-menu default=5
```

显示GRUB 菜单项：

```
[root@linuxcool ~]# bootadm list-menu
```
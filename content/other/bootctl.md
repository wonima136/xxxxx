---



title: "bootctl命令 – 控制固件与systemd-boot引导管理器"
description: "bootctl命令 – 控制固件与systemd-boot引导管理器"
keywords: "bootctl命令 – 控制固件与systemd-boot引导管理器"
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

bootctl能够检查 EFI 引导管理器状态、列出可用引导管理器、列出启动项， 还能够在当前系统上安装、更新、卸载 systemd-boot引导管理器。

**语法格式：** bootctl {参数]

**常用参数：**

--path=ESP(EFI System Partition)的挂载目录。若未指定，那么将依次检查 /efi, /boot, /boot/efi 目录。 建议尽可能将 ESP 挂载到 /boot 目录-p,--print-path-此选项用于改变 status 命令的行为， 让该命令仅显示 ESP(EFI System Partition) 的挂载目录之后 就立即退出--no-variables忽略固件中的引导管理器列表(存储在 EFI 变量中)--no-pager不将程序的输出内容管道(pipe)给分页程序-h, --help显示简短的帮助信息并退出--version显示简短的版本信息并退出

**参考实例**

显示简要的固件信息、本次启动所使用的引导管理器等信息：

```
[root@linuxcool ~ ]# bootctl status
```

更新所有已安装的 systemd-boot 引导管理器：

```
[root@linuxcool ~]# bootctl update
```

将所有已安装的 systemd-boot 从 ESP(EFI system partition) 中卸载，并且从EFI引导管理器启动顺序列表中删除对应的项：

```
[root@linuxcool ~]# bootctl remove
```

列出所有符合 Boot Loader Specification 规范的 可用启动项、引导管理器自动生成的启动项、任何其他找到的启动项：

```
[root@linuxcool ~]# bootctl list
```

设置默认启动项。ID 是一个启动项 ID 标识符。 set-oneshot 命令仅临时设置下次启动所使用的默认启动项，而 set-default 命令则是永久设置默认启动项：

```
[root@linuxcool ~]# bootctl set-default ID, set-oneshot ID
```
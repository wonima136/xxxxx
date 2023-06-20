---



title: "lspci命令 – 显示当前设备PCI总线设备信息"
description: "lspci命令 – 显示当前设备PCI总线设备信息"
keywords: "lspci命令 – 显示当前设备PCI总线设备信息"
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

lspci命令来自英文词组“list PCI”的缩写，其功能是用于显示当前设备PCI总线设备信息。

**语法格式：** lspci [参数] [设备名]

**常用参数：**

-b使用以总线为中心的视图-d仅显示指定厂商和设备信息-i设置PCI编号列表文件-m以机器可读方式显示PCI设备信息-M使用总线映射模式-n以数字方式显示PCI设备信息-nn将PCI厂商和设备代码显示为数字和名称形式-q使用DNS查询中央PCI ID数据库-p设置包含PCI总线信息的目录-s仅显示指定总线插槽的设备和功能块信息-t使用树状结构显示PCI设备的层次关系-v显示执行过程详细信息

**参考示例**

显示当前主机的所有PCI总线设备信息：

```
[root@linuxcool ~]# lspci
00:00.0 Host bridge: Intel Corporation 440BX/ZX/DX - 82443BX/ZX/DX Host bridge (rev 01)
00:01.0 PCI bridge: Intel Corporation 440BX/ZX/DX - 82443BX/ZX/DX AGP bridge (rev 01)
00:07.0 ISA bridge: Intel Corporation 82371AB/EB/MB PIIX4 ISA (rev 08)
00:07.1 IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE (rev 01)
00:07.3 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI (rev 08)
00:07.7 System peripheral: VMware Virtual Machine Communication Interface (rev 10)
………………省略部分输出信息………………
```

以树状结构显示当前主机的所有PCI总线设备信息：

```
[root@linuxcool ~]# lspci -t
-[0000:00]-+-00.0
           +-01.0-[01]--
           +-07.0
           +-07.1
           +-07.3
           +-07.7
           +-0f.0
           +-11.0-[02]----00.0
           +-15.0-[03]----00.0
           +-15.1-[04]--
………………省略部分输出信息………………
```
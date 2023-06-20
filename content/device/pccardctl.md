---



title: "pccardctl命令 – PCMCIA卡控制工具"
description: "pccardctl命令 – PCMCIA卡控制工具"
keywords: "pccardctl命令 – PCMCIA卡控制工具"
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

pccardctl命令的作用是可以监视和控制PCMCIA插槽的状态。

(PCMCIA是专门用在笔记本或PDA、数码相机等便携设备上的一种接口规范（总线结构) 。笔记本网卡通常都支持PCMCIA规范，而台式机网卡则不支持此规范。

PCMCIA插槽是笔记本电脑上最重要的设备扩展接口，可以用来插入传真卡/网卡/存储卡/声卡等等，PCMCIA的主要优势是可以带电插拔，配合适当软件后可以实现即插即用。

如果pccardctl命令由root用户执行，则所有命令均可用。如果它是由非特权用户执行的，则只能访问参考性命令。

**语法格式：** pccardctl[参数] [命令]

**常用参数：**

-V显示版本信息并退出-v增加命令的详细程度-vv进一步增加命令的详细程度status显示当前的插槽状态config显示插槽配置，包括电源设置、中断和I/O设置及相关配置ident显示卡的识别信息，包括产品的识别字符串、制造商ID代码和功能ID码info作用与ident命令相同，但它的输出被格式化为一系列的Bourne-stype Shell变量ls显示有关系统中PCMCIA插槽和存在设备的扩展调试信息suspend关闭插槽并断电resume恢复插槽供电，并重新配置使用eject通知所有客户端，当前卡被弹出并切插槽电源insert通知所有客户端驱动程序，这个卡已经插入

**参考实例**

显示PCMCIA插槽和存在设备的扩展调试信息：

```
[root@linuxcool ~]# pccardctl ls
Socket 0 Bridge: [linuxcool_cardbus] (bus ID: 0000:03:01.0)
```

显示当前的插槽状态：

```
[root@linuxcool ~]# pccardctl status 0
```

关闭插槽并断电：

```
[root@linuxcool ~]# pccardctl suspend 0
```
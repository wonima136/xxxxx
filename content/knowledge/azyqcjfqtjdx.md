---



title: "安装要求创建分区添加大小为10G的扩展分区"
description: "安装要求创建分区添加大小为10G的扩展分区"
keywords: "安装要求创建分区添加大小为10G的扩展分区"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1680206807406_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

目录

1.安装要求创建分区

(（1) 添加大小为10G的硬碟

(（2) 通过该硬碟创建大小问5G的主分区和5G的扩充分区。

(（3) 将扩充分区分别创建大小为2G和3G的逻辑分区。

![linux扫描磁盘命令_linux磁盘相关命令_linux 磁盘扩容命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680206807406_0.png)

2.将三个分区分别挂载到/p1和/p5和/p6分区

第一步降低硬碟

在虚拟机死机状态后进行添加一块10GB的硬碟

根据系统提示进行下一步操作最后一定要按确定后关掉界面

第二步查看主机块设备

打开虚拟机后用命令

lsdlk查看主机块设备

第三步创建5G的主分区

fadisk/dev/nvme0n进行分区

n新建分区

d删掉分区

p查看分区信息

p主分区总共有4个空闲的分区可以进行分配现今须要主分区占5Gb

```
命令输入 m 获取帮助)：n
分区类型
   p   主分区 (0 primary, 0 extended, 4 free)
   e   扩展分区 (逻辑分区容器)
选择 默认 p)：
将使用默认回应 p。
分区号 (1-4, 默认  1):
第一个扇区 (2048-20971519, 默认 2048):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (2048-20971519, 默认 20971519): +1G
创建了一个新分区 1，类型为“Linux”，大小为 1 GiB。
命令输入 m 获取帮助)：n
分区类型
   p   主分区 (1 primary, 0 extended, 3 free)
   e   扩展分区 (逻辑分区容器)
选择 默认 p)：
将使用默认回应 p。
分区号 (2-4, 默认  2):
第一个扇区 (2099200-20971519, 默认 2099200):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (2099200-20971519, 默认 20971519): +2G
创建了一个新分区 2，类型为“Linux”，大小为 2 GiB。
命令输入 m 获取帮助)：N
N：未知命令
命令输入 m 获取帮助)：n
分区类型
   p   主分区 (2 primary, 0 extended, 2 free)
   e   扩展分区 (逻辑分区容器)
选择 默认 p)：
将使用默认回应 p。
分区号 (3,4, 默认  3):
第一个扇区 (6293504-20971519, 默认 6293504):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (6293504-20971519, 默认 20971519): +2G
创建了一个新分区 3，类型为“Linux”，大小为 2 GiB。
命令输入 m 获取帮助)：
```

将主分区由p1p2p3总占5GB进行显示

第四步进行扩充分区的创建

![linux扫描磁盘命令_linux磁盘相关命令_linux 磁盘扩容命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1680206807406_7.jpg)

```
选择 默认 e)：e
已选择分区 4
第一个扇区 (10487808-20971519, 默认 10487808):
最后一个扇区，+/-sectors 或 +size{K,M,G,T,P} (10487808-20971519, 默认 20971519):
直接enter
```

在选择分区时选择e **linux磁盘相关命令** 手机linux操作系统linux命令，之后将5G全部分给这儿，之后在按n由于没有分区可以分配了，这儿会直接步入逻辑分区 **linux磁盘相关命令**，之后继续n创建逻辑分区一个2G和一个3G.完成后进行wq保存

第五步检测分区情况
---



title: "locate命令 – 快速查找文件或目录"
description: "locate命令 – 快速查找文件或目录"
keywords: "locate命令 – 快速查找文件或目录"
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

(locate命令的功能是用于快速查找文件或目录。与find命令进行全局搜索不同，locate命令是基于了数据文件（/var/lib/locatedb) 进行的定点查找，由于缩小了搜索范围，因此快速快很多。

Linux系统需定期执行下updatedb命令对数据库文件进行更新，然后再使用locate命令进行查找，这样才会更加准确。

**语法格式：** locate [参数] 文件名

**常用参数：**

-b仅匹配文件名-c不输出文件名-d设置数据库所在目录 -i忽略大小写-l限制最大查找数量-q静默执行模式-r使用正则表达式-S显示数据库的统计信息-w匹配完整的文件路径--help显示帮助信息--version显示版本信息

**参考示例**

搜索带有指定关键词的文件：

```
[root@linuxcool ~]# updatedb
[root@linuxcool ~]# locate network
/dev/network_latency
/dev/network_throughput
/etc/networks
/etc/libvirt/qemu/networks
/etc/libvirt/qemu/networks/autostart
/etc/libvirt/qemu/networks/default.xml
………………省略部分输出信息………………
```

在指定的目录下，搜索带有指定关键词的文件：

```
[root@linuxcool ~]# locate /etc/network
 /etc/networks
```
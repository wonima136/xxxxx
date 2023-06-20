---



title: "auvirt命令 – 显示与虚拟机相关的数据"
description: "auvirt命令 – 显示与虚拟机相关的数据"
keywords: "auvirt命令 – 显示与虚拟机相关的数据"
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

auvirt命令显示在审核日志中发现的访客会话列表。如果指定了访客，则仅考虑与该访客相关的事件。若要指定访客，可以同时提供 UUID 或 VM 名称。

对于每个访客会话，该工具将打印一个带域名的记录、启动访客的用户、访客启动的时间以及访客停止的时间。

(如果指定参数”--all-events”，将显示更详细的输出。在此模式下，将显示其他记录，用于访客的停靠点、资源分配、主机关闭和 AVC 和异常事件。第一个字段指示事件类型，可以具有以下值：启动、停止、res、avc、anom 和向下（用于主机关闭) 。

默认情况下，auvirt 从系统审核日志文件中读取记录。但是，可以指定 --stdin和 --file参数来更改此行为。

**语法格式：** auvirt [参数]

**常用参数：**

--all-events显示所有虚拟化相关事件的记录--debug将调试消息打印到标准输出-f, --file _file_ 从给定文件中读取记录，而不是从系统审核日志文件-h, --help打印帮助消息--proof在每个事件之后添加一行，其中包含用于计算事件的审核记录的所有标识符。每个标识符由 unix 时间、毫秒和序列号组成--show-uuid将访客的 UUID 添加到每个记录中--stdin从标准输入读取记录，而不是从系统审核日志文件读取记录--summary打印包含有关找到的事件的信息的摘要。摘要包含考虑的时间范围、来宾启动和停止数、资源分配数、AVC 和异常事件数、主机关闭数和失败操作数-u, --uuid _UUID_ 仅显示与访客相关的事件与给定的 UUID-v, --vm _name_ 仅显示与具有给定名称的访客相关的事件

**参考实例**

查看访客名为linuxcool的本月的所有记录：

```
[root@linuxcool ~]# auvirt --start this-month --vm linuxcool --all-events
```

从指定定文件中读取记录：

```
[root@linuxcool ~]# auvirt -f file
```

将所有访客的 UUID 添加到每个记录中，我们需要指定一个输出文件：

```
[root@linuxcool ~]# auvirt --show-uuid > file
```
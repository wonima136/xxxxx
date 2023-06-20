---



title: "ss命令 – 显示活动套接字信息"
description: "ss命令 – 显示活动套接字信息"
keywords: "ss命令 – 显示活动套接字信息"
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

ss命令来自英文词组“Socket Statistics”的缩写，其功能是用于显示活动套接字信息。如果您之前使用过netstat命令，那么恭喜！ss命令与其十分相似，它们都用于显示套接字信息，而ss命令的优势在于它能够显示更多TCP和连接状态的详细信息，并且速度更快更高效。

**语法格式：** ss [参数]

**常用参数：**

-0显示数据包套接字-4基于IPv4网络协议-6基于IPv6网络协议-a显示所有套接字-d仅显示DCCP套接字-D将原始TCP套接字信息转储到文件-e显示执行过程详细信息-h显示帮助信息-i显示内部的TCP信息-l显示处于监听状态的套接字-m显示套接字的内存使用情况-n不解析域名-o显示计时器信息-p显示使用套接字的进程-s显示套接字使用概况-t仅显示TCP套接字-u仅显示UDP套接字-V显示版本信息-w仅显示RAW套接字-x仅显示Unix套接字

**参考示例**

显示系统当前的TCP套接字信息：

```
[root@linuxcool ~]# ss -t -a
State     Recv-Q     Send-Q     Local Address:Port     Peer Address:Port
LISTEN    0          128        0.0.0.0:ssh            0.0.0.0:*
ESTAB     0          52         192.168.10.10:ssh      192.168.10.21:59321
LISTEN    0          128        *:websm                *:*
LISTEN    0          128        [::]:ssh               [::]:*
```

显示系统当前的UDP套接字信息：

```
[root@linuxcool ~]# ss -u -a
State     Recv-Q     Send-Q     Local Address:Port     Peer Address:Port
UNCONN    0          0          0.0.0.0:bootpc         0.0.0.0:*
UNCONN    0          0          127.0.0.1:323          0.0.0.0:*
UNCONN    0          0          [::1]:323              [::]:*
```

显示系统当前的套接字使用概况：

```
[root@linuxcool ~]# ss -s
Total: 185
TCP:   4 (estab 1, closed 0, orphaned 0, timewait 0)
Transport Total     IP        IPv6
RAW       1         0         1
UDP       3         2         1
TCP       4         2         2
INET      8         4         4
FRAG      0         0         0
```
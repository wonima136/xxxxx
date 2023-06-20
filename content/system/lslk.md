---



title: "lslk命令 – 列出本地锁"
description: "lslk命令 – 列出本地锁"
keywords: "lslk命令 – 列出本地锁"
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

lslk命令的作用是可以列出本地inode上的文件锁的信息。

锁可以属于本地系统上的进程，也可以属于本地系统是NFS服务器的NFS客户端系统上的进程。

注意选定文件如果没有任何选项，lslk命令将列出与系统本地文件关联的所有锁。 指定选择选项后，将禁用所有锁的列表，并且将选择选项进行或运算。仅列出满足任何选择条件的锁。 指定-a选项时，将禁用所有锁的列表，并且将选择选项与在一起。仅列出符合所有选择条件的锁。

**语法格式：** lslk [参数] [路径]

**常用参数：**

(-a列出选择选项进行AND运算-b避免内核函数可能会阻塞-n禁止在网络主机名和网络地址之间互相转化-i<主机名>按拥有进程是Internet主机还是网络地址选择锁的列表-v列出版本信息-k<内核名称>以指定内核名称作为默认的内核名称列出文件路径-p<进程PID>按所属的进程标识（PID) 号选择锁的列表-S<超时时间>为内核函数lstat、readlink和stat指定一个可选的超时时间，单位为秒，否则可能出现死锁。超时时间最小设置为2，在默认情况下是15，当没有指定值时，则使用默认值-w禁止非致命警告消息

**输出字段：**

(SRC进程持有锁的来源PID进程持有锁的进程标识号DEV锁的文件所在的设备（主要和次要号码) INUM锁文件的inode号SZ锁文件的大小TY锁类型

r:读取

rw:读取和写入

w:写入

?:未知M锁的强制状态：0表示没有，1表示设置ST锁的相对字节偏移量WH锁的起始偏移量END锁的结束偏移量LEN锁的长度NAME锁文件的名称

**参考实例**

列出所有的锁：

```
[root@linuxcool ~]# lslk
```

从主机linuxcool.com上列出锁：

```
[root@localhost ~]# lslk -i linuxcool.com
```

列出进程1234和8888持有的锁：

```
[root@linuxcool ~]# lslk -p 1234,8888
```
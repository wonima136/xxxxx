---



title: "rsync命令 – 远程数据同步工具"
description: "rsync命令 – 远程数据同步工具"
keywords: "rsync命令 – 远程数据同步工具"
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

(rsync命令来自英文词组“remote sync”的缩写，其功能是用于远程数据同步。rsync命令能够基于网络（含局域网和互联网) 快速地实现多台主机间的文件同步工作，并与scp或ftp发送完整文件不同，rsync有独立的文件内容差异算法，会在传送前对两个文件进行比较，只传送两者内容间的差异部分，因此速度更快。

**语法格式：** rsync [参数] 目录名

**常用参数：**

-b备份指定目标文件-B设置检验算法使用的块大小-c对文件传输进行校验-d不递归目录文件，不传输子文件-D保留设备文件信息-g保留文件原始所有组身份-h显示帮助信息-H保留硬链接文件-l保留软链接文件-n显示将要传输的文件列表-o保留文件原始所有者身份-p保留文件原始权限信息-P显示进度信息-q使用精简输出模式-r递归处理所有子文件-R使用相对路径-t保留文件时间信息-v显示执行过程详细信息-x设置不跨越文件系统边界-z压缩文件

**参考示例**

(将本地目录（/Dir) 与远程目录（192.168.10.10:/Dir）相关联，保持文件同步：

```
[root@linuxcool ~]# rsync -r /Dir 192.168.10.10:/Dir
root@192.168.10.10's password: 此处输入远程服务器密码
```

(将远程目录（192.168.10.10:/Dir) 与本地目录（/Dir）相关联，保持文件同步：

```
[root@linuxcool ~]# rsync -r 192.168.10.10:Dir /Dir
root@192.168.10.10's password: 此处输入远程服务器密码
```

关联两个本地的目录，保持文件同步：

```
[root@linuxcool ~]# rsync -r /Dir1 /Dir2
```

列出本地指定目录内的文件列表：

```
[root@linuxcool ~]# rsync /Dir2/
drwxr-xr-x             18 2023/10/19 16:46:42 .
dr-xr-x---          4,096 2023/10/19 16:46:54 root
```

列出远程指定目录内的文件列表：

```
[root@linuxcool ~]# rsync 192.168.10.10:/Dir/
root@192.168.10.10's password: 此处输入远程服务器密码
drwxrwxrwt          4,096 2023/10/19 16:47:41 .
-r--r--r--             11 2023/10/17 03:13:19 .X0-lock
-r--------             11 2023/10/17 03:05:57 .X1024-lock
-rw-------            532 2023/10/17 02:31:58 .viminfo
-rw-r--r--          2,587 2023/10/17 02:59:47 anaconda.log
-rw-r--r--          2,604 2023/10/17 02:59:34 dbus.log
```
---



title: "lftp命令 – 优秀的命令行FTP客户端"
description: "lftp命令 – 优秀的命令行FTP客户端"
keywords: "lftp命令 – 优秀的命令行FTP客户端"
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

lftp支持FTP、SETP、HTTP和FTPs等多种文件传输协议。 还支持FXP，允许数据绕过客户端直接在两个FTP服务器之间传输。同时还有递归镜像整个目录树以及断点续传下载的功能， lftp的传输任务可以安排时间段计划执行，可以限制带宽和创建传输列表，支持类似Unix shell的任务控制。客户端还可以在交互式或自动脚本里使用。

**语法格式：** lftp [参数]

**常用参数：**

-f指定lftp要执行的脚本文件-c执行指定的命令后退出--help显示帮助信息--version显示当前版本号

**参考实例**

登陆后只用”ls”、”cd”等命令查看文件和改变目录：

```
([root@linuxcool ~]# lftp 用户名:密码@ftp地址:传送端口（默认21) 
```

使用”get”、”mget”、”mirror”、”pget”不同的指令功能下载文件：

```
> mget -c *.db  # 把所有的db文件以允许断点续传的方式下载。
> mirror aaa/ #  将aaa目录整个的下载下来，子目录也会自动复制
> pget -c -n 10 10G.file  以最多10个线程以允许断点续传的方式下载10G.file
```

(“put”、”mput”都是对文件上传的操作，”mirror -R” 将本地目录以迭代（包括子目录) 的方式反向上传到ftp站点：

```
> put linuxcool.tar
> mirror -R 本地目录名
```
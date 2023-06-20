---



title: "scp命令 – 基于SSH协议远程复制文件"
description: "scp命令 – 基于SSH协议远程复制文件"
keywords: "scp命令 – 基于SSH协议远程复制文件"
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

scp命令来自英文词组“secure copy”的缩写，其功能是用于基于SSH协议远程拷贝文件。scp命令可以在多台Linux系统之间复制文件或目录 ，有些类似于cp命令的功能，但复制的范围却不是本地，而是网络上另一台主机。

由于是基于SSH协议进行的复制操作，全部数据都是加密的，因此会比HTTP和FTP更加安全。

**语法格式：** scp 参数 文件或目录名 [远程服务器信息]

**常用参数：**

-1使用ssh协议版本1-2使用ssh协议版本2-4基于IPv4网络协议-6基于IPv6网络协议-B使用批处理模式-c使用指定密钥对传输文件进行加密-C使用压缩模式-F设置ssh配置文件路径-i从指定文件中读取传输文件的密钥-l设置宽带限制-o设置ssh服务选项-P设置远程主机的端口号-p保留文件的修改时间、访问时间和权限属性-q静默执行模式-r递归处理所有子文件-S设置加密传输时所使用的程序-v显示执行过程详细信息

**参考示例**

将某个本地文件复制到指定的远程主机的指定目录中：

```
[root@linuxcool ~]# scp File.cfg 192.168.10.10:/Dir
```

将指定远程主机中的某个文件复制到本地家目录中：

```
[root@linuxcool ~]# scp 192.168.10.10:/Dir/File.cfg /root
```

将某个本地目录复制到指定的远程主机的指定目录中：

```
[root@linuxcool ~]# scp -r Dir 192.168.10.10:/Dir
```

将指定远程主机中的某个目录复制到本地家目录中：

```
[root@linuxcool ~]# scp -r 192.168.10.10:/Dir /root
```

将某个本地文件复制到指定的远程主机的指定目录中，指定要使用的传输用户身份，并保留原始文件的权限属性。

```
[root@linuxcool ~]# scp -p File.cfg linuxprobe@192.168.10.10:/Dir
```
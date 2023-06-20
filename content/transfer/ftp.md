---



title: "ftp命令 – 文件传输协议客户端"
description: "ftp命令 – 文件传输协议客户端"
keywords: "ftp命令 – 文件传输协议客户端"
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

ftp命令来自英文词组“File Transfer Protocol”的缩写，其功能是用于文件传输协议客户端。FTP是我们当前最常用的文件传输协议之一，而ftp命令也是最常用的FTP协议的客户端啦，它能够用于在本地主机和远程主机之间上传和下载文件，实现两端服务器的通信。

匿名FTP服务器在登录时使用“anonymous”作为用户名，用任意的电子邮件作为密码。通常，匿名FTP服务器只能下载文件，而不允许用户上传文件。另外FTP协议使用明文传送用户的认证信息，很容易被局域网内的嗅探软件截获，所以使用ftp命令时要格外注意。

**语法格式：** ftp [参数] 域名或IP地址

**常用参数：**

-A使用主动模式-d使用调试模式-e禁用命令编辑和历史记录-g关闭文件名替换-i关闭交互模式-n禁用自动登录-p使用被动模式-t激活数据包追踪-v显示执行过程详细信息

**常用动作：**

ascii使用ASCII文本格式bell完成传输后发出提醒音binary使用二进制格式bye退出FTP控制会话cd切换到指定目录cdup切换到上级目录chmod更改文件权限delete删除指定文件dir显示指定目录中的文件列表get下载文件到本地help显示帮助信息lcd切换本地工作目录ls显示指定目录中的文件列表macdef定义宏命令mdelete删除一批文件mget下载一批文件到本地mkdir创建目录文件mput上传一批文件到服务器open创建一个新的连接prompt使用交互提示模式put上传文件到服务器pwd显示当前工作目录quit退出FTP控制会话rename更改文件名称rmdir删除指定目录status显示FTP服务状态system显示服务器主机系统类型

**参考示例**

使用匿名模式，连接到远程指定FTP服务器：

```
[root@linuxcool ~]# ftp 192.168.10.10
Connected to 192.168.10.10 (192.168.10.10).
220 (vsFTPd 3.0.3)
Name (192.168.10.10:root): anonymous
331 Please specify the password.
Password:此处敲击回车即可
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
```

从FTP服务器中下载指定的文件到本地目录：

```
tftp> get File.txt
tftp> quit
[root@linuxcool ~]# ls
anaconda-ks.cfg  Documents  initial-setup-ks.cfg  Pictures  File.txt  Videos
Desktop          Downloads  Music                 Public    Templates
```
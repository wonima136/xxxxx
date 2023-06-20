---



title: "常用的Windows、Linux、Unix三种系统的远程进入图文操作方法"
description: "常用的Windows、Linux、Unix三种系统的远程进入图文操作方法"
keywords: "常用的Windows、Linux、Unix三种系统的远程进入图文操作方法"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

服务器操作系统可以实现对计算机硬件与软件的直接控制和管理协调，任何计算机的运行离不开操作系统，服务器也一样ubuntu linux，服务器操作系统主要分为四大流派：WindowsServer、Netware、Unix、Linux

接出来就给你们分享下常用的Windows、Linux、Unix三种系统的远程步入图文操作方式

一．Windows操作系统

(1.打开本地笔记本，右键左下角菜单栏—点击【运行】—输入mstsc（远程桌面联接工具) ，快捷键：Win+R

![linux远程windows命令_linux 远程copy命令_远程桌面连接命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_0.png)

(![远程连接的快捷键命令（win10远程连接linux服务器) (1)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_1.jpg)

(2、如图，依次输入对应的服务器（server) IP以及端口，帐户密码；点击链接即可，有些机房机器是须要端口，有些是不须要的

(![远程连接的快捷键命令（win10远程连接linux服务器) (2)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_2.jpg)

二．Linux、Unix操作系统

目前Linux、Unix远程联接工具有好多种，您可以选择顺手的工具使用 **远程桌面连接命令 linux**，下边使用的是名为Putty的Linux、Unix远程联接工具，该工具是免费的，且不须要安装，在网上可以下载

1.下载启动Putty.exe程序，步入Putty主界面

(2.在Putty“HostName”输入IP地址，在SavedSession中输入希望保存的名子（可以任意) ，点击“Save”；便捷之后调用而不须要每次输入IP地址；点击“Open”进行联接

(![远程连接的快捷键命令（win10远程连接linux服务器) (4)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_3.png)

![linux 远程copy命令_linux远程windows命令_远程桌面连接命令 linux](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_4.jpg)

3.如上图所示输入帐户名root回车，按照提示 **远程桌面连接命令 linux**，分别输入您的Linux、Unix用户名和密码，密码不会显示在屏幕上，输入完成后回车即可

(![远程连接的快捷键命令（win10远程连接linux服务器) (5)](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_5.png)

这是要告诉你登入的主机秘钥指纹，点Yes就保存上去，之后就不会再弹出这个窗口，之后就正常登陆，点No不保存，上次还是要提示你，之后也可以正常登陆，假若一台主机我们只是临时登录一下，其实就是点No了，Cancel就是取消，也就是取消了此次登陆，假如你以前登录过这台主机，然而又弹出来这个对话框马哥linux，可能有以下几种情形：

![linux远程windows命令_远程桌面连接命令 linux_linux 远程copy命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677305739439_6.jpg)

·*主机重新安装了操作系统

·*这台主机可能有多个IP，此次用的是另外一个IP

·*有其他不怀好意的主机来假冒，诱使我们登陆，盗取隐秘信息

前两个情形很常见，通常点Yes就行了，前面这个嘛

唔……唔……点No/Cancel，再去寻问IDC服务商吧
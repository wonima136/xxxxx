---



title: "win10中使用linux命令的方法及使用方法介绍命令"
description: "win10中使用linux命令的方法及使用方法介绍命令"
keywords: "win10中使用linux命令的方法及使用方法介绍命令"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681243554709_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

![win10 linux子系统能用于开发吗,第1张](https://www.linuxcool.com/wp-content/uploads/2023/04/1681243554709_0.jpg)

linux命令是对Linux系统进行管理的命令。对于Linux系统来说，无论是中央处理器、内存、磁盘驱动器、键盘、鼠标，还是用户等都是文件，Linux系统管理的命令是它正常运行的核心，与之前的DOS命令类似。linux命令在系统中有两种类型：外置Shell命令和Linux命令。以下是win10中使用linux命令的方式：1首先，点击屏幕左下角的Win图标linux系统下载官网，之后在弹出的菜单中选择“所有应用”。

2在所有应用中找到并展开WindowsPowerShell文件夹，启动其下的WindowsPowerShell。

3这时，将会打开一个命令行窗口。之后，请稍稍等待一会，直至出现PowerShell命令提示符为止。

4这时，便可以输入Linux命令了。诸如，输入一个Linux文件查看命令ls，回车，便可以列举当前目录下的文件和文件夹列表。

注意事项

WindowsPowerShell支持绝大部份Linux外置命令，但有些命令例外。具体来说有：

(1) 命令缩写（或称命令别称）

比如，不支持Linux下的文件查看命令ll。该命令作用为以详尽信息形式查看当前目录下文件，它实质是ls-l命令的缩写。

(2) 须要调用linux系统中的程序能够执行的命令，如vim

因为Windows系统中并没有外置vim程序，故而与vim有关的命令未能启用。

(3) 帮助命令

在Linux系统中，假如要晓得某条命令的用法，可以使用帮助命令了。但在Windows中，默认是没有安装Linux中的帮助命令的。假如想使用该命令，可以联网安装或在线查看。

模式切换

1、由图形到字符#logout或init3

2、由字符到图形界面init5

3、退出consolelogout或exit或ctrl+d

4、注销Ctrl+Alt+Backspace

5、关机#poweroff或init0或shutdown-hnow或halt-p

6、重启#reboot或init6或shutdown-rnow

查询安装SSH服务

1

1.登录linux系统，打开终端命令。输入rpm-qa|grepssh查找当前系统是否早已安装

2

2.若果没有安装SSH软件包，可以通过yum或rpm安装包进行安装（具体就不截图了)

END

启动SSH服务2

1

安装好了以后，就开启ssh服务。Ssh服务通常称作SSHD

命令行输入servicesshdstart可以启动

2

或则使用/etc/init.d/sshdstart

END

配置查看SSHD端口3

1

查看或编辑SSH服务配置文件，如vi/etc/ssh/sshd.config

(假如要更改端口，把port前面默认的22端口改成别的端口即可（注意后面的#号要去除) 

END

远程联接SSH4

1

假如须要远程联接SSH，须要把22端口在防火墙上开放。

.关掉防火墙，或则设置22端口例外

为Mozilla添加JRE插件

(1、进入目录/usr/lib64/mozilla/plugins（或则/usr/lib64/firefox-addons/plugins、/usr/lib64/chromium-browser/plugins) 

命令：cd/usr/lib64/mozilla/plugins

(（若步入其他目录可参考该命令) 

2、建立link

命令：sudoln–s/usr/local/java/jre1.7.0_55/lib/amd64/libnpjp2.so

四、测试JRE安装是否成功

1、打开IE浏览器，浏览网址：，并登陆系统。如无帐户，请先注册

2、运行eSchema，假如提示“ApplicationBlockedbySecuritySettings”，说明JRE的安全设置太高，须要配置一下 **linux可以用dos命令吗** linux学习，方式如下：

(1) 步入JRE安装目录

命令：cd/usr/local/java/jre1.7.0_55/bin

(2) 启动JAVA控制面板

命令：./ControlPanel

(3) 在控制面板中 **linux可以用dos命令吗**，选择“Security”页签，点击“EditSiteList”打开站点列表，之后点击“Add”按钮，在“Location”栏中添加例外站点，如：，之后点击“OK”完成添加

3、重新启动firefox浏览器，浏览网址：，并登入系统，再度运行eSchema，假如提示“Doyouwanttorunthisapplication?”，则勾选“Iaccepttheriskandwanttorunthisapplication.”，之后点击“Run”，即可完成JRE安装
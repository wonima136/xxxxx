---



title: "如何在Linux的命令行中使用speedtest-cli来测试网速"
description: "如何在Linux的命令行中使用speedtest-cli来测试网速"
keywords: "如何在Linux的命令行中使用speedtest-cli来测试网速"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678284326754_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在浏览网站的时侯忽然变的好卡，不晓得是笔记本的诱因还是网速的诱因引起的，这就须要测试网速了 **linux中网速测试命令**，下边小编给你们介绍下怎样使用Linux命令行来测试网速 **linux中网速测试命令**，有兴趣的话不妨来了解下吧。

在可用于测试宽带速率的网站中，是使用最广泛的。

的工作原理并不复杂：它在你的浏览器中加载JavaScript代码并手动测量离你近来的服务器，之后向服务器发送HTTPGETandPOST恳求来测试上行/下行网速。

但在没有图形化桌面时(比如，当你通过命令行远程登录服务器或使用没有图形界面的操作系统)，基于flash、界面友好的将难以工作。辛运的是，提供了一个命令行版本——speedtest-cli。下边我将向你演示怎么在Linux的命令行中使用speedtest-cli来测试宽带联接速率。

![ip测试网速命令_网速测试 命令_linux中网速测试命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678284326754_0.png)

安装speedtest-cli

speedtest-cli是一个用Python编撰的轻量级Linux命令行工具，在Python2.4至3.4版本下均可运行。它基于的基础构架来检测网路的上/下行速度。安装speedtest-cli很简单——只须要下载其Python脚本文件。

1$wget

2$chmoda+rxspeedtest_cli.py

3$sudomvspeedtest_cli.py/usr/local/bin/speedtest-cli

4$sudochownroot:root/usr/local/bin/speedtest-cli

使用speedtest-cli测试网速

使用speedtest-cli命令也很简单，它不须要任何参数即可工作。

1$speedtest-cli

输入这个命令后，它会手动发觉离你近来的服务器(地理距离)，之后复印出测试的网路上/下行速度。

假如你乐意分享测试结果，你可以使用参数“–share”。它将会把你的测试结果上传到服务器并以图形的方法分享给其他人。

![linux中网速测试命令_ip测试网速命令_网速测试 命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678284326754_2.png)

下边是一幅由speedtest-cli手动生成并上传到的测试结果：

假如你对目前所有可用的服务器感兴趣，你可以使用参数“–list”。它会复印出所有的服务器(根据离你的地理距离由近及远排序)。

在前面的列表中linux site:infoq.cn，每位服务器的后面都有一个与其对应的ID。假如想使用指定的服务器来测试你的网速，你只须要在speedtest-cli命令后指定其ID即可。诸如，假如想使用在WashingtonDC的服务器，你只须要指定相对应的服务器ID(如935)。

里面就是使用Linux命令行测试网速的方式介绍了linux vi 命令，假如你在上网的时侯遇见网路卡的情况，就可以使用speedtest-cli测试网速，赶快试试看吧。
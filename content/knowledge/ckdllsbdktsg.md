---



title: "串口登录Linux设备打开调试工具，打开adb工具！"
description: "串口登录Linux设备打开调试工具，打开adb工具！"
keywords: "串口登录Linux设备打开调试工具，打开adb工具！"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

“分享知识是一种美德linux操作系统教程，帮助他人，同时提高自己”

(问题提出：想通过并口登陆Linux嵌入式设备，须要修该设备下/etc/inittab文件，方式是从设备中传出（pull) inittab文件，在windows下编辑更改保存什么是linux，之后再传进设备下（push）/etc目录下

(1.将linux设备下的文件拷贝（pull) 下来更改

(1) 打开adb工具（通常在flash烧录工具下bin目录下）

![linux修改文件命令_linux文件解压命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_0.png)

(2) 点击右键，选择在终端中打开，如下：

![linux文件解压命令_linux修改文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_1.png)

见到了file传输命令格式

(3) 我们尝试下pull命令，如下：

![linux文件解压命令_linux修改文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_2.png)

我们看见.adbpull-a/etc/inittabD:这个命令显示：Nosuchfileordirectory

改为.adbpull-a/etc/inittabD:.执行后，显示1filepulled“D:.”表示本地D盘根目录下

(4) 在Windows系统下打开inittab，更改并如图位置，屏蔽并口0

![linux文件解压命令_linux文件传输命令_linux修改文件命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_3.jpg)

(5) 更改后如下：

![linux文件解压命令_linux修改文件命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_4.png)

2.将更改后的inittabpush进嵌入式Linux设备端的根目录/etc下

执行后，显示1filepushed

3.如今要通过adb工具重启Linux设备，来验证是否可以并口登陆设备了

![linux修改文件命令_linux文件解压命令_linux文件传输命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_6.png)

命令.adbshell

#reboot

之后看见设备重启，inittab的参数被重新加载。

4.验证并口登陆Linux设备，打开并口调试工具，按下enter见到#出现，运行#ls见到设备根目录下的文件列表如下 **linux文件传输命令**，证明并口登陆OK

![linux文件传输命令_linux修改文件命令_linux文件解压命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677219748588_7.png)

希望能帮助到Linux嵌入式开发的同学们，喜欢的动动你发财的小手，帮忙点赞转发 **linux文件传输命令**，感谢~
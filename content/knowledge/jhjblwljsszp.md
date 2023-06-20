---



title: "java环境变量为例介绍三种配置环境变量的方法修改/etc/profile文件"
description: "java环境变量为例介绍三种配置环境变量的方法修改/etc/profile文件"
keywords: "java环境变量为例介绍三种配置环境变量的方法修改/etc/profile文件"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

Linux操作系统下三种配置环境变量的方式

现今使用linux的同事越来越多了，在linux下做开发首先就是须要配置环境变量 **linux 环境变量命令**，下边以配置java环境变量为例介绍三种配置环境变量的方式。

1.更改/etc/profile文件

假如你的计算机仅仅作为开发使用时推荐使用这些技巧，由于所有用户的shell都有权使用这种环境变量，可能会给系统带来安全性问题。

(（1) 用文本编辑器打开/etc/profile

(（2) 在profile文件末尾加入：

![linux命令 shell命令_linux命令中的head命令_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_0.png)

JAVA_HOME=/usr/share/jdk1.5.0_05

PATH=$JAVA_HOME/bin：$PATH

CLASSPATH=.：$JAVA_HOME/lib/dt.jar：$JAVA_HOME/lib/tools.jar

exportJAVA_HOME

exportPATH

exportCLASSPATH

![linux命令 shell命令_linux命令中的head命令_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_1.png)

(（3) 重新登陆

注解：

a.你要将/usr/share/jdk1.5.0_05jdk改为你的jdk安装目录

b.linux下用逗号“：”来分隔路径

c.$PATH/$CLASSPATH/$JAVA_HOME是拿来引用原先的环境变量的值，在设置环境变量时非常要注意不能把原先的值给覆盖掉了linux系统编程，这是一种常见的错误。

d.CLASSPATH中当前目录“。”不能丢，把当前目录扔掉也是常见的错误。

![linux 环境变量命令_linux命令 shell命令_linux命令中的head命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_2.png)

e.export是把这三个变量导入为全局变量。

f.大小写必须严格分辨。

2.更改。bashrc文件

这些技巧更为安全，它可以把使用这种环境变量的权限控制到用户级别，假如你须要给某个用户权限使用这种环境变量 **linux 环境变量命令**，你只须要更改其个人用房主目录下的。bashrc文件就可以了。

(（1) 用文本编辑器打开用户目录下的。bashrc文件

(（2) 在。bashrc文件末尾加入：

![linux 环境变量命令_linux命令中的head命令_linux命令 shell命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_3.png)

setJAVA_HOME=/usr/share/jdk1.5.0_05

exportJAVA_HOME

setPATH=$JAVA_HOME/bin：$PATH

exportPATH

setCLASSPATH=.：$JAVA_HOME/lib/dt.jar：$JAVA_HOME/lib/tools.jar

exportCLASSPATH

![linux命令 shell命令_linux命令中的head命令_linux 环境变量命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1677477955854_4.png)

(（3) 重新登陆

3.直接在shell下设置变量

不赞同使用这些技巧，由于换个shell，你的设置就无效了红旗linux下载，因而这些技巧仅仅是临时使用，之后要使用的时侯又要重新设置，比较麻烦。

只需在shell终端执行下述命令：

exportJAVA_HOME=/usr/share/jdk1.5.0_05

exportPATH=$JAVA_HOME/bin：$PATH

exportCLASSPATH=.：$JAVA_HOME/lib/dt.jar：$JAVA_HOME/lib/tools.jar
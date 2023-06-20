---



title: "【Linux基础学习】系统版本的命令及操作环境"
description: "【Linux基础学习】系统版本的命令及操作环境"
keywords: "【Linux基础学习】系统版本的命令及操作环境"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_0.webp"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

命令：1、“lsb_release -a”，该命令可查看所有linux系统版本；2、“cat /etc/redhat-release”，该命令只适合Redhat系的linux；3、“cat /etc/issue”linux软件，此命令也适用于所有的版本。 本教程操作环境

命令：1、“lsb_release -a”**查看linux版本命令**，该命令可查看所有linux系统版本；2、“cat /etc/redhat-release”linux删除文件夹，该命令只适合Redhat系的linux；3、“cat /etc/issue”，此命令也适用于所有的版本。

![linux查看jdk版本命令_linux查看qt版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_0.webp)

![查看linux版本命令_linux查看jdk版本命令_linux查看qt版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_1.jpg)

本教程操作环境：linux7.3系统、Dell G3电脑。

![linux查看qt版本命令_查看linux版本命令_linux查看jdk版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_2.png)

查询linux版本信息的命令是什么

1、lsb_release -a **查看linux版本命令**，即可列出所有版本信息：

![linux查看qt版本命令_linux查看jdk版本命令_查看linux版本命令](https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_3.png)

![06.png](https://www.linuxcool.com/wp-content/uploads/2023/01/1674916147172_4.png)

这个命令适用于所有的Linux发行版，包括RedHat、SUSE、Debian…等发行版。

2、cat /etc/redhat-release，这种方法只适合Redhat系的Linux：

[root@S-CentOS home]# cat /etc/redhat-release

CentOS release 6.5 (Final)

3、cat /etc/issue，此命令也适用于所有的Linux发行版。
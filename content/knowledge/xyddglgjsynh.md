---



title: "新一代Docker管理工具使用6年后，我把它删除了"
description: "新一代Docker管理工具使用6年后，我把它删除了"
keywords: "新一代Docker管理工具使用6年后，我把它删除了"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

请关注本头条号，每晚坚持更新原创干货技术文章。

如需学习视频，请在陌陌搜索公众号“智传网优”直接开始自助视频学习

1.序言

本文主要介绍新一代的Docker管理工具，Podman、Skopeo、Buildah，它容许用户无root权限运行Docker。

使用docker6年后，我把它删掉了。

为何呢？

由于我在使用的过程中反复遇见的风波触发的，在这个风波中，Docker守护进程在多个内核上使用了100%的CPUlinux环境配置，这促使主机实际上不可用。

这些情况曾经发生过几次，可能是因为脚本早已失控linux嵌入式开发，启动了太多的容器。我从来没有真正深入到它的底层，由于我必须运行一个命令来关掉所有容器并重新启动守护进程。假如没有kill-9命令，守护进程将难以重新启动，所以我觉得早已受了。

无论怎样，我并不一定要因此指责Docker，但它确实为我之前看到的一个论据降低了力量:

为何Docker须要一个守护进程呢?

![linux查看目录权限命令_linux 修改权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_0.png)

2.Docker三大新工具Podman、Skopeo、Buildah

这三个工具主要是RedHat推进的，它们可以完成我须要Docker做的所有事情。它们不须要守护进程或访问具有root特权的组。

2.1Podman

(Podman替换了大多数子命令（run,push,pull等) 的Docker命令。由于它不须要守护进程，而且使用用户命名空间来模拟容器中的root，所以不须要联接到具有root权限的套接字，这是Docker常年以来被关注的一个问题。

![linux 修改权限命令_linux查看目录权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_1.png)

Podman是哪些

2.2Buildah

Buildah建立OCI映像。令人困扰的是，podmanbuild也可以拿来建立Docker映像，而且它的速率十分慢，默认情况下使用vfs储存驱动程序会占用大量c盘空间。buildahbud(buildusingDockerfile)对我来说要快得多 **linux 修改权限命令**，但是使用了overlay储存驱动程序。

![linux查看目录权限命令_linux文件夹权限命令_linux 修改权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_2.png)

Buildah的功能是哪些

容许无root建立的用户名称空间是另一个让我想要的特点，特别吸引。我今年写了一篇关于怎么让无root建立运行的文章，如今它早已为您提供了/etc/subuid和/etc/subgid设置，起码在Ubuntu上是这样。

SkopeoisatoolthatallowsyoutoworkwithDockerandOCIimagesbypushing,pulling,andcopyingimages.

![linux 修改权限命令_linux查看目录权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_3.webp)

2.3Skopeo

Skopeo是一个容许你使用DockerandOCIimages工具

![linux 修改权限命令_linux查看目录权限命令_linux文件夹权限命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684498318467_4.webp)

Skopeo的作用是哪些

Skopeo是一个工具，容许您通过pushing,pulling,和复制镜像来处理Docker和OCI镜像。

本文已同步至博客站 **linux 修改权限命令**，尊重原创，转载时请在正文中附送以下链接：
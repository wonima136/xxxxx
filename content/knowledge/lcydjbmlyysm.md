---



title: "Linux常用的基本命令又有什么关系？"
description: "Linux常用的基本命令又有什么关系？"
keywords: "Linux常用的基本命令又有什么关系？"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685016528195_0.gif"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

序言

首先说一下为何要学习这个，前几天遇到了提供dockerimage的问题。详见此处

当下的问题是解决了，我晓得了怎样将后端代码打包后布署docker镜像，而且我就在反省，莫非关于docker我真的只须要晓得这一点知识吗？对比导师会的，认真思索了一下，似乎并不是，晓得这点内容其实现今够，但之后肯定是不够的。

而这和Linux常用的基本命令又有哪些关系呢？

(打开了B站上的一个docker教学点击量最高的视频，发觉没几分钟视频里的老师就说，学习docker必须有Linux基本命令的基础。（唉，生活不易，要学的越来越多，能怎样办呢，学呗) 

原本以为我完全没接触过Linux命令行，结果边学边发觉，不对我错了，我接触过，还是在两个地方，只不过我没有考量过(感慨自己对知识的学习心态不够透彻的同时，也感慨果然对于结业生而言，实习是最好的学习)

为何要如此说呢?

是由于在步入如今这家公司之前，在另一家企业实习了五个月，那种时侯一个很负责的前端大鳄教了我不少东西，其中包括用Xshell发布项目 **linux命令大全 上一级**，Xshell中所使用的命令即Linux命令。

另一个接触则是由于当前公司办公为macsogou pinyin linux，刚从Windows转换为mac时真的非常不习惯，界面、命令哪些都不一样，现今一些最基础的命令已然可以信手拈来了嵌入式linux论坛，原先这都是Linux命令

Linux命令行死机shutdown

句型：shutdown[-tseconds]/[-r/k/h/n/c/f/F]time[message]

最常用

修改目录cd

![linux返回上一层命令_linux命令大全 关机_linux命令大全 上一级](https://www.linuxcool.com/wp-content/uploads/2023/05/1685016528195_0.gif)

句型：cd[路径/目录名]

常用:

查看目录ls

句型：ls[-a/-l/-al]

创建目录mkdir

句型：mkdir[路径/文件名]

![linux命令大全 关机_linux命令大全 上一级_linux返回上一层命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685016528195_1.jpg)

删掉rm

句型：rm[-rf]目录/文件

事例：

复制cp

句型：cp[-r/i/a]文件名文件复制目标

联通/更改mv

![linux返回上一层命令_linux命令大全 关机_linux命令大全 上一级](https://www.linuxcool.com/wp-content/uploads/2023/05/1685016528195_2.png)

句型：mv文件剪切到的目标位置/文件名

事例：

注意：第一个参数可以为多个文件，中间用空格隔开即可

查看文件cat

句型cat文件名

其他查看句型：

less：一页一页的显示，可往前向后head:只查看前几行，常用为：head文件名[-n行数]行数为正数则从后向前tail:只看最后几行

注意：步入编辑模式以后 **linux命令大全 上一级**，按q,可退出编辑模式

解压/压缩命令tar

句型：tar[-cfruxtzjZv]文件名

常用：

总结

Linux的操作好多，记住常用即可，其他用到的时侯面向百度即可，假如有遗漏或错误的地方，欢迎留言~
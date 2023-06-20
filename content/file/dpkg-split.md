---



title: "dpkg-split命令 – 分割软件包"
description: "dpkg-split命令 – 分割软件包"
keywords: "dpkg-split命令 – 分割软件包"
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

dpkg-split命令用来将Debian linux中的大软件包分割成小软件包，它还能够将已分割的文件进行合并。

dpkg-split命令只能在Debian系统上使用，因为他需要调用dpkg-deb命令分析软件包的组成。

**语法格式:** dpkg-split [参数] [软件包]

**常用参数：**

(-S设置分割后的每个小文件最大尺寸（以字节为单位) -s分割软件包-j<分块文件><分块文件>把各个分块合并到一起-I<分块文件>显示分块文件的相关信息-l列出不匹配的部分-dscard<文件名>忽略不匹配的部分

**参考实例**

分割软件包：

```
[root@linuxcool ~]# dpkg-split -s gcc-4.5.deb
```

以2MB为单位分割文件：

```
[root@linuxcool ~]# dpkg-split -S 2048 -s gcc-4.5.deb
```

合并GCC软件包：

```
[root@linuxcool ~]# dpkg-split -j gcc-4.5.*
```
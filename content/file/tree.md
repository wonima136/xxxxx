---



title: "tree命令 – 以树状图形式列出目录内容"
description: "tree命令 – 以树状图形式列出目录内容"
keywords: "tree命令 – 以树状图形式列出目录内容"
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

tree命令的功能是用于以树状图形式列出目录内容，帮助运维人员快速了解到目录的层级关系。

**语法格式：** tree [参数]

**常用参数：**

-a显示所有文件和目录-A使用ASNI绘图字符形式-C使用彩色显示-d仅显示目录名-D显示文件更改时间-f显示完整的相对路径名-F显示每个文件的完整路径-g显示文件所属组名-G显示组名或GID-H以更易读的格式输出信息-i不使用阶梯状显示文件或目录名-I不显示符合范本样式的文件或目录名-l直接显示链接文件所指向的原始目录 -L使用层级显示内容-n 不在文件和目录清单上加色彩 -N 直接显示文件和目录名-o写入到指定文件-p 显示权限标示 -P仅显示符合范本样式的文件或目录名-q用“?”号替代控制字符，显示文件和目录名-s 显示文件或目录大小 -t 依据文件更改时间排序-T设置标题和字符串-u显示文件或目录的所有者名-x将范围局限在现行的文件系统中--help显示帮助信息--version显示版本信息

**参考示例**

显示当前工作目录下的文件层级情况：

```
[root@linuxcool ~]# tree
.
├── anaconda-ks.cfg
├── Desktop
├── Documents
├── Downloads
├── file.zip
├── initial-setup-ks.cfg
├── Music
├── Pictures
├── Public
├── Templates
├── Videos
└── website
    ├── linuxcool.com
    ├── linuxdown.com
    └── linuxprobe.com
```

以文件和目录的更改时间进行排序：

```
[root@linuxcool ~]# tree -t
.
├── anaconda-ks.cfg
├── initial-setup-ks.cfg
├── Desktop
├── Documents
├── Downloads
├── Music
├── Pictures
├── Public
├── Templates
├── Videos
├── file.zip
└── website
    ├── linuxdown.com
    ├── linuxprobe.com
    └── linuxcool.com
```

以带有相对路径的形式，显示当前工作目录下的文件层级情况：

```
[root@linuxcool ~]# tree -f
.
├── ./anaconda-ks.cfg
├── ./Desktop
├── ./Documents
├── ./Downloads
├── ./file.zip
├── ./initial-setup-ks.cfg
├── ./Music
├── ./Pictures
├── ./Public
├── ./Templates
├── ./Videos
└── ./website
    ├── ./website/linuxcool.com
    ├── ./website/linuxdown.com
    └── ./website/linuxprobe.com
```

只显示目录的层级关系情况：

```
[root@linuxcool ~]# tree -d
.
├── Desktop
├── Documents
├── Downloads
├── Music
├── Pictures
├── Public
├── Templates
├── Videos
└── website
    ├── linuxcool.com
    ├── linuxdown.com
    └── linuxprobe.com
12 directories
```
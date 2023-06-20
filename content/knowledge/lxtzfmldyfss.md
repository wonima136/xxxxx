---



title: "Linux系统中find命令的用法是什么?(一)"
description: "Linux系统中find命令的用法是什么?(一)"
keywords: "Linux系统中find命令的用法是什么?(一)"
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

find顾名思义就是查找的意思，该命令是各种Linux发行版本中比较重要的、常用的一个命令。Linux下的find命令提供相当多的查找条件，功能比较强大，掌握这个命令之后，对平时的系统运维、管理工作可以达到事半功倍的效果。那么Linux系统中find命令的用法是什么?具体请看下文：

Linux find命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数LINUX社区，则find命令将在当前目录下查找子目录与文件linux deepin，并且将查找到的子目录和文件全部进行显示。

语法格式：

find path -option [ -print ] [ -exec -ok command ] {} ;

参数说明：

find根据下列规则判断path和expression，在命令列上第一个-()，!之前的部分为path，之后的部分是expression。如果path是空字串则使用目前路径，如果expression是空字串则使用-print为预设expression。

expression中可使用的选项有二三十个，在此只介绍常用的部分。

-mount,-xedv：只检查和指定目录在同一个文件系统下的文件，避免列出其他文件系统中的文件;

-amin n：在过去n分钟内被读取过;

-anewer file：比文件file更晚被读取过的文件;

-atime n：在过去n天内被读取过的文件;

-cmin n：在过去n分钟内被修改过;

-cnewer file：比文件file更新的文件;

-ctime n：在过去n天内被修改过的文件;

-empty：空的文件-gid n or -group name：gid是n或是group名称是name;

-ipath p,-path p：路径名称符合p的文件，ipath会忽略大小写;

-name name,-iname name：文件名称符合name的文件 **linux中find命令**，iname会忽略大小写;

-size n：文件大小是n单位 **linux中find命令**，b代表512位元组的区块，c表示字元数，k表示kilo bytes，w是二个位元组。

-type c：文件类型是C的文件。

老男孩教育10余年技术沉淀，课程内容多次更新迭代，更加注重学员的实践动手能力以及运维思维的形成，想深入学习Linux云计算运维的知识，可以关注下老男孩教育。
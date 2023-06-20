---



title: "( Linux中mkdir创建文件夹命令是（mkdir（选项) ）"
description: "( Linux中mkdir创建文件夹命令是（mkdir（选项) ）"
keywords: "( Linux中mkdir创建文件夹命令是（mkdir（选项) ）"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux创建文件夹命令是mkdir，句型为【mkdir(选项)(参数)】，其中Z为设置安全上下文，当使用SELinux时有效linux命令行，version显示版本信息。

![修改文件创建时间的命令_linux命令创建文件_linux创建用户名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_0.jpg)

本文操作环境：linux2.6.32系统、DELLG3笔记本。

Linux中mkdir创建文件夹命令

句型

![linux创建用户名命令_修改文件创建时间的命令_linux命令创建文件](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_1.png)

```
mkdir (选项)(参数)
```

选项

-Z：设置安全上下文，当使用SELinux时有效；

-m或--mode构建目录的同时设置目录的权限；

![修改文件创建时间的命令_linux命令创建文件_linux创建用户名命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_2.png)

-p或--parents若所要完善目录的下层目录目前仍未完善，则会一并完善下层目录；

--version显示版本信息。

参数

```
目录：指定要创建的目录列表，多个目录之间用空格隔开。
```

常用实例

1、在当前文件夹下创建多个文件夹

![85f12e0fc1c5079548005e01efb93e8.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_4.png)

(2、指定绝对路径创建xxx文件夹 **linux命令创建文件**，同时当前路径创建vvv文件夹（举一反三linux 命令，也可以同时多个绝对路径创建文件夹) 

![linux创建用户名命令_linux命令创建文件_修改文件创建时间的命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_5.png)

![ecd5711a69f17a11af99b8c18ff7336.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_6.png)

3、在目录/qwd下构建子目录test **linux命令创建文件**，而且只有文件主有读、写和执行权限，其他人无权访问

```
mkdir -m 700 /qwd/test
```

![d3e787c0c382189a98e67e278e1041b.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_7.png)

![linux创建用户名命令_linux命令创建文件_修改文件创建时间的命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_8.png)

4、在当前目录中构建/qxc和qxc下的ttt目录，权限设置为文件主可读、写、执行，同组用户可读和执行，其他用户无权访问

```
mkdir -p -m 750 qxc/ttt
```

![0d2f615b9c400fc86bc116a9e5bdd33.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1678658540238_9.png)

相关学习推荐：linux视频教程

以上就是linux创建文件夹命令是哪些的详尽内容，更多请关注php英文网其它相关文章！
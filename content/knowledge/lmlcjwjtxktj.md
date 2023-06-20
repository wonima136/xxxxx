---



title: "linux命令创建文件 【腾讯课堂】进大厂,身价翻倍的法宝来了!"
description: "linux命令创建文件 【腾讯课堂】进大厂,身价翻倍的法宝来了!"
keywords: "linux命令创建文件 【腾讯课堂】进大厂,身价翻倍的法宝来了!"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_0.gif"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

进大厂,身家翻番的法宝来了!

主讲内容：docker/kubernetes云原生技术，大数据构架linux教程linux培训，分布式微服务，手动化测试、运维。

腾讯课堂：点击步入

网易课堂：点击步入

7月1号-7月29号8折让利！！！

7月1号-7月29号8折让利！！！

7月1号-7月29号8折让利！！！

课程简介：

第一章熟悉Linux环境

![如何通过命令创建m文件_linux创建用户命令_linux命令创建文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_0.gif)

1、Win10安装Ubuntu18.04双系统

2、熟悉Linux常用工具和命令

第二章熟悉Docker

3、安装配置Docker

4、Docker命令实践

5、Dockerfile文件编撰

​​​​​​​6、常用镜像布署

​​​​​​​第三章熟悉Kubernetes

![linux创建用户命令_linux命令创建文件_如何通过命令创建m文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_1.png)

​​​​​​​7、kubernetes构架和布署

​​​​​​​8、熟悉kubectl命令使用

(​​​​​​​9、k8s应用布署实践（上) 

(​​​​​​​10、k8s应用布署实践（下) 

​​​​​​​第四章熟悉Helm

​​​​​​​11、Helm安装配置

​​​​​​​12、熟悉Helm应用书写规则

​​​​​​​13、编写自己的Helm应用

![如何通过命令创建m文件_linux命令创建文件_linux创建用户命令](https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_2.png)

(（作者；陈玓玏) 

近来开始玩Go语言了，并且遇到了一个问题，就是我尝试在windows系统中使用go时，在早已安装成功环境的情况下，居然不能直接创建带.go后缀的文件，这么就想到用命令行 **linux命令创建文件**，但是windows的命令行还是跟Linux很不一样的，下边一上去瞧瞧如何操作吧。

1、创建文件夹

(右键开始菜单，选择“命令行提示符（管理员) ”**linux命令创建文件**，以管理员身分打开命令行。我是在D盘下操作的，所以先步入D盘：

```
C:Windowssystem32>d:
D:>
```

之后在D盘使用mkdir命令创建文件夹：

![linux命令创建文件_linux创建用户命令_如何通过命令创建m文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_3.png)

```
D:> mkdir test_shandiao
```

去D盘下查看，都会发觉新增了一个文件夹了。

2、创建任意后缀的文件

先步入之前创建好的新文件夹：

```
D:> cd test_shandiao
D:test_shandiao>
```

![linux命令创建文件_linux创建用户命令_如何通过命令创建m文件](https://www.linuxcool.com/wp-content/uploads/2023/02/1676152875661_4.png)

之后这一步的话，和Linux不太一样，Linux中的touch和vi命令创建新文件的方式都不能用了，在windows命令行下得用typenul>文件名.后缀名来创建：

```
D:test_shandiao> type nul>test.go
```

这样就好了，任意后缀的文件都能创建。疗效如下：

3、写入内容到文件

```
D:test_shandiao> echo 'hello world' >test.go
```

疗效如下：
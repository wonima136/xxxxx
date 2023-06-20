---



title: "speedtest-cli命令 – 测试服务器外网速度"
description: "speedtest-cli命令 – 测试服务器外网速度"
keywords: "speedtest-cli命令 – 测试服务器外网速度"
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

speedtest-cli 是一个使用python编写的命令行脚本，通过调用speedtest.net测试上下行的接口来完成速度测试，最后我会测试运维生存时间所在服务器的外网速度。

**语法格式：** speedtest-cli [参数]

**常用参数：**

--share 分享你的网速，该命令会在speedtest网站上生成网速测试结果的图片 --list 根据距离显示speedtest.net的测试服务器列表--server=SERVER 指定列表中id的服务器来做测试--source=SOURCE 绑定服务器的源地址--simple 仅显示基本信息

**参考实例**

列出所有在中国的测试服务器：

```
[root@linuxcool ~]# speedtest-cli --list | grep China
```

将速度测试的结果生成一张图片的连接，便于你分享 ：

```
[root@linuxcool ~]# speedtest-cli --share
```

以字节计算的方式来测试上下行速度：

```
[root@linuxcool ~]# speedtest-cli --bytes
```

只显示ping和上下行速度：

```
[root@linuxcool ~]# speedtest-cli --simple
```

列出speedtest.net所有的服务器距离你的物理距离，单位是千米(km):

```
[root@linuxcool ~]# speedtest-cli --list
```
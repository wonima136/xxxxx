---



title: "smbtree命令 – 基于文本的SMB网络浏览器工具"
description: "smbtree命令 – 基于文本的SMB网络浏览器工具"
keywords: "smbtree命令 – 基于文本的SMB网络浏览器工具"
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

smbtree命令是一款文本模式的smb浏览器程序，它类似于Windows电脑上的 “网络邻居”；它打印出一棵树，上面有所有已知的域、这些域中的服务器和服务器上的共享。

**语法格式：** smbtree [参数]

**常用参数：**

-b通过以广播方式发送请求来查询网络节点，而不是查询本地主浏览器-D只打印广播或主浏览器已知的所有域的列表-d调试模式-s指定的文件包含配置细节-S只打印在广播中响应或主浏览器已知的所有域和服务器的列表

**参考实例**

通过以广播方式发送请求来查询网络节点，而不是查询本地主浏览器：

```
[root@linuxcool ~]# smbtree -b
```

只打印广播或主浏览器已知的所有域的列表：

```
[root@linuxcool ~]# smbtree -D
```

只打印在广播中响应或主浏览器已知的所有域和服务器的列表：

```
[root@linuxcool ~]# smbtree -S
```
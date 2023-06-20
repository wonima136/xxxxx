---



title: "rcp命令 – 远程文件复制"
description: "rcp命令 – 远程文件复制"
keywords: "rcp命令 – 远程文件复制"
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

rcp命令的英文是“remote file copy”，即远程文件复制，可以使在两台Linux主机之间的文件复制操作更简单。通过适当的配置，在两台Linux主机之间复制文件而无需输入密码，就像本地文件复制一样简单。

rcp指令用在远端复制文件或目录，如同时指定两个以上的文件或目录，且最后的目的地是一个已经存在的目录，则它会把前面指定的所有文件或目录复制到该目录中。

rcp命令默认系统没有安装，需要安装rsh和rsh-server这2个库，通过配置实现网络文件复制。

**语法格式：** rcp [参数] [目录]

**常用参数：**

-p保留源文件或目录的属性，包括拥有者，所属群组，权限与时间-r递归处理，将指定目录下的文件与子目录一并处理-x加密两台Linux主机间传送的所有信息-D指定远程服务器的端口号

**参考实例**

将当前目录下test1复制到远程系统：

```
[root@linuxcool ~]# rcp test1 192.168.10.10:/home/test1
```

复制远程主机文件到本地：

```
[root@linuxcool ~]# rcp root@192.168.10.10:./test2 test2
```
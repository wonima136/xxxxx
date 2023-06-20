---



title: "gluster命令 – Gluster控制台管理工具"
description: "gluster命令 – Gluster控制台管理工具"
keywords: "gluster命令 – Gluster控制台管理工具"
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

gluster是一个免费的开源软件可扩展网络文件系统，Gluster Console Manager是一个用于弹性卷管理的命令行实用程序。您可以在任何出口服务器上运行gluster命令。该命令使管理员能够执行云操作，如创建、扩展、收缩、重新平衡和迁移卷，而无需安排服务器停机。

**语法格式：** gluster [参数]

**常用参数：**

peer probe 节点添加节点peer detach 节点删除节点peer status 节点节点状态volume start 卷名启动卷volume stop 卷名停止卷volume delete 卷名删除卷volume list列出卷volume info查看卷信息volume status查看卷状态

参考实例

(查看所有节点的基本状态（显示的时候不包括本节点) ：

```
[root@linuxcool ~]# gluster peer status
```

列出集群中的所有卷：

```
[root@linuxcool ~]# gluster volume list
```

查看集群中的卷信息：

```
[root@linuxcool ~]# gluster volume info
```

查看集群中的卷状态：

```
[root@linuxcool ~]# gluster volume status
```
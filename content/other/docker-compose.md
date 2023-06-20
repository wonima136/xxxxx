---



title: "docker-compose命令 – 容器集群的快速编排工具"
description: "docker-compose命令 – 容器集群的快速编排工具"
keywords: "docker-compose命令 – 容器集群的快速编排工具"
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

(docker-compose命令来自英文词组“docker compose”的拼写，其功能是用于容器集群的快速编排工具。docker-compose命令是一个由Docker官方发布的开源项目，对所管理的容器分为了三层，分别是工程（project) ，服务（service）以及容器（container），能够进行容器集群的快速编排工作。

**语法格式：** docker-compose [参数]

**常用参数：**

-d后台运行容器-f设置模板文件-p设置项目名称build创建或重建容器config验证配置文件create创建服务down停止和删除容器、网络、卷、镜像help显示帮助信息images列出镜像信息kill强制关闭容器logs查看项目中容器日志pause暂停容器ps显示容器列表restart重启容器rm删除所有停止状态的容器run在指定服务上运行命令scale设置服务运行的容器个数start启动容器stop停止容器top查看各个容器内运行的进程unpause恢复容器up终端运行容器

**参考示例**

启动并后台运行容器：

```
[root@linuxcool ~]# docker-compose up -d
```

列出镜像信息：

```
[root@linuxcool ~]# docker-compose images
```

查看项目中容器的日志信息：

```
[root@linuxcool ~]# docker-compose logs -f
```

停止项目中的容器：

```
[root@linuxcool ~]# docker-compose stop
```
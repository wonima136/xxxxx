---



title: "docker命令 – 管理应用容器引擎"
description: "docker命令 – 管理应用容器引擎"
keywords: "docker命令 – 管理应用容器引擎"
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

docker命令的功能是用于管理应用容器引擎，可以让开发者们打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何主流的Linux系统之上，也可以用于实现虚拟化。

**语法格式：** docker [参数] [对象]

**常用参数：**

(ps 显示状态为运行（Up) 的容器 cp 从容器里向外拷贝文件或目录 kill 发送信号给容器，默认SIGKILL --name指定容器名称-p端口映射-v挂载目录

**参考实例**

关闭全部正在运行的容器：

```
[root@linuxcool ~]# docker kill $(docker ps -q)
```

删除已经停止的容器：

```
[root@linuxcool ~]# docker rm `docker ps -a -q`
```

(登陆指定的容器系统中（con01) ：

```
[root@linuxcool ~]# docker exec -it con01 /bin/bash
```

(停止指定的容器系统（con01) ：

```
[root@linuxcool ~]# docker stop con01
```

(启动指定的容器系统（con01) ：

```
[root@linuxcool ~]# docker start con01
```
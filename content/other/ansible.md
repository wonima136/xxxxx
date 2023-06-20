---



title: "ansible命令 – 运维自动化工具"
description: "ansible命令 – 运维自动化工具"
keywords: "ansible命令 – 运维自动化工具"
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

ansible是一款简单的运维自动化工具，只需要使用ssh协议连接就可以来进行系统管理，自动化执行命令，部署等任务。

**语法格式：** ansible [参数]

**常用参数：**

-m要执行的模块，默认为command-a模块的参数-ussh连接的用户名，默认用root，ansible.cfg中可以配置-ffork多少进程并发处理，默认为5个-i指定hosts文件路径，默认default=/etc/ansible/hosts-M要执行的模块路径，默认为/usr/share/ansible-t日志输出到该目录，日志文件名以主机命名

**参考实例**

使用command模块，显示所有主机当前文件和目录：

```
[root@linuxcool ~]# ansible all -a "ls"
```

列出将执行ls该命令的主机：

```
[root@linuxcool ~]# ansible all -a "ls" --list-hosts
```

指定host主机，测试网络状态：

```
[root@linuxcool ~]# ansible 192.168.1.100 -m ping
```
---



title: "cupsdisable命令 – 停止指定的打印机"
description: "cupsdisable命令 – 停止指定的打印机"
keywords: "cupsdisable命令 – 停止指定的打印机"
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

cupsdisable命令用于停止指定的打印机。

使用cupsdisable命令停止打印机时，可以指定某个确定的打印机，也可以指定一类打印机。

**语法格式：** cupsdisable [参数] [打印机]

**常用参数：**

-E当连接到服务器时强制使用加密-U<用户名>指定连接服务器时使用的用户名-u<用户名> 指定打印任务所属的用户-c取消指定打印机的所有打印任务-h<主机名：端口>指定连接的服务器名和端口号-r<原因>停止打印机的原因

**参考实例**

停止打印机：

```
[root@linuxcool ~]# cupsdisable my_prienter
```

使用指定用户名连接打印机：

```
[root@linuxcool ~]# cupsdisable -U linuxcool my_prienter
```

连接指定的服务器和端口号：

```
[root@linuxcool ~]# cupsdisable -h prienter_serv:9100 my_prienter
```
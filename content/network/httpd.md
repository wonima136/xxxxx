---



title: "httpd命令 – Apache HTTP服务器程序"
description: "httpd命令 – Apache HTTP服务器程序"
keywords: "httpd命令 – Apache HTTP服务器程序"
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

httpd为Apache HTTP服务器程序。直接执行程序可启动服务器的服务。

**语法格式**：httpd [参数]

**常用参数**：

-t 测试配置文件的语法是否正确 -l显示服务器编译时所包含的模块 -L显示httpd指令的说明 -S显示配置文件中的设定 -D指定要传入配置文件的参数

**参考实例**

检查配置文件语法错误：

```
[root@linuxcool ~]# httpd -t
```

启动httpd服务：

```
[root@linuxcool ~]# httpd
```

显示编译模块：

```
[root@linuxcool ~]# httpd -l
```

显示配置文件：

```
[root@linuxcool ~]# httpd -L>1.log|tail -n 20 1.log
```

显示配置文件中的设定：

```
[root@linuxcool ~]# httpd -S
```
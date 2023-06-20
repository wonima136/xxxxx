---



title: "semanage命令 – 查询与修改安全上下文"
description: "semanage命令 – 查询与修改安全上下文"
keywords: "semanage命令 – 查询与修改安全上下文"
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

semanage命令来自英文词组“SELinux manage”的缩写，其功能是用于查询与修改安全上下文。semanage的功能类似于chcon命令，它们都可以用于设置文件的SELinux安全上下文策略，而semanage命令功能更强大一些，还能够对系统端口、进程等SELinux域策略进行查询和修改，因此更推荐使用。

*设置过后需要使用restorecon命令让新设置的安全上下文值立即生效。

**语法格式：** semanage [参数] [对象]

**常用参数：**

-a增加-d删除-l查询-m修改

**参考示例**

对指定目录和文件添加新的SELinux安全上下文值：

```
[root@linuxcool ~]# semanage fcontext -a -t httpd_sys_content_t /Dir/wwwroot
[root@linuxcool ~]# semanage fcontext -a -t httpd_sys_content_t /Dir/wwwroot/*
```

查询指定服务所对应的SELinux域允许端口列表：

```
[root@linuxcool ~]# semanage port -l | grep http
http_cache_port_t            tcp      8080, 8118, 8123, 10001-10010
http_cache_port_t            udp      3130
http_port_t                  tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000
pegasus_http_port_t          tcp      5988
pegasus_https_port_t         tcp      5989
```

对指定服务所对应的SELinux域允许端口列表添加新的值：

```
[root@linuxcool ~]# semanage port -a -t http_port_t -p tcp 6111
```
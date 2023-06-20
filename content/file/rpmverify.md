---



title: "rpmverify命令 – 验证已安装的RPM软件包的正确性"
description: "rpmverify命令 – 验证已安装的RPM软件包的正确性"
keywords: "rpmverify命令 – 验证已安装的RPM软件包的正确性"
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

rpmverify命令用来验证已安装的rpm软件包的正确性。

**语法格式：** rpmverify [参数]

**常用参数：**

-Va验证所有软件包 -Vf验证指定软件包 --nomd5 不验证软件包的md5摘要

**参考实例**

验证所有软件包：

```
[root@linuxcool ~]# rpmverify -Va
```

改变软件包权限：

```
[root@linuxcool ~]# rpmverify -Vf /bin/touch
[root@linuxcool ~]# rpm -qf /bin/touch
coreutils-8.4-43.el6.x86_64
[root@linuxcool ~]# vim /bin/touch
[root@linuxcool ~]# ll -h /bin/touch
-rwxr-xr-x. 1 root root 47K May 11  2016 /bin/touch
[root@linuxcool ~]# chmod 777 /bin/touch
[root@linuxcool ~]# ll -h /bin/touch
-rwxrwxrwx. 1 root root 47K May 11  2016 /bin/touch
[root@linuxcool ~]# rpmverify -Vf /bin/touch
.M.......    /bin/touch
```

如果恢复权限后:

```
[root@linuxcool ~]# chmod 755 /bin/touch
[root@linuxcool ~]# ll -h /bin/touch
-rwxr-xr-x. 1 root root 47K May 11  2016 /bin/touch
[root@linuxcool ~]# rpmverify -Vf /bin/touch
```

如果编辑一个文件,并增加内容,如果修改过来,修改时间就会变化:

```
[root@linuxcool ~]# rpmverify -Vf /etc/ssh/sshd_config #增加内容
S.5....T.  c /etc/ssh/sshd_config
[root@linuxcool ~]# vim /etc/ssh/sshd_config  #去掉增加内容
[root@linuxcool ~]# rpmverify -Vf /etc/ssh/sshd_config
.......T.  c /etc/ssh/sshd_config
```

不验证软件包的md5摘要:

```
[root@linuxcool ~]# rpmverify --nomd5 -Vf /bin/touch
```
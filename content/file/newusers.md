---



title: "newusers命令 – 批量创建或更新用户信息"
description: "newusers命令 – 批量创建或更新用户信息"
keywords: "newusers命令 – 批量创建或更新用户信息"
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

newusers命令来自英文词组“create new users”的拼写，中文译为“创建新用户们”，其功能是用于批量创建或更新用户信息。newusers命令能够通过读取用户名和明文密码对应的文件，完成对Linux系统中用户信息进行批量创建和更新的工作。

**语法格式：** newusers [参数] 文件名

**常用参数：**

-c设置加密方式-h显示帮助信息-r创建系统账户-R设置chroot机制-s对SHA加密算法进行四舍五入

**参考示例**

创建一个包含新用户信息的文件，随后自动创建它们：

```
[root@linuxcool ~]# cat users.txt
linuxprobe:x:520:520::/home/linuxprobe:/bin/bash
linuxcool:x:521:521::/home/linuxcool:/bin/bash
linuxdown:x:522:522::/home/linuxdown:/bin/bash
[root@linuxcool ~]# newusers users.txt
```

验证命令的执行效果：

```
[root@linuxcool ~]# id linuxprobe
uid=520(linuxprobe) gid=520(linuxprobe) groups=520(linuxprobe)
[root@linuxcool ~]# id linuxcool
uid=521(linuxdown) gid=521(linuxcool) groups=521(linuxcool)
[root@linuxcool ~]# id linuxdown
uid=522(linuxdown) gid=522(linuxdown) groups=522(linuxdown)
```
---



title: "userdel命令 – 删除用户账户"
description: "userdel命令 – 删除用户账户"
keywords: "userdel命令 – 删除用户账户"
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

userdel命令来自英文词组“user delete”的缩写，其功能是删除用户账户。Linux系统中一切都是文件，用户信息被保存到了/etc/passwd、/etc/shadow以及/etc/group文件中，因此使用userdel命令实际就是帮助我们删除了指定用户在上述三个文件中的对应信息。

**语法格式：** userdel [参数] 用户名

**常用参数：**

-f强制删除用户的账号而不询问-h显示帮助信息-r删除用户的家目录及其内全部子文件-Z删除用户的SELinux映射用户

**参考示例**

删除指定的用户账户信息：

```
[root@linuxcool ~]# userdel linuxprobe
```

删除指定的用户账户信息及家目录：

```
[root@linuxcool ~]# userdel -r linuxprobe
```
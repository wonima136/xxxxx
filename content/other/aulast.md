---



title: "aulast命令 – 打印上次登录用户列表"
description: "aulast命令 – 打印上次登录用户列表"
keywords: "aulast命令 – 打印上次登录用户列表"
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

(aulast是一个程序，它打印出上次登录用户列表，类似于last和lastb命令。aulast 搜索审核日志或给定的审核日志文件，并显示根据审核日志中的时间范围登录（和注销) 的所有用户的列表。可以给出用户和 tty 的名称，在这种情况下，aulast 将仅显示与参数匹配的条目。ttys 的名称可以缩写，因此 aulast 0 与最后 tty0 相同。

每次重新启动系统时，伪用户会登录。因此，上次重新启动将显示自创建日志文件以来所有重新启动的日志。

用户会注意到的主要区别是，从最旧到最新的身份验证打印事件，而最后打印从最新到最旧的记录。此外，每次分配 tty 或 pty 时，不会通知审核系统，因此您可能看不到指示用户及其 tty 的记录。

**语法格式：** aulast [参数]

**常用参数：**

--bad报告错误登录--extract将用于创建显示报表的原始审核记录写入当前工作目录中的文件aulast.log-f file使用文件而不是审核日志进行输入--proof打印出用于确定报表上一行的审核事件序列号--stdin从 stdin 获得审计记录

**参考实例**

查看本月的登陆记录：

```
[root@linuxcool ~]# ausearch --start this-month --raw | aulast --stdin
```

打印出用于确定报表上一行的审核事件序列号：

```
[root@linuxcool ~]# ausearch --start this-month --raw | aulast --proof
```

直接从 stdin 获得审计记录，而不是使用ausearch进行日志搜索：

```
[root@linuxcool ~]# aulast --stdin
```
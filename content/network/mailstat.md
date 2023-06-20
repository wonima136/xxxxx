---



title: "mailstat命令 – 显示到达的邮件状态"
description: "mailstat命令 – 显示到达的邮件状态"
keywords: "mailstat命令 – 显示到达的邮件状态"
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

mailstat命令用来显示到达的邮件状态。它显示的邮件状态是基于邮件的日志文件。

mailstat命令需要读取邮件日志文件来显示邮件状态，所以需要在命令行中给出邮件日志文件的具体位置。默认情况下，mailstat命令会在显示邮件状态后将邮件日志文件清空。

**语法格式:** mailstat [参数] [日志文件]

**常用参数：**

-k保持邮件日志文件的完整性，不清空日志文件-l使用长格式显示邮件状态-m合并任何错误信息到一行中显示-o使用老的邮件日志邮件-t使用简洁的格式显示邮件状态-s如果没有邮件则不输出任何信息

**参考实例**

显示邮件状态：

```
[root@linuxcool ~]# mailstat /var/log/maillog
```

使用长格式显示邮件状态：

```
[root@linuxcool ~]# mailstat -l /var/log/maillog
```

保留完整的邮件日志文件：

```
[root@linuxcool ~]# mailstat -k /var/log/maillog
```
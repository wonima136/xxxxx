---



title: "mailq命令 – 显示待发送的邮件队列"
description: "mailq命令 – 显示待发送的邮件队列"
keywords: "mailq命令 – 显示待发送的邮件队列"
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

mailq命令作用是显示用户待发送的邮件队列，显示的每一个条目包括邮件队列id、邮件大小、加入队列时间、邮件发送者和接受者。如果邮件最后一次尝试后还没有将邮件投递出去，则显示发送失败的原因。

**语法格式：** mailq [参数]

**常用参数：**

–Ac使用submit.cf配置文件，而不管邮件是否是初始提交–qp<time>设定睡眠时间。 默认为1秒 –q<name>只处理名为name的队列组中的作业-v显示详细信息

**参考实例**

显示邮件发送队列：

```
[root@linuxcool ~]# mailq
```

显示邮件发送队列详细信息：

```
[root@linuxcool ~]# mailq -v
```

使用submit.cf配置文件执行操作：

```
[root@linuxcool ~]# mailq -Ac
```
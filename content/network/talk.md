---



title: "talk命令 – 用于与其他使用者对谈"
description: "talk命令 – 用于与其他使用者对谈"
keywords: "talk命令 – 用于与其他使用者对谈"
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

talk命令允许同一主机或不同主机上的两个用户进行交互式对话。talk命令在每个用户的显示器上打开发送窗口和接收窗口。这样每个用户在talk命令显示另一个用户正在输入的内容时能够在发送窗口输入。

**语法格式：** talk [参数]

**常用参数：**

person  预备对谈的使用者帐号，如果该使用者在其他机器上，则可输入 person@machine.name ttyname  如果使用者同时有两个以上的 tty 连线，可以自行选择合适的 tty 传讯息

**参考实例**

与现在机器上的使用者Rollaend对谈：

```
[root@linuxcool ~]# talk Rollaend
```

等待Rollaend回应，若接受，则输入`talk jzlee`即可开始对谈，结束请按 ctrl+c：

```
[root@linuxcool ~]# talk Rollaend@linuxcool.com pts/2
```
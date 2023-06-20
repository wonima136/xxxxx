---



title: "pppstats命令 – 用于显示PPP连线状态"
description: "pppstats命令 – 用于显示PPP连线状态"
keywords: "pppstats命令 – 用于显示PPP连线状态"
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

pppstats命令用于显示PPP连线状态。

利用pppstats(point to point protocol status)指令可让你得知PPP连接网络的相关信息。

**语法格式：** pppstats [参数]

**常用参数：**

-a 显示绝对统计值。 -c<执行次数> 设置回报状况的次数。 -d  显示相对统计值。 -r  显示数据包压缩比率的统计值。 -v 显示VJTCP文件头的压缩效率统计值。 -w<间隔秒数>  设置显示统计信息的间隔时间。

**参考实例**

显示ppp的了连接状态 :

```
[root@linuxcool ~]# pppstats
```
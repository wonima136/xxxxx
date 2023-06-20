---



title: "nisdomainname命令 – 显示主机NIS的域名"
description: "nisdomainname命令 – 显示主机NIS的域名"
keywords: "nisdomainname命令 – 显示主机NIS的域名"
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

nisdomainname命令用于显示主机NIS的域名。

注意区分DNS域名和NIS域名，前者为因特网的标准域名系统，后者则基本被淘汰，重要应用在中小型网络中。

**语法格式:** nisdomainname [参数]

**常用参数：**

-v详细信息模式

**参考实例**

显示本机的NIS域名：

```
[root@linuxcool ~]# nisdomainname -v
```

设置主机NIS的域名：

```
[root@linuxcool ~]# nisdomainname linuxcool
```
---



title: "nsupdate命令 – 动态DNS更新工具"
description: "nsupdate命令 – 动态DNS更新工具"
keywords: "nsupdate命令 – 动态DNS更新工具"
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

nsupdate实用程序用于向名称服务器提交 RFC2136 中定义的动态 DNS 更新请求。这允许在无需手动编辑区文件的情况下从区中添加或删除资源记录。一个更新请求可以包含添加或删除多个资源记录的请求。

**语法格式：** nsupdate [参数]

**常用参数：**

–k keyfile从keyfile文件中读取密钥信息-d调试模式-ykeyname是密钥的名称,secret是以base64编码的密钥-v使用TCP协议进行nsupdate.默认是使用UDP协议

**参考实例**

使用TCP协议进行nsupdate：

```
[root@linuxcool ~]# nsupdate -v
```

从keyfile文件中读取密钥信息：

```
[root@linuxcool ~]# nsupdate -k keyfile
```

在调试模式下操作：

```
[root@linuxcool ~]# nsupdate -d
```
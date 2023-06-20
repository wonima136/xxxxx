---



title: "lpadmin命令 – 配置打印机和类"
description: "lpadmin命令 – 配置打印机和类"
keywords: "lpadmin命令 – 配置打印机和类"
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

lpadmin命令用于配置CUPS套件中的打印机和类，也被用来设置打印服务器默认打印机。

**语法格式:** lpadmin [参数]

**常用参数:**

-c 将打印机加入类  -r 从类中删除打印机 -E允许打印机接受打印任务 -u 设置打印机用户级的访问控制-d设置默认打印机

**参考实例**

添加一个名为printer的打印机：

```
[root@linuxcool ~]# lpadmin -p printer -E -v /dev/bus/usb/001/095 -P ./HP-LaserJet_1020.ppd
```
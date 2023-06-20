---



title: "aimanifest命令 – 修改自动安装程序使用的XML文件"
description: "aimanifest命令 – 修改自动安装程序使用的XML文件"
keywords: "aimanifest命令 – 修改自动安装程序使用的XML文件"
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

aimanifest 命令可以创建一个新的 XML 清单或修改一个现有的清单。虽然 aimanifest 可以用于任何包含对 DTD 定义的有效 !DOCTYPE 引用的 XML 文件，但它旨在创建自动安装程序 (AI) 使用的衍生清单。

**语法格式：** aimanifest [参数]

**常用参数：**

-i在添加新数据之前，不要清除数据-r返回到受影响节点的唯一路径validate验证XML数据

**参考实例**

添加新数据到清单列表：

```
[root@linuxcool ~]# aimanifest load -i linuxcool.xml
```

返回到受影响节点的唯一路径：

```
[root@linuxcool ~]# aimanifest add -r /home/linuxprobe true
```

验证清单里面的XML数据：

```
[root@linuxcool ~]# aimanifest validate
```
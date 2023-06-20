---



title: "edquota命令 – 编辑用户或群组的磁盘配额"
description: "edquota命令 – 编辑用户或群组的磁盘配额"
keywords: "edquota命令 – 编辑用户或群组的磁盘配额"
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

edquota预设会使用vi来编辑使用者或群组的磁盘配额设置

**语法格式：** edquota [参数] [用户或群组名称…]

**常用参数：**

-u 设置用户的磁盘配额，这是预设的参 -g  设置群组的磁盘配额 -p将源用户的磁盘配额设置套用至其他用户或群组 -t 设置宽限期限

**参考实例**

假设linuxcool是需要定额的系统帐户，来为用户分配磁盘配额：

```
[root@linuxcool ~]# edquota -u linuxcool
```

想对Jack、Tom、Chen三个用户使用和linuxcool一样的限额配置：

```
[root@linuxcool ~]# edquota -p linuxcool -u Jack Tom Chen
```

对组的配额，除了edquota命令中对应-u选项的改为-g选项，例如下面对webterm1组的操作：

```
[root@linuxcool ~]# edquota -g webterm1
```
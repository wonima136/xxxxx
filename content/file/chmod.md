---



title: "chmod命令 – 改变文件或目录权限"
description: "chmod命令 – 改变文件或目录权限"
keywords: "chmod命令 – 改变文件或目录权限"
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

chmod命令来自英文词组“change mode”的缩写，其功能是用于改变文件或目录权限的命令。默认只有文件的所有者和管理员可以设置文件权限，普通用户只能管理自己文件的权限属性。

设置权限时可以使用数字法，亦可使用字母表达式，对于目录文件建议加入-R参数进行递归操作，意味着不仅对于目录本身，也对目录内的子文件/目录都进行新权限的设定。

**语法格式：** chmod 参数 文件名

**常用参数：**

-c改变文件权限成功后再输出成功信息-f改变文件权限失败后不显示错误信息-R递归处理所有子文件-v显示执行过程详细信息--help显示帮助信息--no-preserve-root不特殊对待根目录--preserve-root禁止对根目录进行递归操作--reference使用指定参考文件的权限--version显示版本信息

**参考示例**

设定某个文件的权限为775：

```
[root@linuxcool ~]# chmod 775 File.cfg
```

设定某个文件让任何人都可以读取：

```
[root@linuxcool ~]# chmod a+r File.cfg
```

设定某个目录及其内子文件任何人都可以读取和读取：

```
[root@linuxcool ~]# chmod -R a+r Dir
```

设定某个二进制命令文件上新增SUID特殊权限位：

```
[root@linuxcool ~]# chmod u+s /sbin/reboot
```
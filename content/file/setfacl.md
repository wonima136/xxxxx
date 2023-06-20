---



title: "setfacl命令 – 设置文件ACL策略规则"
description: "setfacl命令 – 设置文件ACL策略规则"
keywords: "setfacl命令 – 设置文件ACL策略规则"
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

setfacl命令来自英文词组“Set file access control list”的缩写，其功能是用于设置文件ACL策略规则。FACL即文件访问控制列表策略，通过该技术可以更加精准地控制权限的分配，例如仅允许某个用户访问指定目录，或仅有某个用户才具有写入权限，把权限约束在一个极小的范围内，系统也就更加安全了。

**语法格式：** setfacl [参数] 文件或目录名

**常用参数：**

-b清空扩展访问控制列表策略-d应用到默认访问控制列表-k移除默认访问控制列表-L跟踪符号链接文件-m 更改文件访问控制列表策略-P 找到符号链接对应的文件-R 递归处理所有子文件-x根据文件中访问控制列表移除指定策略--help显示帮助信息--vesion显示版本信息

**参考示例**

对目录进行FACL策略规则设置，允许指定用户进行读写执行操作：

```
[root@linuxcool ~]# setfacl -Rm u:linuxcool:rwx File
[root@linuxcool ~]# getfacl File
 file: File
 owner: root
 group: root
 user::rwx
 user:linuxcool:rw-
 group::r-x
 mask::rwx
 other::r-x
```

清除指定目录上已有的FACL策略规则：

```
[root@linuxcool ~]# setfacl -x u:linuxcool File
[root@linuxcool ~]# getfacl File
 file: File
 owner: root
 group: root
 user::rwx
 group::r-x
 other::r-x
```
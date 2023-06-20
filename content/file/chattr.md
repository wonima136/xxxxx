---



title: "chattr命令 – 更改文件隐藏属性"
description: "chattr命令 – 更改文件隐藏属性"
keywords: "chattr命令 – 更改文件隐藏属性"
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

chattr命令来自英文词组“change attribute”的缩写，其功能是用于更改文件隐藏属性。常用的ls命令仅能够查看到文件的一般权限、特殊权限、SELinux安全上下文与是否有FACL访问控制列表等情况，但却无法查看到文件隐藏属性，所以有些运维人员甚至不清楚竟然还有第五种文件权限！~

**语法格式：** chattr 参数 文件名

**常用参数：**

-R 递归处理所有子文件-v 设置文件或目录版本 -V 显示执行过程详细信息+开启文件或目录的指定隐藏属性--关闭文件或目录的指定隐藏属性=设置文件或目录的指定隐藏属性

**常用权限：**

权限作用i无法对文件进行任何修改a仅允许补充内容，无法覆盖/删除内容S文件内容在变更后立即同步到硬盘s 彻底从硬盘中删除，不可恢复A不再修改这个文件或目录的最后访问时间b不再修改文件或目录的存取时间D检查压缩文件中的错误d使用dump命令备份时忽略本文件/目录c默认将文件或目录进行压缩u当删除该文件后依然保留其在硬盘中的数据 t让文件系统支持尾部合并x可以直接访问压缩文件中的内容

**参考示例**

给指定文件添加隐藏属性：

```
[root@linuxcool ~]# chattr +i File.cfg
```

从指定文件移除隐藏属性：

```
[root@linuxcool ~]# chattr -i File.cfg
```

给指定目录添加隐藏属性，递归操作：

```
[root@linuxcool ~]# chattr -R +i /Dir
```

从指定目录移除隐藏属性，递归操作：

```
[root@linuxcool ~]# chattr -R -i /Dir
```
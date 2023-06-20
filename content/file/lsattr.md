---



title: "lsattr命令 – 显示文件的隐藏属性"
description: "lsattr命令 – 显示文件的隐藏属性"
keywords: "lsattr命令 – 显示文件的隐藏属性"
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

lsattr命令来自英文词组“list attribute”的缩写，其功能是用于显示文件的隐藏属性。隐藏属性也叫隐藏权限，顾名思义就是用chattr命令添加在文件上的隐藏权限属性，用常规ls命令无法查看到它们，需要使用lsattr命令查看这些属性信息。

**语法格式：** lsattr [参数] 文件名

**常用参数：**

-a  显示目录中的所有文件-d  仅显示目录名称-D显示属性的名称及默认值-E显示从用户设备数据库中获得的当前值-F设置用户定义格式-l显示设备的逻辑名称-R递归处理所有子文件-V显示版本信息

**参考示例**

查看指定文件上的隐藏属性：

```
[root@linuxcool ~]# lsattr File.cfg
-----a------------ File.cfg
```

仅查看指定目录本身上的隐藏属性：

```
[root@linuxcool ~]# lsattr -d /root
------------------ /Dir
```

查看指定目录中全部文件上的隐藏属性：

```
[root@linuxcool ~]# lsattr -a /root
------------------ /root/.
------------------ /root/..
------------------ /root/.bash_logout
------------------ /root/.bash_profile
------------------ /root/.bashrc
------------------ /root/.cshrc
------------------ /root/.tcshrc
-----a------------ /root/File.cfg
------------------ /root/.cache
```
---



title: "crudini命令 – 配置ini格式文件"
description: "crudini命令 – 配置ini格式文件"
keywords: "crudini命令 – 配置ini格式文件"
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

crudini命令来自英文词组“Create read update delete ini”的缩写，中文译为“增删改查”，其功能是用于配置ini格式文件参数信息。ini格式文件是Linux系统中常见的服务配置文件，例如php.ini，这种配置文件通常会被分为多个段落，每个段落以类似[default]的格式标识，而crudini则是为了配置ini格式文件而开发的专用命令工具。

**语法格式：** crudini [参数] 文件名

**常用参数：**

--del删除变量--existing指定文件已存在--format设置输出格式--get显示变量值--inplace锁定并写入文件--list更新一个列表的值--list-sep设置自定义间隔符--output将输出内容写入指定文件--set增加或修改变量--verbose显示执行过程详细信息

**参考示例**：

新建一个用于实验的init格式配置文件：

```
[root@linuxcool ~]# cat File.ini
[DEFAULT]
user = liuchuan
passwd = redhat
port = 8088
[URL]
http1 = www.linuxprobe.com
http2 = www.linuxcool.com
```

向指定文件中添加一个变量，段落名为URL，变量名为http3：

```
[root@linuxcool ~]# crudini --set File.ini URL http3 www.linuxdown.com
```

更新指定文件中的一个变量，段落名为DEFAULT，变量名为port：

```
[root@linuxcool ~]# crudini --set --existing File.ini DEFAULT port 443
```

删除指定文件中的一个变量，段落名为URL，变量名为http3：

```
[root@linuxcool ~]# crudini --del File.ini URL http3
```

删除指定文件中的一个段落，段落名为URL：

```
[root@linuxcool ~]# crudini --del File.ini URL
```

获取指定文件中的一个变量，段落名为DEFAULT，变量名为user：

```
[root@linuxcool ~]# crudini --get File.ini DEFAULT user
```

获取指定文件中的一个段落，段落名为DEFAULT：

```
[root@linuxcool ~]# crudini --get File.ini DEFAULT
```
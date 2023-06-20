---



title: "dpkg-deb命令 – deb软件包管理器"
description: "dpkg-deb命令 – deb软件包管理器"
keywords: "dpkg-deb命令 – deb软件包管理器"
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

dpkg-deb命令来自英文词组“Debian package”的缩写，其功能是用于管理deb软件包。dpkg-deb命令是Debian Linux系统下的软件包管理工具，相当于红帽系Linux平台的rpm命令，它可以对deb格式的软件包执行打包、解压、查看信息等操作，是Debian和Ubuntu系统中常用命令之一。

**语法格式：** dpkg-deb [参数] 文件名

**常用参数：**

-b创建软件包-c显示软件包中的文件列表-e将主控信息解压-f显示软件包的字段内容-i安装软件包-l显示软件包的详细信息-L显示软件包的关联文件-P删除软件包及其配置文件-r删除软件包-R提取控制信息和存档的清单文件-w显示软件包的信息-x解压软件包到指定目录-X解压软件包到指定目录并显示过程信息

**参考示例**

解压deb格式软件包到指定目录：

```
[root@linuxcool ~]# dpkg-deb -x File.deb linuxcool
```

解压deb格式软件包的主控信息文件到指定目录：

```
[root@linuxcool ~]# dpkg-deb -e File.deb linuxcool/DEBIAN
```

打包指定的deb格式软件包：

```
[root@linuxcool ~]# dpkg-deb -b File.deb
```

查看指定deb软件包内的内容：

```
[root@linuxcool ~]# dpkg-deb -c File.deb
```
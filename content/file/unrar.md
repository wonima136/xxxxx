---



title: "unrar命令 – 解压提取RAR压缩文件"
description: "unrar命令 – 解压提取RAR压缩文件"
keywords: "unrar命令 – 解压提取RAR压缩文件"
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

unrar命令来自英文词组“unzip rar”的缩写，其功能是用于解压提取RAR压缩文件。轻松解压来自于Windows系统传来的rar压缩包文件，若有zip压缩包文件需要解压，则使用unzip命令即可。

**语法格式：** unrar [参数] 压缩包

**常用参数：**

e将文件解压缩到当前目录 l 显示文件列表 p 将文件显示到标准输出 t 测试压缩包文件完整性 v 显示执行过程详细信息x 使用完整路径提取文件 o+覆盖现有文件o-不要覆盖现有文件p设置压缩包密码r递归处理所有子文件u更新指定文件x排除指定文件y所有询问均回答yes

**参考示例**

以完整路径解压指定压缩包文件：

```
[root@linuxcool ~]# unrar x File.rar
```

查看指定压缩包内的文件信息：

```
[root@linuxcool ~]# unrar l File.rar
```

测试指定压缩包内文件是否损坏，能够正常解压：

```
[root@linuxcool ~]# unrar t File.rar
```

解压指定压缩包内的文件到当前工作目录：

```
[root@linuxcool ~]# unrar e File.rar
```
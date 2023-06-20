---



title: "znew命令 – 将.Z压缩包重新转化.gz压缩包"
description: "znew命令 – 将.Z压缩包重新转化.gz压缩包"
keywords: "znew命令 – 将.Z压缩包重新转化.gz压缩包"
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

znew命令用于将使用compress命令压缩的“.Z”压缩包重新转化为使用gzip命令压缩的“.gz”压缩包。

**语法格式：** znew [参数] [.Z压缩包]

**常用参数：**

-f 强制执行转换操作，即是目标“.gz”已经存在 -t删除原文件前测试新文件 -P使用管道完成转换操作，以降低磁盘空间使用

**参考实例**

生成“linuxidc.gz”，删除进程中的原始.Z文件：

```
[root@linuxcool ~]# znew linuxidc.Z
```

强制执行转换操作，即是目标“.gz”已经存在：

```
[root@linuxcool ~]# znew -f linuxidc.Z
```

显示压缩的每个文件的名称和减少百分比等详细信息：

```
[root@linuxcool ~]# znew -v linuxidc.Z
```

在删除原始文件之前测试新文件:

```
[root@linuxcool ~]# znew -t linuxidc.Z
```

确保znew使用管道进行转换以减少磁盘空间使用:

```
[root@linuxcool ~]# znew -P linuxidc.Z
```
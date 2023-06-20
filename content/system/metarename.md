---



title: "metarename命令 -重命名元组件或切换分层元组件名称"
description: "metarename命令 -重命名元组件或切换分层元组件名称"
keywords: "metarename命令 -重命名元组件或切换分层元组件名称"
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

重命名元组件或切换分层元组件名称

**语法格式：** metarename[参数]

**常用参数：**

-f强制转换跨元设备成员-h显示帮助信息–s setname指定将在其上使用metarename的磁盘集的名称-x交换元设备名称metadevice1和metadevice2

**参考实例**

将名为d10的元设备重命名为account_records：

```
[root@linuxcool~]＃metarename d10 account_records
```

从现有的名为d1的带安装了文件系统/ home2的条带创建双向镜像：

```
[root@linuxcool~]# metainit d2 1 1 c13d0s1
# metainit -f d20 -m d1
# umount /home2
# metarename -x d20 d1
# metattach d1 d2 # mount /home2
```

(删除一个名为d10的trans元设备，其挂载点为/ myhome，条带化的主设备名为d2，记录设备（也是条带) 名为d5：

```
[root@linuxcool~]# umount /myhome
# metadetach d10
# metarename -f -x d10 d2
# metaclear d2 # metaclear d5
# fsck /dev/md/dsk/d10 # mount /myhome
```
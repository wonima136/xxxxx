---



title: "lvs命令 – 报告有关逻辑卷的信息"
description: "lvs命令 – 报告有关逻辑卷的信息"
keywords: "lvs命令 – 报告有关逻辑卷的信息"
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

lvs命令的作用是可以报告有关逻辑卷的信息。

逻辑卷建立在卷组之上，它是从卷组中“切出”的一块空间。它是最终用户使用的逻辑设备。

逻辑卷相对于物理卷来说：可以将多个物理卷，合并为一个逻辑卷，这样一个分区的容量可以突破物理硬盘的限制。逻辑卷可以弹性的扩容和缩容，当我们不太确定一个应用将来所需的容量，可以先分配少一点的空间，这样可以随着业务发展，按需扩容，避免一次性分配过大磁盘空间导致的资源浪费。另外逻辑卷支持快照功能，可在对系统进行关键操作前设置还原点，避免操作失误导致的数据损坏。

**语法格式：** lvs [参数] [卷组名]

**常用参数：**

-- -all包括所有有关内部逻辑卷的输出信息-- -units<输出单位>所有尺寸都在输出这些单位：h、H、b、B、s、S、k、K、m、M、g、G、t、T、p、P、e、E-- -aligned使用带--separator分隔符对齐输出列-- -nosuffix在输出大小上后缀-- -rows输出列作为行-- -segments使用默认列强调段信息-- -nameprefixes添加一个“LVM2_”前缀加上字段名输出-- -unbuffered立即产生没有正确排序或对齐列的输出-- -noheadings标题行，这通常是输出的第一行

**参考实例**

报告有关逻辑卷的信息：

```
[root@linuxcool ~]# lvs
```

输出所有有关内部逻辑卷的信息：

```
[root@linuxcool ~]# lvs --all fedora
LV VG Attr LSize Pool Origin Data% Meta% Move Log Cpy%Sync Convert
root fedora -wi-ao---- 15.00g
swap fedora -wi-ao---- <3.04g
```

输出大小上后缀：

```
[root@linuxcool ~]# lvs --units M fedora
LV VG Attr LSize Pool Origin Data% Meta% Move Log Cpy%Sync Convert
root fedora -wi-ao---- 16106.13M
swap fedora -wi-ao---- 3258.97M
```
---



title: "dmidecode命令 – 获取有关硬件方面的信息"
description: "dmidecode命令 – 获取有关硬件方面的信息"
keywords: "dmidecode命令 – 获取有关硬件方面的信息"
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

dmidecode命令的作用是以一种可读的方式显示机器的DMI(Desktop Management Interface)信息, 其输出的信息包括 BIOS、系统、主板、处理器、内存、缓存等等, 既可以得到当前的配置，也可以得到系统支持的最大配置，比如说支持的最大内存数等。

DMI就是帮助收集电脑系统信息的管理系统，DMI信息的收集必须在严格遵照SMBIOS规范的前提下进行。DMI设计适用于任何的平台和操作系统。由于DMI信息可以人为修改，因此里面的信息不一定是系统准确的信息。

**语法格式:** dmidecode [参数]

**常用参数：**

-d从设备文件读取信息，输出内容与不加参数标准输出相同-h显示帮助信息-s只显示指定DMI字符串的信息-t只显示指定条目的信息-u显示未解码的原始条目内容-- -dump-bin file将DMI数据转储到一个二进制文件中-- -from-dump FILE从一个二进制文件读取DMI数据-V显示版本信息

**参考实例**

查看服务器信息：

```
[root@linuxcool ~]# dmidecode -t 1
```

查看系统序列号：

```
[root@linuxcool ~]# dmidecode -s system-serial-number
```

查看处理器信息：

```
[root@linuxcool ~]# dmidecode -t processor
```

显示未解码的原始条目内容：

```
[root@linuxcool ~]# dmidecode -u
```
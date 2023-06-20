---



title: "e2fsck命令 – 检查使用 Linux ext2档案系统的partition是否正常工作"
description: "e2fsck命令 – 检查使用 Linux ext2档案系统的partition是否正常工作"
keywords: "e2fsck命令 – 检查使用 Linux ext2档案系统的partition是否正常工作"
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

e2fsck命令用于检查使用 Linux ext2 档案系统的 partition 是否正常工作。 e2fsck命令可以检查ext2、ext3、ext4文件系统，如果系统已经挂载了，那么不建议去检查，因为这样是不安全的。此命令的适用范围：RedHat、RHEL、Ubuntu、CentOS、SUSE、openSUSE、Fedora。

**语法格式：** e2fsck [参数]

**常用参数：**

device预备检查的硬盘 partition，例如：/dev/sda1 -b 设定存放 superblock 的位置 -B 设定单位 block 的大小 -c 检查该partition 是否有坏轨 -C file  将检查的结果存到 file 中以便查看 -d 列印 e2fsck 的 debug 结果 -f 强制检查 -F 在开始检查前，将device 的 buffer cache 清空，避免有错误发生 -l bad_blocks_file 将有坏轨的block资料加到 bad_blocks_file 里面 -L bad_blocks_file 设定坏轨的block资料存到 bad_blocks_file 里面，若无该档则自动产生 -n 将档案系统以[唯读]方式开启 -p 对 partition 做检查，若有问题便自动修复 -v  详细显示模式 -V 显示出目前 e2fsck 的版本 -y 预先设定所有检查时的问题均回答[是]

**参考实例**

检查 /dev/hda5 是否正常，如果有异常便自动修复，并且设定若有问答，均回答[是]:

```
[root@linuxcool ~]# e2fsck -a -y /dev/hda5
```
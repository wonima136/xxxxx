---



title: "ls命令 – 显示目录中文件及其属性信息"
description: "ls命令 – 显示目录中文件及其属性信息"
keywords: "ls命令 – 显示目录中文件及其属性信息"
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

ls命令来自英文单词”list“的缩写，中文译为“列出”，其功能是用于显示目录中文件及其属性信息，是最常被使用到的Linux命令之一。

默认不添加任何参数的情况下，ls命令会列出当前工作目录中的文件信息，常与cd或pwd命令搭配使用，十分方便。而带上参数后，我们则可以做更多的事情，作为最基础、最频繁使用的命令，有必要仔细了解下其常用功能。

**语法格式：** ls [参数] [文件名]

**常用参数：**

-a显示所有文件及目录-A不显示当前目录和父目录-d显示目录自身的属性信息-i显示文件的inode属性信息-l显示文件的详细属性信息-m以逗号为间隔符，水平显示文件信息-r依据首字母将文件以相反次序显示-R递归显示所有子文件-S依据内容大小将文件排序显示-t依据最后修改时间将文件排序显示-X依据扩展名将文件排序显示--color显示信息带有着色效果

**参考示例**

(显示当前目录中的文件名（默认不含隐藏文件) ：

```
[root@linuxcool ~]# ls
anaconda-ks.cfg  Documents  initial-setup-ks.cfg  Pictures  Templates
Desktop          Downloads  Music                 Public    Videos
```

(显示当前目录中的文件名（含隐藏文件) ：

```
[root@linuxcool ~]# ls -a
.                .bashrc  Documents             Music      Videos
..               .cache   Downloads             Pictures   .viminfo
anaconda-ks.cfg  .config  .esd_auth             .pki
.bash_history    .cshrc   .ICEauthority         Public
.bash_logout     .dbus    initial-setup-ks.cfg  .tcshrc
.bash_profile    Desktop  .local                Templates
```

以详细信息模式输出文件名及其属性信息：

```
[root@linuxcool ~]# ls -l
total 8
-rw-------. 1 root root 1430 Dec 14 08:05 anaconda-ks.cfg
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Desktop
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Documents
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Downloads
-rw-r--r--. 1 root root 1585 Dec 14 08:34 initial-setup-ks.cfg
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Music
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Pictures
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Public
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Templates
drwxr-xr-x. 2 root root    6 Dec 14 08:37 Videos
```

显示指定目录中的文件列表：

```
[root@linuxcool ~]# ls /etc
adjtime                     hosts                     pulse
aliases                     hosts.allow               qemu-ga
alsa                        hosts.deny                qemu-kvm
alternatives                hp                        radvd.conf
anacrontab                  idmapd.conf               ras
asound.conf                 init.d                    rc0.d
at.deny                     inittab                   rc1.d
………………省略部分输出信息………………
```

显示当前目录中的文件名及inode属性块号码：

```
[root@linuxcool ~]# ls -i
35290115 anaconda-ks.cfg  35290137 initial-setup-ks.cfg  35290164 Templates
 1137391 Desktop          17840039 Music                 51609597 Videos
 1137392 Documents        35290165 Pictures
17840038 Downloads        51609596 Public
```

结合通配符一起使用，显示指定目录中所有以sd开头的文件列表：

```
[root@linuxcool ~]# ls /dev/sd*
/dev/sda  /dev/sda1  /dev/sda2
```

依据文件内容大小进行排序，显示指定目录中文件名及其属性详情信息：

```
[root@linuxcool ~]# ls -Sl /etc
total 1348
-rw-r--r--.  1 root root    692241 Sep 10  2023 services
-rw-r--r--.  1 root root     66482 Dec 14 08:34 ld.so.cache
-rw-r--r--.  1 root root     60352 May 11  2023 mime.types
-rw-r--r--.  1 root dnsmasq  26843 Aug 12  2023 dnsmasq.conf
-rw-r--r--.  1 root root     25696 Dec 12  2023 brltty.conf
-rw-r--r--.  1 root root      9450 Aug 12  2023 nanorc
-rw-r--r--.  1 root root      7265 Dec 14 08:03 kdump.conf
-rw-------.  1 tss  tss       7046 Aug 13  2023 tcsd.conf
………………省略部分输出信息………………
```
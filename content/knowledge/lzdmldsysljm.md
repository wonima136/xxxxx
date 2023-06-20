---



title: "linux中df命令的使用实例及命令参数介绍"
description: "linux中df命令的使用实例及命令参数介绍"
keywords: "linux中df命令的使用实例及命令参数介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/04/1681993550749_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

↓推荐关注↓

linux中df命令的功能是拿来检测linux服务器的文件系统的c盘空间占用情况系统以借助该命令来获取硬碟被占用了多少空间，目前还剩下多少空间等信息。

1．命令格式：

df[选项][文件]

2．命令功能：

显示指定c盘文件的可用空间。假如没有文件名被指定，则所有当前被挂载的文件系统的可用空间将被显示。默认情况下，c盘空间将以1KB为单位进行显示，除非环境变量POSIXLY_CORRECT被指定，那样将以512字节为单位进行显示

3．命令参数：必要参数：

-a全部文件系统列表

-h便捷阅读方法显示

-H等于“-h”，并且估算式，1K=1000，而不是1K=1024

-i显示inode信息

-k区块为1024字节

-l只显示本地文件系统

-m区块为1048576字节

--no-sync忽视sync命令

-P输出格式为POSIX

--sync在取得c盘信息前，先执行sync命令

-T文件系统类型

![linux扫描磁盘命令_linux扫描新增磁盘命令_linux磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681993550749_0.png)

选择参数：

--block-size=指定区块大小

-t只显示选取文件系统的c盘信息

-x不显示选取文件系统的c盘信息

--help显示帮助信息

--version显示版本信息

4．使用实例：实例1：显示c盘使用情况命令：

```
df
```

输出：

```
[root@CT1190 log]# df

文件系统               1K-块        已用     可用 已用% 挂载点

/dev/sda7             19840892    890896  17925856   5% /
/dev/sda9            203727156 112797500  80413912  59% /opt
/dev/sda8              4956284    570080   4130372  13% /var
/dev/sda6             19840892   1977568  16839184  11% /usr
/dev/sda3               988116     23880    913232   3% /boot
tmpfs                 16473212         0  16473212   0% /dev/shm
```

说明：

(linux中df命令的输出清单的第1列是代表文件系统对应的设备文件的路径名（通常是硬碟上的分区) ；第2列给出分区包含的数据块（1024字节）的数量；第3，4列分别表示已用的和可用的数据块数量。用户似乎会倍感奇怪的是，第3arch linux，4列块数之和不等于第2列中的块数。这是由于缺省的每位分区都留了少量空间供系统管理员使用。虽然遇见普通用户空间已满的情况，管理员仍能登入和留有解决问题所需的工作空间。清单中Use%列表示普通用户空间使用的比率，虽然这一数字达到100％，分区一直留有系统管理员使用的空间。最后 **linux磁盘分区命令**，Mountedon列表示文件系统的挂载点。

实例2：以inode模式来显示c盘使用情况命令：

```
df -i
```

输出：

```
[root@CT1190 log]# df -i

文件系统               Inode (I) 已用 (I) 可用 (I) 已用% 挂载点

/dev/sda7            5124480    5560 5118920    1% /
/dev/sda9            52592640   50519 52542121    1% /opt
/dev/sda8            1280000    8799 1271201    1% /var
/dev/sda6            5124480   80163 5044317    2% /usr
/dev/sda3             255232      34  255198    1% /boot
tmpfs                4118303       1 4118302    1% /dev/shm
```

实例3：显示指定类型c盘命令：

```
df -t ext3
```

![linux扫描新增磁盘命令_linux扫描磁盘命令_linux磁盘分区命令](https://www.linuxcool.com/wp-content/uploads/2023/04/1681993550749_1.jpg)

输出：

```
[root@CT1190 log]# df -t ext3

文件系统               1K-块        已用     可用 已用% 挂载点

/dev/sda7             19840892    890896  17925856   5% /
/dev/sda9            203727156  93089700 100121712  49% /opt
/dev/sda8              4956284    570104   4130348  13% /var
/dev/sda6             19840892   1977568  16839184  11% /usr
/dev/sda3               988116     23880    913232   3% /boot
```

实例4：列举各文件系统的i节点使用情况命令：

```
df -ia
```

输出：

```
[root@CT1190 log]# df -ia

文件系统               Inode (I) 已用 (I) 可用 (I) 已用% 挂载点

/dev/sda7            5124480    5560 5118920    1%
/proc                      0       0       0    -  /proc
sysfs                      0       0       0    -  /sys
devpts                     0       0       0    -  /dev/pts

/dev/sda9            52592640   50519 52542121    1% /opt
/dev/sda8            1280000    8799 1271201    1% /var
/dev/sda6            5124480   80163 5044317    2% /usr
/dev/sda3             255232      34  255198    1% /boot
tmpfs                4118303       1 4118302    1% /dev/shm
none                       0       0       0    -  /proc/sys/fs/binfmt_misc
```

实例5：列举文件系统的类型命令：

```
df -T
```

输出：

```
root@CT1190 log]# df -T

文件系统      类型     1K-块        已用     可用 已用% 挂载点

/dev/sda7     ext3    19840892    890896  17925856   5% /
/dev/sda9     ext3   203727156  93175692 100035720  49% /opt
/dev/sda8     ext3     4956284    570104   4130348  13% /var
/dev/sda6     ext3    19840892   1977568  16839184  11% /usr
/dev/sda3     ext3      988116     23880    913232   3% /boot
tmpfs        tmpfs    16473212         0  16473212   0% /dev/shm
```

实例6：以更易读的形式显示目前c盘空间和使用情况命令：输出：

```
[root@CT1190 log]# df -h

文件系统              容量  已用 可用 已用% 挂载点

/dev/sda7              19G  871M   18G   5% /
/dev/sda9             195G   89G   96G  49% /opt
/dev/sda8             4.8G  557M  4.0G  13% /var
/dev/sda6              19G  1.9G   17G  11% /usr
/dev/sda3             965M   24M  892M   3% /boot
tmpfs                  16G     0   16G   0% /dev/shm

[root@CT1190 log]# df -H

文件系统               容量   已用  可用 已用% 挂载点

/dev/sda7               21G   913M    19G   5% /
/dev/sda9              209G    96G   103G  49% /opt
/dev/sda8              5.1G   584M   4.3G  13% /var
/dev/sda6               21G   2.1G    18G  11% /usr
/dev/sda3              1.1G    25M   936M   3% /boot
tmpfs                   17G      0    17G   0% /dev/shm

[root@CT1190 log]# df -lh

文件系统              容量  已用 可用 已用% 挂载点

/dev/sda7              19G  871M   18G   5% /
/dev/sda9             195G   89G   96G  49% /opt
/dev/sda8             4.8G  557M  4.0G  13% /var
/dev/sda6              19G  1.9G   17G  11% /usr
/dev/sda3             965M   24M  892M   3% /boot
tmpfs                  16G     0   16G   0% /dev/shm

[root@CT1190 log]# df -k

文件系统               1K-块        已用     可用 已用% 挂载点

/dev/sda7             19840892    890896  17925856   5% /
/dev/sda9            203727156  93292572  99918840  49% /opt
/dev/sda8              4956284    570188   4130264  13% /var
/dev/sda6             19840892   1977568  16839184  11% /usr
/dev/sda3               988116     23880    913232   3% /boot
tmpfs                 16473212         0  16473212   0% /dev/shm
```

说明：

-h更具目前c盘空间和使用情况linux运维面试题，以更易读的形式显示

-H根里面的-h参数相同，不过在根式化的时侯，采用1000而不是1024进行容量转换

-k以单位显示c盘的使用情况

-l显示本地的分区的c盘空间使用率 **linux磁盘分区命令**，假若服务器nfs了远程服务器的c盘，这么在df上加上-l后系统显示的是过滤nsf驱动器后的结果

-i显示inode的使用情况。linux采用了类似表针的形式管理c盘空间影射。这也是一个比较关键应用
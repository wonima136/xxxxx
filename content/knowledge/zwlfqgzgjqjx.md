---



title: "掌握Linux分区挂载，10个技巧解析"
description: "掌握Linux分区挂载，10个技巧解析"
keywords: "掌握Linux分区挂载，10个技巧解析"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684412210218_1.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

在 Linux 系统中，挂载分区是一项非常基础的操作。它可以让我们更好地管理磁盘空间，提高存储效率。但是，对于初学者来说，这个过程可能会有点棘手。今天，我们将为大家介绍 Linux 挂载分区命令，并逐步分析讨论其10个方面。

**1.查看磁盘分区信息**

在进行挂载之前，我们需要先查看磁盘分区信息。使用以下命令可以查看当前系统中所有的磁盘分区：

```
sudo fdisk -l
```

这个命令会列出所有的磁盘分区信息，包括设备名称、起始位置、结束位置、大小等等。

**2.创建挂载点**

在挂载之前，我们需要先创建一个挂载点。挂载点是一个目录，在该目录下可以访问已经挂载的分区。使用以下命令可以创建一个挂载点：

```
sudo mkdir /mnt/mydisk
```

这个命令会在`/mnt`目录下创建一个名为`mydisk`的目录。

**3.挂载分区**

有了上述两步操作之后，就可以进行实际的挂载了。使用以下命令可以将`/dev/sdb1`分区挂载到`/mnt/mydisk`目录：

```
sudo mount /dev/sdb1 /mnt/mydisk
```

这个命令会将`/dev/sdb1`分区挂载到`/mnt/mydisk`目录下。

**4.查看已挂载的分区**

使用以下命令可以查看当前系统中已经挂载的分区：

```
df -h
```

![linux 挂载分区命令_linux 挂载 分区_linux挂载分区](https://www.linuxcool.com/wp-content/uploads/2023/05/1684412210218_1.png)

这个命令会列出所有已经挂载的分区信息，包括文件系统、容量、已用空间、可用空间等等。

**5.卸载分区**

使用以下命令可以卸载一个已经挂载的分区：

```
sudo umount /mnt/mydisk
```

这个命令会将`/mnt/mydisk`目录下挂载的分区卸载。

**6.持久化挂载**

如果我们希望每次启动系统时都自动挂载某个分区，可以将其添加到`/etc/fstab`文件中。使用以下命令可以编辑该文件：

```
sudo nano /etc/fstab
```

在文件末尾添加一行类似于下面的内容：

```
/dev/sdb1   /mnt/mydisk   ext4   defaults   0   0
```

其中，第一个字段为设备名称，第二个字段为挂载点，第三个字段为文件系统类型，第四个字段为挂载选项，最后两个字段为备份和检查顺序。

**7.挂载网络共享**

除了本地分区之外，我们还可以挂载远程的网络共享。使用以下命令可以挂载一个 NFS 共享：

```
sudo mount -t nfs 192.168.1.100:/mnt/data /mnt/mydisk
```

其中，`192.168.1.100`是 NFS 服务器的 IP 地址，`/mnt/data`是共享的目录，`/mnt/mydisk`是本地挂载点。

**8.挂载 Windows 分区**

![linux 挂载分区命令_linux 挂载 分区_linux挂载分区](https://www.linuxcool.com/wp-content/uploads/2023/05/1684412210218_2.png)

如果我们需要在 Linux 系统中访问 Windows 分区linux格式化命令，可以使用以下命令挂载 NTFS 文件系统：

```
sudo mount -t ntfs-3g /dev/sda1 /mnt/mydisk
```

其中，`/dev/sda1`是 Windows 分区的设备名称，`/mnt/mydisk`是本地挂载点。

**9.挂载 CD/DVD**

如果我们需要访问光盘内容，可以使用以下命令挂载 CD/DVD：

```
sudo mount /dev/cdrom /mnt/cdrom
```

其中，`/dev/cdrom`是光驱设备名称linux下载，`/mnt/cdrom`是本地挂载点。

**10.自动挂载 USB 设备**

如果我们希望插入 USB 设备时自动挂载其分区 **linux 挂载分区命令**，可以通过 udev 规则实现。使用以下命令可以创建一个 udev 规则文件：

```
sudo nano /etc/udev/rules.d/10-usb-19822b1b15d9eefc54c07ab49f87b100.rules
```

将以下内容添加到文件中：

```
ACTION=="add", KERNEL=="sd[b-z][0-9]", TAG+="systemd", ENV{SYSTEMD_WANTS}+="usb-19822b1b15d9eefc54c07ab49f87b100@%k.service"
```

保存文件后 **linux 挂载分区命令**，使用以下命令重新加载 udev 规则：

```
sudo udevadm control --reload-rules
```

现在，插入 USB 设备时就会自动挂载其分区了。

以上就是 Linux 挂载分区命令的详细介绍。希望这篇文章能够帮助大家更好地管理磁盘空间，提高存储效率。
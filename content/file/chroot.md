---



title: "chroot命令 – 切换根目录"
description: "chroot命令 – 切换根目录"
keywords: "chroot命令 – 切换根目录"
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

(chroot命令来自英文词组“change root directory”的缩写，其功能是用于切换根目录。chroot命令的历史最早可被追溯到1979年的UNIX系统，后被引入到Linux系统中，Linux系统中的目录结构都是以/（即根目录) 开始的，管理员可以使用chroot将根目录切换至其他位置。切换根目录后的Linux系统读取到的目录和文件将不再是旧系统根下的，而是新的根目录所对应路径下的目录和文件。

(举例来说，对Vsftpd服务程序进行chroot操作后，其默认根目录（/) 会被映射到某个指定的新目录，Vsftp将不能够对新目录外的文件进行访问操作，大大增强了服务器数据的安全性。

**语法格式：** chroot [参数] 目录名

**常用参数：**

--groups指定补充用户组--userspec指定用户及用户组--help  显示帮助信息 --version 显示版本信息

**参考示例**

切换到新的根目录路径：

```
[root@linuxcool ~]# chroot /usr
```
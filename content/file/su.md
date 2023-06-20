---



title: "su命令 – 切换用户身份"
description: "su命令 – 切换用户身份"
keywords: "su命令 – 切换用户身份"
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

(su命令来自英文单词“switch user”的缩写，其功能是用于切换用户身份。管理员切换至任意用户身份而无须密码验证，而普通用户切换至任意用户身份均需密码验证。另外添加单个减号（-) 参数为完全的身份变更，不保留任何之前用户的环境变量信息。

**语法格式：** su [参数] 用户名

**常用参数：**

(--完全的切换身份-c执行完指令后，自动恢复原来的身份-f不读取启动文件（适用于csh和tsch) -l切换身份时，也同时变更工作目录-m切换身份时，不要变更环境变量-s设置要执行的Shell终端--help显示帮助信息--version 显示版本信息

**参考示例**

变更至指定用户身份：

```
[root@linuxcool ~]# su linuxprobe
```

完全变更至指定用户身份：

```
[root@linuxcool ~]# su - linuxprobe
```
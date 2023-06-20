---



title: "fdformat命令 – 对指定的软碟机装置进行低阶格式化"
description: "fdformat命令 – 对指定的软碟机装置进行低阶格式化"
keywords: "fdformat命令 – 对指定的软碟机装置进行低阶格式化"
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

fdformat命令用于对指定的软碟机装置进行低阶格式化。

使用这个指令对软碟格式化的时候，最好指定像是下面的装置：

- /dev/fd0d360 磁碟机 A: ，磁片为 360KB 磁碟
- /dev/fd0h1440 磁碟机 A: ，磁片为 1.4MB 磁碟
- /dev/fd1h1200 磁碟机 B: ，磁片为 1.2MB 磁碟

如果使用像是 /dev/fd0 之类的装置，如果里面的磁碟不是标准容量，格式化可能会失败。在这种情况之下，使用者可以用 setfdprm 指令先行指定必要参数。

**语法格式：** fdformat [参数]

**常用参数：**

-n关闭确认功能。这个选项会关闭格式化之后的确认步骤

**参考实例**

将磁碟机 A 的磁片格式化成 1.4MB 的磁片，并且省略确认的步骤：

```
[root@linuxcool ~]# fdformat -n /dev/fd0h1440
```
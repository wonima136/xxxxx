---



title: "chcpu命令 – 配置CPU"
description: "chcpu命令 – 配置CPU"
keywords: "chcpu命令 – 配置CPU"
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

(chcpu命令的作用是可以修改CPU的状态。可以启用或禁用CPU，扫描新的CPU，将CPU调动从虚拟机管理程序（配置) 或返回的CPU与超低层管理程序的模式，要求CPU解除配置。

cpu列表可以使用参数指定以逗号分隔。 列表可以包含单个CPU地址或地址范围。 例如0、5、7、9-11。该命令适用于地址为0、5、7、9、10和11的 cpu。chcpu命令是util-linux软件包的一部分，可从Linux Kernel Archive获得。

**语法格式：** chcpu [参数]

**常用参数：**

 -g取消配置所有指定的CPU -d禁用所有指定的CPU -e启用所有指定的CPU -c配置所有指定的CPU -r触发CPU重新扫描 -p<模式>设置CPU调度模式，可用模式包括horizontal和vertical

**参考实例**

触发CPU重新扫描：

```
[root@linuxcool ~]# chcpu -r
```

启用所有指定的CPU：

```
[root@linuxcool ~]# chcpu -e 2,5,9
```

设置CPU调度模式：

```
[root@linuxcool ~]# chcpu -p horizontal
```
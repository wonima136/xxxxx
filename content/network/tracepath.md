---



title: "tracepath命令 – 追踪报文的路由信息"
description: "tracepath命令 – 追踪报文的路由信息"
keywords: "tracepath命令 – 追踪报文的路由信息"
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

tracepath命令来自英文词组“Trace Path”，其功能是用于追踪报文的路由信息。tracepath命令能够追踪并显示报文到达目的主机所经过的路由信息，以及对应的MTU值。

**语法格式：** tracepath [参数] 域名或IP地址

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-b显示IP地址和主机名-l设置初始化的数据包长度-m设置最大TTL值-n仅显示IP地址-p设置要使用的初始目标端口-V显示版本信息

**参考示例**

追踪到达域名的主机路由信息：

```
[root@linuxcool ~]# tracepath www.linuxcool.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  10.130.116.46                                         0.601ms
 1:  10.130.115.46                                         0.558ms
 2:  11.73.1.89                                            0.732ms
 3:  11.54.242.117                                         0.940ms
 4:  103.52.85.150                                         1.900ms
………………省略部分输出信息………………
```

追踪到达域名的主机路由信息，同时显示ip地址与主机名：

```
[root@linuxcool ~]# tracepath -b www.linuxcool.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  10.130.115.46 (10.130.115.46)                         0.486ms
 1:  10.130.116.46 (10.130.116.46)                         0.527ms
 2:  11.73.1.237 (11.73.1.237)                             0.697ms
 3:  11.54.241.165 (11.54.241.165)                         1.082ms
………………省略部分输出信息………………
```

设置追踪报文路由的最大TTL值为20，并追踪到达域名的主机路由信息：

```
[root@linuxcool ~]# tracepath -m 20 www.linuxcool.com
 1?: [LOCALHOST]                      pmtu 1500
 1:  10.130.115.46                                         0.607ms
 1:  10.130.116.46                                         0.672ms
 2:  11.73.1.65                                            0.689ms
 3:  10.92.110.37                                          4.966ms
 4:  10.102.255.201                                        0.987ms
………………省略部分输出信息………………
```
---



title: "tcpdump命令 – 监听网络流量"
description: "tcpdump命令 – 监听网络流量"
keywords: "tcpdump命令 – 监听网络流量"
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

tcpdump命令的功能是用于监听网络流量，是一款数据嗅探工具，Linux系统中常用的数据抓包软件，能够记录所有经过服务器的数据包信息，需要使用管理员身份执行。

**语法格式**：tcpdump 参数 对象

**常用参数：**

-a将网络和广播地址转换成名称-c收到指定的数据包数目后，就停止倾倒操作-d将编译过的数据包编码转换成可阅读的格式-dd将编译过的数据包编码转换成C语言的格式-ddd将编译过的数据包编码转换成十进制数字的格式-e在每列倾倒资料上显示连接层级的文件头-f用数字显示网络地址-F指定内含表达方式的文件-i使用指定的网络截面送出数据包-l使用标准输出列的缓冲区-n不将IP地址转换成主机名-O不将数据包编码最佳化-p不让网络界面进入混杂模式-q静默执行模式-r从指定的文件中读取数据-s设置每个数据包的大小-S用绝对而非相对数值列出TCP关联数-t不显示时间戳记-tt显示未经格式化的时间戳记-T将数据包转换成指定类型-v显示执行过程信息-vv显示执行过程详细信息-x用十六进制字码显示数据包资料-w将数据包数据写入指定的文件

**参考示例**

监视指定网络接口的数据包：

```
[root@linuxcool ~]# tcpdump -i ens160
```

(监视指定主机的数据包（主机名) ：

```
[root@linuxcool ~]# tcpdump host linuxcool.com
```

(监听指定主机的数据包（IP地址) ：

```
[root@linuxcool ~]# tcpdump host 192.168.10.10
```

监听指定端口号的数据包，并以文本形式展示：

```
[root@linuxcool ~]# tcpdump -i any port 80 -A
```
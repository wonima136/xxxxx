---



title: "iptstate命令 – 以top风格显示内核的iptables状态"
description: "iptstate命令 – 以top风格显示内核的iptables状态"
keywords: "iptstate命令 – 以top风格显示内核的iptables状态"
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

iptstate命令以top命令类似的风格实时显示Linux内核中iptables的工作状态。输出信息可以以任何字段进行排序，可以定义状态刷新的频率和单次显示状态信息。

**语法格式:** iptstate [参数]

**常用参数：**

-b指定输出信息的排序规则-d不动态的改变窗口大小-f过滤本地回送消息-h显示帮助消息-l将IP地址解析为域名-L隐藏于DNS查询相关的状态-r<秒数>指定刷新屏幕的频率-R反序排序-s单次运行模式，仅打印一次状态信息-t显示汇总信息

**参考实例**

以top风格实时显示iptables的工作状态：

```
[root@linuxcool ~]# iptstate
```

显示汇总消息：

```
[root@linuxcool ~]# iptstate -t
```

指定屏幕刷新的频率为5秒：

```
[root@linuxcool ~]# iptstate -r 5
```

打印状态信息：

```
[root@linuxcool ~]# iptstate -s
```
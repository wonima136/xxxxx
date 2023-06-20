---



title: "opensslOpenSSL命令的网络路径状况及解决办法"
description: "opensslOpenSSL命令的网络路径状况及解决办法"
keywords: "opensslOpenSSL命令的网络路径状况及解决办法"
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

openssl

OpenSSL是一个常用的加密工具库，可以拿来实现SSL/TLS通讯、数字证书签发和管理、密码学算法等功能。

检测ssl握手情况，证书内容等。

网路路径状况查看

traceroute

用于确定数据包从一个主机到另一个主机所经过的路由路径。

mtr

用于网路故障定位和性能剖析。mtr命令可以连续发送ICMP报文，并在每一跳的路由器上进行网路延后和丢包率的统计，用于找出网路故障的症结。

网路状态和计数查看

netstat

用于查看网路联接、路由表、网络插口状态等信息。通过netstat命令可以了解当前系统的网路状况。

ss

ss命令是netstat的代替品，用于查看网路联接状态、监听端口、网络插口等信息。与netstat不同的是，ss命令提供了更快的速率和更多的选项。

ifconfig

用于查看和配置网路插口。通过ifconfig命令可以查看网路插口的IP地址、MAC地址、网络状态等信息。

ip

配置和管理网路插口、路由表、ARP缓存和其他网路相关的属性。

curl

查看网路出口地址。

ethtool

用于查看和配置网路插口的驱动程序。通过ethtool命令可以查看网路插口的状态、速度、双工模式等信息，并进行网路性能调优。

iftop

用于实时监控网路流量。iftop命令可以显示每位网路插口的实时流量、连接数、连接速率等信息，用于快速确诊网路困局和流量异常。

nethogs

用于查看进程占用的网路带宽。通过nethogs命令可以查看每位进程占用的网路带宽、连接数和流量等信息，用于找出网路资源占用高的进程。

dns相关

nslookup

用于查询DNS服务器上的主机名和IP地址信息。通过nslookup命令可以查看主机名对应的IP地址、反向DNS解析等信息。

dig

查询DNS服务器上的主机名和IP地址信息。与nslookup不同的是，dig命令提供了更多的选项和功能。

系统异常查看

dmesg

用于查看内核日志。通过dmesg命令可以查看系统内核的日志信息，包括硬件监测、设备驱动加载等信息，用于排查和剖析系统硬件和驱动问题。

例如oom、segmentfault都可以在这儿面看见相应的记录。

systemctl

用于管理systemd服务。通过systemctl命令可以启动、停止、重启和查询systemd服务的状态 **linux 连接网络 命令** linux桌面，用于排查和处理系统服务异常问题。

journalctl

用于查看系统日志。通过journalctl命令可以查看系统日志、过滤日志信息、按时间戳或则进程名等条件搜索日志信息，用于排查和剖析系统异常和错误。

显存异常

valgrind

检测程序在运行时的显存访问错误、泄漏等问题。

无需更改代码

asan

可以检查常见的显存安全问题，比如缓冲区溢出、使用未初始化的显存等。

性能定位

top

实时监控系统CPU、内存、进程等资源的使用情况，用于找出系统资源占用高的进程。

看出是用户态高还是内核态高，是否是io高等。

vmstat

(用于显示系统虚拟显存（VM) 的使用情况。它提供了对系统显存、进程、CPU等性能数据的实时监控。

可快速看出上下文切换次数。

pidstat

进程级别统计cpu、io、上下文切换等信息。

看出上下文切换中自愿切换和非自愿切换次数。

sar

检测CPU使用率、磁盘I/O、网络流量、内存使用情况、进程活动等多个方面的数据，并将这种数据保存到本地或远程系统中，以供后续剖析和处理。

可快速统计流量。

perf

可以用于检测和剖析系统各个方面的性能数据，包括CPU、内存、磁盘、网络等方面的数据。

cpu取样一把好手，看什么函数是高频出现。还可以结合其他工具生成火焰图。

pprof

用于剖析Go应用程序性能的工具，可以剖析CPU、内存和代码分布等方面的性能问题。

go语言专用更强悍的取样工具。

strace

用于跟踪进程的系统调用和讯号。

bpftrace

(动态跟踪工具，它使用BPF（BerkeleyPacketFilter) 技术来实现高效的内核和用户空间跟踪功能。

例如复印某个函数的系统调用栈和用户空间调用栈。脚本的形式使用ebpf工具。

bcc

(基于BPF（BerkeleyPacketFilter) 技术的动态跟踪和性能剖析工具集，主要用于Linux系统的内核和用户空间程序剖析。

比bpftrace更灵活。

网路场景构造

iptables

用于设置和管理Linux内核的防火墙。通过iptables命令可以设置网路联接的规则、过滤数据包、进行网路地址转换等操作。

可以对特定特点进行丢包，转换。

tc

(流量控制、网络流量调度和队列管理的工具，可用于实现各类QoS（QualityofService) 和网路流量控制功能

例如对特定流量降低丢包率、时延等。

postman

一款流行的API测试工具 **linux 连接网络 命令**，可以帮助开发人员快速创建、测试、调试和共享API。

流量复制和重放

goreplay

一个HTTP实时流量复制工具。支持流量的放大、缩小，频度限制red hat linux，还支持把恳求记录到文件，便捷回放和剖析，也支持和ElasticSearch集成。

tcpreplay

一种pcap包的重放工具，它可以将用ethreal、wireshark工具抓出来的包原貌或经过任意更改后重放回来。它容许你对报文做任意的更改指定重放报文的速率等，这样tcpreplay就可以拿来复现抓包的情境以定位bug，以极快的速率重放因而实现压力测试。

tcpcopy

一种恳求复制工具，通过复制在线数据包，更改TCP/IP背部信息，发送给测试服务器，达到误导测试服务器的TCP程序的目的。

性能压测

iperf

用于测试网路带宽和性能。通过iperf命令可以在两个主机之间进行带宽测试和性能测试，用于评估网路的实际性能。

适宜传输层压测、带宽压测等场景。

ApacheBench(ab)

一个基于ApacheHTTP服务器的性能测试工具，用于测试Web服务器的负载能力

适宜应用层压测。

wrk
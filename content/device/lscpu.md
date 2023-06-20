---



title: "lscpu命令 – 显示CPU架构信息"
description: "lscpu命令 – 显示CPU架构信息"
keywords: "lscpu命令 – 显示CPU架构信息"
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

lscpu命令来自英文词组“list the CPU architecture”的缩写，其功能是用于显示CPU架构信息。lscpu命令会从/proc/cpuinfo文件中收集有关本机CPU架构的信息，并整理成易读的格式输出到Shell终端，运维人员可以很方便地了解到本机CPU数量、架构、线程、核心、套接字等重要指标信息~

**语法格式：** lscpu [参数]

**常用参数：**

-a显示全部的CPU信息-b仅显示在线CPU信息-c仅显示离线CPU信息-e显示扩展的可读格式-h显示帮助信息-p使用可解析的格式-s设置系统根目录-V显示版本信息-x显示十六进制掩码而非CPU列表信息-y显示物理ID而非逻辑ID

**参考示例**

显示有关CPU架构的信息：

```
[root@linuxcool ~]# lscpu
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Byte Order:          Little Endian
CPUs):              8
On-line CPU(s) list: 0-7
Thread(s) per core:  1
Core(s) per socket:  8
Socket(s):           1
NUMA node(s):        1
Vendor ID:           GenuineIntel
CPU family:          6
Model:               158
Model name:          Intel(R) Core(TM) i5-9300H CPU @ 2.40GHz
Stepping:            10
CPU MHz:             2400.007
BogoMIPS:            4800.01
Hypervisor vendor:   VMware
Virtualization type: full
L1d cache:           32K
L1i cache:           32K
L2 cache:            256K
L3 cache:            8192K
NUMA node0 CPU(s):   0-7
Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon nopl xtopology tsc_reliable nonstop_tsc cpuid pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti ssbd ibrs ibpb stibp fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid rdseed adx smap clflushopt xsaveopt xsavec xgetbv1 xsaves arat flush_l1d arch_capabilities
```
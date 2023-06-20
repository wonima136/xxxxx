---



title: "Linux服务器设计的服务器性能测试工具及台湾限定解锁测试"
description: "Linux服务器设计的服务器性能测试工具及台湾限定解锁测试"
keywords: "Linux服务器设计的服务器性能测试工具及台湾限定解锁测试"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1678486040811_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

LemonBench工具(别称LBench、柠檬Bench)linux多线程，是一款针对Linux服务器设计的服务器性能测试工具。通过综合测试，可以快速评估服务器的综合性能，为使用者提供服务器硬件配置信息。

LemonBench目前囊括了如下测试：

```javascript
服务器基础信息 (CPU信息/内存信息/Swap信息/磁盘空间信息/网络信息等)
流媒体解锁测试 (目前支持HBO Now/动画疯/B站港澳台/B站台湾限定)
系统性能测试 (CPU/内存/磁盘)
Speedtest网速测试 (本地到最近源及国内各地域不同线路的网速)
路由追踪测试 (追踪到国内和海外不同线路的路由信息)
```

复制

快速测试

假如你的服务器上安装有curl工具，请使用以下命令执行脚本：

![linux中网速测试命令_测试本地网速命令_dos命令测试网速](https://www.linuxcool.com/wp-content/uploads/2023/03/1678486040811_0.jpg)

```javascript
curl -fsSL https://ilemonrain.com/download/shell/LemonBench.sh | bash -s fast
```

复制

假如你的服务器上安装有wget工具，请使用以下命令执行脚本：

```javascript
wget -qO- https://ilemonrain.com/download/shell/LemonBench.sh | bash -s fast
```

复制

完整测试

假如你的服务器上安装有curl工具，请使用以下命令执行脚本：

```javascript
curl -fsSL https://ilemonrain.com/download/shell/LemonBench.sh | bash -s full
```

复制

假如你的服务器上安装有wget工具，请使用以下命令执行脚本：

```javascript
wget -qO- https://ilemonrain.com/download/shell/LemonBench.sh | bash -s full
```

复制

因为测试用时较长，为避免发生SSH断线意外，推荐置于screen中运行！

以下测试项目列表，为20191007版本的项目列表！测试内容随时可能发生变化 **linux中网速测试命令** linux伊甸园论坛，以实际版本为准！

系统信息搜集

![测试本地网速命令_linux中网速测试命令_dos命令测试网速](https://www.linuxcool.com/wp-content/uploads/2023/03/1678486040811_1.jpg)

系统名称(包括版本号、系统位数)CPU信息(机型、缓存大小)CPU数目检查(自适应辨识分辨虚拟机(即VPS)与独立服务器)显存使用率Swap使用率引导设备(开机c盘)系统负载(1分钟/5分钟/15分钟 **linux中网速测试命令**，测试结果取启动测试时的实时结果)

网路信息搜集

(本机IPV4地址及相关信息（ASN/归属地/营运商) 本机IPV6地址及相关信息（ASN/归属地/营运商）

流媒体解锁测试(Beta)

HBONow解锁测试巴哈姆特动漫疯解锁测试哔哩哔哩港澳台及香港限定解锁测试

系统性能测试

CPU性能测试显存性能测试c盘性能测试(4K测试结果适用于SSD介质c盘，1M测试结果适用于SSD介质与HDD介质c盘)

Speedtest网速测试

近来测速点中国西北地区(电信/联通)中国华南地区(电信/联通)中国华北地区(电信/联通)中国华北地区(电信/联通)中国华北地区(联通/联通)中国东北地区(电信/联通)中国东北地区(电信/联通/联通)

路由追踪测试(返程测试)

国外部份：移动/联通/联通/电信精品网/联通CN2/鹏博士/教育网/科技网/广电网台湾部份：CU/CT/CN2/HGC/HKBN/PCCW/TGT/WTT香港部份：CT/CN2/Singtel/StarHub/M1/AWS台湾部份：NTT/IIJ/SoftBank/KDDI/CT/CN2/AWS日本部份：KT/SK/LG/CN2/AWS大陆部份：Chief/APTG/CHT/TFN/FET/KBT/TAIFO日本部份：CT/CN2/PCCW/HE/GTT/ATT/TATA/NTT/Level3/ZAYO/Cogentco亚洲部份：Telekom/O2/Vodafont/CT/CN2/GTT/Cogentco/BT/TATA/RT/TTK/MTSIPV6部份：移动/联通/联通/教育网(CERNET2)
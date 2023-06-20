---



title: "hciconfig命令 – 配置蓝牙设备"
description: "hciconfig命令 – 配置蓝牙设备"
keywords: "hciconfig命令 – 配置蓝牙设备"
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

hciconfig命令来自英文词组“HCI config”的缩写，其功能是用于配置蓝牙设备参数信息。HCI全称为“Host Controller Interface”，中文译为主机控制接口，是蓝牙协议栈的一部分。

**语法格式：** hciconfig [参数] [设备名] [动作]

**常用参数：**

-a显示蓝牙设备信息-h显示帮助信息

**常用动作：**

up开启蓝牙设备down关闭蓝牙设备reset重置蓝牙设备rstat重置计数器auth启用身份认证noauth禁用身份认证encrypt启用加密noencrypt禁用加密secmgr启用安全管理器nosecmgr禁用安全管理器piscan启用页面和查询扫描noscan禁用页面和查询扫描iscan启用查询扫描，禁用页面扫描pscan启用页面扫描，禁用查询扫描ptype 显示当前数据包类型class 显示设备类voice  显示语音设置inqtpl  显示当前的IAC设置inqtpl 显示出当前查询的发射功率级别inqmode 显示出当前查询模式inqdata 显示出当前查询数据inqtype 显示出当前查询扫描类型inqparams 显示查询扫描窗口和间隔pageparms 显示页面扫描窗口和间隔pageto 显示页面超时信息afhmode 显示出当前的 AFH 模式sspmode 显示出当前的 AFH 模式sspmode 显示出当前的简单配对模式aclmtu 将ACL MTU设置为mtu字节scomtu将SCO MTU设置为mtu字节putkey 将bdaddr的链接密钥存储在设备上delkey 删除为bdaddr存储的链接密钥oob显示本地 OOB 数据commands显示支持的命令features显示设备功能version显示版本信息revision显示修订信息

**参考示例**

查看当前系统中全部的蓝牙设备信息：

```
[root@linuxcool ~]# hciconfig -a
```

开启指定名称的蓝牙设备：

```
[root@linuxcool ~]# hciconfig hci0 up
```

关闭指定名称的蓝牙设备：

```
[root@linuxcool ~]# hciconfig hci0 down
```

重置指定名称的蓝牙设备：

```
[root@linuxcool ~]# hciconfig hci0 reset
```
---



title: "ntp-keygen命令 – 生成NTP主机密钥"
description: "ntp-keygen命令 – 生成NTP主机密钥"
keywords: "ntp-keygen命令 – 生成NTP主机密钥"
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

(ntp-keygen命令的作用是可以生成NTP主机密钥（公钥和私钥) 。

公钥和私有密钥是一对，如果用公开密钥对数据进行加密，只有用对应的私有密钥才能解密。如果用私有密钥对数据进行加密，只有用对应的公开密钥才能解密。因为加密和解密使用的是两个不同的密钥，所以这种加密叫作非对称加密。

常用的非对称加密算法有：ElGamal、RSA、DH等。

**语法格式：** ntp-keygen [参数]

**常用参数：**

(-M生成MD5密钥-H生成RSA主机密钥-S<签名密钥>生成指定类型的签名密钥，类型可以是RSA或DSA-i<发行人名称>设置发行人名称-s<主题名称>设置主题名称-P生成计算机私有证书-p<密码>加密生成一个包含有密码和DES-CBC算法的私有数据文件-q<密码>为读取文件的密码设置密码-m<模块尺寸>设置初期模块尺寸（256~2048位) 。默认大小为512-e写入身份密钥-T生成一个受信任的证书-d启用调试-G为GQ识别方案生成参数和密钥，来淘汰任何可能存在的-g使用现有GQ参数为GQ识别方案生成密钥。如果GQ参数还不存在，先创建它们-I生成用于IFF识别方案的参数，来淘汰任何可能存在的-V<数字>为MV识别方案生成参数和密钥-c<方案>选择证书信息摘要/签名加密方案，可以是RSA-MD2、RSA-MD5、RSA-SHA、RSA-SHA1、RSA-MDC2、RSA-RIPEMD160、RSA-SHA或RSA-SHA1

**参考实例**

加密生成一个包含有密码和DES-CBC算法的私有数据文件：

```
[root@linuxcool.com~]# ntp-keygen -p linuxcool
```

生成RSA类型的NTP主机密钥：

```
[root@linuxcool.com~]# ntp-keygen -S RSA
```

生成受信任的证书：

```
[root@linuxcool.com~]# ntp-keygen -T
```
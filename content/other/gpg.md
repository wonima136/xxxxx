---



title: "gpg命令 – 对信息加密和解密"
description: "gpg命令 – 对信息加密和解密"
keywords: "gpg命令 – 对信息加密和解密"
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

gpg命令来自英文词组“GnuPG”的缩写，其功能是用于对信息加密和解密。gpg命令是Linux系统中对信息进行加解密和数字签名的免费工具，除了能使用常规密码加解密外，还提供了“公钥/私钥对”验证方式，随时随地都能发送加密信息，而且这种加密是单向的，只有我们自己的“密钥”才能解开密文。

而数字签名则是另一大使用方向，通过数字认证过的信息，他人能确保发布的信息来自你，并且没有经过他人篡改。

**语法格式：** gpg [参数] 文件名

**常用参数：**

-c设置加密文件-o设置解密文件--armor使用ASCII封装--card-edit更改卡数据--card-status显示卡状态--check-sigs检查密钥签名--change-pin更改卡PIN--decrypt解密数据--detach-sign生成分离的签名--delete-keys从公钥钥匙环中删除密钥--delete-secret-keys从私钥钥匙环中删除密钥--dry-run不做任何改变--export导出密钥信息--encrypt加密数据--edit-key编辑密钥信息--fingerprint显示密钥和指纹信息--gen-revoke生成一份吊销证书--gen-key生成密钥对--interactive覆盖前询问用户是否确认--import导入或合并密钥--lsign-key为密钥添加本地签名--list-keys查看已有的密钥列表--list-secret-keys显示密钥列表--output输出信息到文件--recv-keys从公钥服务器上导入密钥--refresh-keys在公钥服务器上更新密钥--search-keys从公钥服务器上搜索密钥--symmetric使用对称加密--sign生成一个签名--send-keys上传密钥到指定公钥服务器--sign-key为指定密钥添加签名--server使用服务器模式--text使用文本模式--update-trustdb更新信任数据库--verify验证签名--verbose显示执行过程详细信息

**参考示例**

基于对称加密方式，加密指定文件：

```
[root@linuxcool ~]# gpg -c File
```

基于对称加密方式，解密指定文件：

```
[root@linuxcool ~]# gpg -o mydecrypt -d File.gpg
```

生成密钥对文件：

```
[root@linuxcool ~]# gpg --gen-key
```

查看已有密钥列表：

```
[root@linuxcool ~]# gpg --list-keys
```
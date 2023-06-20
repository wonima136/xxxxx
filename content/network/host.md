---



title: "host命令 – 解析域名结果"
description: "host命令 – 解析域名结果"
keywords: "host命令 – 解析域名结果"
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

host命令的功能是用于解析域名结果，是一个查找DNS解析结果的简单程序。将域名转换成IP地址形式，帮助运维人员找到指定域名所对应的IP地址。

**语法格式：** host [参数] 域名

**常用参数：**

-4基于IPv4网络协议-6基于IPv6网络协议-a显示全部信息 -c设置查询类型-C显示指定主机完整的SOA记录-d显示调试跟踪信息-I显示区域信息-r不使用递归的查询方式解析域名-R限制UDP查询的重试次数-s若服务器不响应，则不发送查询-t设置查询的域名信息类型-v显示执行过程详细信息-V显示版本信息-W设置查询域名的最长等待时间

**参考示例**

(查询指定域名所对应的IP地址信息（默认模式) ：

```
[root@linuxcool ~]# host www.linuxcool.com
www.linuxcool.com has address 203.107.45.167
```

(查询指定域名所对应的IP地址信息（详细模式) ：

```
[root@linuxcool ~]# host -v www.linuxcool.com
Trying "www.linuxcool.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 41364
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.linuxcool.com.			IN	A

;; ANSWER SECTION:
www.linuxcool.com.		248	IN	A	203.107.45.167
```

查询指定域名MX邮件类型记录所对应的IP地址信息：

```
[root@linuxcool ~]# host -t MX linuxcool.com
linuxcool.com mail is handled by 20 mail.linuxcool.com.
linuxcool.com mail is handled by 10 mail.linuxcool.com
```
---



title: "dig命令 – 查询域名DNS信息"
description: "dig命令 – 查询域名DNS信息"
keywords: "dig命令 – 查询域名DNS信息"
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

dig命令来自英文词组“domain information groper”的缩写，其功能是用于查询域名DNS信息。dig命令能够便捷地查询到指定域名所对应的DNS服务器信息，具有灵活性好，易用，输出清晰等特点，与nslookup命令很相似。

**语法格式：** dig [参数] 域名或IP地址

**常用参数：**

@设置域名服务器-4基于IPv4网络协议-6基于IPv6网络协议-b设置本机发起请求的IP地址-f 使用批处理模式-h显示帮助信息-k指定TSIG密钥文件-p设置域名服务器所使用端口号-t设置要查询的DNS数据类型-x执行反向域名查询

**参考示例**

查询指定域名所对应的DNS信息：

```
[root@linuxcool ~]# dig www.linuxcool.com
; <<>> DiG 9.11.36-RedHat-9.11.36-5.el8_7.2 <<>> www.linuxcool.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 46189
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.linuxcool.com.		IN	A

;; ANSWER SECTION:
www.linuxcool.com.	600	IN	A	39.98.160.175

;; Query time: 5 msec
;; SERVER: 100.100.2.136#53(100.100.2.136)
;; WHEN: Wed Apr 05 08:18:34 CST 2023
;; MSG SIZE  rcvd: 51
```

(查询指定IP地址所对应的域名信息（反向查询) ：

```
[root@linuxcool ~]# dig -x 39.98.160.175
; <<>> DiG 9.11.36-RedHat-9.11.36-5.el8_7.2 <<>> -x 39.98.160.175
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 10286
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0

;; QUESTION SECTION:
;175.160.98.39.in-addr.arpa.	IN	PTR

;; AUTHORITY SECTION:
98.39.in-addr.arpa.	300	IN	SOA	rdns1.alidns.com. dnsmgr.alibaba-inc.com. 2015011330 1800 600 1814400 300

;; Query time: 28 msec
;; SERVER: 100.100.2.136#53(100.100.2.136)
;; WHEN: Wed Apr 05 08:19:33 CST 2023
;; MSG SIZE  rcvd: 115
```

(指定要查询的数据类型（邮件) ，查询指定域名所对应的DNS信息：

```
[root@linuxcool ~]# dig -t MX linuxcool.com
; <<>> DiG 9.11.36-RedHat-9.11.36-5.el8_7.2 <<>> -t MX linuxcool.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 63164
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;linuxcool.com.			IN	MX

;; ANSWER SECTION:
linuxcool.com.		600	IN	MX	10 mx.zoho.com.cn.
linuxcool.com.		600	IN	MX	20 mx2.zoho.com.cn.

;; Query time: 6 msec
;; SERVER: 100.100.2.136#53(100.100.2.136)
;; WHEN: Wed Apr 05 08:22:39 CST 2023
;; MSG SIZE  rcvd: 82
```
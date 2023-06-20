---



title: "curl命令 – 文件传输工具"
description: "curl命令 – 文件传输工具"
keywords: "curl命令 – 文件传输工具"
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

curl命令来自英文词组“CommandLine URL”的缩写，其功能是用于在Shell终端界面中基于URL规则进行的文件传输工作。curl是一款综合的传输工具，可以上传也可以下载，支持HTTP、HTTPS、FTP等三十余种常见协议。

**语法格式：** curl [参数] 网址URL [文件名]

**常用参数：**

-a追加写入到指定文件-A设置用户代理标头信息-b设置用户Cookie信息-B使用ASCII文本传输-C支持断点续传-d以HTTP POST方式传送数据-D把头部信息写入到指定文件-e设置来源网址URL-f连接失败时不显示报错-o设置新的本地文件名-O保留远程文件的原始名-G以GET方式传送数据-H自定义头信息-I只显示请求头信息-K读取指定配置文件-N禁用缓冲输出-s静默执行模式-T上传指定文件-u设置服务器的用户名和密码-U设置代理的用户名和密码--basic使用HTTP基本验证--cacert设置CA证书文件--capath设置CA证书目录--cert-type设置客户端证书文件和密码--ciphers设置SSL证书密码--connect-timeout设置最大请求时间--create-dirs创建本地目录的层次结构--digest使用数字身份验证--ftp-create-dirs自动创建远程目录--ftp-pasv使用PASV/EPSV代替端口--ftp-ssl使用SSL/TLS来进行数据传输--ftp-ssl-reqd使用SSL/TLS来进行数据传输--help显示帮助信息--key设置私钥文件名--key-type设置私钥文件类型--limit-rate设置传输速度--max-filesize设置最大下载的文件总量--max-redirs设置最大重定向次数--pass设置密钥密码--progress-bar显示进度条--verbose显示执行过程详细信息--version显示版本信息

**参考示例**

获取指定网站的网页源码：

```
[root@linuxcool ~]# curl https://www.linuxcool.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<meta charset="UTF-8" />
………………省略部分输出信息………………
```

下载指定网站中的文件：

```
[root@linuxcool ~]# curl -O https://www.linuxprobe.com/docs/LinuxProbe.pdf
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16.8M  100 16.8M    0     0  22.5M      0 --:--:-- --:--:-- --:--:-- 22.5M
```

打印指定网站的HTTP响应头信息：

```
[root@linuxcool ~]# curl -I https://www.linuxcool.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
HTTP/2 200
server: Tengine
content-type: text/html; charset=UTF-8
vary: Accept-Encoding
date: Wed, 04 May 2023 06:44:26 GMT
vary: Accept-Encoding
x-powered-by: PHP/7.4.11
vary: Accept-Encoding, Cookie
cache-control: max-age=3, must-revalidate
ali-swift-global-savetime: 1651646666
via: cache3.l2cn1802[235,234,200-0,M], cache17.l2cn1802[236,0], kunlun10.cn257[403,414,200-0,M], kunlun
2.cn257[417,0]
x-cache: MISS TCP_REFRESH_MISS dirn:0:416601537
x-swift-savetime: Wed, 04 May 2023 06:44:26 GMT
x-swift-cachetime: 3
timing-allow-origin: *
eagleid: ab08f29616516466664417014e
```

(下载指定文件服务器中的文件（用户名:密码) ：

```
[root@linuxprobe ~]# curl -u linuxprobe:redhat ftp://www.linuxcool.com/LinuxProbe.pdf
```
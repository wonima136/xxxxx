---



title: "timedatectl命令 – 设置系统时间与日期"
description: "timedatectl命令 – 设置系统时间与日期"
keywords: "timedatectl命令 – 设置系统时间与日期"
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

timedatectl命令来自英文词组“time date control”的缩写，其功能是用于设置系统时间与日期。与date命令设置日期时间不同，timedatectl命令设置过的日期时间信息将被写入到系统配置文件中，从而立即且长期有效，不会随系统重启而失效，同时还能够查看系统时间与日期，一站式搞定系统时间~

**语法格式：** timedatectl [参数] [对象]

**常用参数：**

list-timezones显示已知时区信息set-local-rtc 0设置硬件始终为UTC时间set-local-rtc 1设置硬件始终为本地时间set-ntp (true/false)开启或关闭NTPset-time TIME设置系统时间set-timezone ZONE设置系统时区status显示当前时间状态

**参考示例**

查看当前系统中的时区、日期、时间等信息：

```
[root@linuxcool ~]# timedatectl status
               Local time: Fri 2023-10-21 16:23:57 CST
           Universal time: Fri 2023-10-21 08:23:57 UTC
                 RTC time: Fri 2023-10-21 16:23:55
                Time zone: Asia/Shanghai (CST, +0800)
System clock synchronized: no
              NTP service: active
          RTC in local TZ: no
```

关闭NTP时间同步服务器功能：

```
[root@linuxcool ~]# timedatectl set-ntp false
```

设置系统日期：

```
[root@linuxcool ~]# timedatectl set-time 2024-05-18
```

设置系统时间：

```
[root@linuxcool ~]# timedatectl set-time 20:18
```

查看可选时区：

```
[root@linuxcool ~]# timedatectl list-timezones
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
Africa/Bamako
Africa/Bangui
Africa/Banjul
………………省略部分输出信息………………
```

设置系统时区：

```
[root@linuxcool ~]# timedatectl set-timezone "Asia/Shanghai"
```
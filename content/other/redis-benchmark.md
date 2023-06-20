---



title: "redis-benchmark命令 – Redis基准性能测试"
description: "redis-benchmark命令 – Redis基准性能测试"
keywords: "redis-benchmark命令 – Redis基准性能测试"
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

redis-benchmark命令可以为Redis做基准性能测试，它提供了很多选项帮助开 发和运维人员测试Redis的相关性能。

**语法格式：** redis-benchmark [参数]

**常用参数：**

-h服务端IP-p服务器端口-aredis密码-c客户端连接数量-n请求总数

**参考实例**

使用默认配置对127.0.0.1:6379运行基准测试：

```
[root@linuxcool ~]# redis-benchmark
```

对192.168.1.1使用20个并行客户端，总共10万个请求：

```
[root@linuxcool ~]# redis-benchmark -h 192.168.1.1 -p 6379 -n 100000 -c 20
```

仅使用SET测试，用大约100万个键填充127.0.0.1:6379：

```
[root@linuxcool ~]# redis-benchmark -t set -n 1000000 -r 100000000
```

基准127.0.0.1:6379，用于生成CSV输出的几个命令：

```
[root@linuxcool ~]# redis-benchmark -t ping,set,get -n 100000 --csv
```

对特定命令行进行基准测试：

```
[root@linuxcool ~]# redis-benchmark -r 10000 -n 10000 eval 'return redis.call("ping")' 0
```

用10000个随机元素填充列表：

```
[root@linuxcool ~]# redis-benchmark -r 10000 -n 10000 lpush mylist rand_int
```
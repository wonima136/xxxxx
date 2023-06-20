---



title: "Python本地服务器执行Linux的shell命令-苏州安嘉"
description: "Python本地服务器执行Linux的shell命令-苏州安嘉"
keywords: "Python本地服务器执行Linux的shell命令-苏州安嘉"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1684066777440_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1、Python本地服务器执行Linux的shell命令

(1) os.system

使用os.system只是在一个子终端运行系统命令，而不能获取命令执行后的返回信息。如下红旗linux官网，

![linux传输文件命令远程_linux ssh远程删除命令_linux 远程登陆命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684066777440_0.jpg)

```
import os
result = os.system('cat /etc/passwd')
print(result)
```

(2) os.popen

![linux 远程登陆命令_linux传输文件命令远程_linux ssh远程删除命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1684066777440_1.jpg)

如要控制台输出的内容 **linux 远程登陆命令**，则可以使用os.popen的方式 **linux 远程登陆命令**，popen返回的是一个file对象，与open打开文件操作类似。如下，

```
import os
# popen返回文件对象，和open操作差不多
f = os.popen("cat /etc/passwd", "r")
d = f.read()  # 读文件
print(d)
print(type(d))
f.close()
```

(3) 使用模块subprocess

```
import subprocess
def localExecute(command):
    p = subprocess.Popen([command],
                         stdin=subprocess.PIPE,
                         stdout=subprocess.PIPE,
                         stderr=subprocess.PIPE, shell=True)
    out = p.stdout.read().decode('utf-8')
    print(out)
if __name__ == '__main__':
    localExecute("cat /etc/passwd")
```

2、Python远程服务器执行Linux的shell命令

paramiko是用Python语言写的一个模块，遵守SSH2合同，支持以加密和认证的方法linux使用教程，进行远程服务器的联接。paramiko支持Linux,Solaris,BSD,MacOSX,Windows等平台通过SSH从一个平台联接到另外一个平台。可以便捷的进行ssh联接和sftp合同进行sftp文件传输。

![linux 远程登陆命令_linux ssh远程删除命令_linux传输文件命令远程](https://www.linuxcool.com/wp-content/uploads/2023/05/1684066777440_2.jpg)

(1) 安装paramiko模块

```
pip3 install paramiko
```

(2) paramiko使用代码

```
import paramiko
# 远程登陆Linux服务器，并在服务器上执行命令
def remoteSsh(sys_ip, username, command, password=''):
    try:
        # 创建ssh客户端
        client = paramiko.SSHClient()
        # 第一次ssh远程时会提示输入yes或者no
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        if len(password) == 0:
            key_file = paramiko.RSAKey.from_private_key_file("/root/.ssh/id_rsa")#免密登陆
            client.connect(sys_ip, 22, username=username, pkey=key_file, timeout=20)
        else:
            client.connect(sys_ip, 22, username=username, password=password, timeout=20)#密码登陆
        print(f"开始在远程服务器上执行指令:{command}")
        # 执行查询命令
        stdin, stdout, stderr = client.exec_command(f"""{command}""", get_pty=True)
        # 获取查询命令执c行结果,返回的数据是一个list
        result = stdout.read().decode('utf-8')
        print(f"{sys_ip}执行结果:", result)
        error = stderr.read().decode('utf-8')
        if error != "":
            print(f"{sys_ip}错误信息:", error)
        else:
            pass
    except Exception as e:
        print(e)
    finally:
        client.close()
# 多台服务器批量执行同一命令
def batchExecuteRemoteCommand(host_list, command):
    import threading
    thread_list = []
    for ip, username, password in host_list:
        thread = threading.Thread(target = remoteSsh, args = (ip,username,password,command))
        thread_list.append(thread)#将生成的线程添加到列表里
    for t in thread_list:
        t.start() #开始执行线程
    for t in thread_list:
        t.join() #挂起线程，到所有线程结束
if __name__ == '__main__':
    batchExecuteRemoteCommand(('192.168.31.21','root','Aa123456'),'cat /etc/passwd')
```
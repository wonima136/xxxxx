---



title: "查看文件夹大小命令：查看当前目录下各个文件及目录占用空间大小"
description: "查看文件夹大小命令：查看当前目录下各个文件及目录占用空间大小"
keywords: "查看文件夹大小命令：查看当前目录下各个文件及目录占用空间大小"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/03/1679205644364_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

linux查看文件夹大小命令：1、查看当前目录下各个文件及目录占用空间大小linux培训机构，命令为【du-sh*】；2、查看某个目录文件和文件夹大小 **linux查找文件夹命令 linux查找文件夹命令** linux学习视频，命令为【du-h--max-depth=1/data/home/lisen/】。

![linux more命令查找_linux find命令查找字符串_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679205644364_0.jpg)

linux查看文件夹大小命令：du命令

![linux find命令查找字符串_linux more命令查找_linux查找文件夹命令](https://www.linuxcool.com/wp-content/uploads/2023/03/1679205644364_1.jpg)

1、查看当前目录下各个文件及目录占用空间大小

```
du -sh *
```

![linux查找文件夹命令_linux find命令查找字符串_linux more命令查找](https://www.linuxcool.com/wp-content/uploads/2023/03/1679205644364_2.jpg)

2、查看某个目录文件和文件夹大小

```
du -h --max-depth=1 /data/home/lisen/   # depth表示只显示一层文件夹大小，即深度为1
```

![9711aeee8f7daa24ab1568d00e931d4.png](https://www.linuxcool.com/wp-content/uploads/2023/03/1679205644364_4.png)

3、查看某个目录的总大小

```
du -sh ./   # 查看当前目录的总大小
```

4、查看某个目录下的文件大小并排序

```
du -sh *|sort -n   # 这个不能正常排序，需去掉-h
du -s *|sort -n
du -s *|sort -nr   # 反向排序
du -s *|sort -n |head -5 # 前五个最大的
du -s *|sort -n |tail -5 # 后五个最小的
```

相关学习推荐：linux视频教程

以上就是linux查看文件夹大小命令是哪些的详尽内容，更多请关注php英文网其它相关文章！
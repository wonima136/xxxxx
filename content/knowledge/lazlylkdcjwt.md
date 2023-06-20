---



title: "Librosa-4安装Librosa依赖库的常见问题及解决方案"
description: "Librosa-4安装Librosa依赖库的常见问题及解决方案"
keywords: "Librosa-4安装Librosa依赖库的常见问题及解决方案"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_0.png"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

1简介

FCN-4是一个应用于音频手动标明的全前馈神经网路。使用该网路完成音频标明任务时，首先须要使用python的音频处理工具包Librosa提取音频的时频特点，针对mp3格式的音频文件，Librosa读取音频文件的工作依赖音频处理前端ffmpeg完成，因而要求使用该网路进行mp3音频手动标明任务的环境具备Librosa依赖库和ffmpeg。

以下对Librosa库和FFmpeg工具在安装配置过程中的常见问题进行说明。

2安装Librosa依赖库的常见问题2.1Librosa库的安装

![linux解压压缩tar包命令_linux压缩命令zip命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_0.png)

```
    pip install librosa
```

安装结果中出现红框中的提示内容，说明librosa依赖库安装成功。

2.2调用librosa包的过程中可能出现的错误

安装好librosa依赖库后，仍可能存在环境中缺乏其他相关依赖的问题linux入门，以下给出可能存在的问题及其解决方案

2.2.1没有bz2模块

报错“Nomodualnamed‘_bz2’”。如下所示

![linux下载压缩包命令_linux解压压缩tar包命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_1.png)

出现这个错误的缘由是因为运行程序所使用的python版本中没有安装_bz2库所致。

一般是因为运行程序使用的是python3.7，然而bz2这个库是安装到了python3.6的路径下，所以找不到。

将python3.6上面的bz2库拷贝到python3.7下边。

操作步骤：

1.找到python3.6路径下的_bz2库文件，即“_bz2.cpython-36m-x86_64-linux-gnu.so”

```
ll /usr/lib/python3.6/lib-dynload/
```

2.切换到python3.7对应路径，将该文件复制到该目录下

```
cd /usr/local/python3.7.5/lib/python3.7/lib-dynload/
cp /usr/lib/python3.6/lib-dynload/_bz2.cpython-36m-x86_64-linux-gnu.so ./
```

3.更改文件名称，将”-36m”更改为”-37m”

```
mv _bz2.cpython-36m-x86_64-linux-gnu.so _bz2.cpython-37m-x86_64-linux-gnu.so
(chmod +x _bz2.cpython-37m-x86_64-linux-gnu.so    # （可选) 增加该文件的可执行权限
```

如今运行程序所使用的是python3.7的目录下早已有了bz库文件

说明：

该问题有多种解决方案，只要保证所使用的python版本相关路径下存在_bz2库即可。比如可以从网上下载“_bz2.cpython-37m-x86_64-linux-gnu.so”文件，或从任意其他存在该文件的环境中复制到目标环境的相关路径下即可。

2.2.2没有_lzma模块

报错“Nomodulenamed‘_lzma’”。如下所示

![linux压缩命令zip命令_linux解压压缩tar包命令_linux下载压缩包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_2.png)

请参考上一步骤“2.2.1没有bz2模块”解决,保证所使用的python版本相关路径下存在lzma库即可。

2.2.3找不到sndfile库

命令行执行以下命令安装sndfile库

```
apt-get install libsndfile1
```

3安装FFmpeg工具的常见问题

Librosa依赖库安装配置完成后，在读取音频文件的时侯可能会触发“audioread.exceptions.NoBackendError”，如下所示。

audioread.exceptions.NoBackendError

这个问题主要是因为“librosa”音频处理库难以直接读取“mp3”格式的音频数据，须要调用“ffmpeg”后端读取音频文件所致。

具体缘由可分为以下两点

接出来将给出ffmpeg工具的完整安装配置过程，可依据环境中已有的配置情况选择性的完成以下步骤。

3.1安装ffmpeg

3.1.1安装wget(可选)

(ubuntu环境下须要使用wget工具下载ffmpeg的源码安装包，因此首先须要下载安装wget工具（注：也可以在其他环境中下载ffmpeg的源码安装包，并将其上传到目标环境中即可) 。

```
apt-get install -y wget
```

3.1.2安装ffmpeg

1.下载并解压安装包

命令行执行以下命令 **linux下载压缩包命令**，下载ffmpeg的源码安装包

```
cd /usr/local/
wget https://johnvansickle.com/ffmpeg/release-source/ffmpeg-4.1.tar.xz
```

可能存在难以通过认证检测的情况下载失败，此时按照提示，命令行中加入取消认证检测的选项即可，即执行以下命令

```
wget --no-check-certificate https://johnvansickle.com/ffmpeg/release-source/ffmpeg-4.1.tar.xz
```

(下载完成后，当前目录（/usr/local/) 下应当存在“ffmpeg-4.1.tar.xz”这个压缩包

执行以下命令解压安装包

```
tar -xvf ffmpeg-4.1.tar.xz
```

(解压完成后，当前目录（/usr/local/) 下将存在“ffmpeg-4.1”文件夹

2.执行安装配置文件。

(在当前路径（/usr/local/) 下创建“ffmpeg”文件夹，作为ffmpeg工具的安装路径。

```
mkdir ffmpeg
```

步入源码包，“config”程序，完成ffmpeg的安装配置。

```
cd ffmpeg-4.1
./configure --enable-shared --prefix=/usr/local/ffmpeg  # --prefix选项指出ffmpeg的安装路径
```

出现以下结果说明配置程序早已执行成功。

![linux下载压缩包命令_linux压缩命令zip命令_linux解压压缩tar包命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_3.png)

![linux解压压缩tar包命令_linux下载压缩包命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_4.png)

注：执行config程序时，可能会报“nasm/yasmnotfounortooold.Use…”的错，此时须要先安装yams，之后再重新执行配置程序

安装yasm的命令：

```
apt-get install yasm
```

3.执行编译&安装指令

执行以下命令，完成ffmpeg程序的编译和安装

![linux解压压缩tar包命令_linux下载压缩包命令_linux压缩命令zip命令](https://www.linuxcool.com/wp-content/uploads/2023/06/1685736958329_5.png)

安装完成后，在配置手指出的安装路径(–prefix=/usr/local/ffmpeg)下存在以下内容，则说明ffmpeg安装成功。

3.2配置环境变量

1.更改环境变量

将ffmpeg的绝对路径添加到PATH环境变量中，以让系统能找到ffmpeg的安装路径。

```
vim ~/.bashrc  # 打开系统环境变量配置文件
```

在文件中添以下内容。

```
export PATH="/usr/local/ffmpeg/bin:${PATH}"
export LD_LIBRARY_PATH="/usr/local/ffmpeg/lib:{LD_LIBRARY_PATH}"
```

2.未能打开共享库文件

命令行使用“ffmpeg-h”或“/usr/local/ffmpeg/binffmpeg-h”命令检查ffmpeg安装情况时，出现以下内容。

“errorwhileloadingsharedlibraries:libavdevice.so.58:cannotopensharedobjectfileordirectory”

这是因为系统找不到ffmpeg的共享库所致。

在“/etc/ld.so.conf.d/”路径下创建文件“ffmpeg.conf”文件adobe air linux，在该文件中写入“/usr/local/ffmpeg/lib”

```
vim /etc/ld.so.conf.d/ffmpeg.conf   # 编辑文件，添加内容“/usr/local/ffmpeg/lib”后保存退出
cat /etc/ld.so.conf.d/ffmpeg.conf   # 查看ffmpeg.conf中的内容
ldonfig        # 执行ldconfig命令，使/etc/ld.so.conf.d/目录下新加入的配置信息生效
```

3.测试是否配置成功

命令行输入“whichffmpeg”或“ffmpeg-h”，出现以下内容，说明ffmpeg早已完全安装配置成功。

3.3更改库文件中的前端调用指令

若完成以上配置后，仍报错“audioread.exceptions.NoBackendError”，考虑以下解决方法。

找到“ffdec.py”所在的位置，打开并编辑该文件，对第33行的内容做如下更改。

将COMMAND=(‘ffmpeg’,‘avconv’)改为COMMAND=(’/usr/local/ffmpeg/bin/ffmpeg’,‘avconv’)

附言

说明：

依据不同环境的已有配置不同，可能遇见的问题会有所不同。即，以上问题可能不会都碰到 **linux下载压缩包命令**，也可能会碰到以上没有列举的问题，若碰到以上未提到的问题，可依照报错信息在搜索引擎中查找解决方案。
---



title: "Python官方第三方库仓库conda镜像源源"
description: "Python官方第三方库仓库conda镜像源源"
keywords: "Python官方第三方库仓库conda镜像源源"
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

conda命令

(conda是一种用于管理与布署应用程序、环境和包的工具。conda命令可用于对虚拟环境的创建、激活、退出、删除和配置。PyPI（PythonPackageIndex) 是Python官方的第三方库库房。

使用conda创建虚拟环境：

```python
conda create -n sot python=3.8  # 创建名为sot的虚拟环境，python解释器版本为3.8
conda create -n sot python=3.8 -y  # -y表示遵循默认设置，后面无需再次确认
```

在创建虚拟环境时，如无必要，尽量不要选择最新的python版本，以确保后续配置或安装包不会出现python版本不支持的情况。

使用conda激活虚拟环境：

```python
conda activate sot  # 激活名为sot的虚拟环境
```

Linux系统中 **linux source命令失效**，假如没有配置好./bashrc，会造成conda命令失效，可使用以下临时指令激活：

```python
source ~/.bashrc
source activate sot
```

使用conda退出虚拟环境：

```python
conda deactivate  # 退出时无需增加扩展名，默认退出当前环境
```

使用conda删掉虚拟环境：

```python
conda remove -n sot --all  # --all参数必须加上
conda remove -n sot --all -y
```

(使用conda配置虚拟环境（Anaconda镜像源) ：

```python
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/menpo/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
conda config --set show_channel_urls yes  # 显示下载的通道源
```

在使用conda命令下载安装包时，会默认使用conda源下载。并且，因为不可描述的缘由linux 下载，可能会造成安装包的下载速率非常平缓 **linux source命令失效**，甚至出现下载中断的情况。一个比较好的解决方案就是加载国外的镜像源，下边列出了国外几个较为常用的PyPI镜像源：

```python
https://mirrors.aliyun.com/pypi/simple/  # 阿里云
https://pypi.douban.com/simple/  # 豆瓣
https://pypi.tuna.tsinghua.edu.cn/simple/  # 清华大学
https://pypi.mirrors.ustc.edu.cn/simple/  # 中国科学技术大学
```

在Linux系统中，可以通过以下命令进行配置文件的更改，将channels添加进去：

```python
sudo gedit ~/.condarc
```

查看镜像源：

```python
conda config --show  # 显示当前配置信息
conda config --show-sources  # 查看当前使用源，即.condarc文件中的内容
conda config --get channels  # 获取当前通道信息
```

删掉镜像源：

```python
conda config --remove channels https://pypi.mirrors.ustc.edu.cn/simple/  # 删除当前镜像源
conda config --remove-key channels  # 删除所有镜像源
```

常用的conda命令汇总：

```python
conda -h   conda --help  # 帮助命令
conda -V   conda --version  # 查看当前的conda版本
conda list  # 查看当前已安装的包
conda list $pkg_name  # 查看某个已安装包的信息
conda env list   conda info -e   conda info --env  # 显示当前已创建的虚拟环境
conda install $pkg_name  # 安装包
conda uninstall $pkg_name  # 卸载包
conda install -n $env_name $pkg_name  # 将包安装到某个虚拟环境中
conda update conda  # 将conda更新到最新版本
conda update python  # 将python更新到最新版本
conda update --all  # 更新所有的安装包
conda remove --name $pkg_name  # 删除当前虚拟环境中的某个包
conda remove --name $env_name $pkg_name  # 删除某个虚拟环境中的某个包
conda env export -n $env_name -f $env_name.yml  # 将配置导出为yml文件
conda env upload -f $env_name.yml  # 上传yml文件
conda create -n $env_name --clone $cp_env_name  # 复制当前虚拟环境
conda search $pkg_name  # 搜索某个包的信息
conda clean -p  # 清理没有使用过的包
conda list -e > requirments.txt  # 将当前虚拟环境中的所有包进行导出
```

常见问题汇总：

使用pip命令安装cuda版本的PyTorch：

```python
pip --default-timeout=1000 install torch==1.9.0+cu111 torchvision==0.10.0+cu111 torchaudio==0.9.0+cu111 -f https://download.pytorch.org/whl/torch_stable.html
pip install torch==1.9.0+cu111 torchvision==0.10.0+cu111 torchaudio==0.9.0+cu111 -f https://download.pytorch.org/whl/torch_stable.html
conda install pytorch==1.9.0 torchvision==0.10.0 torchaudio==0.9.0 cudatoolkit=11.1 -c pytorch
pip install torch==1.10.1+cu102 torchvision==0.11.2+cu102 torchaudio==0.10.1+cu102 -f https://download.pytorch.org/whl/torch_stable.html
```

借助conda升级Anaconda以及Anaconda的各类包：

```python
# 以管理员身份启动Anaconda Prompt
(conda update conda  # 升级conda（升级Anaconda前需要先升级conda) 
conda update anaconda  # 升级Anaconda
conda update anaconda-navigator  # 升级最新版本的anaconda-navigator
conda update spyder  # 升级spyder
conda update --all  # 更新所有包
conda install $package  # 安装某个包
conda update $package  # 更新某个包
```
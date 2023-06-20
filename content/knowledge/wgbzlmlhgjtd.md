---



title: "五个标准Linux命令行工具替代品的替代工具介绍"
description: "五个标准Linux命令行工具替代品的替代工具介绍"
keywords: "五个标准Linux命令行工具替代品的替代工具介绍"
date: "2023-06-18T16:22:52+08:00"
defaultContentLanguage: "zh"
author: "Linux"
twitterSite: ""
thumbnail: "https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_0.jpg"
categories:
  - Linux
type: article
githubURL: "https://www.github.com/"
ShowToc: true
TocOpen: true



---

原文链接：

![linux grep 命令_linux命令grep用法_linux grep命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_0.jpg)

在日常使用Linux/Unix系统时，我们会使用许多命令行工具来完成我们的工作，并理解和管理我们的系统，像du用于监视c盘借助率，top用于显示系统资源。其中一些工具早已存在很长时间了。诸如，top于1984年首次发布，而du的首次发布要溯源到1971年。

多年来，这种工具早已被现代化并移植到不同的系统，并且，一般，它们依然延续着它们最初的思想和体验。

这种都是挺好的工具，对于许多系统管理员的工作流来说都是必不可少的。但是，近来几年，开源社区早已开发出了可以带来额外益处的代替工具。似乎有些华而不实，但另外一些则极大地提升了可用性，使它们成为现代化系统上的最佳选择。这包括以下五个标准Linux命令行工具的取代品。

1作为du代替品的ncdu

(NCursesc盘借助率（ncdu) 工具提供了与du类似的结果，而且在一个基于curses的交互式界面中，它重点关注这些占用c盘空间比较多的目录。

ncdu会花一些时间剖析c盘，之后按照你最常用的目录或文件显示结果，如下所示：

ncdu1.14.2~Usethearrowkeystonavigate,press?forhelp—/home/rgerardi————————————————————96.7GiB[##########]/libvirt33.9GiB[###]/.crc7.0GiB[]/Projects.4.7GiB[]/Downloads.3.9GiB[]/.local2.5GiB[]/.minishift2.4GiB[]/.vagrant.d.1.9GiB[]/.config.1.8GiB[]/.cache1.7GiB[]/Videos1.1GiB[]/go692.6MiB[]/Documents.591.5MiB[]/tmp139.2MiB[]/.var104.4MiB[]/.oh-my-zsh82.0MiB[]/s55.8MiB[]/.mozilla54.6MiB[]/.kube41.8MiB[]/.vim31.5MiB[]/.ansible31.3MiB[]/.gem26.5MiB[]/.VIM_UNDO_FILES15.3MiB[]/Personal2.6MiB[].ansible_module_generated1.4MiB[]/backgrounds944.0KiB[]/Pictures644.0KiB[].zsh_history536.0KiB[]/.ansible_asyncTotaldiskusage:159.4GiBApparentsize:280.8GiBItems:561540

![linux命令grep用法_linux grep命令_linux grep 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_1.png)

使用方向键导航到每位条目。假如你在一个目录条目上按下Enter键，ncdu将显示该目录的内容：

—/home/rgerardi/libvirt—————————————————-/..91.3GiB[##########]/images5.3GiB[]/media

你可以使用它下钻目录并查找什么文件占用的c盘空间最多 **linux命令grep用法**，使用左箭头键可以返回上一级目录。在默认情况下，可以按下d键使用ncdu删掉文件，在删掉之前，它会跟你确认删掉恳求。假如你想禁用此行为以避免发生意外，请使用-r选项进行只读访问：ncdu-r。

ncdu可用于许多平台和Linux发行版。诸如，你可以使用dnf直接从官方储存库把它安装到Fedora上：

$sudodnfinstallncdu

要了解关于这个工具的更多信息，请查看ncdu页面。

2作为top取代品的htop

htop是一个类似于top的交互式流程查看器，但它提供了更好的开箱即用的用户体验。默认情况下，htop会用令人愉快的彩色显示与top相同的指标。

默认情况下，htop是这样的：

![linux grep命令_linux命令grep用法_linux grep 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_2.jpg)

![linux grep命令_linux grep 命令_linux命令grep用法](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_3.png)

相比之下，top默认是这样的：

据悉，htop在底部提供了系统概览信息，在顶部提供了一个命令栏，可以使用功能键来触发命令，并且，你还可以按F2步入设置界面对它进行订制。你可以修改其颜色、添加或删掉指标，或修改概览栏的显示选项。

尽管对于最新版本的top，你也可以通过配置实现类似的结果，但htop提供了更合理的默认配置，这促使它成为一个漂亮且便于使用的流程查看器。

要了解关于这个项目的更多信息，请查看htop首页。

3作为man取代品的tldr

tldr命令行工具显示简化的命令用法信息，主要包括示例。它是作为社区项目tldrpages的顾客端。

这个工具不能取代man。man页面依然是许多工具规范而完整的信息源。但是，在个别情况下，man提供的信息太多了。有时侯，你不须要一个命令的所有信息；你只是试着记住基本的选项。诸如，curl命令的man页面几乎有3000行。相反linux操作系统论文，curl的tldr页面只有40行，如下所示：

![linux命令grep用法_linux grep命令_linux grep 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_4.jpg)

$tldrcurl#curlTransfersdatafromortoaserver.Supportsmostprotocols,includingHTTP,FTP,andPOP3.Moreinformation:.-DownloadthecontentsofanURLtoafile:curl-ofilename-Downloadafile,savingtheoutputunderthefilenameindicatedbytheURL:curl-O-Downloadafile,following[L]ocationredirects,andautomatically[C]ontinuing(resuming)apreviousfiletransfer:curl-O-L-C--Sendform-encodeddata(POSTrequestoftype`application/x-www-form-urlencoded`):curl-d’name=bob’-Sendarequestwithanextraheader,usingacustomHTTPmethod:curl-H’X-My-Header:123′-XPUT-SenddatainJSONformat,specifyingtheappropriatecontent-typeheader:curl-d'{“name”:”bob”}’-H’Content-Type:application/json’…TRUNCATEDOUTPUT

TLDR是网路俚语“toolong;didn’tread”的简写，指对一篇很长的文章进行总结。这个名称很适宜这个工具，由于man页面其实有用，但有时太长了。

在Fedora中，tldr顾客端是用Python编撰的。你可以使用dnf安装它。要了解其他顾客端选项，请参阅tldrpages项目页面。

通常来说，tldr工具须要访问互联网以查阅tldrpages。Fedora中的Python顾客端容许你下载并缓存这种页面以供脱机访问。

要了解有关tldr的更多信息，可以使用tldrtldr。

4作为sed/grep取代品的jq

jq是一个命令行JSON处理器，类似于sed或grep，但专门设计用于处理JSON数据。假如你是在日常任务中会用到JSON的开发人员或系统管理员，这么这是你工具箱中必不可少的工具。

与grep和sed等通用文本处理工具相比，jq的主要优点是它理解JSON的数据结构，容许使用单个表达式创建复杂的查询。

举例来说，假定你企图在这个JSON文件中查找容器的名称：

![linux grep命令_linux命令grep用法_linux grep 命令](https://www.linuxcool.com/wp-content/uploads/2023/05/1685448792963_5.jpg)

{“apiVersion”:”v1″,”kind”:”Pod”,”metadata”:{“labels”:{“app”:”myapp”},”name”:”myapp”,”namespace”:”project1″},”spec”:{“containers”:[{“command”:[“sleep”,”3000″],”image”:”busybox”,”imagePullPolicy”:”IfNotPresent”,”name”:”busybox”},{“name”:”nginx”,”image”:”nginx”,”resources”:{},”imagePullPolicy”:”IfNotPresent”}],”restartPolicy”:”Never”}}

假如你直接使用grep查找name，则写法如下：

$grepnamek8s-pod.json”name”:”myapp”,”namespace”:”project1″”name”:”busybox””name”:”nginx”,

grep返回包含词组name的所有行。你可以向grep添加更多选项来限制它，利用一些正则表达式操作来找到容器的名称。假如是使用jq获得你想要的结果，则可以使用一个表达式来模拟向上导航数据结构，如下所示：

$jq’.spec.containers[].name’k8s-pod.json”busybox””nginx”

这个命令提供这两个容器的名称。假如你只是在查找第二个容器的名称，则可以在表达式中添加字段元素索引：

$jq’.spec.containers[1].name’k8s-pod.json”nginx”

由于jq晓得数据结构，所以虽然文件格式稍有变化，它也能提供相同的结果。而只要格式稍有变化，grep和sed就可能提供不同的结果。

jq有许多特点，要介绍所有那些特点的话linux命令大全，须要另写一篇文章。要了解更多信息，请参阅jq项目页、man页面或tldrjq。

5作为find取代品的fd

fd是find命令的一个简单而快速的取代品。它的目的不是替代find提供的全部功能；相反，它提供了一些合理的默认值，在个别情况下十分有用。

比如，在包含Git储存库的目录中搜索源代码文件时，fd会手动排除隐藏的文件和目录，包括..git目录，并忽视.gitignore文件中的模式。通常来说，它的搜索速率更快 **linux命令grep用法**，但是第一次搜索时提供了更多相关的结果。

(默认情况下，fd在当前目录中执行不分辨大小写的模式搜索，输出是彩色的。使用find进行相同的搜索须要你提供额外的命令行参数。诸如，在当前目录中搜索所有的markdown文件（.md或.MD) ，find命令如下：

$find.-iname”*.md”

使用fd进行同样的搜索：

$fd.md

在个别情况下，fd须要额外的选项；诸如，假如你想包含隐藏文件和目录，则必须使用选项-H，而这在find中是不须要的。

fd可用于许多Linux发行版。执行以下命令，可以使用标准储存库在Fedora中安装：

$sudodnfinstallfd-find
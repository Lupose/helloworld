# Oceanus 中文原型：Windows 使用说明

原始 README.md 保留。项目位于本文件所在的 oceanus 文件夹。

## 预览

本次本地预览地址：http://127.0.0.1:3001 。这是你的电脑上的服务，不是公开网站。

以后重新启动：在此文件夹打开 PowerShell，输入：

```powershell
pnpm install --frozen-lockfile
pnpm dev --port 3001
```

保持窗口打开，在浏览器访问上述地址。按 Ctrl+C 停止。需要已安装 Node.js 和 pnpm；本机当前环境可以运行。

## 检查

```powershell
pnpm build
pnpm typecheck
```

本轮两项均通过。九项导航及额外搜索页面均返回200；原始README未变。

## 搜索验收

首页或搜索页逐一输入：环境影响评价、Environmental Impact Assessment、EIA、UNCLOS、UNCLOS 第206条、乌拉圭河纸浆厂案、Pulp Mills on the River Uruguay。

前三项各命中4条，UNCLOS命中2条（包含BBNJ正式名称），第206条命中1条入口，两个案件名称各命中1条。每条有匹配说明。未知条号如UNCLOS 第999条应无结果，不冒充已收录。仅人工词表、名称与专题匹配，非全文搜索。

## 文件变更

修改：app下原有页面、布局、样式；components下导航、页面介绍、资料组件；lib/data.ts导航；本说明。
新增：lib/terminology.ts中英文名称及术语；lib/search.ts检索逻辑；app/pathways/page.tsx学习路径；app/library/page.tsx未开放说明。
保留：README.md、原英文正式资料名称及来源、技术依赖与原有组件结构。未删除文件。

## 来源与边界

六条演示资料，四项条约与两项司法资料。中文是辅助名称，阅读提示是平台编辑。官方原文与学术解释不混写。2026-10-30复核官方来源，CBD、UNFCCC、ITLOS可读取，联合国部分页面及ICJ限制自动访问；通过官方搜索资料交叉确认名称和入口。未添加未经核实的判决段落或结论。

未实现：账户、收藏笔记、数据库、全文搜索、规范引注、裁判段落阅读、图谱、学术文献库、AI法律研究。我的研究库只有诚实说明页。没有提交、推送或部署。

## 首次发布准备

新增 /contact 联系页；所有页面共享页脚均可访问。公开邮箱 mailto:descampliu@gmail.com，仅调用本机邮件应用，不直接发送邮件。

本轮生产构建、类型检查、七个双语查询、11个页面HTTP响应及共享联系链接检查通过；浏览器检查联系页桌面与390像素手机布局。未实际发送测试邮件。

远程 origin 为 https://github.com/Lupose/helloworld.git，分支 main。提交前远程只有README，无部署工作流文件，原提交无外部状态记录。不能由此排除仓库外部部署集成。本项目没有添加部署配置。

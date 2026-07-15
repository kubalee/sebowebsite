# SEBO 官方网站 V6 · 2026-07-13

本工程依据《SEBO 官方网站全新总体规划与逐页建设方案 V6.0》建设，定位为“高功率时代的能源基础设施公司”官方中英文网站。

## 网站内容

- 三擎综合解决方案：Grid-to-GPU、Heavy Energy Base、Extreme Energy Base
- 技术与产品：雷鸟超级电池、SST·PowerCore、移动与固定式能源底座、无线电力传输、Industrial Cortex
- 来电啦移动 4S²：10 个服务与生态入口
- 17 项典型应用：与客户案例严格分开，展示约束、参考架构与适用边界
- 新闻、洞察、案例发布门槛、公司与基地、人才招聘、项目咨询
- 中英文真实路由、SEO、站点地图、无障碍与移动端适配

## 数据与发布规则

- 产品参数仅发布已批准规格；设计目标、工程样件、项目实测与已验证数据采用不同状态标识。
- 概念视觉明确标注，不作为客户案例或项目实景。
- 客户案例仅在获得授权，并具备基线、实测结果和 M&V 后发布。
- 下载中心初始为空，不公开未审批资料。
- 咨询表单写入 D1 数据库，并返回唯一受理编号。

## 本地运行

```powershell
pnpm install --offline --frozen-lockfile
pnpm run dev
```

正式构建：

```powershell
pnpm run build
```

## 主要目录

- `app/V6Site.tsx`：页面内容、路由分发与交互
- `app/site-routes.ts`：公开路由清单
- `app/v6.css`：V6 视觉与响应式样式
- `public/assets/v6`：经网站化处理的 V6 视觉素材
- `worker/index.ts`：咨询表单服务
- `drizzle/0000_flat_stick.sql`：D1 数据结构
- `.openai/hosting.json`：Sites 发布与数据库绑定配置

离线交付包中的“打开_SEBO_V6_离线预览.cmd”无需安装开发环境，双击即可浏览。

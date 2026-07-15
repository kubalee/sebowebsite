# SEBO 官方网站 V6（Vue 3）

SEBO 官方网站的 Vue 3、TypeScript、Vite 与 Vue Router 版本，完整保留 208 条中英文公开路由、现有视觉内容、手机/PC 响应式布局、SEO、离线输出和 Cloudflare Worker 表单接口。

## 开发

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm run dev
```

## 验证与构建

```powershell
corepack pnpm test
corepack pnpm run lint
corepack pnpm run build
```

生产构建位于 `dist`：

- `dist/client`：Vue 3 客户端及 208 个静态路由入口
- `dist/sebo_website_vue3`：Cloudflare Worker
- `dist/.openai`：Sites 托管配置与 D1 迁移

## 主要目录

- `src/V6Site.tsx`：页面组合与路由分发
- `src/data`：公开路由与站点内容数据
- `src/composables`：表单和页面元数据逻辑
- `src/router`：Vue Router 配置
- `src/styles`：原 V6 视觉与响应式样式
- `worker`：线索表单与静态资源 Worker
- `tests`：路由、页面、表单、SEO 和静态输出测试

# SEBO Vue 3 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 SEBO V6 完整迁移为 Vue 3，并保留 208 条中英文路由、内容、响应式视觉、SEO、离线交付和 `/api/leads` 表单。

**Architecture:** 使用 Vue 3、TypeScript、Vite 和 Vue Router 构建单页应用，路由与页面数据由类型化模块驱动；Cloudflare Worker 与 D1 表单后端继续独立运行。静态生成脚本为每条公开路由创建目录入口、sitemap 与 robots，同时由自动化测试验证路由和资源完整性。

**Tech Stack:** Vue 3, Vue Router 4, TypeScript 5.9, Vite 8, Vitest, Vue Test Utils, Cloudflare Workers, Drizzle ORM, pnpm.

## Global Constraints

- 保留验收清单中的全部 208 条中英文公开 URL。
- 保留现有图片、文案、信息状态、品牌视觉和手机/PC 响应式布局。
- 保留 `/api/leads` Worker、D1、安全头、校验、蜜罐、限流与唯一编号。
- 运行依赖不得包含 React、React DOM、Next 或 Vinext。
- 主要视口：1440×900、390×844；补充 1920×1080、1024×768、768×1024、375×812。
- 不新增未经批准的产品规格、案例、下载资料或营销声明。

---

### Task 1: Vue 工具链与测试基线

**Files:**
- Modify: `02_完整工程源码/package.json`
- Modify: `02_完整工程源码/pnpm-lock.yaml`
- Modify: `02_完整工程源码/vite.config.ts`
- Create: `02_完整工程源码/index.html`
- Create: `02_完整工程源码/src/main.ts`
- Create: `02_完整工程源码/src/App.vue`
- Create: `02_完整工程源码/vitest.config.ts`
- Create: `02_完整工程源码/tests/framework.test.ts`

**Interfaces:**
- Produces: Vite `dev/build/test` 命令和 Vue 应用挂载点 `#app`。

- [ ] **Step 1: 写失败测试**：读取 `package.json`，断言包含 `vue`、`vue-router`、`@vitejs/plugin-vue`，且不存在 React/Next/Vinext。
- [ ] **Step 2: 运行 `pnpm vitest run tests/framework.test.ts`**，预期因 Vitest/依赖尚未存在而失败。
- [ ] **Step 3: 替换依赖与 Vite 配置**：使用 `vue@3.5`、`vue-router@4.6`、`@vitejs/plugin-vue@6`、`vitest@3`、`@vue/test-utils@2`、`jsdom`；保留 Cloudflare 与 Sites 插件。
- [ ] **Step 4: 创建最小 Vue 入口并重新安装锁文件**。
- [ ] **Step 5: 运行框架测试和生产构建，预期通过**。
- [ ] **Step 6: 提交 `build: migrate toolchain to Vue 3`**。

### Task 2: 公开路由、语言与内容数据

**Files:**
- Create: `02_完整工程源码/src/data/site.ts`
- Create: `02_完整工程源码/src/data/routes.ts`
- Create: `02_完整工程源码/src/lib/locale.ts`
- Create: `02_完整工程源码/src/router/index.ts`
- Create: `02_完整工程源码/tests/routes.test.ts`

**Interfaces:**
- Produces: `publicRoutes: readonly string[]`, `allPublicPaths: readonly string[]`, `resolveLocale(path): Locale`, `localizedPath(path, locale): string`。

- [ ] **Step 1: 写失败测试**：断言 `allPublicPaths` 有 208 个唯一项，包含 `/`、`/en`、代表性产品/应用/联系路径，并验证语言互转。
- [ ] **Step 2: 运行路由测试，预期模块不存在而失败**。
- [ ] **Step 3: 从原 `site-routes.ts` 和 `V6Site.tsx` 提取路由与内容数据，生成中英文路径并添加 catch-all 404**。
- [ ] **Step 4: 运行路由测试，修正数量、重复和路径映射直到通过**。
- [ ] **Step 5: 提交 `feat: add typed bilingual route model`**。

### Task 3: 公共布局与响应式组件

**Files:**
- Create: `02_完整工程源码/src/components/SiteHeader.vue`
- Create: `02_完整工程源码/src/components/SiteFooter.vue`
- Create: `02_完整工程源码/src/components/PageHero.vue`
- Create: `02_完整工程源码/src/components/SectionHead.vue`
- Create: `02_完整工程源码/src/components/ContentCards.vue`
- Create: `02_完整工程源码/src/components/ContactBand.vue`
- Create: `02_完整工程源码/src/styles/main.css`
- Create: `02_完整工程源码/tests/layout.test.ts`

**Interfaces:**
- Consumes: `Locale`, `localizedPath` 和站点数据。
- Produces: 统一页面框架、键盘可用移动导航、卡片与首屏组件。

- [ ] **Step 1: 写失败组件测试**：桌面导航存在；菜单按钮可展开移动导航；语言链接保持当前对应路径；主内容跳转链接存在。
- [ ] **Step 2: 运行组件测试，预期组件不存在而失败**。
- [ ] **Step 3: 实现公共组件并迁移原 CSS 变量、网格、断点、焦点和 reduced-motion 规则**。
- [ ] **Step 4: 运行组件测试，预期通过且无 Vue 警告**。
- [ ] **Step 5: 提交 `feat: add responsive Vue site shell`**。

### Task 4: 页面与详情路由

**Files:**
- Create: `02_完整工程源码/src/pages/HomePage.vue`
- Create: `02_完整工程源码/src/pages/SolutionsPage.vue`
- Create: `02_完整工程源码/src/pages/TechnologyPage.vue`
- Create: `02_完整工程源码/src/pages/LaidianlaPage.vue`
- Create: `02_完整工程源码/src/pages/ApplicationsPage.vue`
- Create: `02_完整工程源码/src/pages/ContentPage.vue`
- Create: `02_完整工程源码/src/pages/AboutPage.vue`
- Create: `02_完整工程源码/src/pages/DetailPage.vue`
- Create: `02_完整工程源码/src/pages/NotFoundPage.vue`
- Create: `02_完整工程源码/tests/pages.test.ts`

**Interfaces:**
- Consumes: 类型化内容数据和 `route.meta.pageType`。
- Produces: 全部非联系页面视图；无匹配数据时渲染 404。

- [ ] **Step 1: 写失败测试**：渲染首页、产品详情、应用筛选、中英文新闻页与未知详情；断言关键文案、图片和链接。
- [ ] **Step 2: 运行页面测试，预期页面模块不存在而失败**。
- [ ] **Step 3: 按业务域迁移原 JSX 内容，详情页根据路由数据渲染；应用筛选使用 `ref/computed`**。
- [ ] **Step 4: 运行页面、布局和路由测试，预期全部通过**。
- [ ] **Step 5: 提交 `feat: migrate SEBO pages to Vue`**。

### Task 5: 联系表单与 Worker 保持一致

**Files:**
- Create: `02_完整工程源码/src/pages/ContactPage.vue`
- Create: `02_完整工程源码/src/composables/useLeadForm.ts`
- Create: `02_完整工程源码/tests/lead-form.test.ts`
- Preserve: `02_完整工程源码/worker/index.ts`
- Preserve: `02_完整工程源码/db/schema.ts`
- Preserve: `02_完整工程源码/drizzle/0000_flat_stick.sql`

**Interfaces:**
- Produces: `buildLeadPayload(form, context): LeadPayload` 与 `submitLead(payload): Promise<string>`。

- [ ] **Step 1: 写失败测试**：负载包含姓名、单位、电话、邮箱、方向、类型、来源、语言、同意、营销和蜜罐；网络失败保留输入；成功返回编号。
- [ ] **Step 2: 运行表单测试，预期 composable 不存在而失败**。
- [ ] **Step 3: 实现 composable 与联系页，保持原字段、成功态、错误态和禁用态**。
- [ ] **Step 4: 运行表单和 Worker 相关测试/构建，预期通过**。
- [ ] **Step 5: 提交 `feat: migrate lead form to Vue`**。

### Task 6: SEO、静态路由与离线输出

**Files:**
- Create: `02_完整工程源码/src/composables/usePageMeta.ts`
- Create: `02_完整工程源码/scripts/generate-static-routes.mjs`
- Modify: `02_完整工程源码/scripts/package-site-windows.ps1`
- Create: `02_完整工程源码/tests/static-output.test.ts`
- Modify: `02_完整工程源码/public/_headers`

**Interfaces:**
- Produces: `dist/client` 或 `dist` 中 208 个可访问目录入口、`sitemap.xml`、`robots.txt` 和 SPA fallback。

- [ ] **Step 1: 写失败测试**：构建输出包含全部公开路径入口、sitemap、robots、OG 图与无缺失资源。
- [ ] **Step 2: 运行静态输出测试，预期生成脚本不存在而失败**。
- [ ] **Step 3: 实现页面元数据与构建后静态路由生成；更新离线打包脚本**。
- [ ] **Step 4: 运行生产构建和静态输出测试，预期 208/208 路由通过**。
- [ ] **Step 5: 提交 `feat: generate SEO and offline route output`**。

### Task 7: 全量验证、清理与推送

**Files:**
- Modify: `02_完整工程源码/README.md`
- Modify: `README.md`
- Remove: `02_完整工程源码/app/**`
- Remove: React/Next/Vinext 专用配置。

**Interfaces:**
- Produces: 可安装、测试、构建、离线浏览和部署的最终 Vue 3 项目。

- [ ] **Step 1: 运行 `pnpm test`，预期所有测试通过且无警告**。
- [ ] **Step 2: 运行 `pnpm run lint` 与 `pnpm run build`，预期退出码 0**。
- [ ] **Step 3: 搜索依赖和源码，确认不存在 React、React DOM、Next、Vinext 运行引用**。
- [ ] **Step 4: 启动本地站点，验证 1440×900、390×844 和补充视口；检查导航、筛选、表单、404 与横向溢出**。
- [ ] **Step 5: 核对 208 条路由、资源清单和 Worker 接口验收项**。
- [ ] **Step 6: 更新文档，提交 `docs: complete Vue 3 migration handoff`，推送 `feat/vue3-migration`**。

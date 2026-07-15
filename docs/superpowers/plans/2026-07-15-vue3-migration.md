# SEBO Vue 3 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** 灏?SEBO V6 瀹屾暣杩佺Щ涓?Vue 3锛屽苟淇濈暀 208 鏉′腑鑻辨枃璺敱銆佸唴瀹广€佸搷搴斿紡瑙嗚銆丼EO銆佺绾夸氦浠樺拰 `/api/leads` 琛ㄥ崟銆?
**Architecture:** 浣跨敤 Vue 3銆乀ypeScript銆乂ite 鍜?Vue Router 鏋勫缓鍗曢〉搴旂敤锛岃矾鐢变笌椤甸潰鏁版嵁鐢辩被鍨嬪寲妯″潡椹卞姩锛汣loudflare Worker 涓?D1 琛ㄥ崟鍚庣缁х画鐙珛杩愯銆傞潤鎬佺敓鎴愯剼鏈负姣忔潯鍏紑璺敱鍒涘缓鐩綍鍏ュ彛銆乻itemap 涓?robots锛屽悓鏃剁敱鑷姩鍖栨祴璇曢獙璇佽矾鐢卞拰璧勬簮瀹屾暣鎬с€?
**Tech Stack:** Vue 3, Vue Router 4, TypeScript 5.9, Vite 8, Vitest, Vue Test Utils, Cloudflare Workers, Drizzle ORM, pnpm.

## Global Constraints

- 淇濈暀楠屾敹娓呭崟涓殑鍏ㄩ儴 208 鏉′腑鑻辨枃鍏紑 URL銆?- 淇濈暀鐜版湁鍥剧墖銆佹枃妗堛€佷俊鎭姸鎬併€佸搧鐗岃瑙夊拰鎵嬫満/PC 鍝嶅簲寮忓竷灞€銆?- 淇濈暀 `/api/leads` Worker銆丏1銆佸畨鍏ㄥご銆佹牎楠屻€佽湝缃愩€侀檺娴佷笌鍞竴缂栧彿銆?- 杩愯渚濊禆涓嶅緱鍖呭惈 React銆丷eact DOM銆丯ext 鎴?Vinext銆?- 涓昏瑙嗗彛锛?440脳900銆?90脳844锛涜ˉ鍏?1920脳1080銆?024脳768銆?68脳1024銆?75脳812銆?- 涓嶆柊澧炴湭缁忔壒鍑嗙殑浜у搧瑙勬牸銆佹渚嬨€佷笅杞借祫鏂欐垨钀ラ攢澹版槑銆?
---

### Task 1: Vue 宸ュ叿閾句笌娴嬭瘯鍩虹嚎

**Files:**
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/package.json`
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/pnpm-lock.yaml`
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/vite.config.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/index.html`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/main.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/App.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/vitest.config.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/framework.test.ts`

**Interfaces:**
- Produces: Vite `dev/build/test` 鍛戒护鍜?Vue 搴旂敤鎸傝浇鐐?`#app`銆?
- [x] **Step 1: 鍐欏け璐ユ祴璇?*锛氳鍙?`package.json`锛屾柇瑷€鍖呭惈 `vue`銆乣vue-router`銆乣@vitejs/plugin-vue`锛屼笖涓嶅瓨鍦?React/Next/Vinext銆?- [x] **Step 2: 杩愯 `pnpm vitest run tests/framework.test.ts`**锛岄鏈熷洜 Vitest/渚濊禆灏氭湭瀛樺湪鑰屽け璐ャ€?- [x] **Step 3: 鏇挎崲渚濊禆涓?Vite 閰嶇疆**锛氫娇鐢?`vue@3.5`銆乣vue-router@4.6`銆乣@vitejs/plugin-vue@6`銆乣vitest@3`銆乣@vue/test-utils@2`銆乣jsdom`锛涗繚鐣?Cloudflare 涓?Sites 鎻掍欢銆?- [x] **Step 4: 鍒涘缓鏈€灏?Vue 鍏ュ彛骞堕噸鏂板畨瑁呴攣鏂囦欢**銆?- [x] **Step 5: 杩愯妗嗘灦娴嬭瘯鍜岀敓浜ф瀯寤猴紝棰勬湡閫氳繃**銆?- [x] **Step 6: 鎻愪氦 `build: migrate toolchain to Vue 3`**銆?
### Task 2: 鍏紑璺敱銆佽瑷€涓庡唴瀹规暟鎹?
**Files:**
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/data/site.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/data/routes.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/lib/locale.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/router/index.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/routes.test.ts`

**Interfaces:**
- Produces: `publicRoutes: readonly string[]`, `allPublicPaths: readonly string[]`, `resolveLocale(path): Locale`, `localizedPath(path, locale): string`銆?
- [x] **Step 1: 鍐欏け璐ユ祴璇?*锛氭柇瑷€ `allPublicPaths` 鏈?208 涓敮涓€椤癸紝鍖呭惈 `/`銆乣/en`銆佷唬琛ㄦ€т骇鍝?搴旂敤/鑱旂郴璺緞锛屽苟楠岃瘉璇█浜掕浆銆?- [x] **Step 2: 杩愯璺敱娴嬭瘯锛岄鏈熸ā鍧椾笉瀛樺湪鑰屽け璐?*銆?- [x] **Step 3: 浠庡師 `site-routes.ts` 鍜?`V6Site.tsx` 鎻愬彇璺敱涓庡唴瀹规暟鎹紝鐢熸垚涓嫳鏂囪矾寰勫苟娣诲姞 catch-all 404**銆?- [x] **Step 4: 杩愯璺敱娴嬭瘯锛屼慨姝ｆ暟閲忋€侀噸澶嶅拰璺緞鏄犲皠鐩村埌閫氳繃**銆?- [x] **Step 5: 鎻愪氦 `feat: add typed bilingual route model`**銆?
### Task 3: 鍏叡甯冨眬涓庡搷搴斿紡缁勪欢

**Files:**
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/SiteHeader.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/SiteFooter.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/PageHero.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/SectionHead.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/ContentCards.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/components/ContactBand.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/styles/main.css`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/layout.test.ts`

**Interfaces:**
- Consumes: `Locale`, `localizedPath` 鍜岀珯鐐规暟鎹€?- Produces: 缁熶竴椤甸潰妗嗘灦銆侀敭鐩樺彲鐢ㄧЩ鍔ㄥ鑸€佸崱鐗囦笌棣栧睆缁勪欢銆?
- [x] **Step 1: 鍐欏け璐ョ粍浠舵祴璇?*锛氭闈㈠鑸瓨鍦紱鑿滃崟鎸夐挳鍙睍寮€绉诲姩瀵艰埅锛涜瑷€閾炬帴淇濇寔褰撳墠瀵瑰簲璺緞锛涗富鍐呭璺宠浆閾炬帴瀛樺湪銆?- [x] **Step 2: 杩愯缁勪欢娴嬭瘯锛岄鏈熺粍浠朵笉瀛樺湪鑰屽け璐?*銆?- [x] **Step 3: 瀹炵幇鍏叡缁勪欢骞惰縼绉诲師 CSS 鍙橀噺銆佺綉鏍笺€佹柇鐐广€佺劍鐐瑰拰 reduced-motion 瑙勫垯**銆?- [x] **Step 4: 杩愯缁勪欢娴嬭瘯锛岄鏈熼€氳繃涓旀棤 Vue 璀﹀憡**銆?- [x] **Step 5: 鎻愪氦 `feat: add responsive Vue site shell`**銆?
### Task 4: 椤甸潰涓庤鎯呰矾鐢?
**Files:**
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/HomePage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/SolutionsPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/TechnologyPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/LaidianlaPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/ApplicationsPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/ContentPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/AboutPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/DetailPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/NotFoundPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/pages.test.ts`

**Interfaces:**
- Consumes: 绫诲瀷鍖栧唴瀹规暟鎹拰 `route.meta.pageType`銆?- Produces: 鍏ㄩ儴闈炶仈绯婚〉闈㈣鍥撅紱鏃犲尮閰嶆暟鎹椂娓叉煋 404銆?
- [x] **Step 1: 鍐欏け璐ユ祴璇?*锛氭覆鏌撻椤点€佷骇鍝佽鎯呫€佸簲鐢ㄧ瓫閫夈€佷腑鑻辨枃鏂伴椈椤典笌鏈煡璇︽儏锛涙柇瑷€鍏抽敭鏂囨銆佸浘鐗囧拰閾炬帴銆?- [x] **Step 2: 杩愯椤甸潰娴嬭瘯锛岄鏈熼〉闈㈡ā鍧椾笉瀛樺湪鑰屽け璐?*銆?- [x] **Step 3: 鎸変笟鍔″煙杩佺Щ鍘?JSX 鍐呭锛岃鎯呴〉鏍规嵁璺敱鏁版嵁娓叉煋锛涘簲鐢ㄧ瓫閫変娇鐢?`ref/computed`**銆?- [x] **Step 4: 杩愯椤甸潰銆佸竷灞€鍜岃矾鐢辨祴璇曪紝棰勬湡鍏ㄩ儴閫氳繃**銆?- [x] **Step 5: 鎻愪氦 `feat: migrate SEBO pages to Vue`**銆?
### Task 5: 鑱旂郴琛ㄥ崟涓?Worker 淇濇寔涓€鑷?
**Files:**
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/pages/ContactPage.vue`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/composables/useLeadForm.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/lead-form.test.ts`
- Preserve: `02_瀹屾暣宸ョ▼婧愮爜/worker/index.ts`
- Preserve: `02_瀹屾暣宸ョ▼婧愮爜/db/schema.ts`
- Preserve: `02_瀹屾暣宸ョ▼婧愮爜/drizzle/0000_flat_stick.sql`

**Interfaces:**
- Produces: `buildLeadPayload(form, context): LeadPayload` 涓?`submitLead(payload): Promise<string>`銆?
- [x] **Step 1: 鍐欏け璐ユ祴璇?*锛氳礋杞藉寘鍚鍚嶃€佸崟浣嶃€佺數璇濄€侀偖绠便€佹柟鍚戙€佺被鍨嬨€佹潵婧愩€佽瑷€銆佸悓鎰忋€佽惀閿€鍜岃湝缃愶紱缃戠粶澶辫触淇濈暀杈撳叆锛涙垚鍔熻繑鍥炵紪鍙枫€?- [x] **Step 2: 杩愯琛ㄥ崟娴嬭瘯锛岄鏈?composable 涓嶅瓨鍦ㄨ€屽け璐?*銆?- [x] **Step 3: 瀹炵幇 composable 涓庤仈绯婚〉锛屼繚鎸佸師瀛楁銆佹垚鍔熸€併€侀敊璇€佸拰绂佺敤鎬?*銆?- [x] **Step 4: 杩愯琛ㄥ崟鍜?Worker 鐩稿叧娴嬭瘯/鏋勫缓锛岄鏈熼€氳繃**銆?- [x] **Step 5: 鎻愪氦 `feat: migrate lead form to Vue`**銆?
### Task 6: SEO銆侀潤鎬佽矾鐢变笌绂荤嚎杈撳嚭

**Files:**
- Create: `02_瀹屾暣宸ョ▼婧愮爜/src/composables/usePageMeta.ts`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/scripts/generate-static-routes.mjs`
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/scripts/package-site-windows.ps1`
- Create: `02_瀹屾暣宸ョ▼婧愮爜/tests/static-output.test.ts`
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/public/_headers`

**Interfaces:**
- Produces: `dist/client` 鎴?`dist` 涓?208 涓彲璁块棶鐩綍鍏ュ彛銆乣sitemap.xml`銆乣robots.txt` 鍜?SPA fallback銆?
- [x] **Step 1: 鍐欏け璐ユ祴璇?*锛氭瀯寤鸿緭鍑哄寘鍚叏閮ㄥ叕寮€璺緞鍏ュ彛銆乻itemap銆乺obots銆丱G 鍥句笌鏃犵己澶辫祫婧愩€?- [x] **Step 2: 杩愯闈欐€佽緭鍑烘祴璇曪紝棰勬湡鐢熸垚鑴氭湰涓嶅瓨鍦ㄨ€屽け璐?*銆?- [x] **Step 3: 瀹炵幇椤甸潰鍏冩暟鎹笌鏋勫缓鍚庨潤鎬佽矾鐢辩敓鎴愶紱鏇存柊绂荤嚎鎵撳寘鑴氭湰**銆?- [x] **Step 4: 杩愯鐢熶骇鏋勫缓鍜岄潤鎬佽緭鍑烘祴璇曪紝棰勬湡 208/208 璺敱閫氳繃**銆?- [x] **Step 5: 鎻愪氦 `feat: generate SEO and offline route output`**銆?
### Task 7: 鍏ㄩ噺楠岃瘉銆佹竻鐞嗕笌鎺ㄩ€?
**Files:**
- Modify: `02_瀹屾暣宸ョ▼婧愮爜/README.md`
- Modify: `README.md`
- Remove: `02_瀹屾暣宸ョ▼婧愮爜/app/**`
- Remove: React/Next/Vinext 涓撶敤閰嶇疆銆?
**Interfaces:**
- Produces: 鍙畨瑁呫€佹祴璇曘€佹瀯寤恒€佺绾挎祻瑙堝拰閮ㄧ讲鐨勬渶缁?Vue 3 椤圭洰銆?
- [x] **Step 1: 杩愯 `pnpm test`锛岄鏈熸墍鏈夋祴璇曢€氳繃涓旀棤璀﹀憡**銆?- [x] **Step 2: 杩愯 `pnpm run lint` 涓?`pnpm run build`锛岄鏈熼€€鍑虹爜 0**銆?- [x] **Step 3: 鎼滅储渚濊禆鍜屾簮鐮侊紝纭涓嶅瓨鍦?React銆丷eact DOM銆丯ext銆乂inext 杩愯寮曠敤**銆?- [x] **Step 4: 鍚姩鏈湴绔欑偣锛岄獙璇?1440脳900銆?90脳844 鍜岃ˉ鍏呰鍙ｏ紱妫€鏌ュ鑸€佺瓫閫夈€佽〃鍗曘€?04 涓庢í鍚戞孩鍑?*銆?- [x] **Step 5: 鏍稿 208 鏉¤矾鐢便€佽祫婧愭竻鍗曞拰 Worker 鎺ュ彛楠屾敹椤?*銆?- [x] **Step 6: 鏇存柊鏂囨。锛屾彁浜?`docs: complete Vue 3 migration handoff`锛屾帹閫?`feat/vue3-migration`**銆?

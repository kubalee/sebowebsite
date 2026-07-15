import { C as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
//#region app/V6Site.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var asset = (name) => `/assets/${name}`;
var link = (path, locale) => locale === "en" ? `/en${path === "/" ? "" : path}` : path;
var solutions = [
	{
		title: "算擎 Grid-to-GPU",
		en: "Grid-to-GPU",
		body: "以有效 GPU 小时为结果，把中压接入、HVDC、近端功率缓冲、液冷与可验证运营连接起来。",
		image: asset("v6/data-center.webp"),
		href: "/solutions/grid-to-gpu",
		tag: "PRODUCTIVE GPU HOURS"
	},
	{
		title: "悍擎 Grid-to-Wheel",
		en: "Grid-to-Wheel",
		body: "让车辆、能源节点、补能窗口、服务与资产管理围绕出勤率、吨公里和补能确定性协同运行。",
		image: asset("v6/mine-truck.webp"),
		href: "/solutions/grid-to-wheel",
		tag: "CONTINUOUS OPERATIONS"
	},
	{
		title: "极擎 Mission-to-Power",
		en: "Mission-to-Power",
		body: "面向弱网、极端环境、无人值守与应急任务，定义可部署、可维护、可验证的能源保障。",
		image: asset("v6/polar-autonomy.webp"),
		href: "/solutions/mission-to-power",
		tag: "MISSION COMPLETION"
	}
];
var products = [
	{
		slug: "technology/thunderbird",
		code: "THUNDERBIRD",
		title: "雷鸟超级电池",
		en: "ThunderBird Super Battery",
		family: "高功率电池平台",
		use: "统一能量与功率架构，公开规格只采用已批准 SKU 与完整测试条件。",
		image: asset("official/thunderbird-product.png"),
		status: "公开规格以批准 SKU 注册表为准"
	},
	{
		slug: "technology/powercore-sst",
		code: "POWERCORE-SST / HVDC",
		title: "PowerCore-SST / HVDC",
		en: "PowerCore-SST / HVDC",
		family: "可编程电力路由",
		use: "缩短中压入口到直流负载的路径，提供变换、隔离、保护与多端口协同。",
		image: asset("editorial/sst-hero.jpg"),
		status: "工程选型开放"
	},
	{
		slug: "technology/mobile-energy",
		code: "MOBILE ENERGY",
		title: "移动与固定储充",
		en: "Mobile & Fixed Energy Systems",
		family: "现场能源触达网络",
		use: "从 105kWh 移动补能到 5MWh 高吞吐节点，按工况、功率、电压与部署方式选型。",
		image: asset("v6/logistics-mobile.webp"),
		status: "8 款工程产品可咨询"
	},
	{
		slug: "technology/wireless-power",
		code: "WIRELESS POWER",
		title: "无线电力传输",
		en: "Wireless Power Transfer",
		family: "前沿能源触达",
		use: "面向特殊场景的研发路线；只展示验证状态与安全边界，不作量产承诺。",
		image: asset("editorial/network.jpg"),
		status: "前瞻研发 · 概念示意"
	},
	{
		slug: "technology/industrial-cortex",
		code: "INDUSTRIAL CORTEX",
		title: "智鉴 Industrial Cortex",
		en: "Industrial Cortex",
		family: "可信决策与执行中枢",
		use: "连接现场事实、AI 建议、授权动作、工单执行与结果确认。",
		image: asset("cortex/cortex-17.png"),
		status: "POC 与技术交流开放"
	}
];
var mobileProducts = [
	[
		"s1051pcl",
		"S1051PCL",
		"105kWh 轻量移动补能",
		"105 kWh Compact Mobile Energy Unit",
		"移动能源",
		"适用于地下停车场、社区及服务区的补能任务。",
		"editorial/mobile-service.jpg"
	],
	[
		"s2101pbl",
		"S2101PBL",
		"210kWh 通用厢式移动储充",
		"210 kWh Mobile Storage-Charging Vehicle",
		"移动能源",
		"适用于物流园、大巴与道路救援的工况评估。",
		"editorial/mobile-truck.jpg"
	],
	[
		"s2003ptt",
		"S2003PTT",
		"200kWh 皮卡/轻型工程保障",
		"200 kWh Pickup-Mounted Mobile Power",
		"移动能源",
		"面向矿区、戈壁、油田及应急保障。",
		"editorial/mobile-network.jpg"
	],
	[
		"s4301ppl",
		"S4301PPL",
		"430kWh 重载移动储充",
		"430 kWh Heavy-Duty Mobile Energy",
		"移动能源",
		"面向重卡、大巴与工程机械的补能窗口。",
		"editorial/heavy-operations.jpg"
	],
	[
		"s10003ppt",
		"S10003PPT",
		"1MWh 储能闪充站",
		"1 MWh Storage-Charging Station",
		"固定能源节点",
		"适用于物流园、矿区、港口的综合能源场景。",
		"editorial/storage-station.jpg"
	],
	[
		"s20003ppt",
		"S20003PPT",
		"2MWh 高倍率储充站",
		"2 MWh High-Rate Storage-Charging Station",
		"固定能源节点",
		"适用于大型园区、物流、矿区及港口。",
		"editorial/fixed-product-matrix.jpg"
	],
	[
		"s50001ppl",
		"S50001PPL",
		"5MWh 高吞吐能源节点",
		"5 MWh High-Throughput Energy Node",
		"固定能源节点",
		"面向超大型矿区、港口重载及微电网补能基地。",
		"editorial/super-station.jpg"
	],
	[
		"s3702pst",
		"S3702PST",
		"兆瓦闪充终端",
		"Megawatt Flash-Charging Terminal",
		"高功率场站",
		"用于站端边界、车辆兼容与液冷接口的工程评估。",
		"editorial/network.jpg"
	]
].map(([slug, code, title, en, family, use, image]) => ({
	slug: `technology/mobile-energy/${slug}`,
	code,
	title,
	en,
	family,
	use,
	image: asset(image)
}));
var cortexProducts = [
	{
		slug: "technology/industrial-cortex/cortexos",
		code: "CORTEXOS",
		title: "CortexOS",
		en: "CortexOS",
		family: "企业与工业 AI 运行时",
		use: "模型、Agent、权限、任务、工具、审计与回滚的受控运行。",
		image: asset("cortex/cortex-03.png")
	},
	{
		slug: "technology/industrial-cortex/cortexbox",
		code: "CORTEXBOX",
		title: "CortexBox",
		en: "CortexBox",
		family: "边缘推理与受控执行",
		use: "支持弱网、本地推理与受控现场执行。型号以最终批准清单为准。",
		image: asset("cortex/cortex-14.png")
	},
	{
		slug: "technology/industrial-cortex/industrial-cortex-pod",
		code: "INDUSTRIAL CORTEX POD",
		title: "Industrial Cortex Pod",
		en: "Industrial Cortex Pod",
		family: "现场决策执行中枢",
		use: "面向设备、质量、安全、能源和生产的工业现场协同。",
		image: asset("cortex/cortex-11.png")
	},
	{
		slug: "technology/industrial-cortex/evidence-hash",
		code: "EVIDENCE HASH",
		title: "Evidence Hash",
		en: "Evidence Hash",
		family: "证据与结果确认",
		use: "以可审计证据对象连接签收、工单与项目结果。",
		image: asset("cortex/cortex-08.png")
	}
];
var thunderbirdSkus = [
	[
		"tb-007-13ah",
		"TB-007-13Ah",
		"毫秒到秒级功率缓冲；不承担班次级主能量。"
	],
	[
		"tb-009-240ah",
		"TB-009-240Ah",
		"主动力域与分钟级/小时级能量承载；高频浪涌由缓冲层承担。"
	],
	[
		"tb-qs-08ah",
		"TB-QS-08Ah",
		"重量敏感、持续中高倍率、受控环境任务。"
	],
	[
		"tb-qs-08ah-cold",
		"TB-QS-08Ah 超低温型",
		"极寒放电与轻量任务；充电策略必须单独定义。"
	],
	[
		"tb-qs-04ah-lto",
		"TB-QS-04Ah 低温长循环型",
		"低温可充、长循环和高安全优先，能量密度不是第一目标。"
	]
].map(([slug, code, use]) => ({
	slug: `technology/thunderbird/${slug}`,
	code,
	title: code,
	en: code,
	family: "雷鸟超级电池",
	use,
	image: asset("official/thunderbird-product.png"),
	status: "工程参考 · 公开前需冻结规格"
}));
var sstProducts = [
	[
		"sepcs-135-m1",
		"SEPCS-135-M1",
		"模块化高功率变换单元，适合机架与系统级集成。"
	],
	[
		"sedd-60-m1",
		"SEDD-60-M1",
		"面向直流分配、隔离与受控保护的工程模块。"
	],
	[
		"sesst-10",
		"SESST-10",
		"面向高功率接入、隔离、HVDC 与多端口协同的 SST 系统。"
	]
].map(([slug, code, use]) => ({
	slug: `technology/powercore-sst/${slug}`,
	code,
	title: code,
	en: code,
	family: "PowerCore-SST / HVDC",
	use,
	image: asset("editorial/sst.jpg"),
	status: "工程选型 · 参数按批准版本"
}));
var applications = [
	[
		"v2x-emergency",
		"V2X 应急临时供电",
		"V2X Emergency & Temporary Power",
		"城市 / 应急",
		"在电网、车辆与关键负荷之间建立可移动、可调度的临时供电窗口。",
		"v6/mobile-service.webp"
	],
	[
		"marine-port",
		"电动船舶与水上物流港口",
		"Electric Vessels & Logistics Ports",
		"港航",
		"岸电、移动储充、站端储能与港口作业窗口协同。",
		"editorial/network.jpg"
	],
	[
		"highway-service",
		"高速公路服务区综合能源",
		"Integrated Energy for Service Areas",
		"交通",
		"用固定节点承接基础负荷，移动储充应对潮汐峰值与应急。",
		"v6/city-charging-night.webp"
	],
	[
		"bus-hub",
		"公交枢纽与交通中转站",
		"Bus Hubs & Transport Interchanges",
		"公共交通",
		"围绕班次、回场窗口、并发功率和场站容量组织补能。",
		"v6/city-energy-hub.webp"
	],
	[
		"logistics-park",
		"集团物流园区综合能源",
		"Integrated Energy for Logistics Parks",
		"物流园",
		"车队、站端、峰谷电力与服务工单形成统一经营账本。",
		"v6/logistics-mobile.webp"
	],
	[
		"trunk-heavy",
		"干线重卡综合解决方案",
		"Long-Haul Heavy Truck Solution",
		"干线物流",
		"以线路、班次、载重、补能网络和 TCO 定义运营方案。",
		"v6/mine-truck.webp"
	],
	[
		"remote-offgrid",
		"偏远工地及边防哨所离网供能",
		"Off-Grid Power for Remote Worksites",
		"极端 / 离网",
		"在弱网、宽温、通信受限和长维护窗口下维持任务连续性。",
		"v6/polar-base.webp"
	],
	[
		"rural-agri",
		"乡村微电网与农业机械电动化",
		"Rural Microgrids & Agricultural Electrification",
		"农业",
		"分布式能源、农业负荷与移动补能按季节和作业窗口配置。",
		"editorial/mobile-network.jpg"
	],
	[
		"medical-backup",
		"医疗设施绿色备用与移动应急供电",
		"Healthcare Backup & Emergency Power",
		"医疗 / 应急",
		"以关键负荷、切换时间、持续时长和维护制度定义备用边界。",
		"editorial/storage-station.jpg"
	],
	[
		"airport-rail",
		"机场与高铁站综合能源",
		"Integrated Energy for Airports & Rail",
		"交通枢纽",
		"多类型负荷、冗余路径、地勤车辆与应急保障协同。",
		"v6/city-energy-hub.webp"
	],
	[
		"tourism",
		"景区综合能源",
		"Integrated Energy for Tourism",
		"文旅",
		"移动补能、低噪运行与节假日峰值响应。",
		"editorial/mobile-service.jpg"
	],
	[
		"data-center-backup",
		"数据中心绿色备用电源",
		"Green Backup Power for Data Centres",
		"算力",
		"近端缓冲、UPS/BESS 与可验证能源路径共同保障有效 GPU 小时。",
		"v6/data-center.webp"
	],
	[
		"mine-port-heavy",
		"矿山与港口重载运输综合能源",
		"Mining & Port Heavy-Duty Energy",
		"矿山 / 港口",
		"以出勤率、吨公里、补能确定性和服务闭环定义系统。",
		"v6/mine-energy.webp"
	],
	[
		"plateau-border",
		"高原边防与极端节点微电网",
		"High-Altitude Border Microgrid",
		"极端 / 边防",
		"温度、海拔、重量、通信与维护窗口共同决定任务能源。",
		"v6/extreme-robotics.webp"
	],
	[
		"smart-park-campus",
		"智慧工业园区与校园微电网",
		"Smart Industrial Park & Campus Microgrid",
		"园区",
		"源网荷储、功率路由、调度与服务形成可扩展底座。",
		"v6/smart-factory.webp"
	],
	[
		"retrofit-mine-truck",
		"矿卡重卡油改电综合方案",
		"Diesel-to-Electric Mine Truck Retrofit",
		"矿山",
		"车辆适配、道路坡度、工况循环、补能窗口与 TCO 联合验证。",
		"v6/mine-truck.webp"
	],
	[
		"100x70t-station",
		"100 台 70T 新能源重卡微电网能源站",
		"100 × 70T Fleet Energy Station",
		"重载车队",
		"百车调度、站端功率、储充协同与服务 SLA 一体设计。",
		"v6/mine-energy.webp"
	]
].map(([slug, title, en, sector, focus, image]) => ({
	slug,
	title,
	en,
	sector,
	focus,
	image: asset(image)
}));
var services = [
	[
		"smart-sustaining",
		"Smart Sustaining",
		"智能续航保障",
		"按班次组织移动补能、固定节点、调度与应急供电。",
		"续航与供能连续性"
	],
	[
		"smart-servicing",
		"Smart Servicing",
		"智能服务",
		"将诊断、保养、维修、备件、技师与工单 SLA 组织为可追溯服务。",
		"可追踪维护"
	],
	[
		"smart-scrutiny",
		"Smart Scrutiny",
		"智能审查",
		"围绕车况、电池、安全、隐患、复检与证据形成风险识别闭环。",
		"风险与复检证据"
	],
	[
		"smart-stewardship",
		"Smart Stewardship",
		"智能托管",
		"通过 Battery Passport、SOH、质保、资产和 TCO 管理生命周期。",
		"资产健康与责任"
	],
	[
		"super-truck-station",
		"Super Truck Station",
		"超级卡站",
		"以固定节点承载高频需求，以移动服务覆盖不确定与应急窗口。",
		"场站吞吐与服务协同"
	],
	[
		"vehicle-ai",
		"Vehicle AI",
		"整车 AI",
		"从车辆、电池、轮胎与设备状态形成建议、工单、授权与签收闭环。",
		"车况可见与责任闭环"
	],
	[
		"mobile-charging",
		"Mobile Charging",
		"移动补能",
		"一个入口把电送到车辆需要的地点，并记录调度、作业与签收。",
		"能源按需抵达"
	],
	[
		"emergency",
		"Emergency Response",
		"应急救援",
		"在车辆停下前后接住能源与服务，按工单协调补能、诊断和救援。",
		"恢复时间与工单闭环"
	],
	[
		"battery-bank",
		"Battery Bank",
		"电池银行",
		"把电池身份、健康、质保、调度和残值纳入可运营的资产账本。",
		"电池全生命周期运营"
	],
	[
		"partner-network",
		"Partner Network",
		"合作网络",
		"让本地服务能力进入统一标准、质量、培训、工单和结算体系。",
		"标准化生态交付"
	]
].map(([slug, en, title, body, result], index) => ({
	slug: `laidianla/${slug}`,
	en,
	title,
	body,
	result,
	image: asset([
		"v6/mobile-service.webp",
		"official/engineering-team.png",
		"editorial/energyos-lab.jpg",
		"editorial/platform-hero.jpg",
		"v6/mine-energy.webp",
		"v6/co-design.webp",
		"v6/logistics-mobile.webp",
		"v6/mobile-service.webp",
		"official/thunderbird-product.png",
		"v6/co-design.webp"
	][index])
}));
var newsItems = [
	{
		slug: "v6-blueprint",
		date: "2026.07.13",
		type: "网站更新",
		title: "SEBO V6：围绕客户结果、工程证据与真实行动重建数字门面",
		en: "SEBO V6: rebuilt around customer outcomes, engineering evidence and real action",
		image: asset("v6/co-design.webp")
	},
	{
		slug: "engineering-evidence",
		date: "2026.07.13",
		type: "工程洞察",
		title: "为什么每个高功率主张都需要版本、条件、状态与证据",
		en: "Why every high-power claim needs a version, conditions, status and evidence",
		image: asset("v6/battery-lab.webp")
	},
	{
		slug: "application-framework",
		date: "2026.07.13",
		type: "应用方法",
		title: "17 项典型应用：先定义工况与边界，再进入工程评估",
		en: "17 reference applications: define conditions and boundaries before engineering assessment",
		image: asset("v6/mine-energy.webp")
	}
];
function bilingual(locale, zh, en) {
	return locale === "zh" ? zh : en;
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow",
		children
	});
}
function ButtonLink({ href, children, secondary = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: `button ${secondary ? "secondary" : ""}`,
		href,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "→"
		})]
	});
}
function Header({ locale, route }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const nav = [
		[
			"/solutions",
			"三擎综合解决方案",
			"Solutions"
		],
		[
			"/technology",
			"技术与产品",
			"Technology"
		],
		[
			"/laidianla",
			"来电啦 4S²",
			"Laidianla 4S²"
		],
		[
			"/about",
			"关于 SEBO",
			"About SEBO"
		],
		[
			"/news",
			"新闻与案例",
			"News & Cases"
		]
	];
	const bare = route.replace(/^en\/?/, "").replace(/^\/+/, "");
	const languageHref = locale === "zh" ? `/en${bare ? `/${bare}` : ""}` : `/${bare}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "brand",
				href: link("/", locale),
				"aria-label": "SEBO home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "SEBO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "SUPER ENERGY BASE OPERATIONS" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "desktop-nav",
				"aria-label": locale === "zh" ? "主导航" : "Primary navigation",
				children: nav.map(([href, zh, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link(href, locale),
					children: bilingual(locale, zh, en)
				}, href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "language",
						href: languageHref,
						children: locale === "zh" ? "EN" : "中文"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "header-cta",
						href: link("/contact/project", locale),
						children: bilingual(locale, "启动项目评估", "Start an Assessment")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "menu-button",
						type: "button",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen(!open),
						children: open ? "关闭" : "菜单"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				id: "mobile-nav",
				className: `mobile-nav ${open ? "is-open" : ""}`,
				"aria-label": locale === "zh" ? "移动导航" : "Mobile navigation",
				children: [nav.map(([href, zh, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link(href, locale),
					onClick: () => setOpen(false),
					children: [bilingual(locale, zh, en), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/contact", locale),
					onClick: () => setOpen(false),
					children: [bilingual(locale, "项目、技术与合作入口", "Project, technical and partner enquiries"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				})]
			})
		]
	});
}
function Footer({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "footer-brand",
					children: "SEBO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "让电像空气一样自由。", "Electricity, Free as Air.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "SEBO 是高功率时代的能源基础设施公司。", "SEBO is a high-power energy infrastructure company.") })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "探索", "Explore") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/solutions", locale),
					children: bilingual(locale, "三擎综合解决方案", "Integrated Solutions")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/technology", locale),
					children: bilingual(locale, "技术与产品", "Technology & Products")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/applications", locale),
					children: bilingual(locale, "17 项典型应用", "17 Reference Applications")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/cases", locale),
					children: bilingual(locale, "客户案例", "Customer Cases")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "连接", "Connect") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/contact/project", locale),
					children: bilingual(locale, "项目咨询", "Project Enquiry")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/contact/technical", locale),
					children: bilingual(locale, "技术交流", "Technical Enquiry")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/downloads", locale),
					children: bilingual(locale, "资料中心", "Resources")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link("/careers", locale),
					children: bilingual(locale, "加入 SEBO", "Careers")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["© 2026 SEBO · Super Energy Base Operations · ", bilingual(locale, "V6 正式预览", "V6 Official Preview")] })
		]
	});
}
function Home({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: asset("v6/mine-energy.webp"),
					alt: "SEBO high-power energy infrastructure for heavy-duty operations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "SEBO · 高功率时代的能源基础设施", "SEBO · HIGH-POWER ENERGY INFRASTRUCTURE") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: bilingual(locale, "让电像空气一样自由", "Electricity, Free as Air.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "SEBO 构建面向 AI 算力、重载运力与关键任务的高功率能源基础设施：三擎进入场景，三硬件构筑底座，智鉴连接决策与执行，来电啦完成运营服务。", "SEBO builds high-power energy infrastructure for AI compute, heavy-duty mobility and mission-critical operations—connecting solutions, hardware, trusted intelligence and operating services.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: link("/solutions", locale),
								children: bilingual(locale, "探索三擎", "Explore Solutions")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: link("/contact/project", locale),
								secondary: true,
								children: bilingual(locale, "启动项目评估", "Start an Assessment")
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), bilingual(locale, "概念示意 · 场景与配置以工程评估为准", "CONCEPT ILLUSTRATION · configuration subject to engineering assessment")]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section intro-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "高功率时代 · 稳定交付、调度与验证", "THE HIGH-POWER ERA · DELIVER, ORCHESTRATE, VERIFY") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "two-column-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "真正稀缺的，是在正确时间尺度上交付高质量功率。", "What matters is high-quality power delivered at the right time scale.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "芯片、重载设备和无人系统正在变强，能源系统却仍按低动态、固定坐标和平均负荷设计。SEBO 让功率可规划、可交付、可经营。", "Chips, heavy equipment and autonomous systems are accelerating while legacy energy systems remain static. SEBO makes power planable, deliverable and operable.") })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, {
			cards: solutions,
			locale,
			type: "solution"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "architecture-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "共享底座", "THE SHARED FOUNDATION") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "三擎共享硬件、智能与服务能力。", "Three solutions share hardware, intelligence and service capabilities.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "雷鸟超级电池、PowerCore-SST、移动储充装备、SEBO Industrial Cortex 与来电啦 4S² 在不同工况下形成不同组合。", "ThunderBird, PowerCore-SST, mobile energy, SEBO Industrial Cortex and Laidianla 4S² combine differently for each operating condition.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: link("/technology", locale),
					secondary: true,
					children: bilingual(locale, "查看技术与产品", "View Technology")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "system-rail",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "储能", "Store") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ThunderBird" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "变换", "Route") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "PowerCore-SST" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "触达", "Deploy") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Mobile Energy" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "决策", "Decide") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Industrial Cortex" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "服务", "Operate") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Laidianla 4S²" })
					] })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "TECHNOLOGY & PRODUCTS",
				zh: "技术与产品",
				en: "Technology & Products",
				titleZh: "从高功率电池到现场决策执行。",
				titleEn: "From high-power batteries to field decision execution.",
				bodyZh: "每类产品都有独立页面、应用边界、资料入口和工程咨询路径。",
				bodyEn: "Every product family has a dedicated page, application boundaries, resources and an engineering enquiry path."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "product-grid",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product,
					locale
				}, product.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "cortex-band",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "SEBO INDUSTRIAL CORTEX" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "让数据形成判断，让判断进入执行。", "Turn Data into Decisions — and Decisions into Action.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "从企业经营到工业现场，连接数据、AI 建议、授权动作与结果确认。", "From enterprise operations to industrial sites, connect data, AI recommendations, authorised actions and verified outcomes.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: link("/technology/industrial-cortex", locale),
					children: bilingual(locale, "探索智鉴", "Explore Industrial Cortex")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: asset("cortex/cortex-17.png"),
				alt: "SEBO Industrial Cortex interface and field system"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section service-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "LAIDIANLA MOBILE 4S²",
				zh: "来电啦移动 4S² 上门服务平台",
				en: "Laidianla Mobile 4S² On-Demand Service Platform",
				titleZh: "让服务到车前，让工单到人手。",
				titleEn: "Service to the Vehicle. Work Orders to the Right Hands.",
				bodyZh: "四个 S 独立可进入，覆盖续航、服务、审查与托管。",
				bodyEn: "Four independent service capabilities cover sustaining, servicing, scrutiny and stewardship."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-grid",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link(`/${service.slug}`, locale),
					className: "service-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: service.en }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.body }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [service.result, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })] })
					] })]
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "applications-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						locale,
						eyebrow: "REFERENCE APPLICATIONS",
						zh: "17 项典型应用",
						en: "17 Reference Applications",
						titleZh: "把典型应用与客户案例严格分开。",
						titleEn: "Keep reference applications and customer cases distinct.",
						bodyZh: "典型应用用于解释工况、参考架构与适用边界；客户案例只在客户授权、基线、结果与 M&V 完整时发布。",
						bodyEn: "Reference applications explain conditions, reference architecture and boundaries; customer cases publish only with authorisation, baseline, results and M&V."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "application-strip",
						children: applications.slice(0, 6).map((application, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: link(`/applications/${application.slug}`, locale),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, application.title, application.en) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
									application.sector,
									" · ",
									application.focus
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
							]
						}, application.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						href: link("/applications", locale),
						secondary: true,
						children: bilingual(locale, "查看全部 17 项应用", "View all 17 applications")
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "places-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: asset("official/engineering-team.png"),
				alt: "SEBO engineering team"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "双基地 · 研发与交付", "TWO LOCATIONS · ENGINEERING & DELIVERY") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "杭州总部负责研发验证，钱塘基地负责系统集成与规模交付。", "Hangzhou advances R&D and validation. Qiantang integrates systems for scalable delivery.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "只使用经过授权的真实团队、实验室、测试和交付资产；前瞻概念图会被清晰标注。", "Only authorised real-world team, lab, test and delivery assets are used. Forward-looking illustrations are clearly labelled.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-links",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link("/about/hangzhou", locale),
						children: [bilingual(locale, "杭州总部", "Hangzhou Headquarters"), " →"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link("/about/qiantang", locale),
						children: [bilingual(locale, "钱塘基地", "Qiantang Base"), " →"]
					})]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "NEWS & ENGINEERING INSIGHTS",
				zh: "新闻、案例与工程知识",
				en: "News, Cases & Engineering Insights",
				titleZh: "每条内容都有自己的路径。",
				titleEn: "Every content item has its own route.",
				bodyZh: "新闻、工程洞察、典型应用与资料下载形成可检索的内容中心。",
				bodyEn: "News, engineering insights, applications and resources form a searchable content centre."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "news-grid",
				children: newsItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, {
					item,
					locale
				}, item.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, { locale })
	] });
}
function SectionHead({ locale, eyebrow, zh, en, titleZh, titleEn, bodyZh, bodyEn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label",
				children: bilingual(locale, zh, en)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, titleZh, titleEn) })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, bodyZh, bodyEn) })]
	});
}
function CardGrid({ cards, locale, type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "card-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "solution-grid",
			children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: `solution-card ${type}`,
				href: link(card.href, locale),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: card.image,
						alt: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "card-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: card.tag }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, card.title, card.en) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, card.body, card.body) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [bilingual(locale, "查看解决方案", "View solution"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })] })
					] })
				]
			}, card.href))
		})
	});
}
function ProductCard({ product, locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "product-card",
		href: link(`/${product.slug}`, locale),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "product-image",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.title} product visual`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: product.code }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, product.title, product.en) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, product.family, product.family) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [bilingual(locale, "产品详情", "Product details"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })] })
		] })]
	});
}
function NewsCard({ item, locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "news-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			alt: ""
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
				item.date,
				" · ",
				item.type
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, item.title, item.en) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: link(`/news/${item.slug}`, locale),
				children: [
					bilingual(locale, "阅读内容", "Read article"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
				]
			})
		] })]
	});
}
function PageHero({ locale, eyebrow, title, en, lead, image, concept = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: bilingual(locale, title, en) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lead }),
				concept && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
					className: "concept-label",
					children: ["CONCEPT ILLUSTRATION · ", bilingual(locale, "概念示意，不代表量产交付", "not a production-delivery claim")]
				})
			] })
		]
	});
}
function Pillars({ locale, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pillars",
			children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: String(index + 1).padStart(2, "0") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.en }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, item.title, item.en) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.body })
			] }, item.title))
		})
	});
}
function SolutionDetail({ kind, locale }) {
	const content = kind.href.includes("grid-to-gpu") ? {
		h1: "让每一度电，转化为更多有效 GPU 小时。",
		h1En: "Turn Every Unit of Energy into More Productive GPU Hours.",
		lead: "从中压接入、HVDC、近端功率缓冲到液冷与可验证运营，构建可测量的 Grid-to-GPU 能量路径。",
		stages: [
			["客户结果", "有效 GPU 小时、母线事件、热节流与扩容条件"],
			["受控能量路径", "Grid → PowerCore-SST → HVDC → 近端缓冲 → 冷却 → GPU"],
			["工程评估", "并网容量、负载波形、GPU 类型、冷却、扩容计划与 SLA"]
		],
		action: "申请 Grid-to-GPU 评估"
	} : kind.href.includes("grid-to-wheel") ? {
		h1: "让重载设备持续作业，让每一公里都有账。",
		h1En: "Keep Heavy Equipment Working—and Make Every Kilometre Accountable.",
		lead: "车、电、站、服、资、证一体化，围绕出勤率、吨公里与补能确定性组织连续作业。",
		stages: [
			["连续作业账本", "出勤率 × 吨公里 × 补能确定性 × 服务响应 × 资产残值"],
			["混合补能网络", "移动储充、固定节点与服务网络按路线、班次和边界组合"],
			["工程评估", "提交线路、班次、载重、场站条件与项目时间窗口"]
		],
		action: "提交车辆与线路工况"
	} : {
		h1: "关键任务不停，能源随任务抵达。",
		h1En: "Keep Critical Missions Running. Bring Energy with the Mission.",
		lead: "为极寒、高温、弱网、无人值守与应急任务提供可部署、可维护、可验证的能源保障。",
		stages: [
			["任务边界", "温度、海拔、功率、持续时间、重量、通信与维护窗口"],
			["产品成熟度", "量产、工程样件、联合验证与前瞻研发分级表达"],
			["联合验证", "在明确测试条件、责任边界与验收方法后进入项目阶段"]
		],
		action: "提交任务边界"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: kind.tag ?? "INTEGRATED SOLUTION",
			title: content.h1,
			en: content.h1En,
			lead: content.lead,
			image: kind.image,
			concept: kind.href.includes("mission") || kind.href.includes("wheel")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailNav, { locale }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section result-section",
			id: "overview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "从结果进入系统", "FROM OUTCOME TO SYSTEM") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "先定义可验证的客户目标，再配置系统与服务。", "Define a verifiable operating objective before configuring systems and services.") })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "architecture",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
				locale,
				items: content.stages.map(([title, body]) => ({
					title,
					en: title.toUpperCase(),
					body
				}))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "evidence",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidencePanel, { locale })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "consult",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
				locale,
				title: content.action
			})
		})
	] });
}
function ServiceDetail({ service, locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "LAIDIANLA 4S²",
			title: service.title,
			en: service.en,
			lead: service.body,
			image: service.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
			locale,
			items: [
				{
					title: "客户结果",
					en: "CUSTOMER RESULT",
					body: service.result
				},
				{
					title: "服务路径",
					en: "SERVICE PATH",
					body: "需求确认 → 调度 → 现场作业 → 复检签收 → 数据回传"
				},
				{
					title: "责任与 SLA",
					en: "ACCOUNTABILITY & SLA",
					body: "响应、工单、复盘与服务边界在项目合同和服务协议中明确。"
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
			locale,
			title: locale === "zh" ? "预约服务或服务商合作" : "Book Service or Partner"
		})
	] });
}
function Applications({ locale }) {
	const [sector, setSector] = (0, import_react.useState)("全部");
	const sectors = ["全部", ...Array.from(new Set(applications.map((item) => item.sector)))];
	const visible = applications.filter((item) => sector === "全部" || item.sector === sector);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		locale,
		eyebrow: "REFERENCE APPLICATIONS",
		title: "从场景约束，进入参考架构。",
		en: "From Scenario Constraints to Reference Architecture.",
		lead: "17 项典型应用先定义客户场景、约束条件、参考架构和适用边界，再进入工程评估。",
		image: asset("editorial/mobile-network.jpg")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "notice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "典型应用不是客户案例。", "Reference applications are not customer cases.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "客户案例只在获得授权、具备基线、实测结果和 M&V 后发布。", "Customer cases publish only with authorisation, baseline, measured results and M&V.") })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filter-row",
				"aria-label": "Application sector filter",
				children: sectors.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: item === sector ? "active" : "",
					onClick: () => setSector(item),
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "applications-grid",
				children: visible.map((application) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link(`/applications/${application.slug}`, locale),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: application.image,
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(applications.indexOf(application) + 1).padStart(2, "0") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: application.sector }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, application.title, application.en) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: application.focus }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [bilingual(locale, "查看参考架构", "View reference architecture"), " →"] })
						] })
					]
				}, application.slug))
			})
		]
	})] });
}
function News({ locale, slug }) {
	const item = slug ? newsItems.find((article) => article.slug === slug) : null;
	if (item) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: `${item.type} · ${item.date}`,
			title: item.title,
			en: item.en,
			lead: locale === "zh" ? "本文以公开、可核验的 V6 建设原则说明官网如何服务品牌、工程与转化。" : "This article explains how public, verifiable V6 principles support brand, engineering and conversion.",
			image: item.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "article section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: locale === "zh" ? "V6 不再以万能模板覆盖所有内容。解决方案、产品、平台服务、公司基地、编辑内容和转化入口采用不同的信息模型，并通过真实路由相互连接。" : "V6 no longer covers every subject with a universal template. Solutions, products, platform services, company locations, editorial content and conversion entry points use distinct information models linked through real routes." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: locale === "zh" ? "涉及规格、寿命、收益和客户结果的公开内容，必须附带产品版本、测试条件、项目边界和授权状态。" : "Public specifications, lifecycle statements, performance claims and customer outcomes require product version, test conditions, project boundary and authorisation status." })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, { locale })
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		locale,
		eyebrow: "NEWS & INSIGHTS",
		title: "了解 SEBO 的项目进展、客户结果、技术路线与组织动态。",
		en: "Follow SEBO Projects, Customer Outcomes, Technology and Organisation.",
		lead: "按内容类型浏览公司动态、工程洞察、典型应用与资料状态。",
		image: asset("official/engineering-team.png")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "news-grid",
			children: newsItems.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, {
				item: article,
				locale
			}, article.slug))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "content-hub",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/applications", locale),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "典型应用", "Reference Applications") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bilingual(locale, "17 项应用按行业与工况进入详情", "17 application routes by sector and condition") }),
						"→"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/cases", locale),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "客户案例", "Customer Cases") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bilingual(locale, "以授权、基线、实测和 M&V 为发布门槛", "Published with authorisation, baseline, measured results and M&V") }),
						"→"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/downloads", locale),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "下载中心", "Downloads") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bilingual(locale, "资料版本、语言与替代关系可管理", "Manage versions, languages and replacement status") }),
						"→"
					]
				})
			]
		})]
	})] });
}
function DetailNav({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "detail-nav",
		"aria-label": bilingual(locale, "页内导航", "On-page navigation"),
		children: [
			[
				"overview",
				"概览",
				"Overview"
			],
			[
				"architecture",
				"架构",
				"Architecture"
			],
			[
				"products",
				"产品",
				"Products"
			],
			[
				"applications",
				"应用",
				"Applications"
			],
			[
				"evidence",
				"数据与证据",
				"Data & Evidence"
			],
			[
				"consult",
				"咨询",
				"Enquiry"
			]
		].map(([id, zh, en]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `#${id}`,
			children: bilingual(locale, zh, en)
		}, id))
	});
}
function ProductDetailV6({ product, locale }) {
	const concept = product.slug.includes("wireless-power") || product.slug.includes("industrial-cortex");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: `${product.family} · ${product.code}`,
			title: product.title,
			en: product.en,
			lead: product.use,
			image: product.image,
			concept
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailNav, { locale }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section product-overview",
			id: "overview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "产品定位", "PRODUCT POSITIONING") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "从机理、接口与测试条件定义产品。", "Define the product through mechanism, interfaces and test conditions.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "所有规格均绑定产品版本、样品状态、测试条件与批准状态。页面不以族级极值替代单一 SKU，也不把设计目标写成已验证结果。", "Every specification is bound to a product version, sample status, test conditions and approval state. Family-level extremes never stand in for a specific SKU, and design targets are not presented as verified results.") })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: bilingual(locale, "公开状态", "PUBLIC STATUS") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: product.status ?? bilingual(locale, "工程咨询可用", "Engineering enquiry available") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/contact/technical", locale),
					children: [bilingual(locale, "技术交流", "Technical enquiry"), " →"]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			id: "architecture",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "MECHANISM & ARCHITECTURE",
				zh: "机理与架构",
				en: "Mechanism & Architecture",
				titleZh: "把能力放回系统边界。",
				titleEn: "Place capability inside system boundaries.",
				bodyZh: "产品能力需要与母排、BMS/EMS、热管理、保护、通信、安装和维护共同验证。",
				bodyEn: "Capability must be verified together with busbars, BMS/EMS, thermal management, protection, communications, installation and maintenance."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "products",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
				locale,
				items: [
					{
						title: "规格与接口",
						en: "SPECIFICATIONS & INTERFACES",
						body: "结构化字段展示版本、电压、功率/能量、尺寸、热管理、通信和安装条件。"
					},
					{
						title: "测试与认证",
						en: "TESTING & CERTIFICATION",
						body: "展示测试对象、样本量、温度、倍率、采样、EOL、实验室和批准状态。"
					},
					{
						title: "安装与服务",
						en: "INSTALLATION & SERVICE",
						body: "明确运输、吊装、消防、维护空间、质保、备件和责任边界。"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section claim-register",
			id: "evidence",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "CLAIMS REGISTER" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "数据有状态，主张有证据。", "Data has status. Claims have evidence.") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: [
					"已验证 Verified",
					"项目实测 Field Measured",
					"工程样件 Engineering Prototype",
					"设计目标 Design Target",
					"前瞻研发 Research"
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `claim-status status-${index}`,
					children: item
				}, item)) })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section related-products",
			id: "applications",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "RELATED CONTENT",
				zh: "关联应用",
				en: "Related Applications",
				titleZh: "从产品能力进入真实工况。",
				titleEn: "Move from product capability into real operating conditions.",
				bodyZh: "典型应用说明参考架构和评估条件，不代表已经完成的客户项目。",
				bodyEn: "Reference applications explain architecture and assessment conditions; they are not completed customer projects."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "related-links",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/applications", locale),
					children: [bilingual(locale, "查看 17 项典型应用", "View 17 Reference Applications"), " →"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link("/contact/product-selection", locale),
					children: [bilingual(locale, "提交选型需求", "Submit Selection Requirements"), " →"]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "consult",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
				locale,
				title: bilingual(locale, "获取选型建议或申请联合测试", "Get Selection Advice or Request Joint Testing")
			})
		})
	] });
}
function TechnologyV6({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "TECHNOLOGY & PRODUCTS",
			title: "从核心技术，到可交付产品。",
			en: "From Core Technology to Deliverable Products.",
			lead: bilingual(locale, "雷鸟是能量与功率心脏，PowerCore-SST/HVDC 是电力骨架，移动能源与无线传能构成触达网络，智鉴是可信决策与执行层。", "ThunderBird is the power-and-energy heart; PowerCore-SST/HVDC is the electrical backbone; mobile and wireless energy form the delivery network; Industrial Cortex provides trusted decision and execution."),
			image: asset("v6/smart-factory.webp")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "PHYSICAL FOUNDATION + TRUSTED INTELLIGENCE",
				zh: "物理底座 + 可信智能",
				en: "Physical Foundation + Trusted Intelligence",
				titleZh: "存与放、变与路由、现场触达、判断与执行。",
				titleEn: "Store, route, deploy, decide and execute.",
				bodyZh: "所有产品入口均有真实详情路由；规格只在批准后公开。",
				bodyEn: "Every product entry has a real detail route; specifications publish only after approval."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "product-grid",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product,
					locale
				}, product.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section product-matrix",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					locale,
					eyebrow: "PRODUCT FAMILIES",
					zh: "产品族与型号",
					en: "Product Families & Models",
					titleZh: "按产品族进入结构化详情。",
					titleEn: "Enter structured details by product family.",
					bodyZh: "每页都包含定位、机理、接口、测试、安装与咨询。",
					bodyEn: "Every page covers positioning, mechanism, interfaces, testing, installation and enquiry."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "matrix-heading",
					children: "ThunderBird"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-list",
					children: thunderbirdSkus.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link(`/${product.slug}`, locale),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: product.code }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.use }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
						]
					}, product.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "matrix-heading",
					children: "PowerCore-SST / HVDC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-list",
					children: sstProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link(`/${product.slug}`, locale),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: product.code }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.use }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
						]
					}, product.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "matrix-heading",
					children: "Mobile Energy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-list",
					children: mobileProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link(`/${product.slug}`, locale),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: product.code }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bilingual(locale, product.title, product.en) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
						]
					}, product.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "matrix-heading",
					children: "Industrial Cortex"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-list",
					children: cortexProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link(`/${product.slug}`, locale),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: product.code }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.use }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" })
						]
					}, product.slug))
				})
			]
		})
	] });
}
function LaidianlaV6({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "LAIDIANLA MOBILE 4S²",
			title: "让服务到车前，让工单到人手。",
			en: "Bring Service to the Vehicle and Work Orders to the Right Team.",
			lead: bilingual(locale, "来电啦移动 4S² 上门服务平台连接车辆、设备、站点、移动储充、服务人员、工单、资产与客户结果。", "Laidianla Mobile 4S² connects vehicles, equipment, sites, mobile energy, service teams, work orders, assets and customer outcomes."),
			image: asset("v6/mobile-service.webp")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				locale,
				eyebrow: "SERVICE PLATFORM",
				zh: "四项 Smart + 六个业务入口",
				en: "Four Smart Capabilities + Six Business Entries",
				titleZh: "续航、服务、审查、托管，连接场站、整车、补能、救援、资产与伙伴。",
				titleEn: "Sustaining, servicing, scrutiny and stewardship connect stations, vehicles, charging, emergency response, assets and partners.",
				bodyZh: "每个入口对应独立用户旅程、责任、SLA 与咨询字段。",
				bodyEn: "Each entry has its own journey, accountability, SLA and enquiry fields."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-grid",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link(`/${service.slug}`, locale),
					className: "service-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: service.image,
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: service.en }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: bilingual(locale, service.title, service.en) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.body }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [service.result, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })] })
					] })]
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "journey-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "统一服务旅程", "UNIFIED SERVICE JOURNEY") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: [
					"下单",
					"调度",
					"到场",
					"作业",
					"复检",
					"签收",
					"数据回传"
				].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), item] }, item)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: link("/contact/project", locale),
					children: bilingual(locale, "预约服务或车队接入", "Book Service or Connect a Fleet")
				})
			]
		})
	] });
}
function ApplicationDetailV6({ application, locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: `REFERENCE APPLICATION · ${application.sector}`,
			title: application.title,
			en: application.en,
			lead: application.focus,
			image: application.image,
			concept: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "notice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "这是典型应用，不是客户案例。", "This is a reference application, not a customer case.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "方案需要结合真实工况、批准产品、责任边界、测试与 M&V 完成工程化。", "The solution must be engineered against real operating conditions, approved products, responsibility boundaries, testing and M&V.") })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
			locale,
			items: [
				{
					title: "客户场景",
					en: "OPERATING SCENARIO",
					body: `${application.sector} · ${application.focus}`
				},
				{
					title: "约束条件",
					en: "CONSTRAINTS",
					body: "地点、负荷/车辆、时间窗口、温度、空间、通信、并网与维护条件需要现场确认。"
				},
				{
					title: "参考架构",
					en: "REFERENCE ARCHITECTURE",
					body: "按工况组合雷鸟、PowerCore-SST/HVDC、移动能源、智鉴与来电啦服务。"
				},
				{
					title: "产品选型",
					en: "PRODUCT SELECTION",
					body: "容量、功率、电压、接口、底盘、冷却与部署方式进入结构化选型。"
				},
				{
					title: "运营方式",
					en: "OPERATING MODEL",
					body: "调度、工单、服务、资产和责任按客户班次与现场组织。"
				},
				{
					title: "参考指标",
					en: "REFERENCE METRICS",
					body: "指标必须绑定基线、采样周期、测量方法、异常处理与证据状态。"
				},
				{
					title: "适用边界",
					en: "APPLICATION BOUNDARIES",
					body: "本页不构成产品承诺或项目报价，最终以技术协议、FAT/SAT 与 M&V 为准。"
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
			locale,
			title: bilingual(locale, "提交场景参数，进入工程评估", "Submit Scenario Parameters for Engineering Assessment")
		})
	] });
}
function AboutV6({ locale, page }) {
	const data = {
		company: {
			title: "从绿色微电网探索，走向高功率能源基础设施。",
			en: "From Green Microgrids to High-Power Energy Infrastructure.",
			lead: "SEBO 以三擎进入场景，以三硬件构筑底座，以智鉴和来电啦完成决策、执行与运营。",
			image: asset("v6/co-design.webp"),
			eyebrow: "COMPANY"
		},
		"rd-quality": {
			title: "以工程标准定义产品，以量产品质完成交付。",
			en: "Define Products by Engineering Standards. Complete Delivery with Manufacturing Quality.",
			lead: "从材料、电芯、功率电子到系统集成，以版本、测试、FAT/SAT、质量门和责任边界贯穿交付。",
			image: asset("v6/battery-lab.webp"),
			eyebrow: "R&D & QUALITY"
		},
		hangzhou: {
			title: "系统架构、研发测试与客户验证中心。",
			en: "System Architecture, R&D Testing and Customer Validation.",
			lead: "杭州总部承担系统架构、研发、SIL/HIL、EVT/DVT、客户验证和生态协同。",
			image: asset("v6/co-design.webp"),
			eyebrow: "HANGZHOU HEADQUARTERS"
		},
		qiantang: {
			title: "把电芯、功率电子和系统集成变成可交付装备。",
			en: "Turn Cells, Power Electronics and Integration into Deliverable Equipment.",
			lead: "钱塘基地面向电芯/PACK、功率电子、热管理、系统集成、质量与交付。",
			image: asset("v6/team-factory.webp"),
			eyebrow: "QIANTANG BASE",
			concept: true
		},
		culture: {
			title: "人是资本，不是成本。",
			en: "People Are Capital, Not Cost.",
			lead: "用户至上、持续创新、诚实守信、互利共赢；以合伙奋斗、学习驱动和客户成功形成组织能力。",
			image: asset("v6/team-outdoor.webp"),
			eyebrow: "CULTURE & VALUES"
		},
		wisdom: {
			title: "思想决定边界，行动形成结果。",
			en: "Ideas Set Boundaries. Action Creates Results.",
			lead: "以长期主义理解产业，以工程事实约束判断，以责任闭环推动行动。",
			image: asset("v6/team-office.webp"),
			eyebrow: "WISDOM & PRINCIPLES"
		}
	};
	if (page && data[page]) {
		const target = data[page];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				locale,
				eyebrow: target.eyebrow,
				title: target.title,
				en: target.en,
				lead: target.lead,
				image: target.image,
				concept: target.concept
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
				locale,
				items: [
					{
						title: "真实能力",
						en: "REAL CAPABILITY",
						body: target.lead
					},
					{
						title: "工程方法",
						en: "ENGINEERING METHOD",
						body: "以批准规格、测试、验收、质量门和责任边界形成可追溯依据。"
					},
					{
						title: "合作入口",
						en: "NEXT STEP",
						body: "参访、联合验证、生态合作或人才申请会进入对应责任窗口。"
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, { locale })
		] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "ABOUT SEBO",
			title: "SEBO，高功率时代的能源基础设施公司。",
			en: "SEBO — A High-Power Energy Infrastructure Company.",
			lead: bilingual(locale, "研发、测试、制造、系统集成与平台运营协同，为 AI 算力、重载运力与关键任务提供高功率能源基础设施。", "R&D, testing, manufacturing, integration and platform operations work together to support AI compute, heavy-duty mobility and mission-critical operations."),
			image: asset("v6/team-factory.webp"),
			concept: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section company-intro",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "公司定位", "COMPANY POSITIONING") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Super Energy Base Operations" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "三擎进入场景，三硬件构筑物理底座，智鉴连接判断与执行，来电啦完成运营服务。", "Three solution engines enter the operating scenario; three hardware families form the physical foundation; Industrial Cortex connects judgement and execution; Laidianla completes operating services.") })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "company-links",
				children: [
					["company", "公司"],
					["rd-quality", "研发与质量"],
					["hangzhou", "杭州总部"],
					["qiantang", "钱塘基地"],
					["culture", "组织与文化"],
					["wisdom", "大智慧·境界"]
				].map(([slug, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link(`/about/${slug}`, locale),
					children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}, slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
			locale,
			title: bilingual(locale, "参访交流、生态合作或加入 SEBO", "Visit, Partner or Join SEBO")
		})
	] });
}
function Careers({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "CAREERS",
			title: "与跨学科团队一起，建设高功率时代的能源基础设施。",
			en: "Build High-Power Energy Infrastructure with a Cross-Disciplinary Team.",
			lead: bilingual(locale, "我们寻找能把材料、电气、热管理、控制、软件、制造、服务与客户结果连接起来的人。", "We look for people who connect materials, electrical systems, thermal management, controls, software, manufacturing, service and customer outcomes."),
			image: asset("v6/team-outdoor.webp")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
			locale,
			items: [
				{
					title: "所有权",
					en: "OWNERSHIP",
					body: "对问题、边界、选择与结果负责。"
				},
				{
					title: "学习驱动",
					en: "LEARNING",
					body: "用实验、现场与复盘持续更新判断。"
				},
				{
					title: "客户成功",
					en: "CUSTOMER SUCCESS",
					body: "从客户任务和经营结果定义工程。"
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
			locale,
			title: bilingual(locale, "查看机会或提交人才申请", "Explore Opportunities or Submit an Application")
		})
	] });
}
function ContentChannel({ locale, type }) {
	const insight = type === "insights";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: insight ? "ENGINEERING INSIGHTS" : "MEDIA",
			title: insight ? "从物理边界、系统工程与经营结果理解高功率能源。" : "用真实现场、实机和工程师解释 SEBO。",
			en: insight ? "Understand High-Power Energy through Physical Boundaries, Systems Engineering and Business Outcomes." : "Explain SEBO through Real Sites, Real Equipment and Engineers.",
			lead: bilingual(locale, insight ? "内容中心将按作者、日期、证据状态与关联产品管理技术洞察。" : "媒体中心将以真实摄影、视频、演示与活动记录呈现公司。", insight ? "Insights are managed by author, date, evidence status and related products." : "The media centre presents the company through real photography, video, demonstrations and events."),
			image: asset(insight ? "v6/data-center.webp" : "v6/co-design.webp")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "notice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "内容正在建设。", "Content is being prepared.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "首批内容只发布已核验、已授权并完成中英文编辑的资料。", "The first release will include only verified, authorised and bilingual-edited content.") })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, { locale })
	] });
}
function DownloadsV6({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "RESOURCES",
			title: "资料中心正在建设。",
			en: "The Resources Centre Is Being Prepared.",
			lead: bilingual(locale, "资料将按版本、语言、权限、替代关系和失效状态管理。首期不公开具体文件。", "Resources will be managed by version, language, permission, replacement and expiry status. No files are published in the initial release."),
			image: asset("official/thunderbird-product.png")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "notice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "当前无公开下载。", "No public downloads are currently available.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "如需产品选型、技术交流或受控资料，请提交需求，由责任团队按范围提供。", "For product selection, technical exchange or controlled resources, submit a request and the responsible team will provide material within an approved scope.") })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {
			locale,
			title: bilingual(locale, "提交资料与技术需求", "Request Resources or Technical Exchange")
		})
	] });
}
function CasesV6({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			locale,
			eyebrow: "CUSTOMER CASES",
			title: "每一个案例，都有边界、方法和结果。",
			en: "Every Case Has Boundaries, Methods and Results.",
			lead: bilingual(locale, "客户案例仅在获得授权、具备改造前基线、项目实测与 M&V 后发布。", "Customer cases publish only with authorisation, a pre-project baseline, field measurements and M&V."),
			image: asset("v6/co-design.webp")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {
			locale,
			items: [
				{
					title: "授权",
					en: "AUTHORISATION",
					body: "客户名称或匿名规则、Logo、现场、人员与公开范围必须获得批准。"
				},
				{
					title: "基线与方法",
					en: "BASELINE & METHOD",
					body: "记录地点、设备、路线/负荷、环境、仪表、采样周期与异常处理。"
				},
				{
					title: "结果与签收",
					en: "RESULTS & SIGN-OFF",
					body: "同时给出绝对值、相对变化、限制、M&V 状态和报告编号。"
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "notice",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: bilingual(locale, "当前不以概念场景替代客户案例。", "Concept scenarios are never substituted for customer cases.") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "授权案例正在按 V6 证据门槛整理；在此之前请查看 17 项典型应用。", "Authorised cases are being prepared against the V6 evidence gate; view the 17 reference applications in the meantime.") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "button",
						href: link("/applications", locale),
						children: [bilingual(locale, "查看典型应用", "View Reference Applications"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
					})
				]
			})
		})
	] });
}
function ContactV6({ locale, preset = "项目咨询" }) {
	const [type, setType] = (0, import_react.useState)(preset);
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const choices = [
		"项目咨询",
		"技术交流",
		"产品选型",
		"渠道与生态",
		"供应链合作",
		"媒体与品牌",
		"参观总部/基地",
		"人才通道"
	];
	async function submit(event) {
		event.preventDefault();
		setSubmitting(true);
		setError("");
		const form = event.currentTarget;
		const data = new FormData(form);
		const payload = {
			name: String(data.get("name") || ""),
			company: String(data.get("company") || ""),
			phone: String(data.get("phone") || ""),
			email: String(data.get("email") || ""),
			interest: String(data.get("interest") || ""),
			contactType: type,
			message: String(data.get("message") || ""),
			locale,
			mode: "contact",
			source: window.location.pathname,
			consent: data.get("consent") === "on",
			marketing: data.get("marketing") === "on",
			website: String(data.get("website") || "")
		};
		try {
			const response = await fetch("/api/leads", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			});
			const result = await response.json();
			if (!response.ok || !result.id) throw new Error(result.error || "submission_failed");
			setSubmitted(result.id);
			form.reset();
		} catch {
			setError(bilingual(locale, "暂未提交成功，请稍后重试或改用官方联系方式。", "Submission did not complete. Please try again later or use an official contact channel."));
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		locale,
		eyebrow: "CONTACT & CONVERSION",
		title: "把您的场景交给正确的团队。",
		en: "Connect Your Requirement with the Right SEBO Team.",
		lead: bilingual(locale, "项目、技术、选型、渠道、供应链、媒体、参访与人才需求进入独立责任窗口。", "Project, technical, selection, channel, supplier, media, visit and career enquiries enter distinct accountable routes."),
		image: asset("v6/co-design.webp")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-section",
		id: "contact-form",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "责任分流", "ACCOUNTABLE ROUTING") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "提交后生成唯一编号。", "Every Submission Receives a Unique Reference.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "在线版本将线索保存到结构化数据库，并记录来源页、语言、同意状态和责任类型；真实 CRM/ATS 对接可在提供系统账号后完成。", "The online version stores enquiries in a structured database with source, language, consent and responsibility type. CRM/ATS integration can be completed when system access is available.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "contact-types",
				children: choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: choice === type ? "active" : "",
					onClick: () => {
						setType(choice);
						setSubmitted(null);
					},
					children: choice
				}, choice))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			className: "contact-form",
			onSubmit: submit,
			children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "success",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: bilingual(locale, "提交成功", "SUBMITTED") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: submitted }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "请保存编号。需求已进入对应责任窗口。", "Save this reference. Your requirement has entered the accountable route.") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSubmitted(null),
						children: bilingual(locale, "提交另一项需求", "Submit Another Request")
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "honeypot",
					name: "website",
					tabIndex: -1,
					autoComplete: "off",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "需求类型", "Enquiry type"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: type,
					onChange: (event) => setType(event.target.value),
					children: choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: choice }, choice))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "姓名", "Name"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "name",
					autoComplete: "name"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "公司/单位", "Company / organisation"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "company",
					autoComplete: "organization"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "联系电话", "Phone"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "phone",
					type: "tel",
					autoComplete: "tel"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "邮箱", "Email"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "email",
					type: "email",
					autoComplete: "email"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "关注方向", "Area of interest"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "interest",
					placeholder: bilingual(locale, "场景 / 产品 / 合作方向", "Scenario / product / partnership")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [bilingual(locale, "工况、产品或合作需求", "Operating condition, product or partnership requirement"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					name: "message",
					rows: 6
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "consent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "consent",
							type: "checkbox"
						}),
						" ",
						bilingual(locale, "我同意 SEBO 为处理本次需求保存并使用这些信息。", "I consent to SEBO storing and using this information to process my request.")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "consent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "marketing",
							type: "checkbox"
						}),
						" ",
						bilingual(locale, "我愿意接收相关产品与活动信息（可选）。", "I would like to receive relevant product and event information (optional).")
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-error",
					role: "alert",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: submitting,
					children: [submitting ? bilingual(locale, "正在提交…", "Submitting…") : bilingual(locale, "提交需求", "Submit Request"), " →"]
				})
			] })
		})]
	})] });
}
function EvidencePanel({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "evidence-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "工程证据", "ENGINEERING EVIDENCE") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: bilingual(locale, "用条件和方法定义结果。", "Define results with conditions and methods.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: bilingual(locale, "明确项目边界、设备、负载、温度与运行周期。", "Specify project boundary, equipment, load, temperature and operating period.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: bilingual(locale, "记录产品版本、系统结构、部署与责任范围。", "Record product version, system structure, deployment and responsibility scope.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: bilingual(locale, "通过仪表、采样周期、统计口径和签收形成 M&V。", "Use instrumentation, sampling, statistics and sign-off to form M&V.") })
		] })]
	});
}
function ContactBand({ locale, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-band",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: bilingual(locale, "下一步", "NEXT STEP") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title ?? bilingual(locale, "把您的场景交给正确的团队。", "Connect your requirement with the right SEBO team.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "提交项目、技术、合作、参访或人才需求，进入对应的责任窗口。", "Submit a project, technical, partnership, visit or career enquiry to the accountable route.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				href: link("/contact", locale),
				children: bilingual(locale, "前往联系入口", "Go to contact")
			})
		]
	});
}
function NotFound({ locale }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "not-found",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "404" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: bilingual(locale, "这个页面尚未建立。", "This page has not been established.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: bilingual(locale, "请通过主导航访问已建立的解决方案、产品、应用与内容页面。", "Use the main navigation to visit established solution, product, application and content pages.") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
				href: link("/", locale),
				children: bilingual(locale, "返回首页", "Back to home")
			})
		]
	});
}
function V6Site({ route }) {
	const locale = route === "en" || route.startsWith("en/") ? "en" : "zh";
	const key = route.replace(/^en\/?/, "").replace(/^\/+|\/+$/g, "");
	const view = (0, import_react.useMemo)(() => {
		if (!key) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, { locale });
		if (key === "solutions") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				locale,
				eyebrow: "INTEGRATED SOLUTIONS",
				title: "结果在前，系统可见，证据可核。",
				en: "Outcomes First. Systems Visible. Evidence Verifiable.",
				lead: bilingual(locale, "面向算力、重载和关键任务的三个场景入口，共享雷鸟、SST、移动能源、智鉴与来电啦底座。", "Three scenario entries for compute, heavy-duty operations and critical missions share ThunderBird, SST, mobile energy, Industrial Cortex and Laidianla capabilities."),
				image: asset("v6/platform-architecture.webp"),
				concept: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardGrid, {
				cards: solutions,
				locale,
				type: "solution"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, { locale })
		] });
		const solution = solutions.find((item) => item.href.slice(1) === key);
		if (solution) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionDetail, {
			kind: solution,
			locale
		});
		if (key === "technology") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnologyV6, { locale });
		const product = [
			...products,
			...mobileProducts,
			...cortexProducts,
			...thunderbirdSkus,
			...sstProducts
		].find((item) => item.slug === key);
		if (product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetailV6, {
			product,
			locale
		});
		if (key === "laidianla") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaidianlaV6, { locale });
		const service = services.find((item) => item.slug === key);
		if (service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetail, {
			service,
			locale
		});
		if (key === "applications") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Applications, { locale });
		const application = applications.find((item) => `applications/${item.slug}` === key);
		if (application) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationDetailV6, {
			application,
			locale
		});
		if (key === "news") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(News, { locale });
		if (key.startsWith("news/") && key !== "news/action") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(News, {
			locale,
			slug: key.slice(5)
		});
		if (key === "insights") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentChannel, {
			locale,
			type: "insights"
		});
		if (key === "media") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentChannel, {
			locale,
			type: "media"
		});
		if (key === "cases") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasesV6, { locale });
		if (key === "downloads") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadsV6, { locale });
		if (key === "about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutV6, { locale });
		if (key.startsWith("about/")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutV6, {
			locale,
			page: key.slice(6)
		});
		if (key === "careers") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Careers, { locale });
		if (key === "contact") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, { locale });
		if (key === "contact/technical") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "技术交流"
		});
		if (key === "contact/product-selection") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "产品选型"
		});
		if (key === "contact/channel") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "渠道与生态"
		});
		if (key === "contact/supplier") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "供应链合作"
		});
		if (key === "contact/media") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "媒体与品牌"
		});
		if (key === "contact/visit") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "参观总部/基地"
		});
		if (key === "careers/apply") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "人才通道"
		});
		if (key === "contact/project" || key.endsWith("/assessment") || key.endsWith("/start") || key.endsWith("/action")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactV6, {
			locale,
			preset: "项目咨询"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, { locale });
	}, [key, locale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "v6-site",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip-link",
				href: "#main-content",
				children: bilingual(locale, "跳到内容", "Skip to content")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				locale,
				route
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				lang: locale === "zh" ? "zh-CN" : "en",
				children: view
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { locale })
		]
	});
}
//#endregion
export { V6Site };

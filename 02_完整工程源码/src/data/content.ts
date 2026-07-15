export type Card = { title: string; en: string; body: string; image: string; href: string; tag?: string };
export type Product = { slug: string; code: string; title: string; en: string; family: string; use: string; image: string; status?: string };

export const asset = (name: string) => `/assets/${name}`;

export const solutions: Card[] = [
  { title: "算擎 Grid-to-GPU", en: "Grid-to-GPU", body: "以有效 GPU 小时为结果，把中压接入、HVDC、近端功率缓冲、液冷与可验证运营连接起来。", image: asset("v6/data-center.webp"), href: "/solutions/grid-to-gpu", tag: "PRODUCTIVE GPU HOURS" },
  { title: "悍擎 Grid-to-Wheel", en: "Grid-to-Wheel", body: "让车辆、能源节点、补能窗口、服务与资产管理围绕出勤率、吨公里和补能确定性协同运行。", image: asset("v6/mine-truck.webp"), href: "/solutions/grid-to-wheel", tag: "CONTINUOUS OPERATIONS" },
  { title: "极擎 Mission-to-Power", en: "Mission-to-Power", body: "面向弱网、极端环境、无人值守与应急任务，定义可部署、可维护、可验证的能源保障。", image: asset("v6/polar-autonomy.webp"), href: "/solutions/mission-to-power", tag: "MISSION COMPLETION" },
];

export const products: Product[] = [
  { slug: "technology/thunderbird", code: "THUNDERBIRD", title: "雷鸟超级电池", en: "ThunderBird Super Battery", family: "高功率电池平台", use: "统一能量与功率架构，公开规格只采用已批准 SKU 与完整测试条件。", image: asset("official/thunderbird-product.png"), status: "公开规格以批准 SKU 注册表为准" },
  { slug: "technology/powercore-sst", code: "POWERCORE-SST / HVDC", title: "PowerCore-SST / HVDC", en: "PowerCore-SST / HVDC", family: "可编程电力路由", use: "缩短中压入口到直流负载的路径，提供变换、隔离、保护与多端口协同。", image: asset("editorial/sst-hero.jpg"), status: "工程选型开放" },
  { slug: "technology/mobile-energy", code: "MOBILE ENERGY", title: "移动与固定储充", en: "Mobile & Fixed Energy Systems", family: "现场能源触达网络", use: "从 105kWh 移动补能到 5MWh 高吞吐节点，按工况、功率、电压与部署方式选型。", image: asset("v6/logistics-mobile.webp"), status: "8 款工程产品可咨询" },
  { slug: "technology/wireless-power", code: "WIRELESS POWER", title: "无线电力传输", en: "Wireless Power Transfer", family: "前沿能源触达", use: "面向特殊场景的研发路线；只展示验证状态与安全边界，不作量产承诺。", image: asset("editorial/network.jpg"), status: "前瞻研发 · 概念示意" },
  { slug: "technology/industrial-cortex", code: "INDUSTRIAL CORTEX", title: "智鉴 Industrial Cortex", en: "Industrial Cortex", family: "可信决策与执行中枢", use: "连接现场事实、AI 建议、授权动作、工单执行与结果确认。", image: asset("cortex/cortex-17.png"), status: "POC 与技术交流开放" },
];

export const mobileProducts: Product[] = [
  ["s1051pcl", "S1051PCL", "105kWh 轻量移动补能", "105 kWh Compact Mobile Energy Unit", "移动能源", "适用于地下停车场、社区及服务区的补能任务。", "editorial/mobile-service.jpg"],
  ["s2101pbl", "S2101PBL", "210kWh 通用厢式移动储充", "210 kWh Mobile Storage-Charging Vehicle", "移动能源", "适用于物流园、大巴与道路救援的工况评估。", "editorial/mobile-truck.jpg"],
  ["s2003ptt", "S2003PTT", "200kWh 皮卡/轻型工程保障", "200 kWh Pickup-Mounted Mobile Power", "移动能源", "面向矿区、戈壁、油田及应急保障。", "editorial/mobile-network.jpg"],
  ["s4301ppl", "S4301PPL", "430kWh 重载移动储充", "430 kWh Heavy-Duty Mobile Energy", "移动能源", "面向重卡、大巴与工程机械的补能窗口。", "editorial/heavy-operations.jpg"],
  ["s10003ppt", "S10003PPT", "1MWh 储能闪充站", "1 MWh Storage-Charging Station", "固定能源节点", "适用于物流园、矿区、港口的综合能源场景。", "editorial/storage-station.jpg"],
  ["s20003ppt", "S20003PPT", "2MWh 高倍率储充站", "2 MWh High-Rate Storage-Charging Station", "固定能源节点", "适用于大型园区、物流、矿区及港口。", "editorial/fixed-product-matrix.jpg"],
  ["s50001ppl", "S50001PPL", "5MWh 高吞吐能源节点", "5 MWh High-Throughput Energy Node", "固定能源节点", "面向超大型矿区、港口重载及微电网补能基地。", "editorial/super-station.jpg"],
  ["s3702pst", "S3702PST", "兆瓦闪充终端", "Megawatt Flash-Charging Terminal", "高功率场站", "用于站端边界、车辆兼容与液冷接口的工程评估。", "editorial/network.jpg"],
].map(([slug, code, title, en, family, use, image]) => ({ slug: `technology/mobile-energy/${slug}`, code, title, en, family, use, image: asset(image) }));

export const cortexProducts: Product[] = [
  { slug: "technology/industrial-cortex/cortexos", code: "CORTEXOS", title: "CortexOS", en: "CortexOS", family: "企业与工业 AI 运行时", use: "模型、Agent、权限、任务、工具、审计与回滚的受控运行。", image: asset("cortex/cortex-03.png") },
  { slug: "technology/industrial-cortex/cortexbox", code: "CORTEXBOX", title: "CortexBox", en: "CortexBox", family: "边缘推理与受控执行", use: "支持弱网、本地推理与受控现场执行。型号以最终批准清单为准。", image: asset("cortex/cortex-14.png") },
  { slug: "technology/industrial-cortex/industrial-cortex-pod", code: "INDUSTRIAL CORTEX POD", title: "Industrial Cortex Pod", en: "Industrial Cortex Pod", family: "现场决策执行中枢", use: "面向设备、质量、安全、能源和生产的工业现场协同。", image: asset("cortex/cortex-11.png") },
  { slug: "technology/industrial-cortex/evidence-hash", code: "EVIDENCE HASH", title: "Evidence Hash", en: "Evidence Hash", family: "证据与结果确认", use: "以可审计证据对象连接签收、工单与项目结果。", image: asset("cortex/cortex-08.png") },
];

export const thunderbirdSkus: Product[] = [
  ["tb-007-13ah", "TB-007-13Ah", "毫秒到秒级功率缓冲；不承担班次级主能量。"],
  ["tb-009-240ah", "TB-009-240Ah", "主动力域与分钟级/小时级能量承载；高频浪涌由缓冲层承担。"],
  ["tb-qs-08ah", "TB-QS-08Ah", "重量敏感、持续中高倍率、受控环境任务。"],
  ["tb-qs-08ah-cold", "TB-QS-08Ah 超低温型", "极寒放电与轻量任务；充电策略必须单独定义。"],
  ["tb-qs-04ah-lto", "TB-QS-04Ah 低温长循环型", "低温可充、长循环和高安全优先，能量密度不是第一目标。"],
].map(([slug, code, use]) => ({ slug: `technology/thunderbird/${slug}`, code, title: code, en: code, family: "雷鸟超级电池", use, image: asset("official/thunderbird-product.png"), status: "工程参考 · 公开前需冻结规格" }));

export const sstProducts: Product[] = [
  ["sepcs-135-m1", "SEPCS-135-M1", "模块化高功率变换单元，适合机架与系统级集成。"],
  ["sedd-60-m1", "SEDD-60-M1", "面向直流分配、隔离与受控保护的工程模块。"],
  ["sesst-10", "SESST-10", "面向高功率接入、隔离、HVDC 与多端口协同的 SST 系统。"],
].map(([slug, code, use]) => ({ slug: `technology/powercore-sst/${slug}`, code, title: code, en: code, family: "PowerCore-SST / HVDC", use, image: asset("editorial/sst.jpg"), status: "工程选型 · 参数按批准版本" }));

export const applications = [
  ["v2x-emergency", "V2X 应急临时供电", "V2X Emergency & Temporary Power", "城市 / 应急", "在电网、车辆与关键负荷之间建立可移动、可调度的临时供电窗口。", "v6/mobile-service.webp"],
  ["marine-port", "电动船舶与水上物流港口", "Electric Vessels & Logistics Ports", "港航", "岸电、移动储充、站端储能与港口作业窗口协同。", "editorial/network.jpg"],
  ["highway-service", "高速公路服务区综合能源", "Integrated Energy for Service Areas", "交通", "用固定节点承接基础负荷，移动储充应对潮汐峰值与应急。", "v6/city-charging-night.webp"],
  ["bus-hub", "公交枢纽与交通中转站", "Bus Hubs & Transport Interchanges", "公共交通", "围绕班次、回场窗口、并发功率和场站容量组织补能。", "v6/city-energy-hub.webp"],
  ["logistics-park", "集团物流园区综合能源", "Integrated Energy for Logistics Parks", "物流园", "车队、站端、峰谷电力与服务工单形成统一经营账本。", "v6/logistics-mobile.webp"],
  ["trunk-heavy", "干线重卡综合解决方案", "Long-Haul Heavy Truck Solution", "干线物流", "以线路、班次、载重、补能网络和 TCO 定义运营方案。", "v6/mine-truck.webp"],
  ["remote-offgrid", "偏远工地及边防哨所离网供能", "Off-Grid Power for Remote Worksites", "极端 / 离网", "在弱网、宽温、通信受限和长维护窗口下维持任务连续性。", "v6/polar-base.webp"],
  ["rural-agri", "乡村微电网与农业机械电动化", "Rural Microgrids & Agricultural Electrification", "农业", "分布式能源、农业负荷与移动补能按季节和作业窗口配置。", "editorial/mobile-network.jpg"],
  ["medical-backup", "医疗设施绿色备用与移动应急供电", "Healthcare Backup & Emergency Power", "医疗 / 应急", "以关键负荷、切换时间、持续时长和维护制度定义备用边界。", "editorial/storage-station.jpg"],
  ["airport-rail", "机场与高铁站综合能源", "Integrated Energy for Airports & Rail", "交通枢纽", "多类型负荷、冗余路径、地勤车辆与应急保障协同。", "v6/city-energy-hub.webp"],
  ["tourism", "景区综合能源", "Integrated Energy for Tourism", "文旅", "移动补能、低噪运行与节假日峰值响应。", "editorial/mobile-service.jpg"],
  ["data-center-backup", "数据中心绿色备用电源", "Green Backup Power for Data Centres", "算力", "近端缓冲、UPS/BESS 与可验证能源路径共同保障有效 GPU 小时。", "v6/data-center.webp"],
  ["mine-port-heavy", "矿山与港口重载运输综合能源", "Mining & Port Heavy-Duty Energy", "矿山 / 港口", "以出勤率、吨公里、补能确定性和服务闭环定义系统。", "v6/mine-energy.webp"],
  ["plateau-border", "高原边防与极端节点微电网", "High-Altitude Border Microgrid", "极端 / 边防", "温度、海拔、重量、通信与维护窗口共同决定任务能源。", "v6/extreme-robotics.webp"],
  ["smart-park-campus", "智慧工业园区与校园微电网", "Smart Industrial Park & Campus Microgrid", "园区", "源网荷储、功率路由、调度与服务形成可扩展底座。", "v6/smart-factory.webp"],
  ["retrofit-mine-truck", "矿卡重卡油改电综合方案", "Diesel-to-Electric Mine Truck Retrofit", "矿山", "车辆适配、道路坡度、工况循环、补能窗口与 TCO 联合验证。", "v6/mine-truck.webp"],
  ["100x70t-station", "100 台 70T 新能源重卡微电网能源站", "100 × 70T Fleet Energy Station", "重载车队", "百车调度、站端功率、储充协同与服务 SLA 一体设计。", "v6/mine-energy.webp"],
].map(([slug, title, en, sector, focus, image]) => ({ slug, title, en, sector, focus, image: asset(image) }));

export const services = [
  ["smart-sustaining", "Smart Sustaining", "智能续航保障", "按班次组织移动补能、固定节点、调度与应急供电。", "续航与供能连续性"],
  ["smart-servicing", "Smart Servicing", "智能服务", "将诊断、保养、维修、备件、技师与工单 SLA 组织为可追溯服务。", "可追踪维护"],
  ["smart-scrutiny", "Smart Scrutiny", "智能审查", "围绕车况、电池、安全、隐患、复检与证据形成风险识别闭环。", "风险与复检证据"],
  ["smart-stewardship", "Smart Stewardship", "智能托管", "通过 Battery Passport、SOH、质保、资产和 TCO 管理生命周期。", "资产健康与责任"],
  ["super-truck-station", "Super Truck Station", "超级卡站", "以固定节点承载高频需求，以移动服务覆盖不确定与应急窗口。", "场站吞吐与服务协同"],
  ["vehicle-ai", "Vehicle AI", "整车 AI", "从车辆、电池、轮胎与设备状态形成建议、工单、授权与签收闭环。", "车况可见与责任闭环"],
  ["mobile-charging", "Mobile Charging", "移动补能", "一个入口把电送到车辆需要的地点，并记录调度、作业与签收。", "能源按需抵达"],
  ["emergency", "Emergency Response", "应急救援", "在车辆停下前后接住能源与服务，按工单协调补能、诊断和救援。", "恢复时间与工单闭环"],
  ["battery-bank", "Battery Bank", "电池银行", "把电池身份、健康、质保、调度和残值纳入可运营的资产账本。", "电池全生命周期运营"],
  ["partner-network", "Partner Network", "合作网络", "让本地服务能力进入统一标准、质量、培训、工单和结算体系。", "标准化生态交付"],
].map(([slug, en, title, body, result], index) => ({ slug: `laidianla/${slug}`, en, title, body, result, image: asset(["v6/mobile-service.webp", "official/engineering-team.png", "editorial/energyos-lab.jpg", "editorial/platform-hero.jpg", "v6/mine-energy.webp", "cortex/cortex-12.webp", "v6/logistics-mobile.webp", "editorial/mobile-truck.jpg", "official/thunderbird-product.png", "v6/team-factory.webp"][index]) }));

export const newsItems = [
  { slug: "v6-blueprint", date: "2026.07.13", type: "网站更新", title: "SEBO V6：围绕客户结果、工程证据与真实行动重建数字门面", en: "SEBO V6: rebuilt around customer outcomes, engineering evidence and real action", image: asset("v6/co-design.webp") },
  { slug: "engineering-evidence", date: "2026.07.13", type: "工程洞察", title: "为什么每个高功率主张都需要版本、条件、状态与证据", en: "Why every high-power claim needs a version, conditions, status and evidence", image: asset("v6/battery-lab.webp") },
  { slug: "application-framework", date: "2026.07.13", type: "应用方法", title: "17 项典型应用：先定义工况与边界，再进入工程评估", en: "17 reference applications: define conditions and boundaries before engineering assessment", image: asset("v6/mine-energy.webp") },
];

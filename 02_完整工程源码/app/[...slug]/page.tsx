import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { V6Site } from "../V6Site";
import { isPublicRoute } from "../site-routes";

type Props = { params: Promise<{ slug: string[] }> };

const titleMap: Record<string, string> = {
  solutions: "三擎综合解决方案",
  "solutions/grid-to-gpu": "算擎 Grid-to-GPU",
  "solutions/grid-to-wheel": "悍擎 Grid-to-Wheel",
  "solutions/mission-to-power": "极擎 Mission-to-Power",
  technology: "技术与产品",
  "technology/thunderbird": "雷鸟超级电池",
  "technology/powercore-sst": "PowerCore-SST",
  "technology/mobile-energy": "移动储充装备",
  "technology/industrial-cortex": "智鉴 Industrial Cortex",
  "technology/wireless-power": "无线电力传输",
  laidianla: "来电啦移动 4S² 上门服务平台",
  applications: "17 项典型应用",
  news: "新闻、案例与工程知识",
  about: "关于 SEBO",
  contact: "联系与合作",
  "contact/project": "项目咨询",
  "contact/technical": "技术交流",
  "contact/product-selection": "产品选型",
  "contact/channel": "渠道与生态",
  "contact/supplier": "供应链合作",
  "contact/media": "媒体与品牌",
  "contact/visit": "总部与基地参访",
  insights: "工程洞察",
  media: "视频与媒体",
  careers: "加入 SEBO",
  downloads: "资料下载中心",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = slug.join("/");
  const bare = route.replace(/^en\/?/, "");
  const english = route === "en" || route.startsWith("en/");
  const fallbackTitle = bare.split("/").at(-1)?.replaceAll("-", " ").toUpperCase() || "SEBO";
  const title = titleMap[bare] ?? fallbackTitle;
  return {
    title: `${title} | SEBO`,
    description: english ? `${title}: SEBO high-power energy infrastructure for AI compute, heavy-duty mobility and mission-critical operations.` : `${title}：SEBO 高功率能源基础设施的产品、工程边界、证据状态与咨询入口。`,
    alternates: {
      canonical: `/${route}`,
      languages: english ? { "zh-CN": `/${bare}`, en: `/${route}` } : { "zh-CN": `/${route}`, en: `/en/${route}` },
    },
  };
}

export default async function RoutedPage({ params }: Props) {
  const { slug } = await params;
  const route = slug.join("/");
  if (!isPublicRoute(route)) notFound();
  return <V6Site route={route} />;
}

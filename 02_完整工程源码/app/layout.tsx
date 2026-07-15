import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./v6.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "www.sebo.org.cn";
  const proto = incoming.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${proto}://${host}`);
  const og = new URL("/og.png", base).toString();
  return {
    metadataBase: base,
    title: { default: "SEBO | Electricity, Free as Air.", template: "%s | SEBO" },
    description: "SEBO — A High-Power Energy Infrastructure Company.",
    applicationName: "SEBO Official Website",
    keywords: ["SEBO", "高功率能源基础设施", "Grid-to-GPU", "Grid-to-Wheel", "Mission-to-Power", "ThunderBird", "PowerCore-SST", "Industrial Cortex", "来电啦4S²"],
    robots: { index: true, follow: true },
    openGraph: { title: "SEBO | Electricity, Free as Air.", description: "High-power energy infrastructure for AI compute, heavy-duty mobility and mission-critical operations.", type: "website", locale: "zh_CN", alternateLocale: ["en_US"], images: [{ url: og, width: 1200, height: 630, alt: "SEBO high-power energy infrastructure" }] },
    twitter: { card: "summary_large_image", title: "SEBO | Electricity, Free as Air.", description: "High-power energy infrastructure for AI compute, heavy-duty mobility and mission-critical operations.", images: [og] },
    icons: { icon: "/favicon.svg" },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07111f", colorScheme: "light dark" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SEBO",
  legalName: "Super Energy Base Operations",
  url: "https://www.sebo.org.cn",
  slogan: "Electricity, Free as Air.",
  description: "A High-Power Energy Infrastructure Company",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}

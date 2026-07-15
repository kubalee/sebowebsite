import type { Metadata } from "next";
import { V6Site } from "./V6Site";

export const metadata: Metadata = {
  title: "SEBO | 让电像空气一样自由",
  description: "SEBO 构建面向 AI 算力、重载运力与关键任务的高功率能源基础设施。",
};

export default function HomePage() {
  return <V6Site route="" />;
}

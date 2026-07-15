import Link from "next/link";

export default function NotFoundPage() {
  return <main className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>这个页面不存在，或内容尚未获准发布。</h1><p>请通过主导航继续浏览解决方案、技术产品、典型应用与关于 SEBO。</p><form action="/news" method="get"><label><span className="sr-only">搜索内容</span><input name="q" placeholder="搜索新闻与工程知识" /></label><button className="button" type="submit">搜索</button></form><Link className="button" href="/">返回首页</Link></main>;
}

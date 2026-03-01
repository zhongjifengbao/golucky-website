import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoLucky 喜运达 - 数字化跨境物流服务商",
  description: "连接中国与东南亚的智能物流网络。提供海运专线、海外仓储、空快小包一站式解决方案。覆盖菲律宾、马来西亚、泰国等6国。",
  keywords: "跨境物流,东南亚物流,海外仓,海运专线,跨境电商,GoLucky,喜运达",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

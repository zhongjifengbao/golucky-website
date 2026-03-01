"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "海运专线", href: "#" },
    { name: "海外仓储", href: "#" },
    { name: "空快小包", href: "#" },
    { name: "科技系统", href: "#" },
  ],
  company: [
    { name: "关于我们", href: "#" },
    { name: "新闻动态", href: "#" },
    { name: "加入我们", href: "#" },
    { name: "联系我们", href: "#" },
  ],
  support: [
    { name: "帮助中心", href: "#" },
    { name: "API文档", href: "#" },
    { name: "服务条款", href: "#" },
    { name: "隐私政策", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] border-t border-white/10">
      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              准备好开启您的
              <span className="gradient-text">跨境物流之旅</span>了吗？
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              立即联系我们，获取专属物流解决方案，让出海更简单
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:nanqiang@goluckyvip-inc.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full font-semibold transition-all glow-blue"
              >
                立即咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:13859989651"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                138-5998-9651
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">GoLucky</h3>
              <p className="text-[#94A3B8] text-sm mb-4">
                数字化跨境物流服务商<br />
                连接中国与东南亚的智能物流网络
              </p>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <MapPin className="w-4 h-4" />
                <span>杭州 · 深圳 · 广州</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">产品服务</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm">
              © 2026 GoLucky 喜运达. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors">
                服务条款
              </Link>
              <Link href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#94A3B8]">语言:</span>
                <select className="bg-transparent text-sm text-white border-none outline-none cursor-pointer">
                  <option value="zh">中文</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

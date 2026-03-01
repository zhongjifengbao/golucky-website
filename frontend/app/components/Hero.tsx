"use client";

import { motion } from "framer-motion";
import { Globe, Ship, Warehouse, Plane, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#0066FF] rounded-full blur-[150px] opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Globe className="w-4 h-4 text-[#00D4FF]" />
          <span className="text-sm text-[#94A3B8]">覆盖东南亚6国 · 服务10,000+卖家</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          连接中国与东南亚的
          <br />
          <span className="gradient-text">智能物流网络</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-10"
        >
          GoLucky 喜运达数字化跨境物流平台，提供海运专线、海外仓储、空快小包一站式解决方案。
          <br className="hidden sm:block" />
          实时追踪 · 稳定履约 · 降低出海成本
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066FF] hover:bg-[#0066FF]/90 rounded-full font-semibold transition-all glow-blue"
          >
            立即咨询
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all"
          >
            查看服务
          </Link>
        </motion.div>

        {/* Country Flags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { code: "PH", name: "菲律宾" },
            { code: "MY", name: "马来西亚" },
            { code: "TH", name: "泰国" },
            { code: "ID", name: "印尼" },
            { code: "VN", name: "越南" },
            { code: "SG", name: "新加坡" },
          ].map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
            >
              <span className="text-2xl">
                {country.code === "PH" && "🇵🇭"}
                {country.code === "MY" && "🇲🇾"}
                {country.code === "TH" && "🇹🇭"}
                {country.code === "ID" && "🇮🇩"}
                {country.code === "VN" && "🇻🇳"}
                {country.code === "SG" && "🇸🇬"}
              </span>
              <span className="text-sm text-[#94A3B8]">{country.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"
          />
        </div>
      </motion.div>
    </section>
  );
}

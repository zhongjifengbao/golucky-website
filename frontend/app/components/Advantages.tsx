"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Shield, DollarSign, MapPin, Smartphone, Headphones,
  Check
} from "lucide-react";

const advantages = [
  {
    icon: Cpu,
    title: "数字化系统",
    description: "自研物流查询系统与ERP，全程可视化追踪，数据实时同步",
  },
  {
    icon: Shield,
    title: "稳定履约",
    description: "与各大船司直接战略合作，舱位稳定，船期准点率高",
  },
  {
    icon: DollarSign,
    title: "成本优化",
    description: "规模化运营降低成本，为中小卖家提供更具竞争力的价格",
  },
  {
    icon: MapPin,
    title: "海外布局",
    description: "东南亚6国本地仓储+配送网络，实现真正意义上的本地化服务",
  },
  {
    icon: Smartphone,
    title: "智能工具",
    description: "API开放接口，支持ERP对接，自动化订单处理",
  },
  {
    icon: Headphones,
    title: "本地服务",
    description: "东南亚本土专业团队，熟悉当地政策与营商环境",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-[#0A0F1C] relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            六大核心优势
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            为什么选择 GoLucky 喜运达作为您的跨境物流合作伙伴
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0066FF]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>

              {/* Description */}
              <p className="text-[#94A3B8] leading-relaxed">
                {advantage.description}
              </p>

              {/* Check mark */}
              <div className="mt-4 flex items-center gap-2 text-[#00D4FF]">
                <Check className="w-5 h-5" />
                <span className="text-sm">已验证</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

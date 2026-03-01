"use client";

import { motion } from "framer-motion";
import { Ship, Warehouse, Plane, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "海运专线",
    subtitle: "Sea Freight",
    description: "与各大航线船司达成战略合作，直接订舱，舱位稳定。覆盖菲律宾、马来西亚、泰国等东南亚主要港口。",
    features: ["舱位保障", "稳定船期", "双清到门"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Warehouse,
    title: "海外仓储",
    subtitle: "Overseas Warehouse",
    description: "在菲律宾、马来西亚、泰国等东南亚国家设立仓储配套服务，总面积超50,000㎡，提供一站式仓储解决方案。",
    features: ["50,000㎡仓储", "智能管理", "本地配送"],
    gradient: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: Plane,
    title: "空快小包",
    subtitle: "Air Express",
    description: "拉美空快小包板块，依托自建稳定渠道，全程可控，高效派送。适合小件、高价值、时效敏感型货物。",
    features: ["全程可控", "高效派送", "时效稳定"],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: Code,
    title: "科技系统",
    subtitle: "Tech Platform",
    description: "自研数字化物流查询系统、ERP系统，致力于打造智能化、可视化物流系统，全程可追踪、可预测。",
    features: ["实时追踪", "API对接", "数据可视化"],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0F1C] relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            全方位物流解决方案
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            海运、仓储、空快、科技四位一体，为您的跨境业务保驾护航
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-[#94A3B8] mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-white/5 text-sm text-[#94A3B8] border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <button className="inline-flex items-center gap-2 text-[#0066FF] font-medium group/btn">
                  了解更多
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Globe, Warehouse, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "服务卖家",
    description: "累计服务跨境电商卖家",
  },
  {
    icon: Globe,
    value: 6,
    suffix: "国",
    label: "覆盖国家",
    description: "东南亚主要市场全覆盖",
  },
  {
    icon: Warehouse,
    value: 50000,
    suffix: "㎡",
    label: "仓储面积",
    description: "海外仓储总面积",
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "履约率",
    description: "稳定可靠的物流服务",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {value >= 1000 ? displayValue.toLocaleString() : displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#111827] to-[#0A0F1C]" />

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
          />
        ))}
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
          <span className="inline-block px-4 py-1 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-medium mb-4">
            Data & Facts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            数据见证实力
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            持续增长的业务数据，印证我们的专业与可靠
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#0066FF]" />
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm text-[#94A3B8]">{stat.description}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#0066FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Zap } from 'lucide-react';

const steps = [
    {
        num: "01",
        title: 'Scan Project',
        desc: 'Deep inspection of files building a precise dependency context.',
        icon: <Search className="text-[#00E5FF] h-6 w-6" />,
    },
    {
        num: "02",
        title: 'Plan Changes',
        desc: 'Generates structured diffs directly to ensure accuracy.',
        icon: <PenTool className="text-[#00E5FF] h-6 w-6" />,
    },
    {
        num: "03",
        title: 'Apply Patches',
        desc: 'Automatically refactors logic or fixes bugs, verifying test runs.',
        icon: <Zap className="text-[#00E5FF] h-6 w-6" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="relative px-6 py-24 md:py-32 bg-[#0A0D14]/80 border-y border-gray-800/60 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg md:text-xl">
                        From natural language to applied commit in three simple steps.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 lg:gap-8">
                    {/* Connector line on desktop */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent -z-10"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="group flex flex-col items-center flex-1 text-center"
                        >
                            <div className="relative mb-6 h-16 w-16 flex items-center justify-center rounded-full bg-[#161B22] border-[3px] border-gray-800 group-hover:border-[#00E5FF]/60 transition-colors shadow-lg">
                                <span className="absolute -top-3 -left-3 text-xs font-bold text-gray-600 font-mono">{step.num}</span>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

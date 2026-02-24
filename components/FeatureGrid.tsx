"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, GitCommitVertical, Command, RefreshCw, FolderSearch } from 'lucide-react';

const features = [
    {
        title: 'Intelligent Planning',
        desc: 'Scans codebase, builds minimal context, sends clear plans to model for precise patches.',
        icon: <Network className="text-[#00E5FF] h-6 w-6" />,
    },
    {
        title: 'Self-Healing Loop',
        desc: 'Auto-runs tests or linters, catches failures, and retries with immediate fixes.',
        icon: <RefreshCw className="text-purple-400 h-6 w-6" />,
    },
    {
        title: 'Persistent Memory',
        desc: 'Session context and project preferences stay saved. Aligns with your work continuously.',
        icon: <Zap className="text-yellow-400 h-6 w-6" />,
    },
    {
        title: 'Diff Previews',
        desc: 'Review exact patch applied. No surprise code changes and drift before applying.',
        icon: <GitCommitVertical className="text-blue-400 h-6 w-6" />,
    },
    {
        title: 'Deep File Search',
        desc: 'Greps instantly across your workspace to gather exact references to inject into prompt.',
        icon: <FolderSearch className="text-green-400 h-6 w-6" />,
    },
    {
        title: 'Terminal Native',
        desc: 'Full interactive TUI directly integrated inside your terminal flow, zero context switch.',
        icon: <Command className="text-pink-400 h-6 w-6" />,
    },
];

export default function FeatureGrid() {
    return (
        <section className="relative px-6 py-24 md:py-32">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">
                    Features that <span className="text-[#00E5FF]">accelerate</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative rounded-2xl border border-gray-800 bg-[#161B22]/60 p-6 md:p-8 backdrop-blur-md transition-all hover:border-[#00E5FF]/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] overflow-hidden"
                        >
                            {/* Neon accent line at top */}
                            <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#00E5FF] transition-all duration-300 group-hover:w-full"></div>

                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 shadow-inner group-hover:border-[#00E5FF]/30 transition-colors">
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feat.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

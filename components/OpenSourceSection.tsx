"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Unlock, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: 'MIT Licensed',
        desc: 'Completely free for personal and commercial projects.',
        icon: <ShieldCheck className="h-6 w-6 text-[#00E5FF]" />,
    },
    {
        title: 'No Paywalls',
        desc: 'Every feature is unlocked out of the box. No hidden premium tiers.',
        icon: <Unlock className="h-6 w-6 text-[#00E5FF]" />,
    },
    {
        title: 'Zero Backend Lock-in',
        desc: 'Runs entirely locally on your machine. Bring your own API key.',
        icon: <Globe className="h-6 w-6 text-[#00E5FF]" />,
    },
    {
        title: 'Transparent Code',
        desc: 'Verify the source code yourself. Community contributions welcome.',
        icon: <Github className="h-6 w-6 text-[#00E5FF]" />,
    },
];

export default function OpenSourceSection() {
    return (
        <section className="relative px-6 py-24 md:py-32 border-t border-gray-800/60 bg-[#0B0E17]">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Open Source & Free
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    We believe the best developer tools should be accessible to everyone.
                    ClawCode is built to empower the community without restrictions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group flex flex-col items-center p-6 rounded-2xl bg-[#161B22]/60 border border-gray-800/80 hover:border-[#00E5FF]/40 transition-colors"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 shell-inner group-hover:bg-[#00E5FF]/10 transition-colors">
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feat.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <motion.a
                        href="https://github.com/sarhan44/clawcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 rounded-xl bg-gray-100 text-gray-900 px-8 py-4 text-sm font-semibold shadow-[0_4px_14px_0_rgba(255,255,255,0.4)] transition-all hover:bg-white hover:shadow-[0_6px_20px_0_rgba(255,255,255,0.6)]"
                    >
                        <Github className="h-5 w-5" />
                        <span>Star on GitHub</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

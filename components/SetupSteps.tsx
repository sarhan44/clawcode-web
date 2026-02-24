"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Settings } from 'lucide-react';

const steps = [
    {
        title: 'Install',
        desc: 'Run the install script to download the latest binary directly.',
        icon: <Terminal className="h-5 w-5 text-[#00E5FF]" />,
        code: 'curl -fsSL https://raw.githubusercontent.com/sarhan44/clawcode/main/install.sh | bash',
    },
    {
        title: 'Run',
        desc: 'Launch the agent in any repository directory.',
        icon: <Play className="h-5 w-5 text-purple-400" />,
        code: 'clawcode',
    },
    {
        title: 'Configure',
        desc: 'Select your preferred LLM provider (Azure, Groq, Gemini) and input your API key via the interactive TUI flow.',
        icon: <Settings className="h-5 w-5 text-gray-400" />,
        code: null,
    },
];

export default function SetupSteps() {
    return (
        <section className="relative px-6 py-24 md:py-32 bg-[#0B0E17]">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Get started in 3 steps
                    </h2>
                    <p className="text-lg text-gray-400">Zero configuration needed. Start building in under a minute.</p>
                </div>

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative before:absolute before:left-[1.35rem] md:before:left-[1.4rem] before:top-14 before:block before:h-full before:w-[2px] before:bg-gray-800 last:before:hidden"
                        >
                            <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#161B22] border-[1px] border-gray-700 shadow-md">
                                {step.icon}
                            </div>

                            <div className="flex-1 w-full rounded-2xl border border-gray-800/80 bg-[#161B22]/40 p-6 backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    <span className="text-gray-500 mr-2">Step {idx + 1}</span> {step.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{step.desc}</p>
                                {step.code && (
                                    <div className="font-mono text-sm p-4 rounded-xl bg-[#0A0D14] border border-gray-800 text-gray-300 relative group overflow-hidden">
                                        <span className="text-gray-600 select-none mr-3">$</span>
                                        <code className="select-all break-all text-xs text-[#00E5FF]">{step.code}</code>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

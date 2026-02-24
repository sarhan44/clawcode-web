"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, GitBranch, Brain, TerminalSquare } from 'lucide-react';

const highlights = [
    {
        icon: <TerminalSquare className="h-5 w-5 text-[#00E5FF]" />,
        text: 'Runs entirely from your terminal — no browser, no IDE plugin required.',
    },
    {
        icon: <Cpu className="h-5 w-5 text-purple-400" />,
        text: 'Supports Groq, Gemini, Azure OpenAI, OpenRouter, and local models.',
    },
    {
        icon: <GitBranch className="h-5 w-5 text-green-400" />,
        text: 'Generates structured diffs you can preview before applying.',
    },
    {
        icon: <Brain className="h-5 w-5 text-yellow-400" />,
        text: 'Maintains persistent project memory across sessions.',
    },
];

export default function WhatIsClawCode() {
    return (
        <section
            id="what-is-clawcode"
            className="relative px-6 py-24 md:py-32 bg-[#0A0D14]/80 border-t border-gray-800/60"
        >
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        What is ClawCode?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        ClawCode is an open-source AI coding agent that runs natively in your terminal.
                        It connects to multiple LLM providers — including Groq, Gemini, Azure OpenAI,
                        and OpenRouter — to help you build, debug, and refactor code using structured patches.
                        Unlike cloud-based coding tools, ClawCode runs locally and maintains persistent
                        context about your project, so it gets better the more you use it.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-[#161B22]/50 border border-gray-800/60"
                        >
                            <div className="mt-0.5 shrink-0">{item.icon}</div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

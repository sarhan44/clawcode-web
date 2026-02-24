"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'What is ClawCode?',
        answer:
            'ClawCode is an open-source, terminal-native AI coding agent built with TypeScript. It connects to multiple LLM providers (Groq, Gemini, Azure OpenAI, OpenRouter) to help you plan, generate, and apply structured code patches — all from the CLI. It features persistent memory, diff previews, and a beautiful TUI interface.',
    },
    {
        question: 'Is ClawCode free?',
        answer:
            'Yes, ClawCode is completely free and open-source under the MIT license. There are no paywalls, no premium tiers, and no hidden limits. You bring your own API key for the AI provider of your choice.',
    },
    {
        question: 'Does ClawCode support multiple AI providers?',
        answer:
            'Absolutely. ClawCode supports Groq, Google Gemini, Azure OpenAI, and OpenRouter. You can switch providers at any time through the interactive TUI, and you can configure multiple providers simultaneously.',
    },
    {
        question: 'Can I run open-source models locally with ClawCode?',
        answer:
            'Yes. Since ClawCode supports OpenRouter and any OpenAI-compatible endpoint, you can connect it to locally-hosted models via tools like Ollama, LM Studio, or vLLM. This means you can run fully private, offline AI coding sessions.',
    },
    {
        question: 'How is ClawCode different from Claude Code?',
        answer:
            'ClawCode is fully open-source (MIT licensed), runs locally without any backend dependency, and supports multiple AI providers — not just one. Unlike Claude Code, ClawCode gives you full control over your data, model choice, and workflow. It also features persistent project memory and structured diff previews for safe code changes.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id="faq"
            className="relative px-6 py-24 md:py-32 bg-[#0B0E17] border-t border-gray-800/60"
            itemScope
            itemType="https://schema.org/FAQPage"
        >
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400">
                        Everything you need to know about ClawCode.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                            className="rounded-xl border border-gray-800 bg-[#161B22]/60 backdrop-blur-sm overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === idx ? null : idx)
                                }
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span
                                    itemProp="name"
                                    className="text-white font-semibold text-base md:text-lg pr-4"
                                >
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p
                                    itemProp="text"
                                    className="px-6 pb-5 text-gray-400 leading-relaxed text-sm md:text-base"
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function BuiltBy() {
    return (
        <section className="relative px-6 py-16 md:py-24 border-t border-gray-800/60 bg-[#0B0E17]/80">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="h-14 w-14 rounded-full border-2 border-[#00E5FF]/40 bg-gray-900 overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                        <img
                            src="https://avatars.githubusercontent.com/u/102715600?s=96&v=4"
                            alt="Sarhan Khan"
                            className="h-full w-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            onError={(e) => {
                                e.currentTarget.src = "https://github.com/identicons/sarhan44.png";
                            }}
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Why ClawCode Exists</p>
                        <h2 className="text-xl font-bold text-white mb-1">
                            Built by <a href="https://github.com/sarhan44" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline underline-offset-4 inline-flex items-center gap-1">Sarhan Khan <ExternalLink className="h-3.5 w-3.5" /></a>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                            Software engineer building AI-native apps & tools. ClawCode was created
                            to give every developer access to powerful AI coding workflows — without paywalls.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

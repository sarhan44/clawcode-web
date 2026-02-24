"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ScreenshotShowcase() {
    return (
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute inset-x-0 top-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00E5FF]/[0.05] to-transparent pointer-events-none -z-10" />

            <div className="mx-auto max-w-5xl flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Meet the Interface
                    </h2>
                    <p className="max-w-xl mx-auto text-lg text-gray-400">
                        A beautiful interactive TUI (Terminal User Interface) built for developers.
                        Toggle providers, review patches, undo actions, everything with keyboard shortcuts.
                    </p>
                </div>

                {/* Screenshot Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full border border-gray-700/60 rounded-xl bg-gray-900/40 p-1 md:p-1.5 overflow-hidden"
                    style={{
                        transform: "perspective(1200px) rotateX(2deg)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 229, 255, 0.15), 0 0 40px rgba(0, 229, 255, 0.1)",
                    }}
                >
                    {/* Subtle glowing underlay */}
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 via-transparent to-transparent blur-2xl z-[-1]" />

                    <div className="rounded-lg bg-[#0A0D14] font-mono text-sm text-gray-400 border border-gray-800 shadow-inner">
                        <div className="border-b border-gray-800 px-4 py-3 flex justify-between items-center bg-[#11151f]">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-[#00E5FF]">CLAWCODE</span>
                                <span className="text-gray-500 font-medium">TUI v1.0.0</span>
                            </div>
                            <div className="text-gray-600 text-[11px] uppercase tracking-wider">
                                System Active
                            </div>
                        </div>

                        <div className="border-b border-gray-800/60 px-4 py-2 text-gray-400 text-xs bg-[#0F1219]">
                            <span className="text-[#00E5FF]">provider:</span> groq-llama-3
                            <span className="mx-3 text-gray-700">|</span>
                            <span className="text-[#00E5FF]">directory:</span> /app/src/components
                        </div>

                        <div className="min-h-[300px] p-6 text-[13px] leading-relaxed relative flex flex-col gap-4">
                            <div className="flex flex-col gap-1 w-full max-w-lg mb-4">
                                <div className="text-green-400">[*] Refactoring components complete.</div>
                                <div className="text-gray-300 bg-gray-800/30 border border-green-900/30 p-3 rounded mt-2">
                                    <div className="text-green-400">+++ b/src/components/Nav.tsx</div>
                                    <div className="text-red-400">--- a/src/components/Nav.tsx</div>
                                    <div className="text-gray-400 font-mono mt-1 whitespace-pre">
                                        {`@@ -15,7 +15,7 @@
-  <div className="bg-white">
+  <div className="bg-[#0A0D14] dark:bg-black text-white">`}
                                    </div>
                                </div>
                            </div>

                            <div className="text-yellow-400 flex items-center mt-auto border border-yellow-900/30 bg-yellow-900/10 p-3 rounded w-fit">
                                [!] Warning: package.json missing peer dependencies.
                            </div>
                        </div>

                        <div className="border-t border-gray-800/80 px-4 py-2.5 text-gray-500 text-xs flex justify-between items-center bg-[#11151f]">
                            <div className="flex gap-4">
                                <span>(A)pply</span> <span>(R)eject</span> <span>(M)odify Task</span> <span>(Esc) Quit</span>
                            </div>
                            <div className="text-[#00E5FF]">Awaiting Input</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

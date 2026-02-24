"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
    { text: "clawcode ❯ Enter task (Enter to run)...", delay: 0 },
    { text: "> Rebuild the landing page to look premium", delay: 1000 },
    { text: "[*] Scanning project repository...", delay: 2500, type: 'info' },
    { text: "[*] Identified Next.js + Tailwind CSS", delay: 3500, type: 'info' },
    { text: "[~] Planning changes: pages/index.tsx, Tailwind config", delay: 4500, type: 'plan' },
    { text: "[+] Applying code diffs...", delay: 6000, type: 'action' },
    { text: "[✔] Successfully rebuilt landing page UI in Dark Mode", delay: 7500, type: 'success' },
];

export default function HeroTerminal() {
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (currentLine < lines.length - 1) {
            timeout = setTimeout(() => {
                setCurrentLine((prev) => prev + 1);
            }, lines[currentLine + 1].delay - lines[currentLine].delay);
        }
        return () => clearTimeout(timeout);
    }, [currentLine]);

    return (
        <div className="relative w-full max-w-lg mx-auto sm:max-w-xl md:max-w-2xl transform perspective-1000 rotate-x-2 rotate-y-[-2deg]">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#00E5FF]/30 to-transparent blur-2xl opacity-70"></div>

            <div className="relative rounded-2xl border border-gray-700 bg-[#0B0E17]/95 shadow-[0_0_30px_rgba(0,229,255,0.15)] shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* MacOS Style Header */}
                <div className="flex h-10 items-center border-b border-gray-800 px-4 bg-[#11151f]">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto flex items-center justify-center font-mono text-xs text-gray-400">
                        <span className="text-[#00E5FF] mr-1">clawcode</span> ~ zsh
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-[13px] leading-relaxed text-gray-300 min-h-[300px] sm:min-h-[320px] bg-[#0A0D14]">
                    <AnimatePresence>
                        {lines.slice(0, currentLine + 1).map((line, idx) => {
                            const isLast = idx === currentLine && idx !== lines.length - 1;
                            const isCommand = idx === 1;
                            const isPrompt = idx === 0;

                            let textColor = "text-gray-300";
                            if (line.type === 'info') textColor = "text-gray-400";
                            if (line.type === 'plan') textColor = "text-purple-400";
                            if (line.type === 'action') textColor = "text-blue-400";
                            if (line.type === 'success') textColor = "text-[#00E5FF]";

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-1 flex"
                                >
                                    <span className={`flex-1 ${textColor}`}>
                                        {isPrompt && <span className="text-[#00E5FF]">clawcode ❯ </span>}
                                        {isPrompt ? <span className="text-gray-500">Enter task...</span> : null}

                                        {isCommand ? (
                                            <span className="text-white relative">
                                                {line.text}
                                            </span>
                                        ) : !isPrompt ? (
                                            line.text
                                        ) : null}

                                        {/* Blinking Cursor */}
                                        {isLast && (
                                            <motion.span
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8 }}
                                                className="inline-block w-2 h-4 ml-1 align-middle bg-[#00E5FF]"
                                            />
                                        )}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

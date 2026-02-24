"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Github, BookOpen, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import HeroTerminal from '../components/HeroTerminal';
import SetupSteps from '../components/SetupSteps';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import ScreenshotShowcase from '../components/ScreenshotShowcase';
import OpenSourceSection from '../components/OpenSourceSection';
import BuiltBy from '../components/BuiltBy';
import Footer from '../components/Footer';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    const INSTALL_CMD = 'curl -fsSL https://raw.githubusercontent.com/sarhan44/clawcode/main/install.sh | bash';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(INSTALL_CMD);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <>
            <Head>
                <title>ClawCode | AI Coding Agent for Your Terminal</title>
                <meta name="description" content="Build, refactor, and fix from your terminal with ClawCode, the ultimate AI developer agent." />
            </Head>

            {/* Global Background Layer */}
            <div className="fixed inset-0 pointer-events-none bg-radial-gradient -z-50" />

            <Header />

            <main className="flex flex-col min-h-screen">
                {/* HERO SECTION */}
                <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 px-6 overflow-hidden border-b border-gray-800/50">
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#00E5FF]/20">
                                    <Terminal className="h-4 w-4" />
                                    Terminal Native, Agent Driven
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                                    Build faster.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">
                                        Never leave the CLI.
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                    ClawCode is an intelligent coding assistant that reads your project,
                                    plans patches, and securely applies them—all via an interactive Terminal UI.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-gray-900 transition-all ${copied
                                            ? 'bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.4)]'
                                            : 'bg-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]'
                                            }`}
                                        onClick={handleCopy}
                                    >
                                        {copied ? <CheckCircle2 className="h-5 w-5" /> : <Terminal className="h-5 w-5" />}
                                        <span>{copied ? 'Copied to Clipboard' : 'Copy Install Command'}</span>
                                    </motion.button>

                                    <motion.a
                                        href="/docs"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-gray-500 px-8 py-4 text-sm font-semibold text-white transition-all backdrop-blur-md"
                                    >
                                        <BookOpen className="h-5 w-5 text-gray-400" />
                                        <span>View Docs</span>
                                    </motion.a>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-800/60 max-w-md mx-auto lg:mx-0">
                                    <div className="font-mono text-sm p-4 rounded-xl bg-[#0B0E17]/80 backdrop-blur-xl border border-gray-800 text-gray-300 relative group overflow-hidden">
                                        <span className="text-[#00E5FF] select-none mr-2">$</span>
                                        <code className="select-all break-all text-xs">{INSTALL_CMD}</code>
                                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B0E17] to-transparent pointer-events-none rounded-r-xl" />
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide flex justify-center lg:justify-start items-center">
                                    Open-source <span className="mx-2 text-gray-700">|</span> MIT licensed <span className="mx-2 text-gray-700">|</span> Free forever
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Terminal Animation */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 w-full flex justify-center lg:justify-end"
                        >
                            <HeroTerminal />
                        </motion.div>

                    </div>
                </section>

                {/* GET STARTED STEPS SECTION */}
                <SetupSteps />

                {/* FEATURES GRID SECTION */}
                <FeatureGrid />

                {/* HOW IT WORKS SECTION */}
                <HowItWorks />

                {/* TUI SCREENSHOT & EXPLANATION */}
                <ScreenshotShowcase />

                {/* OPEN SOURCE SECTION */}
                <OpenSourceSection />

                {/* BUILT BY AUTHOR */}
                <BuiltBy />
            </main>

            <Footer />
        </>
    );
}

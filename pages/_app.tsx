import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>ClawCode – Open-Source AI Coding Agent for the Terminal</title>
                <meta name="description" content="ClawCode is an open-source, terminal-native AI coding agent that supports multiple providers like Groq, Gemini, Azure, and OpenRouter. Build your own AI coding workflow from the CLI." />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <div className="min-h-screen bg-[#0B0E17] text-gray-100 font-sans antialiased overflow-x-hidden">
                <Component {...pageProps} />
            </div>
        </>
    );
}

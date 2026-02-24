import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ClawCode — Premium AI Developer Agent</title>
                <meta name="description" content="AI coding agent that runs in your terminal..." />
            </Head>
            <div className="min-h-screen bg-[#0B0E17] text-gray-100 font-sans antialiased overflow-x-hidden">
                <Component {...pageProps} />
            </div>
        </>
    );
}

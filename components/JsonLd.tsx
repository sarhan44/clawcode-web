import React from 'react';

const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ClawCode',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'macOS, Linux, Windows',
    license: 'https://opensource.org/licenses/MIT',
    isAccessibleForFree: true,
    programmingLanguage: ['JavaScript', 'TypeScript'],
    author: {
        '@type': 'Person',
        name: 'Sarhan Khan',
        url: 'https://github.com/sarhan44',
    },
    codeRepository: 'https://github.com/sarhan44/clawcode',
    url: 'https://clawcode.vercel.app',
    description:
        'ClawCode is an open-source, terminal-native AI coding agent that supports multiple providers like Groq, Gemini, Azure, and OpenRouter. Build your own AI coding workflow from the CLI.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    softwareVersion: '1.0.0',
    downloadUrl: 'https://github.com/sarhan44/clawcode',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is ClawCode?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ClawCode is an open-source, terminal-native AI coding agent built with TypeScript. It connects to multiple LLM providers (Groq, Gemini, Azure OpenAI, OpenRouter) to help you plan, generate, and apply structured code patches — all from the CLI. It features persistent memory, diff previews, and a beautiful TUI interface.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is ClawCode free?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, ClawCode is completely free and open-source under the MIT license. There are no paywalls, no premium tiers, and no hidden limits. You bring your own API key for the AI provider of your choice.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does ClawCode support multiple AI providers?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. ClawCode supports Groq, Google Gemini, Azure OpenAI, and OpenRouter. You can switch providers at any time through the interactive TUI, and you can configure multiple providers simultaneously.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I run open-source models locally with ClawCode?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Since ClawCode supports OpenRouter and any OpenAI-compatible endpoint, you can connect it to locally-hosted models via tools like Ollama, LM Studio, or vLLM. This means you can run fully private, offline AI coding sessions.',
            },
        },
        {
            '@type': 'Question',
            name: 'How is ClawCode different from Claude Code?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'ClawCode is fully open-source (MIT licensed), runs locally without any backend dependency, and supports multiple AI providers — not just one. Unlike Claude Code, ClawCode gives you full control over your data, model choice, and workflow. It also features persistent project memory and structured diff previews for safe code changes.',
            },
        },
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClawCode',
    url: 'https://clawcode.vercel.app',
    description:
        'ClawCode is an open-source, terminal-native AI coding agent that supports multiple providers like Groq, Gemini, Azure, and OpenRouter.',
    author: {
        '@type': 'Person',
        name: 'Sarhan Khan',
    },
};

export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareAppSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}

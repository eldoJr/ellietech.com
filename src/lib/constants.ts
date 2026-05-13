export const SITE = {
    name: 'EllieTech',
    title: 'EllieTech — Modern Engineering Studio',
    description:
        'Full-stack web, mobile, and AI-powered systems — engineered with precision for startups and enterprises that demand performance.',
    url: 'https://ellietech.com',
    author: 'EllieTech',
    email: 'hello@ellietech.com',
    socials: {
        github: 'https://github.com/ellietech',
        twitter: 'https://twitter.com/ellietech',
        linkedin: 'https://linkedin.com/company/ellietech',
    },
} as const;

export const NAV_LINKS = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '/blog' },
] as const;

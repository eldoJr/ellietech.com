import type { Project } from '../lib/types';

export const projects: Project[] = [
    {
        title: 'AI-Powered Analytics Platform',
        description: 'Real-time data analytics with ML-driven insights for enterprise clients. Processing 10M+ events daily.',
        category: 'AI / SaaS',
        tech: ['Python', 'React', 'AWS', 'TensorFlow'],
    },
    {
        title: 'FinTech Mobile App',
        description: 'Cross-platform banking application with biometric auth, real-time transactions, and smart budgeting.',
        category: 'Mobile / FinTech',
        tech: ['React Native', 'Node.js', 'PostgreSQL'],
    },
    {
        title: 'E-Commerce Marketplace',
        description: 'High-traffic marketplace handling 50K+ concurrent users with sub-200ms response times.',
        category: 'Full-Stack / E-Commerce',
        tech: ['Next.js', 'GraphQL', 'Redis', 'Stripe'],
    },
];

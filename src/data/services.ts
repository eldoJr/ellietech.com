import type { Service } from '../lib/types';

export const services: Service[] = [
    {
        icon: '⚡',
        title: 'Full-Stack Development',
        description: 'End-to-end web applications built with modern frameworks. From APIs to pixel-perfect interfaces.',
        tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
        icon: '📱',
        title: 'Mobile Development',
        description: 'Cross-platform and native mobile apps that deliver seamless experiences on every device.',
        tags: ['React Native', 'iOS', 'Android', 'Flutter'],
    },
    {
        icon: '🧠',
        title: 'AI & Machine Learning',
        description: 'Intelligent systems that learn, adapt, and automate. From NLP to computer vision and beyond.',
        tags: ['Python', 'TensorFlow', 'OpenAI', 'LangChain'],
    },
    {
        icon: '☁️',
        title: 'Cloud & Infrastructure',
        description: 'Scalable, secure cloud architecture designed for high availability and global performance.',
        tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
];

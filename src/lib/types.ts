export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

export interface Project {
    title: string;
    description: string;
    category: string;
    tech: string[];
    image?: string;
    url?: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatar?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    socials?: SocialLink[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface BlogPost {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    heroImage?: string;
    tags: string[];
    draft: boolean;
}

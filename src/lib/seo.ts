import { SITE } from './constants';

interface SEOProps {
    title?: string;
    description?: string;
    ogImage?: string;
    canonicalURL?: string;
    type?: 'website' | 'article';
    publishedDate?: Date;
}

export function generateSEO(props: SEOProps) {
    const {
        title = SITE.title,
        description = SITE.description,
        ogImage = '/og-image.png',
        canonicalURL,
        type = 'website',
        publishedDate,
    } = props;

    return {
        title,
        description,
        ogImage: new URL(ogImage, SITE.url).toString(),
        canonicalURL,
        type,
        publishedDate: publishedDate?.toISOString(),
    };
}

export function generateJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        sameAs: Object.values(SITE.socials),
    };
}

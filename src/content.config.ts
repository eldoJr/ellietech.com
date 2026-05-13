import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const work = defineCollection({
    loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/work' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string().optional(),
        tech: z.array(z.string()).default([]),
        github: z.string().optional(),
        live: z.string().optional(),
        year: z.string().optional(),
        order: z.number().default(0),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog, work };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog };

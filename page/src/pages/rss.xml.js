import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Julián Úsuga Ortiz | Blog',
    description: 'Personal blog about data science, statistics, and software development',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        author: post.data.author,
        link: `/blog/${post.slug}/`,
        categories: post.data.categories,
      })),
    customData: `<language>en-us</language>`,
  });
}

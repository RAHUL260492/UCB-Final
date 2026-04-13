import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'astro',
    nodeVersion: '18',
    pagesDir: 'src/content/pages',
    models: {
        page: {
            type: 'page',
            urlPath: '/{slug}',
            filePath: 'src/content/pages/{slug}.json',
            fields: [
                { name: 'title', type: 'string', required: true },
                { name: 'hero', type: 'model', models: ['HeroBlock'] }
            ]
        },
        HeroBlock: {
            type: 'object',
            fields: [
                { name: 'badgeText', type: 'string', default: 'EST. 1993 • BOSTON, MA' },
                { name: 'headline', type: 'string', default: 'Affordable Degrees.' },
                { name: 'highlightedWord', type: 'string', default: 'Your Language.' },
                { name: 'subheadline', type: 'text', default: 'Join a bold, modern community...' },
                { name: 'primaryCtaText', type: 'string', default: 'Explore Programs' }
            ]
        }
    }
});

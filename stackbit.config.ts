export default {
    stackbitVersion: '~0.6.0',
    ssgName: 'vite',
    nodeVersion: '18',
    cmsName: 'git',
    devCommand: 'npm run dev',
    devUrl: 'http://localhost:5173',
    experimental: { ssg: false },
    models: {
        ProgramPage: {
            type: 'page',
            urlPath: '/programs/{slug}',
            filePath: 'src/content/pages/{slug}.json',
            fields: [
                { name: 'title', type: 'string', required: true },
                { name: 'badge', type: 'string' },
                { name: 'subtitle', type: 'string' },
                { name: 'tagline', type: 'string' },
                { name: 'taglineBody', type: 'text' },
                { name: 'outcomesIntro', type: 'text' },
                { name: 'pathwayTitle', type: 'string' },
                {
                    name: 'benefits',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string' },
                            { name: 'description', type: 'text' },
                            { name: 'icon', type: 'string' }
                        ]
                    }
                },
                {
                    name: 'stats',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'label', type: 'string' },
                            { name: 'value', type: 'string' },
                            { name: 'icon', type: 'string' },
                            { name: 'sub', type: 'string' }
                        ]
                    }
                },
                {
                    name: 'courses',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string' },
                            { name: 'description', type: 'text' }
                        ]
                    }
                },
                {
                    name: 'outcomes',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string' },
                            { name: 'description', type: 'text' }
                        ]
                    }
                },
                {
                    name: 'faqs',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'q', type: 'string', label: 'Question' },
                            { name: 'a', type: 'text', label: 'Answer' }
                        ]
                    }
                }
            ]
        }
    }
};

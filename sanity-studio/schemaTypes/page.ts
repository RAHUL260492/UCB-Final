import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Site Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'SEO Description', type: 'text', rows: 2 }),
    
    // Page Builder Blocks
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        {
          name: 'hero',
          title: 'Hero Section',
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
            { name: 'ctaText', title: 'Button Text', type: 'string' },
            { name: 'ctaLink', title: 'Button Link', type: 'string' },
            { name: 'background', title: 'Background Image', type: 'image', options: { hotspot: true } }
          ]
        },
        {
          name: 'textBlock',
          title: 'Text Block',
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'content', title: 'Body Content', type: 'text' }
          ]
        },
        {
          name: 'statsSection',
          title: 'Stats Grid',
          type: 'object',
          fields: [
            {
              name: 'stats',
              title: 'Stats',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  { name: 'value', title: 'Value', type: 'string' },
                  { name: 'label', title: 'Label', type: 'string' },
                  { name: 'icon', title: 'Lucide Icon Name', type: 'string' }
                ]
              }]
            }
          ]
        }
      ]
    })
  ]
})

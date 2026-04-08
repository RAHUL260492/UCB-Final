import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Academic Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'type', title: 'Program Type', type: 'string', options: { list: ['Degree', 'Certificate', 'Continuing Education'] } }),
    defineField({ name: 'badge', title: 'Badge/Label', type: 'string', description: 'e.g. Associate Degree' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    
    // Tagline section
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'taglineBody', title: 'Tagline Body', type: 'text', rows: 3 }),

    // Benefits array
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text', rows: 2 },
          { name: 'icon', title: 'Icon Name (Lucide React)', type: 'string', description: 'e.g., Award, Clock, Users, Globe' }
        ]
      }]
    }),

    // Achievements
    defineField({
      name: 'achievements',
      title: 'What You Will Achieve',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'heading', title: 'Heading', type: 'string' },
          { name: 'icon', title: 'Icon Name (Lucide React)', type: 'string' },
          { name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] }
        ]
      }]
    }),
    defineField({ name: 'achievementNote', title: 'Achievement Note', type: 'string' }),

    // Stats
    defineField({
      name: 'stats',
      title: 'Program Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'sub', title: 'Subtext', type: 'string' },
          { name: 'icon', title: 'Icon Name', type: 'string' }
        ]
      }]
    }),

    // Courses
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Course Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text', rows: 2 }
        ]
      }]
    }),

    // Outcomes
    defineField({ name: 'outcomesIntro', title: 'Outcomes Intro', type: 'text', rows: 2 }),
    defineField({
      name: 'outcomes',
      title: 'Career Outcomes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Outcome Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text', rows: 2 }
        ]
      }]
    }),
    defineField({ name: 'outcomeTags', title: 'Outcome Tags', type: 'array', of: [{ type: 'string' }] }),

    // For Whom
    defineField({ name: 'forWhom', title: 'Is This Right For You? (Items)', type: 'array', of: [{ type: 'string' }] }),

    // Pathway
    defineField({ name: 'pathwayTitle', title: 'Pathway Title', type: 'string' }),
    defineField({ name: 'pathwayDescription', title: 'Pathway Description', type: 'text', rows: 2 }),
    defineField({
      name: 'pathwaySteps',
      title: 'Pathway Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Step Label', type: 'string' },
          { name: 'credits', title: 'Credits/Info', type: 'string' },
          { name: 'active', title: 'Is Active Highlight?', type: 'boolean' }
        ]
      }]
    }),

    // Testimonial
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'role', title: 'Role/Context', type: 'string' },
        { name: 'image', title: 'Student Image', type: 'image', options: { hotspot: true } }
      ]
    }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'q', title: 'Question', type: 'string' },
          { name: 'a', title: 'Answer', type: 'text', rows: 3 }
        ]
      }]
    }),

    // CTA
    defineField({ name: 'ctaRequirements', title: 'CTA Requirements', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'heroImage',
    },
  },
})

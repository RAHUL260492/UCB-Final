import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal reference name',
      initialValue: 'Homepage Settings'
    }),
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'The main heading on the homepage'
    }),
    defineField({
      name: 'heroTaglines',
      title: 'Hero Taglines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Animated rotating words under the heading'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'financialAidTitle',
      title: 'Financial Aid Title',
      type: 'string',
    }),
    defineField({
      name: 'financialAidDescription',
      title: 'Financial Aid Description',
      type: 'text',
    }),
    defineField({
      name: 'financialAidHighlight',
      title: 'Financial Aid Highlight Text',
      type: 'string',
    })
  ],
})

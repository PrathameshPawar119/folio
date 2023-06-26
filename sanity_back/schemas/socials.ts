import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socials',
  title: 'socials',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },

  ]


})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'projects',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "summary",
      title: "Summary",
      type: "text"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        { type: "reference", to: { type: "skills" } }
      ]
    },
    {
      name: "linktoBuild",
      title: "LinkToBuild",
      type: "url"
    }
  ]


})

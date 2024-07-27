import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skills',
  title: 'skills',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "heroImage",
      title: "HeroImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name:"toPresent",
      title:"ToPresent",
      type:"boolean",
      options:{
        default:true
      }
    }

  ]


})

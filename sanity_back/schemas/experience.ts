import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string"
    },
    {
      name: "company",
      title: "company",
      type: "string"
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date"
    },
    {
      name: "currentlyWorkingHere",
      title: "CurrentlyWorkingHere",
      type: "boolean"
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
      name: "points",
      title: "Title",
      type: "array",
      of: [{ type: "string" }]
    }
  ]


})

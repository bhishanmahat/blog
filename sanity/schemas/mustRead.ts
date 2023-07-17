import { defineField, defineType } from "sanity";

export default defineType({
  name: "mustRead",
  title: "Must Read",
  type: "document",
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: "string",
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "post",
      title: "Must Read Posts",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
      validation: (Rule) => Rule.required()
    }),
  ],
});

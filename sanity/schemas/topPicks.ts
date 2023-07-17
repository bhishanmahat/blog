import { defineField, defineType } from "sanity";

export default defineType({
  name: "topPicks",
  title: "Top Picks",
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
      title: "Top Picks Post",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
      validation: (Rule) => Rule.required()
    }),
  ],
});

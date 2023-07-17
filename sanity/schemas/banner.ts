import { defineField, defineType } from "sanity";

export default defineType({
    name: "banner",
    title: "Banner",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'post',
            title: 'Banner Post',
            type: "reference",
            to: { type: "post"},
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
          title: "title",
          post: "post.name",
          media: "mainImage",
        },
        prepare(selection) {
          const { post } = selection;
          return { ...selection, subtitle: post && `by ${post}` };
        },
      },
});

// import { defineCollection, z } from 'astro:content';

// const blogCollection = defineCollection({
//   type: 'content',
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       date: z.date(),
//       description: z.string(),
//       image: image().refine((img) => img.width < 10000, {
//         message: 'Image width must be less than 10000px',
//       }),

//       //relation to author
//       author: z.string(),

//       //relation to tags
//       tags: z.array(z.string()),
//     }),
// });

// export const collections = {
//   blog: blogCollection,
// };

import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),

      // Relación
      // author: z.string(),
      author: reference('author'),

      // Relación
      tags: z.array(z.string()),

      // Boolean
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
      bio: z.string(),
      subtitle: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};

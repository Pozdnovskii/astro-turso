import { defineAction } from "astro:actions";
import { db, Comment } from "astro:db";
import { z } from "astro:schema";

export const server = {
  addComment: defineAction({
    accept: "form",
    input: z.object({
      author: z.string(),
      body: z.string(),
    }),
    handler: async ({ author, body }) => {
      await db.insert(Comment).values({ author, body });
    },
  }),
};

import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      const today = new Date();
      const date = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      return {
        greeting: `${input.text}, nous somme le ${dateTime}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return [
      {
        id: 1,
        name: "John Doe",
        title: "CEO",
        createdAt: new Date(),
      },
      {
        id: 2,
        name: "Jane Doe",
        title: "CTO",
        createdAt: new Date(),
      },
    ]
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

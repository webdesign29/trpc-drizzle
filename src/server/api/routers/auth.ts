import { Session } from "next-auth/core/types";
import { getToken, encode, JWT } from "next-auth/jwt";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getProfile: protectedProcedure
    .input(z.undefined())
    .query(async ({ input, ctx }) => {
      return ctx.session as unknown as Session || undefined;
    }),

  getUserInfo: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ input, ctx }) => {
      return {
        input: input.email,
        ok: true,
        user: ctx?.session?.user || null
      };
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  })
});

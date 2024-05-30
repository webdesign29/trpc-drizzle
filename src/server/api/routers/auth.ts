import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { schema } from "~/server/db";
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { Session } from 'next-auth';

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
  }),
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(3),
        first_name: z.string().min(1),
        last_name: z.string().min(1),
        // username: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // check if user already exists
      const users = await ctx.db
        .select()
        .from(schema.users)
        .where(eq(schema.users.email, input.email));

      if (users[0]) {
        return { success: false, code: "USER_EXISTS" };
      }

      const salt = await bcrypt.genSalt(10);
      const passwordEncrypted = await bcrypt.hash(input.password, salt);

      const newUsers = await ctx.db
        .insert(schema.users)
        .values({
          password: passwordEncrypted,
          email: input.email,
          // firstName: input.first_name,
          // lastName: input.last_name,
          name: `${input.first_name} ${input.last_name}`,
          emailVerified: new Date(),
        })
        .returning();

      const user = newUsers[0];

      if (!user) {
        return { success: false, code: "USER_NOT_CREATED" };
      }

      const account = await ctx.db
        .insert(schema.accounts)
        .values({
          userId: user.id,
          type: "email",
          provider: "credentials",
          providerAccountId: user.id,
        })
        .returning();

      if (!account[0]) {
        return { success: false, code: "ACCOUNT_NOT_CREATED" };
      }

      return {
        success: true,
        profile: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    }),
});

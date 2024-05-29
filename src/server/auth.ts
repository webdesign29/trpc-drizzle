import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import bcrypt from "bcryptjs";
import { type GetServerSidePropsContext } from "next";
import { db } from "~/db";
// const bcrypt = require("bcrypt");

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    // role: UserRole;
    role: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       console.log('Have session', session, 'and user', user, 'so setting session.user.id')
  //       session.user.id = user.id;
  //       // session.user.role = user.role; <-- put other properties on the session here
  //     }
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/login",
    newUser: "/inscription",
  },
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.role = token.role as string;
      }
      return session;
    },
    // callbacks: {
    //   session: ({ session, user }) => ({
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: user.id,
    //     },
    //   }),
    // },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = (user as any).roles
          .map((role: any) => {
            //@ts-ignore
            return role.name;
          })
          .join(";");
        token.role = token.role || "user";
      }
      return token;
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Login", { credentials });
        const user = {
          id: "1",
          name: "J Smith",
          email: "",
          password: "$2a$10$3Q7Z6z1",
          roles: [{ name: "user" }],
        }
        // const user = await db.query.user.findUnique({});

        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com", roles: ["user"] }
        // return user;
        if (!user) {
          throw new Error("No user found");
        }

        // if (process.env.npm_execpath?.includes('bun')) {
        //   const passwordMatch = await Bun.password.verify(
        //     credentials?.password as string,
        //     user.password as string
        //   );
        //   if (!passwordMatch) {
        //     throw new Error("Invalid password");
        //   }
        // } else {
        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          user.password as string,
        );
        console.log("passwordMatch", passwordMatch);
        console.log("Supplied", {
          password: credentials?.password as string,
          hash: user.password as string,
        });
        // const passwordMatch = true
        if (!passwordMatch) {
          throw new Error("Invalid password");
        }
        // }
        return {
          ...user,
          role: user.roles.map((role) => role.name).join(";"),
        };
      },
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     **/
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
// export const getServerAuthSession = (ctx: {
//   req: GetServerSidePropsContext["req"];
//   res: GetServerSidePropsContext["res"];
// }) => {
//   console.log("getServerAuthSession", ctx.req, ctx.res);
//   return getServerSession(ctx.req, ctx.res, authOptions);
// };

export const getServerAuthSession = () => getServerSession(authOptions);
// export const getServerAuthSession = (ctx: {
//   req: GetServerSidePropsContext["req"];
//   res: GetServerSidePropsContext["res"];
// }) => {
//   return getServerSession(ctx.req, ctx.res, authOptions);
// };

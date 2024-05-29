import { defineConfig } from "drizzle-kit";

const uri = process.env.DATABASE_URL!;

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: uri,
  },
});
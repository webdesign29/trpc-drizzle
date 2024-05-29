export { drizzle } from "drizzle-orm/postgres-js";
export * as schema from "../../drizzle/schema";
import postgres from "postgres";

const connectionString = process.env.MAIN_PG_CONNECTION_STRING;
if (!connectionString) {
  throw new Error("MAIN_PG_CONNECTION_STRING is not defined");
}
const client = postgres(connectionString);

export { client };

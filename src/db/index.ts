import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schemas from './../../drizzle/schema'

const connectionString = process.env.DATABASE_URL

const client = postgres({
  db: connectionString
})
export const db = drizzle(client, {
  schema: schemas
});

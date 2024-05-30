import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schemas from '../../../drizzle/schema.ts'
import * as relations from '../../../drizzle/relations.ts'
import { client } from '~/server/drizzle.ts';

export const db = drizzle(client, {
  schema: {
    ...schemas,
    ...relations
  }
});

import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from '../../../drizzle/schema.ts'
import * as relations from '../../../drizzle/relations.ts'
import { client } from '~/server/drizzle.ts';

export {
  schema,
  relations
}

export const db = drizzle(client, {
  schema: {
    ...schema,
    ...relations
  }
});

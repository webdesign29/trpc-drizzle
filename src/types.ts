import { type ZodObject, type ZodTypeAny, z } from "zod";


export enum Theme {
  dark = "dark",
  light = "light",
}

export type AppProps = {
  APP: {
    NAME: string;
    URL: string;
    THEME: {
      LOGIN_BG?: string;
    };
    BRAND: string;
    LOGO: string;
    MAIN_NAV: {
      title: string;
      href?: string;
      children?: {
        title: string;
        href?: string;
        description: string;
        items: any[];
      }[];
    }[];
  };
};

export type AppActions = {
  APP: {
    setName: (name: string) => void;
  };
};

/** ADD YOUR OWN SELECTION OF PRIMITIVES **/
type Primitives =
  | boolean
  | number
  | bigint
  | string
  | symbol
  | void
  | null
  | undefined
  | Date
  | Buffer
  | Function
  | RegExp;

export type RecursivePartial<T> = T extends Primitives
  ? T /** RESOLVE PRIMITIVE TO ITSELF */
  : T extends Array<infer U>
  ? Array<RecursivePartial<U>> /** RESOLVE ARRAY */
  : T extends Map<infer K, infer V>
  ? Map<RecursivePartial<K>, RecursivePartial<V>> /** RESOLVE MAP */
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<RecursivePartial<K>, RecursivePartial<V>> /** RESOLVE WEAK-MAP */
  : T extends Set<infer V>
  ? Set<RecursivePartial<V>> /** RESOLVE SET */
  : T extends WeakSet<infer V>
  ? WeakSet<RecursivePartial<V>> /** RESOLVE WEAK-SET */
  : T extends object
  ? {
    [K in keyof T]?: RecursivePartial<T[K]> /** RESOLVES OBJECT */;
  }
  : T; /** FALLBACK TO ITSELF IF NOT HANDLED */

// Define type for ZodRawShape
type ZodRawShape<T> = {
  [K in keyof T]: T[K] extends ZodTypeAny ? T[K] : never;
};

// // Function to generate Zod schema and its raw shape from Prisma type
// export function generateZodSchema<T>(
//   prismaType: T
// ): { schema: ZodObject<ZodRawShape<T>>, shape: ZodRawShape<T> } {
//   const schema: Partial<ZodRawShape<T>> = {};
//   for (const key in prismaType) {
//     const field = prismaType[key];
//     if (typeof field === 'object' && field !== null && !Array.isArray(field)) {
//       // Assuming all fields are required
//       if (field.isRequired) {
//         schema[key as keyof T] = z.string(); // You can add more sophisticated handling based on field types
//       }
//     }
//   }
//   return { schema: z.object(schema) as z.ZodObject<ZodRawShape<T>>, shape: schema as ZodRawShape<T> };
// }
//
// export function cleanUpSchema<T extends z.ZodTypeAny>(schema: T): T {
//   if (schema instanceof z.ZodObject) {
//     const cleanedShape = Object.fromEntries(
//       Object.entries(schema.shape).map(([key, value]) => {
//         if (value instanceof z.ZodObject) {
//           return [key, cleanUpSchema(value)];
//         }
//         return [key, value];
//       })
//     );
//     return schema.shape === cleanedShape ? schema : new z.ZodObject(cleanedShape, schema.unknownKeys, schema.catchall);
//   }
//   return schema;
// }

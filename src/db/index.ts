import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { Env } from "../env";
import * as schema from "./schema";

export { schema };

export function getDbClient(env: Env) {
  const connectionString = env.DATABASE_URL;
  const client = postgres(connectionString);
  return drizzle(client, { schema });
}

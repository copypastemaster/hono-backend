import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import { PgTransaction } from "drizzle-orm/pg-core";
import { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js"

const client = new SQL(process.env.DATABASE_URL!);

const db = drizzle({ client });

// Proper tx type for transactions
export type DbTransaction = PgTransaction<
    PostgresJsQueryResultHKT,
    Record<string, never>,
    any
>;

export default db;

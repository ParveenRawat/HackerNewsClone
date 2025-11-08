import { sql } from "drizzle-orm";
import type { SQL } from "drizzle-orm";
import type { PgColumn } from "drizzle-orm/pg-core";

export function getISOFormatDateQuery(dateTimeCoumn: PgColumn): SQL<string> {
  return sql<string>`to_char(${dateTimeCoumn}, 'YYYY-MM-DD"T"HH24:MI:SS"Z"')`;
}
